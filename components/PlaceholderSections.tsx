'use client'

// Placeholder sections for About, Skills, Projects, and Contact
// These will be developed in future iterations

const PlaceholderSection = ({ 
  id, 
  title, 
  description 
}: { 
  id: string
  title: string
  description: string 
}) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-medium">
            🚧 Coming Soon
          </div>
        </div>
      </div>
    </section>
  )
}

export const AboutSection = () => (
  <PlaceholderSection
    id="about"
    title="About Me"
    description="Learn more about my journey, education, and passion for technology and AI automation."
  />
)

export const SkillsSection = () => (
  <PlaceholderSection
    id="skills"
    title="Skills & Technologies"
    description="Discover the technologies I work with and the skills I've developed in AI, web development, and automation."
  />
)

export const ProjectsSection = () => (
  <PlaceholderSection
    id="projects"
    title="Projects"
    description="Explore my portfolio of projects, from AI automation tools to web applications and innovative solutions."
  />
)

export const ContactSection = () => (
  <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to collaborate on your next AI automation project? Let's discuss how we can help your business grow with smart technology solutions.
        </p>
        
        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">ram@example.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600">Connect with me</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">GoEvolve AAA</h3>
            <p className="text-gray-600">AI Automation Agency</p>
          </div>
        </div>
        
        <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-medium mt-8">
          🚧 Full Contact Form Coming Soon
        </div>
      </div>
    </div>
  </section>
)
