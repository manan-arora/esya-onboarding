export const BEFORE_YOU_JOIN_ITEMS = [
  {
    title: 'Joining Location & Time',
    detail: 'Specified in your official appointment letter / email from HR.',
    isOfficial: true,
    placeholderIfMissing: false
  },
  {
    title: 'Reporting Manager Details',
    detail: 'Your reporting manager and team details will be confirmed prior to Day 1 by HR.',
    isOfficial: true,
    placeholderIfMissing: false
  },
  {
    title: 'HR Point of Contact',
    detail: 'Your dedicated HR Business Partner (HRBP) will reach out with pre-boarding instructions.',
    isOfficial: true,
    placeholderIfMissing: false
  },
  {
    title: 'Required Mandatory Documents',
    detail: 'Government ID proof (Aadhaar / PAN / Passport), Educational certificates, Relieving letter & salary slips from previous employer, passport photos.',
    isOfficial: true,
    placeholderIfMissing: false
  },
  {
    title: 'Pre-Joining Requirements & BGV',
    detail: 'Background Verification (BGV) forms submitted via portal link.',
    isOfficial: true,
    placeholderIfMissing: false
  },
  {
    title: 'Specific Desk / Seating Assignment',
    detail: 'Information to be provided by HR upon arrival.',
    isOfficial: false,
    placeholderIfMissing: true
  }
];

export const FIRST_DAY_CHECKLIST = [
  { id: 'fd-1', text: 'Meet reporting manager & complete initial introduction', category: 'CONNECT' },
  { id: 'fd-2', text: 'Meet team members and key project collaborators', category: 'CONNECT' },
  { id: 'fd-3', text: 'Understand role expectations and immediate priorities', category: 'ORIENT' },
  { id: 'fd-4', text: 'Set up corporate email account & laptop credentials', category: 'ACCESS' },
  { id: 'fd-5', text: 'Get access to Zoho People (HRMS) & login to check profile', category: 'ACCESS' },
  { id: 'fd-6', text: 'Join required communication channels (MS Teams / Department groups)', category: 'ACCESS' },
  { id: 'fd-7', text: 'Review workplace facilities, building entry & safety guidelines', category: 'ORIENT' },
  { id: 'fd-8', text: 'Know key contacts for HR, IT helpdesk, and admin support', category: 'CONNECT' }
];

export const FIRST_WEEK_FRAMEWORK = [
  {
    stage: 'MEET',
    title: 'Connect with Key People',
    guidance: 'Schedule 1-on-1s with your direct team members, project lead, and cross-functional partners to understand who does what.'
  },
  {
    stage: 'OBSERVE',
    title: 'Understand Team Dynamic & Rhythms',
    guidance: 'Observe regular team rituals—standups, sprint reviews, client status calls, and decision-making styles.'
  },
  {
    stage: 'UNDERSTAND',
    title: 'Deep-Dive into System Architecture & Docs',
    guidance: 'Explore existing codebases, technical architecture diagrams, policy documents, and active project repositories.'
  },
  {
    stage: 'ASK',
    title: 'Ask Questions Proactively',
    guidance: 'Never hesitate to clarify domain acronyms, system flows, or business contexts when blocked.'
  },
  {
    stage: 'PARTICIPATE',
    title: 'Take On Your First Small Task',
    guidance: 'Pick up an initial ticket or onboarding deliverable to get hands-on experience with tools and code review workflows.'
  }
];

export const USEFUL_FIRST_WEEK_QUESTIONS = [
  'What does my team directly own and deliver?',
  'Who are our internal and external stakeholders?',
  'What does success look like for my role in the next 30, 60, and 90 days?',
  'Which recurring meetings matter most and what is my expected role in them?',
  'Where does active project documentation and architecture info live?',
  'Who should I approach when I get technically blocked or need domain assistance?',
  'What critical issues or operational items should I escalate, and to whom?'
];

export const COMPANY_VALUES = [
  {
    id: 'val-1',
    name: 'PEOPLE FIRST',
    officialStatement: 'We prioritize the safety, growth, well-being, and mutual respect of our employees, customers, and partners above all else.',
    whatItLooksLikeAtWork: 'Supporting team members when blocked, encouraging open communication, maintaining healthy work-life balance, and treating every colleague with dignity.'
  },
  {
    id: 'val-2',
    name: 'TECHNOLOGY EXCELLENCE',
    officialStatement: 'We engineer robust, intelligent, and scalable energy software and hardware that powers modern utility transformations.',
    whatItLooksLikeAtWork: 'Writing clean and tested code, designing scalable system architecture, keeping up with domain innovations (AI/AMI), and taking pride in technical quality.'
  },
  {
    id: 'val-3',
    name: 'DELIVERY EXCELLENCE',
    officialStatement: 'We honor our commitments to clients and utility partners with precision, speed, and continuous improvement.',
    whatItLooksLikeAtWork: 'Meeting agreed deadlines, proactive risk management, clear status updates, and ensuring zero-defect deliverables in utility deployments.'
  }
];

