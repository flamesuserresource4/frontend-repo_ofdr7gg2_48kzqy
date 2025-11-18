import { Check } from 'lucide-react'

function Tier({ name, price, features, highlight, badge }) {
  return (
    <div className={`relative p-6 rounded-2xl border transition group ${highlight ? 'bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/10 to-orange-500/10 border-white/20' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
      {badge && (
        <span className="absolute -top-3 left-6 text-xs px-2 py-1 rounded-full bg-amber-400 text-black font-semibold">{badge}</span>
      )}
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-2 text-3xl font-bold text-white">{price}</p>
      <ul className="mt-4 space-y-2 text-white/80">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2"><Check size={18} className="text-emerald-400 mt-1" /> <span>{f}</span></li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <a href="#auth" className={`px-4 py-2 rounded-lg font-semibold transition ${highlight ? 'bg-white text-gray-900 hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/15'}`}>Get Started</a>
        <a href="#auth" className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15 transition">Book a Demo</a>
      </div>
    </div>
  )
}

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$1,500/month',
      features: [
        '500 verified leads per month (delivered weekly)',
        'Full contact data (email, phone, LinkedIn)',
        'AI-powered personalized icebreakers',
        'Company research and enrichment',
        'Delivered to Google Sheets',
        'Email support',
        'Cancel anytime'
      ]
    },
    {
      name: 'Growth',
      price: '$3,000/month',
      badge: 'MOST POPULAR',
      highlight: true,
      features: [
        '2,000 verified leads per month (delivered weekly)',
        'Everything in Starter',
        'CRM integration (HubSpot, Salesforce)',
        'Priority support (24-hour response)',
        'Custom targeting filters',
        'Monthly strategy call'
      ]
    },
    {
      name: 'Scale',
      price: '$5,000/month',
      features: [
        'Unlimited leads',
        'Everything in Growth',
        'Dedicated account manager',
        'Slack/WhatsApp support',
        'White-label option (for agencies)',
        'API access',
        'Custom integrations',
        'Quarterly business review'
      ]
    }
  ]

  return (
    <section id="pricing" className="bg-[#0b0f17] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <p className="text-white/70 text-sm">All plans include a 7-day satisfaction guarantee.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <Tier key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
