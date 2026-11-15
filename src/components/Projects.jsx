import { Check, ImagePlus } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { PhoneMockup, DashboardMockup, BrowserMockup } from './Mockups.jsx'
import { projects } from '../data/site.js'

const tones = {
  teal: 'bg-teal-soft/30 text-teal-deep',
  amber: 'bg-amber-100 text-amber-700',
  blue: 'bg-sky-100 text-sky-700',
}

function Visual({ project }) {
  if (project.screenshot) {
    return (
      <img
        src={project.screenshot}
        alt={`${project.title} screenshot`}
        className="mx-auto max-h-[420px] w-auto rounded-2xl shadow-2xl"
        loading="lazy"
      />
    )
  }
  if (project.visual === 'phone') return <PhoneMockup />
  if (project.visual === 'dashboard') return <DashboardMockup />
  return <BrowserMockup />
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Featured work</h2>
          <p className="mt-4">
            Each project is clearly labelled, so you always know what is a built application, a
            concept or a service demo.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <article className="grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-card sm:p-10 lg:grid-cols-2">
                <div className={i % 2 ? 'lg:order-2' : ''}>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tones[p.statusTone]}`}
                  >
                    {p.status}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-navy-900">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-navy-900 px-3 py-1 text-xs font-medium text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed sm:text-base">{p.text}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="shrink-0 text-teal-deep" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={i % 2 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 px-4 py-10">
                    <Visual project={p} />
                    {!p.screenshot && (
                      <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                        <ImagePlus size={12} /> Mockup preview – real screenshot can be added
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
