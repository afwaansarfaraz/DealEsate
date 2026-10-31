import { NavigationItem } from '../types/content';

export const primaryNavItems: NavigationItem[] = [
  { id: 'owner-leads', label: 'Owner Leads', href: '#owner-leads' },
  { id: 'human-support', label: 'Human Support', href: '#human-support' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
  { id: 'why-dealestate', label: 'Why Dealestate', href: '#why-dealestate' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const headerCTAItem: NavigationItem = {
  id: 'get-owner-leads',
  label: 'Get Owner Leads',
  href: '#owner-leads',
  isCTA: true,
};
