import { SiteConfig } from '../types/content';

/**
 * Centralized Site Configuration
 * 
 * NOTE ON CONTACT DETAILS:
 * Per blueprint and client instructions, no dummy contact details are used.
 * Fields remain empty strings until officially confirmed and provided by the owner.
 * UI components must check helper methods to hide or safely disable contact triggers.
 */
export const siteConfig: SiteConfig = {
  brandName: 'Dealestate',
  positioning: "India’s First Human-Led, AI-Powered Real Estate Growth System",
  tagline: 'More Than Leads. A Complete Growth System.',
  subheadline:
    'Get relevant property-owner leads, dedicated human sales support, and AI-powered tools that help your real-estate business manage opportunities more effectively.',
  
  // Official contact channels - empty until provided by owner
  contact: {
    whatsappNumber: '', // OWNER TO CONFIRM (e.g. '919876543210')
    phone: '',          // OWNER TO CONFIRM
    email: '',          // OWNER TO CONFIRM (e.g. 'contact@dealestate.in')
    address: '',        // OWNER TO CONFIRM
    operatingHours: '',  // OWNER TO CONFIRM
  },

  // Social media profile URLs - empty until provided by owner
  social: {
    linkedin: '',       // OWNER TO CONFIRM
    twitter: '',        // OWNER TO CONFIRM
    instagram: '',      // OWNER TO CONFIRM
    facebook: '',       // OWNER TO CONFIRM
  },

  // Hosted form provider endpoint
  form: {
    providerEndpoint: '', // OWNER TO CONFIGURE (e.g. Web3Forms / Formspree endpoint)
  },

  // Legal documentation links
  legal: {
    privacyPolicyUrl: '#', // OWNER TO APPROVE
    termsUrl: '#',          // OWNER TO APPROVE
  },
};

// Helper verification utilities
export const hasWhatsAppContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.contact.whatsappNumber && config.contact.whatsappNumber.trim().length > 0);

export const hasPhoneContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.contact.phone && config.contact.phone.trim().length > 0);

export const hasEmailContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.contact.email && config.contact.email.trim().length > 0);

export const hasSocialLinks = (config: SiteConfig = siteConfig): boolean =>
  Object.values(config.social).some((url) => Boolean(url && url.trim().length > 0));

