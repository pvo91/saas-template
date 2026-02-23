import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '{{PROJECT_NAME}} — {{TAGLINE}}',
  description: '{{PROJECT_DESCRIPTION}}',
  openGraph: {
    title: '{{PROJECT_NAME}}',
    description: '{{PROJECT_DESCRIPTION}}',
    url: '{{DOMAIN}}',
    siteName: '{{PROJECT_NAME}}',
    type: 'website',
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          {'{{PROJECT_NAME}}'}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {'{{PROJECT_DESCRIPTION}}'}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Get started
          </Link>
          <a
            href="#features"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Feature 1', desc: 'Description of your first feature.' },
            { title: 'Feature 2', desc: 'Description of your second feature.' },
            { title: 'Feature 3', desc: 'Description of your third feature.' },
          ].map(f => (
            <div key={f.title} className="p-6 border rounded-xl">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <span>&copy; {new Date().getFullYear()} {'{{COMPANY_NAME}}'}</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-800">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-800">Terms</Link>
            <Link href="/imprint" className="hover:text-gray-800">Imprint</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
