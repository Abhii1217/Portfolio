import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = [
  'THINK',
  'DESIGN',
  'CREATE',
  'EVOLVE',
]

export default function Loader({ isVisible }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: '12px',
              color: '#333',
              letterSpacing: '0.25em',
              fontFamily: 'monospace',
            }}
          >
          
          </motion.p>

          <div
            style={{
              height: '60px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={WORDS[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  color: '#ef4444',
                  fontFamily: 'monospace',
                  letterSpacing: '-1px',
                  margin: 0,
                }}
              >
                {WORDS[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: '#ef4444',
              transformOrigin: 'left',
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontSize: '11px',
              color: '#222',
              letterSpacing: '0.2em',
              fontFamily: 'monospace',
              marginTop: '8px',
            }}
          >
          
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  )
}