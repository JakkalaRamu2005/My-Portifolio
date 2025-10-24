import Navbar from '@/components/Navbar'
import EnhancedHome from '@/components/EnhancedHome'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { 
  ProjectsSection 
} from '@/components/PlaceholderSections'

export default function HomePage() {
  return (
    <main className="relative">
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <EnhancedHome />
      <About />
      <Skills />
      <ProjectsSection />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-gray-300">
              © 2024 Ram. Built with Next.js, TypeScript & Tailwind CSS.
            </p>
            <p className="text-sm text-gray-400">
    
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
