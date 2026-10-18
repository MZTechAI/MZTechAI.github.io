import React, { useState, useEffect } from 'react';
import type { PageId, ProjectItem } from './types';
import { storage } from './utils/storage';
import { soundManager } from './utils/sound';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AdminInquiriesModal } from './components/AdminInquiriesModal';
import { InteractiveDemos } from './components/InteractiveDemos';

// Views
import { HomeView } from './views/HomeView';
import { SoftwareDevView } from './views/SoftwareDevView';
import { AIDevView } from './views/AIDevView';
import { AIAutomationView } from './views/AIAutomationView';
import { SecurityMonitoringView } from './views/SecurityMonitoringView';
import { SentinelAIDashboardView } from './views/SentinelAIDashboardView';
import { ProjectsCatalogView } from './views/ProjectsCatalogView';
import { IndustriesView } from './views/IndustriesView';
import { TechStackView } from './views/TechStackView';
import { InsightsView } from './views/InsightsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

// Icons
import { X, Play, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('mzai_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [quoteContext, setQuoteContext] = useState<string>('');
  const [inquiriesCount, setInquiriesCount] = useState<number>(0);

  // Standalone interactive demo modal
  const [demoModal, setDemoModal] = useState<{
    isOpen: boolean;
    tab: 'doc-qa' | 'workflow' | 'vision';
    title: string;
  }>({
    isOpen: false,
    tab: 'doc-qa',
    title: 'Interactive System Demonstration'
  });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mzai_theme', theme);
  }, [theme]);

  // Update inquiry count
  const refreshInquiriesCount = () => {
    try {
      const list = storage.getInquiries();
      setInquiriesCount(list.length);
    } catch {
      setInquiriesCount(0);
    }
  };

  useEffect(() => {
    refreshInquiriesCount();
  }, []);

  const toggleTheme = () => {
    soundManager.playClick();
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (page: PageId) => {
    soundManager.playClick();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuote = (context: string) => {
    soundManager.playClick();
    setQuoteContext(context);
    setCurrentPage('contact');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchDemo = (demoType: string) => {
    soundManager.playClick();
    setSelectedProject(null);

    if (demoType === 'sentinel-ai') {
      setCurrentPage('sentinel-ai');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let tab: 'doc-qa' | 'workflow' | 'vision' = 'doc-qa';
    let title = 'Document RAG & Legal Intelligence Engine';

    if (demoType === 'interactive-workflow') {
      tab = 'workflow';
      title = 'Autonomous Enterprise Workflow & Approval Pipeline';
    } else if (demoType === 'interactive-vision') {
      tab = 'vision';
      title = 'Edge Computer Vision & Multi-Object Detection';
    }

    setDemoModal({
      isOpen: true,
      tab,
      title
    });
  };

  return (
    <div className="app-container">
      {/* 1. Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAdmin={() => {
          soundManager.playClick();
          setIsAdminModalOpen(true);
        }}
        unreadCount={inquiriesCount}
      />

      {/* 2. Main Page Content Router */}
      <main className="main-content">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenProjectModal={(project) => {
              soundManager.playClick();
              setSelectedProject(project);
            }}
            onLaunchDemo={handleLaunchDemo}
          />
        )}

        {currentPage === 'software' && (
          <SoftwareDevView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'ai-dev' && (
          <AIDevView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'ai-automation' && (
          <AIAutomationView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'security' && (
          <SecurityMonitoringView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'sentinel-ai' && (
          <SentinelAIDashboardView
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsCatalogView
            onLaunchDemo={handleLaunchDemo}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'tech-stack' && (
          <TechStackView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuote}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            initialContext={quoteContext}
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Global Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onLaunchDemo={handleLaunchDemo}
          onRequestSimilar={(title) => handleRequestQuote(`Implementation inquiry for blueprint: ${title}`)}
        />
      )}

      {/* 5. Enterprise Admin & Inquiries Console Modal */}
      <AdminInquiriesModal
        isOpen={isAdminModalOpen}
        onClose={() => {
          setIsAdminModalOpen(false);
          refreshInquiriesCount();
        }}
      />

      {/* 6. Standalone Interactive Live Demo Modal */}
      {demoModal.isOpen && (
        <div className="modal-overlay" onClick={() => setDemoModal(prev => ({ ...prev, isOpen: false }))}>
          <div 
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '1060px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="status-pill status-live">
                  <span className="status-dot"></span>
                  LIVE SANDBOX
                </span>
                <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--text-primary)' }}>
                  {demoModal.title}
                </h3>
              </div>

              <button 
                onClick={() => setDemoModal(prev => ({ ...prev, isOpen: false }))}
                style={{
                  padding: '8px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <InteractiveDemos initialTab={demoModal.tab} />

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                Simulated execution with deterministic sample telemetry & live Web Audio cues.
              </p>
              <button 
                className="btn-primary"
                onClick={() => {
                  setDemoModal(prev => ({ ...prev, isOpen: false }));
                  handleRequestQuote(`Inquiry regarding ${demoModal.title}`);
                }}
              >
                <span>Request Custom Production Deployment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
