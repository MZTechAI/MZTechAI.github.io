import React from 'react';
import type { PageId } from '../types';
import { 
  Shield, 
  Cpu, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Users, 
  Globe2, 
  Lock, 
  Sparkles, 
  Layers, 
  ShieldAlert, 
  Compass, 
  HeartHandshake 
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (context: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onRequestQuote }) => {
  const leadership = [
    {
      name: 'Malik Zaid',
      role: 'Founder & Chief Technology Officer',
      bio: 'Pioneer in distributed systems and embedded security protocols. Former senior engineering architect leading enterprise transformations across North America and the Middle East.',
      initials: 'MZ'
    },
    {
      name: 'Sarah Chen, M.Sc.',
      role: 'Lead AI & Machine Learning Engineer',
      bio: 'Specialist in computer vision (YOLO), edge ONNX inference, and deterministic Retrieval-Augmented Generation for high-compliance enterprise domains.',
      initials: 'SC'
    },
    {
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Principal Security Architect & IoT Systems',
      bio: 'Over 18 years engineering central monitoring station receivers, SIA DC-09 protocol bridges, and mission-critical physical intrusion surveillance systems.',
      initials: 'TM'
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Enterprise Delivery & Solutions',
      bio: 'Oversees customer success, SLA governance, and cloud-hybrid deployment transitions for Fortune 500 logistics and manufacturing clients.',
      initials: 'ER'
    }
  ];

  const standards = [
    { label: 'UL 1981 & ANSI SIA CP-01', desc: 'Central station automation compliance and false-alarm reduction standards compatibility.' },
    { label: 'SOC 2 Type II & ISO 27001', desc: 'Strict data confidentiality, access logging, and perimeter penetration hardening.' },
    { label: 'Zero-Trust mTLS Device Identity', desc: 'Hardware-anchored cryptographic authentication on every edge IoT sensor and video gateway.' },
    { label: 'Air-Gapped & Sovereign Ready', desc: 'Fully offline inference engines capable of running on private on-premises server racks.' }
  ];

  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Compass size={14} />
          <span>OUR MISSION & ARCHITECTURAL HERITAGE</span>
        </div>
        <h1 className="section-title">
          Engineering the Convergence of <br />
          <span className="text-gradient">Software, AI & Physical Security</span>
        </h1>
        <p className="section-description">
          MZ.AI was founded on a simple conviction: modern enterprise software cannot afford to be fragile, and physical security can no longer rely on unverified 1990s analog tripwires.
        </p>
      </div>

      {/* Brand Ethos Card */}
      <div 
        className="glass-panel" 
        style={{
          padding: '48px',
          marginBottom: '56px',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(5, 8, 17, 0.95) 100%)',
          border: '1px solid var(--border-glow)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ marginBottom: '18px' }}>
            <img 
              src="/mzai-emblem.png" 
              alt="MZ.AI Tech Solution Provider" 
              style={{
                height: '64px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 16px rgba(0, 242, 254, 0.4))'
              }}
            />
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            THE MZ.AI ADVANTAGE
          </span>
          <h2 style={{ fontSize: '1.85rem', marginTop: '8px', marginBottom: '16px', lineHeight: 1.3 }}>
            Intelligent Technology. Smarter Security. Better Solutions.
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
            Traditional IT consultancies build web apps but have zero understanding of CCTV protocols, camera FPS drops, or central station receiver signals. Physical security integrators install cameras but lack deep-learning AI capabilities.
          </p>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            MZ.AI brings both worlds together under one roof. We architect web applications, autonomous agentic workflows, and physical surveillance platforms that communicate seamlessly with microsecond latency.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: '16px' }}>
          {[
            { metric: '14+', label: 'Production Blueprints Delivered' },
            { metric: '82%', label: 'False Alarm Reduction Benchmark' },
            { metric: '99.98%', label: 'Guaranteed System Availability' },
            { metric: '< 28s', label: 'Operator Incident Triage Speed' }
          ].map((stat, sIdx) => (
            <div 
              key={sIdx}
              style={{
                padding: '24px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid var(--border-medium)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                {stat.metric}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Core Principles */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Our Four Core Principles</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>The engineering non-negotiables that guide every line of code we ship.</p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px'
          }}
        >
          {[
            {
              icon: <Terminal size={24} color="var(--accent-cyan)" />,
              title: 'Zero Vendor Lock-In',
              desc: 'We build on open industry standards (TypeScript, Python, ONNX, SIA DC-09, PostgreSQL). You retain 100% intellectual property ownership of your codebase.'
            },
            {
              icon: <Shield size={24} color="var(--accent-emerald)" />,
              title: 'Mission-Critical Resilience',
              desc: 'Systems are designed for harsh real-world conditions: offline local buffering during network outages, sub-second failovers, and automatic reconciliation.'
            },
            {
              icon: <Sparkles size={24} color="var(--accent-violet)" />,
              title: 'Deterministic AI Safety',
              desc: 'Zero hallucinated actions. We enforce strict human approval gates and verifiable source citations before any high-stakes business or security operation.'
            },
            {
              icon: <Lock size={24} color="#f43f5e" />,
              title: 'Sovereign Cryptographic Security',
              desc: 'From AES-256 encrypted video chunks to hardware mTLS device identities, we eliminate perimeter attack surfaces and unauthorized hardware spoofing.'
            }
          ].map((principle, pIdx) => (
            <div 
              key={pIdx}
              className="glass-panel"
              style={{ padding: '32px' }}
            >
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                {principle.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{principle.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Executive Engineering Leadership</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Seasoned operators with decades of combined experience in high-consequence technology systems.</p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px'
          }}
        >
          {leadership.map((member, mIdx) => (
            <div 
              key={mIdx}
              className="glass-panel"
              style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: '#ffffff',
                    marginBottom: '16px',
                    boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)'
                  }}
                >
                  {member.initials}
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '14px' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standards & Compliance Grid */}
      <div 
        className="glass-panel" 
        style={{
          padding: '40px',
          marginBottom: '56px',
          background: 'rgba(10, 16, 32, 0.85)'
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Industry Compliance & Standards Alignment</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Built to integrate seamlessly into existing enterprise governance, commercial insurance policies, and municipal dispatch regulations.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '20px'
          }}
        >
          {standards.map((std, sIdx) => (
            <div 
              key={sIdx}
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                <CheckCircle2 size={16} />
                {std.label}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="glass-panel" 
        style={{
          padding: '48px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(0, 242, 254, 0.1) 100%)',
          border: '1px solid var(--border-glow)'
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '14px' }}>Ready to Partner with MZ.AI?</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
          Whether you need a custom enterprise web system, an autonomous agentic pipeline, or intelligent Sentinel AI physical surveillance, our teams are ready.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button 
            className="btn-primary"
            onClick={() => onRequestQuote('Enterprise Partnership Discussion')}
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight size={16} />
          </button>
          <button 
            className="btn-secondary"
            onClick={() => onNavigate('sentinel-ai')}
          >
            <Shield size={16} />
            <span>Launch MZ Sentinel AI Live Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
