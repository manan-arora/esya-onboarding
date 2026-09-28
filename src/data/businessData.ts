import type { ProductItem, DataPipelineStage } from '../types';

export const DATA_PIPELINE_STAGES: DataPipelineStage[] = [
  {
    id: 'stage-1',
    step: 1,
    name: 'SMART METER',
    shortName: 'Smart Meter',
    description: 'The physical edge device installed at customer premises (electricity, gas, water) measuring consumption in near real-time.',
    esyasoftCapability: 'Esyasoft manufactures & integrates advanced smart meters with embedded cellular/RF communications.',
    technicalDetails: 'Records interval consumption data (15-min / hourly), power quality indicators, voltage profile, and tamper flags.'
  },
  {
    id: 'stage-2',
    step: 2,
    name: 'COMMUNICATION NETWORK',
    shortName: 'Communication',
    description: 'Secure wireless/wired transmission layer (Cellular 4G/NB-IoT, RF Mesh, PLC) carrying encrypted meter payloads to utility servers.',
    esyasoftCapability: 'Multi-technology communication modules and gateways ensuring resilient connectivity across dense urban & remote rural areas.',
    technicalDetails: 'DLMS/COSEM and ANSI C12 protocols wrapped in AES-128/256 encryption over secure APNs.'
  },
  {
    id: 'stage-3',
    step: 3,
    name: 'HEAD END SYSTEM (HES)',
    shortName: 'Head End (HES)',
    description: 'The software system that directly communicates with smart meters, managing device registration, firmware updates, and scheduled readings.',
    esyasoftCapability: 'Esyasoft enterprise HES handles millions of connected endpoints with high throughput, multi-vendor meter support, and instant event alarms.',
    technicalDetails: 'Bi-directional communication, command execution (remote connect/disconnect), optical port programming, and auto-discovery.'
  },
  {
    id: 'stage-4',
    step: 4,
    name: 'METER DATA MANAGEMENT (MDMS)',
    shortName: 'Meter Data (MDMS)',
    description: 'Central system of record for meter readings, intervals, events, and master data management across the utility enterprise.',
    esyasoftCapability: 'Esyasoft MDMS validates, edits, and estimates (VEE) massive streams of time-series data to create audit-ready billing records.',
    technicalDetails: 'Scalable cloud-native time-series architecture, VEE engine, complex billing determinants calculation, and rate structure mapping.'
  },
  {
    id: 'stage-5',
    step: 5,
    name: 'VALIDATION, EDITING & ESTIMATION (VEE)',
    shortName: 'Validation (VEE)',
    description: 'Automated data quality checks ensuring missing data, anomalies, or meter outage gaps are filled accurately before billing.',
    esyasoftCapability: 'AI-driven VEE algorithms that detect data anomalies, zero consumption patterns, and revenue loss risks automatically.',
    technicalDetails: 'Configurable validation rules (tolerance, spikes, interval check) and statistical interpolation models.'
  },
  {
    id: 'stage-6',
    step: 6,
    name: 'ANALYTICS & AI ENGINE',
    shortName: 'Analytics & AI',
    description: 'Advanced machine learning models analyzing consumption patterns, grid transformer stress, peak loads, and non-technical loss (theft).',
    esyasoftCapability: 'Proprietary grid analytics modules for power loss detection, transformer health monitoring, load forecasting, and customer profiling.',
    technicalDetails: 'Neural network forecasting, clustering algorithms for customer segmentation, and spatial GIS grid loss mapping.'
  },
  {
    id: 'stage-7',
    step: 7,
    name: 'INSIGHT GENERATION',
    shortName: 'Insight',
    description: 'Transforming raw grid telemetry into actionable executive and operational dashboards for utility leaders and field engineers.',
    esyasoftCapability: 'Real-time situational awareness dashboards showing SAIDI/SAIFI reliability metrics, feeder overloading, and revenue leakage heatmaps.',
    technicalDetails: 'Role-based visual analytics, automated anomaly notifications, and spatial network layer overlays.'
  },
  {
    id: 'stage-8',
    step: 8,
    name: 'DECISION SUPPORT',
    shortName: 'Decision',
    description: 'Optimizing capital expenditure, maintenance dispatch, demand response programs, and energy trading decisions.',
    esyasoftCapability: 'Decision engines that trigger predictive maintenance work orders, automated load shedding prevention, and dynamic pricing rules.',
    technicalDetails: 'Integration with ERP, WMS (Work Management), and GIS for automated ticket creation and dispatch optimization.'
  },
  {
    id: 'stage-9',
    step: 9,
    name: 'ACTION & GRID AUTOMATION',
    shortName: 'Action & Execution',
    description: 'Executing automated grid control signals, remote meter disconnections/reconnections, BESS dispatch, or demand flexibility commands.',
    esyasoftCapability: 'Closed-loop automation connecting digital insights directly to physical grid hardware and customer mobile apps.',
    technicalDetails: 'Automated remote command execution, demand response triggering, and grid storage balancing.'
  }
];

