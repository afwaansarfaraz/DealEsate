export interface WhyAdvantage {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  isFlagship?: boolean;
  highlightText?: string;
}

export const whyDealestateAdvantages: WhyAdvantage[] = [
  {
    id: 'human-led-ai',
    eyebrow: 'Flagship Differentiator',
    title: 'Human-Led, AI-Powered Approach',
    description:
      'We combine intelligent data screening with real real-estate sales professionals. AI flags anomalies and structures data, while trained human specialists manage conversations, qualify leads, and protect your brand reputation.',
    icon: 'Sparkles',
    isFlagship: true,
    highlightText: 'The ideal balance: algorithmic efficiency paired with human communication and real-world judgment.',
  },
  {
    id: 'owner-focus',
    eyebrow: 'Zero Buyer Distractions',
    title: 'Property-Owner Focus',
    description:
      'Unlike platforms flooded with casual window-shoppers, Dealestate focuses strictly on direct property owners seeking to lease, sell, or commercialize their assets. Every lead connects you with a legitimate decision-maker.',
    icon: 'Building2',
    isFlagship: true,
    highlightText: 'Direct property owners only. No buyer-lead packs, no unqualified tire-kickers.',
  },
  {
    id: 'filtering',
    eyebrow: 'Precision Parameters',
    title: 'Relevant Lead Filtering',
    description:
      'Delivery is strictly calibrated to your chosen micro-markets, specific pin codes, property classifications, and ticket sizes so your pipeline remains focused.',
    icon: 'Target',
  },
  {
    id: 'exclusivity',
    eyebrow: 'Strict Allocation Protocol',
    title: 'Exclusive Single-Broker Allocation Under the Agreed Model',
    description:
      'We operate on a 1 Client : 1 Lead exclusivity structure. Once an owner lead is assigned to your account, it is never resold or shared with competing agents in your locality.',
    icon: 'ShieldCheck',
  },
  {
    id: 'human-sales-support',
    eyebrow: 'Dedicated Operating Desk',
    title: 'Dedicated Human Sales Support',
    description:
      'Our trained callers conduct respectful initial discovery calls, confirm landlord availability, and support follow-up schedules under your agreed operating scope.',
    icon: 'Users',
  },
  {
    id: 'structured-tracking',
    eyebrow: 'Clear Visibility',
    title: 'Structured Lead Tracking',
    description:
      'Monitor every opportunity transparently with structured delivery feeds, clear status tags, and regular outcome reviews to refine future allocation criteria.',
    icon: 'BarChart3',
  },
];
