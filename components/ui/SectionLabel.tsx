interface SectionLabelProps {
  label: string
  center?: boolean
  color?: string
}

export default function SectionLabel({ label, center = false, color = 'var(--brand-green)' }: SectionLabelProps) {
  return (
    <div 
      className="animate-fade-in-up"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: center ? 'center' : 'flex-start',
        gap: '12px', 
        marginBottom: '20px' 
      }}
    >
      <div style={{ width: '32px', height: '2px', background: color, borderRadius: '4px' }} />
      <span
        style={{
          fontFamily: 'Montserrat, sans-serif',
          color: color,
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  )
}