export const PRODUCT_LIBRARY: ProductItem[] = [
  {
    id: 'prod-mdms',
    name: 'Esyasoft Enterprise MDMS',
    category: 'Grid Software & Analytics',
    whatIsIt: 'A scalable cloud-native Meter Data Management System built for massive utility deployments.',
    whatProblemItSolves: 'Consolidates raw meter readings from disparate Head End Systems, performs automated VEE, and provides clean data for billing and analytics.',
    whereItFits: 'Core utility software backend between Head End Systems and Billing / ERP systems.',
    relatedTechnology: ['DLMS/COSEM', 'VEE Engine', 'Time-series DB', 'Rest APIs'],
    officialSource: 'https://esyasoft.com/products/mdms'
  },
  {
    id: 'prod-hes',
    name: 'Esyasoft Universal HES',
    category: 'Smart Metering & AMI',
    whatIsIt: 'Multi-vendor Head End System for automated meter reading, configuration, and remote command execution.',
    whatProblemItSolves: 'Eliminates vendor lock-in by communicating seamlessly with smart electricity, gas, and water meters from any hardware manufacturer.',
    whereItFits: 'Communication interface layer directly connecting meters to utility data centers.',
    relatedTechnology: ['Cellular 4G/NB-IoT', 'RF Mesh', 'DLMS/COSEM', 'AES-256 Encryption']
  },
  {
    id: 'prod-grid-analytics',
    name: 'Esyasoft AI Grid Analytics Platform',
    category: 'Grid Software & Analytics',
    whatIsIt: 'Machine learning platform for technical & non-technical loss reduction, load forecasting, and transformer health.',
    whatProblemItSolves: 'Detects electricity theft, identifies overloaded distribution transformers before failure, and forecasts day-ahead feeder demand.',
    whereItFits: 'Analytics layer built on top of MDMS and SCADA data streams.',
    relatedTechnology: ['TensorFlow', 'GIS Mapping', 'Non-Technical Loss (NTL) Detection', 'Load Forecasting']
  },
  {
    id: 'prod-cpms',
    name: 'Esyasoft e-Mobility CPMS',
    category: 'e-Mobility',
    whatIsIt: 'EV Charging Station Management Platform for public, commercial, and fleet charging networks.',
    whatProblemItSolves: 'Manages charger uptime, dynamic load balancing with the grid, driver payments, and fleet scheduling.',
    whereItFits: 'Connects EV chargers to power grids and consumer mobile apps.',
    relatedTechnology: ['OCPP 1.6/2.0.1', 'Dynamic Load Balancing', 'Payment Gateway Integration']
  },
  {
    id: 'prod-bess-controller',
    name: 'Esyasoft Smart BESS Controller',
    category: 'Energy Storage & BESS',
    whatIsIt: 'Battery Energy Storage System software for peak shaving, renewable integration, and microgrid stabilization.',
    whatProblemItSolves: 'Stores excess renewable generation and dispatches battery power during peak demand to lower grid costs.',
    whereItFits: 'Utility-scale and commercial energy storage facility management.',
    relatedTechnology: ['Modbus TCP', 'Peak Shaving Algorithm', 'State of Charge (SoC) Optimization']
  },
  {
    id: 'prod-smart-meter-io',
    name: 'Esyasoft IoT Smart Metering Node',
    category: 'IoT & Automation',
    whatIsIt: 'Compact IoT communication hardware and firmware for smart energy meters and distribution boxes.',
    whatProblemItSolves: 'Enables legacy and new meters to transmit real-time telemetry over low-power wide-area networks (LPWAN).',
    whereItFits: 'Hardware node inside electricity distribution pillars and smart meters.',
    relatedTechnology: ['NB-IoT', 'eSIM', 'Low Power Microcontrollers']
  }
];

export const SMART_UTILITY_SECTORS = [
  {
    id: 'electricity',
    name: 'ELECTRICITY GRID',
    icon: 'Zap',
    whatIsIt: 'Smart grid technology modernizing power generation, distribution, and consumption.',
    problemSolved: 'High aggregate technical & commercial (AT&C) losses, power outages, and unmonitored distribution transformers.',
    esyasoftRole: 'End-to-end AMI implementation, smart meters, HES/MDMS software, loss reduction analytics, and grid automation.',
    techStack: ['Smart Meters', 'RF Mesh / 4G', 'HES', 'MDMS', 'Transformer Analytics']
  },
  {
    id: 'water',
    name: 'WATER NETWORKS',
    icon: 'Droplets',
    whatIsIt: 'Digital water metering and pipeline leakage detection systems.',
    problemSolved: 'Non-Revenue Water (NRW) loss, pipe bursts, unbilled water consumption, and manual meter reading costs.',
    esyasoftRole: 'Ultrasonic smart water meters, acoustic leak detection analytics, and consumer billing integration.',
    techStack: ['Ultrasonic Meters', 'NB-IoT', 'Leak Detection AI', 'Water MDMS']
  },
  {
    id: 'gas',
    name: 'GAS DISTRIBUTION',
    icon: 'Flame',
    whatIsIt: 'City gas distribution (CGD) digital metering and safety monitoring.',
    problemSolved: 'Pressure fluctuations, gas leakage risks, and inaccurate billing in commercial & residential gas networks.',
    esyasoftRole: 'Prepaid & postpaid gas smart meters, automated shut-off valve management, and remote pressure monitoring.',
    techStack: ['Gas Smart Meters', 'Remote Valve Control', 'Safety Alarm Engine']
  }
];
