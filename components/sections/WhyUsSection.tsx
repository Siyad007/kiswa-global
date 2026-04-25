'use client'

import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { WHY_US, COMPANY } from '@/lib/constants'

export default function WhyUsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'quality':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )
      case 'delivery':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        )
      case 'price':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        )
      case 'support':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="why-us" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Credential Banner */}
        <div 
          className="animate-fade-in-up"
          style={{ 
            position: 'relative', 
            width: '100%', 
            minHeight: '280px', 
            borderRadius: '32px', 
            overflow: 'hidden', 
            marginBottom: '64px',
            boxShadow: 'var(--shadow-premium)',
            background: 'var(--brand-blue-deep)'
          }}
        >
          <Image
            src="/images/logo-banner.jpeg"
            alt="Kiswa Credentials"
            fill
            style={{ objectFit: 'cover', opacity: 0.35, filter: 'brightness(0.6)' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(15, 51, 112, 0.95), transparent)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '48px'
          }} className="banner-content">
            <style>{`
              @media (max-width: 768px) {
                .banner-content { padding: 32px !important; text-align: center; align-items: center; }
                .banner-cr-row { justify-content: center !important; }
              }
            `}</style>
            <p style={{ color: 'var(--brand-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '12px', marginBottom: '16px' }}>
              Licensed & Registered
            </p>
            <h3 style={{ color: 'white', fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '24px', fontWeight: 900 }}>
              Official Commerce Registration
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }} className="banner-cr-row">
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Registration No.</p>
                <p style={{ color: 'white', fontSize: '24px', fontWeight: 800, fontFamily: 'monospace', letterSpacing: '0.05em' }}>{COMPANY.cr}</p>
              </div>
              <div style={{ padding: '12px 28px', background: 'rgba(16, 153, 69, 0.25)', border: '1px solid var(--brand-green)', borderRadius: '16px' }}>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 800, fontFamily: 'Tajawal, sans-serif', direction: 'rtl' }}>
                  معتمد ومسجل رسميًا
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {WHY_US.map((item, i) => (
            <div 
              key={item.id} 
              className="glass-card hover-lift animate-fade-in-up"
              style={{ padding: '48px 32px', animationDelay: `${i * 100}ms` }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--brand-blue-light)', 
                borderRadius: '18px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--brand-blue)',
                marginBottom: '28px'
              }}>
                {getIcon(item.id)}
              </div>
              <h4 style={{ fontSize: '22px', color: 'var(--brand-blue-deep)', marginBottom: '16px', fontWeight: 800 }}>{item.title}</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
