'use client'

import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

export default function BrandIdentitySection() {
  return (
    <section id="identity" className="section-padding" style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }} className="identity-grid">
          <style>{`
            @media (max-width: 992px) {
              .identity-grid { grid-template-columns: 1fr !important; gap: 48px; }
              .identity-content { text-align: center; order: 2; }
              .identity-visual { order: 1; }
              .identity-label { justify-content: center !important; }
            }
          `}</style>

          {/* Visual Column */}
          <div style={{ position: 'relative' }} className="animate-fade-in-up identity-visual">
            <div 
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '40px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px'
              }}
            >
              {/* Shirt Visual */}
              <div style={{ position: 'relative', width: '100%', height: '100%', transform: 'scale(1.1)' }}>
                <Image
                  src="/images/tshirt.jpeg"
                  alt="Kiswa Global Staff Identity"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              {/* Premium Floating Badge */}
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                background: 'var(--brand-blue-deep)',
                color: 'white',
                padding: '16px 24px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                boxShadow: '0 10px 30px rgba(15, 51, 112, 0.3)'
              }}>
                Staff Identity
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-in-up identity-content">
            <div className="identity-label" style={{ display: 'flex' }}>
              <SectionLabel label="Brand Standards" color="var(--brand-blue)" />
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--brand-blue-deep)', marginBottom: '32px', fontWeight: 900 }}>
              Professional Pride in <br />
              <span className="text-gradient">Every Handshake.</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', marginBottom: '24px', lineHeight: 1.8, fontWeight: 500 }}>
              At Kiswa Global, our brand is more than just a logo — it's a commitment to professional excellence that our team carries every day.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
              Our staff identity reflects the same global standards we apply to our food products. Punctuality, cleanliness, and respect are the hallmarks of our distribution network across Saudi Arabia.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { t: 'Uniformity', d: 'Standardized global image' },
                { t: 'Reliability', d: 'Trusted supply network' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '20px', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid rgba(15, 51, 112, 0.05)' }}>
                  <p style={{ color: 'var(--brand-blue)', fontWeight: 800, fontSize: '15px', marginBottom: '4px' }}>{item.t}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
