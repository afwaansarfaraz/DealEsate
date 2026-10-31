export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface SiteConfig {
  brandName: string;
  parentCompany?: string;
  parentWebsite?: string;
  positioning: string;
  tagline: string;
  subheadline: string;
  contact: {
    whatsappNumber: string;
    phone: string;
    email: string;
    address: string;
    operatingHours: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
  form: {
    providerEndpoint: string;
  };
  legal: {
    privacyPolicyUrl: string;
    termsUrl: string;
  };
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
