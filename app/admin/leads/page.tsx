'use client';

import { useEffect, useState } from 'react';
import { Trash2, RefreshCw, Loader2 } from 'lucide-react';

interface DemoRequest {
    id: string;
    fullName: string;
    organization: string;
    email: string;
    phone: string | null;
    industry: string;
    message: string;
    createdAt: string;
}

export default function AdminLeads() {
    const [leads, setLeads] = useState<DemoRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/demo-requests');
            if (res.ok) {
                const data = await res.json();
                setLeads(data);
            }
        } catch (error) {
            console.error('Failed to fetch leads', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleClearAll = async () => {
        if (!confirm('Are you sure you want to delete ALL leads? This cannot be undone.')) return;

        setDeleting(true);
        try {
            const res = await fetch('/api/demo-requests', { method: 'DELETE' });
            if (res.ok) {
                await fetchLeads();
            }
        } catch (error) {
            console.error('Failed to delete leads', error);
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Demo Requests</h1>
                    <div className="flex space-x-4">
                        <button
                            onClick={fetchLeads}
                            className="flex items-center px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition"
                        >
                            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                            Refresh
                        </button>
                        <button
                            onClick={handleClearAll}
                            disabled={deleting || leads.length === 0}
                            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {deleting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Trash2 className="w-4 h-4 mr-2" />}
                            Clear All Data
                        </button>
                    </div>
                </div>

                <div className="bg-white shadow-sm rounded-xl overflow-hidden border">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name / Org</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            <Loader2 className="w-8 h-8 mx-auto animate-spin mb-2" />
                                            Loading leads...
                                        </td>
                                    </tr>
                                ) : leads.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            No demo requests found.
                                        </td>
                                    </tr>
                                ) : (
                                    leads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(lead.createdAt).toLocaleDateString()} <br />
                                                <span className="text-xs text-gray-400">{new Date(lead.createdAt).toLocaleTimeString()}</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{lead.fullName}</div>
                                                <div className="text-sm text-gray-500">{lead.organization}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{lead.email}</div>
                                                {lead.phone && <div className="text-sm text-gray-500">{lead.phone}</div>}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {lead.industry}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={lead.message}>
                                                {lead.message || '-'}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
