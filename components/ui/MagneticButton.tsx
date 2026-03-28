'use client'

import { motion } from 'framer-motion'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  href?: string
}

export function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useMagneticEffect<HTMLButtonElement>(0.3)

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  const variants = {
    primary: 'relative overflow-hidden bg-indigo-500 text-white shimmer-button hover:bg-indigo-600',
    ghost: 'border border-white/30 text-white hover:bg-white/10',
  }

  const inner = (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'inline-flex items-center gap-2 font-semibold rounded-button transition-colors',
        sizes[size],
        variants[variant],
        className
      )}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href}>
        {inner}
      </a>
    )
  }

  return inner
}
