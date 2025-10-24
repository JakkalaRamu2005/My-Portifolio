'use client'

import { useEffect, useState, useRef } from 'react'
import { 
  BookOpen, Zap, Target, Code, Brain, Mic, Globe, 
  Calendar, Award, TrendingUp, Heart, Lightbulb, 
  Rocket, Star, Users, Coffee, Music, Camera,
  ChevronRight, Play, Pause, RotateCcw, ArrowUp
} from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const [metricsAnimated, setMetricsAnimated] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)

  // Enhanced intersection observer for multiple animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'about' && entry.isIntersecting) {
            setIsVisible(true)
          }
          if (entry.target === skillsRef.current && entry.isIntersecting) {
            setSkillsAnimated(true)
          }
          if (entry.target === metricsRef.current && entry.isIntersecting) {
            setMetricsAnimated(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const aboutElement = document.querySelector('#about')
    if (aboutElement) observer.observe(aboutElement)
    if (skillsRef.current) observer.observe(skillsRef.current)
    if (metricsRef.current) observer.observe(metricsRef.current)

    return () => observer.disconnect()
  }, [])

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Timeline data for interactive journey
  const timelineData = [
    {
      year: '2023',
      title: 'Started AI Journey',
      description: 'Began exploring machine learning and AI automation',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-400 to-purple-600',
      achievements: ['First ML Model', 'Python Mastery', 'Data Analysis']
    },
    {
      year: '2024',
      title: 'Full-Stack Development',
      description: 'Mastered modern web technologies and frameworks',
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-400 to-blue-600',
      achievements: ['React/Next.js', 'TypeScript', 'Node.js']
    },
    {
      year: '2024',
      title: 'Automation Expert',
      description: 'Specialized in workflow automation and voice agents',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-green-400 to-green-600',
      achievements: ['n8n Workflows', 'Voice AI', 'Process Optimization']
    },
    {
      year: '2025',
      title: 'Innovation Focus',
      description: 'Building cutting-edge solutions and leading projects',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-orange-400 to-orange-600',
      achievements: ['Team Leadership', 'Product Development', 'Mentoring']
    }
  ]

  // Auto-advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineItem(prev => (prev + 1) % timelineData.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [timelineData.length])

  // Skills data for radar chart
  const skillsData = [
    { name: 'Frontend Development', level: 90, color: '#3B82F6' },
    { name: 'AI & Machine Learning', level: 85, color: '#8B5CF6' },
    { name: 'Backend Development', level: 80, color: '#10B981' },
    { name: 'Automation Tools', level: 88, color: '#F59E0B' },
    { name: 'Data Analysis', level: 75, color: '#EF4444' },
    { name: 'Voice AI', level: 82, color: '#06B6D4' }
  ]

  // Core values and personality
  const coreValues = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion-Driven',
      description: 'Every project is fueled by genuine enthusiasm',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Always seeking creative solutions to complex problems',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative',
      description: 'Believing in the power of teamwork and knowledge sharing',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Mindset',
      description: 'Continuously learning and adapting to new challenges',
      color: 'from-green-400 to-emerald-500'
    }
  ]

  // Achievement metrics
  const metrics = [
    { label: 'Projects Completed', value: 15, suffix: '+', icon: <Award className="w-5 h-5" /> },
    { label: 'Technologies Mastered', value: 12, suffix: '+', icon: <Code className="w-5 h-5" /> },
    { label: 'Learning Hours', value: 500, suffix: '+', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Problem Solving', value: 98, suffix: '%', icon: <Target className="w-5 h-5" /> }
  ]

  // Personal interests with enhanced data
  const interests = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Technical Reading",
      description: "Deep diving into AI research papers and tech blogs",
      color: 'from-indigo-400 to-purple-500',
      stats: '50+ books/year'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fitness & Running",
      description: "Maintaining physical and mental wellness through exercise",
      color: 'from-green-400 to-teal-500',
      stats: '5km daily avg'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music & Creativity",
      description: "Finding inspiration through diverse musical genres",
      color: 'from-pink-400 to-rose-500',
      stats: 'Multi-genre'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Tech Photography",
      description: "Capturing the beauty of technology and innovation",
      color: 'from-blue-400 to-cyan-500',
      stats: 'Digital art'
    }
  ]

  // Animated counter hook
  const useAnimatedCounter = (end: number, duration: number = 2000, start: boolean = false) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!start) return
      
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }, [end, duration, start])
    
    return count
  }

  // Skills radar chart component
  const SkillsRadarChart = () => {
    const size = 300
    const center = size / 2
    const maxRadius = center - 40
    
    const angleStep = (2 * Math.PI) / skillsData.length
    
    const getPoint = (index: number, level: number) => {
      const angle = index * angleStep - Math.PI / 2
      const radius = (level / 100) * maxRadius
      return {
        x: center + radius * Math.cos(angle),
        y: center + radius * Math.sin(angle)
      }
    }
    
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <svg width={size} height={size} className="transform hover:scale-105 transition-transform duration-500">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((level) => (
            <circle
              key={level}
              cx={center}
              cy={center}
              r={(level / 100) * maxRadius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
          
          {/* Grid lines */}
          {skillsData.map((_, index) => {
            const point = getPoint(index, 100)
            return (
              <line
                key={index}
                x1={center}
                y1={center}
                x2={point.x}
                y2={point.y}
                stroke="#e5e7eb"
                strokeWidth="1"
                opacity="0.5"
              />
            )
          })}
          
          {/* Skill polygon */}
          <polygon
            points={skillsData.map((skill, index) => {
              const point = getPoint(index, skillsAnimated ? skill.level : 0)
              return `${point.x},${point.y}`
            }).join(' ')}
            fill="rgba(59, 130, 246, 0.2)"
            stroke="#3B82F6"
            strokeWidth="2"
            style={{ transition: 'all 2s ease-out' }}
          />
          
          {/* Skill points */}
          {skillsData.map((skill, index) => {
            const point = getPoint(index, skillsAnimated ? skill.level : 0)
            return (
              <circle
                key={index}
                cx={point.x}
                cy={point.y}
                r="4"
                fill={skill.color}
                style={{ transition: 'all 2s ease-out', transform: 'scale(1)', transitionDuration: '2000ms' }}
              />
            )
          })}
        </svg>
        
        {/* Skill labels */}
        {skillsData.map((skill, index) => {
          const labelPoint = getPoint(index, 110)
          return (
            <div
              key={index}
              className="absolute text-xs font-medium text-gray-700 transform -translate-x-1/2 -translate-y-1/2 text-center"
              style={{
                left: labelPoint.x,
                top: labelPoint.y,
                width: '80px'
              }}
            >
              {skill.name}
              <div className="text-xs text-gray-500 mt-1">{skill.level}%</div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        {/* Enhanced Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-8">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Discover My Journey</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-400 via-purple-500 to-primary-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Achievement Metrics Dashboard */}
        <div
          ref={metricsRef}
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const animatedValue = useAnimatedCounter(metric.value, 2000, metricsAnimated)
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:scale-105 group"
                  style={{
                    transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {animatedValue}{metric.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Interactive Timeline */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Learning Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">A timeline of growth, learning, and innovation</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-green-400 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-500 z-10 shadow-lg">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} animate-pulse`}></div>
                  </div>
                  
                  {/* Timeline content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500 cursor-pointer group ${
                        activeTimelineItem === index ? 'ring-2 ring-blue-400 scale-105' : ''
                      }`}
                      onClick={() => setActiveTimelineItem(index)}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mr-3`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">{item.year}</div>
                          <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Radar Chart */}
        <div
          ref={skillsRef}
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Interactive visualization of my technical skills and proficiency levels</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500">
            <SkillsRadarChart />
          </div>
        </div>

        {/* Core Values & Personality */}
        <div
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Drives Me</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">The core values and principles that guide my work and life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:scale-105 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests Gallery */}
        <div
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Beyond the Code</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Exploring my passions and interests outside of technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${interest.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {interest.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">{interest.title}</h4>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {interest.stats}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{interest.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to collaborate on innovative projects and explore new technologies. 
                Let's connect and build the future together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg group"
                >
                  <span>Let's Connect</span>
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                  <ArrowUp className="mr-2 w-5 h-5" />
                  <span>View Projects</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About
