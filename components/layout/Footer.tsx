'use client'

import Image from 'next/image'
import { COMPANY, NAV_LINKS, PRODUCTS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: 'white', padding: '120px 0 60px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '80px', marginBottom: '80px' }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px'
              }}>
                <Image
                  src="/images/logo-exact.png"
                  alt="Kiswa Global"
                  width={64}
                  height={64}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    mixBlendMode: 'screen', // Hide white background on dark footer
                    filter: 'brightness(1.5)'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '20px', color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  KISWA GLOBAL
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '11px', letterSpacing: '0.12em', color: '#4ade80', textTransform: 'uppercase', marginTop: '4px' }}>
                  Foodstuff Distribution
                </p>
              </div>
            </div>
            
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.8, marginBottom: '32px', maxWidth: '300px' }}>
              Your premier partner for high-quality foodstuff retail, wholesale, and global distribution across the Kingdom and beyond.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease' }} className="hover:bg-brand-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease' }} className="hover:bg-brand-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s ease' }} className="hover:bg-brand-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', letterSpacing: '0.02em' }}>Quick Navigation</h4>
            <div style={{ display: 'grid', gap: '16px' }}>
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }} className="hover:text-brand-green">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', letterSpacing: '0.02em' }}>Core Categories</h4>
            <div style={{ display: 'grid', gap: '16px' }}>
              {PRODUCTS.slice(0, 5).map(product => (
                <a key={product.id} href="#products" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.3s ease' }} className="hover:text-brand-green">
                  {product.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', letterSpacing: '0.02em' }}>Contact Details</h4>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#109945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5 }}>{COMPANY.location}</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#109945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{COMPANY.phone}</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#109945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{COMPANY.email}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
            © {new Date().getFullYear()} Kiswa Global Company. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }} className="hover:text-white">Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }} className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
