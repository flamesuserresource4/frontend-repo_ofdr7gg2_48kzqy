import { ShieldCheck, Database, Sparkles, LineChart } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified at source',
    desc: 'Every contact is validated with multi-step checks to ensure deliverability and accuracy.'
  },
  {
    icon: Database,
    title: 'Enriched data',
    desc: 'Full contact details with AI-generated icebreakers and company context.'
  },
  {
    icon: Sparkles,
    title: 'Custom targeting',
    desc: 'Filters for location, title, company size, and keywords to match your ICP.'
  },
  {
    icon: LineChart,
    title: 'CRM-ready delivery',
    desc: 'Seamless exports to Google Sheets, HubSpot and Salesforce.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b0f17] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/15 transition">
                <f.icon className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
