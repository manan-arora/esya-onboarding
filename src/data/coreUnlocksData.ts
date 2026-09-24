import type { CoreUnlock } from '../types';

export const CORE_UNLOCKS_DATA: CoreUnlock[] = [
  {
    coreId: 'POWER',
    coreNumber: '01',
    challenge: {
      keyword: 'DISCOVER',
      description: "Find something about Esyasoft that you didn't know before."
    },
    experience: {
      title: 'Meet the People',
      description: 'Get closer to the people and expertise behind Esyasoft.',
      details: 'Connect directly with key engineering leaders and domain experts across Esyasoft. Gain first-hand context on ongoing smart grid projects and utility transformations.',
      instructions: 'Schedule a 1-on-1 coffee chat or reach out to your assigned cohort mentor via Slack or email.'
    }
  },
  {
    coreId: 'DOMAIN',
    coreNumber: '02',
    challenge: {
      keyword: 'CONNECT',
      description: 'Learn directly from someone working in the domain.'
    },
    experience: {
      title: 'Go Deeper',
      description: 'Explore a product or project that genuinely interests you.',
      details: 'Gain deep-dive access to Esyasoft’s Meter Data Management System (MDMS) or Advanced Metering Infrastructure (AMI) architecture documentation and sandbox environment.',
      instructions: 'Select one product repository or architecture doc in the GET library and review it with your buddy.'
    }
  },
  {
    coreId: 'NEURAL',
    coreNumber: '03',
    challenge: {
      keyword: 'EXPLORE',
      description: 'Take one topic beyond the curriculum and make it your own.'
    },
    experience: {
      title: 'Level Up',
      description: 'Unlock access to a premium learning resource, AI tool or course.',
      details: 'Unlock sponsored access to advanced .NET/C#, SQL performance tuning, or system architecture masterclasses.',
      instructions: 'Submit your requested topic to the GET program lead to activate your learning license.'
    }
  },
  {
    coreId: 'ENGINE',
    coreNumber: '04',
    challenge: {
      keyword: 'CREATE',
      description: "Turn what you've learned into something you can actually build."
    },
    experience: {
      title: 'Get Inside',
      description: 'Spend time with a project or team that catches your interest.',
      details: 'Shadow a live engineering sprint review or pair-program with a senior engineer on an active client feature deployment.',
      instructions: 'Choose an upcoming sprint ceremony from your team calendar and join as an active observer.'
    }
  },
  {
    coreId: 'DRIVE',
    coreNumber: '05',
    challenge: {
      keyword: 'CONTRIBUTE',
      description: 'Spot an opportunity and make one useful improvement or suggestion.'
    },
    experience: {
      title: 'One More Door',
      description: 'Unlock a final experience designed especially for your journey.',
      details: 'Present your GET program capstone proposal directly to executive engineering leadership and receive personalized career guidance.',
      instructions: 'Prepare your 5-minute lightning talk outline for the GET graduation panel.'
    }
  }
];
