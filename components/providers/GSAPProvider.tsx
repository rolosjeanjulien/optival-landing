'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.config({ limitCallbacks: true })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return <>{children}</>
}
