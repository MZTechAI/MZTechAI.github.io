import type { IndustrySolution } from '../types';

export const industriesData: IndustrySolution[] = [
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    badge: 'Smart Commerce & Loss Prevention',
    summary: 'Synchronize dynamic inventory forecasting with AI camera heatmaps, self-checkout verification, and automated customer support.',
    challenges: [
      'Inventory shrink from unmonitored checkout scans and stockroom theft',
      'Stockouts during flash sales while holding sluggish off-season inventory',
      'High churn due to slow customer support response on shipping queries'
    ],
    mzSolutions: [
      'MZ Sentinel computer vision analytics at loading bays and high-value aisles',
      'Predictive inventory replenishment engine linked to POS and web sales',
      'Autonomous multilingual customer support agent handling returns & tracking'
    ],
    keyTechnologies: ['Edge Computer Vision', 'Predictive ML', 'RAG Agents', 'Stripe / Shopify API'],
    impactMetrics: [
      { label: 'Loss Prevention', value: '-34% Shrink' },
      { label: 'Inventory Turnover', value: '+28% Velocity' },
      { label: 'Support Resolution', value: '70% Instant' }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Precision Manufacturing',
    badge: 'Industrial Automation & Safety',
    summary: 'Protect factory personnel with automated PPE inspection while predicting motor and bearing failures before line stoppages occur.',
    challenges: [
      'Unplanned equipment breakdowns halting multimillion-dollar assembly shifts',
      'OSHA safety fines and worker injuries in crane and robotic arm operating radii',
      'Paper-based shift handover logs causing communication gaps'
    ],
    mzSolutions: [
      'Edge computer vision verifying hardhat, goggle, and vest compliance at 60 FPS',
      'FFT vibration and thermal anomaly alerts for predictive motor maintenance',
      'Automated shift summary intelligence parsing technician voice and text notes'
    ],
    keyTechnologies: ['NVIDIA Jetson Edge AI', 'Modbus / MQTT', 'FastAPI', 'TimescaleDB'],
    impactMetrics: [
      { label: 'Unplanned Downtime', value: '-42% Hours' },
      { label: 'Safety Compliance', value: '99.8% PPE' },
      { label: 'Maintenance ROI', value: '3.8x Annual' }
    ]
  },
  {
    id: 'healthcare-administration',
    title: 'Healthcare Administration',
    badge: 'Document Intelligence & Compliance',
    summary: 'Accelerate patient intake, insurance pre-authorization, and medical records extraction with strict HIPAA-aligned data boundaries.',
    challenges: [
      'Administrative backlogs in processing handwritten referral letters and insurance claims',
      'Delayed patient pre-authorizations leading to rescheduled procedures',
      'Strict regulatory burdens requiring tamper-evident access logging'
    ],
    mzSolutions: [
      'AI Document Intelligence extracting patient IDs, diagnoses, and billing codes with 99.2% accuracy',
      'Automated insurance pre-authorization validation against payer policy rules',
      'Granular role-based access control with immutable cryptographic audit trails'
    ],
    keyTechnologies: ['Zero-Leakage Private LLMs', 'PaddleOCR', 'PostgreSQL Audit Tables', 'FastAPI'],
    impactMetrics: [
      { label: 'Claim Processing Time', value: '-78% Time' },
      { label: 'Coding Error Rate', value: '< 0.3%' },
      { label: 'Staff Hours Saved', value: '25 hrs/wk' }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    badge: 'Autonomous Yards & Fleet Telemetry',
    summary: 'Automate trailer gate check-ins, loading dock scheduling, and cargo anomaly detection across regional distribution centers.',
    challenges: [
      'Manual gate check-in queues causing detention fees and driver delays',
      'Cargo tampering and unattended trailers in remote marshaling yards',
      'Fragmented tracking spreadsheets across third-party transport carriers'
    ],
    mzSolutions: [
      'Automated license plate (ANPR) and container optical character recognition',
      'MZ Sentinel perimeter fence tripwire alerts and thermal intrusion monitoring',
      'Autonomous logistics assistant coordinating carrier dispatch updates'
    ],
    keyTechnologies: ['YOLOv10 ANPR', 'WebRTC Cameras', 'LangGraph Agents', 'Kafka Streaming'],
    impactMetrics: [
      { label: 'Gate Ingestion Time', value: '< 45 Sec' },
      { label: 'Detention Fee Savings', value: '62%' },
      { label: 'Yard Visibility', value: '100% Real-time' }
    ]
  },
  {
    id: 'education',
    title: 'Higher Education & Campuses',
    badge: 'Campus Safety & Student Services',
    summary: 'Safeguard sprawling university grounds with intelligent perimeter monitoring while providing 24/7 AI academic advising bots.',
    challenges: [
      'Large open campuses vulnerable to after-hours trespassing in sensitive research labs',
      'Overwhelmed financial aid and registrar desks at the start of academic terms',
      'High false alarm rates from legacy dormitory smoke and motion sensors'
    ],
    mzSolutions: [
      'MZ Sentinel AI multi-zone monitoring with campus blue-light emergency integration',
      'Multilingual RAG student assistant answering registration, tuition, and housing FAQs',
      'Multi-sensor validation filtering out student cooking false fire triggers'
    ],
    keyTechnologies: ['Audio/Video Verification', 'Vector Search RAG', 'SIP Intercom Gateways'],
    impactMetrics: [
      { label: 'False Alarm Dispatches', value: '-85%' },
      { label: 'Student Inquiries Handled', value: '82% Auto' },
      { label: 'Emergency Notification', value: '< 5s Blast' }
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property Management',
    badge: 'Smart Tenancy & Infrastructure',
    summary: 'Equip commercial and multi-family residential towers with automated guest access, water leak mitigation, and AI lease intelligence.',
    challenges: [
      'Catastrophic water damage from unaddressed plumbing leaks on upper floors',
      'Unauthorized subletting, tailgating, and key fob cloning',
      'Labor-intensive lease agreement drafting and commercial tenant renewals'
    ],
    mzSolutions: [
      'IoT sub-floor wireless water leak sensors with automated main shut-off valves',
      'Mobile NFC credential access control with anti-passback and visitor QR codes',
      'AI Document Intelligence extracting renewal escalation clauses and square footage calculations'
    ],
    keyTechnologies: ['LoRaWAN Sensor Networks', 'BACnet / Modbus', 'Document OCR', 'React Native SDK'],
    impactMetrics: [
      { label: 'Water Damage Claims', value: '-90% Claims' },
      { label: 'Lease Processing Time', value: '-65% Duration' },
      { label: 'Fob Administration', value: '100% Cloud' }
    ]
  },
  {
    id: 'corporate-offices',
    title: 'Corporate Enterprises',
    badge: 'Workplace Operations & Zero-Trust',
    summary: 'Streamline boardrooms, employee credentials, meeting room occupancy, and confidential intellectual property safeguards.',
    challenges: [
      'Meeting room "ghost bookings" where spaces sit empty while staff cannot find rooms',
      'Insider data exfiltration and after-hours executive suite unauthorized visits',
      'Scattered enterprise tools leading to context switching and lost employee focus'
    ],
    mzSolutions: [
      'Anonymous optical occupancy counting freeing reserved rooms after 10-minute no-shows',
      'MZ Sentinel AI restricted zone tripwires securing server rooms and C-suite suites',
      'Autonomous Business Operations Assistant routing PO and leave approvals automatically'
    ],
    keyTechnologies: ['Zero-Trust RBAC', 'Occupancy AI', 'Slack / Teams Webhooks', 'OAuth 2.0 / SAML'],
    impactMetrics: [
      { label: 'Room Utilization', value: '+35% Effective' },
      { label: 'Approval Speed', value: '4x Faster' },
      { label: 'Audit Readiness', value: 'Continuous' }
    ]
  },
  {
    id: 'industrial-facilities',
    title: 'Heavy Industry & Energy',
    badge: 'Critical Infrastructure Protection',
    summary: 'Defend sub-stations, refineries, and chemical depots against perimeter intrusions, flare anomalies, and gas hazards.',
    challenges: [
      'Remote unmanned facilities subject to copper theft, vandalism, and sabotage',
      'Hostile environmental conditions causing standard optical cameras to degrade',
      'Explosion risks requiring intrinsically safe monitoring sensors and immediate containment'
    ],
    mzSolutions: [
      'Long-range thermal AI cameras detecting human movement at 500+ meters in total darkness',
      'Intrinsically safe wireless gas and temperature rate-of-rise IoT beacons',
      'Automated integration with remote monitoring centers via encrypted satellite / cellular link'
    ],
    keyTechnologies: ['Thermal Radiometry', 'ATEX / IECEx Gateways', 'Fail-Safe Relays', 'TimescaleDB'],
    impactMetrics: [
      { label: 'Intrusion Detection Range', value: '500+ Meters' },
      { label: 'Offline Resiliency', value: '48h Local Store' },
      { label: 'Perimeter Breaches', value: 'Zero Unflagged' }
    ]
  },
  {
    id: 'security-service-providers',
    title: 'Security Service Providers & Monitoring Centers',
    badge: 'Central Station Automation & Scalability',
    summary: 'Modernize traditional central monitoring stations (SIS, Bold Manitou, MasterMind) with cloud-native video verification and AI dispatch triage.',
    challenges: [
      'Excessive false alarm dispatches leading to municipal fines and police revocation',
      'High operator turnover driven by monotonous false alarm verification screens',
      'Legacy software lock-in with massive on-prem server maintenance overhead'
    ],
    mzSolutions: [
      'MZ Sentinel AI plug-in receiver architecture filtering 82% of false motion alarms',
      'Prioritized operator queue with 5-second video verification clips before human callout',
      'Multi-tenant dealer portal allowing field technicians to run test signals remotely'
    ],
    keyTechnologies: ['SIA DC-09 / Contact ID', 'WebRTC Video Buffers', 'Kafka Event Bus', 'FastAPI'],
    impactMetrics: [
      { label: 'Operator Capacity', value: '3.5x Accounts' },
      { label: 'Municipal False Fines', value: '-80% Fines' },
      { label: 'Dispatch Accuracy', value: '99.4% Verified' }
    ]
  },
  {
    id: 'smb',
    title: 'Small & Mid-Sized Businesses (SMBs)',
    badge: 'Affordable Enterprise AI & Security',
    summary: 'Enterprise-grade AI capabilities, intelligent alarm monitoring, and process automation tailored for growing companies without bloated enterprise budgets.',
    challenges: [
      'Cannot afford a full-time IT department, cybersecurity team, or dedicated security guards',
      'Owner spends evenings handling invoices, payroll reconciliation, and client follow-ups',
      'Vulnerable to after-hours break-ins and shoplifting without rapid notification'
    ],
    mzSolutions: [
      'Turnkey MZ Sentinel AI bundle with plug-and-play smart sensors and mobile alerts',
      'AI Document Intelligence automating monthly vendor invoice data entry',
      'Predictive Cash Flow & Business Intelligence dashboard tailored for SMB metrics'
    ],
    keyTechnologies: ['Lightweight React Dashboard', 'Cloud Fast-Start', 'Mobile PWA Alerts'],
    impactMetrics: [
      { label: 'Weekly Owner Time Saved', value: '14 Hours' },
      { label: 'Implementation Time', value: '< 7 Days' },
      { label: 'Cost vs Enterprise', value: '-70% TCO' }
    ]
  }
];
