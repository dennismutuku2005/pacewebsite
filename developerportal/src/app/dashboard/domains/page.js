"use client"

import React from 'react'
import { Globe, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function DomainsPage() {
    const domains = [
        { id: 1, name: 'pacewifi.com', type: 'Primary Domain', status: 'Active', ssl: true, expiry: '2027-05-12' },
        { id: 2, name: 'app.pacewifi.com', type: 'Subdomain', status: 'Active', ssl: true, expiry: '2027-05-12' },
        { id: 3, name: 'auth.pacewifi.com', type: 'Subdomain', status: 'Active', ssl: true, expiry: '2027-05-12' },
        { id: 4, name: 'status.pacewifi.com', type: 'Subdomain', status: 'Maintenance', ssl: true, expiry: '2026-11-30' },
        { id: 5, name: 'legacy-api.pacewifi.com', type: 'Subdomain', status: 'Inactive', ssl: false, expiry: 'Expired' },
    ]

    return (
        <div className="space-y-6 animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Domains & Subdomains</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your domain portfolio and SSL configurations.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                    <Globe size={16} />
                    Add Domain
                </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                            <th className="px-4 py-3 font-semibold">Domain Name</th>
                            <th className="px-4 py-3 font-semibold">Type</th>
                            <th className="px-4 py-3 font-semibold">Status</th>
                            <th className="px-4 py-3 font-semibold">SSL</th>
                            <th className="px-4 py-3 font-semibold">Expiry</th>
                            <th className="px-4 py-3 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {domains.map((domain) => (
                            <tr key={domain.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium text-gray-900">{domain.name}</td>
                                <td className="px-4 py-3 text-gray-500">{domain.type}</td>
                                <td className="px-4 py-3">
                                    <Badge variant={domain.status === 'Active' ? 'success' : domain.status === 'Inactive' ? 'error' : 'warning'}>
                                        {domain.status}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3">
                                    {domain.ssl ? (
                                        <div className="flex items-center gap-1.5 text-green-600 text-xs font-medium">
                                            <ShieldCheck size={14} /> Secured
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-red-500 text-xs font-medium">
                                            <AlertCircle size={14} /> No SSL
                                        </div>
                                    )}
                                </td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{domain.expiry}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-pace-purple hover:underline text-xs font-medium flex items-center gap-1 justify-end">
                                        Manage <ExternalLink size={12} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
