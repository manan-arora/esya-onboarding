import type { CoreId, CoreInfo, DayMission } from '../types';

export const CORES: Record<CoreId, CoreInfo> = {
  POWER: {
    id: 'POWER',
    number: '01',
    name: 'POWER CORE',
    subtitle: 'Know Esyasoft',
    tagline: 'Foundational Energy & Vision',
    description: 'Understand Esyasoft’s global mission, smart energy ecosystem, culture, and core principles powering modern infrastructure.',
    dayStart: 1,
    dayEnd: 5,
    totalDays: 5,
    color: '#8CFF00',
    highlights: ['Welcome & Vision', 'People & Culture', 'How Esyasoft Works', 'Ecosystem Exploration', 'Power Core Checkpoint']
  },
  DOMAIN: {
    id: 'DOMAIN',
    number: '02',
    name: 'DOMAIN CORE',
    subtitle: 'Know what Esyasoft builds',
    tagline: 'Industry Knowledge & Smart Solutions',
    description: 'Deep dive into smart grid solutions, IoT sensors, meter data management, utility automation, and customer applications.',
    dayStart: 6,
    dayEnd: 10,
    totalDays: 5,
    color: '#9CFF00',
    highlights: ['Industry Foundations', 'Products & Solutions', 'APIs & Connected Systems', 'Customer Use Cases', 'Domain Core Checkpoint']
  },
  NEURAL: {
    id: 'NEURAL',
    number: '03',
    name: 'NEURAL CORE',
    subtitle: 'Know the technology',
    tagline: 'Technical Intelligence & Architecture',
    description: 'Master backend engineering, data modeling, C#, SQL databases, scalable APIs, git workflows, and system architecture design.',
    dayStart: 11,
    dayEnd: 18,
    totalDays: 8,
    color: '#76E000',
    highlights: ['Programming Foundations', 'C# & OOP', 'Databases & SQL', 'Git Workflows', 'Backend & Architecture']
  },
  ENGINE: {
    id: 'ENGINE',
    number: '04',
    name: 'ENGINE CORE',
    subtitle: 'Put knowledge into practice',
    tagline: 'Hands-on Execution & Engineering',
    description: 'Build real-world GET mini-projects, debug live systems, integrate APIs, write production code, and solve technical challenges.',
    dayStart: 19,
    dayEnd: 25,
    totalDays: 7,
    color: '#A0FF33',
    highlights: ['Dev Setup', 'First Feature Build', 'Debugging Mastery', 'API Integration', 'GET Mini Project']
  },
  DRIVE: {
    id: 'DRIVE',
    number: '05',
    name: 'DRIVE CORE',
    subtitle: 'Learn how to operate',
    tagline: 'Professional Excellence & Leadership',
    description: 'Elevate your communication, cross-functional teamwork, executive storytelling, problem ownership, and final Volt activation.',
    dayStart: 26,
    dayEnd: 30,
    totalDays: 5,
    color: '#B5FF55',
    highlights: ['Communication', 'Collaboration', 'Storytelling', 'Ownership & Growth', 'Volt Activation']
  }
};

