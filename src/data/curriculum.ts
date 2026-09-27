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
    subtitle: 'Role-Specific Technical Track',
    tagline: 'Deep Dive into Business Analysis, Advanced Tech, AI/ML, or CAD',
    description: 'Deep-dive into role-specific tracks: Business Analysis, Advanced Technologies (C#/.NET microservices & cloud), AI/ML, or SolidWorks/Mechanical.',
    dayStart: 56,
    dayEnd: 80,
    totalDays: 25,
    color: '#95F200',
    weeks: [
      {
        title: 'Week 1 — Specialization Track Immersion',
        topics: ['Role-specific domain architecture', 'Track-specific tooling & SDKs', 'Advanced data modeling & analysis']
      },
      {
        title: 'Week 2 — Specialized Labs & Real-World Scenarios',
        topics: ['Enterprise case studies', 'Custom protocol & API development', 'Track security & performance optimization']
      },
      {
        title: 'Week 3 & 4 — Specialization Capstone Project',
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

// Detailed Day Missions for ALL 90 DAYS (Zero placeholders)
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
    learn: ['Leadership orientation & organization overview', 'Major business functions & engineering tribes', 'How teams collaborate across global projects'],
    practice: ['Map a business problem → Function → Team → GET Role', 'Schedule mentor intro conversation', 'Locate key internal channels & documentation hubs'],
    checkpoint: 'Complete your personal Esyasoft organization map.',
    timeSchedule: [{ time: '10:00', activity: 'Leadership Orientation', type: 'Trainer Session' }, { time: '14:00', activity: 'Organization Mapping Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Reflection & Q&A', type: 'Reflection' }]
  },
  3: {
    title: 'HR, Culture & Workplace Conduct',
    objective: 'Understand workplace policies, professional ethics, communication hygiene, and POSH awareness.',
    learn: ['HR orientation & company culture fundamentals', 'Workplace etiquette, communication, and escalation pathways', 'POSH awareness & professional standards'],
    practice: ['Work through scenario-based workplace exercises', 'Practice blocker escalation & delay notification templates', 'Complete HR onboarding documentation'],
    checkpoint: 'Complete the GET workplace readiness checklist.',
    timeSchedule: [{ time: '10:00', activity: 'HR Orientation & Workplace Ethics', type: 'Trainer Session' }, { time: '14:00', activity: 'Scenario Simulation Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Readiness Checklist Submission', type: 'Reflection' }]
  },
  4: {
    title: 'Your GET Journey & Roadmap',
    objective: 'Understand the 90-day learning methodology (10% Learn, 20% Interact, 70% Apply) and create your personal roadmap.',
    learn: ['90-day program structure: Orient → Discover → Build → Specialize → Contribute', 'Learning methodology: 10% Learn → 20% Interact → 70% Apply', 'Mentorship, evaluation benchmarks, and capstone expectations'],
    practice: ['Inventory existing skills vs skills to develop', 'Identify domain & technical topics to explore', 'Draft your 90-day personal learning roadmap'],
    checkpoint: 'Submit your personal 90-day learning roadmap.',
    timeSchedule: [{ time: '10:00', activity: 'GET Methodology Keynote', type: 'Trainer Session' }, { time: '14:00', activity: 'Roadmap Drafting Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer Exchange & Feedback', type: 'Reflection' }]
  },
  5: {
    title: 'Orient Phase Alignment & Review',
    objective: 'Consolidate Orient phase learnings and confirm readiness for the Discover phase.',
    learn: ['Orient phase synthesis & review', 'Cross-functional alignment best practices', 'Preparing for domain immersion in DISCOVER'],
    practice: ['Answer the 6 Orient Checkpoint questions', 'Present your learning roadmap to your mentor', 'Review cohort readiness feedback'],
    checkpoint: 'Pass the Orient Phase milestone alignment review.',
    timeSchedule: [{ time: '10:00', activity: 'Orient Phase Synthesis', type: 'Trainer Session' }, { time: '14:00', activity: 'Checkpoint Defense & Review', type: 'Learning Activity' }, { time: '16:00', activity: 'Milestone Sign-Off Ceremony', type: 'Reflection' }]
  },

  // DISCOVER (Days 6–25)
  6: {
    title: 'Energy & Utility Ecosystem (Part 1)',
    objective: 'Understand the global utility landscape, electricity generation, transmission, distribution, and AT&C losses.',
    learn: ['Global energy ecosystem: Generation → Transmission → Distribution → Utility', 'Grid modernization & AT&C loss reduction', 'Energy transition & renewable integration'],
    practice: ['Analyze the electricity value chain', 'Participate in group discussion: "What problems do utilities face?"', 'Begin constructing your Energy Ecosystem Map'],
    checkpoint: 'Identify 3 primary causes of AT&C losses in power distribution.',
    timeSchedule: [{ time: '10:00', activity: 'Energy Ecosystem Keynote', type: 'Trainer Session' }, { time: '14:00', activity: 'Value Chain Mapping Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection & Discussion', type: 'Reflection' }]
  },
  7: {
    title: 'Energy & Utility Ecosystem (Part 2)',
    objective: 'Deepen understanding of distributed energy resources (DERs), demand response, and grid modernization.',
    learn: ['Distributed Energy Resources (DERs) & microgrids', 'Demand response mechanics & load management', 'Energy arbitrage & peak shaving principles'],
    practice: ['Map DER integration into local distribution grids', 'Analyze peak load management scenarios', 'Update Energy Ecosystem Map'],
    checkpoint: 'Explain how DERs impact traditional distribution grids.',
    timeSchedule: [{ time: '10:00', activity: 'DERs & Demand Response Session', type: 'Trainer Session' }, { time: '14:00', activity: 'Grid Load Simulation Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer Reflection', type: 'Reflection' }]
  },
  8: {
    title: 'Smart Metering & AMI Architecture (Part 1)',
    objective: 'Master Advanced Metering Infrastructure (AMI) layers: Smart Meters, Networks, DCU, HES, and MDMS.',
    learn: ['Advanced Metering Infrastructure (AMI) architecture overview', 'Smart meter sensors, registers, and tamper alerts', 'Role of Gateways and Data Concentrator Units (DCU)'],
    practice: ['Diagram AMI telemetry flow: Smart Meter → Gateway → HES → MDMS', 'Identify key parameters measured by smart meters', 'Examine sample meter data payload'],
    checkpoint: 'Sketch end-to-end AMI architecture from meter to MDMS.',
    timeSchedule: [{ time: '10:00', activity: 'AMI Architecture Deep-Dive', type: 'Trainer Session' }, { time: '14:00', activity: 'AMI Telemetry Diagramming Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Q&A & Review', type: 'Reflection' }]
  },
  9: {
    title: 'Smart Metering & AMI Architecture (Part 2)',
    objective: 'Explore meter communications (NB-IoT, RF Mesh, GPRS) and hardware security protocols.',
    learn: ['Communication topologies: Cellular NB-IoT/4G, RF Mesh, PLC', 'DLMS/COSEM communication protocol standards', 'Data security, encryption, and meter tamper handling'],
    practice: ['Compare communication protocols for rural vs urban deployments', 'Analyze DLMS/COSEM data exchange frames', 'Review security requirements for AMI networks'],
    checkpoint: 'Compare NB-IoT vs RF Mesh for smart meter deployments.',
    timeSchedule: [{ time: '10:00', activity: 'Smart Meter Communications Lab', type: 'Trainer Session' }, { time: '14:00', activity: 'Protocol Comparison Exercise', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Log Entry', type: 'Reflection' }]
  },
  10: {
    title: 'Head End System (HES) Deep-Dive',
    objective: 'Understand device connectivity, DLMS/COSEM protocol translation, and schedule-based telemetry acquisition.',
    learn: ['Head End System (HES) architecture & core responsibilities', 'Device connection management, handshakes, and schedule profiles', 'Protocol translation & raw telemetry logging'],
    practice: ['Trace a scheduled meter reading command through HES', 'Examine HES error logs & retry mechanisms', 'Document HES-to-MDMS interface requirements'],
    checkpoint: 'Explain how HES handles protocol translation for field meters.',
    timeSchedule: [{ time: '10:00', activity: 'HES Platform Architecture', type: 'Trainer Session' }, { time: '14:00', activity: 'Telemetry Trace Simulation', type: 'Learning Activity' }, { time: '16:00', activity: 'Technical Reflection', type: 'Reflection' }]
  },
  11: {
    title: 'Meter Data Management System (MDMS)',
    objective: 'Learn Validation, Estimation & Editing (VEE) rules and meter data storage architectures.',
    learn: ['MDMS core responsibilities & relationship with HES', 'Validation, Estimation, and Editing (VEE) algorithms', 'Billing determinants & interval data aggregation'],
    practice: ['Apply VEE rules to sample meter readings with missing intervals', 'Calculate daily billing determinants from interval data', 'Map MDMS data flows to downstream ERP & CRM systems'],
    checkpoint: 'Walk through a VEE estimation rule for missing meter intervals.',
    timeSchedule: [{ time: '10:00', activity: 'MDMS & VEE Rules Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'VEE Algorithm Exercise', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Discussion', type: 'Reflection' }]
  },
  12: {
    title: 'Meter-to-Decision Data Lifecycle',
    objective: 'Trace end-to-end telemetry from smart meter readings to billing engines and utility analytics dashboards.',
    learn: ['7-step data lifecycle: Meter → Network → DCU → HES → MDMS → Analytics → Action', 'Data latency, throughput, and system integration points', 'Real-world utility decision workflows (billing, outage, loss analysis)'],
    practice: ['Construct your comprehensive Meter-to-Decision Architecture Map', 'Trace an outage alarm event from meter to control center dashboard', 'Present data lifecycle to your cohort pod'],
    checkpoint: 'Complete your Meter-to-Decision Architecture Map.',
    timeSchedule: [{ time: '10:00', activity: 'Data Lifecycle Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Architecture Mapping Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Pod Presentation', type: 'Reflection' }]
  },
  13: {
    title: 'Esyasoft Electricity Portfolio',
    objective: 'Explore Esyasoft’s smart grid solutions: outage management, transformer monitoring, and loss reduction.',
    learn: ['Esyasoft Smart Electricity product suite overview', 'Outage Management System (OMS) & transformer monitoring', 'Commercial loss reduction & energy audit tools'],
    practice: ['Examine product feature sheets for Esyasoft Smart Grid suite', 'Draft a Product Solution Card for one Esyasoft electricity module', 'Analyze how OMS detects grid faults using AMI data'],
    checkpoint: 'Create a Product Solution Card for an Esyasoft electricity solution.',
    timeSchedule: [{ time: '10:00', activity: 'Esyasoft Smart Grid Showcase', type: 'Trainer Session' }, { time: '14:00', activity: 'Product Solution Card Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer Review', type: 'Reflection' }]
  },
  14: {
    title: 'Esyasoft Water & Gas Portfolio',
    objective: 'Understand Non-Revenue Water (NRW) leak detection and gas meter pulse retrofit indexers.',
    learn: ['Smart Water solutions: Non-Revenue Water (NRW) & leak detection', 'Smart Gas solutions: retrofit modules & safety monitoring', 'Cross-utility IoT data collection techniques'],
    practice: ['Compare electricity, water, and gas smart metering requirements', 'Analyze an acoustic water leak detection scenario', 'Draft a Product Solution Card for Esyasoft Water/Gas module'],
    checkpoint: 'Explain how Non-Revenue Water (NRW) is calculated and reduced.',
    timeSchedule: [{ time: '10:00', activity: 'Water & Gas Portfolio Overview', type: 'Trainer Session' }, { time: '14:00', activity: 'Cross-Utility Analysis Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }]
  },
  15: {
    title: 'Battery Energy Storage Systems (BESS)',
    objective: 'Learn battery storage applications: peak shaving, frequency regulation, and energy arbitrage.',
    learn: ['Battery Energy Storage Systems (BESS) architecture & chemistry', 'Grid-scale BESS applications: peak shaving, frequency response, arbitrage', 'Integration of BESS with solar PV & microgrids'],
    practice: ['Analyze a peak shaving business case for a commercial utility', 'Calculate energy arbitrage revenue for a 10MW/40MWh BESS facility', 'Diagram BESS control software interface'],
    checkpoint: 'Describe 3 core operational use cases for BESS in modern grids.',
    timeSchedule: [{ time: '10:00', activity: 'BESS Masterclass & Applications', type: 'Trainer Session' }, { time: '14:00', activity: 'BESS Economics & Load Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Cohort Reflection', type: 'Reflection' }]
  },
  16: {
    title: 'e-Mobility & Charging Infrastructure',
    objective: 'Understand EV charging ecosystems, Charge Point Management Systems (CPMS), and grid load balancing.',
    learn: ['EV charging ecosystem: AC slow chargers, DC fast chargers, CPMS', 'Open Charge Point Protocol (OCPP) communication standards', 'Smart charging & dynamic grid load balancing'],
    practice: ['Trace an EV charging session using OCPP protocol messages', 'Design smart charging profile to avoid transformer overload', 'Evaluate fleet electrification challenges'],
    checkpoint: 'Explain the role of OCPP in Charge Point Management Systems.',
    timeSchedule: [{ time: '10:00', activity: 'e-Mobility & CPMS Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'OCPP Protocol Session Trace', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }]
  },
  17: {
    title: 'Project Delivery & Agile Foundations',
    objective: 'Learn project lifecycles from requirements gathering to deployment, sprint mechanics, and Agile teamwork.',
    learn: ['Esyasoft project delivery lifecycle & CMMI Level 5 standards', 'Agile framework: sprints, user stories, standups, retrospectives', 'Role of project managers, leads, BAs, and developers'],
    practice: ['Construct a Requirement-to-Delivery Map for a feature request', 'Write acceptance criteria for a user story', 'Simulate a sprint planning & story estimation session'],
    checkpoint: 'Draft a Requirement-to-Delivery Map for a sample feature.',
    timeSchedule: [{ time: '10:00', activity: 'Project Delivery & Agile Keynote', type: 'Trainer Session' }, { time: '14:00', activity: 'Requirement Mapping Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Sprint Simulation', type: 'Reflection' }]
  },
  18: {
    title: 'Requirements to Solution Architecture',
    objective: 'Learn how business analyst specs translate into software component designs and technical tasks.',
    learn: ['Deconstructing business requirement documents (BRD/SRS)', 'Translating functional requirements into technical tasks', 'Interface definition & dependency mapping'],
    practice: ['Break down a utility requirement into 5 technical tasks', 'Draft functional & non-functional requirements for an API endpoint', 'Identify system dependencies and potential risks'],
    checkpoint: 'Deconstruct a business requirement into developer task items.',
    timeSchedule: [{ time: '10:00', activity: 'Requirements Engineering Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Task Breakdown Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer Feedback', type: 'Reflection' }]
  },
  19: {
    title: 'Cross-Utility Comparison Lab',
    objective: 'Compare telemetry, network constraints, and data rates across electricity, water, and gas networks.',
    learn: ['Cross-utility comparative analysis methodology', 'Data volume, polling frequency, and battery constraints per utility', 'Unified multi-utility platform architecture'],
    practice: ['Build a comparative matrix: Electricity vs Water vs Gas metering', 'Evaluate network bandwidth requirements for 1M meters', 'Present comparison to cohort mentor'],
    checkpoint: 'Complete the Cross-Utility Metering Comparison Matrix.',
    timeSchedule: [{ time: '10:00', activity: 'Cross-Utility Deep-Dive', type: 'Trainer Session' }, { time: '14:00', activity: 'Comparative Matrix Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Review', type: 'Reflection' }]
  },
  20: {
    title: 'Business Communication & Technical Writing',
    objective: 'Practice technical email writing, blocker escalation templates, and presentation skills.',
    learn: ['Professional technical communication standards', 'Structuring status updates: Completed, In Progress, Blocked, Next', 'Escalation etiquette & clear problem reporting'],
    practice: ['Draft a professional status update email for a delayed feature', 'Practice asking for technical help using the 5-part template', 'Deliver a 3-minute technical explanation to a non-technical peer'],
    checkpoint: 'Write a structured blocker escalation message using the standard template.',
    timeSchedule: [{ time: '10:00', activity: 'Technical Writing Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'Communication Simulation Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer Feedback', type: 'Reflection' }]
  },
  21: {
    title: 'Team Domain Challenge Framing',
    objective: 'Kickoff Discover team challenge: analyze a real-world utility case study and frame the core problem.',
    learn: ['Team domain challenge guidelines & problem statements', 'Root cause analysis techniques (5 Whys, Fishbone)', 'Team role division & sprint planning for challenge'],
    practice: ['Meet your assigned domain challenge team', 'Formulate problem statement for selected utility scenario', 'Define team work breakdown & presentation outline'],
    checkpoint: 'Submit team challenge problem statement and work plan.',
    timeSchedule: [{ time: '10:00', activity: 'Domain Challenge Kickoff', type: 'Trainer Session' }, { time: '14:00', activity: 'Team Problem Framing Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Alignment', type: 'Reflection' }]
  },
  22: {
    title: 'Solution Architecture & Flow Formulation',
    objective: 'Design end-to-end AMI/MDMS solution architecture and data flow for your team challenge.',
    learn: ['Enterprise architecture pattern formulation', 'Component integration & data flow modeling', 'Preparing high-impact technical visual diagrams'],
    practice: ['Diagram end-to-end solution architecture for team challenge', 'Define API contracts and data models between components', 'Review architecture with technical SME'],
    checkpoint: 'Complete initial architecture diagram for team challenge.',
    timeSchedule: [{ time: '10:00', activity: 'Solution Architecture Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Team Diagramming Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'SME Review', type: 'Reflection' }]
  },
  23: {
    title: 'Presentation Preparation & Peer Feedback',
    objective: 'Refine team solution deck, conduct peer review, and practice presentation delivery.',
    learn: ['Technical presentation structure & storytelling', 'Visual slide design best practices for engineering demos', 'Handling Q&A and technical objections'],
    practice: ['Assemble team challenge slide deck', 'Conduct presentation dry run with peer team', 'Incorporate feedback & freeze presentation slides'],
    checkpoint: 'Freeze team challenge slide deck & complete dry run.',
    timeSchedule: [{ time: '10:00', activity: 'Presentation Storytelling Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'Peer Review & Dry Run Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Slide Freeze', type: 'Reflection' }]
  },
  24: {
    title: 'Team Challenge Presentation & Defense',
    objective: 'Present team domain solution to SME evaluation panel and receive feedback.',
    learn: ['Executive presentation execution & timing', 'Technical defense & answering panel questions', 'Consolidating reviewer feedback'],
    practice: ['Deliver 10-minute team domain challenge presentation', 'Defend technical design choices before evaluation panel', 'Complete peer evaluation feedback forms'],
    checkpoint: 'Successfully present team domain challenge to evaluation panel.',
    timeSchedule: [{ time: '10:00', activity: 'Domain Challenge Showcase (Group 1)', type: 'Trainer Session' }, { time: '14:00', activity: 'Domain Challenge Showcase (Group 2)', type: 'Learning Activity' }, { time: '16:00', activity: 'Panel Feedback & Recognition', type: 'Reflection' }]
  },
  25: {
    title: 'Discover Phase Review & Sign-Off',
    objective: 'Reflect on domain learning, complete Discover self-assessment, and prepare for Build phase.',
    learn: ['Discover phase synthesis & key domain takeaways', 'Transitioning from domain learning to technical building', 'Preview of BUILD phase tools and hands-on schedule'],
    practice: ['Complete Discover Phase self-check evaluation', 'Review domain glossary & update learning notes', 'Participate in Discover phase retrospective'],
    checkpoint: 'Pass Discover Phase evaluation review and sign-off.',
    timeSchedule: [{ time: '10:00', activity: 'Discover Phase Retrospective', type: 'Trainer Session' }, { time: '14:00', activity: 'Self-Check Evaluation Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Phase Milestone Sign-Off', type: 'Reflection' }]
  },

  // BUILD (Days 26–55)
  26: {
    title: 'Development Setup & Clean Code',
    objective: 'Configure local developer workstation, Docker desktop, IDE plugins, and clean coding principles.',
    learn: ['Developer environment setup & required toolchains', 'SOLID design principles & clean code fundamentals', 'Code readability, naming conventions, and refactoring'],
    practice: ['Set up IDE, Git, Node/Dotnet CLI, and Docker locally', 'Refactor a legacy code snippet applying SOLID principles', 'Verify developer environment checklist'],
    checkpoint: 'Verify developer environment setup and run clean code exercise.',
    timeSchedule: [{ time: '10:00', activity: 'Developer Environment Keynote', type: 'Trainer Session' }, { time: '14:00', activity: 'Workstation Setup & Coding Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  27: {
    title: 'C# & .NET Language Fundamentals',
    objective: 'Master C# syntax, type safety, OOP design patterns, and exception handling best practices.',
    learn: ['C# language syntax, type system, and memory management', 'Object-Oriented Programming (OOP) in C#: inheritance, interfaces, generics', 'Exception handling, custom exceptions, and defensive coding'],
    practice: ['Write a set of C# classes modeling smart meter data objects', 'Implement custom exception handlers for network timeout scenarios', 'Complete C# programming exercise set'],
    checkpoint: 'Pass C# language fundamentals exercise set.',
    timeSchedule: [{ time: '10:00', activity: 'C# & .NET Deep-Dive', type: 'Trainer Session' }, { time: '14:00', activity: 'C# Hands-on Coding Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Review & Q&A', type: 'Reflection' }]
  },
  28: {
    title: 'Relational Database Modeling & SQL',
    objective: 'Design normalized relational schemas, index strategies, and write complex SQL queries.',
    learn: ['Relational database design & normalization (1NF to 3NF)', 'Indexing strategies for high-volume time-series data', 'Complex SQL queries, JOINs, aggregations, and window functions'],
    practice: ['Design database schema for smart meter telemetry storage', 'Write SQL queries to calculate daily consumption totals and peak usage', 'Optimize slow SQL query using execution plans'],
    checkpoint: 'Create normalized SQL schema & queries for meter data storage.',
    timeSchedule: [{ time: '10:00', activity: 'Database Design & SQL Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'SQL Schema & Query Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }]
  },
  29: {
    title: 'GitFlow & Version Control',
    objective: 'Master Git branching strategies, atomic commits, pull request etiquette, and merge conflict resolution.',
    learn: ['GitFlow branching strategy: main, develop, feature, hotfix branches', 'Atomic commits, rebase vs merge, and interactive rebase', 'Pull request (PR) creation, code review etiquette, and merge conflicts'],
    practice: ['Initialize local Git repo and implement feature branch workflow', 'Create a pull request with clear description and screenshots', 'Simulate and resolve a git merge conflict with a peer'],
    checkpoint: 'Successfully create, review, and merge a Git feature pull request.',
    timeSchedule: [{ time: '10:00', activity: 'GitFlow & Version Control Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Git Branching & PR Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer PR Review', type: 'Reflection' }]
  },
  30: {
    title: 'RESTful API Design & ASP.NET Core',
    objective: 'Build structured Web APIs with ASP.NET Core, routing, request validation, and OpenAPI documentation.',
    learn: ['REST API design principles, HTTP verbs, and status codes', 'ASP.NET Core Web API controllers, routing, and middleware', 'Swagger/OpenAPI documentation & input DTO validation'],
    practice: ['Build a REST API controller for smart meter management', 'Implement data validation attributes on request DTOs', 'Test API endpoints using Swagger UI and Postman'],
    checkpoint: 'Deploy a working ASP.NET Core REST API with Swagger documentation.',
    timeSchedule: [{ time: '10:00', activity: 'REST API & ASP.NET Core Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'API Controller Building Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Inspection', type: 'Reflection' }]
  },
  31: {
    title: 'Data Access & Entity Framework Core',
    objective: 'Connect backend APIs to SQL databases using ORM mappings, migrations, and repository patterns.',
    learn: ['Entity Framework Core ORM concepts & DbContext setup', 'EF Core migrations, schema generation, and seed data', 'Repository pattern & unit of work pattern implementation'],
    practice: ['Configure EF Core DbContext for meter reading entities', 'Generate and execute SQL migrations via EF CLI', 'Implement repository service for async database queries'],
    checkpoint: 'Integrate EF Core repository layer into your ASP.NET Web API.',
    timeSchedule: [{ time: '10:00', activity: 'EF Core & Data Access Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'EF Core Migration & Repository Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }]
  },
  32: {
    title: 'Asynchronous Programming & Task Parallelism',
    objective: 'Implement async/await patterns, thread safety, and background worker tasks in C#.',
    learn: ['Asynchronous programming model: Task, Task<T>, async/await', 'Thread pool, cancellation tokens, and thread safety', 'Background worker services (IHostedService/BackgroundService) in .NET'],
    practice: ['Refactor synchronous API endpoints to fully async/await', 'Implement CancellationToken handling for long-running database queries', 'Build a background worker service simulating incoming telemetry'],
    checkpoint: 'Build an async background worker service for telemetry processing.',
    timeSchedule: [{ time: '10:00', activity: 'Async Programming Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'Async & Background Worker Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Review', type: 'Reflection' }]
  },
  33: {
    title: 'Frontend Integration & Web Dashboards',
    objective: 'Build responsive utility dashboards with React/TypeScript, state management, and API integration.',
    learn: ['React component hierarchy, props, state, and hooks (useState, useEffect)', 'TypeScript interfaces for backend API payloads', 'Fetching and displaying async API data with loading & error states'],
    practice: ['Build a React dashboard component displaying live meter readings', 'Connect frontend dashboard to your ASP.NET Core REST API', 'Add filtering by meter ID and status badge indicators'],
    checkpoint: 'Connect React dashboard component to backend REST API.',
    timeSchedule: [{ time: '10:00', activity: 'React & Frontend Integration', type: 'Trainer Session' }, { time: '14:00', activity: 'Dashboard UI Coding Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  34: {
    title: 'Unit Testing & Test-Driven Development',
    objective: 'Write isolated unit tests using xUnit/Moq, test coverage analysis, and TDD practices.',
    learn: ['Unit testing principles: Arrange-Act-Assert pattern', 'xUnit framework & Moq mocking library for C#', 'Test-Driven Development (TDD) cycle & coverage analysis'],
    practice: ['Write xUnit test suite for meter data validation rules', 'Mock database repository dependencies using Moq', 'Achieve >80% test coverage on core business logic'],
    checkpoint: 'Pass xUnit test suite with >80% code coverage.',
    timeSchedule: [{ time: '10:00', activity: 'Unit Testing & TDD Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'xUnit & Moq Test Writing Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Test Coverage Review', type: 'Reflection' }]
  },
  35: {
    title: 'Integration & API Testing',
    objective: 'Test REST APIs with Postman, automated integration test suites, and mock server responses.',
    learn: ['Integration testing vs unit testing concepts', 'Postman collection runner & environment variables', 'WebApplicationFactory in ASP.NET Core for end-to-end API tests'],
    practice: ['Create a Postman test collection verifying API status codes and payloads', 'Write automated integration tests using WebApplicationFactory', 'Execute automated test suite in local build workflow'],
    checkpoint: 'Run automated integration test collection against Web API.',
    timeSchedule: [{ time: '10:00', activity: 'API Integration Testing Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Postman & Integration Test Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Summary', type: 'Reflection' }]
  },
  36: {
    title: 'Debugging & Log Analysis',
    objective: 'Master step-through debugging, logging levels (Serilog/ILogger), and diagnosing runtime failures.',
    learn: ['Step-through debugging techniques in Visual Studio / VS Code', 'Structured logging with ILogger and Serilog', 'Log aggregation, stack trace analysis, and root cause diagnosis'],
    practice: ['Debug a seeded bug scenario in a sample backend application', 'Configure Serilog JSON output with contextual request properties', 'Document root cause analysis for an simulated application crash'],
    checkpoint: 'Identify and resolve 3 seeded runtime bugs using step-through debugging.',
    timeSchedule: [{ time: '10:00', activity: 'Debugging & Diagnostic Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'Bug Hunting Simulation Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Root Cause Presentation', type: 'Reflection' }]
  },
  37: {
    title: 'Microservices Architecture Fundamentals',
    objective: 'Understand microservice decomposition, service boundaries, and gRPC inter-service communication.',
    learn: ['Monolith vs microservice architecture tradeoffs', 'Domain-Driven Design (DDD) bounded contexts', 'Inter-service communication: synchronous REST/gRPC vs async events'],
    practice: ['Deconstruct a monolithic utility billing application into 3 microservices', 'Define gRPC protocol buffer (.proto) service definition', 'Map data consistency patterns (Saga pattern) across services'],
    checkpoint: 'Design gRPC protocol buffer definition for inter-service communication.',
    timeSchedule: [{ time: '10:00', activity: 'Microservices Architecture Keynote', type: 'Trainer Session' }, { time: '14:00', activity: 'Service Decomposition Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }]
  },
  38: {
    title: 'Message Brokers & Event-Driven Systems',
    objective: 'Implement event streaming with Kafka/RabbitMQ for high-throughput meter data ingestion.',
    learn: ['Event-driven architecture concepts: producers, consumers, topics, queues', 'RabbitMQ queue exchanges vs Apache Kafka distributed log partitions', 'Handling message serialization, retries, and dead-letter queues'],
    practice: ['Publish meter event messages to a local RabbitMQ/Kafka queue', 'Build a background consumer service processing queued telemetry', 'Test message delivery under simulated high-throughput bursts'],
    checkpoint: 'Build an event producer & consumer using RabbitMQ or Kafka.',
    timeSchedule: [{ time: '10:00', activity: 'Event Streaming & Kafka/RabbitMQ Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Event Producer/Consumer Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Performance Test', type: 'Reflection' }]
  },
  39: {
    title: 'Docker Containerization & Microservice Environments',
    objective: 'Write Dockerfiles, multi-stage builds, and compose multi-container local environments.',
    learn: ['Docker container fundamentals, images, and layers', 'Writing optimized Dockerfiles with multi-stage builds', 'Docker Compose configuration for multi-service local environments'],
    practice: ['Write multi-stage Dockerfile for ASP.NET Web API', 'Create docker-compose.yml running Web API, SQL Server, and Redis', 'Spin up full multi-container stack with a single command'],
    checkpoint: 'Containerize multi-service application with Docker Compose.',
    timeSchedule: [{ time: '10:00', activity: 'Docker & Containerization Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'Docker Compose Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Stack Verification', type: 'Reflection' }]
  },
  40: {
    title: 'CI/CD Pipelines & Automated Deployments',
    objective: 'Build GitHub Actions/Azure DevOps pipelines for automated linting, testing, and deployment.',
    learn: ['CI/CD pipeline concepts & automation triggers', 'GitHub Actions / Azure DevOps workflow syntax', 'Automated code building, testing, linting, and artifact creation'],
    practice: ['Create GitHub Actions workflow YAML file for backend repo', 'Configure automated test execution on every pull request', 'Build Docker image and push to local container registry'],
    checkpoint: 'Deploy automated CI pipeline executing tests on PR submission.',
    timeSchedule: [{ time: '10:00', activity: 'CI/CD Pipeline Automation Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'GitHub Actions Workflow Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Pipeline Run Test', type: 'Reflection' }]
  },
  41: {
    title: 'Application & API Security Basics',
    objective: 'Implement OAuth2/JWT authentication, rate limiting, and secure secrets management.',
    learn: ['OWASP Top 10 API security vulnerabilities', 'JWT token authentication & claims-based authorization', 'Rate limiting, CORS configuration, and environment secrets protection'],
    practice: ['Add JWT authentication middleware to ASP.NET Core API', 'Protect sensitive endpoints requiring Admin authorization claims', 'Configure rate limiting to prevent DDoS API abuse'],
    checkpoint: 'Secure Web API endpoints using JWT authentication and claims.',
    timeSchedule: [{ time: '10:00', activity: 'API Security & OWASP Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'JWT Authentication Coding Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Security Review', type: 'Reflection' }]
  },
  42: {
    title: 'Caching Strategies & Performance Optimization',
    objective: 'Optimize backend throughput with Redis caching, query optimization, and memory profiling.',
    learn: ['Caching patterns: Cache-Aside, Write-Through, Write-Behind', 'Distributed caching with Redis in .NET applications', 'Memory profiling, database query optimization, and benchmarking'],
    practice: ['Integrate Redis distributed cache into ASP.NET Core API', 'Benchmark API response times before and after caching', 'Implement cache invalidation strategy on meter data updates'],
    checkpoint: 'Implement Redis caching to reduce database query load.',
    timeSchedule: [{ time: '10:00', activity: 'Performance Optimization & Redis', type: 'Trainer Session' }, { time: '14:00', activity: 'Redis Integration & Benchmark Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Benchmark Results', type: 'Reflection' }]
  },
  43: {
    title: 'System Observability & Monitoring',
    objective: 'Configure Prometheus metrics, Grafana dashboards, and application performance monitoring (APM).',
    learn: ['System observability pillars: Metrics, Logs, Traces', 'Prometheus metrics collection & OpenTelemetry instrumentation', 'Building operational monitoring dashboards in Grafana'],
    practice: ['Add OpenTelemetry metrics endpoint to ASP.NET Core Web API', 'Configure Prometheus scraper for local service', 'Build Grafana dashboard displaying request latency and error rates'],
    checkpoint: 'Expose OpenTelemetry metrics & visualize on Grafana dashboard.',
    timeSchedule: [{ time: '10:00', activity: 'System Observability Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Prometheus & Grafana Setup Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Dashboard Review', type: 'Reflection' }]
  },
  44: {
    title: 'Technical Documentation & README Standards',
    objective: 'Write clear technical documentation, API specs, setup guides, and architecture decision records.',
    learn: ['Technical writing for software engineers', 'README structure: Setup, Architecture, Prerequisites, API Usage', 'Architecture Decision Records (ADR) format'],
    practice: ['Write a comprehensive README for a multi-container Web API', 'Document system setup instructions for a new developer', 'Draft an ADR explaining architectural choices for mini-project'],
    checkpoint: 'Complete professional README & Architecture Decision Record.',
    timeSchedule: [{ time: '10:00', activity: 'Technical Documentation Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'README & ADR Drafting Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer Review', type: 'Reflection' }]
  },
  45: {
    title: 'Build Phase Mid-Point Review & Quiz',
    objective: 'Test technical proficiency across C#, SQL, Git, and REST APIs with hands-on coding assessment.',
    learn: ['Synthesis of core engineering topics (Days 26–44)', 'Code review best practices & common refactoring patterns', 'Preparation for GET Engineering Mini-Project'],
    practice: ['Complete 60-minute technical assessment quiz', 'Participate in live code refactoring review', 'Receive mentor technical feedback'],
    checkpoint: 'Pass Build Phase Mid-Point Technical Assessment.',
    timeSchedule: [{ time: '10:00', activity: 'Build Phase Technical Quiz', type: 'Trainer Session' }, { time: '14:00', activity: 'Code Review & Assessment Review', type: 'Learning Activity' }, { time: '16:00', activity: 'Feedback & Results', type: 'Reflection' }]
  },
  46: {
    title: 'Utility Mini-Project Kickoff',
    objective: 'Receive mini-project requirements: build a working meter data ingestion microservice and dashboard.',
    learn: ['Engineering Mini-Project specifications & requirements', 'Team assignment & sprint task allocation', 'System architecture blueprint overview'],
    practice: ['Form mini-project engineering team', 'Initialize GitHub team repository with GitFlow branches', 'Draft initial project backlog in Azure DevOps/Jira'],
    checkpoint: 'Kick off mini-project & initialize team GitHub repository.',
    timeSchedule: [{ time: '10:00', activity: 'Mini-Project Executive Kickoff', type: 'Trainer Session' }, { time: '14:00', activity: 'Team Backlog & Repo Setup Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Review', type: 'Reflection' }]
  },
  47: {
    title: 'Schema Design & API Specification',
    objective: 'Create relational database models and REST API endpoints for your mini-project.',
    learn: ['Database schema optimization for mini-project requirements', 'OpenAPI/Swagger spec definition before implementation', 'DTO design & mapping strategies'],
    practice: ['Design EF Core database models and generate migrations', 'Define OpenAPI specification contracts', 'Review schema design with mentor lead'],
    checkpoint: 'Freeze database models and API specifications.',
    timeSchedule: [{ time: '10:00', activity: 'Schema & API Specification Review', type: 'Trainer Session' }, { time: '14:00', activity: 'EF Core Model & Migration Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  48: {
    title: 'Backend Service Implementation',
    objective: 'Build core C# ASP.NET Core ingestion services and database integration.',
    learn: ['Backend business logic implementation patterns', 'Asynchronous database operations with EF Core', 'Structured logging & exception handling'],
    practice: ['Implement core CRUD API controllers and repository services', 'Write async telemetry processing logic', 'Execute unit tests on service methods'],
    checkpoint: 'Complete backend API ingestion services & tests.',
    timeSchedule: [{ time: '10:00', activity: 'Backend Architecture Sprint', type: 'Trainer Session' }, { time: '14:00', activity: 'C# Service Coding Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Review', type: 'Reflection' }]
  },
  49: {
    title: 'Event Stream Integration',
    objective: 'Connect telemetry data generator to Kafka/RabbitMQ message broker queues.',
    learn: ['Simulating high-volume field device data streams', 'Queue producer & consumer integration patterns', 'Handling message queue failures & reconnection'],
    practice: ['Build telemetry generator publishing 100 events/sec to broker', 'Connect background consumer service to process queued events', 'Verify data persistence into database'],
    checkpoint: 'Verify high-throughput telemetry event ingestion via message queue.',
    timeSchedule: [{ time: '10:00', activity: 'Event Stream Sprint', type: 'Trainer Session' }, { time: '14:00', activity: 'Broker Integration Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Stream Verification', type: 'Reflection' }]
  },
  50: {
    title: 'Frontend Dashboard Development',
    objective: 'Implement live monitoring UI with React charts and real-time status indicators.',
    learn: ['Data visualization libraries (Recharts/Chart.js)', 'Real-time UI polling & WebSocket updates', 'Responsive dashboard layout styling'],
    practice: ['Build React frontend displaying real-time meter readings chart', 'Add interactive filtering and search controls', 'Connect frontend components to backend API'],
    checkpoint: 'Complete frontend monitoring dashboard connected to live API.',
    timeSchedule: [{ time: '10:00', activity: 'Frontend Dashboard Sprint', type: 'Trainer Session' }, { time: '14:00', activity: 'React & Recharts Coding Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  51: {
    title: 'End-to-End Integration Testing',
    objective: 'Execute full system tests from simulated smart meter events to dashboard visualization.',
    learn: ['Full-stack integration test execution', 'End-to-end telemetry validation', 'Cross-component error handling & boundary testing'],
    practice: ['Run full system simulation: Telemetry → Broker → Backend → DB → UI', 'Identify and fix integration bottlenecks', 'Execute automated test suite'],
    checkpoint: 'Pass end-to-end integration test run across full stack.',
    timeSchedule: [{ time: '10:00', activity: 'Integration Testing Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Full System Simulation Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Bug Triage', type: 'Reflection' }]
  },
  52: {
    title: 'Performance Tuning & Code Refactoring',
    objective: 'Optimize database queries, fix memory leaks, and polish UI responsiveness.',
    learn: ['Code refactoring patterns for production readiness', 'Database indexing & query execution plan optimization', 'UI loading states & error boundary polish'],
    practice: ['Profile backend service memory & CPU usage under load', 'Optimize database indexes for fast interval queries', 'Polish UI styling and responsiveness'],
    checkpoint: 'Achieve target sub-200ms API response latency under load.',
    timeSchedule: [{ time: '10:00', activity: 'Performance Optimization Sprint', type: 'Trainer Session' }, { time: '14:00', activity: 'Profiling & Refactoring Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  53: {
    title: 'Mini-Project Code Freeze & Documentation',
    objective: 'Finalize code repository, write comprehensive README, and freeze feature additions.',
    learn: ['Code freeze procedures & release tagging', 'Writing complete technical documentation', 'Preparing live engineering demonstration script'],
    practice: ['Create release tag v1.0.0 on GitHub repository', 'Write comprehensive README with architecture diagram & setup instructions', 'Prepare live demo script'],
    checkpoint: 'Execute code freeze v1.0.0 & complete technical README.',
    timeSchedule: [{ time: '10:00', activity: 'Code Freeze & Release Procedures', type: 'Trainer Session' }, { time: '14:00', activity: 'Documentation & Demo Prep Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Freeze Sign-Off', type: 'Reflection' }]
  },
  54: {
    title: 'Live Engineering Demonstration',
    objective: 'Present mini-project demonstration to technical leads and code reviewers.',
    learn: ['Engineering demonstration best practices', 'Explaining architectural choices and trade-offs', 'Handling live Q&A & code inspection'],
    practice: ['Deliver 15-minute live working software demonstration', 'Defend code structure & design choices before technical reviewers', 'Receive engineering evaluation feedback'],
    checkpoint: 'Successfully present live working engineering demonstration.',
    timeSchedule: [{ time: '10:00', activity: 'Engineering Demonstration (Group 1)', type: 'Trainer Session' }, { time: '14:00', activity: 'Engineering Demonstration (Group 2)', type: 'Learning Activity' }, { time: '16:00', activity: 'Reviewer Feedback & Scoring', type: 'Reflection' }]
  },
  55: {
    title: 'Build Phase Sign-Off & Specialization Track Prep',
    objective: 'Complete technical evaluation, review feedback, and align on Phase 4 track.',
    learn: ['Build phase retrospective & key technical learnings', 'Specialization track options (BA, Advanced Tech, AI/ML, SolidWorks)', 'Setting goals for Phase 4 specialization'],
    practice: ['Complete Build Phase technical self-assessment', 'Review evaluator feedback on mini-project code', 'Confirm Phase 4 specialization track assignment'],
    checkpoint: 'Pass Build Phase evaluation & confirm Specialization Track assignment.',
    timeSchedule: [{ time: '10:00', activity: 'Build Phase Retrospective', type: 'Trainer Session' }, { time: '14:00', activity: 'Track Alignment & Prep Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Phase 3 Milestone Sign-Off', type: 'Reflection' }]
  },

  // SPECIALIZE (Days 56–80)
  56: {
    title: 'Specialization Track Orientation',
    objective: 'Align on role-specific learning paths: Business Analysis, Advanced Tech, AI/ML, or SolidWorks.',
    learn: ['Specialization track objectives & curriculum roadmap', 'Role expectations for Business Analysts, Core Devs, AI Engineers, and CAD Designers', 'Track mentor introductions & lab environment overview'],
    practice: ['Meet your specialization track mentor & cohort group', 'Configure track-specific software tools and repositories', 'Draft track personal learning goals'],
    checkpoint: 'Complete Specialization Track environment setup and goals.',
    timeSchedule: [{ time: '10:00', activity: 'Specialization Track Keynote', type: 'Trainer Session' }, { time: '14:00', activity: 'Track Tooling Setup Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Q&A', type: 'Reflection' }]
  },
  57: {
    title: 'Track Fundamentals & Tooling Setup',
    objective: 'Configure specialized tools, SDKs, or domain frameworks for your assigned track.',
    learn: ['Track-specific architecture patterns & industry standards', 'Core frameworks & libraries for assigned domain', 'Best practices for track technical deliverables'],
    practice: ['Set up specialized track IDE extensions & SDKs', 'Build a simple starter module in your track language/tool', 'Review track reference documentation'],
    checkpoint: 'Build & verify starter prototype module in track setup.',
    timeSchedule: [{ time: '10:00', activity: 'Track Fundamentals Session', type: 'Trainer Session' }, { time: '14:00', activity: 'Track Starter Build Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }]
  },
  58: {
    title: 'Advanced Track Architecture',
    objective: 'Study deep architectural patterns and specialized industry standards in your domain track.',
    learn: ['Advanced architectural patterns specific to track domain', 'Enterprise integration standards & data models', 'Scalability, reliability, and security in track domain'],
    practice: ['Diagram advanced architecture for track scenario', 'Examine production codebase / model artifacts', 'Document component interfaces'],
    checkpoint: 'Complete advanced track architecture design diagram.',
    timeSchedule: [{ time: '10:00', activity: 'Track Architecture Deep-Dive', type: 'Trainer Session' }, { time: '14:00', activity: 'Architecture Diagramming Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Peer Discussion', type: 'Reflection' }]
  },
  59: {
    title: 'Specialized Data Modeling & Analysis',
    objective: 'Master advanced data pipelines, schema extensions, or modeling methodologies.',
    learn: ['Advanced data modeling techniques for specialized track', 'Domain-specific data transformations & analysis', 'Data quality & validation pipelines'],
    practice: ['Design specialized data model / analysis workflow', 'Implement data transformation scripts', 'Validate model outputs against test datasets'],
    checkpoint: 'Implement specialized data transformation & model workflow.',
    timeSchedule: [{ time: '10:00', activity: 'Data Modeling Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'Modeling & Scripting Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  60: {
    title: 'Real-World Case Study Analysis',
    objective: 'Deconstruct production enterprise deployments and real utility case studies.',
    learn: ['Deconstructing enterprise production case studies', 'Analyzing real-world failures & recovery strategies', 'Industry benchmarks & customer success metrics'],
    practice: ['Analyze a real-world utility deployment case study', 'Identify architectural strengths & potential failure points', 'Present case study findings to track pod'],
    checkpoint: 'Present case study analysis report to track pod.',
    timeSchedule: [{ time: '10:00', activity: 'Enterprise Case Study Review', type: 'Trainer Session' }, { time: '14:00', activity: 'Case Study Analysis Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Pod Presentation', type: 'Reflection' }]
  },
  61: {
    title: 'Specialized API & Protocol Deep-Dive',
    objective: 'Implement track-specific communication protocols, APIs, or integration connectors.',
    learn: ['Track-specific communication protocols & API specs', 'Payload encoding/decoding & serialization', 'Error handling & protocol compliance'],
    practice: ['Build custom protocol parser or specialized API connector', 'Test connector with simulated protocol payloads', 'Document API specification'],
    checkpoint: 'Build working custom protocol parser / specialized API connector.',
    timeSchedule: [{ time: '10:00', activity: 'Protocol & API Deep-Dive', type: 'Trainer Session' }, { time: '14:00', activity: 'Connector Development Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Review', type: 'Reflection' }]
  },
  62: {
    title: 'Security & Compliance in Specialization',
    objective: 'Apply domain security, data privacy, and regulatory compliance standards.',
    learn: ['Domain-specific security standards & regulations', 'Data privacy compliance (GDPR, local utility regulations)', 'Threat modeling & vulnerability assessment'],
    practice: ['Conduct threat model assessment on track application', 'Implement data encryption & secure storage controls', 'Document compliance audit checklist'],
    checkpoint: 'Complete threat model assessment & security checklist.',
    timeSchedule: [{ time: '10:00', activity: 'Domain Security & Compliance', type: 'Trainer Session' }, { time: '14:00', activity: 'Threat Modeling Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Security Review', type: 'Reflection' }]
  },
  63: {
    title: 'Advanced Performance Optimization',
    objective: 'Profile specialized algorithms, CAD models, or machine learning inference speeds.',
    learn: ['Track performance profiling tools & techniques', 'Bottleneck identification & memory/CPU optimization', 'Benchmarking methodology for specialized workloads'],
    practice: ['Profile specialized track module under load', 'Identify performance bottlenecks and optimize code/model', 'Measure performance improvements post-optimization'],
    checkpoint: 'Demonstrate >30% performance improvement in track module.',
    timeSchedule: [{ time: '10:00', activity: 'Track Performance Profiling', type: 'Trainer Session' }, { time: '14:00', activity: 'Optimization & Benchmark Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Reflection', type: 'Reflection' }]
  },
  64: {
    title: 'Specialization Lab & Practical Exercise 1',
    objective: 'Execute hands-on specialized lab scenario under mentor guidance.',
    learn: ['Complex practical lab scenario specifications', 'Troubleshooting advanced edge-case failures', 'Mentor-guided problem solving'],
    practice: ['Execute hands-on specialization lab exercise', 'Resolve complex edge-case failure scenarios', 'Log technical findings in lab report'],
    checkpoint: 'Complete Specialization Practical Lab Exercise 1.',
    timeSchedule: [{ time: '10:00', activity: 'Practical Lab 1 Briefing', type: 'Trainer Session' }, { time: '14:00', activity: 'Hands-on Lab Execution', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Sign-Off', type: 'Reflection' }]
  },
  65: {
    title: 'Track Progress Review & Feedback',
    objective: 'Review initial track deliverables with SME leads and adjust learning objectives.',
    learn: ['Mid-track evaluation benchmarks', 'SME feedback consolidation', 'Refining specialization capstone scope'],
    practice: ['Present mid-track deliverables to SME lead', 'Receive constructive technical feedback', 'Adjust remaining track learning objectives'],
    checkpoint: 'Pass mid-track SME review and refine capstone scope.',
    timeSchedule: [{ time: '10:00', activity: 'Mid-Track Progress Review', type: 'Trainer Session' }, { time: '14:00', activity: 'Feedback & Scope Adjustment', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  66: {
    title: 'Advanced Track Feature Development 1',
    objective: 'Implement complex functional modules in your specialized domain.',
    learn: ['Advanced feature implementation techniques', 'Refactoring for modularity and maintainability', 'Integration with core utility services'],
    practice: ['Develop primary functional module for track capstone', 'Write comprehensive unit tests for module', 'Review code with track mentor'],
    checkpoint: 'Implement & test primary specialization feature module.',
    timeSchedule: [{ time: '10:00', activity: 'Advanced Feature Sprint 1', type: 'Trainer Session' }, { time: '14:00', activity: 'Feature Coding Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Review', type: 'Reflection' }]
  },
  67: {
    title: 'Advanced Track Feature Development 2',
    objective: 'Extend service capabilities, error handling, and edge case resilience.',
    learn: ['Edge case handling & fault tolerance', 'Extending feature capabilities for enterprise scale', 'Asynchronous processing in track domain'],
    practice: ['Extend feature capabilities and add resilient error handling', 'Test edge cases & network failure scenarios', 'Update API / module documentation'],
    checkpoint: 'Complete secondary feature module with resilient error handling.',
    timeSchedule: [{ time: '10:00', activity: 'Advanced Feature Sprint 2', type: 'Trainer Session' }, { time: '14:00', activity: 'Resilience & Extension Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  68: {
    title: 'Specialization Integration & Cross-Track Sync',
    objective: 'Interface your specialized module with adjacent system components.',
    learn: ['Cross-track integration patterns & API contracts', 'Data interchange formats between tracks', 'Collaborative debugging across teams'],
    practice: ['Interface your track module with a peer’s component', 'Verify end-to-end data interchange', 'Resolve cross-component integration issues'],
    checkpoint: 'Pass cross-track integration verification test.',
    timeSchedule: [{ time: '10:00', activity: 'Cross-Track Integration Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Inter-Component Sync Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Joint Standup', type: 'Reflection' }]
  },
  69: {
    title: 'Specialization Lab & Practical Exercise 2',
    objective: 'Build production-grade prototype for your specialization track.',
    learn: ['Production readiness criteria for specialized artifacts', 'Performance & load testing methodology', 'Finalizing track capstone deliverables'],
    practice: ['Execute specialization practical lab exercise 2', 'Conduct load and stress testing on track prototype', 'Prepare prototype demonstration'],
    checkpoint: 'Complete Specialization Practical Lab Exercise 2.',
    timeSchedule: [{ time: '10:00', activity: 'Practical Lab 2 Briefing', type: 'Trainer Session' }, { time: '14:00', activity: 'Prototype Building & Load Testing', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Review', type: 'Reflection' }]
  },
  70: {
    title: 'SME Code & Design Review',
    objective: 'Defense of technical design decisions before SME reviewers and track mentors.',
    learn: ['Defending technical design choices before senior architects', 'Architectural trade-offs & design patterns evaluation', 'Incorporating expert feedback'],
    practice: ['Present track design & code to SME panel', 'Defend technical decisions and architectural choices', 'Log feedback for final capstone refinement'],
    checkpoint: 'Pass SME Code & Design Review for specialization track.',
    timeSchedule: [{ time: '10:00', activity: 'SME Review Panel (Session 1)', type: 'Trainer Session' }, { time: '14:00', activity: 'SME Review Panel (Session 2)', type: 'Learning Activity' }, { time: '16:00', activity: 'Feedback Summary', type: 'Reflection' }]
  },
  71: {
    title: 'Track Capstone Requirements Framing',
    objective: 'Define problem scope and technical architecture for track capstone project.',
    learn: ['Track capstone project guidelines & scope definition', 'System architecture planning for capstone', 'Work breakdown & milestone setting'],
    practice: ['Frame track capstone problem statement', 'Create system architecture specification', 'Define project milestone deliverables'],
    checkpoint: 'Submit track capstone proposal and architecture spec.',
    timeSchedule: [{ time: '10:00', activity: 'Track Capstone Kickoff', type: 'Trainer Session' }, { time: '14:00', activity: 'Proposal & Architecture Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Approval', type: 'Reflection' }]
  },
  72: {
    title: 'Capstone Architecture & Data Flow',
    objective: 'Draft detailed architectural diagrams, data flows, and component specs.',
    learn: ['Detailed component design & interface specifications', 'Data flow modeling & state diagrams', 'Test plan formulation'],
    practice: ['Draw complete architectural diagrams for track capstone', 'Define database schemas and API contracts', 'Write test cases for core features'],
    checkpoint: 'Freeze track capstone architecture & test plan.',
    timeSchedule: [{ time: '10:00', activity: 'Capstone Design Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Architecture & Test Plan Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  73: {
    title: 'Capstone Development Sprint 1',
    objective: 'Build core specialized backend, models, or specification artifacts.',
    learn: ['Accelerated sprint execution principles', 'Backend service & data layer build', 'Continuous unit test verification'],
    practice: ['Implement core backend services / models for capstone', 'Execute unit tests continuously during build', 'Review progress with track mentor'],
    checkpoint: 'Complete Capstone Sprint 1 deliverables.',
    timeSchedule: [{ time: '10:00', activity: 'Capstone Sprint 1 Briefing', type: 'Trainer Session' }, { time: '14:00', activity: 'Core Development Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Sprint Review', type: 'Reflection' }]
  },
  74: {
    title: 'Capstone Development Sprint 2',
    objective: 'Integrate user interfaces, telemetry simulation, or analytical reports.',
    learn: ['Full-stack integration in specialized domain', 'UI/UX polish for specialized dashboards', 'Data visualization & analytics reporting'],
    practice: ['Build user interfaces / reports for capstone', 'Integrate frontend with backend services', 'Verify end-to-end data flow'],
    checkpoint: 'Complete Capstone Sprint 2 deliverables.',
    timeSchedule: [{ time: '10:00', activity: 'Capstone Sprint 2 Briefing', type: 'Trainer Session' }, { time: '14:00', activity: 'UI & Integration Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Sprint Review', type: 'Reflection' }]
  },
  75: {
    title: 'Capstone Testing & Validation',
    objective: 'Execute rigorous unit, integration, and scenario tests on capstone project.',
    learn: ['Comprehensive scenario testing methodology', 'Edge case & error recovery validation', 'User acceptance testing principles'],
    practice: ['Run test suite across all capstone features', 'Identify and fix any integration or logic bugs', 'Validate capstone against requirements'],
    checkpoint: 'Pass all capstone validation & test scenarios.',
    timeSchedule: [{ time: '10:00', activity: 'Capstone Testing Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Scenario Testing Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Bug Triage', type: 'Reflection' }]
  },
  76: {
    title: 'Capstone Refactoring & Polish',
    objective: 'Polish user experience, code structure, and error diagnostics.',
    learn: ['Code cleanup & documentation standards', 'UI polish & responsive layout checks', 'Preparing clean repository presentation'],
    practice: ['Refactor code for maximum readability & maintainability', 'Polish UI layout, loading states, and notifications', 'Write technical README for capstone repository'],
    checkpoint: 'Complete code refactoring & repository README.',
    timeSchedule: [{ time: '10:00', activity: 'Code Polish & Refactoring Session', type: 'Trainer Session' }, { time: '14:00', activity: 'UI Polish & Documentation Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  77: {
    title: 'Technical Defense Preparation',
    objective: 'Prepare architecture slides, live demo scripts, and design documentation.',
    learn: ['Technical defense presentation structure', 'Live demonstration choreography & risk mitigation', 'Anticipating panel questions'],
    practice: ['Assemble capstone technical presentation deck', 'Practice live software demo script', 'Conduct mock defense with peer team'],
    checkpoint: 'Complete capstone presentation deck & live demo script.',
    timeSchedule: [{ time: '10:00', activity: 'Technical Defense Masterclass', type: 'Trainer Session' }, { time: '14:00', activity: 'Mock Defense & Rehearsal Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Deck Freeze', type: 'Reflection' }]
  },
  78: {
    title: 'Specialization Capstone Defense',
    objective: 'Present specialized capstone project to technical defense panel.',
    learn: ['Delivering formal technical defense', 'Demonstrating deep domain & engineering competence', 'Responding to expert evaluator panel Q&A'],
    practice: ['Deliver 15-minute specialized capstone defense presentation', 'Demonstrate live working software prototype', 'Defend technical design choices before panel'],
    checkpoint: 'Pass Specialization Capstone Technical Defense.',
    timeSchedule: [{ time: '10:00', activity: 'Capstone Defense Panel (Group 1)', type: 'Trainer Session' }, { time: '14:00', activity: 'Capstone Defense Panel (Group 2)', type: 'Learning Activity' }, { time: '16:00', activity: 'Panel Evaluation Results', type: 'Reflection' }]
  },
  79: {
    title: 'Peer Demo & Knowledge Exchange',
    objective: 'Share track insights and demonstrate capstone projects across GET cohort.',
    learn: ['Cross-track knowledge sharing & peer learning', 'Understanding complementary technical tracks', 'Synthesizing 90-day program learnings'],
    practice: ['Present your specialized capstone to other track cohorts', 'Attend presentations from other specialization tracks', 'Document key insights from peer projects'],
    checkpoint: 'Participate in cohort-wide Specialization Knowledge Exchange.',
    timeSchedule: [{ time: '10:00', activity: 'Cohort Knowledge Exchange (Session 1)', type: 'Trainer Session' }, { time: '14:00', activity: 'Cohort Knowledge Exchange (Session 2)', type: 'Learning Activity' }, { time: '16:00', activity: 'Cohort Retrospective', type: 'Reflection' }]
  },
  80: {
    title: 'Specialization Phase Evaluation & Sign-Off',
    objective: 'Finalize track evaluation, receive mentor feedback, and transition to Phase 5.',
    learn: ['Specialization phase summary & achievement review', 'Transition to final team capstone in CONTRIBUTE phase', 'Personal growth reflection'],
    practice: ['Complete Specialization Phase self-assessment', 'Receive final track evaluation scores from mentor', 'Form final team capstone teams for Phase 5'],
    checkpoint: 'Pass Specialization Phase evaluation & sign-off.',
    timeSchedule: [{ time: '10:00', activity: 'Specialization Phase Retrospective', type: 'Trainer Session' }, { time: '14:00', activity: 'Phase Evaluation & Team Formation', type: 'Learning Activity' }, { time: '16:00', activity: 'Phase 4 Sign-Off Ceremony', type: 'Reflection' }]
  },

  // CONTRIBUTE (Days 81–90)
  81: {
    title: 'Final Capstone Kickoff & Team Formation',
    objective: 'Form cross-functional capstone teams and select high-impact utility problem statement.',
    learn: ['Final GET Capstone guidelines & executive expectations', 'Cross-functional team composition (Devs, BAs, AI/ML, Hardware)', 'Selection of real-world production problem statements'],
    practice: ['Kickoff final capstone team & assign team roles', 'Select enterprise utility challenge scenario', 'Draft capstone charter & high-level project plan'],
    checkpoint: 'Submit final capstone team charter & problem selection.',
    timeSchedule: [{ time: '10:00', activity: 'Final Capstone Keynote & Kickoff', type: 'Trainer Session' }, { time: '14:00', activity: 'Team Charter & Problem Selection Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Executive Mentor Approval', type: 'Reflection' }]
  },
  82: {
    title: 'Problem Framing & Solution Design',
    objective: 'Define business requirements, system architecture, and team sprint assignments.',
    learn: ['Enterprise solution architecture design', 'Work breakdown & multi-developer sprint planning', 'API contract & database schema definition'],
    practice: ['Formulate detailed capstone solution architecture', 'Define component interface contracts between team members', 'Create sprint task board in Azure DevOps/Jira'],
    checkpoint: 'Freeze capstone solution architecture & sprint task board.',
    timeSchedule: [{ time: '10:00', activity: 'Architecture & Framing Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Sprint Task Board Setup Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  83: {
    title: 'Rapid Prototyping & Backend Build',
    objective: 'Develop core production services, database schemas, and API integrations.',
    learn: ['Rapid software development sprint mechanics', 'Building high-throughput backend services', 'Continuous code integration & testing'],
    practice: ['Implement backend APIs & EF Core database models', 'Write integration services for telemetry ingestion', 'Execute unit tests on backend logic'],
    checkpoint: 'Complete capstone core backend services & schema.',
    timeSchedule: [{ time: '10:00', activity: 'Backend Sprint Briefing', type: 'Trainer Session' }, { time: '14:00', activity: 'API & Service Build Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Code Review', type: 'Reflection' }]
  },
  84: {
    title: 'Frontend Integration & Data Pipeline',
    objective: 'Wire live telemetry pipelines to interactive monitoring dashboards.',
    learn: ['Full-stack data pipeline wiring', 'Real-time dashboard rendering & chart integration', 'User experience polish for executive demos'],
    practice: ['Build React frontend monitoring dashboard', 'Connect UI to live backend API endpoints', 'Verify real-time telemetry updates on dashboard'],
    checkpoint: 'Connect React dashboard to live backend telemetry stream.',
    timeSchedule: [{ time: '10:00', activity: 'Full-Stack Integration Sprint', type: 'Trainer Session' }, { time: '14:00', activity: 'Dashboard UI Integration Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  85: {
    title: 'End-to-End System Integration',
    objective: 'Execute full-stack integration tests and validate solution against acceptance criteria.',
    learn: ['End-to-end full-stack testing methodology', 'Validating system against acceptance criteria', 'Performance profiling under load'],
    practice: ['Execute full system end-to-end integration test run', 'Identify and fix cross-component bugs', 'Verify non-functional requirements (latency, security)'],
    checkpoint: 'Pass full-stack end-to-end system integration test.',
    timeSchedule: [{ time: '10:00', activity: 'Full-System Testing Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'End-to-End Test Execution Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Bug Triage', type: 'Reflection' }]
  },
  86: {
    title: 'Bug Fixing & Performance Tuning',
    objective: 'Optimize query latency, fix edge-case bugs, and polish presentation UI.',
    learn: ['Production bug triage & hotfix procedures', 'API latency optimization & database indexing', 'UI styling & responsiveness polish'],
    practice: ['Resolve all open P1/P2 bugs in project backlog', 'Optimize database queries for sub-100ms response time', 'Polish UI layout & error boundary handling'],
    checkpoint: 'Zero open P1/P2 bugs & sub-100ms API query latency.',
    timeSchedule: [{ time: '10:00', activity: 'Bug Triage & Optimization Sprint', type: 'Trainer Session' }, { time: '14:00', activity: 'Performance Tuning Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Daily Standup', type: 'Reflection' }]
  },
  87: {
    title: 'Code Freeze & Executive Slide Deck',
    objective: 'Freeze codebase, write deployment docs, and create executive presentation.',
    learn: ['Production code freeze & release procedures', 'Executive presentation storytelling for leadership', 'Writing deployment README & architecture guides'],
    practice: ['Tag release v1.0.0 on team GitHub repository', 'Write complete technical README & deployment guide', 'Assemble executive presentation slide deck'],
    checkpoint: 'Execute Code Freeze v1.0.0 & complete Executive Slide Deck.',
    timeSchedule: [{ time: '10:00', activity: 'Code Freeze & Presentation Workshop', type: 'Trainer Session' }, { time: '14:00', activity: 'Slide Deck Assembly & Docs Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Deck Freeze', type: 'Reflection' }]
  },
  88: {
    title: 'Executive Showcase Dry Run 1',
    objective: 'Conduct first full presentation dry run with mentors and program leads.',
    learn: ['Executive presentation delivery & timing control', 'Demonstrating live software smoothly', 'Handling tough technical panel questions'],
    practice: ['Deliver full 15-minute executive capstone presentation', 'Demonstrate live working software prototype', 'Receive feedback from mentor evaluation panel'],
    checkpoint: 'Complete Executive Showcase Dry Run 1 & refine presentation.',
    timeSchedule: [{ time: '10:00', activity: 'Executive Rehearsal (Group 1)', type: 'Trainer Session' }, { time: '14:00', activity: 'Executive Rehearsal (Group 2)', type: 'Learning Activity' }, { time: '16:00', activity: 'Mentor Feedback Session', type: 'Reflection' }]
  },
  89: {
    title: 'Executive Showcase Dry Run 2 & Rehearsal',
    objective: 'Finalize presentation timing, slide deck polish, and live demo choreography.',
    learn: ['Fine-tuning presentation timing & transitions', 'Live demo risk management & backup plans', 'Confidence building for executive showcase'],
    practice: ['Execute final polished presentation dry run', 'Verify live demo environment stability', 'Finalize 1-Year Engineering Growth Roadmap'],
    checkpoint: 'Complete final presentation rehearsal & slide freeze.',
    timeSchedule: [{ time: '10:00', activity: 'Final Rehearsal & Demo Polish', type: 'Trainer Session' }, { time: '14:00', activity: 'Growth Roadmap Lab', type: 'Learning Activity' }, { time: '16:00', activity: 'Pre-Showcase Briefing', type: 'Reflection' }]
  },
  90: {
    title: 'Final Capstone Showcase & GET Graduation',
    objective: 'Present your team capstone solution to executive leadership, reflect on your 90-day growth, and graduate!',
    learn: ['GET program 90-day journey reflection', '1-Year Engineering Growth Roadmap', 'Transitioning to active engineering teams & tribes'],
    practice: ['Deliver final executive capstone presentation & demo', 'Receive graduation certificate & award recognition', 'Celebrate with cohort, mentors, and executive leaders!'],
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

  const dm = DETAILED_MISSIONS[day] || {};

  return {
    day,
    title: dm.title || `Day ${String(day).padStart(2, '0')} — ${PHASES[phaseId].subtitle}`,
    phaseId,
    objective: dm.objective || `Master Day ${day} competencies in ${PHASES[phaseId].name} Phase.`,
    learn: dm.learn || [
      `10% Learn: Structured trainer session for Day ${day}`,
      'Technical concepts, domain patterns, and architecture overview',
      'Live code/solution demonstrations & guided reading'
    ],
    practice: dm.practice || [
      `70% Apply: Hands-on lab / exercise slot for Day ${day}`,
      '20% Interact: Mentor review & peer collaboration',
      'Document key takeaways in personal learning roadmap'
    ],
    checkpoint: dm.checkpoint || `Complete Day ${day} checkpoint task and log progress.`,
    timeSchedule: dm.timeSchedule || [
      { time: '10:00', activity: `Trainer Session — Day ${day} Topic`, type: 'Trainer Session' },
      { time: '14:00', activity: 'Practical Learning Activity Slot', type: 'Learning Activity' },
      { time: '16:00', activity: 'Daily Reflection & Stand-up', type: 'Reflection' }
    ]
  };
});
