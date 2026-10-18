import React from 'react';
import type { PageId } from '../types';
import { QuoteEstimator } from '../components/QuoteEstimator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Building2, 
  Headphones, 
  Calendar 
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  initialContext?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ initialContext }) => {
  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Mail size={14} />
          <span>ENTERPRISE CONSULTATION & RFP INTAKE</span>
        </div>
        <h1 className="section-title">
          Connect with Our <br />
          <span className="text-gradient">Senior Engineering Team</span>
        </h1>
        <p className="section-description">
          Request a project estimate, schedule an architectural discovery session, or inquire about implementing MZ Sentinel AI for your monitoring facility.
        </p>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '64px'
        }}
      >
        {/* Left Column: Direct Contact & Guarantees */}
        <div>
          {/* Direct Contact Card */}
          <div className="glass-panel" style={{ padding: '36px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '20px', color: 'var(--text-primary)' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Enterprise Inquiries & RFP
                  </div>
                  <a href="mailto:solutions@mzai.tech" style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    solutions@mzai.tech
                  </a>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>
                    Standard response time: within 2 hours
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)'
                  }}
                >
                  <Headphones size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    24/7 Monitoring Operations Hotline
                  </div>
                  <a href="tel:+18005556924" style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    +1 (800) 555-MZAI
                  </a>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>
                    Live operator escalation & incident dispatch
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-violet)'
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Global Engineering Centers
                  </div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Austin Innovation Center (USA)
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '2px 0 6px 0' }}>
                    100 Tech Ridge Blvd, Suite 400, Austin, TX 78753
                  </p>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    DIFC Regional Hub (MENA)
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>
                    Gate Precinct 4, Level 5, DIFC, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SLA & Security Guarantees Card */}
          <div 
            className="glass-panel" 
            style={{
              padding: '32px',
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(0, 242, 254, 0.05) 100%)',
              border: '1px solid var(--border-medium)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '14px' }}>
              <ShieldCheck size={18} /> Enterprise Engagement Safeguards
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Standard Mutual Non-Disclosure Agreement (NDA) executed prior to technical architecture review.',
                'Direct engagement with Senior Solutions Architects, not outsourced sales commission reps.',
                'Deterministic fixed-price or milestone-governed deliverables with clear acceptance criteria.',
                'Air-gapped and private on-premises deployment options for defense and healthcare compliance.'
              ].map((point, pIdx) => (
                <div key={pIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quote Estimator & Intake Form */}
        <div>
          <QuoteEstimator initialProjectType={initialContext || 'Software and Web Application Development'} />
        </div>
      </div>
    </div>
  );
};
