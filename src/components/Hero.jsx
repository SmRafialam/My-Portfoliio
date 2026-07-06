import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDownRight, FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaResearchgate } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiFiverr } from 'react-icons/si'
import { profile, socials } from '../data/portfolio'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  research: FaResearchgate,
  mail: HiOutlineMail,
  fiverr: SiFiverr,
}

// Lightweight typewriter (no dependency).
function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!del && text === word) {
      t = setTimeout(() => setDel(true), pause)
    } else if (del && text === '') {
      setDel(false)
      setI((v) => v + 1)
    } else {
      t = setTimeout(
        () => setText(word.slice(0, del ? text.length - 1 : text.length + 1)),
        del ? speed / 2 : speed
      )
    }
    return () => clearTimeout(t)
  }, [text, del, i, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.typewriter)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <motion.div
        className="glow-blob left-[-10%] top-10 h-80 w-80 bg-accent"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="glow-blob right-[-8%] top-40 h-96 w-96 bg-accent2"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-page relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-sm text-body"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for opportunities · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{' '}
            <span className="gradient-text animate-shimmer">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 flex items-center text-xl font-semibold text-body sm:text-2xl"
          >
            <span className="font-mono text-accent2">&gt;</span>
            <span className="ml-2">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent2" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline} I turn complex requirements into clean, fast,
            maintainable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="btn-primary">
              View my work <FiArrowDownRight />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
              <FiDownload /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-panel text-body transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-ink hover:shadow-glow"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent2/40 blur-2xl" />
          <div className="animate-float overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-card to-surface p-2 shadow-glow">
            <img
              src={profile.photo}
              alt={profile.name}
              width="400"
              height="480"
              className="h-full w-full rounded-[1.6rem] object-cover"
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-glow-cyan"
          >
            <p className="text-2xl font-extrabold text-ink">3+</p>
            <p className="text-xs text-muted">Years building</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
