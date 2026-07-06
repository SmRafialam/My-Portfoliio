import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionHeading } from './ui'
import { projects, projectCategories } from '../data/portfolio'
import { FiExternalLink, FiStar, FiFolder } from 'react-icons/fi'

// Category filters: "All" + the ordered categories.
const filters = ['All', ...projectCategories]

function ProjectCard({ p }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        {p.featured && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            <FiStar size={11} /> Featured
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur">
          {p.year}
        </span>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${p.title}`}
            className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-accent"
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
        <h3 className="text-lg font-bold text-ink">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-panel px-2 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  // Group the visible projects by category, preserving category order.
  const groups = useMemo(() => {
    const cats = filter === 'All' ? projectCategories : [filter]
    return cats
      .map((cat) => ({
        category: cat,
        items: projects.filter((p) => p.category === cat),
      }))
      .filter((g) => g.items.length > 0)
  }, [filter])

  return (
    <Section id="work" className="bg-surface">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects & Work"
        subtitle="Grouped by focus area — enterprise platforms, data systems and backend APIs I've built and shipped."
      />

      {/* Category filter */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {filters.map((t) => {
          const count =
            t === 'All' ? projects.length : projects.filter((p) => p.category === t).length
          return (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                filter === t
                  ? 'bg-gradient-to-r from-accent to-accent2 text-white shadow-glow'
                  : 'border border-line text-muted hover:border-accent/40 hover:text-ink'
              }`}
            >
              {t}
              <span
                className={`grid h-5 min-w-[20px] place-items-center rounded-full px-1 text-[11px] ${
                  filter === t ? 'bg-white/25 text-white' : 'bg-panel2 text-faint'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grouped project lists */}
      <div className="space-y-14">
        <AnimatePresence mode="popLayout">
          {groups.map((group) => (
            <motion.div
              key={group.category}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Group header */}
              <div className="mb-6 flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent2">
                  <FiFolder size={18} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink sm:text-xl">{group.category}</h3>
                  <p className="text-xs text-faint">
                    {group.items.length} {group.items.length === 1 ? 'project' : 'projects'}
                  </p>
                </div>
                <div className="ml-2 h-px flex-1 bg-gradient-to-r from-line to-transparent" />
              </div>

              {/* Cards */}
              <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((p) => (
                  <ProjectCard key={p.title} p={p} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}
