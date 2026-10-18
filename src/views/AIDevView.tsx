import React from 'react';
import type { PageId } from '../types';
import { InteractiveDemos } from '../components/InteractiveDemos';
import { 
  Cpu, 
  Sparkles, 
  BrainCircuit, 
  FileSearch, 
  Eye, 
  Mic, 
  Database, 
  Layers, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface AIDevViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (domain: string) => void;
}

export const AIDevView: React.FC<AIDevViewProps> = ({ onNavigate, onRequestQuote }) => {
  const capabilities = [
    {
      icon: <Sparkles size={24} color="var(--accent-cyan)" />,
      title: 'Generative AI & LLM Integration',
      desc: 'Seamlessly embed Claude, GPT-4, Llama 3, and Mistral into existing enterprise ERP, CRM, and customer-facing web platforms.'
    },
    {
      icon: <FileSearch size={24} color="var(--accent-violet)" />,
      title: 'Retrieval-Augmented Generation (RAG)',
      desc: 'Connect models to proprietary internal document vaults using hybrid dense-sparse vector indexing with guaranteed zero-hallucination citations.'
    },
    {
      icon: <BrainCircuit size={24} color="var(--accent-blue)" />,
      title: 'AI Agents & Tool Calling',
      desc: 'Develop stateful multi-step agents (LangGraph / CrewAI) capable of querying internal databases, generating summaries, and proposing safe workflows.'
    },
    {
      icon: <Eye size={24} color="#10b981" />,
      title: 'Computer Vision & Edge Inference',
      desc: 'Deploy low-latency object detection, line-crossing alerts, and anomaly recognition using YOLOv10 and TensorRT running directly on edge hardware.'
    },
    {
      icon: <Mic size={24} color="#f59e0b" />,
      title: 'Speech Recognition & Voice AI',
      desc: 'High-accuracy automated transcription, real-time telephony agent voice bots, and multi-language acoustic sentiment analysis.'
    },
    {
      icon: <Database size={24} color="#ec4899" />,
      title: 'Intelligent Document Processing (IDP)',
      desc: 'Layout-aware spatial OCR parsing contracts, medical claims, bills of lading, and complex tables directly into verified JSON records.'
    },
    {
      icon: <Lock size={24} color="var(--accent-cyan)" />,
      title: 'Private & Air-Gapped AI Deployments',
      desc: 'Deploy open-weights models inside strictly private client VPCs or air-gapped on-premises servers, preventing sensitive IP from leaking to cloud APIs.'
    },
    {
      icon: <ShieldCheck size={24} color="#34d399" />,
      title: 'Model Evaluation & Observability',
      desc: 'Continuous tracking of inference latency, semantic drift, token consumption costs, and automated prompt-injection penetration testing.'
    }
  ];

  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Cpu size={14} />
          <span>APPLIED ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</span>
        </div>
        <h1 className="section-title">
          Enterprise AI Engineering & <br />
          <span className="text-gradient">Intelligent Model Pipelines</span>
        </h1>
        <p className="section-description">
          From zero-hallucination RAG knowledge search and multi-step agent tool calling to real-time edge computer vision, we turn AI research into reliable enterprise value.
        </p>
      </div>

      {/* Interactive Demonstration Section */}
      <div style={{ marginBottom: '64px' }}>
        <InteractiveDemos initialTab="doc-qa" />
      </div>

      {/* Core AI Capabilities Grid */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Comprehensive AI Solution Capabilities
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Tailored architectures ensuring speed, cryptographic privacy, and deterministic accuracy.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {capabilities.map((cap, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ marginBottom: '16px' }}>{cap.icon}</div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                {cap.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise AI Privacy Guarantee */}
      <div 
        style={{
          padding: '36px',
          borderRadius: 'var(--radius-xl)',
          background: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid var(--border-medium)',
          marginBottom: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '10px' }}>
            <Lock size={16} />
            <span>ENTERPRISE PRIVACY & ZERO DATA LEAKAGE</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>
            Your Proprietary Data Never Trains Public Foundation Models
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Enterprise clients cannot compromise trade secrets, client records, or source code. MZ.AI enforces strict zero-data-retention agreements with cloud providers and provides turnkey on-premises air-gapped clusters running fine-tuned open-source architectures.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
          {[
            'Zero frontend API key exposure; all traffic routed via authenticated backend proxies',
            'Input validation and prompt-injection sanitization filters on all user inputs',
            'Cryptographic role-based vector retrieval gating per user authorization tier',
            'Immutable audit logging of all LLM queries, token usages, and generation hashes'
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
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
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(0, 242, 254, 0.1))',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Ready to Deploy AI Into Your Enterprise Workflows?</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.92rem' }}>
            Our AI engineering leads can evaluate your datasets and design a prototype within weeks.
          </p>
        </div>

        <button 
          onClick={() => onRequestQuote('AI, Machine Learning & Generative AI')}
          className="btn-primary"
        >
          <span>Discuss AI Integration</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
