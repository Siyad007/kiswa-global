'use client'

import { COMPANY } from '@/lib/constants'
import { useEffect, useState } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const url = `https://wa.me/${COMPANY.whatsapp}?text=Hello%20Kiswa%20Global%2C%20I%20would%20like%20to%20inquire%20about%20your%20foodstuff%20products.`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: '#25D366',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '50px',
        boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
        textDecoration: 'none',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = '0 6px 28px rgba(37,211,102,0.65)'
        el.style.transform = 'translateY(-2px) scale(1.04)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)'
        el.style.transform = 'translateY(0) scale(1)'
      }}
    >
      {/* Pulse ring */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50px',
          border: '2px solid rgba(37,211,102,0.5)',
          animation: 'pulse-ring 2s ease-out infinite',
        }}
      />
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
      `}</style>

      {/* WhatsApp SVG */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.057 23.492a.5.5 0 00.614.644l5.796-1.52A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.524-5.183-1.434l-.36-.216-3.74.981.998-3.648-.235-.374A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>

      <span>Quick Order</span>
    </a>
  )
}
