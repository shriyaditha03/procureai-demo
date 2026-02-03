import { Shield, Smartphone, Layers, FileText } from 'lucide-react';

export default function Platform() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">The ProcureAI Platform</h1>
                    <p className="text-xl text-gray-600">Built for scale, security, and seamless integration.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <Shield className="w-12 h-12 text-blue-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
                        <p className="text-gray-600">
                            Bank-grade encryption, detailed audit logs for every transaction, and role-based access control (RBAC).
                            Compliant with major data protection standards.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <Smartphone className="w-12 h-12 text-indigo-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile First</h3>
                        <p className="text-gray-600">
                            Full functionality on iOS and Android. Approvals, tracking, and insights on the go.
                            Responsive design ensures your team is never out of the loop.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <Layers className="w-12 h-12 text-purple-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">API Ready</h3>
                        <p className="text-gray-600">
                            Robust REST and GraphQL APIs. Pre-built connectors for SAP, Oracle, and Microsoft Dynamics.
                            Export data anytime to Excel, PDF, or CSV.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border">
                        <FileText className="w-12 h-12 text-emerald-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Docs</h3>
                        <p className="text-gray-600">
                            AI-powered document processing. Automatically extract data from invoices, receipts, and contracts
                            with 99% accuracy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
