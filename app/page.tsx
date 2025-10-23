import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import { 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ContactSection 
} from '@/components/PlaceholderSections'

export default function HomePage() {
  return (
    <main className="relative">
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <Home />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-gray-300">
              © 2024 Ram. Built with Next.js, TypeScript & Tailwind CSS.
            </p>
            <p className="text-sm text-gray-400">
              Co-founder of GoEvolve AAA | AI Automation Agency
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
