import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import type { ProjectCategory, ProjectItem, ProjectStatus } from '../types';
import { ProjectModal } from '../components/ProjectModal';
import { 
  FolderGit2, 
  Search, 
  Play, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Filter, 
  SlidersHorizontal,
  Layers,
  Cpu,
  Shield
} from 'lucide-react';
import { soundManager } from '../utils/sound';

interface ProjectsCatalogViewProps {
  onLaunchDemo: (demoType: string) => void;
  onRequestQuote: (projectTitle: string) => void;
}

export const ProjectsCatalogView: React.FC<ProjectsCatalogViewProps> = ({
  onLaunchDemo,
  onRequestQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'AI & ML',
    'Automation',
    'Security & Surveillance',
    'Enterprise Software',
    'Cloud & IoT'
  ];

  const statuses = ['All', 'Live Demo', 'Prototype', 'In Development', 'Concept Project'];

  const filteredProjects = projectsData.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchStatus = selectedStatus === 'All' || p.status === selectedStatus;
    const matchSearch = searchQuery.trim() === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchStatus && matchSearch;
  });

  const getStatusClass = (status: ProjectStatus) => {
    switch (status) {
      case 'Live Demo': return 'status-live';
      case 'Prototype': return 'status-prototype';
      case 'In Development': return 'status-in-dev';
      default: return 'status-concept';
    }
  };

  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <FolderGit2 size={14} />
          <span>PRODUCTION SYSTEMS & PROTOTYPES</span>
        </div>
        <h1 className="section-title">
          Engineering Portfolio & <span className="text-gradient">Case Studies</span>
        </h1>
        <p className="section-description">
          Practical, in-demand enterprise solutions across software engineering, generative AI, autonomous agent workflows, and intelligent security monitoring.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '36px',
          padding: '16px 20px',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid var(--border-medium)',
          backdropFilter: 'blur(12px)'
        }}
      >
        {/* Search input */}
        <div style={{ position: 'relative', flex: '1', minWidth: '240px' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '38px', height: '42px', fontSize: '0.88rem' }}
            placeholder="Search projects, technologies (e.g. YOLO, RAG, FastAPI)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                soundManager.playClick();
              }}
              style={{
                padding: '7px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)',
                background: selectedCategory === cat ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))' : 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${selectedCategory === cat ? 'transparent' : 'var(--border-subtle)'}`,
                transition: 'all 0.18s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Filter Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Status:</span>
          <select
            className="form-select"
            style={{ width: 'auto', padding: '6px 12px', fontSize: '0.82rem', height: '38px' }}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statuses.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '24px',
          marginBottom: '56px'
        }}
      >
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="glass-panel"
            onClick={() => setActiveProjectModal(proj)}
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              borderTop: proj.accentColor ? `3px solid ${proj.accentColor}` : undefined
            }}
          >
            <div>
              {/* Top metadata row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className={`status-pill ${getStatusClass(proj.status)}`}>
                  <span className="status-dot" />
                  {proj.status}
                </span>

                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {proj.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.28rem', lineHeight: 1.35, marginBottom: '10px', color: 'var(--text-primary)' }}>
                {proj.title}
              </h3>

              {/* Short Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                {proj.shortDescription}
              </p>

              {/* Metrics Pill (if available) */}
              {proj.metrics && proj.metrics.length > 0 && (
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 242, 254, 0.05)',
                    border: '1px solid rgba(0, 242, 254, 0.15)',
                    marginBottom: '18px'
                  }}
                >
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                    {proj.metrics[0].value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {proj.metrics[0].label}
                  </div>
                </div>
              )}

              {/* Key Features preview */}
              <div style={{ marginBottom: '20px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {proj.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <Check size={14} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ lineHeight: 1.4 }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {proj.techStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {proj.techStack.length > 4 && (
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', padding: '3px 6px' }}>
                    +{proj.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {proj.demoAvailable && proj.demoType ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onLaunchDemo(proj.demoType!);
                  }}
                  className="btn-outline btn-sm"
                  style={{ borderColor: 'var(--accent-cyan)' }}
                >
                  <Play size={13} />
                  <span>Launch Demo</span>
                </button>
              ) : (
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  View Full Architecture
                </span>
              )}

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)'
                }}
              >
                <span>Case Study</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onLaunchDemo={onLaunchDemo}
        onRequestSimilar={onRequestQuote}
      />
    </div>
  );
};
