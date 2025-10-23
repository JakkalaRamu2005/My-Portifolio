'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-primary-100/20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Text content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Ram</span>{' '}
                <span className="inline-block animate-bounce">👋</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                I'm a <span className="font-semibold text-gray-800">B.Tech student</span> and{' '}
                <span className="font-semibold text-primary-600">co-founder of GoEvolve AAA</span>{' '}
                — an AI Automation Agency helping businesses save time and costs with smart AI tools like{' '}
                <span className="font-medium">chatbots, voice agents, and image models</span>. 
                I love building real-world projects that make a difference.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-soft-lg hover:scale-110 transition-all duration-300 text-primary-600 hover:text-primary-700"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-soft-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-gray-900"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ram@example.com"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-soft-lg hover:scale-110 transition-all duration-300 text-primary-600 hover:text-primary-700"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-soft-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105"
              >
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right side - Profile image placeholder */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Profile image container with decorative elements */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]">
                {/* Decorative background circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-20"></div>
                
                {/* Main profile image placeholder */}
                <div className="absolute inset-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-soft-lg">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600 font-medium">Profile Image</p>
                      <p className="text-sm text-gray-500">Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-soft-lg animate-bounce">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-white shadow-soft animate-pulse">
                  <span className="text-lg">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
