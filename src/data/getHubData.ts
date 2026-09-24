export interface AccommodationCategory {
  title: string;
  items: string[];
}

export interface PackingItem {
  id: string;
  label: string;
}

export interface ContactPerson {
  name: string;
  email: string;
  phone: string;
  role: string;
  purpose: string;
  category: 'TRAVEL' | 'HR';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const ACCOMMODATION_PROVIDED: AccommodationCategory[] = [
  {
    title: 'KITCHEN',
    items: [
      'Full plate',
      'Quarter plate',
      'Bowl',
      'Drinking water glass',
      'Tea cup',
      'Spoon',
      'Tea spoon',
      'Scissor',
      'Knife',
      'Tea strainer',
      'Chopping board',
      'Dish drying rack',
      'Saucepan',
      'Frying pan',
      'Ladle',
      'Serving spoon',
      'Saute spoon'
    ]
  },
  {
    title: 'FURNITURE & FURNISHINGS',
    items: [
      'Mattress',
      'Bedsheet',
      'Quilt',
      'Pillow',
      'Study table',
      'Study table chair',
      'Balcony table',
      'Living room sofa',
      'Teapoy',
      'Shoe rack',
      'Cloth drying rack'
    ]
  },
  {
    title: 'APPLIANCES',
    items: [
      'Air conditioner',
      'Television',
      'Refrigerator',
      'Microwave / oven',
      'Kettle',
      'Induction cooktop',
      'Toaster',
      'Washing machine',
      'Geyser',
      'Iron',
      'Ironing stand',
      'Big fan',
      'Small fan',
      'Exhaust hood',
      'Aquaguard water purifier'
    ]
  },
  {
    title: 'BATHROOM & UTILITY',
    items: ['Bucket', 'Mug', 'Dustbin']
  }
];

export const INITIAL_PACKING_LIST: PackingItem[] = [
  { id: 'toiletries', label: 'Toiletries' },
  { id: 'towels', label: 'Towels' },
  { id: 'hygiene', label: 'Personal hygiene products' },
  { id: 'repellent', label: 'Mosquito repellent' },
  { id: 'umbrella', label: 'Umbrella' },
  { id: 'medicines', label: 'Personal medicines' },
  { id: 'garbage_bags', label: 'Garbage bags / covers if required' },
  { id: 'essentials', label: 'Other personal essentials' }
];

export const GET_CONTACTS: ContactPerson[] = [
  {
    name: 'Chiranth AR Hegde',
    email: 'chiranth.hegde@esyasoft.com',
    phone: '9535727038',
    role: 'Travel & Logistics Specialist',
    purpose: 'Travel and logistics queries related to reaching the Mangalore training centre.',
    category: 'TRAVEL'
  },
  {
    name: 'Anneyappa P',
    email: 'Anneyappa.p@esyasoft.com',
    phone: '9035028788',
    role: 'Logistics Coordinator',
    purpose: 'Travel and logistics queries.',
    category: 'TRAVEL'
  },
  {
    name: 'Prabhu D',
    email: 'Prabhu.D@esyasoft.com',
    phone: '9884307031',
    role: 'HR & Program Manager',
    purpose: 'HR policies and process-related queries after the training program starts.',
    category: 'HR'
  }
];

export const GET_FAQS: FAQItem[] = [
  {
    question: 'Is an iron provided?',
    answer: 'Yes. Each accommodation unit has an iron and ironing stand.'
  },
  {
    question: 'Are towels provided?',
    answer: 'No. Please bring your own towel and bath linens.'
  },
  {
    question: 'Do I need to bring toiletries?',
    answer: 'Yes. Bring your own toiletries, soap, shampoo, and personal care items.'
  },
  {
    question: 'Is drinking water available?',
    answer: 'Yes. Safe drinking water is available through the Aquaguard water purifier.'
  },
  {
    question: 'Can I cook at the accommodation?',
    answer: 'Yes. The accommodation has an induction cooktop, microwave/oven, refrigerator, kettle, toaster, and basic kitchen utensils.'
  },
  {
    question: 'Is there a gym?',
    answer: 'Yes. A gymnasium is available on the 5th floor of the Capability Centre residential area.'
  },
  {
    question: 'Are rooms shared?',
    answer: 'Yes. GET accommodation is provided on a sharing basis with 3 BHK and 4 BHK arrangements.'
  },
  {
    question: 'What should I bring?',
    answer: 'Please check the interactive packing checklist in the Stay section above to ensure you bring all personal essentials.'
  }
];
