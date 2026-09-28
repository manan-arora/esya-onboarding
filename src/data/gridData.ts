import type { GridNode } from '../types';

export const SYSTEM_GRID_NODES: GridNode[] = [
  {
    id: 'you',
    label: 'YOU',
    category: 'YOU',
    x: 50,
    y: 52,
    description: 'A new node entering the existing Esyasoft energy & information infrastructure system.',
    targetTab: 'START_HERE',
    targetSection: 'first-day',
    connectedTo: ['esyasoft', 'first-90', 'people', 'systems']
  },
  {
    id: 'esyasoft',
    label: 'ESYASOFT',
    category: 'COMPANY',
    x: 35,
    y: 30,
    description: 'Who we are, our history, purpose, values, global presence, and life at Esyasoft.',
    targetTab: 'ESYASOFT',
    targetSection: 'overview',
    connectedTo: ['you', 'business', 'culture', 'people']
  },
  {
    id: 'business',
    label: 'BUSINESS & ECOSYSTEM',
    category: 'BUSINESS',
    x: 65,
    y: 20,
    description: 'Energy ecosystem: Smart utility solutions, software, AI, BESS, e-Mobility, products & portfolio.',
    targetTab: 'ESYASOFT',
    targetSection: 'business-areas',
    connectedTo: ['esyasoft', 'technology', 'systems']
  },
  {
    id: 'technology',
    label: 'TECHNOLOGY',
    category: 'TECHNOLOGY',
    x: 82,
    y: 36,
    description: 'AMI, Head End Systems (HES), MDMS, Analytics, IoT, products and capabilities.',
    targetTab: 'ESYASOFT',
    targetSection: 'meter-to-decision',
    connectedTo: ['business', 'systems']
  },
  {
    id: 'culture',
    label: 'CULTURE & VALUES',
    category: 'CULTURE',
    x: 20,
    y: 42,
    description: 'People First, Technology Excellence, Delivery Excellence, and life at Esyasoft.',
    targetTab: 'ESYASOFT',
    targetSection: 'values',
    connectedTo: ['esyasoft', 'people']
  },
  {
    id: 'people',
    label: 'PEOPLE & TEAM',
    category: 'PEOPLE',
    x: 26,
    y: 65,
    description: 'How you connect with your manager, team, project, HR, and support network.',
    targetTab: 'HOW_WE_WORK',
    targetSection: 'communication',
    connectedTo: ['you', 'esyasoft', 'culture', 'how-we-work']
  },
  {
    id: 'how-we-work',
    label: 'HOW WE WORK',
    category: 'HOW_WE_WORK',
    x: 42,
    y: 78,
    description: 'Workflows, communication, meeting guidelines, documentation, help escalation, and performance.',
    targetTab: 'HOW_WE_WORK',
    targetSection: 'rhythm',
    connectedTo: ['people', 'policies']
  },
  {
    id: 'systems',
    label: 'SYSTEMS & IT',
    category: 'SYSTEMS',
    x: 72,
    y: 62,
    description: 'Zoho HRMS, Zoho Expense, MS Teams, access requests, applications hub, and IT onboarding.',
    targetTab: 'START_HERE',
    targetSection: 'systems',
    connectedTo: ['you', 'technology', 'policies']
  },
  {
    id: 'policies',
    label: 'POLICIES',
    category: 'POLICIES',
    x: 80,
    y: 80,
    description: 'Official Esyasoft policies: Leave, Travel, PMS, PIP, POSH, Referral, Reimbursements, Holidays.',
    targetTab: 'HOW_WE_WORK',
    targetSection: 'policy-library',
    connectedTo: ['systems', 'how-we-work']
  },
  {
    id: 'first-90',
    label: 'FIRST 90',
    category: 'FIRST_90',
    x: 58,
    y: 75,
    description: 'Simple route through your first three months: Connect, Understand, Participate, Contribute.',
    targetTab: 'FIRST_90',
    connectedTo: ['you', 'how-we-work']
  }
];
