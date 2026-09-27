export type PhaseId = 'ORIENT' | 'DISCOVER' | 'BUILD' | 'SPECIALIZE' | 'CONTRIBUTE';
export type VoltCoreId = 'POWER' | 'DOMAIN' | 'NEURAL' | 'ENGINE' | 'DRIVE';

export interface PhaseInfo {
  id: PhaseId;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  dayStart: number;
  dayEnd: number;
  totalDays: number;
  color: string;
  weeks?: {
    title: string;
    topics: string[];
  }[];
  deliverables?: string[];
  milestone?: string;
}

export interface VoltCoreInfo {
  id: VoltCoreId;
  number: string;
  name: string;
  description: string;
  dayStart: number;
  dayEnd: number;
  totalDays: number;
  challenge: {
    keyword: string;
    description: string;
  };
}

export interface DayMission {
  day: number;
  title: string;
  phaseId: PhaseId;
  objective: string;
  learn: string[];
  practice: string[];
  checkpoint: string;
  timeSchedule?: {
    time: string;
    activity: string;
    type: 'Trainer Session' | 'Learning Activity' | 'Reflection';
  }[];
}

export type ViewTab = 'HOME' | 'JOURNEY' | 'GUIDE' | 'VOLT';

export interface VoltCoreStatus {
  id: VoltCoreId;
  name: string;
  percentage: number;
  completedDays: number;
  totalDays: number;
  isFullyBuilt: boolean;
  isLocked: boolean;
  isInProgress: boolean;
  isComplete: boolean;
}
