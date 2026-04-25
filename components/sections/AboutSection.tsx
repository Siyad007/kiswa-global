'use client'

import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { STATS } from '@/lib/constants'

export default function AboutSection() {
  const getStatIcon = (id: string) => {
    switch (id) {
      case 'experience':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        )
      case 'clients':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      case 'products':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }} className="about-grid">
          <style>{`
            @media (max-width: 992px) {
              .about-grid { grid-template-columns: 1fr !important; gap: 48px; }
              .about-content { text-align: center; }
              .about-label { justify-content: center !important; }
              .about-stats { justify-content: center; text-align: left; }
            }
          `}</style>
          
          {/* Image Column */}
          <div style={{ position: 'relative' }} className="animate-fade-in-up">
            <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', background: 'var(--bg-secondary)' }}>
              <Image
                src="/images/office-image.jpeg"
                alt="Kiswa Global Headquarters"
                width={600}
                height={700}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 51, 112, 0.4), transparent)' }} />
            </div>
            
            {/* Experience Badge */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: 'var(--brand-green)',
                color: 'white',
                padding: '24px 32px',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(16, 153, 69, 0.3)',
                textAlign: 'center',
                zIndex: 5
              }}
            >
              <p style={{ fontSize: '32px', fontWeight: 900, lineHeight: 1 }}>10+</p>
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>Years Excellence</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-in-up about-content">
            <div className="about-label" style={{ display: 'flex' }}>
              <SectionLabel label="Corporate Profile" color="var(--brand-blue)" />
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--brand-blue-deep)', marginBottom: '24px', fontWeight: 900 }}>
              Your Bridge to <br />
              <span className="text-gradient">Global Food Quality.</span>
            </h2>
            
            <p style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '24px', lineHeight: 1.8, fontWeight: 500 }}>
              Based in Saudi Arabia, Kiswa Global Company has established itself as a leading force in the international foodstuff trade, import, and distribution sector.
            </p>
            
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
              We specialize in sourcing premium agricultural products, spices, and processed foods from reliable global partners. Our commitment to rigorous quality control and logistics efficiency makes us the preferred choice for major retailers and industrial institutions across the Kingdom.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px' }} className="about-stats">
              {STATS.map((stat, i) => (
                <div key={i} className="hover-lift" style={{ 
                  background: 'var(--bg-secondary)', 
                  padding: '24px', 
                  borderRadius: '20px',
                  border: '1px solid rgba(15, 51, 112, 0.05)'
                }}>
                  <div style={{ color: 'var(--brand-blue)', marginBottom: '16px' }}>
                    {getStatIcon(stat.id)}
                  </div>
                  <h4 style={{ fontSize: '24px', color: 'var(--brand-blue-deep)', fontWeight: 800, marginBottom: '4px' }}>{stat.value}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
