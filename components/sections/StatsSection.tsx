'use client'

import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'

export default function StatsSection() {
  const getStatIcon = (id: string) => {
    switch (id) {
      case 'products':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        )
      case 'clients':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      case 'experience':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, var(--brand-blue-deep) 0%, var(--brand-blue) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Cinematic Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px',
        }}>
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              className="glass-card hover-lift animate-fade-in-up"
              style={{
                textAlign: 'center',
                padding: '48px 32px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                animationDelay: `${i * 100}ms`
              }}
            >
              <div style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                {getStatIcon(stat.id)}
              </div>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p style={{ 
                fontFamily: 'Inter, sans-serif', 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: '14px', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.15em' 
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
