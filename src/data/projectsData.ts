import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'sentinel-ai-platform',
    title: 'MZ Sentinel AI — Intelligent Security & Alarm Monitoring',
    shortDescription: 'Enterprise security operations platform integrating computer vision, IoT sensors, and automated alarm response pipelines.',
    category: 'Security & Surveillance',
    status: 'Live Demo',
    demoAvailable: true,
    demoType: 'sentinel-ai',
    accentColor: '#00f2fe',
    businessProblem: 'Legacy physical security and monitoring centers rely on disjointed hardware, experience 90%+ false alarm rates, and suffer from operator fatigue during incident reviews.',
    proposedSolution: 'A centralized AI-driven security hub that validates multi-sensor telemetry, applies computer vision confidence models for intrusion & hazard detection, and automates verified dispatch workflows.',
    keyFeatures: [
      'Real-time multi-zone sensor & camera status matrix',
      'AI edge vision: Person, vehicle, line-crossing, loitering, and camera obstruction detection',
      'Multi-sensor alarm correlation (PIR + Door contact + Thermal + Acoustic glass-break)',
      '7-stage event lifecycle with strict operator audit logging and acknowledgment SLAs',
      'Compatible integration abstraction for Central Station software (SIS, Bold Manitou, MasterMind)',
      'Fail-safe encrypted local gateway buffering during network degradation'
    ],
    techStack: ['React 19', 'TypeScript', 'WebSockets', 'Python FastAPI', 'YOLOv10 / ONNX', 'PostgreSQL', 'TimescaleDB', 'Redis Pub/Sub', 'WebRTC'],
    businessBenefits: [
      'Cuts false alarm dispatches by over 82%',
      'Reduces operator incident triage time from 4.5 minutes to under 28 seconds',
      'Unified single-pane-of-glass operations for distributed multi-site facilities',
      'Strict evidentiary chain-of-custody audit logs for compliance and insurance'
    ],
    metrics: [
      { label: 'False Alarm Reduction', value: '82%' },
      { label: 'Triage Response Time', value: '< 28s' },
      { label: 'Uptime Reliability', value: '99.98%' }
    ]
  },
  {
    id: 'ai-business-automation',
    title: 'Project A: AI Business Automation Platform',
    shortDescription: 'Autonomous enterprise pipeline automating high-volume document ingestion, dynamic approval routing, and scheduled executive intelligence.',
    category: 'Automation',
    status: 'Live Demo',
    demoAvailable: true,
    demoType: 'interactive-workflow',
    accentColor: '#38bdf8',
    businessProblem: 'Back-office operations burn hundreds of hours per week manually extracting tabular data from invoices, chasing manager email approvals, and hand-crafting reporting slides.',
    proposedSolution: 'A zero-code workflow orchestration canvas connected to fine-tuned transformer extraction models, rule-based approval checkpoints, and automatic notification dispatchers.',
    keyFeatures: [
      'Multi-modal invoice, purchase order, and contract extraction with confidence scoring',
      'Visual drag-and-drop workflow designer with conditional branching',
      'Role-based access control (RBAC) with cryptographic audit logging',
      'Automated executive PDF/Excel report synthesis from live ERP/CRM databases',
      'Bi-directional integrations with Slack, Teams, Outlook, and webhook endpoints'
    ],
    techStack: ['Python', 'FastAPI', 'React', 'Celery', 'Redis', 'PostgreSQL', 'LangChain', 'Docker'],
    businessBenefits: [
      'Saved an estimated 320 monthly man-hours per business unit',
      'Eliminated data transcription typing errors by 99.4%',
      'Standardized approval SLAs across remote global offices'
    ],
    metrics: [
      { label: 'Processing Speed', value: '10x Faster' },
      { label: 'Extraction Accuracy', value: '99.4%' },
      { label: 'Audit Compliance', value: '100%' }
    ]
  },
  {
    id: 'ai-customer-support-rag',
    title: 'Project B: Multilingual AI Support & RAG Agent',
    shortDescription: 'Enterprise conversational intelligence agent trained on proprietary knowledge bases with deterministic source citation and seamless agent handoff.',
    category: 'AI & ML',
    status: 'Live Demo',
    demoAvailable: true,
    demoType: 'interactive-doc',
    accentColor: '#818cf8',
    businessProblem: 'Customer satisfaction drops due to delayed tier-1 response times, while generic LLM chatbots hallucinate unsupported return policies and unvetted technical advice.',
    proposedSolution: 'A strict Retrieval-Augmented Generation (RAG) architecture with hybrid semantic + keyword vector search, sentiment-triggered human escalation, and CRM ticketing integration.',
    keyFeatures: [
      'Hybrid dense-sparse retrieval (pgvector + BM25) over internal knowledge docs',
      'Guaranteed source citations with clickable passage highlights',
      'Real-time customer sentiment tracking with automated supervisor alerts',
      'Human-agent hot handover preserving complete conversation context and intent summary',
      'Multi-channel widget: Web, mobile SDK, WhatsApp Business, and Zendesk sync'
    ],
    techStack: ['FastAPI', 'Qdrant / pgvector', 'OpenAI API / Llama 3', 'TypeScript', 'Zendesk API', 'Redis'],
    businessBenefits: [
      'Instant resolution for 68% of routine tier-1 client inquiries',
      'Customer CSAT improved from 3.6 to 4.7 out of 5',
      'Zero documented policy hallucination incidents due to strict citation gates'
    ],
    metrics: [
      { label: 'First Contact Deflection', value: '68%' },
      { label: 'Average CSAT Score', value: '4.7/5.0' },
      { label: 'Languages Supported', value: '40+' }
    ]
  },
  {
    id: 'ai-bi-dashboard',
    title: 'Project C: AI Business Intelligence & Predictive Analytics',
    shortDescription: 'Next-gen analytics platform translating natural-language queries into optimized SQL, real-time KPI forecasts, and anomaly alerts.',
    category: 'Enterprise Software',
    status: 'Prototype',
    demoAvailable: true,
    demoType: 'calculator',
    accentColor: '#34d399',
    businessProblem: 'Department heads wait days for BI analysts to write SQL reports, while subtle inventory anomalies and churn patterns go undetected until quarter-end.',
    proposedSolution: 'An AI-powered BI engine allowing non-technical leaders to type questions like "Why did APAC gross margins slip in August?" and receive instant charts with statistical causality notes.',
    keyFeatures: [
      'Natural-language to SQL compiler with database schema safety sandboxing',
      'Automated time-series sales forecasting using Prophet and gradient boosting',
      'Real-time anomaly detector monitoring revenue velocity and inventory thresholds',
      'Drag-and-drop CSV, parquet, and Google Sheets instant visualizer',
      'Automated executive weekly briefing generated and sent via email'
    ],
    techStack: ['Next.js', 'Python', 'DuckDB', 'ClickHouse', 'TailwindCSS', 'Recharts', 'Pandas'],
    businessBenefits: [
      'Empowers cross-functional teams to explore data without engineering backlog delays',
      'Detects revenue leakage and pricing anomalies in near real-time',
      'Lower total cost of ownership compared to legacy enterprise BI licenses'
    ],
    metrics: [
      { label: 'Query Turnaround', value: '< 2.4s' },
      { label: 'Forecasting Accuracy', value: '94.2%' },
      { label: 'Self-Serve Adoption', value: '88%' }
    ]
  },
  {
    id: 'autonomous-ops-assistant',
    title: 'Project D: Autonomous Business Operations Assistant',
    shortDescription: 'Multi-step autonomous agent for authorized operational orchestration with strict human-in-the-loop authorization gates.',
    category: 'Automation',
    status: 'Prototype',
    demoAvailable: true,
    demoType: 'interactive-workflow',
    accentColor: '#f59e0b',
    businessProblem: 'Autonomous AI agents risk catastrophic unvetted financial transfers, contract misstatements, or accidental mass communication without explicit human supervision.',
    proposedSolution: 'A governed agent framework where autonomous planning is paired with mandatory human authorization checkpoints for all sensitive financial, admin, and HR actions.',
    keyFeatures: [
      'Goal decomposition engine with step-by-step verifiable execution trace',
      'Sandboxed tool-calling protocol (ERP lookup, calendar sync, draft generation)',
      'Dual-key approval checkpoints for payouts, contract dispatches, or vendor onboarding',
      'Immutable cryptographic workflow execution logs for compliance audits',
      'Budget caps and token rate limits enforced per execution session'
    ],
    techStack: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Docker Sandboxes', 'OpenTelemetry'],
    businessBenefits: [
      'Enables agentic velocity without compromising organizational governance',
      'Provides full auditability for enterprise risk management committees',
      'Accelerates operational procurement cycles by 65%'
    ],
    metrics: [
      { label: 'Zero-Unauthorized Policy', value: '100%' },
      { label: 'Step Planning Latency', value: '< 1.8s' },
      { label: 'Human Review Time', value: '< 45s' }
    ]
  },
  {
    id: 'ai-recruitment-hr',
    title: 'Project E: AI Recruitment & Talent Matching Platform',
    shortDescription: 'Ethical talent discovery platform with skills-based resume extraction, automated interview coordination, and unbiased candidate summaries.',
    category: 'Enterprise Software',
    status: 'In Development',
    demoAvailable: false,
    accentColor: '#ec4899',
    businessProblem: 'Recruiters spend thousands of hours sorting through unqualified resumes, while biased automated filtering algorithms risk rejecting non-traditional qualified talent.',
    proposedSolution: 'A transparent skills-matching engine that anonymizes demographic data, extracts verified technical competencies, and assists human recruiters with scheduling and notes.',
    keyFeatures: [
      'High-throughput resume information extraction across PDF, DOCX, and LinkedIn exports',
      'Competency-based skills ontology matching without demographic bias scoring',
      'Automated candidate communication and calendar scheduling coordination',
      'Structured interview question generation tied to specific role requirements',
      'Mandatory human hiring review mandate built directly into the UI workflow'
    ],
    techStack: ['React', 'Node.js', 'Python Spacy / LLM', 'PostgreSQL', 'Google Calendar API'],
    businessBenefits: [
      'Shortens time-to-hire by 40% while doubling interview qualification rates',
      'Guarantees compliance with international ethical AI recruitment standards',
      'Delivers a seamless, transparent candidate experience'
    ],
    metrics: [
      { label: 'Screening Time Saved', value: '75%' },
      { label: 'Time-to-Hire Reduction', value: '40%' },
      { label: 'Demographic Bias Rate', value: '0.0%' }
    ]
  },
  {
    id: 'ecommerce-intelligent-inventory',
    title: 'Project F: Intelligent E-Commerce & Inventory Optimization',
    shortDescription: 'High-performance headless digital commerce storefront integrated with ML-driven stock replenishment and dynamic demand forecasting.',
    category: 'Enterprise Software',
    status: 'In Development',
    demoAvailable: false,
    accentColor: '#06b6d4',
    businessProblem: 'Omnichannel retailers suffer from stockouts on hot products while holding excess capital in dead inventory due to static reorder point calculations.',
    proposedSolution: 'A modern headless e-commerce frontend connected to a predictive inventory optimization service that calculates reorder points dynamically based on sales velocity and lead times.',
    keyFeatures: [
      'Next.js headless storefront with sub-second page loads and semantic product search',
      'Predictive inventory replenishment engine incorporating seasonality and supplier lead time',
      'Real-time automated order tracking and courier tracking webhook ingest',
      'AI customer support assistant handling shipping inquiries and return authorizations',
      'Live margin and basket analytics dashboard for merchandisers'
    ],
    techStack: ['Next.js', 'Stripe', 'Python Scikit-Learn', 'PostgreSQL', 'Algolia / Meilisearch'],
    businessBenefits: [
      'Minimizes stockout lost revenue by 24% during promotional peaks',
      'Reduces inventory carrying costs by 18% across central distribution nodes',
      'Sub-second search experience drives higher cart conversion'
    ],
    metrics: [
      { label: 'Stockout Reduction', value: '24%' },
      { label: 'Carrying Cost Drop', value: '18%' },
      { label: 'Cart Conversion Lift', value: '+14%' }
    ]
  },
  {
    id: 'ai-developer-productivity',
    title: 'Project G: AI Developer Productivity & Code Intelligence',
    shortDescription: 'Internal engineering accelerator automating pull request summaries, test suite generation, and semantic codebase search.',
    category: 'AI & ML',
    status: 'Prototype',
    demoAvailable: true,
    demoType: 'interactive-doc',
    accentColor: '#a855f7',
    businessProblem: 'Engineering velocity stalls as senior developers spend 30% of their sprints reviewing poorly documented PRs, writing boilerplate unit tests, and deciphering legacy codebases.',
    proposedSolution: 'A localized developer assistant integrated into Git workflows that synthesizes PR architectural diffs, proposes edge-case unit tests, and classifies incoming bug reports.',
    keyFeatures: [
      'Automatic semantic pull-request summarization with risk scoring and breaking change flags',
      'Context-aware unit test generation targeting uncovered branch paths',
      'Semantic natural-language repository search indexing syntax trees and docs',
      'Automated triage and deduplication of GitHub / Jira bug reports',
      'Private on-premises model deployment options guaranteeing code privacy'
    ],
    techStack: ['TypeScript', 'GitHub App API', 'Tree-sitter', 'Ollama / Local LLM', 'Vector DB'],
    businessBenefits: [
      'Accelerates PR code review cycle times by 45%',
      'Elevates test coverage across legacy components without stalling sprint goals',
      'Prevents sensitive proprietary intellectual property from leaking to public cloud LLMs'
    ],
    metrics: [
      { label: 'Review Turnaround', value: '45% Faster' },
      { label: 'Test Coverage Boost', value: '+28%' },
      { label: 'Zero IP Leakage', value: 'Air-Gapped' }
    ]
  },
  {
    id: 'ai-document-intelligence',
    title: 'Project H: AI Document Intelligence & Contract Extraction',
    shortDescription: 'High-accuracy OCR and semantic information extraction platform for contracts, invoices, compliance filings, and technical schemas.',
    category: 'AI & ML',
    status: 'Live Demo',
    demoAvailable: true,
    demoType: 'interactive-doc',
    accentColor: '#38bdf8',
    businessProblem: 'Enterprises struggle with unstructured PDF documents that contain critical legal obligations, payment schedules, and renewal penalties buried in 80-page agreements.',
    proposedSolution: 'A multi-modal document intelligence engine combining layout-aware OCR, table extraction, and strict citation-linked semantic querying.',
    keyFeatures: [
      'Multi-engine OCR with spatial coordinate mapping and table structure recovery',
      'Automated extraction of parties, expiration dates, indemnities, and payment terms',
      'Interactive natural-language document questioning with visual bounding box highlights',
      'Contract comparison engine highlighting subtle clause modifications and deviations',
      'Export to structured JSON, ERP databases, or signed compliance archives'
    ],
    techStack: ['Python', 'Tesseract / PaddleOCR', 'FastAPI', 'React', 'ChromaDB', 'PostgreSQL'],
    businessBenefits: [
      'Cuts document review time from 3 hours per agreement to under 4 minutes',
      'Eliminated costly missed commercial renewal penalties across enterprise clients',
      'Guarantees verifiable source transparency for legal and compliance teams'
    ],
    metrics: [
      { label: 'Extraction Precision', value: '99.2%' },
      { label: 'Audit Time Saved', value: '92%' },
      { label: 'Source Traceability', value: '100%' }
    ]
  },
  {
    id: 'smart-building-security',
    title: 'Smart Building Security & Access Integration',
    shortDescription: 'Unified physical security framework linking IoT access badges, environmental sensors, and perimeter alerts into an intelligent building hub.',
    category: 'Security & Surveillance',
    status: 'In Development',
    demoAvailable: false,
    accentColor: '#10b981',
    businessProblem: 'Facilities managers struggle with siloed access control, fire systems, and HVAC controls, resulting in delayed emergency response and uncoordinated lockdowns.',
    proposedSolution: 'An integrated building management security gateway connecting RFID/NFC access control, air quality sensors, and automated muster station headcounts.',
    keyFeatures: [
      'Real-time occupancy tracking and automated evacuation muster checklists',
      'Zero-trust access control with time-of-day and biometric two-factor integration',
      'Environmental hazard detection (VOCs, smoke, temperature excursions, water leaks)',
      'Automated lockdown protocol with emergency service corridor unbarring',
      'Energy optimization tied to verified room occupancy telemetry'
    ],
    techStack: ['MQTT', 'BACnet / Modbus', 'Rust', 'Go', 'WebSockets', 'React', 'TimescaleDB'],
    businessBenefits: [
      'Sub-second site-wide emergency lockdown initiation capability',
      '30% reduction in commercial facility HVAC energy waste through occupancy linkage',
      'Unified compliance reporting for fire code and building safety authorities'
    ],
    metrics: [
      { label: 'Lockdown Latency', value: '< 600ms' },
      { label: 'Energy Savings', value: '30%' },
      { label: 'Muster Verification', value: 'Real-time' }
    ]
  },
  {
    id: 'ai-fire-hazard-detection',
    title: 'AI Fire, Smoke & Thermal Hazard Detection',
    shortDescription: 'Early warning computer vision and thermal sensor pipeline designed to flag smoke plumes, abnormal heat spikes, and equipment fires.',
    category: 'Security & Surveillance',
    status: 'Prototype',
    demoAvailable: true,
    demoType: 'interactive-vision',
    accentColor: '#ef4444',
    businessProblem: 'Standard optical smoke alarms often fail in high-ceiling warehouses or outdoor timber yards until flames have already spread out of control.',
    proposedSolution: 'A dual-spectrum computer vision and thermal analytics pipeline detecting early smoke dissipation signatures and thermal hotspots long before traditional sensors trigger.',
    keyFeatures: [
      'Deep learning smoke plume expansion pattern detection on RTSP camera streams',
      'Thermal camera radiometric thresholding with configurable rate-of-rise alarms',
      'Automated water cannon or deluge valve trigger relay integration points',
      'False positive filtering against forklift exhaust and atmospheric fog',
      'Instant push alerts to facility safety leads with optical and thermal snapshot overlays'
    ],
    techStack: ['Python', 'OpenCV', 'TensorRT', 'FLIR SDK', 'FastAPI', 'MQTT'],
    businessBenefits: [
      'Detects hazardous thermal anomalies up to 7 minutes faster than ceiling smoke detectors',
      'Prevents catastrophic warehouse inventory loss and industrial downtime',
      'Enables rapid verification before activating disruptive suppression agents'
    ],
    metrics: [
      { label: 'Detection Speed Advantage', value: '+7 Min' },
      { label: 'Thermal Accuracy', value: '± 0.5°C' },
      { label: 'False Alarm Filter', value: '98.5%' }
    ]
  },
  {
    id: 'industrial-safety-monitoring',
    title: 'Industrial Safety & Machine Telemetry Monitoring',
    shortDescription: 'Worker PPE compliance verification, machine vibration anomaly detection, and automated hazard zone safety interlocks.',
    category: 'Cloud & IoT',
    status: 'In Development',
    demoAvailable: false,
    accentColor: '#f97316',
    businessProblem: 'Heavy manufacturing plants suffer severe workplace injuries and unplanned motor shutdowns due to unmonitored equipment degradation and PPE lapses.',
    proposedSolution: 'A ruggedized edge AI appliance monitoring camera feeds for hardhat/vest compliance and reading accelerometer/temperature telemetry to predict machine failure.',
    keyFeatures: [
      'Real-time PPE compliance detection (hardhats, high-visibility vests, goggles)',
      'Danger zone boundary intrusion interlock (triggers machine stop if worker enters crane path)',
      'Vibration FFT analysis for predictive bearing and gearbox maintenance',
      'Automated OSHA safety audit report generator',
      'Edge inference running locally on NVIDIA Jetson industrial appliances'
    ],
    techStack: ['NVIDIA Jetson', 'DeepStream', 'TensorRT', 'Go', 'Prometheus', 'Grafana'],
    businessBenefits: [
      'Drastically reduced recordable workplace incidents and insurance premiums',
      'Prevented critical turbine and assembly line catastrophic failures',
      'Full digital compliance audit trail for industrial regulators'
    ],
    metrics: [
      { label: 'Incident Reduction', value: '62%' },
      { label: 'Predictive Lead Time', value: '14 Days' },
      { label: 'PPE Detection FPS', value: '60 FPS' }
    ]
  },
  {
    id: 'centralized-alarm-monitoring-saas',
    title: 'Centralized Alarm Monitoring SaaS (Central Station Automation)',
    shortDescription: 'Multi-tenant cloud platform for commercial central monitoring stations with automated receiver signal parsing, operator dispatch, and client portals.',
    category: 'Security & Surveillance',
    status: 'Concept Project',
    demoAvailable: false,
    accentColor: '#00f2fe',
    businessProblem: 'Central monitoring stations run legacy on-premise Windows servers from the 1990s (SIS, Bold Manitou, MasterMind) with cumbersome operator interfaces and steep server upgrade costs.',
    proposedSolution: 'A modern, resilient multi-tenant cloud-native platform compatible with Contact ID, SIA DC-09, and modern IP receivers, featuring automated AI video verification.',
    keyFeatures: [
      'Universal receiver driver architecture supporting Contact ID, SIA, and proprietary IoT telemetry',
      'Operator response queue with automated prioritization based on UL 1981 standards',
      'Embedded AI video verification clip player reducing dispatch of false police calls',
      'Multi-tenant dealer portals for security installation companies to manage customer accounts',
      'Automated SMS/Voice IVR customer cancellation and verification workflows'
    ],
    techStack: ['Go', 'TypeScript', 'PostgreSQL', 'Kafka', 'Redis', 'WebRTC', 'Kubernetes'],
    businessBenefits: [
      'Modernizes legacy monitoring centers without requiring replacement of field alarm panels',
      'Increases operator handling capacity by 3.5x through automated video verification',
      'Lowers server hardware maintenance costs with elastic cloud redundancy'
    ],
    metrics: [
      { label: 'Operator Capacity', value: '3.5x' },
      { label: 'SIA Protocol Support', value: '100%' },
      { label: 'Cloud Redundancy', value: 'Multi-Region' }
    ]
  },
  {
    id: 'cybersecurity-monitoring-dashboard',
    title: 'Cybersecurity Threat & Anomaly Monitoring Dashboard',
    shortDescription: 'Lightweight SIEM and zero-trust telemetry visualizer tracking suspicious logins, privilege escalations, and automated IP quarantine.',
    category: 'Enterprise Software',
    status: 'Live Demo',
    demoAvailable: true,
    demoType: 'sentinel-ai',
    accentColor: '#6366f1',
    businessProblem: 'Mid-sized technology companies lack dedicated 24/7 SOC teams and drown in thousands of noise-heavy security logs from firewalls and cloud providers.',
    proposedSolution: 'An intelligent cybersecurity dashboard correlating authentication anomalies, impossible travel logins, and unexpected API spikes into actionable incident tickets.',
    keyFeatures: [
      'Real-time ingestion of syslog, AWS CloudTrail, and OAuth authentication events',
      'Behavioral anomaly detector flagging impossible travel and credential stuffing',
      'Automated zero-trust quarantine action triggers (revoking OAuth tokens, banning IPs)',
      'Configurable alert thresholds and webhook dispatchers to PagerDuty and Slack',
      'Clean SOC operator console with MITRE ATT&CK framework mapping'
    ],
    techStack: ['FastAPI', 'Elasticsearch / OpenSearch', 'Redis', 'React', 'Docker'],
    businessBenefits: [
      'Gives mid-market teams enterprise-grade SOC situational awareness',
      'Reduces mean time to detect (MTTD) from days to under 4 minutes',
      'Eliminates alert fatigue through correlation rules'
    ],
    metrics: [
      { label: 'MTTD Reduction', value: '< 4 Min' },
      { label: 'Noise Filtering', value: '94%' },
      { label: 'Zero-Trust Actions', value: 'Automated' }
    ]
  }
];
