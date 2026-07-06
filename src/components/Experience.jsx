import { Section, SectionHeading, Reveal } from './ui'
import { experience } from '../data/portfolio'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Where I've worked"
        title="Experience"
        subtitle="3+ years building enterprise products across the stack."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent via-accent2/50 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* node */}
                <span className="absolute left-4 top-6 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-accent2 shadow-glow-cyan sm:left-1/2">
                  {job.current && (
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent2" />
                  )}
                </span>

                <div className="w-full pl-10 sm:w-1/2 sm:pl-0 sm:px-8">
                  <div className="glass card-hover rounded-2xl p-6">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="chip !border-accent/30 !bg-accent/10 !text-accent2">
                        <FiBriefcase size={12} /> {job.period}
                      </span>
                      {job.current && (
                        <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-[11px] font-semibold text-green-400">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <p className="text-sm font-medium text-accent">{job.company}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <FiMapPin size={12} /> {job.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((p, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-400">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
