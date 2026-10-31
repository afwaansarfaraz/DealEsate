export interface ProcessStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  keyAction: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Source',
    tagline: 'Multi-Portal Discovery',
    description:
      'Continuous identification of new owner listings across premier Indian property platforms and verified partner feeds.',
    keyAction: 'System scans and aggregates raw listings across target pin codes.',
  },
  {
    step: 2,
    title: 'Filter',
    tagline: 'Criteria & Micro-Market Rules',
    description:
      'Rigorous application of client-specific parameters: property category, budget range, and preferred sub-localities.',
    keyAction: 'Eliminates irrelevant or out-of-scope opportunities automatically.',
  },
  {
    step: 3,
    title: 'Review',
    tagline: 'Deep Listing Inspection',
    description:
      'Systematic examination of listing details, contact credentials, and property specs for authenticity and internal consistency.',
    keyAction: 'Flags duplicate phone numbers, broker reposts, and suspicious records.',
  },
  {
    step: 4,
    title: 'Verify',
    tagline: 'AI Screening + Human Cross-Check',
    description:
      'Dual-layer verification combining AI anomaly detection with human specialist review to confirm active owner intent.',
    keyAction: 'Only records that pass both algorithmic and human audits advance.',
  },
  {
    step: 5,
    title: 'Allocate',
    tagline: 'Strict 1 Client : 1 Lead Model',
    description:
      'Single-client exclusivity assignment. Leads are never shared or resold among multiple competing brokers in the same locality.',
    keyAction: 'Lead lock is initiated—dedicated exclusively to your account.',
  },
  {
    step: 6,
    title: 'Deliver',
    tagline: 'Direct Dispatch to Your Workflow',
    description:
      'Instant delivery through your agreed channel—direct WhatsApp alert, structured email dispatch, or shared CRM feed.',
    keyAction: 'Rich lead briefing dispatched with owner name, contact, and property highlights.',
  },
  {
    step: 7,
    title: 'Track',
    tagline: 'Feedback & Continuous Calibration',
    description:
      'Weekly outcome logging and regular feedback syncs to refine filtering rules and maximize your conversion velocity.',
    keyAction: 'Delivery criteria dynamically updated based on your conversion notes.',
  },
];
