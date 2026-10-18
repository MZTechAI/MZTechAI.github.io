import React, { useState } from 'react';
import { techStackData } from '../data/techStackData';
import type { PageId } from '../types';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Database, 
  Server, 
  Code2, 
  Radio, 
  Eye, 
  Lock, 
  GitFork, 
  FileText, 
  Box, 
  Activity, 
  SlidersHorizontal 
} from 'lucide-react';

interface TechStackViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (domain: string) => void;
}

export const TechStackView: React.FC<TechStackViewProps> = ({ onNavigate, onRequestQuote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maturityFilter, setMaturityFilter] = useState<'all' | 'Production Implemented' | 'Client Deployment Target' | 'Integration Bridge'>('all');

  // Helper icon renderer
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 size={20} color="var(--accent-cyan)" />;
      case 'Zap': return <Zap size={20} color="#fbbf24" />;
      case 'Cpu': return <Cpu size={20} color="var(--accent-violet)" />;
      case 'Eye': return <Eye size={20} color="var(--accent-cyan)" />;
      case 'Database': return <Database size={20} color="var(--accent-blue)" />;
      case 'GitFork': return <GitFork size={20} color="#a78bfa" />;
      case 'FileText': return <FileText size={20} color="#38bdf8" />;
      case 'Shield': return <ShieldCheck size={20} color="var(--accent-emerald)" />;
      case 'Radio': return <Radio size={20} color="#34d399" />;
      case 'Lock': return <Lock size={20} color="#f43f5e" />;
      case 'Server': return <Server size={20} color="#38bdf8" />;
      case 'Box': return <Box size={20} color="#60a5fa" />;
      case 'Activity': return <Activity size={20} color="#fb923c" />;
      default: return <Layers size={20} color="var(--accent-cyan)" />;
    }
  };

  const getMaturityBadge = (maturity: string) => {
    switch (maturity) {
      case 'Production Implemented':
        return (
          <span style={{
            fontSize: '0.72rem',
            padding: '3px 8px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            color: '#34d399',
            fontWeight: 600
          }}>
            Production Live
          </span>
        );
      case 'Client Deployment Target':
        return (
          <span style={{
            fontSize: '0.72rem',
            padding: '3px 8px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            color: '#38bdf8',
            fontWeight: 600
          }}>
            Deployment Target
          </span>
        );
      case 'Integration Bridge':
        return (
          <span style={{
            fontSize: '0.72rem',
            padding: '3px 8px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            color: '#c084fc',
            fontWeight: 600
          }}>
            Protocol Bridge
          </span>
        );
      default:
        return null;
    }
  };

  // Filter categories and items
  const filteredCategories = techStackData.map(category => {
    const matchingItems = category.items.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.details.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMaturity = maturityFilter === 'all' || item.maturity === maturityFilter;

      return matchesSearch && matchesMaturity;
    });

    return {
      ...category,
      items: matchingItems
    };
  }).filter(category => category.items.length > 0);

  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Cpu size={14} />
          <span>PRODUCTION-PROVEN ARCHITECTURAL STACK</span>
        </div>
        <h1 className="section-title">
          Modern Engineering & <br />
          <span className="text-gradient">Battle-Tested Technologies</span>
        </h1>
        <p className="section-description">
          We combine cutting-edge open-source machine learning frameworks with zero-compromise enterprise engineering. Every tool is selected for horizontal scalability, sub-millisecond responsiveness, and cryptographic security.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div 
        className="glass-panel" 
        style={{
          padding: '20px 24px',
          marginBottom: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        {/* Search input */}
        <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
          <Search 
            size={18} 
            style={{ 
              position: 'absolute', 
              left: '14px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: 'var(--text-muted)' 
            }} 
          />
          <input
            type="text"
            placeholder="Search stack (e.g. YOLO, Python, React, Redis, SIA)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px 10px 42px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(5, 8, 17, 0.6)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
              fontSize: '0.92rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Maturity filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <SlidersHorizontal size={14} /> Maturity:
          </span>
          {[
            { id: 'all', label: 'All Items' },
            { id: 'Production Implemented', label: 'Production Live' },
            { id: 'Client Deployment Target', label: 'Deployment Targets' },
            { id: 'Integration Bridge', label: 'Protocol Bridges' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setMaturityFilter(tab.id as any)}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                fontWeight: 600,
                background: maturityFilter === tab.id ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: maturityFilter === tab.id ? '#ffffff' : 'var(--text-secondary)',
                border: `1px solid ${maturityFilter === tab.id ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories & Tech Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '64px' }}>
        {filteredCategories.length === 0 ? (
          <div className="glass-panel" style={{ padding: '60px', textAlign: 'center' }}>
            <Cpu size={48} color="var(--text-muted)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ marginBottom: '8px' }}>No technologies match your search</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Try clearing your search query or reset the maturity filter.</p>
            <button 
              className="btn-outline" 
              onClick={() => { setSearchTerm(''); setMaturityFilter('all'); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {category.title}
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                  {category.description}
                </p>
              </div>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                  gap: '20px'
                }}
              >
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="glass-panel"
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                        <div 
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            background: 'rgba(56, 189, 248, 0.1)',
                            border: '1px solid var(--border-medium)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {renderIcon(item.iconName)}
                        </div>
                        {getMaturityBadge(item.maturity)}
                      </div>

                      <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {item.name}
                      </h3>

                      <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '12px' }}>
                        {item.role}
                      </div>

                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {item.details}
                      </p>
                    </div>

                    <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
                      <button 
                        onClick={() => onRequestQuote(`Tech Stack Architecture: ${item.name}`)}
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontWeight: 500,
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        Request implementation <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Architectural Guarantee Banner */}
      <div 
        className="glass-panel" 
        style={{
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.12) 0%, rgba(0, 242, 254, 0.08) 100%)',
          border: '1px solid var(--border-glow)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        <div>
          <span className="status-pill status-live" style={{ marginBottom: '12px' }}>
            <CheckCircle2 size={12} /> Enterprise Ready
          </span>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            Need a Custom Architectural Blueprint?
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Our principal systems architects work directly with your CTO and security directors to specify on-premises, hybrid-cloud, or air-gapped deployments.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
          <button 
            className="btn-primary"
            onClick={() => onRequestQuote('Custom Architecture Review')}
          >
            <span>Schedule Architecture Review</span>
            <ArrowRight size={16} />
          </button>
          <button 
            className="btn-secondary"
            onClick={() => onNavigate('projects')}
          >
            <span>Explore 14 Live Production Blueprints</span>
          </button>
        </div>
      </div>
    </div>
  );
};
