import React, { useState, useEffect } from 'react';
import type { PageId } from '../types';
import { 
  Shield, 
  Cpu, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Activity, 
  Eye, 
  Radio, 
  Sparkles,
  Play
} from 'lucide-react';
import { soundManager } from '../utils/sound';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  // Mini simulated telemetry state in the hero preview
  const [pulseCount, setPulseCount] = useState(1482);
  const [activeAlert, setActiveAlert] = useState(false);
  const [detectionConfidence, setDetectionConfidence] = useState(94.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount(prev => prev + Math.floor(Math.random() * 3));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const triggerHeroSimEvent = () => {
    setActiveAlert(true);
    setDetectionConfidence(98.2);
    soundManager.playAlarmBeep('warning');
    setTimeout(() => {
      setActiveAlert(false);
      setDetectionConfidence(94.8);
    }, 4500);
  };

  return (
    <section 
      style={{
        position: 'relative',
        maxWidth: '1360px',
        margin: '0 auto',
        overflow: 'hidden'
      }}
      className="hero-section"
    >
      {/* Left Column: Headline, Copy, Credibility Badges & CTAs */}
      <div>
        {/* Brand Tagline Badge */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(0, 242, 254, 0.08)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            color: 'var(--accent-cyan)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '24px'
          }}
        >
          <Sparkles size={14} />
          <span>INTELLIGENT TECHNOLOGY • SMARTER SECURITY • BETTER SOLUTIONS</span>
        </div>

        {/* Hero Headline from prompt */}
        <h1 
          style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '20px'
          }}
        >
          Building Intelligent Software. <br />
          <span className="text-gradient">Securing the Future.</span>
        </h1>

        {/* Supporting text from prompt */}
        <p 
          style={{
            fontSize: '1.14rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '36px',
            maxWidth: '580px'
          }}
        >
          MZ.AI delivers AI-powered software, intelligent automation, and next-generation security monitoring solutions that help businesses operate smarter, safer, and faster.
        </p>

        {/* Primary & Secondary CTAs from prompt */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
          <button 
            onClick={() => onNavigate('projects')}
            className="btn-primary"
            id="hero-explore-solutions-btn"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight size={17} />
          </button>

          <button 
            onClick={() => onNavigate('contact')}
            className="btn-secondary"
            id="hero-discuss-project-btn"
          >
            <span>Discuss Your Project</span>
          </button>
        </div>

        {/* Credibility highlights */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 110px), 1fr))',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>14+</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Verified Case Studies</div>
          </div>
          <div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>82%</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>False Alarm Filtering</div>
          </div>
          <div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>99.9%</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Telemetry Reliability</div>
          </div>
        </div>
      </div>

      {/* Right Column: Live-looking demonstrative AI Security Dashboard Preview */}
      <div style={{ position: 'relative' }}>
        {/* Glow backdrop */}
        <div 
          style={{
            position: 'absolute',
            inset: '-10px',
            background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, rgba(0, 102, 255, 0.05) 50%, transparent 70%)',
            filter: 'blur(30px)',
            zIndex: 0
          }}
        />

        {/* Dashboard Shell */}
        <div 
          className="glass-panel scanlines" 
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '24px',
            borderRadius: 'var(--radius-xl)',
            border: activeAlert ? '1px solid #f87171' : '1px solid rgba(0, 242, 254, 0.35)',
            boxShadow: activeAlert 
              ? '0 0 35px rgba(239, 68, 68, 0.35)' 
              : '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 242, 254, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Header bar of preview */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: activeAlert ? '#ef4444' : '#10b981', boxShadow: activeAlert ? '0 0 8px #ef4444' : '0 0 8px #10b981' }} />
              <span style={{ fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.04em', color: 'var(--text-primary)' }}>
                MZ SENTINEL AI — CONTROL MATRIX
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                RTSP LIVE • DEMO FEED
              </span>
              <button
                onClick={() => onNavigate('sentinel-ai')}
                style={{
                  fontSize: '0.72rem',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600
                }}
              >
                Expand Ops
              </button>
            </div>
          </div>

          {/* Simulated Camera Video Stream Frame */}
          <div 
            style={{
              position: 'relative',
              height: '240px',
              borderRadius: 'var(--radius-md)',
              background: '#040711',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}
          >
            {/* Grid background representing facility camera view */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(0, 242, 254, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Radar Sweep Effect */}
            <div className="radar-sweep" style={{ position: 'absolute', inset: 0 }} />

            {/* Simulated Facility Architecture SVG */}
            <svg 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}
              viewBox="0 0 400 240"
            >
              <polygon points="0,200 120,120 280,120 400,200" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="200" y1="120" x2="200" y2="40" stroke="#00f2fe" strokeWidth="1" />
              <rect x="150" y="40" width="100" height="80" fill="none" stroke="#38bdf8" strokeWidth="1" />
            </svg>

            {/* AI Bounding Box Overlay 1: Person Detection */}
            <div 
              style={{
                position: 'absolute',
                top: '35%',
                left: '26%',
                width: '75px',
                height: '110px',
                border: activeAlert ? '2px solid #ef4444' : '2px solid #00f2fe',
                borderRadius: '4px',
                boxShadow: activeAlert ? '0 0 15px rgba(239, 68, 68, 0.6)' : '0 0 10px rgba(0, 242, 254, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '4px',
                transition: 'all 0.3s ease'
              }}
            >
              <span 
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  background: activeAlert ? '#ef4444' : '#00f2fe',
                  color: '#050811',
                  padding: '1px 4px',
                  borderRadius: '2px',
                  width: 'fit-content'
                }}
              >
                {activeAlert ? 'INTRUSION 98%' : `Person ${detectionConfidence}%`}
              </span>
              <span style={{ fontSize: '0.55rem', color: '#fff', textAlign: 'right', fontFamily: 'var(--font-mono)' }}>
                [384, 192]
              </span>
            </div>

            {/* AI Bounding Box Overlay 2: Vehicle */}
            <div 
              style={{
                position: 'absolute',
                top: '48%',
                right: '18%',
                width: '105px',
                height: '65px',
                border: '1.5px solid #10b981',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '4px'
              }}
            >
              <span 
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  background: '#10b981',
                  color: '#050811',
                  padding: '1px 4px',
                  borderRadius: '2px',
                  width: 'fit-content'
                }}
              >
                Logistics Cart 97.4%
              </span>
              <span style={{ fontSize: '0.55rem', color: '#10b981', textAlign: 'right', fontFamily: 'var(--font-mono)' }}>
                Zone 4 Clear
              </span>
            </div>

            {/* Top right camera status telemetry */}
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0, 0, 0, 0.7)',
                padding: '4px 8px',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Eye size={12} />
              <span>YOLOv10 INFERENCE: 18ms</span>
            </div>

            {/* Bottom left camera ID */}
            <div 
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              CAM-02 NORTH CORRIDOR [SIMULATED]
            </div>
          </div>

          {/* Sensor Matrix & Live Telemetry metrics */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 90px), 1fr))',
              gap: '10px',
              marginBottom: '16px'
            }}
          >
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Event Ingest</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {pulseCount} / hr
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Online Sensors</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                8 / 8 Active
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Threat Level</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: activeAlert ? '#ef4444' : '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                {activeAlert ? 'ELEVATED' : 'NOMINAL'}
              </div>
            </div>
          </div>

          {/* Interactive Simulation Trigger in the Hero */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {activeAlert ? 'Critical intrusion alert triggered!' : 'Test real-time event pipeline:'}
            </span>

            <button
              onClick={triggerHeroSimEvent}
              className="btn-outline btn-sm"
              style={{
                fontSize: '0.78rem',
                borderColor: activeAlert ? '#ef4444' : 'var(--accent-cyan)',
                color: activeAlert ? '#f87171' : 'var(--accent-cyan)'
              }}
            >
              <Play size={12} />
              <span>Simulate Intruder Incident</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
