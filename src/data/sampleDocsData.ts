export interface SampleDoc {
  id: string;
  name: string;
  type: string;
  fileSize: string;
  pages: number;
  extractedMetadata: {
    parties: string;
    effectiveDate: string;
    annualValue: string;
    governingLaw: string;
    terminationNotice: string;
    liabilityCap: string;
    slaAvailability: string;
  };
  sampleQuestions: {
    q: string;
    answer: string;
    sourceSnippet: string;
    page: number;
    confidence: number;
  }[];
}

export const sampleDocs: SampleDoc[] = [
  {
    id: 'doc-sla-contract',
    name: 'MZ-Enterprise-Cloud-SLA-Agreement-2026.pdf',
    type: 'Legal Service Level Agreement (PDF)',
    fileSize: '1.8 MB',
    pages: 14,
    extractedMetadata: {
      parties: 'MZ.AI Tech Solution Provider vs. Global HyperScale Corp',
      effectiveDate: 'January 1, 2026 (Active)',
      annualValue: '$148,000 USD / yr',
      governingLaw: 'State of Delaware, Commercial Code',
      terminationNotice: '60 Calendar Days Written Notice',
      liabilityCap: '12 Months Preceding Service Fees ($148,000)',
      slaAvailability: '99.95% Monthly Uptime Guarantee'
    },
    sampleQuestions: [
      {
        q: 'What is the financial credit payout if uptime drops below 99.5%?',
        answer: 'If monthly uptime falls between 99.0% and 99.49%, customer is entitled to a 15% service fee credit. If uptime falls below 99.0%, customer is entitled to a 30% service fee credit applied to the subsequent billing cycle.',
        sourceSnippet: 'Section 4.3 (Service Credits): "...Any monthly measurement interval falling between 99.00% and 99.49% shall automatically trigger a fifteen percent (15%) service fee rebate credit..."',
        page: 6,
        confidence: 99.4
      },
      {
        q: 'What is the required notice period for termination for convenience?',
        answer: 'Either party may terminate the agreement for convenience by delivering at least sixty (60) calendar days prior written notice to the designated legal notices address.',
        sourceSnippet: 'Section 11.2 (Termination for Convenience): "...may terminate this Master Services Agreement without cause upon sixty (60) calendar days advance written notice..."',
        page: 11,
        confidence: 98.7
      },
      {
        q: 'Are catastrophic cybersecurity breaches excluded from the liability cap?',
        answer: 'Yes. Section 9.4 explicitly carves out gross negligence, intentional misconduct, and indemnification obligations from the standard 12-month liability ceiling.',
        sourceSnippet: 'Section 9.4 (Carve-outs): "The limitations of liability in Section 9.1 shall not apply to: (i) gross negligence; (ii) willful misconduct; or (iii) indemnification claims under Section 8."',
        page: 9,
        confidence: 97.9
      }
    ]
  },
  {
    id: 'doc-sentinel-invoice',
    name: 'INV-2026-8942-Hardware-Sensor-Consignment.pdf',
    type: 'Commercial Tax Invoice & BOM (PDF)',
    fileSize: '420 KB',
    pages: 2,
    extractedMetadata: {
      parties: 'Sensirion Tech AG to MZ.AI Tech Solution Provider',
      effectiveDate: 'October 8, 2026',
      annualValue: '$34,920.00 Net (Due in 30 Days)',
      governingLaw: 'Uniform Commercial Code (Sales)',
      terminationNotice: 'Standard 14-Day Defect Return Policy',
      liabilityCap: 'Invoice Total ($34,920.00)',
      slaAvailability: 'Hardware MTBF 120,000 Hours'
    },
    sampleQuestions: [
      {
        q: 'How many dual-technology microwave/PIR sensors were delivered on this invoice?',
        answer: 'A total of 80 units of the DEV-PIR-301 Dual-Tech Microwave/PIR Sensor were billed at $145.00 each, totaling $11,600.00.',
        sourceSnippet: 'Line Item #3: "DEV-PIR-301 / Industrial Dual Microwave-PIR Sensor / Qty: 80 / Unit: $145.00 / Subtotal: $11,600.00"',
        page: 1,
        confidence: 99.8
      },
      {
        q: 'What are the payment terms and banking IBAN destination?',
        answer: 'Net 30 days via wire transfer to Citibank Zurich IBAN CH93 0000 8920 1928 3491.',
        sourceSnippet: 'Payment Terms: "Net 30. Wire transfer to Citibank Zurich / Routing: 021000089 / IBAN: CH93 0000 8920 1928 3491"',
        page: 2,
        confidence: 99.1
      }
    ]
  }
];
