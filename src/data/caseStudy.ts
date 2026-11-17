export interface CaseStudyPhase {
  phase: string;
  title: string;
  description: string;
  metrics: string;
  icon: string;
  isEngineCore?: boolean;
}

export interface CaseStudyData {
  badge: string;
  title: string;
  efficiencyHighlight: {
    percentage: string;
    label: string;
    sublabel: string;
  };
  phases: CaseStudyPhase[];
  terminal: {
    filename: string;
    status: string;
    code: string;
  };
}

export const caseStudyData: CaseStudyData = {
  badge: "MISSION CASE STUDY // AUTOMATION",
  title: "Enterprise Accounting OCR & Ledger Automation",
  efficiencyHighlight: {
    percentage: "85%",
    label: "Reductive Efficiency",
    sublabel: "From 45 mins → 6.2 mins / batch",
  },
  phases: [
    {
      phase: "PHASE 01 // INPUT",
      title: "Raw Scans & PDFs",
      description:
        "Legacy manual data entry: accountants manually typed vendor line-items, tax numbers, and dates from varied receipt layouts.",
      metrics: "Latency: ~45 min / batch • Error Rate: 7.2%",
      icon: "receipt_long",
    },
    {
      phase: "PHASE 02 // PARSER",
      title: "Agentic Python OCR",
      description:
        "Custom Python pipeline utilizing OpenCV image preprocessing, Tesseract layout analysis, regex taxonomy parser, and fuzzy table boundary matching.",
      metrics: "Confidence Score: 99.4% • Concurrent Workers",
      icon: "neurology",
      isEngineCore: true,
    },
    {
      phase: "PHASE 03 // DISPATCH",
      title: "Structured API Ingest",
      description:
        "Auto-formatted QuickBooks-ready Excel payload and direct REST API push to enterprise ERP with automated journal ledger balancing.",
      metrics: "Zero Discrepancies • 100% Tax Audit Trace",
      icon: "verified",
    },
  ],
  terminal: {
    filename: "ocr_pipeline_worker.py",
    status: "STATUS: EXECUTING",
    code: `import cv2, pytesseract, re, json
# Preprocess invoice scan: adaptive thresholding & deskewing
def extract_invoice_telemetry(doc_stream):
    preprocessed = cv2.bilateralFilter(cv2.cvtColor(doc_stream, cv2.COLOR_BGR2GRAY), 9, 75, 75)
    ocr_payload = pytesseract.image_to_data(preprocessed, output_type=pytesseract.Output.DICT)
    
    # Regex schema matching line-items and tax vouchers
    ledger_items = parse_tax_table(ocr_payload, regex=r"(\\d{2}/\\d{2}/\\d{4})\\s+([A-Z0-9\\s]+)\\s+(\\$?\\d+\\.\\d{2})")
    return erp_client.post("/v1/accounting/direct-sync", json={"batch_id": "SZ-8849", "records": ledger_items})
>>> [OK 200] 142 records ingested into Odoo/QuickBooks in 1.48s. Drift: 0.00%`,
  },
};
