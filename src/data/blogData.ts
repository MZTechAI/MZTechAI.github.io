import type { BlogPost } from '../types';

export const blogData: BlogPost[] = [
  {
    id: 'ai-false-alarm-reduction',
    title: 'Eliminating the 90% False Alarm Crisis: Computer Vision & Sensor Fusion',
    slug: 'eliminating-false-alarms-computer-vision',
    date: 'October 12, 2026',
    readTime: '6 min read',
    category: 'Intelligent Security',
    tags: ['Computer Vision', 'Central Station', 'Sensor Fusion', 'MZ Sentinel'],
    excerpt: 'How modern monitoring centers are replacing legacy PIR-only tripwires with multi-modal confidence gating to slash municipal fines and operator fatigue.',
    author: {
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Principal Systems Architect',
      avatarInitials: 'TM'
    },
    content: [
      'Commercial monitoring centers worldwide face a chronic crisis: more than 90% of received burglar alarms are false positives triggered by windblown tarps, small animals, spiderwebs on lenses, or shifting shadows.',
      'Under municipal alarm ordinances in North America and Europe, repeated unverified police dispatches result in hundreds of dollars in escalating fines per occurrence—or worse, a permanent revocation of emergency response services.',
      'MZ Sentinel AI addresses this through a dual-stage validation engine. First, when a hardware sensor (PIR or door contact) trips, the system immediately pulls a 5-second video buffer from the nearest calibrated camera.',
      'Second, an edge-optimized YOLO detection network evaluates the scene for verified human or vehicular signatures with a confidence threshold exceeding 85%. Only when sensor telemetry and visual verification agree does an urgent dispatch ticket enter the operator queue.',
      'The result is an 82% reduction in unneeded dispatches and immediate priority handling for genuine perimeter breaches.'
    ]
  },
  {
    id: 'human-in-the-loop-ai-agents',
    title: 'Engineering Safe Autonomous Agents: Why Human-in-the-Loop is Non-Negotiable',
    slug: 'engineering-safe-autonomous-agents',
    date: 'September 28, 2026',
    readTime: '8 min read',
    category: 'AI & Automation',
    tags: ['AI Agents', 'Governance', 'Enterprise Architecture', 'LangGraph'],
    excerpt: 'Architectural blueprints for enterprise agentic workflows that maintain high execution velocity without granting unsupervised financial or administrative authority.',
    author: {
      name: 'Sarah Chen, M.Sc.',
      role: 'Lead AI Engineer',
      avatarInitials: 'SC'
    },
    content: [
      'The promise of autonomous AI agents executing multi-step business operations is immense—from automated invoice reconciliation to supplier price re-negotiations.',
      'However, enterprise adoption has frequently stalled due to justified executive terror: what happens when an LLM hallucinates an unauthorized 15% discount or terminates an employee record due to an edge-case prompt injection?',
      'At MZ.AI, we implement a strict "Governed Autonomous Pipeline" architecture. Agents are permitted full autonomy during read-only inspection, semantic retrieval, cross-system schema mapping, and draft synthesis.',
      'However, state machine transitions involving write operations—specifically disbursement of funds, external customer email dispatches, and role permission updates—are bounded by immutable "Approval Gates".',
      'The operator interface presents a one-click diff of the agent\'s proposed action, rationale trace, and estimated impact. Only upon verified human cryptographic signature does the action execute.'
    ]
  },
  {
    id: 'document-rag-without-hallucinations',
    title: 'Deterministic Enterprise RAG: Zero-Hallucination Information Extraction',
    slug: 'deterministic-enterprise-rag-zero-hallucinations',
    date: 'September 15, 2026',
    readTime: '7 min read',
    category: 'Software Engineering',
    tags: ['RAG', 'Vector Databases', 'Document AI', 'Enterprise'],
    excerpt: 'Moving past naive cosine similarity: implementing hybrid dense-sparse retrieval and verbatim source citation gates for legal and compliance documents.',
    author: {
      name: 'Malik Zaid',
      role: 'Founder & CTO',
      avatarInitials: 'MZ'
    },
    content: [
      'Naive RAG implementations often fail in enterprise environments where exact numbers, clause cross-references, and effective dates determine multimillion-dollar liabilities.',
      'When an executive queries "What is our indemnification cap under the 2024 Cloud Services Agreement?", an answer of "approximately 2x annual fees" is unacceptable if the actual contract specified 1.5x with specific carve-outs.',
      'To achieve zero-hallucination compliance, MZ.AI utilizes a three-tier retrieval hierarchy: BM25 lexical keyword matching to capture exact alphanumeric contract IDs, dense HNSW vector indexing for semantic concepts, and a re-ranking cross-encoder.',
      'Furthermore, the generation prompt enforces a strict constraint: every factual assertion must include a verbatim citation block and page coordinates. If the source material does not explicitly support the assertion, the model is architected to state "Insufficient contract documentation to verify".'
    ]
  }
];
