import React, { useState } from 'react';
import { industriesData } from '../data/industriesData';
import type { PageId } from '../types';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  Cpu, 
  Sparkles,
  Search
} from 'lucide-react';

interface IndustriesViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (industry: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onNavigate, onRequestQuote }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(industriesData[0].id);

  const activeIndustry = industriesData.find(i => i.id === selectedIndustryId) || industriesData[0];

  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Building2 size={14} />
          <span>INDUSTRY-SPECIFIC BLUEPRINTS</span>
        </div>
        <h1 className="section-title">
          Intelligent Technology <br />
          <span className="text-gradient">Tailored For Your Sector</span>
        </h1>
        <p className="section-description">
          We combine domain-specific operational workflows with scalable software architecture and AI security to solve unique operational challenges across 10 vital sectors.
        </p>
      </div>

      {/* Main Two-Column Industry Explorer */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          marginBottom: '64px'
        }}
        className="industry-grid"
      >
        {/* Left Column (4 Cols): Industry Navigation List */}
        <div 
          style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '8px' }}
          className="industry-nav-col"
        >
          {industriesData.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustryId(ind.id)}
              style={{
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'left',
                background: selectedIndustryId === ind.id 
                  ? 'linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 242, 254, 0.15))' 
                  : 'rgba(15, 23, 42, 0.55)',
                border: `1px solid ${selectedIndustryId === ind.id ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                color: selectedIndustryId === ind.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>{ind.title}</div>
              <div style={{ fontSize: '0.78rem', color: selectedIndustryId === ind.id ? '#93c5fd' : 'var(--text-muted)' }}>
                {ind.badge}
              </div>
            </button>
          ))}
        </div>

        {/* Right Column (8 Cols): Deep Dive Details for Selected Industry */}
        <div 
          style={{ gridColumn: 'span 8' }}
          className="industry-detail-col"
        >
          <div 
            className="glass-panel"
            style={{ padding: '36px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              {/* Badge & Title */}
              <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.3)', color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px' }}>
                {activeIndustry.badge}
              </div>

              <h2 style={{ fontSize: '1.9rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                {activeIndustry.title}
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px' }}>
                {activeIndustry.summary}
              </p>

              {/* Quantifiable Impact Metrics Row */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                  gap: '12px',
                  marginBottom: '32px'
                }}
              >
                {activeIndustry.impactMetrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(0, 242, 254, 0.06)',
                      border: '1px solid rgba(0, 242, 254, 0.2)',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenges vs MZ.AI Solution Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', marginBottom: '28px' }}>
                {/* Challenges */}
                <div 
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(239, 68, 68, 0.05)',
                    border: '1px solid rgba(239, 68, 68, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px' }}>
                    <ShieldAlert size={16} />
                    <span>Sector Operational Challenges</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {activeIndustry.challenges.map((c, idx) => (
                      <li key={idx} style={{ lineHeight: 1.5 }}>• {c}</li>
                    ))}
                  </ul>
                </div>

                {/* MZ Solutions */}
                <div 
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px' }}>
                    <Cpu size={16} />
                    <span>Architected MZ.AI Solutions</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {activeIndustry.mzSolutions.map((s, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <CheckCircle2 size={14} color="#34d399" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ lineHeight: 1.5 }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Applied */}
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Applied Core Technologies:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeIndustry.keyTechnologies.map((t, idx) => (
                    <span 
                      key={idx}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Request CTA */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <button
                onClick={() => onRequestQuote(`${activeIndustry.title} Industry Solution`)}
                className="btn-primary"
              >
                <span>Request {activeIndustry.title} Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .industry-nav-col {
            grid-column: span 12 !important;
          }
          .industry-detail-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
