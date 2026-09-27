import type { PhaseId, VoltCoreId, PhaseInfo, VoltCoreInfo, DayMission } from '../types';

export const PHASES: Record<PhaseId, PhaseInfo> = {
  ORIENT: {
    id: 'ORIENT',
    number: '01',
    name: 'ORIENT',
    subtitle: 'Company, Culture & Leadership',
    tagline: 'Foundations & Workplace Culture',
    description: 'Understand Esyasoft, our story, vision, core values, leadership, team structure, ways of working, and GET program expectations.',
    dayStart: 1,
    dayEnd: 5,
    totalDays: 5,
    color: '#8CFF00',
    weeks: [
      {
        title: 'Week 1 — Welcome & Program Foundations',
        topics: [
          'Welcome to Esyasoft & Executive Keynote',
          'Leadership Orientation & Organization Mapping',
          'HR Orientation, Culture & Workplace Conduct',
          'GET Program 90-Day Learning Methodology',
          'Personal Learning Roadmap & First Checkpoint'
        ]
      }
    ],
    deliverables: ['Company Introduction (1-min)', 'Personal Organization Map', 'Workplace Readiness Checklist', 'Personal Learning Roadmap'],
    milestone: 'Orient Phase Alignment & Cohort Welcome'
  },
  DISCOVER: {
    id: 'DISCOVER',
    number: '02',
    name: 'DISCOVER',
    subtitle: 'Energy Ecosystem & Domain',
    tagline: 'Understanding Products & Business Context',
    description: "Understand the energy ecosystem, Esyasoft solutions, smart metering, AMI 2.0, MDMS, BESS, EV Charging, gas distribution, project delivery, and business context.",
    dayStart: 6,
    dayEnd: 25,
    totalDays: 20,
    color: '#9CFF00',
    weeks: [
      {
        title: 'Week 1 — Energy Ecosystem & Smart Metering',
        topics: ['Global energy ecosystem & grid modernization', 'Smart meters & data acquisition (AMI 2.0)', 'MDMS & meter-to-decision data lifecycle']
      },
      {
        title: 'Week 2 — Esyasoft Solutions & Delivery Lifecycle',
        topics: ['Smart Utility Portfolio (Electricity, Water, Gas)', 'Project delivery lifecycle & Agile principles', 'BESS & Energy Storage Systems']
      },
      {
        title: 'Week 3 — Clean Energy Transition & Domain Expansion',
        topics: ['EV Charging ecosystems & CPMS', 'Gas distribution & cross-utility comparison', 'Business capability & email/presentation labs']
      },
      {
        title: 'Week 4 — Domain Challenge & Discover Review',
        topics: ['Team domain problem challenge', 'Domain solution map formulation', 'Discover Phase evaluation & sign-off']
      }
    ],
    deliverables: ['Energy Ecosystem Map', 'Meter-to-Decision Architecture Map', 'Product Solution Card', 'Requirement-to-Delivery Map', 'Domain Challenge Presentation'],
    milestone: 'Discover Phase Case Study Evaluation'
  },
  BUILD: {
    id: 'BUILD',
    number: '03',
    name: 'BUILD',
    subtitle: 'Engineering & Technical Foundations',
    tagline: 'Hands-on Software Development & Architecture',
    description: 'Master software engineering foundations, C# / .NET, SQL database modeling, Git workflows, REST APIs, microservices, cloud concepts, testing, and debugging.',
    dayStart: 26,
    dayEnd: 55,
    totalDays: 30,
    color: '#76E000',
    weeks: [
      {
        title: 'Week 1 — Development Setup & C# / .NET',
        topics: ['Docker containers & clean code principles', 'C# language fundamentals & OOP', 'Database modeling & SQL queries']
      },
      {
        title: 'Week 2 — Git & Backend Integration',
        topics: ['GitFlow branching strategy & PR reviews', 'RESTful API design & ASP.NET Core', 'Database integration & ORM']
      },
      {
        title: 'Week 3 — Full-Stack & Testing',
        topics: ['Frontend dashboard integration', 'Unit & integration testing strategies', 'Debugging lab & error handling']
      },
      {
        title: 'Week 4 — Systems & Cloud DevOps',
        topics: ['Microservices & message brokers (Kafka/RabbitMQ)', 'Docker containerization & CI/CD pipelines', 'Application & API security basics']
      },
      {
        title: 'Week 5 & 6 — GET Engineering Mini-Project',
        topics: ['Utility mini-project sprint build', 'Code freeze & technical documentation', 'Live engineering demonstration']
      }
    ],
    deliverables: ['Programming Exercise Set', '.NET Web Application', 'Database Schema + SQL Exercises', 'Working REST API', 'Engineering Mini-Project Prototype'],
    milestone: 'Build Phase Technical Review & Code Freeze'
  },
  SPECIALIZE: {
    id: 'SPECIALIZE',
    number: '04',
    name: 'SPECIALIZE',
    subtitle: 'Advanced Domain & Technical Tracks',
    tagline: 'Role-Specific Technical Track Deep-Dive',
    description: 'Deep-dive into role-specific tracks: Business Analyst track, Advanced Technical track, AI / ML track, or SolidWorks / Design track.',
    dayStart: 56,
    dayEnd: 80,
    totalDays: 25,
    color: '#A0FF33',
    weeks: [
      {
        title: 'Week 1 — Track Orientation & Foundations',
        topics: ['Specialization track assignment & expectations', 'Role-specific frameworks & toolchains', 'Track milestone project definition']
      },
      {
        title: 'Week 2 & 3 — Deep-Dive Role Engineering',
        topics: ['Track A: BA requirements & user stories', 'Track B: Microservices & distributed architecture', 'Track C: Machine learning & demand forecasting', 'Track D: 3D CAD modeling & assembly design']
      },
      {
        title: 'Week 4 — Track Capstone & SME Review',
        topics: ['Specialization capstone development', 'SME architecture defense & code review', 'Specialization track evaluation']
      }
    ],
    deliverables: ['Specialization Architecture Plan', 'Role-Specific Track Artifact / Prototype', 'Specialization Presentation'],
    milestone: 'Specialization Track Sign-Off'
  },
  CONTRIBUTE: {
    id: 'CONTRIBUTE',
    number: '05',
    name: 'CONTRIBUTE',
    subtitle: 'Capstone Project & Executive Showcase',
    tagline: 'Real-World Production Impact & Graduation',
    description: 'Apply your learning in team projects, collaborate with active engineering tribes, present to executive leadership, reflect, and graduate.',
    dayStart: 81,
    dayEnd: 90,
    totalDays: 10,
    color: '#B5FF55',
    weeks: [
      {
        title: 'Final Sprint — Capstone & Graduation Showcase',
        topics: [
          'Capstone kickoff & problem framing',
          'Research, ideation & solution architecture',
          'Prototype development & integration testing',
          'Executive presentation dry run & slide freeze',
          'GET Program Graduation Showcase & Celebration'
        ]
      }
    ],
    deliverables: ['Capstone Problem Statement', 'Solution Design Document', 'Tested Capstone Prototype', 'Executive Presentation Deck', '1-Year Growth Roadmap'],
    milestone: 'GET Program Graduation Showcase'
  }
};

