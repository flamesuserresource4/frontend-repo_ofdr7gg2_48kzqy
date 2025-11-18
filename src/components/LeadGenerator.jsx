import { useState, useRef } from 'react'
import { Loader2, Bell, X } from 'lucide-react'

export default function LeadGenerator() {
  const [form, setForm] = useState({ location: '', job_title: '', company_size_range: '', industry_keywords: '' })
  const [loading, setLoading] = useState(false)
  const [jobId, setJobId] = useState(null)
  const [status, setStatus] = useState(null)
  const [leads, setLeads] = useState([])
  const [showModal, setShowModal] = useState(false)
  const audioRef = useRef(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.location || !form.job_title || !form.company_size_range || !form.industry_keywords) return

    setLoading(true)
    setShowModal(true)
    setStatus('Submitting...')
    setLeads([])

    try {
      const resp = await fetch(`${baseUrl}/api/leads/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: form.location,
          job_title: form.job_title,
          company_size_range: form.company_size_range,
          industry_keywords: form.industry_keywords.split(',').map(s => s.trim()).filter(Boolean)
        })
      })
      const data = await resp.json()
      setJobId(data.job_id)
      setStatus('Processing...')

      // poll status
      const interval = setInterval(async () => {
        const s = await fetch(`${baseUrl}/api/leads/status/${data.job_id}`).then(r => r.json())
        if (s.status === 'ready') {
          clearInterval(interval)
          const results = await fetch(`${baseUrl}/api/leads/results/${data.job_id}`).then(r => r.json())
          setLeads(results.leads || [])
          setStatus('Ready')
          if (audioRef.current) audioRef.current.play()
          // show browser notification
          if ('Notification' in window) {
            if (Notification.permission === 'granted') new Notification('Your leads are ready!')
            else if (Notification.permission !== 'denied') {
              const perm = await Notification.requestPermission()
              if (perm === 'granted') new Notification('Your leads are ready!')
            }
          }
        }
      }, 1500)
    } catch (e) {
      setStatus('Error generating leads')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="generate" className="bg-[#0b0f17] text-white py-20">
      <audio ref={audioRef} src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" preload="auto" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Generate leads</h2>
            <p className="mt-2 text-white/70">Fill in all fields and hit the button. We'll notify you when your list is ready.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Location</label>
                <input name="location" value={form.location} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" placeholder="e.g., United States" required />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Job Title</label>
                <input name="job_title" value={form.job_title} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" placeholder="e.g., Head of Marketing" required />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Company Size Range</label>
                <input name="company_size_range" value={form.company_size_range} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" placeholder="e.g., 51-200" required />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Industry Keywords</label>
                <input name="industry_keywords" value={form.industry_keywords} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/30" placeholder="e.g., SaaS, Fintech" required />
              </div>
              <button type="submit" className="w-full md:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90 transition">
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Bell size={18} />} 
                Get Your Leads NOW
              </button>
            </form>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 min-h-[280px]">
            <div className="flex items-center justify-between">
              <p className="text-white/70 text-sm">Status: <span className="font-medium text-white">{status || 'Idle'}</span></p>
              {jobId && <span className="text-xs text-white/50">Job: {jobId}</span>}
            </div>
            <div className="mt-4 overflow-auto max-h-96">
              {leads.length === 0 ? (
                <p className="text-white/60">No leads yet. Submit a request to see results here.</p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-white/60 text-left">
                      <th className="py-2 pr-4">Name</th>
                      <th className="py-2 pr-4">Company</th>
                      <th className="py-2 pr-4">Title</th>
                      <th className="py-2 pr-4">Email</th>
                      <th className="py-2 pr-4">LinkedIn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((l) => (
                      <tr key={l._id} className="border-t border-white/10">
                        <td className="py-2 pr-4">{l.name}</td>
                        <td className="py-2 pr-4">{l.company}</td>
                        <td className="py-2 pr-4">{l.title}</td>
                        <td className="py-2 pr-4">{l.email}</td>
                        <td className="py-2 pr-4"><a className="text-indigo-300 hover:underline" href={l.linkedin} target="_blank">Profile</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-[#0f1522] border border-white/10 shadow-xl">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 p-1 rounded hover:bg-white/10">
              <X className="text-white" size={18} />
            </button>
            <div className="flex items-center gap-3">
              {loading ? <Loader2 className="animate-spin text-white" /> : <Bell className="text-emerald-400" />}
              <div>
                <p className="font-semibold">{loading ? 'Generating your leads...' : 'Ready!'}</p>
                <p className="text-white/70 text-sm">{loading ? 'This usually takes a few seconds.' : 'Your leads have been generated.'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
