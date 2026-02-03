import Link from 'next/link';
import Image from 'next/image';

export default function Solutions() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A comprehensive suite of tools designed to modernize your supply chain and operations.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-24">
                {/* Solution 1: Procurement */}
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Procurement Automation</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Stop manual data entry and email chains. Our AI automates purchase requisitions, supplier communications, and invoice matching.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <ListItem text="Intelligent Vendor Selection" />
                            <ListItem text="Automated PO Generation" />
                            <ListItem text="Real-time Spend Analysis" />
                        </ul>
                    </div>
                    <div className="flex-1 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                        <Image
                            src="/images/procurement-dashboard.png"
                            alt="Procurement Automation Dashboard"
                            fill
                            className="object-cover object-left-top hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </section>

                {/* Solution 2: Tendering */}
                <section className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Tendering Platform</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Launch tenders in minutes, not days. Compare bids with AI-driven scoring that highlights value beyond just price.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <ListItem text="One-click RFP/RFQ Creation" />
                            <ListItem text="Side-by-side Bid Comparison" />
                            <ListItem text="Audit-ready History" />
                        </ul>
                    </div>
                    <div className="flex-1 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                        <Image
                            src="/images/tendering-platform.png"
                            alt="Smart Tendering Platform Interface"
                            fill
                            className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </section>

                {/* Solution 3: ERP */}
                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Modular ERFS (ERP)</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Enterprise Resource & Financial Systems that grow with you. Activate only the modules you need.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <ListItem text="Integrated General Ledger" />
                            <ListItem text="Inventory Management" />
                            <ListItem text="HR & Payroll" />
                        </ul>
                    </div>
                    <div className="flex-1 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                        <Image
                            src="/images/erp-modules.png"
                            alt="Modular ERP System Grid"
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </section>

                {/* Solution 4: Traceability */}
                <section className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Full-cycle Traceability</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Specialized for complex supply chains like Aqua. Track provenance from source to final delivery.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <ListItem text="Batch/Lot Tracking" />
                            <ListItem text="QR Code Generation" />
                            <ListItem text="Compliance Certification" />
                        </ul>
                    </div>
                    <div className="flex-1 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                        <Image
                            src="/images/supply-chain.png"
                            alt="Supply Chain Traceability Map"
                            fill
                            className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </section>

                <div className="text-center pt-12">
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Request a Specialized Demo
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ListItem({ text }: { text: string }) {
    return (
        <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {text}
        </li>
    );
}
