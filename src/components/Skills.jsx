import Reveal from './Reveal.jsx'
import { skillGroups, learning } from '../data/site.js'

export default function Skills() {
  return (
    <section id="skills" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !text-teal-soft">Skills</span>
          <h2 className="section-title !text-white">Tools I work with</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <h3 className="font-display text-lg font-bold text-teal-soft">{g.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/15 bg-navy-800 px-3.5 py-1.5 text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-3xl border border-dashed border-teal-mid/40 bg-teal-mid/5 p-7">
            <h3 className="font-display text-lg font-bold text-white">
              Currently learning{' '}
              <span className="ml-1 text-sm font-normal text-slate-400">(growing every day)</span>
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {learning.map((l) => (
                <span
                  key={l}
                  className="rounded-full bg-teal-mid/15 px-3.5 py-1.5 text-sm text-teal-soft"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
