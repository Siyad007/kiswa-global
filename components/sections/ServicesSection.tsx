'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import { SERVICES } from '@/lib/constants'

export default function ServicesSection() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'retail':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )
      case 'wholesale':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        )
      case 'import':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        )
      case 'distribution':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }} className="animate-fade-in-up">
          <SectionLabel label="Our Expertise" color="var(--brand-green)" />
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--brand-blue-deep)', marginBottom: '24px' }}>
            Comprehensive Solutions for <span className="text-gradient">Food Industry.</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
            Empowering businesses with reliable supply chains, high-quality sourcing, and efficient distribution networks.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px',
          justifyContent: 'center'
        }}>
          {SERVICES.map((service, i) => (
            <div 
              key={service.id} 
              className="glass-card hover-lift animate-fade-in-up"
              style={{ 
                padding: '48px 32px',
                textAlign: 'center',
                animationDelay: `${i * 150}ms`
              }}
            >
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: 'var(--brand-blue-light)', 
                borderRadius: '16px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--brand-blue)',
                marginBottom: '28px',
              }}>
                {getServiceIcon(service.id)}
              </div>
              <h3 style={{ fontSize: '22px', color: 'var(--brand-blue-deep)', marginBottom: '16px' }}>{service.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
