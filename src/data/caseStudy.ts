export interface CaseStudyPhase {
  phase: string;
  title: string;
  description: string;
  metrics: string;
  icon: string;
  isEngineCore?: boolean;
}

export interface StatementOpsShowcase {
  appName: string;
  imageUrl: string;
  imageAlt: string;
  documentLabel: string;
  highlights: string[];
}

export interface CaseStudyData {
  badge: string;
  title: string;
  subtitle: string;
  efficiencyHighlight: {
    percentage: string;
    label: string;
    sublabel: string;
  };
  phases: CaseStudyPhase[];
  terminal: {
    filename: string;
    status: string;
  };
  csvDownloadPath: string;
  showcase: StatementOpsShowcase;
}

export const caseStudyData: CaseStudyData = {
  badge: "KEY ACHIEVEMENT // ENTER AND POST LLC",
  title: "Statement Ops — Financial Extraction & Reconciliation Engine",
  subtitle:
    "Engineered and deployed Statement Ops, an in-house OCR extraction and mathematical verification platform that parses multi-page bank statements into validated transactions, flags balance variances, and exports Excel (.xlsx), CSV, and QuickBooks-ready batches.",
  efficiencyHighlight: {
    percentage: "85%",
    label: "Time Reduction",
    sublabel: "From 45 min → 6.2 min / batch",
  },
  phases: [
    {
      phase: "01 // INPUT",
      title: "Multi-Page Bank Statements",
      description:
        "Scanned multi-page client bank statements and PDFs previously required slow manual line-by-line entry and manual balance checking by senior bookkeepers.",
      metrics: "Manual baseline: ~45 min / batch",
      icon: "receipt_long",
    },
    {
      phase: "02 // EXTRACTION & RECONCILIATION",
      title: "OCR Parsing & Variance Checks",
      description:
        "Automated table extraction paired with live mathematical balance checks (Closing = Opening + Credits − Debits), running-balance alerts, and one-click debit/credit swap.",
      metrics: "Auto-flags discrepancy & review rows",
      icon: "neurology",
      isEngineCore: true,
    },
    {
      phase: "03 // EXPORT",
      title: "Validated Accounting Workbooks",
      description:
        "Bulk-approve validated transactions and export clean Excel (.xlsx), CSV, and PDF summary workbooks ready for QuickBooks import with full audit trail.",
      metrics: "85% time saved • Reconciled totals",
      icon: "verified",
    },
  ],
  terminal: {
    filename: "statement_ops_engine.py",
    status: "STATUS: PRODUCTION",
  },
  csvDownloadPath: "/quickbooks_import_batch_ready.csv",
  showcase: {
    appName: "Statement Ops — Financial Extraction Engine",
    imageUrl: "/projects/statement-ops-ocr.jpg",
    imageAlt:
      "Statement Ops Financial Extraction Engine showing mathematical balance reconciliation, discrepancy alerts, and validated bank statement transactions",
    documentLabel: "10. Found Bank State - Oct-2026 - 9378.pdf • 4 Pages",
    highlights: [
      "Mathematical Balance Check (Opening + Credits − Debits)",
      "Automated Discrepancy Flagging & Debit/Credit Swap",
      "Bulk Approve Validated Rows (31 Validated / 9 Review)",
      "One-Click Export to Excel (.xlsx), CSV & PDF Summary",
    ],
  },
};
