'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const SHOW_MS = 2600

// 6 paw prints walking diagonally across the screen (background decoration)
const bgPaws = [
  { top: '62%', left: '12%', rotate: -20, size: 28, delay: 0.0  },
  { top: '54%', left: '24%', rotate:  15, size: 32, delay: 0.18 },
  { top: '47%', left: '36%', rotate: -18, size: 28, delay: 0.36 },
  { top: '40%', left: '48%', rotate:  20, size: 32, delay: 0.54 },
  { top: '33%', left: '60%', rotate: -15, size: 28, delay: 0.72 },
  { top: '26%', left: '72%', rotate:  18, size: 32, delay: 0.90 },
]

function PawSVG({ size = 48, color = '#C9956A', opacity = 1 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ opacity }}>
      <ellipse cx="32" cy="44" rx="12" ry="10" fill={color} />
      <ellipse cx="14" cy="34" rx="6"  ry="8"  fill={color} opacity="0.75" />
      <ellipse cx="50" cy="34" rx="6"  ry="8"  fill={color} opacity="0.75" />
      <ellipse cx="22" cy="22" rx="5"  ry="7"  fill={color} opacity="0.75" />
      <ellipse cx="42" cy="22" rx="5"  ry="7"  fill={color} opacity="0.75" />
    </svg>
  )
}

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, SHOW_MS)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-ivory flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background paw trail */}
          {bgPaws.map((p, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{ top: p.top, left: p.left, transform: `rotate(${p.rotate}deg)` }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 0.35, 0.2], scale: [0.4, 1, 0.9] }}
              transition={{ duration: 0.5, delay: p.delay, times: [0, 0.4, 1] }}
            >
              <PawSVG size={p.size} color="#D4A574" />
            </motion.div>
          ))}

          {/* Center card */}
          <div className="flex flex-col items-center gap-5 relative z-10">
            {/* Large paw — bounces in */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: [0, 1.25, 0.95, 1.05, 1], rotate: [-15, 5, -3, 2, 0] }}
              transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            >
              <PawSVG size={88} color="#C9956A" />
            </motion.div>

            {/* Business name */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="text-center"
            >
              <p className="font-heading text-3xl md:text-4xl text-chestnut">
                Alice au pays des Doodles
              </p>
              <p className="font-body text-sm text-cocoa/50 mt-1 tracking-widest uppercase">
                Valleyfield · Montréal
              </p>
            </motion.div>

            {/* Bouncing dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-2.5 mt-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-golden"
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.65,
                    delay: i * 0.16,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
