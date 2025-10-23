'use client'

import { useEffect, useState } from 'react'
import { BookOpen, Zap, Target, Code, Brain, Mic, Globe } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations on component mount
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

  const hobbies = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Reading Books",
      description: "Exploring knowledge through literature and technical books"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Running",
      description: "Staying fit and clearing my mind through regular runs"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Exploring Tech",
      description: "Discovering new technologies and innovative solutions"
    }
  ]

  const currentLearning = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Automation Tools",
      description: "Mastering n8n for workflow automation and process optimization",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Agents",
      description: "Developing intelligent voice-powered applications and chatbots",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies",
      color: "from-green-400 to-green-600"
    }
  ]

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main About Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Education & Background */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white mr-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education & Focus</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                I am a <span className="font-semibold text-primary-600">NIAT student</span> mastering{' '}
                <span className="font-medium">AI and Machine Learning</span>. My journey in technology 
                is driven by curiosity and a passion for creating innovative solutions that can make 
                a real impact in the world.
              </p>
            </div>

            {/* Personal Philosophy */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">My Philosophy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                I am interested in <span className="font-medium">constantly challenging myself</span> and{' '}
                <span className="font-medium">pushing my boundaries</span> to become the best version of myself. 
                I believe in turning ideas into reality through hands-on work and continuous learning.
              </p>
            </div>

            {/* Hobbies Section */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When I'm Not Coding</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-600">
                      {hobby.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{hobby.title}</h4>
                    <p className="text-sm text-gray-600">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Current Learning */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Currently Learning & Building
              </h3>
              
              <div className="space-y-6">
                {currentLearning.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-r from-gray-50 to-primary-50/30 rounded-xl p-6 hover:shadow-soft transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                I'm always excited to collaborate on innovative projects and explore new technologies. 
                Let's connect and create something impactful together!
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-soft"
              >
                Get In Touch
                <Target className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
