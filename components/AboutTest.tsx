'use client'

import { useEffect, useState } from 'react'

const AboutTest = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about-test" className="min-h-screen py-20 bg-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          About Me Test - {isVisible ? 'Visible' : 'Hidden'}
        </h2>
        <p className="text-lg text-gray-600">
          This is a test version to check if the About component renders correctly.
        </p>
      </div>
    </section>
  )
}

export default AboutTest
