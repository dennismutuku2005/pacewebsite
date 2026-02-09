"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Ticket, Search, Filter, Plus, Clock, MessageSquare, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SupportDeskPage() {
    const tickets = [
        { id: 'TKT-9021', subject: 'Regional Auth Failure', customer: 'SkyNet Solutions Ltd', priority: 'Critical', status: 'Open', age: '12m ago' },
        { id: 'TKT-9022', subject: 'Speed Cap Mismatch', customer: 'Coast Connect', priority: 'High', status: 'Pending', age: '45m ago' },
        { id: 'TKT-9023', subject: 'Accounting Sync Error', customer: 'RiftWiFi systems', priority: 'Medium', status: 'Resolved', age: '2h ago' },
        { id: 'TKT-9024', subject: 'New IP Pool Request', customer: 'Western Fiber', priority: 'Low', status: 'Open', age: '4h ago' },
        { id: 'TKT-9025', subject: 'Cloud DB Latency', customer: 'LakeSide net', priority: 'Critical', status: 'Investigating', age: '5h ago' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none">Global Support Incident Desk</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Tracking technical escalations and system assistance requests for ISP tenants.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-admin-value text-white rounded text-[11px] font-black hover:bg-black transition-all uppercase tracking-widest shadow-none">
                    <Plus size={14} />
                    Report Incident
                </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-pace-border rounded divide-x divide-pace-border overflow-hidden bg-white shadow-none">
                {[
                    { label: 'Active Reports', val: '24', note: '+3 trending' },
                    { label: 'Critical Ops', val: '04', note: 'Immediate care', color: 'text-red-500' },
                    { label: 'Avg Resolution', val: '1.4h', note: 'Nominal rate' },
                    { label: 'CSAT Index', val: '98.2%', note: 'Global score' },
                ].map((s, i) => (
                    <div key={i} className="p-5">
                        <p className="text-[9px] font-black text-admin-label uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <h4 className={cn("text-[20px] font-black leading-none tracking-tight", s.color || "text-admin-value")}>{s.val}</h4>
                        <p className="text-[10px] font-black text-admin-dim mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Incident Table - Excel Style */}
            <div className="border border-pace-border rounded bg-white overflow-hidden shadow-none">
                <div className="px-5 py-3 border-b border-pace-border bg-pace-bg-subtle flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Active Incident Matrix</h4>
                    <span className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Auto-Refresh enabled</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-100">Ticket ID</th>
                                <th className="px-5 py-3 border-r border-gray-100">Incident Details</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Severity</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Lifecycle</th>
                                <th className="px-5 py-3 text-right">Age</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {tickets.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50 transition-all group">
                                    <td className="px-5 py-4 border-r border-gray-50 font-mono text-admin-dim group-hover:text-admin-value transition-colors font-black uppercase">{t.id}</td>
                                    <td className="px-5 py-4 border-r border-gray-50">
                                        <p className="font-black text-admin-value leading-none">{t.subject}</p>
                                        <p className="text-[10px] text-admin-label font-black uppercase tracking-tighter mt-1.5 opacity-80">{t.customer}</p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest px-2 py-0.5 rounded-sm border",
                                            t.priority === 'Critical' ? "text-red-600 bg-red-50 border-red-100" :
                                                t.priority === 'High' ? "text-orange-600 bg-orange-50 border-orange-100" :
                                                    "text-blue-600 bg-blue-50 border-blue-100"
                                        )}>{t.priority}</span>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest border-b-2",
                                            t.status === 'Resolved' ? "text-pace-green border-pace-green/10" : "text-admin-label border-gray-200"
                                        )}>{t.status}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right font-black text-admin-dim group-hover:text-admin-value transition-colors uppercase">
                                        {t.age}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
