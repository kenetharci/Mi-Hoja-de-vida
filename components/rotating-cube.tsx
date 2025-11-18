'use client'

import { useEffect, useRef, useState } from 'react'

export function RotatingCube() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef<number>()
  const rotationRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const size = 80

    // 3D Cube vertices
    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], // Front face
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]      // Back face
    ]

    // Cube edges
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Front face
      [4, 5], [5, 6], [6, 7], [7, 4], // Back face
      [0, 4], [1, 5], [2, 6], [3, 7]  // Connecting edges
    ]

    function rotateX(point: number[], angle: number): number[] {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return [
        point[0],
        point[1] * cos - point[2] * sin,
        point[1] * sin + point[2] * cos
      ]
    }

    function rotateY(point: number[], angle: number): number[] {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return [
        point[0] * cos + point[2] * sin,
        point[1],
        -point[0] * sin + point[2] * cos
      ]
    }

    function project(point: number[]): [number, number] {
      const scale = 200 / (200 + point[2])
      return [
        centerX + point[0] * size * scale,
        centerY + point[1] * size * scale
      ]
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const rotatedVertices = vertices.map(vertex => {
        let point = vertex
        point = rotateX(point, rotationRef.current.x)
        point = rotateY(point, rotationRef.current.y)
        return point
      })

      const projectedVertices = rotatedVertices.map(project)

      // Draw edges
      ctx.strokeStyle = 'oklch(0.58 0.24 25)'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'

      edges.forEach(edge => {
        const [start, end] = edge
        ctx.beginPath()
        ctx.moveTo(projectedVertices[start][0], projectedVertices[start][1])
        ctx.lineTo(projectedVertices[end][0], projectedVertices[end][1])
        ctx.stroke()
      })

      // Draw vertices
      projectedVertices.forEach(vertex => {
        ctx.fillStyle = 'oklch(0.62 0.26 27)'
        ctx.beginPath()
        ctx.arc(vertex[0], vertex[1], 6, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    function animate() {
      if (!isHovering) {
        rotationRef.current = {
          x: rotationRef.current.x + 0.005,
          y: rotationRef.current.y + 0.005
        }
      }
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovering])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    const newRotation = { x: y * 2, y: x * 2 }
    setRotation(newRotation)
    rotationRef.current = newRotation
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full"></div>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="relative cursor-grab active:cursor-grabbing"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </div>
  )
}
