import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import type { ClientInquiry } from '../types';
import { X, Inbox, Shield, Clock, CheckCircle, RefreshCw, FileText, User } from 'lucide-react';

interface AdminInquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminInquiriesModal: React.FC<AdminInquiriesModalProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [operatorLogs, setOperatorLogs] = useState<{ id: string; timestamp: string; action: string; operator: string; details: string }[]>([]);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'operator-logs'>('inquiries');

  const loadData = () => {
    setInquiries(storage.getInquiries());
    setOperatorLogs(storage.getOperatorLogs());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '920px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(0, 242, 254, 0.15)',
                border: '1px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}
            >
              <Inbox size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', margin: 0 }}>MZ.AI Enterprise Control & Inquiries Console</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Real-time CRM Inquiries & Security Operations Audit Logs
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={loadData}
              title="Refresh Records"
              style={{ padding: '8px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)' }}
            >
              <RefreshCw size={16} />
            </button>
            <button 
              onClick={onClose}
              style={{ padding: '8px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderBottom: '1px solid var(--border-medium)', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('inquiries')}
            style={{
              padding: '10px 18px',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: activeTab === 'inquiries' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'inquiries' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            Client Quotations & Leads ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('operator-logs')}
            style={{
              padding: '10px 18px',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: activeTab === 'operator-logs' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'operator-logs' ? '2px solid var(--accent-cyan)' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            Sentinel AI Operator Logs ({operatorLogs.length})
          </button>
        </div>

        {/* Inquiries Tab */}
        {activeTab === 'inquiries' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {inquiries.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No client inquiries found. Submit an estimate from the Contact page to populate this ledger.
              </div>
            ) : (
              inquiries.map((inq) => (
                <div 
                  key={inq.id}
                  style={{
                    padding: '18px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{inq.fullName}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>• {inq.company}</span>
                        <span 
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            background: inq.status === 'New' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                            color: inq.status === 'New' ? 'var(--accent-cyan)' : '#34d399',
                            border: '1px solid currentColor'
                          }}
                        >
                          {inq.status}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {inq.email} {inq.phone ? `| ${inq.phone}` : ''} • Ref: <strong>{inq.id}</strong>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                        {inq.budgetRange}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Target: {inq.expectedTimeline}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.2)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                    <strong>Requirement:</strong> {inq.requirements}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: '4px' }}>
                    <span>Domain: <strong>{inq.projectType}</strong></span>
                    <span>Received: {new Date(inq.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Operator Logs Tab */}
        {activeTab === 'operator-logs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {operatorLogs.map((log) => (
              <div 
                key={log.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.88rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Shield size={16} color="var(--accent-cyan)" />
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{log.action}</span>
                    <span style={{ color: 'var(--text-muted)', marginLeft: '8px' }}>— {log.details}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span>Op: <strong>{log.operator}</strong></span>
                  <span>{log.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
