export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    question: 'What is Dealestate?',
    answer:
      'Dealestate is India’s first human-led, AI-powered real estate growth system. We provide Indian brokers, independent agents, and agencies with verified property-owner leads (Rental, Resale, Commercial) paired with dedicated human sales support and AI-assisted workflow tools to accelerate deal closures.',
  },
  {
    question: 'What types of owner leads do you provide?',
    answer:
      'We specialize exclusively in direct property-owner leads across three primary categories: Rental Owner Leads (landlords looking for tenants), Resale Owner Leads (property sellers looking for buyers), and Commercial Owner Leads (owners of office spaces, retail outlets, and commercial floors). We do not position buyer leads as a core service.',
  },
  {
    question: 'Where do owner leads come from?',
    answer:
      'Leads are sourced from public real estate portals (such as Magicbricks, 99acres), verified partner databases, and independent marketing channels across target micro-markets. We do not claim an exclusive official partnership with third-party portals; rather, we aggregate, screen, and audit public listings to filter genuine owners from agent reposts.',
  },
  {
    question: 'How does the verification process work?',
    answer:
      'We utilize a dual-layer verification protocol. First, AI-assisted screening flags duplicate phone numbers, suspicious posting patterns, and mismatched property details. Second, our human review team inspects the listing details and initiates contact checks to confirm genuine intent before allocating the lead to your account.',
  },
  {
    question: 'Are leads exclusive to my brokerage?',
    answer:
      'Yes. Dealestate operates on a strict single-client allocation model (1 Client : 1 Lead). Once an owner lead is assigned to your account, it is not sold or distributed to competing brokers in the same locality.',
  },
  {
    question: 'How is lead pricing determined?',
    answer:
      'Pricing begins at a baseline reference of ₹100 per lead, and varies depending on property category (Rental vs. Commercial), micro-market location, delivery volume, and the specific level of human sales support bundled with your plan. Exact pricing terms are agreed transparently upon onboarding.',
  },
  {
    question: 'What happens if a contact number is invalid or disconnected?',
    answer:
      'While our multi-step screening filters out the vast majority of dead numbers, occasional line disconnections occur in real-time. Any uncontactable or fraudulent number reported within the agreed replacement window is audited by our operations team and replaced according to our operational replacement policy.',
  },
  {
    question: 'What does dedicated human sales support include?',
    answer:
      'Our trained real estate specialists assist your team with agreed outreach workflows—including initial landlord discovery calls, basic property detail confirmations, polite follow-ups, and calendar coordination. The exact support scope, channels, and coverage hours are customized to your agency requirements.',
  },
  {
    question: 'Does Dealestate conduct property site visits?',
    answer:
      'No. Dealestate does not conduct physical property inspections or site visits. Your own team of licensed brokers and agents conducts all in-person site visits, client presentations, title verifications, and final lease/deed negotiations.',
  },
  {
    question: 'Does Dealestate guarantee closed sales or rental commissions?',
    answer:
      'No. Dealestate provides verified owner opportunities and operational sales support; we never guarantee a closed sale, rental commission, or specific conversion rate. Final deal outcomes depend on market pricing, property condition, your local negotiation expertise, and rapid client follow-up.',
  },
];

