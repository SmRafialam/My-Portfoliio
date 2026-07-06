import { motion } from 'framer-motion'

// Reusable scroll-reveal wrapper. Animates once, GPU-friendly (opacity + transform only).
export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container + item for lists/grids.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// Section heading with eyebrow + gradient title.
export function SectionHeading({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="mb-12 text-center">
      <Reveal>
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-accent2">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-extrabold text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">{subtitle}</p>
        )}
        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-accent2" />
      </Reveal>
    </div>
  )
}

// Section shell with consistent vertical rhythm.
export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}
