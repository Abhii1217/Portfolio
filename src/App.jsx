import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Support from './components/Support'
import Loader from './components/Loader'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isVisible={loading} />
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
        }}
      >
        <div className="min-h-screen bg-black text-[#e2e2e2]">
          <Navbar />
          <main className="max-w-3xl mx-auto px-6 pb-24">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Support />
          </main>
        </div>
      </div>
    </>
  )
}