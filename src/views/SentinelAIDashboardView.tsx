import React, { useState, useEffect } from 'react';
import { 
  initialAlarms, 
  initialCameras, 
  initialDevices, 
  securityZones, 
  simulatedEventPool 
} from '../data/securityData';
import type { AlarmEvent, SecurityCamera, SecurityDevice } from '../types';
import { soundManager } from '../utils/sound';
import { storage } from '../utils/storage';
import { 
  Shield, 
  Camera, 
  Radio, 
  AlertTriangle, 
  CheckCircle2, 
  SlidersHorizontal, 
  Volume2, 
  VolumeX, 
  Eye, 
  PlusCircle, 
  RefreshCw, 
  Activity, 
  Maximize2, 
  Search, 
  Clock, 
  Server, 
  Layers, 
  FileCheck,
  UserCheck
} from 'lucide-react';

interface SentinelAIDashboardViewProps {
  onRequestQuote: (context: string) => void;
}

export const SentinelAIDashboardView: React.FC<SentinelAIDashboardViewProps> = ({ onRequestQuote }) => {
  const [alarms, setAlarms] = useState<AlarmEvent[]>(initialAlarms);
  const [cameras, setCameras] = useState<SecurityCamera[]>(initialCameras);
  const [devices, setDevices] = useState<SecurityDevice[]>(initialDevices);
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [severityFilter, setSeverityFilter] = useState<'all' | 'critical' | 'warning' | 'info'>('all');
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());
  const [selectedAlarmForModal, setSelectedAlarmForModal] = useState<AlarmEvent | null>(null);
  const [resolutionNoteInput, setResolutionNoteInput] = useState('');
  const [isSimulatingLiveFeed, setIsSimulatingLiveFeed] = useState(true);

  // Periodic heartbeat animation to simulate active polling of telemetry
  const [telemetryTick, setTelemetryTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryTick(prev => (prev + 1) % 100);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundManager.setMuted(nextMuted);
    if (!nextMuted) {
      soundManager.playAlarmBeep('info');
    }
  };

  // Inject a synthetic incident from the event pool
  const injectSyntheticIncident = () => {
    const randomEvent = simulatedEventPool[Math.floor(Math.random() * simulatedEventPool.length)];
    const newAlarm: AlarmEvent = {
      id: `ALM-${Math.floor(9000 + Math.random() * 999)}`,
      timestamp: 'Just now',
      sourceDevice: randomEvent.sourceDevice,
      zone: randomEvent.zone,
      type: randomEvent.type,
      severity: randomEvent.severity,
      status: 'active',
      description: randomEvent.description,
      confidence: randomEvent.confidence,
      assignedOperator: 'Unassigned (Priority Queue)'
    };

    setAlarms(prev => [newAlarm, ...prev]);
    soundManager.playAlarmBeep(randomEvent.severity);
    storage.logOperatorAction('Synthetic Event Ingested', 'Auto-Simulator', `${newAlarm.id}: ${newAlarm.type} in ${newAlarm.zone}`);
  };

  // Acknowledge alarm
  const handleAcknowledge = (alarmId: string) => {
    setAlarms(prev => prev.map(a => {
      if (a.id === alarmId) {
        return {
          ...a,
          status: 'acknowledged',
          assignedOperator: 'OP-01 (Current Operator)'
        };
      }
      return a;
    }));
    soundManager.playClick();
    storage.logOperatorAction('Alarm Acknowledged', 'OP-01', `Incident ${alarmId} triaged by operator.`);
  };

  // Resolve alarm
  const handleResolve = (alarmId: string) => {
    setAlarms(prev => prev.map(a => {
      if (a.id === alarmId) {
        return {
          ...a,
          status: 'resolved',
          resolvedAt: 'Just now',
          resolutionNotes: resolutionNoteInput || 'Verified as resolved by operator on duty.'
        };
      }
      return a;
    }));
    setSelectedAlarmForModal(null);
    setResolutionNoteInput('');
    soundManager.playClick();
    storage.logOperatorAction('Alarm Resolved', 'OP-01', `Incident ${alarmId} closed. Note: ${resolutionNoteInput || 'Resolved'}`);
  };

  const filteredAlarms = alarms.filter(a => {
    const matchZone = selectedZone === 'all' || a.zone.toLowerCase().includes(selectedZone.toLowerCase());
    const matchSeverity = severityFilter === 'all' || a.severity === severityFilter;
    return matchZone && matchSeverity;
  });

  const activeCriticalCount = alarms.filter(a => a.severity === 'critical' && a.status === 'active').length;

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Platform Banner Header */}
      <section 
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.15) 0%, rgba(5, 8, 17, 0.95) 75%)',
          borderBottom: '1px solid var(--border-medium)',
          padding: '48px 24px 36px 24px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(0, 242, 254, 0.12)',
                    border: '1px solid rgba(0, 242, 254, 0.35)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  <Shield size={14} />
                  <span>FLAGSHIP PLATFORM DEMONSTRATION</span>
                </span>

                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: activeCriticalCount > 0 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.15)',
                    border: activeCriticalCount > 0 ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(16, 185, 129, 0.4)',
                    color: activeCriticalCount > 0 ? '#f87171' : '#34d399',
                    fontSize: '0.76rem',
                    fontWeight: 700
                  }}
                >
                  <span className="status-dot" style={{ background: activeCriticalCount > 0 ? '#ef4444' : '#10b981' }} />
                  {activeCriticalCount > 0 ? `${activeCriticalCount} CRITICAL ALARM ACTIVE` : 'ALL ZONES SECURED'}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '8px' }}>
                MZ Sentinel AI <span className="text-gradient">— Security Operations Console</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '780px', fontSize: '1rem', lineHeight: 1.6 }}>
                Centralized command console correlating multi-zone IoT sensor telemetry, edge computer vision confidence models, and standardized dispatch automation (SIA DC-09 / Contact ID ready).
              </p>
            </div>

            {/* Operator Control Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={toggleSound}
                title={isMuted ? 'Unmute Audio Alarm Alerts' : 'Mute Audio Alarm Alerts'}
                className="btn-secondary"
                style={{ padding: '10px 14px' }}
              >
                {isMuted ? <VolumeX size={16} color="var(--accent-rose)" /> : <Volume2 size={16} color="var(--accent-cyan)" />}
                <span>{isMuted ? 'Alerts Muted' : 'Audio Live'}</span>
              </button>

              <button
                onClick={injectSyntheticIncident}
                className="btn-primary"
                id="inject-synthetic-incident-btn"
              >
                <PlusCircle size={16} />
                <span>Inject Synthetic Event</span>
              </button>

              <button
                onClick={() => onRequestQuote('MZ Sentinel AI Security Platform Deployment')}
                className="btn-outline"
                style={{ padding: '10px 18px' }}
              >
                <span>Request Commercial Deployment</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics KPI Bar */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '12px'
            }}
          >
            <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Central Station Link</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} /> SIA DC-09 Active
              </div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Connected IoT Devices</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {devices.filter(d => d.status === 'online').length} / {devices.length} Devices Online
              </div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Camera Analytics Nodes</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                4 Streams (YOLOv10 60 FPS)
              </div>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mean Triage SLA</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                &lt; 28 Seconds Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Operations Grid Layout */}
      <div 
        style={{
          maxWidth: '1400px',
          margin: '36px auto 0 auto',
          gap: '24px'
        }}
        className="ops-main-grid"
      >
        {/* Left Column: Camera Feeds & Device Health */}
        <div className="ops-left-col" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Cameras Grid Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Camera size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Simulated Video Analytics Matrix</h3>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              SIMULATED RTSP STREAMS • ZERO REAL FOOTAGE FABRICATION
            </div>
          </div>

          {/* 4 Camera Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {cameras.map((cam) => (
              <div 
                key={cam.id} 
                className="glass-panel-static scanlines"
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(11, 16, 30, 0.9)',
                  border: cam.status === 'alarm' 
                    ? '1px solid #ef4444' 
                    : cam.status === 'motion-detected' 
                      ? '1px solid #f59e0b' 
                      : '1px solid var(--border-medium)',
                  position: 'relative'
                }}
              >
                {/* Camera Video Mock Container */}
                <div 
                  style={{
                    position: 'relative',
                    height: '190px',
                    borderRadius: 'var(--radius-sm)',
                    background: '#040711',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px'
                  }}
                >
                  <div className="radar-sweep" style={{ position: 'absolute', inset: 0 }} />

                  {/* Wireframe scene overlay */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3 }} viewBox="0 0 300 190">
                    <line x1="0" y1="140" x2="300" y2="140" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
                    <rect x="80" y="50" width="140" height="90" fill="none" stroke="#38bdf8" strokeWidth="1" />
                    {cam.id === 'CAM-02' && (
                      <line x1="150" y1="0" x2="150" y2="190" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
                    )}
                  </svg>

                  {/* Dynamic Bounding Box Overlay for each camera */}
                  {cam.currentDetections.map((det, idx) => (
                    <div 
                      key={idx}
                      style={{
                        position: 'absolute',
                        top: `${det.bbox[0]}%`,
                        left: `${det.bbox[1]}%`,
                        width: `${det.bbox[2]}%`,
                        height: `${det.bbox[3]}%`,
                        border: `2px solid ${det.color}`,
                        borderRadius: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '3px',
                        boxShadow: `0 0 10px ${det.color}55`
                      }}
                    >
                      <span 
                        style={{
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          background: det.color,
                          color: '#050811',
                          padding: '1px 3px',
                          borderRadius: '2px',
                          width: 'fit-content',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {det.label} {det.confidence}%
                      </span>
                    </div>
                  ))}

                  {/* Camera Top OSD */}
                  <div style={{ position: 'absolute', top: '6px', left: '8px', fontSize: '0.66rem', color: '#fff', fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.6)', padding: '1px 5px', borderRadius: '2px' }}>
                    {cam.id} • {cam.resolution}
                  </div>

                  <div style={{ position: 'absolute', top: '6px', right: '8px', fontSize: '0.62rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,0.6)', padding: '1px 5px', borderRadius: '2px' }}>
                    REC • {cam.fps} FPS
                  </div>
                </div>

                {/* Camera Card Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      {cam.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {cam.zone}
                    </div>
                  </div>

                  <span 
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: cam.status === 'alarm' ? 'rgba(239, 68, 68, 0.2)' : cam.status === 'motion-detected' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.15)',
                      color: cam.status === 'alarm' ? '#f87171' : cam.status === 'motion-detected' ? '#fbbf24' : '#34d399',
                      border: '1px solid currentColor'
                    }}
                  >
                    {cam.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sensor Health & Device Matrix */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Radio size={18} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Connected Sensor Fleet & Health Matrix</h3>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Heartbeat ping: <strong>Active</strong> (TLS 1.3 encrypted)
              </div>
            </div>

            <div 
              style={{
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid var(--border-medium)',
                overflowX: 'auto'
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '12px 16px' }}>Device ID & Name</th>
                    <th style={{ padding: '12px 16px' }}>Type</th>
                    <th style={{ padding: '12px 16px' }}>Zone</th>
                    <th style={{ padding: '12px 16px' }}>Status</th>
                    <th style={{ padding: '12px 16px' }}>Battery</th>
                    <th style={{ padding: '12px 16px' }}>Signal</th>
                    <th style={{ padding: '12px 16px' }}>IP / Gateway</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map(dev => (
                    <tr key={dev.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-primary)' }}>
                        <div>{dev.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{dev.id}</div>
                      </td>
                      <td style={{ padding: '12px 16px', textTransform: 'capitalize', color: 'var(--text-secondary)' }}>
                        {dev.type.replace('-', ' ')}
                      </td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>
                        {dev.zone}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <span 
                          style={{
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            background: dev.status === 'online' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                            color: dev.status === 'online' ? '#34d399' : '#f87171',
                            border: '1px solid currentColor'
                          }}
                        >
                          {dev.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>
                        {dev.battery ? `${dev.battery}%` : 'AC Line'}
                      </td>
                      <td style={{ padding: '12px 16px', color: 'var(--accent-cyan)' }}>
                        {dev.signalStrength}%
                      </td>
                      <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        {dev.ipAddress || '10.240.0.1'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Alarm Feed & Incident Workflow */}
        <div className="ops-right-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Real-time Alarm Event Feed Header */}
          <div className="glass-panel" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} color="var(--accent-rose)" />
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Priority Alarm Queue</h3>
              </div>
              <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', fontWeight: 700 }}>
                {filteredAlarms.length} Events
              </span>
            </div>

            {/* Filter controls */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
              {(['all', 'critical', 'warning', 'info'] as const).map(sev => (
                <button
                  key={sev}
                  onClick={() => setSeverityFilter(sev)}
                  style={{
                    flex: 1,
                    padding: '5px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: severityFilter === sev ? '#fff' : 'var(--text-muted)',
                    background: severityFilter === sev ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${severityFilter === sev ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`
                  }}
                >
                  {sev}
                </button>
              ))}
            </div>

            {/* Alarms Timeline List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '520px', overflowY: 'auto' }}>
              {filteredAlarms.map(alarm => {
                const isCrit = alarm.severity === 'critical';
                const isWarn = alarm.severity === 'warning';
                const isResolved = alarm.status === 'resolved';

                return (
                  <div
                    key={alarm.id}
                    style={{
                      padding: '14px',
                      borderRadius: 'var(--radius-md)',
                      background: isResolved 
                        ? 'rgba(15, 23, 42, 0.4)' 
                        : isCrit 
                          ? 'rgba(239, 68, 68, 0.08)' 
                          : 'rgba(245, 158, 11, 0.06)',
                      border: `1px solid ${
                        isResolved 
                          ? 'var(--border-subtle)' 
                          : isCrit 
                            ? 'rgba(239, 68, 68, 0.4)' 
                            : 'rgba(245, 158, 11, 0.3)'
                      }`,
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <span 
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          padding: '2px 6px',
                          borderRadius: '3px',
                          background: isCrit ? '#ef4444' : isWarn ? '#f59e0b' : '#38bdf8',
                          color: '#050811',
                          textTransform: 'uppercase'
                        }}
                      >
                        {alarm.severity}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {alarm.timestamp}
                      </span>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '3px' }}>
                      {alarm.type}
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', marginBottom: '6px' }}>
                      {alarm.sourceDevice} • {alarm.zone}
                    </div>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '10px' }}>
                      {alarm.description}
                    </p>

                    {/* Operator Acknowledge / Resolve Controls */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        Status: <strong style={{ color: isResolved ? '#34d399' : '#fbbf24' }}>{alarm.status.toUpperCase()}</strong>
                      </span>

                      {!isResolved && (
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {alarm.status === 'active' && (
                            <button
                              onClick={() => handleAcknowledge(alarm.id)}
                              style={{
                                padding: '4px 8px',
                                borderRadius: '4px',
                                background: 'rgba(56, 189, 248, 0.15)',
                                border: '1px solid var(--accent-cyan)',
                                color: 'var(--accent-cyan)',
                                fontSize: '0.72rem',
                                fontWeight: 600
                              }}
                            >
                              Acknowledge
                            </button>
                          )}
                          <button
                            onClick={() => setSelectedAlarmForModal(alarm)}
                            style={{
                              padding: '4px 8px',
                              borderRadius: '4px',
                              background: 'rgba(16, 185, 129, 0.15)',
                              border: '1px solid #10b981',
                              color: '#34d399',
                              fontSize: '0.72rem',
                              fontWeight: 600
                            }}
                          >
                            Resolve...
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security Zones Quick Matrix */}
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '12px' }}>
              Monitored Security Zones
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {securityZones.map(zone => (
                <div 
                  key={zone.id}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{zone.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{zone.status}</div>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    {zone.devicesCount} devices
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resolve Incident Dialog Modal */}
      {selectedAlarmForModal && (
        <div className="modal-overlay" onClick={() => setSelectedAlarmForModal(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
              Resolve Incident #{selectedAlarmForModal.id}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              {selectedAlarmForModal.type} at {selectedAlarmForModal.zone}
            </p>

            <div className="form-group">
              <label className="form-label">Operator Resolution Notes & Action Summary</label>
              <textarea
                className="form-textarea"
                rows={4}
                placeholder="e.g. Dispatched on-site guard; verified badge authorization; restored perimeter fence contact..."
                value={resolutionNoteInput}
                onChange={e => setResolutionNoteInput(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setSelectedAlarmForModal(null)} className="btn-secondary btn-sm">
                Cancel
              </button>
              <button 
                onClick={() => handleResolve(selectedAlarmForModal.id)} 
                className="btn-primary btn-sm"
              >
                Sign Off & Close Incident
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .ops-left-col {
            grid-column: span 12 !important;
          }
          .ops-right-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
};
