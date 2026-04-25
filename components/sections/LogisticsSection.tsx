'use client'

import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { LOGISTICS_FEATURES } from '@/lib/constants'

export default function LogisticsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'fleet':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        )
      case 'tracking':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        )
      case 'safety':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="logistics" className="section-padding" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }} className="logistics-grid">
          <style>{`
            @media (max-width: 992px) {
              .logistics-grid { grid-template-columns: 1fr !important; gap: 48px; }
              .logistics-content { text-align: center; }
              .logistics-label { justify-content: center !important; }
              .logistics-feature { text-align: left; }
            }
          `}</style>
          
          {/* Content Column */}
          <div className="animate-fade-in-up logistics-content">
            <div className="logistics-label" style={{ display: 'flex' }}>
              <SectionLabel label="Operations & Logistics" color="var(--brand-green)" />
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--brand-blue-deep)', marginBottom: '24px', fontWeight: 900 }}>
              Seamless Supply Chain, <br />
              <span className="text-gradient">Reliable Delivery.</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
              Our logistics infrastructure is designed for high-volume foodstuff distribution with precision. We ensure freshness and punctuality across the Kingdom.
            </p>

            <div style={{ display: 'grid', gap: '20px' }}>
              {LOGISTICS_FEATURES.map((feature, i) => (
                <div 
                  key={i} 
                  className="glass-card hover-lift logistics-feature"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '24px', 
                    padding: '24px',
                    borderRadius: '20px'
                  }}
                >
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    background: 'var(--brand-blue-light)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--brand-blue)',
                    flexShrink: 0
                  }}>
                    {getIcon(feature.id)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', color: 'var(--brand-blue-deep)', marginBottom: '4px', fontWeight: 800 }}>{feature.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div style={{ position: 'relative' }} className="animate-fade-in-up">
            <div 
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: '32px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--brand-blue-deep) 0%, #1A4F9C 100%)',
                boxShadow: '0 30px 60px -15px rgba(15, 51, 112, 0.4)',
              }}
            >
              <Image
                src="/images/truck-1.jpeg"
                alt="Kiswa Global Logistics"
                fill
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
              />
              
              {/* Overlay Badge */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
                padding: '16px 24px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.9, marginBottom: '4px', fontWeight: 700 }}>Fleet Status</p>
                <p style={{ fontSize: '18px', fontWeight: 800 }}>Active Nationwide</p>
              </div>
            </div>

            {/* Fleet Quote Strip */}
            <div 
              style={{ 
                marginTop: '32px', 
                position: 'relative', 
                height: '180px', 
                borderRadius: '24px', 
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)'
              }}
            >
              <Image
                src="/images/logo-banner.jpeg"
                alt="Fleet Background"
                fill
                style={{ opacity: 0.15, filter: 'grayscale(1)', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px'
              }}>
                <h3 style={{ 
                  color: 'var(--brand-blue-deep)', 
                  fontSize: 'clamp(20px, 3.5vw, 28px)', 
                  textAlign: 'center',
                  opacity: 0.8,
                  fontStyle: 'italic',
                  fontWeight: 700,
                  lineHeight: 1.4
                }}>
                  "Driven by Commitment, <br /> Delivering Excellence."
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