export const VOLT_CORES: Record<VoltCoreId, VoltCoreInfo> = {
  POWER: {
    id: 'POWER',
    number: '01',
    name: 'POWER CORE',
    description: 'Calibrates Volt’s primary power chassis with company vision, workplace culture, and foundational energy knowledge.',
    dayStart: 1,
    dayEnd: 5,
    totalDays: 5,
    challenge: {
      keyword: 'DISCOVER',
      description: "Find something about Esyasoft that you didn't know before and share it with your buddy."
    }
  },
  DOMAIN: {
    id: 'DOMAIN',
    number: '02',
    name: 'DOMAIN CORE',
    description: 'Powers Volt’s domain sensors with smart metering, AMI 2.0, MDMS architecture, BESS, and utility solutions.',
    dayStart: 6,
    dayEnd: 25,
    totalDays: 20,
    challenge: {
      keyword: 'CONNECT',
      description: 'Learn directly from someone working in the domain about a live utility deployment.'
    }
  },
  NEURAL: {
    id: 'NEURAL',
    number: '03',
    name: 'NEURAL CORE',
    description: 'Powers Volt’s neural processor with C# services, SQL data modeling, Git workflows, and backend architecture.',
    dayStart: 26,
    dayEnd: 55,
    totalDays: 30,
    challenge: {
      keyword: 'EXPLORE',
      description: 'Take one technical topic beyond the curriculum and make it your own.'
    }
  },
  ENGINE: {
    id: 'ENGINE',
    number: '04',
    name: 'ENGINE CORE',
    description: 'Powers Volt’s high-velocity thrusters with specialized technical tracks, AI/ML models, and role-specific engineering.',
    dayStart: 56,
    dayEnd: 80,
    totalDays: 25,
    challenge: {
      keyword: 'CREATE',
      description: "Turn what you've learned into something useful you can actually build."
    }
  },
  DRIVE: {
    id: 'DRIVE',
    number: '05',
    name: 'DRIVE CORE',
    description: 'Powers Volt’s master quantum key with capstone project delivery, executive storytelling, and graduation.',
    dayStart: 81,
    dayEnd: 90,
    totalDays: 10,
    challenge: {
      keyword: 'CONTRIBUTE',
      description: 'Spot an opportunity and make one useful improvement or suggestion for your team.'
    }
  }
};

