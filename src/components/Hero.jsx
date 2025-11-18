import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0b0f17] text-white">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f17]/30 to-[#0b0f17] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Denflow AI is live — Generate B2B leads with precision
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
          Modern B2B Lead Generation
          <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-orange-300 bg-clip-text text-transparent">Powered by AI</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
          Find, verify, and enrich ideal buyer contacts. Delivered weekly to your CRM or Google Sheets with personalized icebreakers.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90 transition">Get Started</a>
          <a href="#how" className="px-5 py-3 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition">See how it works</a>
        </motion.div>
      </div>
    </section>
  )
}
