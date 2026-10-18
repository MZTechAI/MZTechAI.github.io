export interface TechCategory {
  title: string;
  description: string;
  items: {
    name: string;
    role: string;
    maturity: 'Production Implemented' | 'Client Deployment Target' | 'Integration Bridge';
    iconName: string;
    details: string;
  }[];
}

export const techStackData: TechCategory[] = [
  {
    title: '1. Frontend & Client-Side Engineering',
    description: 'High-performance, accessible, and reactive user interfaces designed for complex data-dense consoles and executive portals.',
    items: [
      {
        name: 'React 19 & TypeScript',
        role: 'Core UI Framework',
        maturity: 'Production Implemented',
        iconName: 'Code',
        details: 'Strict type safety, component modularity, hooks architecture, and zero-runtime type errors.'
      },
      {
        name: 'Vite 8 Build Tooling',
        role: 'Bundler & HMR Engine',
        maturity: 'Production Implemented',
        iconName: 'Zap',
        details: 'Sub-second cold starts, Rollup-optimized production trees, and modern ES-module delivery.'
      },
      {
        name: 'Modern CSS & Custom Design System',
        role: 'Styling & Theming',
        maturity: 'Production Implemented',
        iconName: 'Palette',
        details: 'Glassmorphic tokens, hardware-accelerated animations, dark-first midnight cyber aesthetic, and WCAG AA contrast.'
      },
      {
        name: 'Web Audio API',
        role: 'Operator Alert Synthesizer',
        maturity: 'Production Implemented',
        iconName: 'Volume2',
        details: 'Native in-browser multi-frequency oscillators for alarm cues without external audio asset bloat.'
      }
    ]
  },
  {
    title: '2. AI, LLMs & Computer Vision',
    description: 'State-of-the-art multi-modal models, fine-tuned RAG retrieval pipelines, and low-latency edge vision inferencing.',
    items: [
      {
        name: 'Python FastAPI',
        role: 'High-Throughput AI Backend',
        maturity: 'Client Deployment Target',
        iconName: 'Cpu',
        details: 'Asynchronous ASGI endpoints, Pydantic data validation, and native integration with PyTorch & Hugging Face.'
      },
      {
        name: 'YOLOv10 / ONNX Runtime',
        role: 'Edge Video Analytics',
        maturity: 'Production Implemented',
        iconName: 'Eye',
        details: 'Sub-30ms real-time bounding box detection for persons, vehicles, line-crossing, and unattended objects.'
      },
      {
        name: 'Qdrant & pgvector',
        role: 'Vector Database & Embeddings',
        maturity: 'Client Deployment Target',
        iconName: 'Database',
        details: 'High-dimensional cosine and HNSW indexing for hybrid keyword + semantic enterprise knowledge retrieval.'
      },
      {
        name: 'LangGraph & LangChain',
        role: 'Agentic Workflow Orchestrator',
        maturity: 'Production Implemented',
        iconName: 'GitFork',
        details: 'Stateful multi-step agent planning with deterministic human-in-the-loop approval barriers.'
      },
      {
        name: 'PaddleOCR & Tesseract',
        role: 'Document OCR & Coordinate Extraction',
        maturity: 'Production Implemented',
        iconName: 'FileText',
        details: 'Layout-aware spatial text extraction from contracts, invoices, bills of lading, and schemas.'
      }
    ]
  },
  {
    title: '3. Security, Physical IoT & Alarm Protocols',
    description: 'Industrial protocols, sensor gateways, and central alarm monitoring station integration architectures.',
    items: [
      {
        name: 'SIA DC-09 & Contact ID',
        role: 'Central Station Receiver Protocols',
        maturity: 'Integration Bridge',
        iconName: 'Shield',
        details: 'Direct signal parsing compatible with industry monitoring automation software (SIS, Bold Manitou, MasterMind).'
      },
      {
        name: 'MQTT & WebSockets',
        role: 'Bi-Directional Telemetry Stream',
        maturity: 'Production Implemented',
        iconName: 'Radio',
        details: 'Sub-100ms event delivery from perimeter PIR sensors, door contacts, and thermal probes to the operator console.'
      },
      {
        name: 'WebRTC & RTSP Stream Relays',
        role: 'Ultra-Low Latency Video Streaming',
        maturity: 'Production Implemented',
        iconName: 'Video',
        details: 'H.264/H.265 video transport enabling 5-second pre-alarm and post-alarm visual verification playback.'
      },
      {
        name: 'TLS 1.3 & mTLS Hardware Tokens',
        role: 'Cryptographic Edge Security',
        maturity: 'Client Deployment Target',
        iconName: 'Lock',
        details: 'Zero-trust mutual TLS device identity preventing rogue hardware spoofing on corporate LANs.'
      }
    ]
  },
  {
    title: '4. Enterprise Backend, Data & Cloud Infrastructure',
    description: 'Scalable data persistence, resilient caching layers, and containerized cloud deployment environments.',
    items: [
      {
        name: 'PostgreSQL & TimescaleDB',
        role: 'Relational & Time-Series Ledger',
        maturity: 'Client Deployment Target',
        iconName: 'Server',
        details: 'ACID transaction guarantees for incident records combined with hypertable compression for sensor metrics.'
      },
      {
        name: 'Redis Cluster',
        role: 'In-Memory Cache & Pub/Sub',
        maturity: 'Client Deployment Target',
        iconName: 'Layers',
        details: 'Session management, rate-limiting guards, and live operator presence broadcast channels.'
      },
      {
        name: 'Docker & Kubernetes',
        role: 'Containerized Deployment',
        maturity: 'Client Deployment Target',
        iconName: 'Box',
        details: 'Cloud-agnostic deployment configurations ready for AWS, Azure, Google Cloud, or on-premises air-gapped server racks.'
      },
      {
        name: 'Prometheus & OpenTelemetry',
        role: 'Observability & Telemetry Tracing',
        maturity: 'Client Deployment Target',
        iconName: 'Activity',
        details: 'Distributed request tracing, API latency alerts, and hardware health metrics.'
      }
    ]
  }
];
