'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/constants'

export default function ContactSection() {
  const contactInfo = [
    {
      id: 'location',
      label: 'Headquarters',
      value: COMPANY.location,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      id: 'phone',
      label: 'Phone & WhatsApp',
      value: COMPANY.phone,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      id: 'email',
      label: 'Email Inquiry',
      value: COMPANY.email,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
          
          {/* Info Column */}
          <div className="animate-fade-in-up">
            <SectionLabel label="Contact Us" color="var(--brand-blue)" />
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--brand-blue-deep)', marginBottom: '24px' }}>
              Let's Start a <span className="text-gradient">Partnership.</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '48px', lineHeight: 1.8 }}>
              Reach out to our dedicated team for wholesale inquiries, distribution partnerships, or bulk order requests.
            </p>

            <div style={{ display: 'grid', gap: '32px' }}>
              {contactInfo.map((info) => (
                <div key={info.id} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: 'var(--brand-blue-light)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--brand-blue)',
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{info.label}</p>
                    <p style={{ fontSize: '18px', color: 'var(--brand-blue-deep)', fontWeight: 600 }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="animate-fade-in-up">
            <div className="glass-card" style={{ padding: '48px', boxShadow: 'var(--shadow-premium)' }}>
              <form style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--brand-blue-deep)' }}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    style={{ 
                      padding: '16px', 
                      borderRadius: '12px', 
                      border: '1px solid var(--bg-tertiary)', 
                      background: 'var(--bg-secondary)',
                      fontFamily: 'Inter, sans-serif'
                    }} 
                  />
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--brand-blue-deep)' }}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    style={{ 
                      padding: '16px', 
                      borderRadius: '12px', 
                      border: '1px solid var(--bg-tertiary)', 
                      background: 'var(--bg-secondary)',
                      fontFamily: 'Inter, sans-serif'
                    }} 
                  />
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--brand-blue-deep)' }}>Inquiry Subject</label>
                  <select 
                    style={{ 
                      padding: '16px', 
                      borderRadius: '12px', 
                      border: '1px solid var(--bg-tertiary)', 
                      background: 'var(--bg-secondary)',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    <option>Wholesale Order</option>
                    <option>Global Distribution</option>
                    <option>Institutional Supply</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--brand-blue-deep)' }}>Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your requirements..."
                    style={{ 
                      padding: '16px', 
                      borderRadius: '12px', 
                      border: '1px solid var(--bg-tertiary)', 
                      background: 'var(--bg-secondary)',
                      fontFamily: 'Inter, sans-serif'
                    }} 
                  />
                </div>
                <Button variant="primary" size="lg" style={{ width: '100%', marginTop: '8px' }}>
                  Send Message
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
