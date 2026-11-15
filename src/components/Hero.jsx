import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { PhoneMockup, BrowserMockup } from './Mockups.jsx'
import { brand } from '../data/site.js'

const chips = [
  { label: 'Flutter', pos: 'left-0 top-10', delay: 0 },
  { label: 'Firebase', pos: 'right-0 top-0', delay: 0.6 },
  { label: 'React', pos: 'left-4 bottom-12', delay: 1.2 },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pt-36"
    >
      {/* background glows + grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal-mid/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-navy-700/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-teal-soft backdrop-blur"
          >
            <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-soft" />
            {brand.designation}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm Saranya.{' '}
            <span className="bg-gradient-to-r from-teal-soft to-teal-mid bg-clip-text text-transparent">
              I Build Digital Experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            I help small businesses and entrepreneurs turn their ideas into practical mobile
            applications, websites and digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <MessageCircle size={16} /> Hire Me
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm italic text-slate-400"
          >
            {brand.tagline}
          </motion.p>
        </div>

        {/* illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto h-[420px] w-full max-w-md"
          aria-hidden="true"
        >
          <div className="absolute inset-x-6 top-4 -rotate-3 opacity-90 sm:inset-x-0">
            <BrowserMockup />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-4 sm:right-8"
          >
            <PhoneMockup />
          </motion.div>
          {chips.map((c) => (
            <motion.span
              key={c.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: c.delay, ease: 'easeInOut' }}
              className={`absolute ${c.pos} rounded-full border border-white/15 bg-navy-800/80 px-3.5 py-1.5 text-xs font-semibold text-teal-soft shadow-lg backdrop-blur`}
            >
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
