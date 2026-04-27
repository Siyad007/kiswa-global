'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section 
      id="home" 
      style={{ 
        position: 'relative', 
        minHeight: 'clamp(600px, 100vh, 900px)', 
        display: 'flex', 
        alignItems: 'center', 
        background: '#0F172A',
        overflow: 'hidden' 
      }}
    >
      {/* Cinematic Background Layer */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 1,
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(15, 51, 112, 0.95) 0%, rgba(16, 153, 69, 0.4) 100%)',
          zIndex: 2,
        }} />
        <Image
          src="/images/logo-banner.jpeg"
          alt="Kiswa Global Background"
          fill
          style={{
            objectFit: 'cover',
            mixBlendMode: 'overlay',
            opacity: 0.6,
            filter: 'brightness(0.8)',
          }}
          priority
        />
      </div>

      {/* Large diagonal stripe accent */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50%',
          height: '120%',
          background: 'linear-gradient(135deg, transparent 0%, rgba(16, 153, 69, 0.1) 100%)',
          transform: 'rotate(-15deg)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Right side truck visual — desktop only */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 60,
          width: '42%',
          zIndex: 2,
          opacity: 0.35,
          mixBlendMode: 'multiply',
          maskImage: 'radial-gradient(ellipse at center right, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center right, black 20%, transparent 80%)',
        }}
        className="hero-truck-bg"
      >
        <Image
          src="/images/brand/truck.jpeg"
          alt="Kiswa Global distribution truck"
          width={700}
          height={400}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="container animate-float" style={{ position: 'relative', zIndex: 10, paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '680px' }} className="hero-content-wrapper">
          <style>{`
            @media (max-width: 768px) {
              .hero-content-wrapper { text-align: center; margin: 0 auto; }
              .hero-tagline { text-align: center !important; }
            }
          `}</style>

          {/* Branch badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50px',
              padding: '8px 18px',
              marginBottom: '32px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#12B050', display: 'block' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
              RETAIL · WHOLESALE · DISTRIBUTION
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(42px, 6.5vw, 72px)',
              color: 'white',
              lineHeight: 1.08,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Global Quality.
            <br />
            <span style={{ color: '#12B050' }}>Trusted Supply.</span>
          </h1>

          {/* Arabic tagline */}
          <p
            style={{
              fontFamily: 'Tajawal, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(20px, 3vw, 24px)',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '24px',
              direction: 'rtl',
            }}
            className="hero-tagline"
          >
            {COMPANY.taglineAr}
          </p>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '18px',
              lineHeight: 1.75,
              marginBottom: '48px',
              maxWidth: '560px',
            }}
          >
            Kiswa Global Company delivers premium food products across Saudi Arabia and beyond —
            from source to supply, with precision, speed, and unwavering trust.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '64px' }} className="hero-ctas">
            <style>{`
              @media (max-width: 640px) {
                .hero-ctas { flex-direction: column !important; width: 100%; }
                .hero-ctas > * { width: 100% !important; }
                .hero-stats { justify-content: center !important; }
              }
            `}</style>
            <Button variant="primary" size="lg" href="#products">
              View Products
            </Button>
            <Button variant="ghost" size="lg" href="#contact">
              Contact Us
            </Button>
          </div>

          {/* Stats bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }} className="hero-stats">
            {[
              { val: '500+', label: 'Products', labelAr: 'منتج' },
              { val: '15+', label: 'Countries', labelAr: 'دولة' },
              { val: '1000+', label: 'Clients', labelAr: 'عميل' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'left' }}>
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(28px, 3.5vw, 40px)',
                    color: 'white',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {s.val}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)', fontSize: '13px', fontWeight: 600 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 64L1440 64L1440 24C1320 56 1080 8 720 32C360 56 120 12 0 40L0 64Z" fill="#ffffff"/>
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-truck-bg { display: none; }
        }
      `}</style>
    </section>
  )
}
