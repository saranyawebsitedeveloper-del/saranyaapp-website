import { CheckCircle2, BookOpen } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { learning } from '../data/site.js'

const experience = [
  'Flutter mobile application development',
  'Firebase integration',
  'Google Sheets integration',
  'Business websites',
  'Tailoring order management applications',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">
            A developer who builds tools that real businesses can actually use.
          </h2>
          <p className="mt-6 leading-relaxed">
            I'm Saranya, a freelance Flutter and web developer. I enjoy turning everyday business
            problems, like tracking orders, payments or customer records, into simple, reliable
            apps and websites.
          </p>
          <p className="mt-4 leading-relaxed">
            I work best with small businesses, boutiques, startups and entrepreneurs who want
            affordable, practical digital solutions without unnecessary complexity. I keep
            communication clear and focus on building what you truly need.
          </p>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
              <h3 className="font-display text-lg font-bold text-navy-900">Practical experience</h3>
              <ul className="mt-4 space-y-3">
                {experience.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal-deep" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-7 text-white shadow-card">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                <BookOpen size={18} className="text-teal-soft" /> Currently learning
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {learning.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
