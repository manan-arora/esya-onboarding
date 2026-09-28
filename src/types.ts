export type ViewTab = 
  | 'HOME' 
  | 'START_HERE' 
  | 'ESYASOFT' 
  | 'BUSINESS' 
  | 'HOW_WE_WORK' 
  | 'WORKPLACE' 
  | 'FIRST_90' 
  | 'HELP';

export type ContentSourceType = 
  | 'OFFICIAL' 
  | 'COMPANY CONTEXT' 
  | 'ONBOARDING GUIDANCE' 
  | 'PROJECT / ROLE SPECIFIC';

export interface GridNode {
  id: string;
  label: string;
  category: 'COMPANY' | 'BUSINESS' | 'PEOPLE' | 'CULTURE' | 'TECHNOLOGY' | 'HOW_WE_WORK' | 'SYSTEMS' | 'POLICIES' | 'WORKPLACE' | 'FIRST_90' | 'YOU';
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  description: string;
  targetTab: ViewTab;
  targetSection?: string;
  connectedTo: string[];
}

export interface PolicyDoc {
  id: string;
  title: string;
  version: string;
  revisionDate: string;
  preparedBy: string;
  approvedBy: string;
  whatItAnswers: string[];
  keyThingsToKnow: string[];
  applicability: string;
  owner: string;
  contentMarkdown: string;
  fileName: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Smart Metering & AMI' | 'Grid Software & Analytics' | 'Energy Storage & BESS' | 'e-Mobility' | 'IoT & Automation';
  whatIsIt: string;
  whatProblemItSolves: string;
  whereItFits: string;
  relatedTechnology: string[];
  officialSource?: string;
}

export interface DataPipelineStage {
  id: string;
  step: number;
  name: string;
  shortName: string;
  description: string;
  esyasoftCapability: string;
  technicalDetails: string;
}

export interface ActionPathway {
  id: string;
  title: string;
  description: string;
  targetTab: ViewTab;
  targetSection?: string;
  policyId?: string;
  iconName?: string;
}

export interface SupportContact {
  role: string;
  description: string;
  contactMethod: string;
  emailOrChannel: string;
  whenToContact: string;
  escalationPath: string;
}

export interface GlossaryTerm {
  term: string;
  fullForm?: string;
  definition: string;
  category: 'Domain' | 'Esyasoft Product' | 'HR & Policy' | 'Technology';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Onboarding' | 'Leave & HR' | 'Travel & Expenses' | 'IT & Systems' | 'Performance & Career';
  sourceType: ContentSourceType;
  policyId?: string;
}
