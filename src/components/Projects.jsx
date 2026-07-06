import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionHeading } from './ui'
import { projects } from '../data/portfolio'
import { FiExternalLink, FiStar } from 'react-icons/fi'

// Build a unique, ordered list of filter tags.
const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))].slice(0, 9)

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  )

  return (
    <Section id="work" className="bg-surface/40">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects & Work"
        subtitle="Enterprise platforms, automation systems and APIs I've built and shipped."
      />

      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              filter === t
                ? 'bg-gradient-to-r from-accent to-accent2 text-white shadow-glow'
                : 'border border-white/10 text-slate-400 hover:border-accent/40 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="group glass card-hover flex flex-col overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-base">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {p.featured && (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    <FiStar size={11} /> Featured
                  </span>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-base/70 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-accent"
                  >
                    <FiExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent2">
                  {p.org}
                </p>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