// Detailed Day Missions based on the official EGP 90-Day Onboarding Plan (docs/EGP_90_Day_Onboarding_Plan.md)
const DETAILED_MISSIONS: Record<number, Partial<DayMission>> = {
  1: {
    title: 'Welcome to Esyasoft',
    objective: 'Understand Esyasoft, our story, vision, core values, global footprint, and why the GET program exists.',
    learn: [
      'Company story: founded 2014, 50M+ connected endpoints across 12+ countries',
      'Vision: To be the world’s largest energy transition company',
      'Core values: People First, Technology Excellence, Delivery Excellence'
    ],
    practice: [
      'Create a one-minute pitch explaining: "What is Esyasoft and what does it do?"',
      'Set up your GET developer profile & connect with cohort buddy',
      'Explore the Esyasoft product suite overview'
    ],
    checkpoint: 'Deliver your 1-minute company introduction to your cohort buddy.',
    timeSchedule: [
      { time: '10:00', activity: 'Executive Welcome & Program Keynote', type: 'Trainer Session' },
      { time: '14:00', activity: '1-Minute Company Introduction Exercise', type: 'Learning Activity' },
      { time: '16:00', activity: 'Cohort Reflection & Daily Summary', type: 'Reflection' }
    ]
  },
  2: {
    title: 'Leadership & Organization Mapping',
    objective: 'Map the business problems Esyasoft solves to organizational functions, teams, and GET roles.',
    learn: [
      'Leadership orientation & organization overview',
      'Major business functions & engineering tribes',
      'How teams collaborate across global projects'
    ],
    practice: [
      'Map a business problem → Function → Team → GET Role',
      'Schedule mentor intro conversation',
      'Locate key internal channels & documentation hubs'
    ],
    checkpoint: 'Complete your personal Esyasoft organization map.',
    timeSchedule: [
      { time: '10:00', activity: 'Leadership Orientation & Org Deep-Dive', type: 'Trainer Session' },
      { time: '14:00', activity: 'Personal Organization Mapping Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Reflection & Mentor Q&A', type: 'Reflection' }
    ]
  },
  3: {
    title: 'HR, Culture & Workplace Conduct',
    objective: 'Understand workplace policies, professional ethics, communication hygiene, and POSH awareness.',
    learn: [
      'HR orientation & company culture fundamentals',
      'Workplace etiquette, communication, and escalation pathways',
      'POSH awareness & professional standards'
    ],
    practice: [
      'Work through scenario-based workplace exercises',
      'Practice blocker escalation & delay notification templates',
      'Complete HR onboarding documentation'
    ],
    checkpoint: 'Complete the GET workplace readiness checklist.',
    timeSchedule: [
      { time: '10:00', activity: 'HR Orientation & Workplace Fundamentals', type: 'Trainer Session' },
      { time: '14:00', activity: 'Workplace Scenario Simulation Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Readiness Checklist Submission', type: 'Reflection' }
    ]
  },
  4: {
    title: 'Your GET Journey & Roadmap',
    objective: 'Understand the 90-day learning methodology (10% Learn, 20% Interact, 70% Apply) and create your personal roadmap.',
    learn: [
      '90-day program structure: Orient → Discover → Build → Specialize → Contribute',
      'Learning methodology: 10% Learn → 20% Interact → 70% Apply',
      'Mentorship, evaluation benchmarks, and capstone expectations'
    ],
    practice: [
      'Inventory existing skills vs skills to develop',
      'Identify domain & technical topics to explore',
      'Draft your 90-day personal learning roadmap'
    ],
    checkpoint: 'Submit your personal 90-day learning roadmap.',
    timeSchedule: [
      { time: '10:00', activity: 'GET Program Methodology Keynote', type: 'Trainer Session' },
      { time: '14:00', activity: 'Personal Learning Roadmap Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Roadmap Peer Exchange & Feedback', type: 'Reflection' }
    ]
  },
  5: {
    title: 'Orient Phase Alignment & Review',
    objective: 'Consolidate Orient phase learnings and confirm readiness for the Discover phase.',
    learn: [
      'Orient phase synthesis & review',
      'Cross-functional alignment best practices',
      'Preparing for domain immersion in DISCOVER'
    ],
    practice: [
      'Answer the 6 Orient Checkpoint questions',
      'Present your learning roadmap to your mentor',
      'Review cohort readiness feedback'
    ],
    checkpoint: 'Pass the Orient Phase milestone alignment review.',
    timeSchedule: [
      { time: '10:00', activity: 'Orient Phase Review & Synthesis', type: 'Trainer Session' },
      { time: '14:00', activity: 'Checkpoint Defense & Roadmap Review', type: 'Learning Activity' },
      { time: '16:00', activity: 'Milestone Sign-Off Ceremony', type: 'Reflection' }
    ]
  },
  6: {
    title: 'Energy & Utility Ecosystem (Part 1)',
    objective: 'Understand the global utility landscape, electricity generation, transmission, distribution, and AT&C losses.',
    learn: [
      'Global energy ecosystem: Generation → Transmission → Distribution → Utility → Consumer',
      'Grid modernization & AT&C loss reduction',
      'Energy transition & renewable integration'
    ],
    practice: [
      'Analyze the electricity value chain',
      'Participate in group discussion: "What problems do utilities face?"',
      'Begin constructing your Energy Ecosystem Map'
    ],
    checkpoint: 'Identify 3 primary causes of AT&C losses in power distribution.',
    timeSchedule: [
      { time: '10:00', activity: 'Energy Ecosystem Keynote', type: 'Trainer Session' },
      { time: '14:00', activity: 'Value Chain Mapping Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Reflection & Discussion', type: 'Reflection' }
    ]
  },
  7: {
    title: 'Energy & Utility Ecosystem (Part 2)',
    objective: 'Deepen understanding of distributed energy resources (DERs), demand response, and grid modernization.',
    learn: [
      'Distributed Energy Resources (DERs) & microgrids',
      'Demand response mechanics & load management',
      'Energy arbitrage & peak shaving principles'
    ],
    practice: [
      'Complete the Energy Ecosystem Map',
      'Map physical grid nodes to digital data points',
      'Present map to cohort group'
    ],
    checkpoint: 'Submit your completed Energy Ecosystem Map.',
    timeSchedule: [
      { time: '10:00', activity: 'DERs & Demand Response Session', type: 'Trainer Session' },
      { time: '14:00', activity: 'Ecosystem Map Finalization', type: 'Learning Activity' },
      { time: '16:00', activity: 'Cohort Map Review', type: 'Reflection' }
    ]
  },
  8: {
    title: 'Smart Metering & Data Acquisition',
    objective: 'Understand smart meters, traditional vs smart metering, AMI architecture, and telemetry data acquisition.',
    learn: [
      'Smart meter hardware, sensors, and remote operations',
      'AMI communication protocols: DLMS/COSEM, RF Mesh, Cellular NB-IoT',
      'Gateways, Data Concentrator Units (DCUs), and Head End Systems (HES)'
    ],
    practice: [
      'Trace data flow: Meter → Gateway/DCU → Communication → HES',
      'Compare interval data vs traditional manual monthly reads',
      'Draft Meter-to-Data flow diagram'
    ],
    checkpoint: 'Explain why raw meter collection requires gateway aggregation and protocol translation.',
    timeSchedule: [
      { time: '10:00', activity: 'Smart Metering & AMI Architecture', type: 'Trainer Session' },
      { time: '14:00', activity: 'Meter-to-Data Flow Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Reflection & Q&A', type: 'Reflection' }
    ]
  },
  11: {
    title: 'MDMS & Data Intelligence',
    objective: 'Understand Meter Data Management Systems (MDMS), Validation, Editing & Estimation (VEE), and utility decision analytics.',
    learn: [
      'HES vs MDMS responsibilities in smart grid deployments',
      'Validation, Editing, and Estimation (VEE) rules engine',
      'How utilities use interval data for billing, load profiling, and outage detection'
    ],
    practice: [
      'Trace data journey: Meter → HES → MDMS → Analytics → Utility Action',
      'Simulate a VEE validation rule for missing interval readings',
      'Draft the Meter-to-Decision Architecture Map'
    ],
    checkpoint: 'Submit your Meter-to-Decision Architecture Map.',
    timeSchedule: [
      { time: '10:00', activity: 'MDMS & VEE Engine Architecture', type: 'Trainer Session' },
      { time: '14:00', activity: 'VEE Rule Simulation Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }
    ]
  },
  14: {
    title: 'Esyasoft Smart Utility Portfolio',
    objective: 'Explore Esyasoft’s multi-utility solutions across electricity, water, gas, and connected IoT infrastructure.',
    learn: [
      'Smart Utility portfolio: Electricity, Water, and Gas solutions',
      'IoT gateways, multi-meter gateways, and gas meter retrofits',
      'Value creation: Physical → Connected → Data → Software → Intelligence → Action'
    ],
    practice: [
      'Select one Esyasoft product solution and analyze 5 dimensions',
      'Answer: Problem, User, Tech, Data, Outcome',
      'Draft Product Solution Card'
    ],
    checkpoint: 'Submit your Product Solution Card.',
    timeSchedule: [
      { time: '10:00', activity: 'Smart Utility Portfolio Showcase', type: 'Trainer Session' },
      { time: '14:00', activity: 'Product Solution Card Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Product Card Presentation', type: 'Reflection' }
    ]
  },
  16: {
    title: 'Project Delivery & Agile Foundations',
    objective: 'Understand project lifecycle from requirements to deployment, sprint mechanics, and Agile teamwork.',
    learn: [
      'Project delivery lifecycle: Requirements → Design → Dev → Test → Deploy',
      'Agile principles: Epics, User Stories, Sprints, Stand-ups, Retrospectives',
      'How engineering, QA, and project management collaborate'
    ],
    practice: [
      'Map a sample utility requirement through project lifecycle',
      'Write 3 user stories with acceptance criteria',
      'Draft Requirement-to-Delivery Map'
    ],
    checkpoint: 'Submit Requirement-to-Delivery Map.',
    timeSchedule: [
      { time: '10:00', activity: 'Project Delivery & Agile Masterclass', type: 'Trainer Session' },
      { time: '14:00', activity: 'Agile Requirement Mapping Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Stand-up Simulation', type: 'Reflection' }
    ]
  },
  18: {
    title: 'BESS & Energy Storage Systems',
    objective: 'Master Battery Energy Storage Systems (BESS), peak load shaving, frequency regulation, and grid stability.',
    learn: [
      'Utility-scale BESS architecture & key components',
      'Use cases: Peak shaving, load shifting, frequency regulation, microgrids',
      'Esyasoft Tesla collaboration context & energy management'
    ],
    practice: [
      'Analyze an energy scenario: decide when to charge vs discharge',
      'Calculate peak demand reduction for a sample commercial consumer',
      'Draft BESS Use-Case Analysis'
    ],
    checkpoint: 'Submit BESS Use-Case Analysis.',
    timeSchedule: [
      { time: '10:00', activity: 'BESS & Energy Storage Masterclass', type: 'Trainer Session' },
      { time: '14:00', activity: 'BESS Charge/Discharge Simulation Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Reflection & Discussion', type: 'Reflection' }
    ]
  },
  19: {
    title: 'EV Charging & CPMS',
    objective: 'Understand Electric Vehicle charging infrastructure, Charge Point Management Systems (CPMS), and fleet electrification.',
    learn: [
      'EV chargers (AC/DC fast charging) & driver platforms',
      'CPMS monitoring, load management, pricing, and payments',
      'Esyasoft ABB E-mobility partnership context'
    ],
    practice: [
      'Map: EV → Charger → CPMS → Utility Grid → Analytics',
      'Evaluate charging load optimization under grid constraints',
      'Draft EV Charging Ecosystem Map'
    ],
    checkpoint: 'Submit EV Charging Ecosystem Map.',
    timeSchedule: [
      { time: '10:00', activity: 'e-Mobility & CPMS Masterclass', type: 'Trainer Session' },
      { time: '14:00', activity: 'EV Ecosystem Mapping Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }
    ]
  },
  23: {
    title: 'Business Capability & Workplace Skills',
    objective: 'Develop professional business communication, email writing, stakeholder management, and presentation skills.',
    learn: [
      'Business email communication & progress updates',
      'Meeting management: Agendas, MoMs, Action Owners',
      'Stakeholder communication & handling unclear requirements'
    ],
    practice: [
      'Email Lab: Write update on a delayed task with blocker context',
      'Presentation Lab: Deliver 5-min domain concept talk',
      'Mock Meeting: Conduct short project stand-up meeting'
    ],
    checkpoint: 'Complete the Business Communication & Stakeholder Simulation.',
    timeSchedule: [
      { time: '10:00', activity: 'Business Communication Workshop', type: 'Trainer Session' },
      { time: '14:00', activity: 'Practical Email & Presentation Labs', type: 'Learning Activity' },
      { time: '16:00', activity: 'Stakeholder Simulation Review', type: 'Reflection' }
    ]
  },
  25: {
    title: 'Discover Phase Team Challenge & Review',
    objective: 'Complete the Team Domain Challenge, present your solution, and receive Discover Phase sign-off.',
    learn: [
      'Discover Phase synthesis: Problem → Domain → Solution → Technology → Outcome',
      'Formulating utility business cases',
      'Preparing for technical software immersion in BUILD'
    ],
    practice: [
      'Teams solve a realistic utility problem statement',
      'Deliver 5-minute team domain solution presentation',
      'Receive mentor evaluation & milestone sign-off'
    ],
    checkpoint: 'Pass the Discover Phase milestone evaluation.',
    timeSchedule: [
      { time: '10:00', activity: 'Team Domain Challenge Kickoff', type: 'Trainer Session' },
      { time: '14:00', activity: 'Team Solution Presentations', type: 'Learning Activity' },
      { time: '16:00', activity: 'Discover Phase Sign-Off Ceremony', type: 'Reflection' }
    ]
  },
  26: {
    title: 'Development Foundations & Environment Setup',
    objective: 'Configure your developer workstation, Docker containers, clean code principles, and IDE tooling.',
    learn: [
      'Clean code principles & SOLID design patterns',
      'Docker Compose setup for PostgreSQL and Redis',
      'Data structures & algorithms review'
    ],
    practice: [
      'Spin up local development containers with Docker Compose',
      'Set up environment variables & launch configurations',
      'Complete programming exercise set 1'
    ],
    checkpoint: 'Spin up developer environment in under 3 minutes.',
    timeSchedule: [
      { time: '10:00', activity: 'Development Setup & Clean Code', type: 'Trainer Session' },
      { time: '14:00', activity: 'Docker Compose Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Environment Audit', type: 'Reflection' }
    ]
  },
  30: {
    title: 'C# / .NET Foundation',
    objective: 'Master C# language syntax, Object-Oriented Programming, collections, LINQ, and ASP.NET Core web services.',
    learn: [
      'C# OOP: Classes, Interfaces, Inheritance, Polymorphism',
      'LINQ query syntax & collection manipulation',
      'Async/await asynchronous programming pattern'
    ],
    practice: [
      'Build a small C# console application for meter data calculation',
      'Refactor code to implement repository interface pattern',
      'Write unit tests for data service'
    ],
    checkpoint: 'Submit working .NET console application with clean unit tests.',
    timeSchedule: [
      { time: '10:00', activity: 'C# & .NET Architecture Session', type: 'Trainer Session' },
      { time: '14:00', activity: 'Console App & LINQ Coding Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Code Review & Reflection', type: 'Reflection' }
    ]
  },
  34: {
    title: 'Databases & SQL Data Modeling',
    objective: 'Design relational database schemas, write SQL queries, joins, aggregations, and index utility data tables.',
    learn: [
      'Relational database design: Tables, Keys, Normalization',
      'SQL CRUD operations, Joins, Group By, Aggregation',
      'Indexing basics for meter reading time-series data'
    ],
    practice: [
      'Design utility database schema: Customer, Meter, Reading, Device',
      'Write SQL queries for monthly billing & peak consumption',
      'Optimize query execution plan with indexes'
    ],
    checkpoint: 'Submit Database Schema + SQL Exercise Set.',
    timeSchedule: [
      { time: '10:00', activity: 'Relational Database Design', type: 'Trainer Session' },
      { time: '14:00', activity: 'SQL Schema & Query Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Query Performance Review', type: 'Reflection' }
    ]
  },
  37: {
    title: 'Git & Engineering Workflow',
    objective: 'Master Git branching (GitFlow), commits, pull requests, merge conflict resolution, and peer code reviews.',
    learn: [
      'Git repository structure: Clone, Branch, Commit, Pull, Push',
      'Pull requests, merge conflicts, and review hygiene',
      'Branching strategy: main, develop, feature branches'
    ],
    practice: [
      'Work in pairs on a shared repository',
      'Deliberately create and resolve a merge conflict',
      'Submit and review a peer Pull Request'
    ],
    checkpoint: 'Complete collaborative Git PR exercise with conflict resolution.',
    timeSchedule: [
      { time: '10:00', activity: 'Git & Engineering Workflow', type: 'Trainer Session' },
      { time: '14:00', activity: 'Collaborative Git Conflict Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'PR Review & Reflection', type: 'Reflection' }
    ]
  },
  38: {
    title: 'APIs & Backend Web Services',
    objective: 'Build RESTful Web APIs, HTTP request/response flows, JSON serialization, and database persistence.',
    learn: [
      'REST API design: Endpoints, HTTP Verbs, Status Codes',
      'ASP.NET Core Web API controllers & Dependency Injection',
      'Entity Framework Core ORM database integration'
    ],
    practice: [
      'Build REST endpoints for Meter management and Reading ingestion',
      'Add input validation & error handling middleware',
      'Test endpoints using Swagger / Postman'
    ],
    checkpoint: 'Submit working REST API for smart meter management.',
    timeSchedule: [
      { time: '10:00', activity: 'REST API Architecture & Web Services', type: 'Trainer Session' },
      { time: '14:00', activity: 'ASP.NET Core API Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'API Testing & Review', type: 'Reflection' }
    ]
  },
  42: {
    title: 'Frontend Integration & UI Dashboard',
    objective: 'Connect frontend interfaces to backend REST APIs, handle state, loading states, and display interval metrics.',
    learn: [
      'Frontend fundamentals: Component state, props, effect hooks',
      'Consuming REST APIs & handling network errors',
      'Dashboard layout for utility meter data visualization'
    ],
    practice: [
      'Build a Smart Meter Dashboard component',
      'Display customer, meter info, latest reading, and status',
      'Implement search & filter controls'
    ],
    checkpoint: 'Submit working full-stack Smart Meter Dashboard feature.',
    timeSchedule: [
      { time: '10:00', activity: 'Full-Stack Integration Architecture', type: 'Trainer Session' },
      { time: '14:00', activity: 'Dashboard Frontend Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Integration Demo', type: 'Reflection' }
    ]
  },
  45: {
    title: 'Testing, Debugging & Observability',
    objective: 'Implement unit tests, integration tests, reproduce defects in buggy codebases, and log diagnostic output.',
    learn: [
      'Testing pyramid: Unit tests, Integration tests, E2E tests',
      'Debugging techniques & log inspection',
      'Error handling, defensive assertions, and fallback policies'
    ],
    practice: [
      'Debugging challenge: receive a broken application codebase',
      'Reproduce issue, identify root cause, fix bug, add test',
      'Submit Debugging Report + Unit Tests'
    ],
    checkpoint: 'Fix assigned debugging challenge and pass all unit tests.',
    timeSchedule: [
      { time: '10:00', activity: 'Testing & Debugging Strategies', type: 'Trainer Session' },
      { time: '14:00', activity: 'Broken Codebase Debugging Challenge', type: 'Learning Activity' },
      { time: '16:00', activity: 'Debugging Report Defense', type: 'Reflection' }
    ]
  },
  48: {
    title: 'Systems, Messaging & Integration',
    objective: 'Understand microservices vs monoliths, message queues (RabbitMQ/Kafka), and event-driven data pipelines.',
    learn: [
      'Monolith vs microservices architectural patterns',
      'Publish/Subscribe messaging with RabbitMQ or Kafka',
      'Event-driven data processing for high-volume meter streams'
    ],
    practice: [
      'Build a simple event-driven flow:',
      'Meter Reading → Event Broker → Consumer → Database',
      'Verify async message processing'
    ],
    checkpoint: 'Demonstrate event-driven mini pipeline.',
    timeSchedule: [
      { time: '10:00', activity: 'Messaging & Event-Driven Architecture', type: 'Trainer Session' },
      { time: '14:00', activity: 'Message Queue Pipeline Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Pipeline Demo & Reflection', type: 'Reflection' }
    ]
  },
  51: {
    title: 'DevOps, Cloud & CI/CD Pipelines',
    objective: 'Containerize applications with Docker, configure environment variables, and build automated CI/CD pipelines.',
    learn: [
      'Linux command-line basics & shell environment',
      'Docker containerization & multi-stage builds',
      'CI/CD concepts: build, test, and deploy pipelines'
    ],
    practice: [
      'Create Dockerfile for backend service',
      'Set up GitHub Actions / CI pipeline configuration',
      'Verify automated build & test execution'
    ],
    checkpoint: 'Submit containerized application + automated CI pipeline.',
    timeSchedule: [
      { time: '10:00', activity: 'DevOps & CI/CD Foundations', type: 'Trainer Session' },
      { time: '14:00', activity: 'Dockerfile & CI Pipeline Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Pipeline Verification', type: 'Reflection' }
    ]
  },
  54: {
    title: 'Engineering Mini-Project Sprint (Day 1)',
    objective: 'Kick off the 2-day engineering mini-project sprint bringing together frontend, API, database, and tests.',
    learn: [
      'Mini-project requirements & system architecture blueprint',
      'Sprint backlog planning & task breakdown',
      'Code quality & repository hygiene expectations'
    ],
    practice: [
      'Initialize mini-project repository',
      'Build database schema & REST API backend',
      'Integrate frontend UI'
    ],
    checkpoint: 'Complete backend API & database persistence slice.',
    timeSchedule: [
      { time: '10:00', activity: 'Mini-Project Architecture Kickoff', type: 'Trainer Session' },
      { time: '14:00', activity: 'Full-Stack Development Sprint', type: 'Learning Activity' },
      { time: '16:00', activity: 'Day 1 Code Review', type: 'Reflection' }
    ]
  },
  55: {
    title: 'Engineering Mini-Project Demo & Build Sign-Off',
    objective: 'Finalize mini-project codebase, write technical documentation, and present live to technical leadership.',
    learn: [
      'Preparing live engineering software demos',
      'Technical README documentation & architecture diagrams',
      'Refactoring and code freeze hygiene'
    ],
    practice: [
      'Perform code freeze & final testing',
      'Deliver live mini-project demonstration',
      'Receive mentor evaluation & sign-off'
    ],
    checkpoint: 'Pass Build Phase evaluation and receive mini-project sign-off.',
    timeSchedule: [
      { time: '10:00', activity: 'Code Freeze & Demo Prep', type: 'Trainer Session' },
      { time: '14:00', activity: 'Live Mini-Project Demonstrations', type: 'Learning Activity' },
      { time: '16:00', activity: 'Build Phase Sign-Off Ceremony', type: 'Reflection' }
    ]
  },
  56: {
    title: 'Specialization Track Orientation',
    objective: 'Understand role expectations, responsibilities, toolchains, and project criteria for your chosen specialization track.',
    learn: [
      'Specialization track overview (BA, Advanced Tech, AI/ML, SolidWorks)',
      'Role expectations & engineering career paths',
      'Specialization track milestone project overview'
    ],
    practice: [
      'Review track assignment & syllabus',
      'Draft your Personal Specialization Plan',
      'Meet with your track mentor'
    ],
    checkpoint: 'Submit Personal Specialization Plan.',
    timeSchedule: [
      { time: '10:00', activity: 'Specialization Keynote & Track Allocation', type: 'Trainer Session' },
      { time: '14:00', activity: 'Specialization Plan Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Track Mentor Q&A', type: 'Reflection' }
    ]
  },
  65: {
    title: 'Specialization Track Deep-Dive',
    objective: 'Advance deep-dive engineering in your assigned track (BA User Stories, Microservices, AI Models, or 3D CAD).',
    learn: [
      'Track A: Epics, User Stories & Acceptance Criteria',
      'Track B: Microservices & Event Streaming with Kafka',
      'Track C: Predictive load models & anomaly detection algorithms',
      'Track D: 3D assembly modeling & finite element analysis'
    ],
    practice: [
      'Execute track-specific laboratory exercises',
      'Build specialized prototype component',
      'Conduct peer code/design review'
    ],
    checkpoint: 'Complete specialization track deep-dive lab assignment.',
    timeSchedule: [
      { time: '10:00', activity: 'Specialization Masterclass', type: 'Trainer Session' },
      { time: '14:00', activity: 'Specialized Track Lab Sprint', type: 'Learning Activity' },
      { time: '16:00', activity: 'Track Peer Review', type: 'Reflection' }
    ]
  },
  80: {
    title: 'Specialization Track SME Defense & Sign-Off',
    objective: 'Defend your specialization track prototype/artifact before senior SMEs and receive track sign-off.',
    learn: [
      'Technical architecture defense strategies',
      'Evaluating solution quality, documentation, and problem solving',
      'Transitioning from specialization to capstone team delivery'
    ],
    practice: [
      'Deliver 10-minute specialization track defense',
      'Answer SME technical Q&A',
      'Receive formal Specialization Track Sign-off'
    ],
    checkpoint: 'Pass Specialization Track SME defense and receive track sign-off.',
    timeSchedule: [
      { time: '10:00', activity: 'Specialization SME Defense Panel', type: 'Trainer Session' },
      { time: '14:00', activity: 'Track Defense Demonstrations', type: 'Learning Activity' },
      { time: '16:00', activity: 'Specialize Phase Sign-Off Ceremony', type: 'Reflection' }
    ]
  },
  81: {
    title: 'Capstone Kickoff & Problem Framing',
    objective: 'Form capstone teams, receive realistic utility business problem, and define team problem statement.',
    learn: [
      'Capstone expectations & evaluation criteria',
      'Team organization & Agile role allocation',
      'Utility business problem framing'
    ],
    practice: [
      'Form GET capstone team',
      'Define problem statement, target user, scope, and success criteria',
      'Submit Capstone Problem Statement'
    ],
    checkpoint: 'Submit Capstone Problem Statement.',
    timeSchedule: [
      { time: '10:00', activity: 'Capstone Program Kickoff Keynote', type: 'Trainer Session' },
      { time: '14:00', activity: 'Problem Framing & Team Charter Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Problem Statement Review', type: 'Reflection' }
    ]
  },
  84: {
    title: 'Capstone Solution Design & Architecture',
    objective: 'Create system architecture, process flows, UI/UX wireframes, and database models for capstone project.',
    learn: [
      'System architecture design & component diagrams',
      'Data modeling & API interface contracts',
      'UI/UX design principles for utility operations'
    ],
    practice: [
      'Draft system architecture diagram',
      'Define REST API contracts & database schema',
      'Submit Capstone Solution Design Document'
    ],
    checkpoint: 'Submit Capstone Solution Design Document.',
    timeSchedule: [
      { time: '10:00', activity: 'Solution Architecture Workshop', type: 'Trainer Session' },
      { time: '14:00', activity: 'Architecture & Design Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Mentor Architecture Review', type: 'Reflection' }
    ]
  },
  85: {
    title: 'Capstone Development Sprint (Build Phase)',
    objective: 'Build working software prototype in team sprint with Git version control, testing, and mentor reviews.',
    learn: [
      'Team sprint execution & backlog management',
      'Continuous integration & testing strategies',
      'Handling blockers & sprint velocity'
    ],
    practice: [
      'Develop core prototype features',
      'Execute integration tests',
      'Conduct daily team stand-up'
    ],
    checkpoint: 'Demonstrate working capstone prototype core flow.',
    timeSchedule: [
      { time: '10:00', activity: 'Capstone Build Sprint Stand-up', type: 'Trainer Session' },
      { time: '14:00', activity: 'Team Coding & Integration Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Mentor Clinic & Blocker Review', type: 'Reflection' }
    ]
  },
  88: {
    title: 'Capstone Test, Refine & Documentation',
    objective: 'Perform end-to-end testing, bug fixes, UI refinement, and complete user/technical documentation.',
    learn: [
      'Software quality assurance & usability testing',
      'Technical documentation & user guides',
      'Preparing executive presentations'
    ],
    practice: [
      'Run end-to-end integration tests & fix defects',
      'Finalize repository README & architecture docs',
      'Prepare demonstration script'
    ],
    checkpoint: 'Submit Tested Prototype + Complete Documentation.',
    timeSchedule: [
      { time: '10:00', activity: 'Quality Assurance & Refinement', type: 'Trainer Session' },
      { time: '14:00', activity: 'E2E Testing & Documentation Lab', type: 'Learning Activity' },
      { time: '16:00', activity: 'Prototype Freeze Review', type: 'Reflection' }
    ]
  },
  89: {
    title: 'Executive Presentation Dry Run',
    objective: 'Rehearse 10-minute executive capstone presentation deck, dry run live demo, and freeze presentation slides.',
    learn: [
      'Executive storytelling & high-impact slide design',
      'Handling executive Q&A & demonstrating business ROI',
      'Live software demo staging & fallback strategy'
    ],
    practice: [
      'Deliver dry run presentation to mentor panel',
      'Incorporate presentation feedback',
      'Freeze presentation slides'
    ],
    checkpoint: 'Complete presentation dry run and freeze slide deck.',
    timeSchedule: [
      { time: '10:00', activity: 'Executive Presentation Masterclass', type: 'Trainer Session' },
      { time: '14:00', activity: 'Team Presentation Dry Runs', type: 'Learning Activity' },
      { time: '16:00', activity: 'Slide Deck Freeze', type: 'Reflection' }
    ]
  },
  90: {
    title: 'Final Capstone Showcase & GET Graduation',
    objective: 'Present your team capstone solution to executive leadership, reflect on your 90-day growth, and graduate!',
    learn: [
      'GET program 90-day journey reflection',
      '1-Year Engineering Growth Roadmap',
      'Transitioning to active engineering teams & tribes'
    ],
    practice: [
      'Deliver final executive capstone presentation & demo',
      'Receive graduation certificate & award recognition',
      'Celebrate with cohort, mentors, and executive leaders!'
    ],
    checkpoint: 'Graduate from the 90-Day Esyasoft GET Development Program!',
    timeSchedule: [
      { time: '10:00', activity: 'Executive Capstone Showcase Keynote', type: 'Trainer Session' },
      { time: '14:00', activity: 'GET Graduation & Placement Ceremony', type: 'Learning Activity' },
      { time: '16:00', activity: 'Cohort Reflection & Celebration', type: 'Reflection' }
    ]
  }
};

// Generate complete 90-day missions array dynamically
export const MISSIONS: DayMission[] = Array.from({ length: 90 }, (_, index) => {
  const day = index + 1;
  let phaseId: PhaseId = 'ORIENT';

  if (day >= 1 && day <= 5) {
    phaseId = 'ORIENT';
  } else if (day >= 6 && day <= 25) {
    phaseId = 'DISCOVER';
  } else if (day >= 26 && day <= 55) {
    phaseId = 'BUILD';
  } else if (day >= 56 && day <= 80) {
    phaseId = 'SPECIALIZE';
  } else {
    phaseId = 'CONTRIBUTE';
  }

  // Check if detailed explicit mission exists
  if (DETAILED_MISSIONS[day]) {
    const dm = DETAILED_MISSIONS[day];
    return {
      day,
      title: dm.title || `Day ${day} Mission`,
      phaseId,
      objective: dm.objective || `Curriculum details for Day ${day} in ${PHASES[phaseId].name} Phase.`,
      learn: dm.learn || [
        `Module ${String(day).padStart(2, '0')} — Core Domain & Technical Foundations`,
        'Trainer-led interactive session & framework overview',
        'Cohort discussion & practical application'
      ],
      practice: dm.practice || [
        `Explore Day ${day} hands-on exercise slot`,
        'Review technical documentation & architectural patterns',
        'Complete daily self-reflection & notes'
      ],
      checkpoint: dm.checkpoint || `Complete Day ${day} learning milestone checkpoint.`,
      timeSchedule: dm.timeSchedule || [
        { time: '10:00', activity: `Trainer Session (Day ${day})`, type: 'Trainer Session' },
        { time: '14:00', activity: 'Learning Activity Slot', type: 'Learning Activity' },
        { time: '16:00', activity: 'Daily Reflection & Log Entry', type: 'Reflection' }
      ]
    };
  }

  // Clean structured sample mission for remaining slots
  return {
    day,
    title: `Day ${String(day).padStart(2, '0')} — ${PHASES[phaseId].subtitle}`,
    phaseId,
    objective: `Module ${String(day).padStart(2, '0')} in ${PHASES[phaseId].name} Phase (Days ${PHASES[phaseId].dayStart}–${PHASES[phaseId].dayEnd}). Practical 10-20-70 learning implementation.`,
    learn: [
      `10% Learn: Structured trainer session for Day ${day}`,
      'Technical concepts, domain patterns, and architecture overview',
      'Live code/solution demonstrations & guided reading'
    ],
    practice: [
      `70% Apply: Hands-on lab / exercise slot for Day ${day}`,
      '20% Interact: Mentor review & peer collaboration',
      'Document key takeaways in personal learning roadmap'
    ],
    checkpoint: `Complete Day ${day} checkpoint task and log progress.`,
    timeSchedule: [
      { time: '10:00', activity: `Trainer Session — Day ${day} Topic`, type: 'Trainer Session' },
      { time: '14:00', activity: 'Practical Learning Activity Slot', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Reflection & Stand-up', type: 'Reflection' }
    ]
  };
});
