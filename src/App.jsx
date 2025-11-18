import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import StoryFlow from './components/StoryFlow'
import LeadGenerator from './components/LeadGenerator'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <StoryFlow />
        <Features />
        <LeadGenerator />
        <Testimonials />
        <Pricing />
        <footer className="bg-[#0b0f17] border-t border-white/10 py-10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Denflow AI. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App