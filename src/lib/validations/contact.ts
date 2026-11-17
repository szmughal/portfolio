import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid work email address.' }),
  scope: z.enum([
    'enterprise-role',
    'automation',
    'erp-odoo',
    'infrastructure',
    'seo-web',
  ]),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
  // Honeypot field - must be empty
  website_honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
