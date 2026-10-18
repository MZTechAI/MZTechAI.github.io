import React, { useState } from 'react';
import { sampleDocs, type SampleDoc } from '../data/sampleDocsData';
import { 
  FileText, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Eye, 
  GitFork, 
  ShieldCheck, 
  Sliders, 
  Terminal, 
  Play, 
  RotateCcw,
  AlertTriangle,
  Lock,
  Sparkles
} from 'lucide-react';
import { soundManager } from '../utils/sound';

interface InteractiveDemosProps {
  initialTab?: 'doc-qa' | 'workflow' | 'vision';
}

export const InteractiveDemos: React.FC<InteractiveDemosProps> = ({ initialTab = 'doc-qa' }) => {
  const [activeTab, setActiveTab] = useState<'doc-qa' | 'workflow' | 'vision'>(initialTab);

  // --- Document Q&A Demo State ---
  const [selectedDoc, setSelectedDoc] = useState<SampleDoc>(sampleDocs[0]);
  const [selectedQuestion, setSelectedQuestion] = useState(selectedDoc.sampleQuestions[0]);
  const [customQuestion, setCustomQuestion] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState<{ answer: string; snippet: string; page: number; confidence: number } | null>({
    answer: selectedDoc.sampleQuestions[0].answer,
    snippet: selectedDoc.sampleQuestions[0].sourceSnippet,
    page: selectedDoc.sampleQuestions[0].page,
    confidence: selectedDoc.sampleQuestions[0].confidence
  });

  const handleSelectQuestion = (qObj: typeof selectedDoc.sampleQuestions[0]) => {
    setSelectedQuestion(qObj);
    setIsAnswering(true);
    soundManager.playClick();
    setTimeout(() => {
      setActiveAnswer({
        answer: qObj.answer,
        snippet: qObj.sourceSnippet,
        page: qObj.page,
        confidence: qObj.confidence
      });
      setIsAnswering(false);
    }, 450);
  };

  const handleCustomQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    setIsAnswering(true);
    soundManager.playClick();
    setTimeout(() => {
      setActiveAnswer({
        answer: `Semantic synthesis based on ${selectedDoc.name}: Found matching clauses in Section 4 and Schedule B confirming standard indemnification obligations and SLA compliance guarantees.`,
        snippet: `Section 4.1 / Schedule B: "...Party shall adhere to standard technical specifications and enterprise grade availability standards..."`,
        page: 4,
        confidence: 96.8
      });
      setIsAnswering(false);
    }, 600);
  };

  // --- Workflow Simulator State ---
  const [workflowStep, setWorkflowStep] = useState<number>(0);
  const [isExecutingWorkflow, setIsExecutingWorkflow] = useState(false);
  const [humanApproved, setHumanApproved] = useState(false);
  const [workflowLogs, setWorkflowLogs] = useState<string[]>([]);

  const workflowSteps = [
    { title: 'Trigger Ingest', desc: 'Received vendor invoice via encrypted webhook ($34,920.00)' },
    { title: 'OCR & Entity Extraction', desc: 'PaddleOCR parsed line items, vendor tax ID, and IBAN wire coordinates' },
    { title: 'Policy Verification', desc: 'Cross-checked against approved PO-8819 and verified remaining Q4 budget ($85,000)' },
    { title: 'Human Approval Barrier', desc: 'Transaction > $25,000 requires Chief Operations Officer cryptographic authorization' },
    { title: 'Safe ERP Dispatch', desc: 'Executed automated disbursement ticket and updated SAP / NetSuite ledger' }
  ];

  const runNextWorkflowStep = () => {
    if (workflowStep === 2 && !humanApproved) {
      soundManager.playAlarmBeep('warning');
      return;
    }

    if (workflowStep < workflowSteps.length - 1) {
      setIsExecutingWorkflow(true);
      soundManager.playClick();
      setTimeout(() => {
        const nextStep = workflowStep + 1;
        setWorkflowStep(nextStep);
        setWorkflowLogs(prev => [
          ...prev, 
          `[${new Date().toLocaleTimeString()}] STEP ${nextStep + 1} COMPLETED: ${workflowSteps[nextStep].title} — ${workflowSteps[nextStep].desc}`
        ]);
        setIsExecutingWorkflow(false);
      }, 500);
    }
  };

  const resetWorkflow = () => {
    setWorkflowStep(0);
    setHumanApproved(false);
    setWorkflowLogs([`[${new Date().toLocaleTimeString()}] Workflow initialized in test sandbox.`]);
    soundManager.playClick();
  };

  // --- Computer Vision Simulator State ---
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(85);
  const [selectedVisionScene, setSelectedVisionScene] = useState<'perimeter' | 'dock' | 'hazards'>('perimeter');
  const [activeClasses, setActiveClasses] = useState({
    person: true,
    vehicle: true,
    intrusionZone: true,
    thermal: true
  });

  return (
    <div className="glass-panel interactive-demos-container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
      {/* Tab Switcher */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          borderBottom: '1px solid var(--border-medium)',
          paddingBottom: '20px',
          marginBottom: '28px'
        }}
      >
        <div>
          <div className="section-badge" style={{ marginBottom: '8px' }}>
            <Sparkles size={14} />
            <span>Interactive Technology Demonstrations</span>
          </div>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>
            Experience MZ.AI Core Intelligence In Real Time
          </h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', background: 'rgba(15, 23, 42, 0.7)', padding: '6px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <button
            onClick={() => { setActiveTab('doc-qa'); soundManager.playClick(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: activeTab === 'doc-qa' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              background: activeTab === 'doc-qa' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            <FileText size={16} />
            <span>1. Document Intelligence & Q&A</span>
          </button>

          <button
            onClick={() => { setActiveTab('workflow'); soundManager.playClick(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: activeTab === 'workflow' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              background: activeTab === 'workflow' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            <GitFork size={16} />
            <span>2. Governed Agent Workflow</span>
          </button>

          <button
            onClick={() => { setActiveTab('vision'); soundManager.playClick(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: activeTab === 'vision' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              background: activeTab === 'vision' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            <Eye size={16} />
            <span>3. Computer Vision & Analytics</span>
          </button>
        </div>
      </div>

      {/* 1. DOCUMENT INTELLIGENCE DEMO */}
      {activeTab === 'doc-qa' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
          {/* Document Preview & Extracted Schema */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Select Active Ingested Document:
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} /> OCR Verified
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {sampleDocs.map(doc => (
                <button
                  key={doc.id}
                  onClick={() => {
                    setSelectedDoc(doc);
                    setSelectedQuestion(doc.sampleQuestions[0]);
                    setActiveAnswer({
                      answer: doc.sampleQuestions[0].answer,
                      snippet: doc.sampleQuestions[0].sourceSnippet,
                      page: doc.sampleQuestions[0].page,
                      confidence: doc.sampleQuestions[0].confidence
                    });
                  }}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'left',
                    background: selectedDoc.id === doc.id ? 'rgba(0, 102, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    border: `1px solid ${selectedDoc.id === doc.id ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    color: selectedDoc.id === doc.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '2px', wordBreak: 'break-all' }}>
                    {doc.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {doc.type} • {doc.pages} Pages
                  </div>
                </button>
              ))}
            </div>

            {/* Extracted Structured Schema */}
            <div 
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                Extracted High-Confidence Entities:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '10px', fontSize: '0.82rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Parties:</span>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedDoc.extractedMetadata.parties}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Effective Date:</span>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedDoc.extractedMetadata.effectiveDate}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Commercial Value:</span>
                  <div style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>{selectedDoc.extractedMetadata.annualValue}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Governing Law:</span>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedDoc.extractedMetadata.governingLaw}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Termination SLA:</span>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedDoc.extractedMetadata.terminationNotice}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Liability Ceiling:</span>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedDoc.extractedMetadata.liabilityCap}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Q&A Query and Citation Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Ask Natural Language Question (Zero Hallucination Retrieval):
            </span>

            {/* Quick sample question chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedDoc.sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectQuestion(q)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'left',
                    background: selectedQuestion.q === q.q ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${selectedQuestion.q === q.q ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    color: selectedQuestion.q === q.q ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.18s'
                  }}
                >
                  {q.q}
                </button>
              ))}
            </div>

            {/* Custom query input */}
            <form onSubmit={handleCustomQuery} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder="Type any contract or invoice query..."
                className="form-input"
                style={{ padding: '10px 14px', fontSize: '0.88rem' }}
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ padding: '10px 16px', flexShrink: 0 }}>
                <Search size={16} />
              </button>
            </form>

            {/* Answer & Source Citation Display */}
            {activeAnswer && (
              <div 
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 242, 254, 0.05)',
                  border: '1px solid rgba(0, 242, 254, 0.25)',
                  opacity: isAnswering ? 0.4 : 1,
                  transition: 'opacity 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                    Verified Answer
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>
                    Confidence: {activeAnswer.confidence}%
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '14px' }}>
                  {activeAnswer.answer}
                </p>

                {/* Clickable Citation Highlight */}
                <div 
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    borderLeft: '3px solid var(--accent-cyan)',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', marginBottom: '4px', textTransform: 'uppercase' }}>
                    Verbatim Source Citation (Page {activeAnswer.page}):
                  </div>
                  {activeAnswer.snippet}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. GOVERNED AGENT WORKFLOW SIMULATOR */}
      {activeTab === 'workflow' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0, maxWidth: '700px' }}>
              Autonomous multi-step business assistant running with <strong>Human-in-the-Loop</strong> authorization safeguards. Financial dispatches above $25,000 are blocked until verified by a manager.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={resetWorkflow} className="btn-secondary btn-sm">
                <RotateCcw size={14} />
                <span>Reset Pipeline</span>
              </button>
              <button 
                onClick={runNextWorkflowStep} 
                disabled={workflowStep >= workflowSteps.length - 1 || isExecutingWorkflow}
                className="btn-primary btn-sm"
              >
                <Play size={14} />
                <span>Execute Next Step</span>
              </button>
            </div>
          </div>

          {/* Workflow Steps Pipeline */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}
          >
            {workflowSteps.map((step, idx) => {
              const isDone = idx < workflowStep;
              const isCurrent = idx === workflowStep;
              const isGate = idx === 3;

              return (
                <div
                  key={idx}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: isCurrent 
                      ? 'rgba(0, 242, 254, 0.12)' 
                      : isDone 
                        ? 'rgba(16, 185, 129, 0.08)' 
                        : 'rgba(15, 23, 42, 0.5)',
                    border: `1px solid ${
                      isCurrent 
                        ? 'var(--accent-cyan)' 
                        : isDone 
                          ? 'rgba(16, 185, 129, 0.3)' 
                          : 'var(--border-subtle)'
                    }`,
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span 
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: isDone ? '#10b981' : isCurrent ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)',
                        color: '#050811',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {isDone ? '✓' : idx + 1}
                    </span>
                    {isGate && (
                      <span style={{ fontSize: '0.65rem', padding: '2px 6px', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', borderRadius: '4px', fontWeight: 700 }}>
                        APPROVAL GATE
                      </span>
                    )}
                  </div>

                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Human Approval Checkpoint Barrier UI */}
          {workflowStep === 2 && !humanApproved && (
            <div 
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <AlertTriangle size={32} color="#f59e0b" />
                <div>
                  <h4 style={{ color: '#fbbf24', fontSize: '1.05rem', margin: 0 }}>Human Review Checkpoint Required</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
                    Autonomous agent planned disbursement of <strong>$34,920.00</strong> to Sensirion Tech AG. Mandatory human signature required.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setHumanApproved(true);
                  soundManager.playAlarmBeep('info');
                  setWorkflowLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] HUMAN APPROVAL GRANTED by Authorized Officer. Token cryptographic key signed.`]);
                }}
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
              >
                <Lock size={15} />
                <span>Sign & Authorize Disbursement</span>
              </button>
            </div>
          )}

          {/* Audit Logs Terminal */}
          <div 
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              background: '#040711',
              border: '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: '#38bdf8',
              maxHeight: '160px',
              overflowY: 'auto'
            }}
          >
            <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>// IMMUTABLE EXECUTION AUDIT TRACE:</div>
            {workflowLogs.map((log, idx) => (
              <div key={idx} style={{ marginBottom: '4px' }}>{log}</div>
            ))}
          </div>
        </div>
      )}

      {/* 3. COMPUTER VISION & VIDEO ANALYTICS DEMO */}
      {activeTab === 'vision' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
          {/* Simulated Video Canvas with Bounding Boxes */}
          <div>
            <div 
              style={{
                position: 'relative',
                height: '320px',
                borderRadius: 'var(--radius-md)',
                background: '#050914',
                border: '1px solid var(--border-medium)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="scanlines"
            >
              {/* Radar Sweep */}
              <div className="radar-sweep" style={{ position: 'absolute', inset: 0 }} />

              {/* Background Geometry */}
              <svg 
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}
                viewBox="0 0 500 320"
              >
                <rect x="50" y="80" width="180" height="180" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 4" />
                <line x1="280" y1="0" x2="280" y2="320" stroke="#f43f5e" strokeWidth="2" strokeDasharray="8 6" />
                <text x="290" y="40" fill="#f43f5e" fontSize="12" fontFamily="monospace">RESTRICTED TRIPWIRE LINE</text>
              </svg>

              {/* Person Bounding Box */}
              {activeClasses.person && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '25%',
                    left: '20%',
                    width: '80px',
                    height: '140px',
                    border: '2px solid #00f2fe',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '4px',
                    boxShadow: '0 0 12px rgba(0, 242, 254, 0.4)'
                  }}
                >
                  <span style={{ fontSize: '0.65rem', background: '#00f2fe', color: '#050811', fontWeight: 800, padding: '2px 4px', width: 'fit-content', borderRadius: '2px' }}>
                    PERSON {confidenceThreshold >= 80 ? '94.2%' : '82.0%'}
                  </span>
                  <span style={{ fontSize: '0.55rem', color: '#fff', textAlign: 'right', fontFamily: 'monospace' }}>
                    TRACK #104
                  </span>
                </div>
              )}

              {/* Vehicle Bounding Box */}
              {activeClasses.vehicle && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '15%',
                    width: '140px',
                    height: '85px',
                    border: '2px solid #10b981',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '4px',
                    boxShadow: '0 0 12px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <span style={{ fontSize: '0.65rem', background: '#10b981', color: '#050811', fontWeight: 800, padding: '2px 4px', width: 'fit-content', borderRadius: '2px' }}>
                    COMMERCIAL VAN 96.5%
                  </span>
                  <span style={{ fontSize: '0.55rem', color: '#10b981', textAlign: 'right', fontFamily: 'monospace' }}>
                    SPEED: 12 km/h
                  </span>
                </div>
              )}

              {/* Intrusion Line-Crossing Alert Indicator */}
              {activeClasses.intrusionZone && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '52%',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    background: 'rgba(239, 68, 68, 0.25)',
                    border: '1px solid #ef4444',
                    color: '#f87171',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)'
                  }}
                >
                  LINE CROSSING EVENT DETECTED
                </div>
              )}

              {/* Corner OSD details */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'monospace' }}>
                LIVE FEED • NORTH GATE CORRIDOR [SIMULATED]
              </div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '0.7rem', color: 'var(--accent-cyan)', fontFamily: 'monospace' }}>
                YOLOv10 INFERENCE: 16.4ms • 60 FPS
              </div>
            </div>
          </div>

          {/* Controls & Threshold Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Inference Confidence Threshold:
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                  {confidenceThreshold}%
                </span>
              </div>
              <input 
                type="range" 
                min={50} 
                max={95} 
                value={confidenceThreshold} 
                onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>50% (High Recall)</span>
                <span>85% (Balanced)</span>
                <span>95% (Zero False Alarms)</span>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '12px' }}>
                Toggle Detection Classes:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '10px' }}>
                {[
                  { key: 'person', label: 'Person Detection' },
                  { key: 'vehicle', label: 'Vehicle / Truck Class' },
                  { key: 'intrusionZone', label: 'Restricted Tripwire' },
                  { key: 'thermal', label: 'Thermal Anomaly Sensor' }
                ].map(item => (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActiveClasses(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof activeClasses] }));
                      soundManager.playClick();
                    }}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: activeClasses[item.key as keyof typeof activeClasses] ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${activeClasses[item.key as keyof typeof activeClasses] ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                      color: activeClasses[item.key as keyof typeof activeClasses] ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textAlign: 'left'
                    }}
                  >
                    {item.label}: {activeClasses[item.key as keyof typeof activeClasses] ? 'ACTIVE' : 'MUTED'}
                  </button>
                ))}
              </div>
            </div>

            <div 
              style={{
                padding: '14px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5
              }}
            >
              <strong>Privacy Standard:</strong> MZ.AI computer vision analytics operate purely on geometric bounding boxes, trajectory velocities, and thermal thresholds. No facial biometric recognition is utilized.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
