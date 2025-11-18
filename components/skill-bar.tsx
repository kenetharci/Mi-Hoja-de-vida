'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface SkillBarProps {
  name: string
  level: number
  icon: React.ReactNode
  delay?: number
}

export function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary">{icon}</div>
          <span className="font-semibold text-foreground">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            width: isVisible ? `${level}%` : '0%'
          }}
        />
      </div>
    </div>
  )
}
