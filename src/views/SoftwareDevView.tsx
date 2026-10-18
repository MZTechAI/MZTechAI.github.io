import React from 'react';
import type { PageId } from '../types';
import { 
  Terminal, 
  Code2, 
  Server, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Cloud,
  Cpu
} from 'lucide-react';

interface SoftwareDevViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (domain: string) => void;
}

export const SoftwareDevView: React.FC<SoftwareDevViewProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Terminal size={14} />
          <span>FULL-STACK SOFTWARE ARCHITECTURE</span>
        </div>
        <h1 className="section-title">
          Custom Enterprise Software & <br />
          <span className="text-gradient">Modern Web Applications</span>
        </h1>
        <p className="section-description">
          We engineer robust, secure, and maintainable software systems from scalable React/TypeScript web apps to high-throughput Python and Go microservices.
        </p>
      </div>

      {/* 4 Pillars of our Software Engineering */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '24px',
          marginBottom: '56px'
        }}
      >
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ color: 'var(--accent-blue)', marginBottom: '16px' }}><Code2 size={32} /></div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Modern Web & SaaS Apps</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            Next.js and React 19 single-page and server-rendered applications with responsive layouts, accessible component libraries, and sub-second load times.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <li>• Strict TypeScript end-to-end type safety</li>
            <li>• Mobile-first adaptive design & PWA support</li>
            <li>• Internationalization & multi-tenant auth</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}><Server size={32} /></div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Microservices & Distributed APIs</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            High-concurrency backends developed in Python (FastAPI/AsyncIO) and Go, with Redis caching, PostgreSQL ACID guarantees, and WebSocket streaming.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <li>• OpenAPI / Swagger documented endpoints</li>
            <li>• Event-driven messaging with Kafka & Redis</li>
            <li>• Distributed locks & safe concurrency controls</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ color: 'var(--accent-violet)', marginBottom: '16px' }}><Database size={32} /></div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Legacy System Modernization</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            Migrate fragile on-premise Windows servers, monolithic databases, or legacy desktop applications to resilient cloud architectures without business interruption.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <li>• Strangler fig gradual migration patterns</li>
            <li>• Database replication & zero-downtime cutover</li>
            <li>• Clean API wrappers over legacy data stores</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ color: 'var(--accent-emerald)', marginBottom: '16px' }}><Cloud size={32} /></div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>DevOps & Secure Cloud Deploy</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            Docker containerization, Kubernetes orchestrations, automated CI/CD pipelines, and infrastructure-as-code for AWS, Azure, GCP, or private air-gapped clusters.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <li>• Automated vulnerability & dependency scanning</li>
            <li>• Prometheus & OpenTelemetry instrumentation</li>
            <li>• Blue-green and canary deployment pipelines</li>
          </ul>
        </div>
      </div>

      {/* Engineering Principles */}
      <div 
        style={{
          padding: '40px',
          borderRadius: 'var(--radius-xl)',
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid var(--border-medium)',
          marginBottom: '56px'
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
          Our Software Engineering Quality Standards
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px' }}>
          {[
            { title: 'Zero Hardcoded Secrets', desc: 'All credentials handled via vault and environment variables with strict .env.example templates.' },
            { title: 'Cryptographic Audit Trails', desc: 'Every administrative mutation is immutably timestamped and attributed to an authorized role.' },
            { title: 'Graceful Degradation', desc: 'Sensors and UI components cache state locally during network hiccups, avoiding user lockouts.' },
            { title: 'Comprehensive Testing', desc: 'Unit, integration, and end-to-end tests guarantee deterministic deployments.' }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bar */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '32px',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15), rgba(0, 242, 254, 0.1))',
          border: '1px solid rgba(0, 242, 254, 0.3)'
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Ready to Build Your Custom Software Solution?</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.92rem' }}>
            Book an initial technical consultation with our lead architects to review your specifications.
          </p>
        </div>

        <button 
          onClick={() => onRequestQuote('Software and Web Application Development')}
          className="btn-primary"
        >
          <span>Get a Custom Software Quote</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
