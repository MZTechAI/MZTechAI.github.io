import React, { useState, useEffect } from 'react';
import type { PageId } from '../types';
import { 
  Shield, 
  Cpu, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  Layers, 
  FolderGit2, 
  Building2, 
  Terminal, 
  BookOpen, 
  Send,
  SlidersHorizontal,
  BellRing
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenAdmin: () => void;
  unreadCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  theme,
  onToggleTheme,
  onOpenAdmin,
  unreadCount = 2
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while mobile navigation drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          zIndex: 1000,
        background: scrolled 
          ? 'var(--bg-glass-strong)' 
          : 'rgba(5, 8, 17, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-medium)' : 'var(--border-subtle)'}`,
        transition: 'all 0.25s ease'
      }}
    >
      <div 
        className="navbar-inner"
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 24px'
        }}
      >
        {/* ROW 1: Brand Identity on Left, Global Action Controls on Right */}
        <div 
          className="navbar-top-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '56px'
          }}
        >
          {/* Brand Logo & Monogram */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            id="brand-logo-btn"
          >
            {/* Logo container: displays official user logo mark at high visibility */}
            <div 
              style={{
                height: '46px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.25) 0%, rgba(0, 242, 254, 0.15) 100%)',
                border: '1px solid rgba(0, 242, 254, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3px 10px',
                boxShadow: '0 0 18px rgba(0, 242, 254, 0.3)',
                position: 'relative'
              }}
            >
              {!logoError ? (
                <img 
                  src="/mzai-mark.png" 
                  alt="MZ.AI Logo" 
                  onError={() => setLogoError(true)}
                  style={{
                    height: '40px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 8px rgba(0, 242, 254, 0.4))'
                  }}
                />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#00f2fe', letterSpacing: '-0.05em' }}>
                    MZ<span style={{ color: '#0066ff' }}>.</span>AI
                  </span>
                </div>
              )}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="brand-logo-text" style={{ fontWeight: 800, fontSize: '1.38rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                  MZ<span style={{ color: 'var(--accent-cyan)' }}>.AI</span>
                </span>
                <span 
                  className="brand-enterprise-pill"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    background: 'rgba(0, 242, 254, 0.15)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.04em'
                  }}
                >
                  ENTERPRISE
                </span>
              </div>
              <p className="brand-tagline" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.2 }}>
                Tech Solution Provider
              </p>
            </div>
          </div>

          {/* Right Action Icons: Admin drawer, Theme toggle & Primary Quote CTA */}
          <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Admin Inquiries trigger */}
            <button
              onClick={onOpenAdmin}
              title="Open Admin Inquiries & Operator Audit Log"
              style={{
                position: 'relative',
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              id="admin-inquiries-btn"
            >
              <BellRing size={17} />
              {unreadCount > 0 && (
                <span 
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                    color: '#050811',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Theme Switcher */}
            <button
              onClick={onToggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Primary CTA button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary btn-sm"
              style={{ display: 'none' }}
              id="primary-quote-nav-btn"
            >
              <Send size={14} />
              <span>Get a Quote</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-md)',
                background: mobileMenuOpen ? 'rgba(0, 242, 254, 0.18)' : 'rgba(15, 23, 42, 0.85)',
                border: mobileMenuOpen ? '1px solid var(--accent-cyan)' : '1px solid var(--border-medium)',
                color: mobileMenuOpen ? 'var(--accent-cyan)' : 'var(--text-primary)',
                cursor: 'pointer',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                zIndex: 100000
              }}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X size={22} color="var(--accent-cyan)" /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ROW 2: Full Desktop Navigation Bar */}
        <nav 
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '48px',
            gap: '8px',
            borderTop: '1px solid var(--border-subtle)'
          }}
          className="desktop-nav navbar-bottom-row"
        >
          <button
            onClick={() => handleNavClick('home')}
            style={{
              padding: '8px 14px',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: currentPage === 'home' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s ease',
              background: currentPage === 'home' ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
            }}
          >
            Home
          </button>

          {/* Solutions & Services Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsDropdownOpen(true)}
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <button
              onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '8px 14px',
                fontSize: '0.92rem',
                fontWeight: 500,
                color: ['software', 'ai-dev', 'ai-automation', 'security'].includes(currentPage) 
                  ? 'var(--accent-cyan)' 
                  : 'var(--text-secondary)',
                borderRadius: 'var(--radius-sm)',
                transition: 'all 0.2s ease',
                background: ['software', 'ai-dev', 'ai-automation', 'security'].includes(currentPage)
                  ? 'rgba(56, 189, 248, 0.1)'
                  : 'transparent'
              }}
              id="solutions-dropdown-btn"
            >
              Services & Core
              <ChevronDown size={14} style={{ transform: solutionsDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>

            {solutionsDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '290px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.15)',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 200,
                  animation: 'fadeIn 0.15s ease-out'
                }}
              >
                <button
                  onClick={() => handleNavClick('software')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'left',
                    color: currentPage === 'software' ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    background: currentPage === 'software' ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                    transition: 'all 0.15s ease'
                  }}
                  className="dropdown-item"
                >
                  <Terminal size={18} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Software Development</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Web apps & enterprise systems</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('ai-dev')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'left',
                    color: currentPage === 'ai-dev' ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    background: currentPage === 'ai-dev' ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                    transition: 'all 0.15s ease'
                  }}
                  className="dropdown-item"
                >
                  <Cpu size={18} color="var(--accent-violet)" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>AI & Machine Learning</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LLMs, RAG & Computer Vision</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('ai-automation')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'left',
                    color: currentPage === 'ai-automation' ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    background: currentPage === 'ai-automation' ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                    transition: 'all 0.15s ease'
                  }}
                  className="dropdown-item"
                >
                  <Layers size={18} color="var(--accent-blue)" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>AI Automation & Agents</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Workflows & human-in-the-loop</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('security')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'left',
                    color: currentPage === 'security' ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    background: currentPage === 'security' ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                    transition: 'all 0.15s ease'
                  }}
                  className="dropdown-item"
                >
                  <Shield size={18} color="var(--accent-emerald)" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Security & IoT Monitoring</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Surveillance & alarm gateways</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* MZ Sentinel AI Flagship Link with Glowing Badge */}
          <button
            onClick={() => handleNavClick('sentinel-ai')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '7px 14px',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: currentPage === 'sentinel-ai' ? '#00f2fe' : 'var(--text-primary)',
              borderRadius: 'var(--radius-md)',
              background: currentPage === 'sentinel-ai' 
                ? 'rgba(0, 242, 254, 0.18)' 
                : 'linear-gradient(135deg, rgba(0, 102, 255, 0.15), rgba(0, 242, 254, 0.12))',
              border: '1px solid rgba(0, 242, 254, 0.4)',
              boxShadow: '0 0 12px rgba(0, 242, 254, 0.25)',
              transition: 'all 0.25s ease'
            }}
            id="sentinel-ai-nav-btn"
          >
            <Shield size={16} color="var(--accent-cyan)" />
            <span>MZ Sentinel AI</span>
            <span 
              style={{
                fontSize: '0.65rem',
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'rgba(239, 68, 68, 0.25)',
                border: '1px solid rgba(239, 68, 68, 0.5)',
                color: '#f87171',
                fontWeight: 700
              }}
            >
              LIVE
            </span>
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            style={{
              padding: '8px 14px',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: currentPage === 'projects' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s ease',
              background: currentPage === 'projects' ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
            }}
          >
            Projects (14)
          </button>

          <button
            onClick={() => handleNavClick('industries')}
            style={{
              padding: '8px 14px',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: currentPage === 'industries' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s ease',
              background: currentPage === 'industries' ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
            }}
          >
            Industries
          </button>

          <button
            onClick={() => handleNavClick('tech-stack')}
            style={{
              padding: '8px 14px',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: currentPage === 'tech-stack' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s ease',
              background: currentPage === 'tech-stack' ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
            }}
          >
            Tech Stack
          </button>

          <button
            onClick={() => handleNavClick('about')}
            style={{
              padding: '8px 14px',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: currentPage === 'about' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s ease',
              background: currentPage === 'about' ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
            }}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('insights')}
            style={{
              padding: '8px 14px',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: currentPage === 'insights' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.2s ease',
              background: currentPage === 'insights' ? 'rgba(56, 189, 248, 0.1)' : 'transparent'
            }}
          >
            Insights
          </button>
        </nav>
      </div>
    </header>

    {/* Mobile Drawer Menu - Rendered OUTSIDE <header> to escape backdrop-filter containing block trap */}
    {mobileMenuOpen && (
      <div 
        className="mobile-drawer-portal"
        style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'calc(100dvh - var(--header-height))',
          maxHeight: 'calc(100dvh - var(--header-height))',
          background: 'var(--bg-primary)',
          padding: '20px 16px 48px 16px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          zIndex: 999999,
          borderTop: '1px solid var(--border-medium)',
          animation: 'fadeIn 0.2s ease-out'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 0 10px 0' }}>
          <img 
            src="/mzai-emblem.png" 
            alt="MZ.AI Logo" 
            style={{
              height: '46px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 12px rgba(0, 242, 254, 0.35))'
            }}
          />
        </div>

        {/* Flagship Sentinel AI Operations CTA Banner */}
        <button
          onClick={() => handleNavClick('sentinel-ai')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.25), rgba(0, 242, 254, 0.2))',
              border: '1px solid rgba(0, 242, 254, 0.45)',
              color: 'var(--accent-cyan)',
              fontWeight: 700,
              fontSize: '0.96rem',
              boxShadow: '0 4px 18px rgba(0, 242, 254, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Shield size={20} />
              <span>MZ Sentinel AI Operations</span>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '2px 7px', background: '#ef4444', color: '#fff', borderRadius: '4px', fontWeight: 800 }}>
              LIVE DEMO
            </span>
          </button>

          {/* Group 1: Core Disciplines */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', paddingLeft: '6px' }}>
              Core Disciplines
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                { id: 'home', label: 'Home Overview', icon: Layers },
                { id: 'software', label: 'Enterprise Software & Cloud', icon: Terminal },
                { id: 'ai-dev', label: 'AI & Machine Learning (LLMs)', icon: Cpu },
                { id: 'ai-automation', label: 'AI Automation & Agents', icon: Layers },
                { id: 'security', label: 'Security & Monitoring Solutions', icon: Shield }
              ].map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as PageId)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                      background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isActive ? 'rgba(56, 189, 248, 0.3)' : 'transparent'}`,
                      minHeight: '44px'
                    }}
                  >
                    <Icon size={18} color={isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 2: Showcase, Architecture & Insights */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', paddingLeft: '6px' }}>
              Showcase & Intelligence
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                { id: 'projects', label: 'Projects & Case Studies (14)', icon: FolderGit2 },
                { id: 'industries', label: 'Industries We Serve (10)', icon: Building2 },
                { id: 'tech-stack', label: 'Full Technology Stack', icon: SlidersHorizontal },
                { id: 'insights', label: 'Insights & Technical Blog', icon: BookOpen }
              ].map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as PageId)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                      background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isActive ? 'rgba(56, 189, 248, 0.3)' : 'transparent'}`,
                      minHeight: '44px'
                    }}
                  >
                    <Icon size={18} color={isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 3: Company & Direct RFP */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', paddingLeft: '6px' }}>
              Company & Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <button
                onClick={() => handleNavClick('about')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  fontWeight: currentPage === 'about' ? 700 : 500,
                  color: currentPage === 'about' ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  background: currentPage === 'about' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${currentPage === 'about' ? 'rgba(56, 189, 248, 0.3)' : 'transparent'}`,
                  minHeight: '44px'
                }}
              >
                <Building2 size={18} color={currentPage === 'about' ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                <span>About MZ.AI Enterprise</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="btn-primary"
                style={{
                  marginTop: '8px',
                  width: '100%',
                  justifyContent: 'center',
                  minHeight: '46px'
                }}
              >
                <Send size={16} />
                <span>Get a Custom Quote / Estimate</span>
              </button>
            </div>
          </div>

          {/* Mobile Bottom Quick Actions (Theme & Operator Log) */}
          <div style={{ display: 'flex', gap: '10px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', marginTop: '6px' }}>
            <button
              onClick={onToggleTheme}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                minHeight: '44px'
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                minHeight: '44px',
                position: 'relative'
              }}
            >
              <BellRing size={16} />
              <span>Operator Logs</span>
              {unreadCount > 0 && (
                <span 
                  style={{
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--accent-cyan)',
                    color: '#050811',
                    fontSize: '0.65rem',
                    fontWeight: 800
                  }}
                >
                  {unreadCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          #primary-quote-nav-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .navbar-top-row {
            height: 56px !important;
          }
        }
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .navbar-top-row {
            height: 100% !important;
            border-bottom: none !important;
          }
          .navbar-inner {
            padding: 0 16px !important;
          }
        }
        .dropdown-item:hover {
          background: rgba(56, 189, 248, 0.15) !important;
        }
      `}</style>
    </>
  );
};
