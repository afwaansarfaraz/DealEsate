export interface AudienceProfile {
  id: string;
  role: string;
  badge: string;
  challenge: string;
  solution: string;
  benefits: string[];
}

export const audienceProfiles: AudienceProfile[] = [
  {
    id: 'independent-brokers',
    role: 'Independent Property Brokers',
    badge: 'Solo Agents & Consultants',
    challenge: 'Time wasted on cold-calling stale portal contacts instead of closing high-value deals.',
    solution: 'Receive filtered, exclusive owner leads with human outreach support so you spend your hours conducting site visits.',
    benefits: [
      'Steady pipeline of direct owners ready to converse',
      'No bidding wars against dozens of competing agents',
      'Human specialist assistance for follow-up discipline',
    ],
  },
  {
    id: 'agencies',
    role: 'Real Estate Agencies',
    badge: 'Multi-Agent Teams & Firms',
    challenge: 'Inconsistent lead quality across agents leading to low morale and fragmented CRM tracking.',
    solution: 'Centralized lead allocation with categorized streams (Rental, Resale, Commercial) assigned to designated specialists.',
    benefits: [
      'Predictable lead volume across target focus sectors',
      'Clean team accountability and transparent tracking',
      'Option to integrate promotional video reels for your listings',
    ],
  },
  {
    id: 'commercial-consultants',
    role: 'Commercial Property Consultants',
    badge: 'Retail & Office Leasing',
    challenge: 'Difficulty identifying direct institutional and private landlords for office and high-street spaces.',
    solution: 'Curated commercial landlord streams with confirmed square footage, furnishing status, and leasing criteria.',
    benefits: [
      'Access to prime retail and office spaces before public bidding',
      'Direct landlord relationships that open recurring mandates',
      'High average transaction ticket size with exclusive distribution',
    ],
  },
];
