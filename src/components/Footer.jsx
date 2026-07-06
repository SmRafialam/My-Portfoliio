import { profile, navLinks, socials } from '../data/portfolio'
import { FaGithub, FaLinkedinIn, FaResearchgate } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { FiArrowUp } from 'react-icons/fi'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  research: FaResearchgate,
  mail: HiOutlineMail,
  fiverr: SiFiverr,
}

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="container-page py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#home" className="flex items-center gap-2 text-xl font-bold text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-sm font-extrabold shadow-glow">
              R
            </span>
            {profile.name}
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

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
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-body transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

          <div className="flex w-full flex-col items-center gap-4 border-t border-line pt-6 sm:flex-row sm:justify-between">
            <p className="text-sm text-faint">
              © {new Date().getFullYear()} {profile.name}. Built with React & Framer Motion.
            </p>
            <a
              href="#home"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent2"
            >
              Back to top <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
