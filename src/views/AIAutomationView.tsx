import React from 'react';
import type { PageId } from '../types';
import { InteractiveDemos } from '../components/InteractiveDemos';
import { 
  GitFork, 
  Workflow, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  BarChart, 
  UserCheck, 
  Lock,
  Layers
} from 'lucide-react';

interface AIAutomationViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (domain: string) => void;
}

export const AIAutomationView: React.FC<AIAutomationViewProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Workflow size={14} />
          <span>GOVERNED AUTONOMOUS PROCESS AUTOMATION</span>
        </div>
        <h1 className="section-title">
          Autonomous AI Agents & <br />
          <span className="text-gradient">Business Process Automation</span>
        </h1>
        <p className="section-description">
          Automate high-volume back-office workflows, invoice reconciliation, customer routing, and multi-system updates with mandatory human-in-the-loop governance for all sensitive decisions.
        </p>
      </div>

      {/* Embedded Workflow Simulator */}
      <div style={{ marginBottom: '64px' }}>
        <InteractiveDemos initialTab="workflow" />
      </div>

      {/* The Governance Imperative */}
      <div 
        style={{
          padding: '36px',
          borderRadius: 'var(--radius-xl)',
          background: 'rgba(245, 158, 11, 0.05)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          marginBottom: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 700, fontSize: '0.85rem', marginBottom: '10px' }}>
            <ShieldAlert size={16} />
            <span>MANDATORY ORGANIZATIONAL SAFEGUARDS</span>
          </div>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
            Why Autonomous Speed Requires Human Oversight
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Autonomous agents excel at ingestion, classification, parsing, and draft generation. However, <strong>never allow autonomous agents to execute sensitive financial, employment, or administrative actions without explicit human authorization.</strong>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
          {[
            'Financial Disbursements > Threshold: Blocked until verified by designated manager signature.',
            'Employment & HR Actions: Mandatory human interviewer review for all hiring decisions.',
            'Mass Customer Communications: High-volume broadcasts require marketing team preview sign-off.',
            'Immutable Audit Trail: Cryptographic hash of every agent step, reasoning trace, and human approval.'
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* High-Value Automation Blueprints */}
      <div style={{ marginBottom: '56px' }}>
        <h2 style={{ fontSize: '1.7rem', textAlign: 'center', marginBottom: '32px' }}>
          Enterprise Automation Blueprints We Deliver
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '14px' }}><Layers size={28} /></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Accounts Payable & Invoicing</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Extract line items from emailed PDF invoices, verify against active purchase orders, flag deviations, and stage verified payments in your ERP.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ color: 'var(--accent-violet)', marginBottom: '14px' }}><Clock size={28} /></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Customer Onboarding & KYC</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Parse government IDs, extract registration forms, verify sanctions registries, and assemble complete onboarding dossiers for compliance sign-off in minutes.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ color: '#10b981', marginBottom: '14px' }}><BarChart size={28} /></div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Automated Executive Reporting</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Query CRM, SQL databases, and Google Analytics to synthesize weekly slide decks and PDF briefs highlighting statistical outliers and trend causes.
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
          <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Want to Automate Your Manual Office Workflows?</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.92rem' }}>
            Schedule an automation discovery workshop to map your high-friction manual processes.
          </p>
        </div>

        <button 
          onClick={() => onRequestQuote('AI Agents & Business Process Automation')}
          className="btn-primary"
        >
          <span>Discuss AI Automation</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
