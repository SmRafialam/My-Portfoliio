import { motion } from 'framer-motion'
import { Section, SectionHeading, stagger, staggerItem } from './ui'
import { blogs } from '../data/portfolio'
import { FiArrowUpRight, FiClock } from 'react-icons/fi'

export default function Blog() {
  return (
    <Section id="blog" className="bg-surface/40">
      <SectionHeading
        eyebrow="Writing"
        title="Blog & Notes"
        subtitle="Thoughts on engineering, automation and building at scale."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-6 md:grid-cols-3"
      >
        {blogs.map((post) => (
          <motion.a
            key={post.title}
            variants={staggerItem}
            href={post.link}
            target={post.link.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="group glass card-hover flex flex-col rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-accent2">{post.date}</span>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <FiClock size={12} /> {post.readTime}
              </span>
            </div>
            <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-accent2">
              {post.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {post.excerpt}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
              <FiArrowUpRight className="text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent2" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      <p className="mt-8 text-center text-sm text-slate-500">
        More posts coming soon — I write as I build.
      </p>
    </Section>
  )
}
