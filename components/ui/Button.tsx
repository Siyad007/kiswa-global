'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactNode
  target?: string
  rel?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  style,
  icon,
  target,
  rel,
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2 font-bold rounded-[14px]
    transition-all duration-300 cursor-pointer border-2
    hover:scale-[1.03] active:scale-[0.97] select-none
  `

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg',
  }

  const variants: Record<string, string> = {
    primary: `
      bg-[var(--brand-green)] border-[var(--brand-green)] text-white
      hover:bg-[var(--brand-green-deep)] hover:border-[var(--brand-green-deep)]
      shadow-[0_10px_25px_-5px_rgba(16,153,69,0.3)]
    `,
    secondary: `
      bg-transparent border-[var(--brand-blue)] text-[var(--brand-blue)]
      hover:bg-[var(--brand-blue)] hover:text-white
      shadow-[0_10px_20px_-10px_rgba(26,79,156,0.2)]
    `,
    ghost: `
      bg-white/10 border-white/20 text-white backdrop-blur-md
      hover:bg-white/20 hover:border-white/40
    `,
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} style={style} target={target} rel={rel}>
        {icon && <span>{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} style={style}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