export const FIRST_90_TIMELINE_STAGES = [
  {
    id: 'stage-7-days',
    days: 'DAYS 1–7',
    phaseName: 'CONNECT',
    tagline: 'Orient yourself, establish access, and meet your core ecosystem.',
    whatToFocusOn: [
      'Setting up all IT accounts, email, MS Teams, Zoho HRMS, and development environments.',
      'Building initial working relationships with your reporting manager and immediate team.',
      'Understanding company vision, core business offerings, and basic workplace policies.'
    ],
    questionsToAsk: [
      'What are my key deliverables for this week?',
      'How does our team collaborate on daily tasks?',
      'Where can I find the official documentation for our project?'
    ],
    whatToUnderstand: [
      'The structure of Esyasoft (Who We Are & What We Do).',
      'Where to find help for IT, HR, and project queries.',
      'The basic layout of your workplace and tools.'
    ],
    howToUseThisGuide: 'Use the START HERE and WORKPLACE sections to get connected and understand basic policies.'
  },
  {
    id: 'stage-30-days',
    days: 'DAYS 8–30',
    phaseName: 'UNDERSTAND',
    tagline: 'Grasp the domain, system architecture, and your team\'s role in the energy grid.',
    whatToFocusOn: [
      'Deep-diving into Esyasoft product portfolio (AMI, HES, MDMS, Analytics, BESS).',
      'Understanding your project scope, code structure, or operational domain.',
      'Participating actively in team meetings and completing initial starter tasks.'
    ],
    questionsToAsk: [
      'How does our component fit into the larger utility data pipeline?',
      'What are the common pitfalls or domain nuances I should be aware of?',
      'Who are the key stakeholders for our deliverables?'
    ],
    whatToUnderstand: [
      'How work happens: sprint rhythms, documentation standards, and code reviews.',
      'Official policies (Leave, Domestic Travel, PMS, POSH) via the Policy Library.',
      'How Esyasoft\'s technology solves real utility problems.'
    ],
    howToUseThisGuide: 'Explore OUR BUSINESS and HOW WE WORK to understand the bigger picture.'
  },
  {
    id: 'stage-60-days',
    days: 'DAYS 31–60',
    phaseName: 'PARTICIPATE',
    tagline: 'Take ownership of core responsibilities and collaborate smoothly across teams.',
    whatToFocusOn: [
      'Executing regular deliverables independently with reduced supervision.',
      'Collaborating effectively with cross-functional peers (Dev, QA, PM, HR).',
      'Sharing feedback and seeking guidance during regular 1-on-1 check-ins.'
    ],
    questionsToAsk: [
      'Am I meeting the quality and speed expectations for my role?',
      'Where can I streamline my daily workflow or team handoffs?',
      'What additional responsibilities can I take on?'
    ],
    whatToUnderstand: [
      'Performance Management System (PMS) expectations and goal alignment.',
      'How to handle escalations and technical roadblocks independently.',
      'The interconnections between systems, products, and customer needs.'
    ],
    howToUseThisGuide: 'Use the HELP section and Glossary to resolve domain ambiguities.'
  },
  {
    id: 'stage-90-days',
    days: 'DAYS 61–90',
    phaseName: 'CONTRIBUTE',
    tagline: 'Become a fully integrated node in the system, delivering impact confidently.',
    whatToFocusOn: [
      'Consistently delivering high-quality work aligned with team KRAs.',
      'Mentoring newer team members or contributing to team knowledge repositories.',
      'Engaging in forward-looking 90-day reflection conversations with your manager.'
    ],
    questionsToAsk: [
      'What are my long-term career growth goals at Esyasoft?',
      'How can I further contribute to delivery excellence or product innovation?',
      'Which certifications or training programs would add value to my trajectory?'
    ],
    whatToUnderstand: [
      'Your place in the system and how your daily effort connects to the energy transition.',
      'Training and Certification reimbursement opportunities.',
      'How to remain an active reference user of the First 90 guide as you grow.'
    ],
    howToUseThisGuide: 'Refer back to Policy Library and Business ecosystem nodes whenever needed.'
  }
];

export const REFLECTIVE_CONVERSATIONS = [
  {
    period: 'DAY 30 REFLECTION',
    title: 'Laying the Groundwork',
    questions: [
      'What have I clearly understood about Esyasoft and my team\'s scope?',
      'What domain or technical areas are still unclear or need deeper explanation?',
      'Who do I need to schedule follow-up conversations with to fill knowledge gaps?'
    ]
  },
  {
    period: 'DAY 60 REFLECTION',
    title: 'Building Momentum',
    questions: [
      'Where am I contributing most effectively and feeling confident in my output?',
      'Where do I still need guidance, tooling support, or process clarification?',
      'What habits or workflow efficiency improvements should I make?'
    ]
  },
  {
    period: 'DAY 90 REFLECTION',
    title: 'Owning Your Role',
    questions: [
      'What can I comfortably explain to a new colleague about Esyasoft today?',
      'What core achievements or milestones have I delivered in my first 90 days?',
      'What skill areas or career milestones do I want to develop in the next cycle?'
    ]
  }
];
