import React, { useState } from 'react';
import { blogData } from '../data/blogData';
import type { BlogPost, PageId } from '../types';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  Search, 
  X, 
  Share2, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  User 
} from 'lucide-react';

interface InsightsViewProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (topic: string) => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onNavigate, onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Intelligent Security', 'AI & Automation', 'Software Engineering'];

  const filteredPosts = blogData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogData[0];

  const handleShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="section-container" style={{ paddingTop: '40px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <BookOpen size={14} />
          <span>RESEARCH & ENGINEERING DISPATCHES</span>
        </div>
        <h1 className="section-title">
          Enterprise Tech Insights & <br />
          <span className="text-gradient">Architectural Whitepapers</span>
        </h1>
        <p className="section-description">
          In-depth analyses from our principal engineers on solving real-world challenges in false alarm mitigation, human-in-the-loop autonomous AI, and zero-hallucination document intelligence.
        </p>
      </div>

      {/* Featured Article Hero Banner */}
      {featuredPost && selectedCategory === 'All' && searchQuery === '' && (
        <div 
          className="glass-panel" 
          style={{
            padding: '40px',
            marginBottom: '48px',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 16, 32, 0.95) 100%)',
            border: '1px solid var(--border-glow)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span 
              style={{
                fontSize: '0.72rem',
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0, 242, 254, 0.15)',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}
            >
              FEATURED WHITEPAPER
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {featuredPost.date} • {featuredPost.readTime}
            </span>
          </div>

          <h2 style={{ fontSize: '1.9rem', marginBottom: '14px', maxWidth: '880px', lineHeight: 1.3 }}>
            {featuredPost.title}
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '820px', marginBottom: '24px' }}>
            {featuredPost.excerpt}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#ffffff'
                }}
              >
                {featuredPost.author.avatarInitials}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                  {featuredPost.author.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {featuredPost.author.role}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="btn-primary" 
                onClick={() => setActiveArticle(featuredPost)}
              >
                <span>Read Full Whitepaper</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search */}
      <div 
        className="glass-panel" 
        style={{
          padding: '16px 24px',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.84rem',
                fontWeight: 600,
                background: selectedCategory === cat ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: `1px solid ${selectedCategory === cat ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', width: '280px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 36px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(5, 8, 17, 0.6)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
              fontSize: '0.88rem',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '24px',
          marginBottom: '64px'
        }}
      >
        {filteredPosts.map(post => (
          <article 
            key={post.id}
            className="glass-panel"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
            onClick={() => setActiveArticle(post)}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span 
                  style={{
                    fontSize: '0.74rem',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600
                  }}
                >
                  {post.category}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.35, color: 'var(--text-primary)' }}>
                {post.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                {post.excerpt}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {post.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    style={{
                      fontSize: '0.72rem',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)'
                  }}
                >
                  {post.author.avatarInitials}
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {post.author.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {post.date}
                  </div>
                </div>
              </div>

              <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                Read <ArrowRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
          <div 
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '820px' }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span 
                  style={{
                    fontSize: '0.75rem',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--accent-cyan)',
                    fontWeight: 700
                  }}
                >
                  {activeArticle.category}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {activeArticle.date} • {activeArticle.readTime}
                </span>
              </div>

              <button 
                onClick={() => setActiveArticle(null)}
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

            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '20px' }}>
              {activeArticle.title}
            </h2>

            {/* Author bar */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(5, 8, 17, 0.4)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: '#ffffff'
                  }}
                >
                  {activeArticle.author.avatarInitials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                    {activeArticle.author.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {activeArticle.author.role}
                  </div>
                </div>
              </div>

              <button 
                onClick={handleShare}
                className="btn-outline"
                style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              >
                <Share2 size={14} />
                <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>

            {/* Article Content Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              {activeArticle.content.map((p, pIdx) => (
                <p 
                  key={pIdx} 
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div 
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0, 102, 255, 0.08)',
                border: '1px solid rgba(0, 102, 255, 0.25)',
                marginBottom: '32px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '10px' }}>
                <Sparkles size={16} /> Executive Takeaway
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.6 }}>
                Organizations that bridge high-frequency IoT sensor telemetry with modern deep-learning computer vision models reduce false-alarm overhead by upwards of 80% while establishing irrefutable audit trails for compliance.
              </p>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {activeArticle.tags.map((t, idx) => (
                  <span key={idx} style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    #{t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  className="btn-primary"
                  onClick={() => {
                    const topic = activeArticle.title;
                    setActiveArticle(null);
                    onRequestQuote(`Inquiry regarding whitepaper: ${topic}`);
                  }}
                >
                  <span>Request Architectural Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
