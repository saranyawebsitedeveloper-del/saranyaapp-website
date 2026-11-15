import { ArrowUp } from 'lucide-react'
import { brand, contact, navLinks } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal-mid to-navy-700 font-display text-lg font-extrabold text-white">
              S
            </span>
            <span className="font-display text-lg font-bold text-white">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            {brand.tagline} Flutter apps, websites and digital solutions for small businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition hover:text-teal-soft">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={contact.mailto} className="break-all transition hover:text-teal-soft">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex items-center justify-between py-5 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 transition hover:text-teal-soft"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
