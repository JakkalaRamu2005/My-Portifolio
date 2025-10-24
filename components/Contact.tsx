'use client'

import { useEffect, useState } from 'react'
import { 
  Mail, Phone, MapPin, Send, 
  Linkedin, Github, MessageCircle,
  ArrowRight, Star, Heart
} from 'lucide-react'

const Contact = () => {
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

    const element = document.querySelector('#contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "Drop me a line",
      value: "ramujakkala1@gmail.com",
      href: "mailto:ramujakkala1@gmail.com",
      color: "from-red-400 to-red-600",
      description: "Best for detailed discussions"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      subtitle: "Quick chat",
      value: "+91 8639893920",
      href: "https://wa.me/918639893920",
      color: "from-green-400 to-green-600",
      description: "Instant messaging"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      subtitle: "Professional network",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ramu-jakkala/",
      color: "from-blue-400 to-blue-600",
      description: "Professional networking"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      subtitle: "View my code",
      value: "Check my projects",
      href: "https://github.com/JakkalaRamu2005",
      color: "from-gray-400 to-gray-600",
      description: "Open source contributions"
    }
  ]

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            <Send className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Let's connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? Let's discuss your ideas and build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Contact Methods */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{method.subtitle}</p>
              <p className="text-sm font-medium text-gray-700 mb-3">{method.value}</p>
              <p className="text-xs text-gray-500">{method.description}</p>
              <div className="mt-4 flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                <span className="text-sm font-medium mr-1">Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Quick Info */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Hyderabad, India</p>
            <p className="text-sm text-gray-500 mt-2">Available for remote work</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center">
            <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-600">Within 24 hours</p>
            <p className="text-sm text-gray-500 mt-2">Usually much faster!</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Availability</h3>
            <p className="text-gray-600">Open to opportunities</p>
            <p className="text-sm text-gray-500 mt-2">Internships & projects</p>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <Heart className="w-12 h-12 text-pink-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Let's Build Something Great Together!</h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you have a project idea, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something impactful!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918639893920"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                <span>WhatsApp Me</span>
              </a>
              
              <a
                href="mailto:ramujakkala1@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <Mail className="mr-2 w-5 h-5" />
                <span>Send Email</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/ramu-jakkala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 leading-relaxed">
            Thank you for visiting my portfolio! I'm excited to connect with fellow developers, 
            potential collaborators, and anyone passionate about technology.
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <span className="text-gray-500">Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-gray-500">by Ram Jakkala</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
