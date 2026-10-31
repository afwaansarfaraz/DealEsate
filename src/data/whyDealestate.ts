export interface WhyAdvantage {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
}

export const whyDealestateAdvantages: WhyAdvantage[] = [
  {
    id: 'relevant-criteria',
    eyebrow: 'Precision Targeting',
    title: 'Locality & Category Alignment',
    description:
      'We tailor delivery to your chosen pin codes, property categories, and pricing brackets—ensuring every lead fits your business mandate.',
    icon: 'Target',
  },
  {
    id: 'exclusivity',
    eyebrow: 'Zero Competition',
    title: '1 Client : 1 Lead Exclusivity',
    description:
      'Unlike public portal lead packs sold to 10+ brokers simultaneously, allocated Dealestate leads are never recycled or resold to competitors.',
    icon: 'UserCheck',
  },
  {
    id: 'human-support',
    eyebrow: 'Human Differentiator',
    title: 'Trained Sales Specialists',
    description:
      'Our team handles disciplined outreach and initial qualification under agreed terms, acting as an extension of your operating sales desk.',
    icon: 'Users',
  },
  {
    id: 'ai-workflows',
    eyebrow: 'Modern Technology',
    title: 'AI-Assisted Quality Auditing',
    description:
      'Algorithmic screening flags duplicate numbers and inconsistent data points to protect your brokers from dead-end calls.',
    icon: 'Cpu',
  },
  {
    id: 'reporting',
    eyebrow: 'Full Accountability',
    title: 'Weekly Transparent Reporting',
    description:
      'Receive structured delivery summaries detailing lead counts, categories, response outcomes, and upcoming follow-ups.',
    icon: 'BarChart3',
  },
  {
    id: 'ethical-growth',
    eyebrow: 'Partnership Model',
    title: 'Honest Business Standards',
    description:
      'Zero fake conversion guarantees or fabricated metrics. We provide verified opportunities, real human support, and clean delivery.',
    icon: 'Shield',
  },
];
