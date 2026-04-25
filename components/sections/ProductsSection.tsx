'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { PRODUCTS } from '@/lib/constants'

export default function ProductsSection() {
  const getProductIcon = (id: string) => {
    switch(id) {
      case 'rice': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="2" fill="var(--brand-green)" opacity="0.3"/>
        </svg>
      )
      case 'spices': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3" fill="var(--brand-green)" opacity="0.2"/>
        </svg>
      )
      case 'oils': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 20 18 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="2" fill="var(--brand-green)" opacity="0.4"/>
        </svg>
      )
      case 'dryfoods': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="13" y="13" width="4" height="4" rx="1" fill="var(--brand-green)" opacity="0.3"/>
        </svg>
      )
      case 'frozen': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M2 12H22M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="var(--brand-green)" opacity="0.1"/>
        </svg>
      )
      case 'grains': return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 18V12M12 12L15 9M12 12L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 6V2" stroke="var(--brand-green)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        </svg>
      )
      default: return null
    }
  }

  return (
    <section id="products" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', marginBottom: '64px' }} className="animate-fade-in-up">
          <div style={{ maxWidth: '600px' }}>
            <SectionLabel label="Our Portfolio" color="var(--brand-blue)" />
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--brand-blue-deep)', marginBottom: '16px' }}>
              Premium Food <span className="text-gradient">Categories</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6 }}>
              We source and distribute only the finest quality ingredients, ensuring excellence in every delivery for our global partners.
            </p>
          </div>
          <div style={{ width: '100%', maxWidth: 'max-content' }}>
            <Button variant="secondary" href="#contact">
              Download Catalog →
            </Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="glass-card hover-lift animate-fade-in-up"
              style={{
                padding: '48px 32px',
                textAlign: 'center',
                animationDelay: `${i * 100}ms`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Luxury Accent */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, transparent 50%, var(--brand-green-glow) 100%)',
                opacity: 0.5
              }} />

              <div
                className="product-icon"
                style={{ 
                  display: 'inline-flex', 
                  width: '80px',
                  height: '80px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '24px',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--brand-blue)',
                  marginBottom: '32px',
                  boxShadow: 'inset 0 2px 4px rgba(15, 51, 112, 0.05)',
                  transition: 'all 0.4s ease'
                }}
              >
                {getProductIcon(product.id)}
              </div>

              <h3 style={{ fontSize: '22px', color: 'var(--brand-blue-deep)', marginBottom: '8px', fontWeight: 800 }}>
                {product.name}
              </h3>

              <p style={{ fontFamily: 'Tajawal, sans-serif', fontSize: '16px', color: 'var(--brand-green)', fontWeight: 700, direction: 'rtl', marginBottom: '20px' }}>
                {product.nameAr}
              </p>

              <div style={{ width: '40px', height: '2px', background: 'var(--brand-blue-light)', margin: '0 auto 20px' }} />

              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>
                {product.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bulk Order CTA */}
        <div
          className="animate-fade-in-up"
          style={{
            borderRadius: '40px',
            padding: '80px 40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--brand-blue-deep) 0%, #1A4F9C 100%)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-premium)',
          }}
        >
          {/* Decorative Glow */}
          <div style={{ 
            position: 'absolute', 
            top: '-20%', 
            right: '-10%', 
            width: '400px', 
            height: '400px', 
            background: 'radial-gradient(circle, rgba(16, 153, 69, 0.15) 0%, transparent 70%)',
            zIndex: 0
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '20px' }}>
              Wholesale & Institutional Supply
            </p>
            <h3 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'white', marginBottom: '24px', fontWeight: 900 }}>
              Request a Bulk Order Quote
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', marginBottom: '48px', maxWidth: '650px', margin: '0 auto 48px', lineHeight: 1.8 }}>
              Supplying supermarkets, luxury hotels, and high-end restaurants with consistent quality and competitive global pricing.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }} className="cta-buttons">
              <style>{`
                @media (max-width: 640px) {
                  .cta-buttons { flex-direction: column; width: 100%; }
                  .cta-buttons > * { width: 100% !important; }
                }
              `}</style>
              <Button variant="primary" size="lg" href="#contact">
                Get Custom Quote
              </Button>
              <Button variant="ghost" size="lg" href={`https://wa.me/966553806731`} target="_blank" rel="noopener noreferrer">
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
