import {
  Smartphone,
  LayoutTemplate,
  Flame,
  Globe,
  BarChart3,
  Sheet,
  Store,
  Bot,
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { services } from '../data/site.js'

const icons = { Smartphone, LayoutTemplate, Flame, Globe, BarChart3, Sheet, Store, Bot }

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Services</span>
          <h2 className="section-title">What I can build for you</h2>
          <p className="mt-4">
            Practical, affordable digital services designed for small businesses and
            entrepreneurs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.07}>
                <article className="group relative h-full rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-teal-mid/50 hover:shadow-glow">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 text-teal-soft transition group-hover:from-teal-mid group-hover:to-teal-soft group-hover:text-navy-950">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                    {s.title}
                    {s.badge && (
                      <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 align-middle text-[10px] font-semibold text-amber-700">
                        {s.badge}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
