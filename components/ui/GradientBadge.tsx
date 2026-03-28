'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark'
}

export function GradientBadge({ children, className, variant = 'light' }: GradientBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border',
        variant === 'light'
          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
          : 'bg-white/10 text-white border-white/20',
        className
      )}
    >
      {children}
    </motion.span>
  )
}
