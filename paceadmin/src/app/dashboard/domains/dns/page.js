"use client"

import React, { useState, useEffect } from 'react'
import { Server, Search, Plus, Globe, ShieldCheck, Trash2, Edit2 } from 'lucide-react'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'

export default function DNSManagementPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const records = [
        { id: 1, type: 'A', name: '@', content: '192.168.1.10', ttl: '3600', status: 'Active' },
        { id: 2, type: 'CNAME', name: 'www', content: 'pacewisp.com', ttl: '3600', status: 'Active' },
        { id: 3, type: 'MX', name: '@', content: 'mail.pacewisp.com', ttl: '3600', status: 'Active' },
        { id: 4, type: 'TXT', name: '_google-site-verification', content: 'abc-123-def-456', ttl: '3600', status: 'Active' },
    ]

    return (
        <div className="space-y-6 font-figtree">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">DNS Management</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Configure name servers and DNS records for your managed domains.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest flex items-center gap-2 shadow-md">
                    <Plus size={14} />
                    Add Record
                </button>
            </div>

            {/* Selector Placeholder */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-pace-purple shadow-sm">
                    <Globe size={18} />
                </div>
                <div className="flex-1">
                    <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-60">Manage records for:</p>
                    <select className="bg-transparent font-extrabold text-admin-value outline-none text-[14px] uppercase cursor-pointer">
                        <option>pacewisp.com</option>
                        <option>coastconnect.net</option>
                        <option>riftwifi.co.ke</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="success" className="h-6">Verified</Badge>
                </div>
            </div>

            {/* Search */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search records..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Name / Host</th>
                                <th className="px-6 py-4">Value / Content</th>
                                <th className="px-6 py-4 text-center">TTL</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(4)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-6 w-12" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-48" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-12 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-6 w-16 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-8 w-16 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                records.map((record) => (
                                    <tr key={record.id} className="hover:bg-gray-50/50 transition-all group">
                                        <td className="px-6 py-5">
                                            <Badge variant="info" className="font-black h-7 w-12 justify-center">{record.type}</Badge>
                                        </td>
                                        <td className="px-6 py-5 font-bold text-admin-value uppercase">{record.name}</td>
                                        <td className="px-6 py-5">
                                            <code className="bg-gray-50 px-2 py-1 rounded border border-gray-100 text-admin-label text-[11px]">{record.content}</code>
                                        </td>
                                        <td className="px-6 py-5 text-center font-bold text-admin-dim">{record.ttl}</td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant="success">{record.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2 transition-all">
                                                <button className="p-2 text-admin-dim hover:text-pace-purple hover:bg-gray-50 rounded-lg transition-all" title="Edit Record">
                                                    <Edit2 size={14} />
                                                </button>
                                                <button className="p-2 text-admin-dim hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Delete Record">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Notice */}
            <div className="flex items-center gap-3 p-4 bg-pace-purple/5 border border-pace-purple/10 rounded-xl">
                <div className="p-2 bg-pace-purple/10 rounded-lg text-pace-purple">
                    <ShieldCheck size={18} />
                </div>
                <p className="text-[12px] font-medium text-admin-label leading-snug">
                    <span className="font-bold text-pace-purple uppercase tracking-[1px]">Propagation Notice:</span> Any changes made to DNS records can take up to 24-48 hours to propagate globally across all DNS servers.
                </p>
            </div>
        </div>
    )
}
