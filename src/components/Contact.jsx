import { useState } from 'react'
import { Mail, Linkedin, Github, Send, Download } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { contact } from '../data/site.js'

const projectTypes = [
  'Flutter mobile app',
  'Business website',
  'Firebase integration',
  'Business dashboard',
  'Google Sheets automation',
  'Something else',
]

function buildMessage(f) {
  return [
    `Hello Saranya,`,
    ``,
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    `Project type: ${f.type}`,
    ``,
    `Project details:`,
    f.details,
  ].join('\n')
}

function Social({ href, icon: Icon, label }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10"
      >
        <Icon size={18} className="text-teal-soft" /> {label}
      </a>
    )
  }
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-dashed border-white/15 px-4 py-3 text-sm text-slate-400">
      <span className="flex items-center gap-3">
        <Icon size={18} /> {label}
      </span>
      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium">
        Coming soon
      </span>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: projectTypes[0], details: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // No backend: the form prepares an email in the visitor's own email app.
  const subject = encodeURIComponent(`Project enquiry: ${form.type}`)
  const body = encodeURIComponent(buildMessage(form))
  const mailHref = `${contact.mailto}?subject=${subject}&body=${body}`

  const onSubmit = (e) => {
    e.preventDefault()
    window.location.href = mailHref
  }

  const input =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-teal-mid focus:ring-2 focus:ring-teal-mid/30'

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's build something useful together</h2>
          <p className="mt-4">
            Tell me about your idea. I'll reply personally and help you decide the best next step.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-7 text-white shadow-card">
              <h3 className="font-display text-xl font-bold">Get in touch</h3>
              <div className="mt-6 space-y-3">
                <a
                  href={contact.mailto}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:bg-white/10"
                >
                  <Mail size={18} className="shrink-0 text-teal-soft" />
                  <span className="break-all">{contact.email}</span>
                </a>
                <Social href={contact.linkedin} icon={Linkedin} label="LinkedIn" />
                <Social href={contact.github} icon={Github} label="GitHub" />
                <a
                  href="/SaranyaApp-Portfolio.pdf"
                  download
                  className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-teal-mid to-teal-soft px-4 py-3 text-sm font-semibold text-navy-950 transition hover:scale-[1.02]"
                >
                  <Download size={18} /> Download PDF Portfolio
                </a>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-slate-300">
                Available for clients in India, the USA, UK, Australia and Europe.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card"
            >
              <h3 className="font-display text-xl font-bold text-navy-900">Project enquiry</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-navy-900">
                    Your name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    className={input}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-navy-900">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className={input}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="type" className="mb-1.5 block text-xs font-semibold text-navy-900">
                  What do you need?
                </label>
                <select id="type" value={form.type} onChange={update('type')} className={input}>
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="details" className="mb-1.5 block text-xs font-semibold text-navy-900">
                  Project details
                </label>
                <textarea
                  id="details"
                  required
                  rows={5}
                  value={form.details}
                  onChange={update('details')}
                  className={input}
                  placeholder="Briefly describe your idea, timeline and budget range."
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button type="submit" className="btn-primary">
                  <Send size={16} /> Send by Email
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                This form opens your email app with your message ready to send. Nothing is stored
                on this website.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
