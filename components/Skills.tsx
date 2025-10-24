'use client'

import { useEffect, useState, useRef } from 'react'
import { 
  Code, Database, Globe, GitBranch, 
  Layers, Palette, Server, Zap,
  Star, TrendingUp, CheckCircle
} from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([])
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills progressively
          setTimeout(() => {
            skillsData.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => [...prev, `${categoryIndex}-${skillIndex}`])
                }, (categoryIndex * 200) + (skillIndex * 100))
              })
            })
          }, 500)
        }
      },
      { threshold: 0.2 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillsData = [
    {
      category: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      skills: [
        { name: "HTML", level: 90, icon: "🌐" },
        { name: "CSS", level: 85, icon: "🎨" },
        { name: "Tailwind CSS", level: 88, icon: "💨" },
        { name: "JavaScript", level: 82, icon: "⚡" },
        { name: "Bootstrap", level: 80, icon: "🅱️" }
      ]
    },
    {
      category: "Backend & Database",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
      skills: [
        { name: "Node.js", level: 78, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "🚀" },
        { name: "MongoDB", level: 72, icon: "🍃" },
        { name: "React", level: 85, icon: "⚛️" }
      ]
    },
    {
      category: "Frameworks & Tools",
      icon: <Layers className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      skills: [
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "MERN Stack", level: 76, icon: "📚" }
      ]
    },
    {
      category: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
      skills: [
        { name: "Git", level: 85, icon: "🔀" },
        { name: "GitHub", level: 88, icon: "🐙" }
      ]
    }
  ]

  const SkillBar = ({ skill, categoryIndex, skillIndex, isAnimated }: {
    skill: { name: string; level: number; icon: string }
    categoryIndex: number
    skillIndex: number
    isAnimated: boolean
  }) => {
    return (
      <div className="mb-4 last:mb-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="font-semibold text-gray-800">{skill.name}</span>
          </div>
          <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isAnimated ? `${skill.level}%` : '0%',
              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={skillsRef}>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-8">
            <Code className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Technical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mt-8"></div>
        </div>


        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-1000 delay-${300 + categoryIndex * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mr-3`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{category.skills.length} technologies</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    categoryIndex={categoryIndex}
                    skillIndex={skillIndex}
                    isAnimated={animatedSkills.includes(`${categoryIndex}-${skillIndex}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div
          className={`bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 mr-2" />
            Continuous Learning
          </h3>
          <p className="text-blue-100 mb-6 leading-relaxed">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
            Every project is an opportunity to learn something new.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#projects')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg group"
          >
            <span>View My Projects</span>
            <Code className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Skills
