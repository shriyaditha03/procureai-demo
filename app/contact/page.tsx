'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForDemo() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        organization: '',
        email: '',
        phone: '',
        industry: 'Technology',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const industries = [
        'Technology',
        'Manufacturing',
        'Government',
        'Agriculture/Aqua',
        'Retail',
        'Healthcare',
        'Other',
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/demo-requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            // Reset form option or redirect
        } catch (err: any) {
            setStatus('error');
            setErrorMessage(err.message || 'Failed to submit request.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === 'success') {
        return (
            <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h2>
                    <p className="text-gray-600 mb-6">
                        Thank you, {formData.fullName}. Our team will review your request and get back to you shortly at {formData.email}.
                    </p>
                    <button
                        onClick={() => { setStatus('idle'); setFormData({ ...formData, message: '' }); }}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Submit another request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">Book a Demo</h1>
                    <p className="mt-2 text-gray-600">See how ProcureAI can transform your operations.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization *</label>
                            <input
                                type="text"
                                name="organization"
                                id="organization"
                                required
                                value={formData.organization}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                                placeholder="Acme Corp"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email *</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                                placeholder="john@acme.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry *</label>
                        <select
                            name="industry"
                            id="industry"
                            required
                            value={formData.industry}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                        >
                            {industries.map((ind) => (
                                <option key={ind} value={ind}>{ind}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Requirements / Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                            placeholder="Tell us about your specific needs..."
                        />
                    </div>

                    {status === 'error' && (
                        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
                    >
                        {status === 'loading' ? 'Submitting...' : 'Request Demo'}
                    </button>
                </form>
            </div>
        </div>
    );
}
