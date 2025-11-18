'use client'

import { Card } from '@/components/ui/card'

interface InterestCardProps {
  interest: {
    name: string
    icon: React.ReactNode
    color: string
    description: string
  }
}

export function InterestCard({ interest }: InterestCardProps) {
  return (
    <Card
      className="relative overflow-hidden border-2 w-20 h-20"
    >
      {/* Gradient Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-10`}
      />
      
      {/* Content */}
      <div className="relative p-2 flex flex-col items-center justify-center gap-1.5 h-full">
        <div>
          {interest.icon}
        </div>
        <div className="text-center">
          <p className="text-[10px] font-semibold leading-tight">{interest.name}</p>
        </div>
      </div>
    </Card>
  )
}
