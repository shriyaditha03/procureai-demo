import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900">ProcureAI</h3>
                        <p className="text-sm text-gray-600">
                            Transforming procurement with AI-driven intelligence and modular ERP solutions.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Solutions</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/solutions" className="hover:text-blue-600">Procurement</Link></li>
                            <li><Link href="/solutions" className="hover:text-blue-600">Tendering</Link></li>
                            <li><Link href="/solutions" className="hover:text-blue-600">Traceability</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                            <li><Link href="/admin/leads" className="text-red-600 hover:text-red-800 font-semibold">Admin Portal</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>sales@procureai.demo</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} ProcureAI. All rights reserved.
                    </p>
                    <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium mt-4 md:mt-0">
                        Demo Mode: Local Storage Only
                    </div>
                </div>
            </div>
        </footer>
    );
}
