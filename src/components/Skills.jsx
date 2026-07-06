import { motion } from 'framer-motion'
import { Section, SectionHeading, stagger, staggerItem } from './ui'
import { skillGroups } from '../data/portfolio'
import {
  FiCode, FiLayers, FiDatabase, FiTool, FiUsers, FiZap,
} from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const icons = {
  code: FiCode,
  layers: FiLayers,
  database: FiDatabase,
  tool: FiTool,
  sparkle: HiSparkles,
  users: FiUsers,
  automation: FiZap,
}

export default function Skills() {
  return (
    <Section id="skills" className="bg-surface/40">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills & Tech Stack"
        subtitle="The tools I reach for to design, build, and ship reliable software."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] || FiCode
          return (
            <motion.div
              key={group.title}
              variants={staggerItem}
              className="glass card-hover group rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent2 transition-colors group-hover:from-accent group-hover:to-accent2 group-hover:text-white">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
