import Link from 'next/link';
import { Building2, Globe2, ShoppingBag, Droplets } from 'lucide-react';

export default function Industries() {
    return (
        <div className="min-h-screen bg-white">
            <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
                <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">
                    Tailored solutions for complex regulatory environments and high-velocity supply chains.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <IndustryCard
                        icon={<Globe2 className="w-12 h-12 text-blue-500" />}
                        title="Government & Public Sector"
                        description="Ensure 100% compliance with automated tenders, transparent audit trails, and secure vendor management."
                    />
                    <IndustryCard
                        icon={<Building2 className="w-12 h-12 text-indigo-500" />}
                        title="Large Enterprises"
                        description="Connect disparate systems with our modular ERP. Gain visibility across global operations and optimize spend."
                    />
                    <IndustryCard
                        icon={<ShoppingBag className="w-12 h-12 text-purple-500" />}
                        title="MSMEs"
                        description="Level the playing field with enterprise-grade tools priced for growth. Automate procurement without the overhead."
                    />
                    <IndustryCard
                        icon={<Droplets className="w-12 h-12 text-cyan-500" />}
                        title="Aqua Supply Chain"
                        description="Specialized traceability for seafood processing. Track feed, quality, and origin from pond to plate."
                    />
                </div>

                <div className="mt-20 bg-blue-50 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't see your industry?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our platform is highly adaptable. Let's discuss how we can configure our modules for your specific needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    );
}

function IndustryCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
                {description}
            </p>
        </div>
    );
}
