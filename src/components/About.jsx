import { motion } from 'framer-motion'
import { Section, SectionHeading, Reveal, stagger, staggerItem } from './ui'
import { profile, education } from '../data/portfolio'
import { FiMapPin, FiMail } from 'react-icons/fi'
import { PiGraduationCapBold } from 'react-icons/pi'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Get to know me" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        {/* Bio */}
        <Reveal>
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">
              Engineer who ships end-to-end.
            </h3>
            <p className="leading-relaxed text-slate-400">{profile.summary}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="chip">
                <FiMapPin className="text-accent2" /> {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="chip hover:border-accent/40">
                <FiMail className="text-accent2" /> {profile.email}
              </a>
            </div>

            {/* Stats */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4"
            >
              {profile.stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={staggerItem}
                  className="glass card-hover rounded-2xl p-4 text-center"
                >
                  <p className="gradient-text text-3xl font-extrabold">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>

        {/* Education timeline */}
        <Reveal delay={0.15}>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white">
                <PiGraduationCapBold size={22} />
              </span>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="relative space-y-6 border-l border-white/10 pl-6">
              {education.map((e, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-base">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
                  </span>
                  <p className="text-xs font-mono text-accent2">{e.year}</p>
                  <h4 className="font-semibold text-white">{e.school}</h4>
                  <p className="text-sm text-slate-400">
                    {e.degree} · {e.location}
                  </p>
                  {e.courses && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {e.courses.slice(0, 5).map((c) => (
                        <span key={c} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-400">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
