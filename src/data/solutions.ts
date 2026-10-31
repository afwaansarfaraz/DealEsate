export interface SolutionItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  benefits: string[];
  icon: string;
  isOptionalAddon?: boolean;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'owner-leads',
    eyebrow: 'Core Offering',
    title: 'Property Owner Lead Generation',
    description:
      'Continuous discovery and delivery of verified residential rental, resale, and commercial property owners looking for active broker representation.',
    benefits: [
      'Focuses exclusively on direct property owners and decision-makers',
      'Filtered by micro-market, pin codes, and property specifications',
      'Eliminates wasted hours spent cold calling public portal reposts',
    ],
    icon: 'Building2',
  },
  {
    id: 'ai-screening',
    eyebrow: 'Data Integrity',
    title: 'AI-Assisted Lead Screening',
    description:
      'Multi-source algorithmic filtering cross-checks listing parameters, flags duplicate records, and screens for contact authenticity before human review.',
    benefits: [
      'Removes stale, recycled, or uncontactable portal records',
      'Detects duplicate listings across disparate portals',
      'Protects broker teams from dead-end calls and spam',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'human-support',
    eyebrow: 'Key Differentiator',
    title: 'Human Sales Support',
    description:
      'Dedicated real estate specialists assist with initial owner outreach, warm qualification, polite follow-ups, and visit coordination.',
    benefits: [
      'Trained callers handle respectful preliminary landlord outreach',
      'Customized operating script tailored to your agency brand',
      'Frees licensed brokers to focus exclusively on site visits and closures',
    ],
    icon: 'Users',
  },
  {
    id: 'property-videos',
    eyebrow: 'Visual Marketing',
    title: 'AI-Assisted Property Videos',
    description:
      'Transforms verified listing photographs and floor plans into dynamic, high-engagement walkthrough video reels optimized for WhatsApp sharing.',
    benefits: [
      'Cinematic vertical reels ready for direct client distribution',
      'Showcases property highlights and specifications cleanly',
      'Accelerates client decision-making and property visit requests',
    ],
    icon: 'Video',
  },
  {
    id: 'crm',
    eyebrow: 'Pipeline Organization',
    title: 'CRM and Lead Management',
    description:
      'Intuitive pipeline tracking structured by lead category, source, assigned agent, scheduled follow-up dates, and current negotiation stage.',
    benefits: [
      'Zero lead leakage or forgotten follow-up appointments',
      'Clean status progression: New, Contacted, Visit Scheduled, Closed',
      'Complete visibility across multi-agent agency teams',
    ],
    icon: 'LayoutDashboard',
  },
  {
    id: 'whatsapp-automation',
    eyebrow: 'Instant Engagement',
    title: 'WhatsApp Automation',
    description:
      'Consent-based WhatsApp workflows enable instant first-response messaging, basic qualification questionnaires, and automated visit reminders.',
    benefits: [
      'Sub-minute response times for inbound client inquiries',
      'Pre-qualifies timeline and preferences via structured conversational prompts',
      'Fully compliant with WhatsApp Business messaging policies',
    ],
    icon: 'MessageSquare',
  },
  {
    id: 'digital-marketing',
    eyebrow: 'Optional Growth Service',
    title: 'Digital Marketing and SEO',
    description:
      'Targeted local search visibility, dedicated broker landing pages, and micro-targeted digital campaigns powered by Codnexa capabilities.',
    benefits: [
      'Local search and Google Business micro-market optimization',
      'Direct owner acquisition funnels built for your brokerage brand',
      'Available as an optional bespoke add-on to core lead packages',
    ],
    icon: 'TrendingUp',
    isOptionalAddon: true,
  },
];
