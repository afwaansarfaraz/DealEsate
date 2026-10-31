export interface OwnerLeadCategory {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  icon: string;
}

export const ownerLeadCategories: OwnerLeadCategory[] = [
  {
    id: 'rental-owner',
    title: 'Rental Owner Leads',
    badge: 'Rental Portfolio',
    tagline: 'Connect Directly with Rent-Seeking Property Owners',
    description:
      'Direct contact opportunities with residential and commercial landlords seeking quality tenants for apartments, standalone floors, and retail spaces.',
    idealFor: 'Rental specialists, leasing consultants, and residential agencies.',
    features: [
      'Screened direct landlord contact details',
      'Rent expected, property configurations and deposit terms',
      'Locality and property availability timing cross-referenced',
      'Single-broker exclusivity on allocated leads',
    ],
    icon: 'Key',
  },
  {
    id: 'resale-owner',
    title: 'Resale Owner Leads',
    badge: 'Resale & Freehold',
    tagline: 'High-Intent Property Sellers Across Top Micro-Markets',
    description:
      'Verified owner opportunities for residential resale properties—including high-rise apartments, independent duplex villas, and premium freehold plots.',
    idealFor: 'Resale brokers, luxury realtors, and residential agency teams.',
    features: [
      'Genuine owner listings filtered from market duplicates',
      'Property specifications, floor plans, and seller intent confirmed',
      'Locality screening focused on prime growth corridors',
      'Dedicated follow-up support by our human specialist team',
    ],
    icon: 'Home',
  },
  {
    id: 'commercial-owner',
    title: 'Commercial Owner Leads',
    badge: 'Commercial & Retail',
    tagline: 'Prime Office, Retail & Industrial Space Owners',
    description:
      'Verified listings from owners and authorized representatives of bare-shell office floors, SCO plots, retail outlets, and warehouse spaces.',
    idealFor: 'Commercial property consultants, corporate leasing teams, and institutional brokers.',
    features: [
      'Direct owner or primary asset manager verification',
      'Carpet area, furnishing status, power load, and frontage details',
      'High-ticket mandate opportunities with serious sellers/lessors',
      'Strict 1 Client : 1 Lead exclusivity protocol',
    ],
    icon: 'Building2',
  },
];
