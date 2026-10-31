export interface OwnerLeadCategory {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  icon: string;
  ctaText: string;
}

export const ownerLeadCategories: OwnerLeadCategory[] = [
  {
    id: 'rental-owner',
    title: 'Rental Owner Leads',
    badge: 'Rental Portfolio',
    tagline: 'High-Intent Landlords Seeking Reliable Tenants',
    description:
      'Connect brokers directly with property owners looking to rent out residential apartments, standalone floors, and boutique retail spaces.',
    idealFor: 'Leasing specialists, rental brokers, and residential agency teams.',
    features: [
      'Screened direct landlord contact details',
      'Property specifications, expected rent, and deposit terms verified',
      'Locality and property availability timing cross-referenced',
      'Single-broker allocation: never distributed to multiple agents',
    ],
    icon: 'Key',
    ctaText: 'Get Rental Owner Leads',
  },
  {
    id: 'resale-owner',
    title: 'Resale Owner Leads',
    badge: 'Resale & Freehold',
    tagline: 'Direct Property Sellers Across Prime Micro-Markets',
    description:
      'Connect brokers directly with property owners interested in selling their residential properties, high-rise apartments, and independent villas.',
    idealFor: 'Resale specialists, luxury realtors, and independent agents.',
    features: [
      'Genuine owner listings filtered from market reposts',
      'Seller timeline, expected price band, and property specs confirmed',
      'High-demand focus corridors and prime micro-markets',
      'Human specialist assistance for preliminary discovery outreach',
    ],
    icon: 'Home',
    ctaText: 'Get Resale Owner Leads',
  },
  {
    id: 'commercial-owner',
    title: 'Commercial Owner Leads',
    badge: 'Commercial & Retail',
    tagline: 'High-Ticket Office, Retail & Industrial Spaces',
    description:
      'Connect commercial real-estate professionals directly with relevant property owners of bare-shell office floors, retail showrooms, and warehouses.',
    idealFor: 'Commercial property consultants, corporate leasing teams, and institutional brokers.',
    features: [
      'Direct landlord or authorized decision-maker contact confirmed',
      'Carpet area, furnishing status, floor plate, and power load details',
      'High-value mandates with serious commercial property owners',
      'Strict 1 Client : 1 Lead exclusivity model',
    ],
    icon: 'Building2',
    ctaText: 'Get Commercial Owner Leads',
  },
];
