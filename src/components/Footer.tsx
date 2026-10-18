import React from 'react';
import type { PageId } from '../types';
import { Shield, Cpu, Terminal, Layers, ArrowUpRight, Lock, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer 
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-medium)',
        padding: '72px 24px 36px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '40px',
          marginBottom: '56px'
        }}
      >
        {/* Column 1: Brand & Identity */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div 
              style={{
                height: '48px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.25) 0%, rgba(0, 242, 254, 0.15) 100%)',
                border: '1px solid rgba(0, 242, 254, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3px 10px',
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.25)'
              }}
            >
              <img 
                src="/mzai-mark.png" 
                alt="MZ.AI Logo" 
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 8px rgba(0, 242, 254, 0.4))'
                }}
              />
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em', color: 'var(--text-primary)', display: 'block', lineHeight: 1.2 }}>
                MZ.AI <span style={{ color: 'var(--accent-cyan)' }}>Tech Solutions</span>
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Enterprise Platform
              </span>
            </div>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.6 }}>
            Intelligent Technology. Smarter Security. Better Solutions. Architecting high-reliability software, autonomous business agents, and computer vision surveillance.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={15} color="var(--accent-cyan)" />
              <span>Technology Innovation & Operations Hub</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={15} color="var(--accent-cyan)" />
              <span>solutions@mzai.tech / contact@mzai.tech</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={15} color="var(--accent-cyan)" />
              <span>Direct Solution Line: +1 (800) 582-MZAI</span>
            </div>
          </div>
        </div>

        {/* Column 2: Flagship & Security */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-cyan)', marginBottom: '18px' }}>
            Flagship & Security
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <li>
              <button 
                onClick={() => onNavigate('sentinel-ai')}
                style={{ color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}
              >
                <Shield size={14} color="var(--accent-cyan)" />
                <span>MZ Sentinel AI Operations</span>
                <span style={{ fontSize: '0.65rem', padding: '1px 5px', background: '#ef4444', color: '#fff', borderRadius: '3px' }}>LIVE</span>
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('security')} style={{ color: 'var(--text-secondary)' }}>
                Smart Surveillance & Access Control
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('projects')} style={{ color: 'var(--text-secondary)' }}>
                Central Station Automation (SIS / Manitou)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('projects')} style={{ color: 'var(--text-secondary)' }}>
                AI Fire & Hazard Early Warning
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('projects')} style={{ color: 'var(--text-secondary)' }}>
                Cybersecurity Anomaly Dashboard
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Software & AI Solutions */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-violet)', marginBottom: '18px' }}>
            AI & Engineering
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <li>
              <button onClick={() => onNavigate('software')} style={{ color: 'var(--text-secondary)' }}>
                Enterprise Web & Cloud Software
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('ai-dev')} style={{ color: 'var(--text-secondary)' }}>
                Generative AI & LLM Integrations
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('ai-automation')} style={{ color: 'var(--text-secondary)' }}>
                Autonomous Business Operations Agents
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('ai-dev')} style={{ color: 'var(--text-secondary)' }}>
                Zero-Hallucination Document RAG
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('tech-stack')} style={{ color: 'var(--text-secondary)' }}>
                Complete Architectural Stack
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Actions & Trust */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-emerald)', marginBottom: '18px' }}>
            Client Engagement
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Ready to deploy custom software, automate back-office operations, or evaluate intelligent security?
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-primary"
            style={{ width: '100%', marginBottom: '14px' }}
          >
            <span>Request a Custom Quote</span>
            <ArrowUpRight size={16} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--accent-emerald)' }}>
            <CheckCircle2 size={14} />
            <span>Mutual Non-Disclosure Agreement (NDA) Protected</span>
          </div>
        </div>
      </div>

      {/* Engineering & Ethical Transparency Notice */}
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '20px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(15, 23, 42, 0.4)',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '32px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '6px' }}>
          <Lock size={14} color="var(--accent-cyan)" />
          <span>Engineering Transparency & Ethical AI Compliance</span>
        </div>
        Interactive security demonstrations, sensor feeds, and camera overlays operate in safe simulation mode using synthetic telemetry. MZ.AI does not perform biometric facial classification or infer sensitive criminal intent. Real-world alarm hardware and central station dispatches are bound through encrypted TLS/mTLS APIs requiring verified client authorization.
      </div>

      {/* Bottom Bar */}
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}
      >
        <div>
          © {new Date().getFullYear()} MZ.AI Tech Solution Provider. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button onClick={() => onNavigate('about')} style={{ color: 'var(--text-secondary)' }}>Company Overview</button>
          <button onClick={() => onNavigate('industries')} style={{ color: 'var(--text-secondary)' }}>Industry Solutions</button>
          <button onClick={() => onNavigate('insights')} style={{ color: 'var(--text-secondary)' }}>Security Whitepapers</button>
          <button onClick={() => onNavigate('contact')} style={{ color: 'var(--text-secondary)' }}>Client Portal</button>
        </div>
      </div>
    </footer>
  );
};
