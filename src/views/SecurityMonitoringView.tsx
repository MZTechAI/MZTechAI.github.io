import React from 'react';
import type { PageId } from '../types';
import { 
  Shield, 
  Camera, 
  Radio, 
  Flame, 
  Activity, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Lock,
  Layers,
  Play
} from 'lucide-react';

interface SecurityMonitoringViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (domain: string) => void;
}

export const SecurityMonitoringView: React.FC<SecurityMonitoringViewProps> = ({ onNavigate, onRequestQuote }) => {
  const lifecycleSteps = [
    { num: '1', title: 'Device Telemetry Generation', desc: 'IoT sensor (PIR, door contact, acoustic, thermal) detects physical state change.' },
    { num: '2', title: 'Cryptographic Validation', desc: 'Secure edge gateway validates device token, mTLS identity, and applies microsecond timestamp.' },
    { num: '3', title: 'AI Rules & Video Correlation', desc: 'Rules engine correlates nearby camera feeds and runs computer vision confidence model (YOLOv10).' },
    { num: '4', title: 'Operator Dispatch Notification', desc: 'Prioritized ticket reaches central station console with 5-second video verification clip.' },
    { num: '5', title: 'Operator Review & SLA Triage', desc: 'Authorized operator reviews scene, eliminates false positives, or escalates emergency dispatch.' },
    { num: '6', title: 'Evidentiary Resolution Sign-off', desc: 'Operator records action summary notes; system locks cryptographic incident audit log.' },
    { num: '7', title: 'Compliance & Insurance Audit', desc: 'Structured logs exportable for police reporting, municipal compliance, and insurance claims.' }
  ];

  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Shield size={14} />
          <span>INTELLIGENT SURVEILLANCE & ALARM MONITORING</span>
        </div>
        <h1 className="section-title">
          Smart Surveillance, Access Control & <br />
          <span className="text-gradient">Intelligent Alarm Systems</span>
        </h1>
        <p className="section-description">
          Modernizing physical security with multi-sensor edge correlation, AI video analytics, and standardized Central Station automation pipelines that eliminate 82% of false dispatches.
        </p>
      </div>

      {/* Flagship MZ Sentinel AI Hero Card */}
      <div 
        style={{
          padding: '40px',
          borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.18) 0%, rgba(0, 242, 254, 0.12) 100%)',
          border: '1px solid rgba(0, 242, 254, 0.4)',
          boxShadow: '0 0 35px rgba(0, 242, 254, 0.2)',
          marginBottom: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 10px', borderRadius: '4px', background: '#ef4444', color: '#fff', fontSize: '0.75rem', fontWeight: 800, marginBottom: '12px' }}>
            FLAGSHIP PLATFORM
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
            MZ Sentinel AI — Real-Time Operations Console
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
            A high-reliability control room interface designed for central monitoring stations, corporate campuses, and industrial facilities. Experience simulated live camera bounding boxes, real-time alarm queues, and incident resolution workflows.
          </p>

          <button 
            onClick={() => onNavigate('sentinel-ai')}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1rem' }}
          >
            <Play size={16} />
            <span>Launch Live Security Console</span>
          </button>
        </div>

        <div 
          style={{
            background: 'rgba(5, 8, 17, 0.85)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '14px' }}>
            Industry Receiver Compatibility:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
              <span>SIA DC-09 & Contact ID Signal Ingest</span>
              <strong style={{ color: '#34d399' }}>Verified</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
              <span>Central Station Integration (SIS, Bold Manitou, MasterMind)</span>
              <strong style={{ color: 'var(--accent-cyan)' }}>Supported</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)' }}>
              <span>WebRTC & RTSP Edge Video Verification</span>
              <strong style={{ color: '#34d399' }}>Sub-100ms</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 7-Step Alarm Response Workflow Lifecycle */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            The 7-Stage Alarm Response Lifecycle
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            How MZ.AI transforms raw physical sensor signals into verified, auditable incident responses.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '16px' }}>
          {lifecycleSteps.map((step) => (
            <div 
              key={step.num}
              className="glass-panel"
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(0, 242, 254, 0.15)',
                  border: '1px solid var(--accent-cyan)',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {step.num}
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{step.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Security Solution Areas */}
      <div style={{ marginBottom: '56px' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '32px' }}>
          Comprehensive Security Solutions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '14px' }}><Camera size={28} /></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>AI Video Analytics & Tripwires</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Restricted-zone line crossing, vehicle plate recognition, loitering detection, and camera lens obstruction alerts operating at 60 FPS.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ color: '#ef4444', marginBottom: '14px' }}><Flame size={28} /></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>AI Fire, Smoke & Thermal Early Warning</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Dual-spectrum thermal radiometry and smoke plume expansion models detecting warehouse thermal anomalies up to 7 minutes faster than ceiling detectors.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ color: '#10b981', marginBottom: '14px' }}><Building2 size={28} /></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Smart Building Access & Environmental IoT</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Sub-floor water leak detection probes, wireless door contacts, acoustic glass-break sensors, and zero-trust mobile credential access control.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
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
          <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Request a Facility Security Assessment</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.92rem' }}>
            Evaluate sensor topology, camera coverage, and central station receiver compatibility.
          </p>
        </div>

        <button 
          onClick={() => onRequestQuote('Smart Surveillance, Access & IoT Gateways')}
          className="btn-primary"
        >
          <span>Book Security Assessment</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
