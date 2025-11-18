'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, Code2, Database, Smartphone, Music, Gamepad2, Palette } from 'lucide-react'
import { RotatingCube } from '@/components/rotating-cube'
import { SkillBar } from '@/components/skill-bar'
import { ProjectCard } from '@/components/project-card'
import { InterestCard } from '@/components/interest-card'

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const skills = [
    { name: 'React / React Native', level: 90, icon: <Code2 className="w-4 h-4" /> },
    { name: 'Frontend Development', level: 85, icon: <Code2 className="w-4 h-4" /> },
    { name: 'Backend Development', level: 80, icon: <Database className="w-4 h-4" /> },
    { name: 'Databases', level: 75, icon: <Database className="w-4 h-4" /> },
    { name: 'Mobile Development', level: 85, icon: <Smartphone className="w-4 h-4" /> },
  ]

  const projects = [
    {
      title: 'Módulos CCB',
      description: 'Desarrollo de módulos personalizados para la Cámara de Comercio de Bogotá, implementando soluciones frontend y backend.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      highlights: [
        'Arquitectura modular escalable',
        'Integración con sistemas legacy',
        'Optimización de rendimiento',
        'Testing automatizado'
      ]
    },
    {
      title: 'Sistema de Gestión Empresarial',
      description: 'Plataforma completa para la gestión de procesos empresariales con dashboard interactivo y reportes en tiempo real.',
      tags: ['React Native', 'Express', 'MongoDB'],
      highlights: [
        'Dashboard dinámico',
        'Reportes en tiempo real',
        'App móvil nativa',
        'Autenticación JWT'
      ]
    },
    {
      title: 'Portafolio de Proyectos',
      description: 'Desarrollo de múltiples soluciones tecnológicas enfocadas en experiencia de usuario y rendimiento.',
      tags: ['TypeScript', 'Next.js', 'Redux'],
      highlights: [
        'Diseño responsive',
        'Animaciones fluidas',
        'State management avanzado',
        'Integración API REST'
      ]
    }
  ]

  const interests = [
    { 
      name: 'Diseño Gráfico', 
      icon: <Palette className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500',
      description: 'UI/UX Design'
    },
    { 
      name: 'Música', 
      icon: <Music className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Producción Musical'
    },
    { 
      name: 'Videojuegos', 
      icon: <Gamepad2 className="w-4 h-4" />,
      color: 'from-red-500 to-orange-500',
      description: 'Gaming & Dev'
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">KA</div>
          <div className="flex gap-6">
            <a href="#inicio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Inicio</a>
            <a href="#habilidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Habilidades</a>
            <a href="#proyectos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Proyectos</a>
            <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm">Hola, soy</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Keneth Steven <br />
                <span className="text-primary">Arciniegas Rodriguez</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Estudiante de <span className="text-foreground font-semibold">Ingeniería de Software</span> con enfoque en desarrollo frontend (React/React Native), backend y bases de datos.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-xs">
              {interests.map((interest) => (
                <InterestCard key={interest.name} interest={interest} />
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contacto">Contactar</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#proyectos">Ver Proyectos</a>
              </Button>
            </div>
          </div>
          
          {/* Interactive 3D Element */}
          <div className="flex justify-center">
            <RotatingCube />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-muted-foreground text-lg">Tecnologías y herramientas que domino</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground text-lg">Trabajo reciente y colaboraciones</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isExpanded={expandedProject === index}
                onToggle={() => setExpandedProject(expandedProject === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground text-lg">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          </div>
          <Card className="p-8 space-y-6 bg-card border-border">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <Button
                    variant="link"
                    className="text-foreground font-semibold p-0 h-auto hover:text-primary"
                    asChild
                  >
                    <a href="tel:3138810360">313 881 0360</a>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email Institucional</p>
                  <Button
                    variant="link"
                    className="text-foreground font-semibold p-0 h-auto hover:text-primary text-left"
                    asChild
                  >
                    <a href="mailto:karciniegas@uniempresarial.edu.co">karciniegas@uniempresarial.edu.co</a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2025 Keneth Steven Arciniegas Rodriguez. Ingeniero de Software.</p>
        </div>
      </footer>
    </div>
  )
}
