import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white opacity-70" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Smarter Procurement. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Transparent Supply Chains.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              AI-powered modular ERP and full-cycle traceability for modern enterprises.
              Automate tendering, track inventory, and optimize decisions in real-time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ProcureAI?</h2>
            <p className="text-lg text-gray-600">Built for speed, transparency, and intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="Accelerated Procurement"
              description="Cut cycle times by 50% with AI-driven tender analysis and automated vendor scoring."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-indigo-600" />}
              title="Full-Cycle Traceability"
              description="End-to-end visibility from source to shelf. Aqua supply chain specialized tracking."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-emerald-600" />}
              title="Modular ERFS"
              description="Flexible ERP modules that adapt to your workflow. Finance, Inventory, and HR integrated."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Step number="1" title="Connect" desc="Integrate with your existing systems securely." />
            <Step number="2" title="Analyze" desc="AI optimizes your procurement and supply data." />
            <Step number="3" title="Scale" desc="Grow efficiently with actionable insights." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to transform your operations?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-white border rounded-xl hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative p-6">
      <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
