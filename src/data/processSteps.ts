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
    tagline: 'Identify Relevant Listings',
    description:
      'Continuous discovery of new property-owner listings across major property portals and verified market feeds.',
    keyAction: 'Identifies raw owner listings across target geographic locations.',
  },
  {
    step: 2,
    title: 'Filter',
    tagline: 'Apply Agreed Criteria',
    description:
      'Systematic application of agreed parameters: property category (Rental, Resale, Commercial), price brackets, and micro-market pin codes.',
    keyAction: 'Filters out listings that do not match your exact client profile.',
  },
  {
    step: 3,
    title: 'Screen',
    tagline: 'AI-Assisted Screening',
    description:
      'Algorithmic screening evaluates listing consistency, flags duplicate numbers, and checks available listing information.',
    keyAction: 'Removes repetitive portal entries and flags suspicious contact patterns.',
  },
  {
    step: 4,
    title: 'Review',
    tagline: 'Human Lead Inspection',
    description:
      'Trained operations specialists review relevant lead details, confirming active owner intent before clearing the record.',
    keyAction: 'Human judgment ensures the listing meets operational quality standards.',
  },
  {
    step: 5,
    title: 'Allocate',
    tagline: 'Exclusive Assignment Model',
    description:
      'Assigns the lead strictly according to the agreed allocation model (1 Client : 1 Lead exclusivity in your micro-market).',
    keyAction: 'Locks the opportunity exclusively to your brokerage account.',
  },
  {
    step: 6,
    title: 'Deliver',
    tagline: 'Direct Dispatch to You',
    description:
      'Shares the complete lead record with owner details and property highlights via your agreed delivery channel.',
    keyAction: 'Instant delivery via WhatsApp alert, email summary, or CRM feed.',
  },
  {
    step: 7,
    title: 'Track',
    tagline: 'Follow-Up & Outcome Monitoring',
    description:
      'Monitors delivery status and available follow-up outcomes to calibrate filtering criteria and ensure ongoing quality.',
    keyAction: 'Ongoing feedback loop to refine future lead matches.',
  },
];
