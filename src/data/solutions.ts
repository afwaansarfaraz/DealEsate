export interface SolutionItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  benefits: string[];
  icon: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'verification',
    eyebrow: 'Data Integrity',
    title: 'AI-Assisted Lead Verification',
    description:
      'Multi-source filtering cross-checks listing parameters, detects duplicate records, and flags suspicious listings before manual human review.',
    benefits: [
      'Removes stale or recycled portal listings',
      'Filters for genuine owner intent and contact validity',
      'Protects broker teams from wasted calls and fake inquiries',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'human-support',
    eyebrow: 'Core Differentiator',
    title: 'Dedicated Human Sales Support',
    description:
      'Real real-estate sales professionals assist with lead handling, initial discovery calls, warm qualification, and follow-up management.',
    benefits: [
      'Trained specialists conduct respectful outreach',
      'Agreed operating scope tailored to your team capacity',
      'Frees brokers to focus purely on site visits and deal closures',
    ],
    icon: 'Users',
  },
  {
    id: 'property-videos',
    eyebrow: 'Visual Marketing',
    title: 'AI Property Videos',
    description:
      'Transform verified property photos and floor plans into high-engagement promotional video reels optimized for WhatsApp and social sharing.',
    benefits: [
      'Cinematic walkthrough reels for WhatsApp delivery',
      'Highlights key property features and USPs automatically',
      'Accelerates client decision-making before site visits',
    ],
    icon: 'Video',
  },
  {
    id: 'crm',
    eyebrow: 'Pipeline Organization',
    title: 'CRM & Lead Management',
    description:
      'Clean lead organization structured by category, source, assigned agent, scheduled follow-up dates, and current negotiation stage.',
    benefits: [
      'Zero lead leakage or forgotten follow-up reminders',
      'Simple status tracking: New, Contacted, Visit Scheduled, Closed',
      'Clear visibility across multi-agent agency teams',
    ],
    icon: 'LayoutDashboard',
  },
  {
    id: 'whatsapp-automation',
    eyebrow: 'Instant Engagement',
    title: 'WhatsApp Automation Support',
    description:
      'Consent-based WhatsApp workflows enable instant first-response messaging, basic qualification questionnaires, and automated visit reminders.',
    benefits: [
      'Sub-minute response times for inbound inquiries',
      'Pre-qualifies budget and timeline via natural conversational prompts',
      'Compliant with WhatsApp Business platform policies',
    ],
    icon: 'MessageSquare',
  },
  {
    id: 'digital-marketing',
    eyebrow: 'Growth Engineering',
    title: 'Digital Marketing & SEO',
    description:
      'Tailored local search presence, dedicated landing pages, and micro-targeted digital campaigns powered by Codnexa capabilities.',
    benefits: [
      'High-intent localized broker brand visibility',
      'Google Local Search and micro-market SEO optimization',
      'Direct owner acquisition funnels built for your brokerage',
    ],
    icon: 'TrendingUp',
  },
];

