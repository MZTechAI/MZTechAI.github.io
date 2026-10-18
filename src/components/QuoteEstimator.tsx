import React, { useState } from 'react';
import { storage } from '../utils/storage';
import type { ClientInquiry } from '../types';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  FileText, 
  Sparkles,
  Download
} from 'lucide-react';

interface QuoteEstimatorProps {
  initialProjectType?: string;
  onSuccess?: () => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ 
  initialProjectType = 'Software and Web Application Development',
  onSuccess 
}) => {
  const [projectType, setProjectType] = useState(initialProjectType);
  const [scale, setScale] = useState<'mvp' | 'business' | 'enterprise'>('business');
  const [timeline, setTimeline] = useState<'rush' | 'standard' | 'extended'>('standard');
  const [hasAI, setHasAI] = useState(true);
  const [hasSecurity, setHasSecurity] = useState(false);
  const [hasMobile, setHasMobile] = useState(false);
  const [hasHighCompliance, setHasHighCompliance] = useState(false);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [requirements, setRequirements] = useState('');
  const [ndaRequired, setNdaRequired] = useState(true);

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedRefId, setGeneratedRefId] = useState('');

  // Cost calculation engine
  const calculateEstimate = () => {
    let baseMin = 15000;
    let baseMax = 25000;

    if (scale === 'mvp') {
      baseMin = 9000;
      baseMax = 18000;
    } else if (scale === 'enterprise') {
      baseMin = 45000;
      baseMax = 95000;
    }

    if (hasAI) {
      baseMin += 8000;
      baseMax += 18000;
    }
    if (hasSecurity) {
      baseMin += 12000;
      baseMax += 22000;
    }
    if (hasMobile) {
      baseMin += 6000;
      baseMax += 12000;
    }
    if (hasHighCompliance) {
      baseMin += 7000;
      baseMax += 14000;
    }

    if (timeline === 'rush') {
      baseMin = Math.round(baseMin * 1.25);
      baseMax = Math.round(baseMax * 1.25);
    }

    return { min: baseMin, max: baseMax };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Strict validation
    if (!fullName.trim()) {
      setErrorMessage('Please provide your full contact name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please provide a valid corporate or professional email address.');
      return;
    }
    if (!company.trim()) {
      setErrorMessage('Please specify your company or organization name.');
      return;
    }
    if (requirements.trim().length < 15) {
      setErrorMessage('Please provide at least 15 characters describing your project requirements or goals.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend submission network latency & database validation
    setTimeout(() => {
      const refId = `MZ-EST-${Math.floor(10000 + Math.random() * 90000)}`;
      const inquiry: ClientInquiry = {
        id: refId,
        createdAt: new Date().toISOString(),
        fullName: fullName.trim(),
        email: email.trim(),
        company: company.trim(),
        phone: phone.trim() || undefined,
        projectType,
        budgetRange: `$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()} USD`,
        expectedTimeline: timeline === 'rush' ? 'Under 4 Weeks (Expedited)' : timeline === 'standard' ? '2 - 3 Months' : '4+ Months',
        requirements: requirements.trim(),
        ndaRequired,
        estimatedCostMin: estimate.min,
        estimatedCostMax: estimate.max,
        status: 'New'
      };

      try {
        storage.saveInquiry(inquiry);
        setGeneratedRefId(refId);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        if (onSuccess) onSuccess();
      } catch (err) {
        setIsSubmitting(false);
        setErrorMessage('Failed to record inquiry into database. Please check your connectivity and retry.');
      }
    }, 1100);
  };

  const downloadSummary = () => {
    const textContent = `
=====================================================
MZ.AI TECH SOLUTION PROVIDER — PROJECT ESTIMATE RECEIPT
Ref ID: ${generatedRefId || 'MZ-PREVIEW'}
Date: ${new Date().toLocaleDateString()}
=====================================================

Client: ${fullName}
Company: ${company}
Contact: ${email} ${phone ? `| Phone: ${phone}` : ''}
Solution Domain: ${projectType}

ESTIMATED BUDGETARY RANGE:
$${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()} USD
Timeline: ${timeline === 'rush' ? 'Rush (1 Month)' : timeline === 'standard' ? '2-3 Months' : 'Enterprise Horizon'}

INCLUDED ARCHITECTURE MODULES:
- Core Platform Scale: ${scale.toUpperCase()}
- AI / LLM / RAG Pipeline: ${hasAI ? 'YES (Included)' : 'No'}
- Sentinel Security / IoT Integration: ${hasSecurity ? 'YES (Included)' : 'No'}
- Mobile Responsive / App: ${hasMobile ? 'YES (Included)' : 'No'}
- Enterprise Audit / High Compliance: ${hasHighCompliance ? 'YES (Included)' : 'No'}
- Mutual NDA Requested: ${ndaRequired ? 'YES' : 'No'}

PROJECT REQUIREMENTS:
${requirements}

=====================================================
MZ.AI Tech Solution Provider | solutions@mzai.tech
"Intelligent Technology. Smarter Security. Better Solutions."
=====================================================
    `.trim();

    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${generatedRefId || 'MZ-Estimate'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div 
      className="glass-panel" 
      style={{
        padding: '36px',
        maxWidth: '1060px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="section-badge">
          <Calculator size={14} />
          <span>Interactive Cost Estimator & Quotation</span>
        </div>
        <h2 style={{ fontSize: '1.9rem', marginBottom: '8px' }}>
          Estimate Your Project & Request a Detailed Architecture Proposal
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
          Configure your scope and receive an instant transparent budgetary estimate backed by our senior engineering team.
        </p>
      </div>

      {submitSuccess ? (
        <div 
          style={{
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            textAlign: 'center'
          }}
        >
          <div 
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.2)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Quotation Request Confirmed & Logged
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', maxWidth: '580px', margin: '0 auto 16px auto' }}>
            Thank you, <strong>{fullName}</strong>. Your inquiry reference <strong>#{generatedRefId}</strong> has been routed to our senior software and AI architects.
          </p>

          <div 
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              marginBottom: '24px'
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Preliminary Budget Range</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
              ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()} USD
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
            <button 
              onClick={downloadSummary}
              className="btn-outline"
            >
              <Download size={16} />
              <span>Download Quotation Receipt (.txt)</span>
            </button>

            <button 
              onClick={() => {
                setSubmitSuccess(false);
                setRequirements('');
              }}
              className="btn-secondary"
            >
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Step 1: Solution Parameters */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} />
              <span>1. Choose Solution Type & Technical Scope</span>
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '12px', marginBottom: '20px' }}>
              {[
                'Software and Web Application Development',
                'AI, Machine Learning & Generative AI',
                'AI Agents & Business Process Automation',
                'MZ Sentinel AI — Security & Alarm Monitoring',
                'Smart Surveillance, Access & IoT Gateways',
                'Enterprise IT Modernization'
              ].map(type => (
                <div
                  key={type}
                  onClick={() => setProjectType(type)}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    background: projectType === type ? 'rgba(0, 102, 255, 0.18)' : 'rgba(15, 23, 42, 0.6)',
                    border: `1px solid ${projectType === type ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    fontWeight: projectType === type ? 700 : 500,
                    color: projectType === type ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {type}
                </div>
              ))}
            </div>

            {/* Scope Scales */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '14px', marginBottom: '20px' }}>
              {[
                { id: 'mvp', title: 'Targeted MVP / Prototype', desc: 'Core features, validation focused (4–6 weeks)' },
                { id: 'business', title: 'Production Commercial System', desc: 'Full business logic, integrations, robust auth (8–12 weeks)' },
                { id: 'enterprise', title: 'Enterprise Mission-Critical', desc: 'High concurrency, multi-tenant, SLA 99.99%, air-gapped' }
              ].map(item => (
                <div
                  key={item.id}
                  onClick={() => setScale(item.id as typeof scale)}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: scale === item.id ? 'rgba(56, 189, 248, 0.12)' : 'rgba(15, 23, 42, 0.5)',
                    border: `1px solid ${scale === item.id ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: scale === item.id ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Checkboxes */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { state: hasAI, setter: setHasAI, label: '+ Generative AI / RAG Pipeline' },
                { state: hasSecurity, setter: setHasSecurity, label: '+ Computer Vision / Sentinel Security' },
                { state: hasMobile, setter: setHasMobile, label: '+ Mobile PWA / iOS / Android SDK' },
                { state: hasHighCompliance, setter: setHasHighCompliance, label: '+ Zero-Trust Audit / SOC2 Readiness' }
              ].map((feat, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => feat.setter(!feat.state)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: feat.state ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${feat.state ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    color: feat.state ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    transition: 'all 0.18s ease'
                  }}
                >
                  {feat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Estimate Indicator Bar */}
          <div 
            style={{
              padding: '20px 24px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.12), rgba(0, 242, 254, 0.08))',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '32px'
            }}
          >
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Estimated Budgetary Range (USD)
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '-0.02em' }}>
                ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Clock size={16} color="var(--accent-cyan)" />
                <span>Est. Delivery: <strong>{scale === 'mvp' ? '4-6 Weeks' : scale === 'business' ? '8-12 Weeks' : '3-5 Months'}</strong></span>
              </div>
            </div>
          </div>

          {/* Step 2: Contact Details & Requirements */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={16} />
              <span>2. Project Requirements & Contact Information</span>
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px', marginBottom: '16px' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Elena Rostova" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Corporate Email Address *</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Company / Organization *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Apex Global Tech" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Phone / WhatsApp (Optional)</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="+1 (555) 000-0000" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Specific Project Requirements & Business Goals *</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Min. 15 characters</span>
              </label>
              <textarea 
                className="form-textarea" 
                rows={4}
                placeholder="Describe your current pain points, target user count, integration needs, or security operations goals..."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                required
              />
            </div>

            {/* NDA & Timeline preferences */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <input 
                  type="checkbox" 
                  checked={ndaRequired} 
                  onChange={(e) => setNdaRequired(e.target.checked)}
                  style={{ accentColor: 'var(--accent-cyan)', width: '16px', height: '16px' }}
                />
                <ShieldCheck size={16} color="var(--accent-emerald)" />
                <span>Require bilateral Non-Disclosure Agreement (NDA) before detailed discussion</span>
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Target Timeline:</span>
                <select 
                  className="form-select"
                  style={{ width: 'auto', padding: '6px 12px', fontSize: '0.85rem' }}
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value as typeof timeline)}
                >
                  <option value="rush">Expedited / Rush</option>
                  <option value="standard">Standard (Recommended)</option>
                  <option value="extended">Multi-Phase Enterprise</option>
                </select>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#f87171',
                fontSize: '0.88rem',
                marginBottom: '20px'
              }}
            >
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Action */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ minWidth: '220px', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? (
                <span>Validating & Logging...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Submit Official Quote Request</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
