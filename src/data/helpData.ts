import type { ActionPathway, GlossaryTerm, FAQItem, SupportContact } from '../types';

export const ACTION_PATHWAYS: ActionPathway[] = [
  {
    id: 'act-leave',
    title: 'Apply for Leave',
    description: 'Submit Earned, Sick, Casual, or Menstrual leave request in Zoho People.',
    targetTab: 'START_HERE',
    targetSection: 'i-need-to',
    policyId: 'leave-policy',
    iconName: 'Calendar'
  },
  {
    id: 'act-travel',
    title: 'Travel for Work',
    description: 'Submit a domestic business trip request and flight/hotel bookings in Zoho Expense.',
    targetTab: 'START_HERE',
    targetSection: 'i-need-to',
    policyId: 'domestic-travel-policy',
    iconName: 'Plane'
  },
  {
    id: 'act-expense',
    title: 'Claim an Expense',
    description: 'Submit expense receipts for travel, per diem, or approved business expenses.',
    targetTab: 'START_HERE',
    targetSection: 'i-need-to',
    policyId: 'domestic-travel-policy',
    iconName: 'Receipt'
  },
  {
    id: 'act-policy',
    title: 'Find a Policy',
    description: 'Access official Esyasoft policy summaries and full document texts in the Policy Library.',
    targetTab: 'HOW_WE_WORK',
    targetSection: 'policy-library',
    iconName: 'FileText'
  },
  {
    id: 'act-it-access',
    title: 'Get IT Access',
    description: 'Follow the "Essential systems & access" guide for email, VPN, and credentials.',
    targetTab: 'START_HERE',
    targetSection: 'systems',
    iconName: 'Laptop'
  },
  {
    id: 'act-hrms',
    title: 'Understand HRMS',
    description: 'Learn how to use Zoho People 5.0 for attendance, check-in, profile, and performance.',
    targetTab: 'START_HERE',
    targetSection: 'systems',
    policyId: 'zoho-people-handbook',
    iconName: 'Users'
  },
  {
    id: 'act-contact-hr',
    title: 'Contact HR',
    description: 'Reach out to your HR Business Partner (HRBP) for onboarding, leave, or policy queries.',
    targetTab: 'HOW_WE_WORK',
    targetSection: 'who-do-i-ask',
    iconName: 'UserCheck'
  },
  {
    id: 'act-posh-concern',
    title: 'Raise a Workplace Concern / POSH',
    description: 'Understand confidential grievance redressal and contact the Internal Complaints Committee.',
    targetTab: 'START_HERE',
    targetSection: 'i-need-to',
    policyId: 'posh-policy',
    iconName: 'ShieldAlert'
  },
  {
    id: 'act-product',
    title: 'Understand Esyasoft Business',
    description: 'Explore smart utility solutions, software platforms, AI analytics, and clean energy.',
    targetTab: 'ESYASOFT',
    targetSection: 'business-areas',
    iconName: 'Cpu'
  },
  {
    id: 'act-find-person',
    title: 'Find a Person / Directory',
    description: 'Look up colleagues, department structures, and reporting managers in Zoho People.',
    targetTab: 'HOW_WE_WORK',
    targetSection: 'who-do-i-ask',
    policyId: 'zoho-people-handbook',
    iconName: 'Search'
  },
  {
    id: 'act-role',
    title: 'Understand My Role & KRAs',
    description: 'Check goal setting timelines, PMS performance evaluation, and team expectations.',
    targetTab: 'HOW_WE_WORK',
    targetSection: 'performance',
    policyId: 'pms-policy',
    iconName: 'Target'
  },
  {
    id: 'act-find-guide',
    title: 'Find Something in the Guide',
    description: 'Use the global search (Ctrl + K) to instant-find any policy, guide, term, or procedure.',
    targetTab: 'START_HERE',
    targetSection: 'search',
    iconName: 'Compass'
  }
];

