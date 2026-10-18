import React from 'react';
import type { ProjectItem } from '../types';
import { X, Check, ArrowRight, Play, ExternalLink, ShieldAlert, Cpu, Wrench, BarChart2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onLaunchDemo?: (demoType: string) => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onLaunchDemo,
  onRequestSimilar
}) => {
  if (!project) return null;

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Live Demo': return 'status-live';
      case 'Prototype': return 'status-prototype';
      case 'In Development': return 'status-in-dev';
      default: return 'status-concept';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px' }}
      >
        {/* Header bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className={`status-pill ${getStatusClass(project.status)}`}>
                <span className="status-dot"></span>
                {project.status}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {project.category}
              </span>
            </div>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
              {project.title}
            </h2>
          </div>

          <button 
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Short Summary */}
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.6 }}>
          {project.shortDescription}
        </p>

        {/* Metrics Row (if available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}
          >
            {project.metrics.map((m, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 102, 255, 0.08)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem vs Solution Split */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            marginBottom: '28px'
          }}
        >
          <div 
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontWeight: 700, fontSize: '0.9rem', marginBottom: '8px' }}>
              <ShieldAlert size={16} />
              <span>The Business Problem</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.businessProblem}
            </p>
          </div>

          <div 
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(16, 185, 129, 0.06)',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, fontSize: '0.9rem', marginBottom: '8px' }}>
              <Cpu size={16} />
              <span>Architected MZ.AI Solution</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.proposedSolution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Wrench size={16} color="var(--accent-cyan)" />
            <span>Key Functional Features & Deliverables</span>
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '10px' }}>
            {project.keyFeatures.map((feat, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <Check size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
            Technologies & Frameworks
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.techStack.map((tech, idx) => (
              <span 
                key={idx}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: 'var(--text-primary)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart2 size={16} color="var(--accent-emerald)" />
            <span>Quantifiable Business Value & ROI</span>
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.businessBenefits.map((b, idx) => (
              <li 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-medium)'
          }}
        >
          {project.demoAvailable && project.demoType && onLaunchDemo ? (
            <button
              onClick={() => {
                onClose();
                onLaunchDemo(project.demoType!);
              }}
              className="btn-outline"
              style={{ padding: '12px 20px', borderColor: 'var(--accent-cyan)' }}
            >
              <Play size={16} />
              <span>Launch Interactive Demo ({project.demoType.toUpperCase()})</span>
            </button>
          ) : (
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Implementation Status: <strong>{project.status}</strong>
            </div>
          )}

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="btn-primary"
            >
              <span>Request a Similar Solution</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
