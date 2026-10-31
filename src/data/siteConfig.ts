import { SiteConfig } from '../types/content';

/**
 * Centralized Site Configuration
 * 
 * Source of truth: Dealestate Complete Business Profile & Codnexa Official Business Information
 * - Brand: Dealestate (Powered by Codnexa)
 * - Phone / WhatsApp: +91 63946 23162
 * - Email: codnexa@gmail.com
 * - Headquarters: Lucknow, Uttar Pradesh, India
 * - Website: https://www.codnexa.co.in
 * - Social: LinkedIn, Instagram
 */
export const siteConfig: SiteConfig = {
  brandName: 'Dealestate',
  parentCompany: 'Codnexa',
  parentWebsite: 'https://www.codnexa.co.in',
  positioning: "India’s First Human-Led, AI-Powered Real Estate Growth System",
  tagline: 'More Than Leads. A Complete Growth System.',
  subheadline:
    'Get relevant property-owner leads, dedicated human sales support, and AI-powered tools that help your real-estate business manage opportunities more effectively.',
  
  // Official contact channels extracted from Business Profile & Codnexa
  contact: {
    whatsappNumber: '916394623162',
    phone: '+91 63946 23162',
    email: 'codnexa@gmail.com',
    address: 'Lucknow, Uttar Pradesh, India',
    operatingHours: 'Mon - Sat: 9:30 AM - 7:00 PM IST',
  },

  // Official social media profiles
  social: {
    linkedin: 'https://www.linkedin.com/company/codnexa/',
    instagram: 'https://www.instagram.com/codnexa',
    twitter: '', // Empty: hidden in UI
    facebook: '', // Empty: hidden in UI
  },

  // Hosted form provider endpoint
  form: {
    providerEndpoint: '',
  },

  // Legal documentation links
  legal: {
    privacyPolicyUrl: '#',
    termsUrl: '#',
  },
};

// Helper verification utilities
export const hasWhatsAppContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.contact.whatsappNumber && config.contact.whatsappNumber.trim().length > 0);

export const hasPhoneContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.contact.phone && config.contact.phone.trim().length > 0);

export const hasEmailContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.contact.email && config.contact.email.trim().length > 0);

export const hasLinkedInContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.social.linkedin && config.social.linkedin.trim().length > 0);

export const hasInstagramContact = (config: SiteConfig = siteConfig): boolean =>
  Boolean(config.social.instagram && config.social.instagram.trim().length > 0);

export const hasSocialLinks = (config: SiteConfig = siteConfig): boolean =>
  Object.values(config.social).some((url) => Boolean(url && url.trim().length > 0));
