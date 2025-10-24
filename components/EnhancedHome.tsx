'use client'

import { useEffect, useState, useRef } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download, Eye, Star, Users } from 'lucide-react'

const EnhancedHome = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState('')
  const [currentRole, setCurrentRole] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])

  // Dynamic roles for typing effect
  const roles = [
    'Computer Science Student',
    'AI & ML Enthusiast', 
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Innovator'
  ]

  // Typing animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentText = roles[currentRole]
    
    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypedText('')
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentRole])

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Disable particles on mobile for better performance
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize particles (reduced count for better performance)
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 25; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1
        })
      }
    }

    let lastTime = 0
    const targetFPS = 30 // Limit to 30 FPS for better performance
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        requestAnimationFrame(animate)
        return
      }
      lastTime = currentTime
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Simplified mouse interaction (less frequent calculations)
        if (index % 3 === 0) { // Only calculate for every 3rd particle
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distanceSquared = dx * dx + dy * dy // Avoid sqrt for performance
          
          if (distanceSquared < 10000) { // 100^2
            particle.x -= dx * 0.005
            particle.y -= dy * 0.005
          }
        }

        // Boundary check with wrapping instead of bouncing
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()

        // Simplified connection lines (only for nearby particles, less frequent)
        if (index % 2 === 0) { // Only draw connections for every other particle
          for (let i = index + 1; i < Math.min(index + 3, particlesRef.current.length); i++) {
            const otherParticle = particlesRef.current[i]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distanceSquared = dx * dx + dy * dy
            
            if (distanceSquared < 6400) { // 80^2 - reduced connection distance
              const distance = Math.sqrt(distanceSquared)
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - distance / 80)})`
              ctx.stroke()
            }
          }
        }
      })
      
      requestAnimationFrame(animate)
    }

    initParticles()
    animate(0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mousePosition])

  // Trigger visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            right: '10%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            bottom: '10%',
            left: '10%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Mobile-first layout: Profile picture first on mobile, side by side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile section - appears first on mobile, right side on desktop */}
          <div
            className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Enhanced profile image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-400/15 animate-spin-reverse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-300/10 to-indigo-300/10 animate-pulse"></div>
                
                {/* Profile image with enhanced styling */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                  <img
                    src="https://res.cloudinary.com/dcsglluc4/image/upload/v1760698241/ramu_image_aga861.jpg"
                    alt="Ram Jakkala - Profile Picture"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content - appears second on mobile, left side on desktop */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Animated greeting */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
              </div>
            </div>

            {/* Dynamic heading with typing effect */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Ram Jakkala
                </span>
                <span className="inline-block animate-wave text-4xl ml-2">👋</span>
              </h1>
              
              {/* Dynamic typing effect */}
              <div className="h-16 flex items-center">
                <span className="text-2xl sm:text-3xl font-semibold text-gray-700">
                  {typedText}
                  <span className="animate-pulse text-blue-600">|</span>
                </span>
              </div>
              
              {/* Enhanced description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Passionate about creating <span className="font-semibold text-blue-600">innovative AI solutions</span> and 
                building <span className="font-semibold text-purple-600">scalable web applications</span> that solve 
                real-world problems. Currently mastering cutting-edge technologies at NIAT.
              </p>
            </div>


            {/* Enhanced social links with tooltips */}
            <div
              className={`flex items-center space-x-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href="https://www.linkedin.com/in/ramu-jakkala/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-blue-600 hover:text-blue-700 border border-gray-100"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Connect on LinkedIn
                </div>
              </a>
              <a
                href="https://github.com/JakkalaRamu2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-gray-900 border border-gray-100"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  View GitHub
                </div>
              </a>
              <a
                href="mailto:ramujakkala1@gmail.com"
                className="group relative flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-red-600 hover:text-red-700 border border-gray-100"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Send Email
                </div>
              </a>
            </div>

            {/* Enhanced CTA buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Let's Connect</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200"
              >
                <Eye className="mr-2 w-5 h-5" />
                <span>View Projects</span>
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Download className="mr-2 w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

        </div>

        {/* Enhanced scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-blue-500 transition-colors">
              <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  )
}

export default EnhancedHome
