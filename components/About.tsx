'use client'

import { useEffect, useState } from 'react'
import { 
  BookOpen, Dumbbell, Zap, Code, Brain, Target, 
  Heart, Users, Lightbulb, ArrowRight, Coffee, 
  Rocket, Star, TrendingUp
} from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('#about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const interests = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Reading",
      description: "Exploring new ideas and perspectives through books"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Gym & Running",
      description: "Staying physically and mentally strong"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Exploration",
      description: "Creating useful real-world solutions with AI"
    }
  ]

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Exploring data science and ML applications",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation Tools",
      description: "Creating chatbots and workflow automation",
      color: "from-green-400 to-green-600"
    }
  ]

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Daily Growth",
      description: "Challenging myself every day to improve a little more than yesterday"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Consistent Progress",
      description: "Small, consistent steps always beat one-time big efforts"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personal Development",
      description: "Becoming a stronger, clearer, and kinder version of myself"
    }
  ]

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-8">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Hi, I'm Ram 👋
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                A <span className="font-semibold text-blue-600">Computer Science student from Hyderabad</span> who loves 
                building things with code and learning something new every day. 
                Outside of coding, I enjoy <span className="font-medium">reading</span>, <span className="font-medium">gym</span>, 
                <span className="font-medium">running</span>, and <span className="font-medium">exploring AI</span> to create 
                useful real-world solutions.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do & Philosophy - Combined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What I Do */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                What I Do
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Learning <span className="font-medium text-blue-600">full-stack development</span> and 
                <span className="font-medium text-purple-600"> AI</span> through real projects like 
                chatbots, automation tools, and e-commerce apps.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Strengthening my <span className="font-medium text-green-600">core CS skills</span> while 
                exploring data science and machine learning.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-purple-600" />
                My Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I believe in <span className="font-semibold text-blue-600">challenging myself every day</span> — 
                showing up, doing the work, and improving a little more than yesterday.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">Small, consistent steps</span> always beat one-time big efforts.
              </p>
            </div>
          </div>
        </div>



        {/* What I'm Looking For */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 mr-2" />
              What I'm Looking For
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Looking for <span className="font-medium text-white">collaborations</span> to build creative and impactful tech solutions. 
              Open to <span className="font-medium text-white">internships and projects</span> where I can learn fast and create real user impact.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              <span>Let's Connect</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
