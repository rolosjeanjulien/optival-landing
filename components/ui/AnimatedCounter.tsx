'use client'

import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const suffixRef = useRef<HTMLSpanElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    const suffixEl = suffixRef.current
    if (!el) return

    if (reducedMotion) {
      el.textContent = `${prefix}${value}`
      if (suffixEl) suffixEl.style.opacity = '1'
      return
    }

    const obj = { val: 0 }

    if (suffixEl) {
      gsap.set(suffixEl, { opacity: 0 })
    }

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration,
          delay,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.val)}`
          },
          onComplete: () => {
            if (suffixEl) {
              gsap.to(suffixEl, { opacity: 1, duration: 0.3 })
            }
          },
        })
      },
    })
  }, [value, suffix, prefix, duration, delay, reducedMotion])

  return (
    <span className="inline-flex items-baseline gap-0.5">
      <span ref={ref}>{prefix}0</span>
      <span ref={suffixRef} style={{ opacity: reducedMotion ? 1 : 0 }}>
        {suffix}
      </span>
    </span>
  )
}
