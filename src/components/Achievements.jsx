import { motion } from 'framer-motion'
import { Section, SectionHeading, Reveal, stagger, staggerItem } from './ui'
import { achievements, research } from '../data/portfolio'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { PiCertificateBold, PiTrophyBold } from 'react-icons/pi'
import { TbFileText } from 'react-icons/tb'

export default function Achievements() {
  return (
    <Section id="awards">
      <SectionHeading
        eyebrow="Recognition & research"
        title="Certificates & Achievements"
        subtitle="Certifications, contest recognition and published research."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Certificates / awards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {achievements.map((a) => {
            const Icon = a.type === 'Contest' ? PiTrophyBold : PiCertificateBold
            return (
              <motion.div
                key={a.title}
                variants={staggerItem}
                className="glass card-hover relative overflow-hidden rounded-2xl p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent2">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-sm text-slate-500">{a.year}</span>
                </div>
                <h3 className="font-semibold leading-snug text-white">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{a.org}</p>
                <span className="mt-3 inline-block rounded-full bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                  {a.type}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Research publication highlight */}
        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-accent2/[0.05] p-7">
            <div className="glow-blob right-[-20%] top-[-10%] h-52 w-52 bg-accent" />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-glow">
                <TbFileText size={24} />
              </span>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-accent2">
                Research Publication
              </p>
              <h3 className="mt-2 text-xl font-bold leading-snug text-white">
                {research.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{research.blurb}</p>

              <div className="mt-5 space-y-1.5 text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <FiAward className="text-accent2" /> {research.conference}
                </p>
                <p className="pl-6 text-slate-500">Published by {research.publisher}</p>
              </div>

              <a
                href={research.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 !py-2.5"
              >
                Read paper <FiExternalLink />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
