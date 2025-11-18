export default function Testimonials() {
  const items = [
    { name: 'Amelia Chen', title: 'VP Sales, NovaCloud', quote: 'Denflow AI replaced 3 tools and doubled our meeting rate in 45 days.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Diego Ramirez', title: 'Founder, PipeForge', quote: 'The quality is insane. Personalized intros read like our AEs wrote them.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sophia Patel', title: 'Head of Growth, Quanta', quote: 'From list chaos to a predictable pipeline in 2 weeks. Worth every dollar.', img: 'https://images.unsplash.com/photo-1541214113241-7f3d9310c7c7?q=80&w=400&auto=format&fit=crop' },
  ]
  return (
    <section id="testimonials" className="bg-[#0b0f17] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">What clients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-white/60">{t.title}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
