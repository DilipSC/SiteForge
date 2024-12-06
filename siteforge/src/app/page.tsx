import Link from 'next/link'
import { ArrowRight, Code, Zap, Layers } from 'lucide-react'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors">
      <div className="mb-4 inline-block p-3 bg-white/10 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">SiteForge</div>
          <div className="space-x-4">
            <Link href="#features" className="hover:text-gray-300 transition-colors">Features</Link>
            <Link href="/login" className="hover:text-gray-300 transition-colors">Get Started</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 pt-28">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Forge Your Site</h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl">
          Craft blazing-fast static sites with the power of SiteForge. 
          Simple. Efficient. Powerful.
        </p>
        <Link 
          href="/login"
          className="group bg-white text-black px-6 py-3 rounded-full text-lg font-semibold flex items-center hover:bg-gray-200 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </main>

      <section id="features" className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why SiteForge?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Lightning Fast"
            description="Generate static sites in the blink of an eye."
          />
          <FeatureCard 
            icon={<Code size={24} />}
            title="Developer Friendly"
            description="Intuitive APIs and extensive documentation."
          />
          <FeatureCard 
            icon={<Layers size={24} />}
            title="Flexible Architecture"
            description="Build simple blogs or complex web apps with ease."
          />
        </div>
      </section>

      <footer className="py-6 text-center text-sm">
        © {new Date().getFullYear()} SiteForge. All rights reserved.
      </footer>
    </div>
  )
}

