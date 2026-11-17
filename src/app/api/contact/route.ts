import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { Resend } from 'resend';

// Simple in-memory rate limiting: max 5 requests per 10 minutes per IP
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestMap.get(ip);

  if (!record) {
    ipRequestMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    ipRequestMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction and Rate Limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a few minutes before transmitting another packet.' },
        { status: 429 }
      );
    }

    // 2. Parse & Validate request body
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid packet data.', issues: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, scope, message, website_honeypot } = result.data;

    // 3. Honeypot check (anti-bot)
    // If the hidden honeypot field is filled out, reject silently with 200 OK
    if (website_honeypot && website_honeypot.trim().length > 0) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({ success: true, message: 'Packet received.' });
    }

    // 4. Send via Resend (if API key is present)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: 'NOC Dispatch <onboarding@resend.dev>',
        to: ['saad.zafar060@gmail.com'],
        replyTo: email,
        subject: `[NOC Inbound] New Inquiry from ${name} (${scope})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <div style="padding-bottom: 16px; border-bottom: 1px solid #e2e8f0; margin-bottom: 20px;">
              <span style="display: inline-block; padding: 4px 10px; border-radius: 6px; background: #e0f2fe; color: #0369a1; font-size: 11px; font-weight: bold; font-family: monospace;">NOC // INITIATE_SESSION</span>
              <h2 style="color: #0f172a; margin: 8px 0 0 0; font-size: 20px;">New Consultation Request</h2>
            </div>
            
            <p><strong>Sender:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Scope:</strong> ${scope}</p>
            <p><strong>IP Address:</strong> ${ip}</p>
            
            <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
              <p style="margin: 0; font-size: 11px; color: #64748b; font-family: monospace; text-transform: uppercase; font-weight: bold;">Packet Content:</p>
              <p style="margin: 8px 0 0 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      });
    } else {
      console.log('--- LOCAL DEV / DEMO CONTACT PACKET ---');
      console.log({ name, email, scope, message, ip });
    }

    return NextResponse.json({
      success: true,
      message: '>>> Packet received. Saad Zafar has been notified via priority relay. Expect response within 2-4 hours.',
    });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing packet transmission.' },
      { status: 500 }
    );
  }
}
