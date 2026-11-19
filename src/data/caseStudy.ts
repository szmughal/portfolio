export interface CaseStudyPhase {
  phase: string;
  title: string;
  description: string;
  metrics: string;
  icon: string;
  isEngineCore?: boolean;
}

export interface SampleExtractionRow {
  description: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  account: string;
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
  sampleExtractionRows: SampleExtractionRow[];
}

export const caseStudyData: CaseStudyData = {
  badge: "KEY ACHIEVEMENT // ENTER AND POST LLC",
  title: "Accounting OCR Document Extraction Pipeline",
  subtitle:
    "Engineered and deployed an in-house OCR pipeline that parses multi-page scanned PDF invoices and bank statements into structured Excel (.xlsx/.csv) batches ready for QuickBooks—eliminating manual transcription errors.",
  efficiencyHighlight: {
    percentage: "85%",
    label: "Time Reduction",
    sublabel: "From 45 min → 6.2 min / batch",
  },
  phases: [
    {
      phase: "01 // INPUT",
      title: "Scanned PDFs & Statements",
      description:
        "Multi-page vendor invoices and bank statements previously required line-by-line manual transcription by the accounting team.",
      metrics: "Manual baseline: ~45 min / batch",
      icon: "receipt_long",
    },
    {
      phase: "02 // OCR ENGINE",
      title: "In-House Python Pipeline",
      description:
        "Image deskewing, table boundary detection, optical text parsing, and automated chart-of-accounts rule matching.",
      metrics: "Line-item totals cross-checked",
      icon: "neurology",
      isEngineCore: true,
    },
    {
      phase: "03 // EXPORT",
      title: "QuickBooks-Ready Workbooks",
      description:
        "Exports clean, structured .xlsx and .csv batches mapped directly to QuickBooks expense accounts with zero manual re-keying.",
      metrics: "85% time saved • Reconciled totals",
      icon: "verified",
    },
  ],
  terminal: {
    filename: "ocr_pipeline_worker.py",
    status: "STATUS: PRODUCTION",
  },
  csvDownloadPath: "/quickbooks_import_batch_ready.csv",
  sampleExtractionRows: [
    {
      description: "CAT6 SHIELDED ETHERNET CABLE 1000FT",
      quantity: 4,
      unitPrice: 145.0,
      lineTotal: 580.0,
      account: "50000 - IT Hardware & Infrastructure Expense",
    },
    {
      description: "CISCO SFP+ 10GBASE-SR TRANSCEIVER",
      quantity: 8,
      unitPrice: 42.5,
      lineTotal: 340.0,
      account: "50000 - IT Hardware & Infrastructure Expense",
    },
    {
      description: "SERVER RACK MOUNT SHELF 2U",
      quantity: 2,
      unitPrice: 68.0,
      lineTotal: 136.0,
      account: "50000 - IT Hardware & Infrastructure Expense",
    },
    {
      description: "EATON 1500VA UPS BATTERY PACK",
      quantity: 1,
      unitPrice: 389.0,
      lineTotal: 389.0,
      account: "50000 - IT Hardware & Infrastructure Expense",
    },
  ],
};
