export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    question: 'What types of leads does Dealestate provide?',
    answer:
      'Dealestate specializes exclusively in direct property-owner leads. We do not generate, position, or sell buyer-lead packs. Every lead connects you directly with a property owner seeking to rent, sell, or lease residential or commercial real estate.',
  },
  {
    question: 'Are the leads rental, resale or commercial owner leads?',
    answer:
      'We provide all three distinct owner lead categories: Rental Owner Leads (landlords seeking tenants), Resale Owner Leads (homeowners looking to sell), and Commercial Owner Leads (owners of retail spaces, offices, and commercial properties). You can select specific categories or combine them based on your brokerage focus.',
  },
  {
    question: 'How are leads sourced?',
    answer:
      'Leads are identified from public property listing portals, independent partner data feeds, and local digital marketing funnels across target micro-markets. We do not claim official corporate partnerships with external portals; rather, we aggregate, filter, and audit public listings to isolate genuine property owners from agent reposts.',
  },
  {
    question: 'How does lead screening work?',
    answer:
      'We use a rigorous dual-layer screening process. First, AI-assisted screening flags duplicate phone numbers, detects recycled listings, and checks parameter consistency. Second, our human operations team reviews listing details and performs preliminary verification checks to confirm active owner intent before clearing the record.',
  },
  {
    question: 'Are leads shared with multiple brokers?',
    answer:
      'No. Dealestate operates on a strict single-broker exclusivity model (1 Client : 1 Lead) under our agreed allocation terms. Once an owner lead is assigned to your account, it is locked and never resold or distributed to competing brokers in your designated territory.',
  },
  {
    question: 'Does Dealestate provide human sales support?',
    answer:
      'Yes. Dedicated human sales support is a cornerstone of our service. Our trained real estate callers assist with preliminary owner outreach, polite discovery calls, and follow-up management under agreed terms—acting as an operational extension of your brokerage to free your agents for property inspections.',
  },
  {
    question: 'Does Dealestate guarantee property sales or rentals?',
    answer:
      'No. Dealestate provides verified owner opportunities and operational sales support; we never guarantee closed sales, rental agreements, or fixed conversion rates. Closing deals depends on realistic market pricing, property condition, your local negotiation skill, and timely client follow-up.',
  },
  {
    question: 'Can I request leads for a specific location?',
    answer:
      'Yes. Allocations are tailored to your chosen micro-markets, specific pin codes, and property categories. During onboarding, we evaluate current owner activity in your target sub-localities to establish a consistent delivery schedule.',
  },
  {
    question: 'Are CRM and WhatsApp automation included?',
    answer:
      'CRM pipeline management and consent-based WhatsApp automation workflows are available within our growth solution suite. Depending on your onboarding plan and operational requirements, these tools can be configured as part of your system package or paired with custom sales support.',
  },
  {
    question: 'How can I get started?',
    answer:
      'Getting started is straightforward. Submit your details through the contact form below, indicating your target location and preferred lead categories. An onboarding specialist will contact you to review locality availability, discuss support requirements, and establish your dedicated allocation.',
  },
];
