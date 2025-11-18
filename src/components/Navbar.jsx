import { Menu, LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f17]/60 bg-[#0b0f17]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-400 to-orange-300" />
          <span className="font-semibold text-white">Denflow AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#auth" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-white/90 transition">
            <LogIn size={18} /> Login
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-white/10 text-white">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}