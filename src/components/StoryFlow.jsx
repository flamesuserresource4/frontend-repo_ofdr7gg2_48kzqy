import { motion } from 'framer-motion'
import { Sparkles, Target, MailCheck, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Target,
    title: 'You know the ICP — but not the names',
    text: 'You\'ve defined the market. Yet your team still spends hours guessing titles, scraping lists, and stitching tools.'
  },
  {
    icon: Sparkles,
    title: 'Tell Denflow what “great” looks like',
    text: 'Choose a location, title, company size, and industry cues. We\'ll search, verify, and enrich every contact for signal and intent.'
  },
  {
    icon: MailCheck,
    title: 'We craft intros that feel human',
    text: 'Each contact gets a short, contextual opener pulled from public signals so your first touch lands like a warm intro.'
  },
  {
    icon: Rocket,
    title: 'Your reps launch with momentum',
    text: 'Leads drop straight into your CRM or Sheet every week. Fewer tools, more replies, faster pipeline.'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05, duration: 0.6 } })
}

export default function StoryFlow() {
  return (
    <section id="how" className="relative bg-[#0b0f17] text-white py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 w-72 h-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-10">
          {/* Progress rail */}
          <div className="hidden md:flex md:flex-col">
            <div className="sticky top-28">
              <p className="text-white/60 text-sm mb-3">The journey</p>
              <ol className="relative border-l border-white/10 pl-5 space-y-8">
                {steps.map((s, idx) => (
                  <li key={s.title} className="relative">
                    <span className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-orange-300" />
                    <p className="text-white/80 text-sm">{String(idx + 1).padStart(2, '0')} • {s.title}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Story cards */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A short story about turning intent into meetings</h2>
              <p className="mt-3 text-white/70 max-w-2xl">Follow the arc from problem to momentum. Each step is designed so your team spends time selling, not searching.</p>
            </motion.div>

            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <s.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Step {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="text-xl md:text-2xl font-semibold mt-1">{s.title}</h3>
                    <p className="mt-2 text-white/75 leading-relaxed">{s.text}</p>
                    {i === 1 && (
                      <a href="#generate" className="inline-flex mt-4 text-sm px-3 py-2 rounded-lg bg-white text-gray-900 font-medium hover:bg-white/90 transition">Try with your ICP</a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Epilogue CTA */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="mt-10">
              <div className="rounded-2xl border border-white/10 p-6 md:p-8 bg-[linear-gradient(135deg,rgba(99,102,241,0.08),rgba(236,72,153,0.08))]">
                <p className="text-white/80">The last scene: consistent pipeline.</p>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">Ready to turn this story into your weekly reality?</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="#pricing" className="px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90 transition">Start the next chapter</a>
                  <a href="#generate" className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15 border border-white/10 transition">Generate a sample list</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
