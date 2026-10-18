import React from 'react';
import type { PageId, ProjectItem } from '../types';
import { HeroSection } from '../components/HeroSection';
import { InteractiveDemos } from '../components/InteractiveDemos';
import { projectsData } from '../data/projectsData';
import { 
  Shield, 
  Cpu, 
  Terminal, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Building2, 
  Lock, 
  Eye, 
  Database,
  ArrowUpRight
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenProjectModal: (project: ProjectItem) => void;
  onLaunchDemo: (demoType: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProjectModal,
  onLaunchDemo
}) => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Three Flagship Pillars Showcase */}
      <section className="section-container" style={{ paddingTop: '20px' }}>
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>CORE ARCHITECTURAL PILLARS</span>
          </div>
          <h2 className="section-title">
            Three Specialized Disciplines. <br />
            <span className="text-gradient">One Unified Technology Partner.</span>
          </h2>
          <p className="section-description">
            We bridge the critical gap between bleeding-edge generative AI research, rock-solid enterprise software engineering, and mission-critical physical security infrastructure.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {/* Pillar 1: Software & Web Development */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '36px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              borderTop: '3px solid var(--accent-blue)' 
            }}
          >
            <div>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(0, 102, 255, 0.15)',
                  border: '1px solid rgba(0, 102, 255, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)',
                  marginBottom: '20px'
                }}
              >
                <Terminal size={24} />
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Enterprise Software & Cloud Platforms
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                High-performance web applications, scalable distributed backends, real-time analytics portals, and legacy system modernizations designed for 99.99% availability.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>React 19, TypeScript, Next.js, and FastAPI</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>Sub-second cold-starts and distributed caching</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>Enterprise role-based access control (RBAC)</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => onNavigate('software')}
              className="btn-outline" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Explore Software Capabilities</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Pillar 2: AI & Intelligent Automation */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '36px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              borderTop: '3px solid var(--accent-violet)' 
            }}
          >
            <div>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-violet)',
                  marginBottom: '20px'
                }}
              >
                <Cpu size={24} />
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Generative AI, LLMs & Agentic Systems
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Fine-tuned domain LLMs, zero-hallucination RAG document extraction, and autonomous agent workflows bound by strict human-in-the-loop governance policies.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-violet)" />
                  <span>Verifiable source-citation RAG (Zero-Hallucination)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-violet)" />
                  <span>Governed agent state machines (LangGraph)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-violet)" />
                  <span>Local air-gapped private model deployments</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => onNavigate('ai-dev')}
              className="btn-outline" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Explore AI & Machine Learning</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Pillar 3: MZ Sentinel AI Physical Security */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '36px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              borderTop: '3px solid var(--accent-cyan)',
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(7, 14, 28, 0.95) 100%)'
            }}
          >
            <div>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  border: '1px solid rgba(0, 242, 254, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  marginBottom: '20px'
                }}
              >
                <Shield size={24} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>
                  MZ Sentinel AI Security
                </h3>
                <span style={{ fontSize: '0.65rem', padding: '2px 6px', background: '#ef4444', color: '#fff', borderRadius: '4px', fontWeight: 700 }}>
                  FLAGSHIP
                </span>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Next-generation computer vision and multi-sensor alarm monitoring platform. Integrates with industry Central Station receivers (SIA DC-09, Contact ID, SIS, Bold Manitou).
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>82% reduction in costly municipal false alarms</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>Real-time RTSP/WebRTC AI bounding box triage</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>PIR + Optical + Thermal multi-sensor correlation</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => onNavigate('sentinel-ai')}
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Launch Live Operations Console</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Interactive Technology Demos Container */}
      <section className="section-container" style={{ paddingTop: '0' }}>
        <InteractiveDemos />
      </section>

      {/* 4. Featured Production Projects Teaser */}
      <section className="section-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '40px' }}>
          <div>
            <div className="section-badge">
              <Sparkles size={14} />
              <span>PROVEN CLIENT RESULTS</span>
            </div>
            <h2 className="section-title" style={{ margin: 0 }}>
              Featured Enterprise Case Studies
            </h2>
          </div>

          <button 
            onClick={() => onNavigate('projects')}
            className="btn-outline"
          >
            <span>View All 14 Projects</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          {featuredProjects.map(proj => (
            <div
              key={proj.id}
              className="glass-panel"
              onClick={() => onOpenProjectModal(proj)}
              style={{
                padding: '28px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: proj.accentColor ? `3px solid ${proj.accentColor}` : undefined
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="status-pill status-live">
                    <span className="status-dot" />
                    {proj.status}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{proj.category}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {proj.shortDescription}
                </p>

                {proj.metrics && proj.metrics.length > 0 && (
                  <div style={{ display: 'flex', gap: '12px', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', marginBottom: '20px' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{proj.metrics[0].value}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{proj.metrics[0].label}</div>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>Inspect Architecture</span>
                <ArrowRight size={15} color="var(--accent-cyan)" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Enterprise Conversion Callout */}
      <section 
        className="section-container"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.12) 0%, rgba(15, 23, 42, 0.6) 80%)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-glow)',
          padding: '60px 32px',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto 80px auto'
        }}
      >
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
          Have a Project in Mind? <br />
          <span className="text-gradient">Let’s Architect It Together.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 32px auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Whether you require a bespoke AI agent pipeline, custom enterprise web platform, or smart physical alarm monitoring integration, our engineers are ready.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-primary"
            style={{ padding: '14px 32px', fontSize: '1.05rem' }}
          >
            <span>Request a Custom Technical Proposal</span>
            <ArrowUpRight size={18} />
          </button>
          <button 
            onClick={() => onNavigate('sentinel-ai')}
            className="btn-secondary"
            style={{ padding: '14px 28px' }}
          >
            <span>Explore MZ Sentinel Operations</span>
          </button>
        </div>
      </section>
    </div>
  );
};
