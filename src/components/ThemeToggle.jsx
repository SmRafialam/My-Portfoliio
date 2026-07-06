import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

// ---- Shared theme store (single source of truth across all toggle instances) ----
const listeners = new Set()
let current = null

function readInitial() {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  } catch (e) {
    return 'dark'
  }
}

function applyTheme(next) {
  current = next
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(next)
  try {
    localStorage.setItem('theme', next)
  } catch (e) {
    /* ignore */
  }
  listeners.forEach((l) => l(next))
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (current == null) current = readInitial()
    return current
  })

  useEffect(() => {
    const l = (t) => setTheme(t)
    listeners.add(l)
    return () => listeners.delete(l)
  }, [])

  const toggle = () => applyTheme(current === 'light' ? 'dark' : 'light')
  return { theme, toggle }
}

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-body transition-colors hover:border-accent/50 hover:text-ink ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -18, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 18, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <FiMoon size={17} /> : <FiSun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
