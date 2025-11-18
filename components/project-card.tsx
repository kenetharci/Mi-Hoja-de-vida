'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  title: string
  description: string
  tags: string[]
  highlights: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
  isExpanded: boolean
  onToggle: () => void
}

export function ProjectCard({ project, index, isExpanded, onToggle }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer',
        isExpanded && 'ring-2 ring-primary'
      )}
      onClick={onToggle}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {isExpanded && (
          <div className="pt-4 border-t border-border space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-sm font-semibold text-primary">Características:</p>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          className="w-full mt-2 text-primary hover:text-primary hover:bg-primary/10"
          onClick={(e) => {
            e.stopPropagation()
            onToggle()
          }}
        >
          {isExpanded ? (
            <>
              Ver menos <ChevronUp className="ml-2 w-4 h-4" />
            </>
          ) : (
            <>
              Ver más <ChevronDown className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}