export const MISSIONS: DayMission[] = [
  // POWER CORE (1 - 5)
  {
    day: 1,
    title: 'Welcome to Esyasoft',
    coreId: 'POWER',
    objective: 'Orient yourself with Esyasoft’s mission to digitize utilities and power the clean energy transition worldwide.',
    learn: ['Esyasoft founding story and global footprint across 10+ countries', 'Smart grid & energy management paradigm', 'GET 2026 program roadmap & expectations'],
    practice: ['Set up your GET developer profile', 'Explore the Esyasoft product suite overview map', 'Connect with your cohort buddy'],
    checkpoint: 'Summarize Esyasoft’s primary mission in 3 key takeaways and introduce yourself to your cohort.',
    unlockItem: 'Volt Chassis Calibration'
  },
  {
    day: 2,
    title: 'People & Culture',
    coreId: 'POWER',
    objective: 'Discover the workplace values, innovation mindsets, and cross-functional teams that define Esyasoft.',
    learn: ['Core values: Innovation, Integrity, Velocity, Customer Impact', 'Engineering org structure and agile tribes', 'Mentorship & continuous learning paths'],
    practice: ['Schedule your 1-on-1 intro with your mentor', 'Review team communication guidelines & channels', 'Locate key company resources'],
    checkpoint: 'Draft your personal GET learning goal statement for the 30-day program.',
    unlockItem: 'Primary Energy Matrix'
  },
  {
    day: 3,
    title: 'How Esyasoft Works',
    coreId: 'POWER',
    objective: 'Understand how business strategy, engineering, and customer success align to deliver utility-scale platforms.',
    learn: ['End-to-end utility transformation lifecycle', 'SaaS & Enterprise deployment models', 'Quality assurance and compliance basics'],
    practice: ['Trace a smart meter data flow from hardware to cloud dashboard', 'Review a sample client success story', 'Identify key stakeholders'],
    checkpoint: 'Diagram the high-level workflow from utility data capture to grid optimization.',
    unlockItem: 'Power Core Housing'
  },
  {
    day: 4,
    title: 'Explore the Ecosystem',
    coreId: 'POWER',
    objective: 'Familiarize yourself with Esyasoft’s smart grid software products, IoT gateways, and analytics modules.',
    learn: ['Smart Metering Infrastructure (AMI)', 'Meter Data Management System (MDMS)', 'Peak load forecasting & grid analytics'],
    practice: ['Navigate the product documentation library', 'Compare AMI vs MDMS operational capabilities', 'Bookmark essential developer portals'],
    checkpoint: 'Identify 3 core features of Esyasoft’s MDMS platform and their real-world impact.',
    unlockItem: 'Voltage Stabilizer Module'
  },
  {
    day: 5,
    title: 'Power Core Checkpoint',
    coreId: 'POWER',
    objective: 'Consolidate your understanding of Esyasoft’s mission, products, and culture to achieve 100% Power Core activation.',
    learn: ['Power Core synthesis & review', 'Cross-functional alignment best practices', 'Preparing for technical domain training'],
    practice: ['Complete the Power Core knowledge assessment', 'Present your GET goal statement to your mentor', 'Review feedback'],
    checkpoint: 'Demonstrate complete alignment with Esyasoft’s mission and pass the Power Core milestone evaluation.',
    unlockItem: 'POWER CORE 100% ACTIVATED'
  },

  // DOMAIN CORE (6 - 10)
  {
    day: 6,
    title: 'Industry Foundations',
    coreId: 'DOMAIN',
    objective: 'Learn the fundamentals of global energy utilities, smart grids, and distribution automation.',
    learn: ['Global utility landscape & grid modernization trends', 'Generation, transmission, and distribution mechanics', 'Key energy industry metrics (SAIDI, SAIFI, AT&C losses)'],
    practice: ['Calculate loss reduction benefits for a hypothetical utility', 'Analyze a grid outage scenario dataset', 'Study smart meter communication protocols'],
    checkpoint: 'Explain how smart grids mitigate AT&C (Aggregate Technical & Commercial) losses in power distribution.',
    unlockItem: 'Domain Sensor Array'
  },
  {
    day: 7,
    title: 'Products & Solutions',
    coreId: 'DOMAIN',
    objective: 'Deepen your knowledge of Esyasoft flagship software applications and utility management platforms.',
    learn: ['Smart Metering (AMI) software architecture', 'Meter Data Analytics & Outage Management Systems (OMS)', 'EV Charging infrastructure & Distributed Energy Resources (DER)'],
    practice: ['Inspect feature modules in the product prototype UI', 'Map utility challenges to specific Esyasoft product features', 'Review data ingestion rates'],
    checkpoint: 'Match 4 utility operational pain points with their corresponding Esyasoft software solutions.',
    unlockItem: 'Telemetry Node v1'
  },
  {
    day: 8,
    title: 'APIs & Connected Systems',
    coreId: 'DOMAIN',
    objective: 'Understand how modern applications communicate through APIs and connect heterogeneous utility systems.',
    learn: ['API fundamentals & Request/Response model', 'RESTful standards, HTTP verbs, and JSON payloads', 'Real-time telemetry streams & webhooks in smart grids'],
    practice: ['Inspect a sample utility API payload', 'Make a GET request using Postman or cURL', 'Parse JSON meter readings'],
    checkpoint: 'Explain an API request-response cycle in your own words and parse a JSON meter reading response.',
    unlockItem: 'Grid Telemetry Link'
  },
  {
    day: 9,
    title: 'Customer Use Cases',
    coreId: 'DOMAIN',
    objective: 'Analyze real-world client deployments and understand how Esyasoft delivers utility transformation at scale.',
    learn: ['Case studies: 10M+ smart meter rollouts in Asia & Middle East', 'Handling peak demand response events', 'Data privacy and security standards in utilities'],
    practice: ['Study a deployment case study deck', 'Identify key performance indicators (KPIs) achieved', 'Synthesize customer ROI drivers'],
    checkpoint: 'Write a brief 1-page summary of how Esyasoft helped a major utility reduce peak load demand by 15%.',
    unlockItem: 'Domain Processing Unit'
  },
  {
    day: 10,
    title: 'Domain Core Checkpoint',
    coreId: 'DOMAIN',
    objective: 'Demonstrate comprehensive domain knowledge of energy utilities, smart grid APIs, and customer solutions.',
    learn: ['Domain Core review & case study synthesis', 'Utility API design patterns', 'Preparing for Neural Core technical immersion'],
    practice: ['Complete the Domain Core technical scenario case', 'Present product mapping solution to cohort', 'Review mentor feedback'],
    checkpoint: 'Successfully solve a utility domain problem statement and complete the Domain Core milestone.',
    unlockItem: 'DOMAIN CORE 100% ACTIVATED'
  },

  // NEURAL CORE (11 - 18)
  {
    day: 11,
    title: 'Programming Foundations',
    coreId: 'NEURAL',
    objective: 'Master clean code principles, data structures, algorithms, and defensive programming standards.',
    learn: ['Variables, scope, control flow, and data types', 'Data structures: Arrays, Lists, Dictionaries, Queues', 'Time & Space Complexity basics (Big-O)'],
    practice: ['Solve 3 algorithm exercises in clean readable code', 'Refactor messy legacy code snippet', 'Write unit tests for utility functions'],
    checkpoint: 'Implement a memory-efficient algorithm to filter valid meter reading records from a raw input stream.',
    unlockItem: 'Neural Micro-Processor'
  },
  {
    day: 12,
    title: 'C# Fundamentals',
    coreId: 'NEURAL',
    objective: 'Get hands-on with C# language syntax, types, LINQ queries, and .NET runtime essentials.',
    learn: ['C# syntax, value types vs reference types', 'LINQ (Language Integrated Query) for data filtering', 'Async/Await asynchronous programming pattern'],
    practice: ['Write LINQ queries to extract anomaly readings', 'Build an async C# console app that simulates stream data', 'Handle potential exceptions gracefully'],
    checkpoint: 'Write a C# program using LINQ and async/await to filter and aggregate 1,000 meter readings in parallel.',
    unlockItem: 'Logic Engine Core'
  },
  {
    day: 13,
    title: 'Object-Oriented Programming',
    coreId: 'NEURAL',
    objective: 'Apply OOP principles (Encapsulation, Inheritance, Polymorphism, Abstraction) to build modular software.',
    learn: ['4 pillars of Object-Oriented Programming', 'SOLID design principles for clean backend systems', 'Interface-driven design and dependency injection'],
    practice: ['Design a class hierarchy for SmartMeter, MeterReading, and TariffEngine', 'Implement interfaces for meter communication protocols', 'Apply Dependency Injection'],
    checkpoint: 'Build a modular C# class structure for a Smart Meter Device Manager following SOLID principles.',
    unlockItem: 'Synapse Interconnect'
  },
  {
    day: 14,
    title: 'Databases & SQL',
    coreId: 'NEURAL',
    objective: 'Learn relational database modeling, SQL queries, indexing, and time-series data storage for utilities.',
    learn: ['Relational DB design & Normalization (1NF to 3NF)', 'Complex SQL joins, group by, aggregations, and window functions', 'Indexing strategies for time-series meter data'],
    practice: ['Design ER diagram for Meter Management System', 'Write SQL queries to calculate daily consumption per customer', 'Optimize query performance using indexes'],
    checkpoint: 'Write a SQL query featuring INNER JOINs and GROUP BY to compute peak hour consumption per transformer district.',
    unlockItem: 'Data Vault Interface'
  },
  {
    day: 15,
    title: 'Git & Development Workflow',
    coreId: 'NEURAL',
    objective: 'Master professional version control workflows with Git, branch strategies, and pull request reviews.',
    learn: ['Git fundamentals: commit, branch, merge, rebase, cherry-pick', 'GitFlow & Trunk-based branching strategies', 'Writing clear pull request descriptions & code review etiquette'],
    practice: ['Create a feature branch, commit incremental changes', 'Resolve a simulated merge conflict with a colleague', 'Open a clean Pull Request'],
    checkpoint: 'Successfully resolve a git merge conflict and submit a peer-reviewed pull request following Esyasoft standards.',
    unlockItem: 'Version Control Mesh'
  },
  {
    day: 16,
    title: 'Backend Fundamentals',
    coreId: 'NEURAL',
    objective: 'Build RESTful Web APIs using ASP.NET Core / Node.js with proper routing, middleware, and validation.',
    learn: ['Web API controller pattern & routing mechanisms', 'Request validation & custom exception middleware', 'Authentication & Authorization basics (JWT tokens)'],
    practice: ['Create a REST API endpoint for retrieving meter status', 'Add input validation & error response models', 'Test API endpoints with Swagger UI'],
    checkpoint: 'Build a secure REST API endpoint `/api/v1/meters/{id}` with input validation and standard error handling.',
    unlockItem: 'Backend Protocol Driver'
  },
  {
    day: 17,
    title: 'Architecture & System Thinking',
    coreId: 'NEURAL',
    objective: 'Explore microservices, event-driven architecture, caching, and scalable system design for utility data.',
    learn: ['Monolith vs Microservices architecture', 'Message queues & event streaming (Kafka / RabbitMQ)', 'Caching strategies with Redis for high throughput'],
    practice: ['Sketch system architecture diagram for 1M meter streaming platform', 'Identify bottlenecks in synchronous API architectures', 'Propose event-driven decoupling'],
    checkpoint: 'Design an event-driven architecture diagram showing how 1 million smart meter alerts are ingested without latency.',
    unlockItem: 'Neural Network Grid'
  },
  {
    day: 18,
    title: 'Neural Core Checkpoint',
    coreId: 'NEURAL',
    objective: 'Demonstrate technical mastery across programming, databases, APIs, git workflows, and system architecture.',
    learn: ['Neural Core synthesis & code review', 'Preparing for hands-on development lab', 'Best practices for production-grade code'],
    practice: ['Complete Neural Core coding challenge', 'Pass technical interview evaluation', 'Review architectural feedback'],
    checkpoint: 'Complete the Neural Core technical assessment with 100% test coverage and architecture review approval.',
    unlockItem: 'NEURAL CORE 100% ACTIVATED'
  },

  // ENGINE CORE (19 - 25)
  {
    day: 19,
    title: 'Development Environment',
    coreId: 'ENGINE',
    objective: 'Configure your local developer environment, Docker containers, environment variables, and IDE tooling.',
    learn: ['Docker containerization basics & Docker Compose', 'Environment variable security & secrets management', 'IDE extensions & debugging tools setup'],
    practice: ['Spin up local PostgreSQL and Redis containers with Docker Compose', 'Configure launch settings in VS Code / Visual Studio', 'Verify database connectivity'],
    checkpoint: 'Spin up your GET development container environment with Docker Compose in under 3 minutes.',
    unlockItem: 'Engine Ignition Chamber'
  },
  {
    day: 20,
    title: 'Build Your First Feature',
    coreId: 'ENGINE',
    objective: 'Implement an end-to-end feature slice from database model to API endpoint and frontend display.',
    learn: ['Full-stack vertical slice development pattern', 'Entity Framework ORM / Data access layer mapping', 'DTOs (Data Transfer Objects) and mapping patterns'],
    practice: ['Create database migration for `MeterAlert` entity', 'Implement repository method and API controller endpoint', 'Connect frontend component to display alerts'],
    checkpoint: 'Deliver a functional vertical feature slice that persists and displays real-time smart meter alerts.',
    unlockItem: 'Piston Actuator v1'
  },
  {
    day: 21,
    title: 'Debugging & Problem Solving',
    coreId: 'ENGINE',
    objective: 'Learn systematic debugging strategies, breakpoint inspection, logging tools, and performance profiling.',
    learn: ['Systematic root cause analysis techniques', 'Structured logging with Serilog / Application Insights', 'Reading stack traces & profiling CPU / memory bottlenecks'],
    practice: ['Debug a seeded bug in a sample utility backend app', 'Inspect memory leak using developer tools', 'Fix failing unit tests'],
    checkpoint: 'Diagnose and fix 3 deliberate bugs (NullReference, DB timeout, API CORS error) in the codebase.',
    unlockItem: 'Diagnostic Matrix'
  },
  {
    day: 22,
    title: 'Working With APIs',
    coreId: 'ENGINE',
    objective: 'Integrate external grid APIs, handle rate limiting, retry policies, and circuit breaker patterns.',
    learn: ['Resilience patterns: Retries, Exponential Backoff, Circuit Breakers', 'Consuming 3rd party REST & SOAP web services', 'API mock testing with WireMock / NSubstitute'],
    practice: ['Implement Polly policy for resilient API HTTP calls', 'Handle network timeout gracefully with fallback data', 'Write automated API tests'],
    checkpoint: 'Implement an API client with exponential backoff retry policy that withstands 50% simulated packet loss.',
    unlockItem: 'High-Velocity Conductor'
  },
  {
    day: 23,
    title: 'Hands-on Development Lab',
    coreId: 'ENGINE',
    objective: 'Collaborate with GET teammates in a 1-day sprint to build a Smart Grid Anomaly Detector prototype.',
    learn: ['Agile sprint mechanics: Standups, tasks, pair programming', 'Clean architecture separation of concerns', 'Continuous Integration (CI) build pipelines'],
    practice: ['Pair program on real-time anomaly detection logic', 'Push code to team feature branch', 'Ensure CI pipeline passes clean'],
    checkpoint: 'Successfully commit and pass automated CI build for the Smart Grid Anomaly Detection algorithm.',
    unlockItem: 'Turbine Core Matrix'
  },
  {
    day: 24,
    title: 'Mini Project',
    coreId: 'ENGINE',
    objective: 'Complete your GET Engine Core mini-project and present working software demo to engineering leads.',
    learn: ['Code refactoring before project freeze', 'Writing clear technical documentation & README', 'Preparing live software demonstration'],
    practice: ['Finalize mini-project codebase', 'Write deployment documentation', 'Perform dry-run presentation'],
    checkpoint: 'Deploy and demonstrate your GET mini-project live to the technical leadership panel.',
    unlockItem: 'Engine Thruster Array'
  },
  {
    day: 25,
    title: 'Engine Core Checkpoint',
    coreId: 'ENGINE',
    objective: 'Pass the Engine Core technical sign-off by demonstrating functional software build and clean engineering practices.',
    learn: ['Engine Core retrospective & code quality audit', 'Transitioning to professional operations', 'Preparing for Drive Core leadership modules'],
    practice: ['Conduct final code review with senior architect', 'Incorporate feedback', 'Sign off milestone'],
    checkpoint: 'Receive senior engineering sign-off on your mini-project codebase with zero blocking issues.',
    unlockItem: 'ENGINE CORE 100% ACTIVATED'
  },

  // DRIVE CORE (26 - 30)
  {
    day: 26,
    title: 'Communication',
    coreId: 'DRIVE',
    objective: 'Develop concise, high-impact verbal and written technical communication skills for engineering teams.',
    learn: ['Pyramid Principle for clear technical writing', 'Status reporting to stakeholders & engineering leads', 'Constructive feedback & active listening'],
    practice: ['Draft an executive summary of your mini-project', 'Conduct a mock technical update call', 'Provide peer feedback on a design doc'],
    checkpoint: 'Write a 1-page executive summary of your GET project formatted for C-level leadership.',
    unlockItem: 'Drive Telemetry Subsystem'
  },
  {
    day: 27,
    title: 'Collaboration & Teamwork',
    coreId: 'DRIVE',
    objective: 'Master cross-functional teamwork, empathy, conflict resolution, and working effectively in distributed teams.',
    learn: ['Cross-functional collaboration across dev, QA, product, & DevOps', 'Managing technical disagreements productively', 'Remote work hygiene and asynchronous communication'],
    practice: ['Participate in a cross-team alignment workshop', 'Map project dependencies across tribes', 'Facilitate a sprint retro exercise'],
    checkpoint: 'Facilitate a 15-minute team retrospective meeting and publish action items for your cohort.',
    unlockItem: 'Kinetic Energy Stabilizer'
  },
  {
    day: 28,
    title: 'Presentation & Storytelling',
    coreId: 'DRIVE',
    objective: 'Learn how to translate complex technical architectures into compelling visual presentations and stories.',
    learn: ['Technical storytelling framework (Context, Challenge, Solution, Impact)', 'Slide design principles & visual clarity', 'Handling tough technical QA from audience'],
    practice: ['Draft your GET program graduation presentation slides', 'Practice slide delivery with cohort partner', 'Refine visual diagrams'],
    checkpoint: 'Deliver a 5-minute lightning talk on your GET program journey and technical learnings.',
    unlockItem: 'Overdrive Quantum Link'
  },
  {
    day: 29,
    title: 'Ownership & Professional Growth',
    coreId: 'DRIVE',
    objective: 'Adopt extreme ownership, career progression strategies, continuous learning habits, and leadership mindsets.',
    learn: ['Extreme ownership principle in software delivery', 'Crafting your 1-year GET engineering career roadmap', 'Navigating performance reviews & mentorship'],
    practice: ['Draft your 1-year post-GET professional development plan', 'Meet with senior engineering leader for career Q&A', 'Review graduation requirements'],
    checkpoint: 'Submit your 1-Year Professional Growth Roadmap signed off by your engineering manager.',
    unlockItem: 'Master Drive Key'
  },
  {
    day: 30,
    title: 'Volt Activation',
    coreId: 'DRIVE',
    objective: 'Complete your final checkpoint to trigger 100% Volt Core integration and graduate from the GET 2026 onboarding mission.',
    learn: ['Full 30-day GET journey reflection', 'Final Volt Core synthesis', 'Transitioning to active project team deployment'],
    practice: ['Execute final mission verification protocol', 'Initiate Volt System Online launch sequence', 'Celebrate with cohort & leadership!'],
    checkpoint: 'Execute final GET mission checkpoint to achieve 100% Volt build status and activate Volt Online!',
    unlockItem: 'VOLT ONLINE — 100% BUILT'
  }
];
