import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Button from './ui/Button'

function MagneticText({ children, className, shadowClassName, maxMove = 18 }) {
  const ref = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springConfig = { stiffness: 180, damping: 10, mass: 1.2 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)
  const shadowX = useTransform(x, (v) => v * 0.6)
  const shadowY = useTransform(y, (v) => v * 0.6)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rawX.set(((e.clientX - cx) / (rect.width / 2)) * maxMove)
    rawY.set(((e.clientY - cy) / (rect.height / 2)) * maxMove)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block cursor-default select-none"
    >
      <motion.span
        aria-hidden="true"
        style={{ x: shadowX, y: shadowY }}
        className={"absolute inset-0 " + (shadowClassName || "")}
      >
        {children}
      </motion.span>
      <motion.span
        style={{ x, y }}
        className={"relative inline-block " + (className || "")}
      >
        {children}
      </motion.span>
    </span>
  )
}

function LetterHover({ text }) {
  return (
    <span className="flex flex-wrap">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="transition-colors duration-150 hover:text-red-500 cursor-default"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="pt-20 pb-16">
      <div className="flex items-start justify-between gap-8">

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-[#6b6b6b] font-mono tracking-wide">
              Available for work
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3 tracking-tight overflow-visible">
            <MagneticText maxMove={14} shadowClassName="text-[#2a2a2a] blur-[1px]">
              Hi, I'm <span className="text-red-500">Abhishek</span>
            </MagneticText>
          </h1>

          <p className="text-xl text-[#8a8a8a] mb-6 overflow-visible">
            <LetterHover text="I design and code for web" />
          </p>

          <p className="text-[#6b6b6b] text-base leading-relaxed max-w-xl mb-8">
            Full Stack Developer who turns ideas into production-ready systems.
            I care about clean architecture, efficient code, and maintainable solutions.
          </p>

          <div className="flex items-center gap-4">
            <Button
              href="https://drive.google.com/file/d/1_Qm3qG4jUkNtzGUIkrXJ6xL634fnj5VD/view?usp=drive_link"
              variant="red"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
            <Button
              href="mailto:abhi12shekanand17@gmail.com"
              variant="ghost"
            >
              abhi12shekanand17@gmail.com
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 pt-2">
          <img
            src="/profile.jpg"
            alt="Abhishek"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-[#2a2a2a]"
          />
        </div>

      </div>
    </section>
  )
}