import { useState } from 'react'
import { Section, SectionHeading, Reveal } from './ui'
import { profile, socials } from '../data/portfolio'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaResearchgate } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  research: FaResearchgate,
  mail: HiOutlineMail,
  fiverr: SiFiverr,
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend required — open the user's mail client, pre-filled.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Let's talk"
        title="Get In Touch"
        subtitle="Have a project, role, or idea? My inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Info side */}
        <Reveal>
          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-line bg-gradient-to-br from-card to-surface p-8">
            <div>
              <h3 className="text-2xl font-bold text-ink">Let's build something great.</h3>
              <p className="mt-3 text-muted">
                I'm open to full-time roles, freelance work and interesting collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-xl border border-line bg-panel p-4 transition-colors hover:border-accent/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white">
                  <FiMail size={18} />
                </span>
                <div>
                  <p className="text-xs text-faint">Email</p>
                  <p className="text-sm font-medium text-ink">{profile.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-line bg-panel p-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-white">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <p className="text-xs text-faint">Location</p>
                  <p className="text-sm font-medium text-ink">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-body transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-ink hover:shadow-glow"
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Form side */}
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-body">Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-accent"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-body">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-accent"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-body">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                placeholder="Tell me about your project or role..."
                className="w-full resize-none rounded-xl border border-line bg-panel px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-accent"
              />
            </div>
            <button type="submit" className="btn-primary mt-6 w-full justify-center">
              Send message <FiSend />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
