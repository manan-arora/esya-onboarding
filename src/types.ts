export type CoreId = 'POWER' | 'DOMAIN' | 'NEURAL' | 'ENGINE' | 'DRIVE';

export interface CoreInfo {
  id: CoreId;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  dayStart: number;
  dayEnd: number;
  totalDays: number;
  color: string;
  highlights: string[];
}

export interface DayMission {
  day: number;
  title: string;
  coreId: CoreId;
  objective: string;
  learn: string[];
  practice: string[];
  checkpoint: string;
  unlockItem: string;
  estimatedMinutes?: number;
}

export type ViewTab = 'OVERVIEW' | 'JOURNEY' | 'TODAY' | 'GET_HUB' | 'DOCS' | 'VOLT';

export interface VoltCoreStatus {
  id: CoreId;
  name: string;
  percentage: number;
  completedDays: number;
  totalDays: number;
  isFullyBuilt: boolean;
}

export interface CoreUnlock {
  coreId: CoreId;
  coreNumber: string;
  challenge: {
    keyword: string;
    description: string;
  };
  experience: {
    title: string;
    description: string;
    details: string;
    instructions: string;
  };
}
