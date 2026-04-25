'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { COMPANY, NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15, 51, 112, 0.08)' : 'none',
          boxShadow: scrolled ? '0 10px 40px -10px rgba(15, 51, 112, 0.1)' : 'none',
          height: '80px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Logo */}
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', transition: 'transform 0.3s ease' }} className="hover:scale-105">
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '14px', 
                overflow: 'hidden', 
                flexShrink: 0, 
                background: 'transparent',
              }}>
                <Image
                  src="/images/logo-exact.png"
                  alt="Kiswa Global"
                  width={56}
                  height={56}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    mixBlendMode: scrolled ? 'multiply' : 'normal',
                    filter: scrolled ? 'none' : 'brightness(1.1) drop-shadow(0 0 12px rgba(255,255,255,0.2))',
                  }}
                  priority
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  fontSize: '20px',
                  lineHeight: 1,
                  color: scrolled ? '#0F3370' : '#FFFFFF',
                  transition: 'color 0.4s ease',
                  letterSpacing: '-0.02em',
                }}>
                  KISWA GLOBAL
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: scrolled ? '#109945' : 'rgba(255,255,255,0.9)',
                  transition: 'color 0.4s ease',
                  marginTop: '4px',
                }}>
                  Foodstuff Distribution
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav style={{ display: 'none', alignItems: 'center', gap: '40px' }} className="desktop-nav">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: scrolled ? '#1E293B' : 'rgba(255,255,255,0.95)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = scrolled ? '#109945' : '#FFFFFF'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = scrolled ? '#1E293B' : 'rgba(255,255,255,0.95)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  {link.label}
                </a>
              ))}

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #109945 0%, #0A7535 100%)',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: '14px',
                  padding: '14px 28px',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: '0 10px 20px -5px rgba(16, 153, 69, 0.3)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-3px) scale(1.05)'
                  el.style.boxShadow = '0 15px 30px -5px rgba(16, 153, 69, 0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0) scale(1)'
                  el.style.boxShadow = '0 10px 20px -5px rgba(16, 153, 69, 0.3)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.057 23.492a.5.5 0 00.614.644l5.796-1.52A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.524-5.183-1.434l-.36-.216-3.74.981.998-3.648-.235-.374A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp Order
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                padding: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              className="mobile-hamburger"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '2px',
                    background: scrolled ? '#1A1A1A' : 'white',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)'
                      : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 39,
          background: 'rgba(15,51,112,0.97)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
        className="mobile-menu-overlay"
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '28px',
              color: 'white',
              textDecoration: 'none',
              padding: '12px 40px',
              borderRadius: '12px',
              transition: 'all 0.2s ease',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '16px',
            background: '#109945',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            padding: '14px 36px',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
        >
          📱 WhatsApp Order
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-hamburger { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