export const SUPPORT_NETWORK: SupportContact[] = [
  {
    role: 'Reporting Manager',
    description: 'Your primary contact for daily work, role expectations, project assignments, and leave approvals.',
    contactMethod: 'Direct 1-on-1, MS Teams, Email',
    emailOrChannel: 'Assigned during onboarding',
    whenToContact: 'Daily work priorities, technical blockers, leave requests, performance feedback',
    escalationPath: 'Department / Business Unit Head'
  },
  {
    role: 'HR Business Partner (HRBP)',
    description: 'Your dedicated HR partner for policy guidance, employee relations, onboarding support, and HRMS assistance.',
    contactMethod: 'Email, MS Teams, Zoho People Query',
    emailOrChannel: 'hr@esyasoft.com / HRBP Email',
    whenToContact: 'Leave disputes, policy clarifications, payroll queries, referral status, PMS questions',
    escalationPath: 'Head of Human Resources'
  },
  {
    role: 'IT Support & Helpdesk',
    description: 'Responsible for laptop provisioning, email accounts, software licenses, network/VPN access.',
    contactMethod: 'IT Helpdesk Portal / Ticket',
    emailOrChannel: 'it.support@esyasoft.com',
    whenToContact: 'Laptop hardware issues, system access requests, password resets, VPN problems',
    escalationPath: 'IT Operations Lead'
  },
  {
    role: 'Talent Development / L&D',
    description: 'Manages company training programs, certification reimbursement approvals, and skill development.',
    contactMethod: 'Email',
    emailOrChannel: 'divya.prasad@esyasoft.com',
    whenToContact: 'Certification reimbursement prior approvals, training enrollment, LMS queries',
    escalationPath: 'Head – Talent Development'
  },
  {
    role: 'Travel Desk & Finance',
    description: 'Handles official travel ticket/hotel bookings, per diem processing, and expense claims.',
    contactMethod: 'Zoho Expense Portal / Email',
    emailOrChannel: 'travel@esyasoft.com / finance@esyasoft.com',
    whenToContact: 'Domestic trip bookings, hotel availability, expense claim processing, travel advance',
    escalationPath: 'Finance Manager / CFO'
  },
  {
    role: 'POSH Internal Complaints Committee (ICC)',
    description: 'Statutory body for confidential reception and inquiry of sexual harassment complaints.',
    contactMethod: 'Written email / Confidential form',
    emailOrChannel: 'icc@esyasoft.com / Presiding Officer',
    whenToContact: 'Filing a formal complaint or seeking guidance regarding workplace harassment',
    escalationPath: 'Presiding Officer / Senior Leadership'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'AMI',
    fullForm: 'Advanced Metering Infrastructure',
    definition: 'An integrated system of smart meters, communication networks, and data management systems that enables two-way communication between utilities and customers.',
    category: 'Domain'
  },
  {
    term: 'HES',
    fullForm: 'Head End System',
    definition: 'Software that directly collects data and manages communication hardware/protocols for smart meters across the electric, water, or gas grid.',
    category: 'Domain'
  },
  {
    term: 'MDMS',
    fullForm: 'Meter Data Management System',
    definition: 'Enterprise database software that imports raw meter readings from Head End Systems, performs VEE (Validation, Editing, and Estimation), and feeds clean data to billing.',
    category: 'Domain'
  },
  {
    term: 'BESS',
    fullForm: 'Battery Energy Storage System',
    definition: 'Rechargeable energy storage solution that stores energy from the grid or renewables and dispatches it during peak demand periods.',
    category: 'Domain'
  },
  {
    term: 'EaaS',
    fullForm: 'Energy as a Service',
    definition: 'A business model where energy services (generation, storage, efficiency, management) are provided on a subscription or performance basis without upfront capital costs.',
    category: 'Domain'
  },
  {
    term: 'CPMS',
    fullForm: 'Charge Point Management System',
    definition: 'Software platform that manages EV charging stations, driver access, dynamic load management, payment processing, and grid interaction.',
    category: 'Domain'
  },
  {
    term: 'VEE',
    fullForm: 'Validation, Editing & Estimation',
    definition: 'Automated data quality checks within MDMS to ensure meter data is validated, corrected, and estimated before being used for billing.',
    category: 'Technology'
  },
  {
    term: 'NILM',
    fullForm: 'Non-Intrusive Load Monitoring',
    definition: 'Analytics technique that analyzes total electrical voltage and current signatures to identify individual household appliance consumption without sub-meters.',
    category: 'Technology'
  },
  {
    term: 'DLMS/COSEM',
    fullForm: 'Device Language Message Specification / Companion Specification for Energy Metering',
    definition: 'Global standard communication protocol for smart meter data exchange.',
    category: 'Technology'
  },
  {
    term: 'POSH',
    fullForm: 'Prevention of Sexual Harassment',
    definition: 'Legal framework and company policy ensuring a safe workplace free from sexual harassment under the POSH Act 2013.',
    category: 'HR & Policy'
  },
  {
    term: 'PMS',
    fullForm: 'Performance Management System',
    definition: 'Esyasoft\'s annual appraisal framework evaluating employee goals, performance ratings (1 to 5), and career progression.',
    category: 'HR & Policy'
  },
  {
    term: 'PIP',
    fullForm: 'Performance Improvement Plan',
    definition: 'Structured developmental program (1 or 2 months) designed to support underperforming employees in meeting role expectations.',
    category: 'HR & Policy'
  },
  {
    term: 'LOP',
    fullForm: 'Loss of Pay',
    definition: 'Unpaid leave taken when leave balances are exhausted or leave is unapproved.',
    category: 'HR & Policy'
  },
  {
    term: 'Comp Off (CO)',
    fullForm: 'Compensatory Off',
    definition: 'Paid time off granted to employees who work on weekends or company-declared holidays under approved conditions.',
    category: 'HR & Policy'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How many days of Earned Leave (EL) do I get per year?',
    answer: 'Confirmed regular employees are entitled to 18 days of Earned Leave per calendar year, accrued at 1.5 days per completed month of service.',
    category: 'Leave & HR',
    sourceType: 'OFFICIAL',
    policyId: 'leave-policy'
  },
  {
    question: 'Can I apply for air travel for official business trips?',
    answer: 'Air travel is permitted only if the travel time between origin and destination exceeds 6 hours by road or rail. All air bookings must be Economy class and booked via Zoho Expense trip requests.',
    category: 'Travel & Expenses',
    sourceType: 'OFFICIAL',
    policyId: 'domestic-travel-policy'
  },
  {
    question: 'What is the referral bonus for recommending a candidate?',
    answer: 'A bonus of ₹20,000 (subject to applicable taxes) is awarded for each successful candidate referred for an eligible role posted on the Employee Referral Portal in Zoho Recruit, paid 90 days after their DOJ.',
    category: 'Leave & HR',
    sourceType: 'OFFICIAL',
    policyId: 'employee-referral-policy'
  },
  {
    question: 'When is annual goal setting completed in PMS?',
    answer: 'For existing employees, goal setting is completed by the end of May for the upcoming March appraisal cycle. For new joiners, goals must be assigned within 60 days of start date.',
    category: 'Performance & Career',
    sourceType: 'OFFICIAL',
    policyId: 'pms-policy'
  },
  {
    question: 'How do I claim reimbursement for an external technical certification?',
    answer: 'Prior approval MUST be obtained via email from your Reporting Manager, BU Head, and Head - Talent Development before enrolling. After completion, submit fee receipt and certificate in Zoho Expense. Note that costs > ₹10,000 carry a retention agreement up to 24 months.',
    category: 'Performance & Career',
    sourceType: 'OFFICIAL',
    policyId: 'training-certification-policy'
  },
  {
    question: 'What should I do on my first day at Esyasoft?',
    answer: 'Follow the CONNECT, ACCESS, ORIENT checklist in START HERE: meet your reporting manager, complete account & IT setup, login to Zoho People, and clarify initial role priorities.',
    category: 'Onboarding',
    sourceType: 'ONBOARDING GUIDANCE'
  },
  {
    question: 'Where can I find my payslip or salary revision letter?',
    answer: 'Login to Zoho People 5.0 -> Compensation Service -> Download Payslips or Revision Letters.',
    category: 'IT & Systems',
    sourceType: 'OFFICIAL',
    policyId: 'zoho-people-handbook'
  }
];
