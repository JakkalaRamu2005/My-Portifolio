'use client'

import { useEffect, useState } from 'react'
import { Brain, Code, Heart, Star } from 'lucide-react'

const AboutSimple = () => {
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

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Simple Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Focus</h3>
            <p className="text-gray-600 leading-relaxed">
              I am a <span className="font-semibold text-blue-600">NIAT student</span> mastering{' '}
              <span className="font-medium">AI and Machine Learning</span>. My journey in technology 
              is driven by curiosity and passion.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills</h3>
            <p className="text-gray-600 leading-relaxed">
              Proficient in <span className="font-medium">React, Next.js, TypeScript</span>, and 
              <span className="font-medium"> AI/ML technologies</span>. Always learning and 
              adapting to new challenges.
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              I believe in <span className="font-medium">continuous learning</span> and 
              <span className="font-medium"> pushing boundaries</span> to become the best 
              version of myself through innovation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to collaborate on innovative projects and explore new technologies.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSimple
