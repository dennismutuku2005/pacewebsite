"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Plus, Filter, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TicketsPage() {
    const tickets = [
        { id: 'TIC-1024', subject: 'Portal Authentication Failure', client: 'SkyNet Solutions Ltd', priority: 'Urgent', status: 'Working', owner: 'A. Joe', age: '10m ago' },
        { id: 'TIC-1025', subject: 'API Webhook Delayed Sync', client: 'Coast Connect Ltd', priority: 'High', status: 'Pending', owner: 'Unassigned', age: '2h ago' },
        { id: 'TIC-1026', subject: 'Invoice Auto-Sync Matcher', client: 'RiftWiFi systems', priority: 'Medium', status: 'Solved', owner: 'M. Wanjiku', age: '1d ago' },
        { id: 'TIC-1027', subject: 'Regional Node Latency Spike', client: 'Western Fiber Net', priority: 'High', status: 'In Review', owner: 'Dev Team', age: '2d ago' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-gray-900 leading-none">Support & Incident Desk</h1>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">Monitoring and resolving technical SaaS infrastructure inquiries.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded text-[12px] font-bold shadow-none hover:opacity-90 transition-all uppercase tracking-widest leading-none">
                    <Plus size={14} />
                    New Case Entry
                </button>
            </div>

            {/* Mini Summary Matrix - Excel Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded divide-x divide-gray-200 overflow-hidden bg-white">
                {[
                    { label: 'Unresolved Cases', val: '24', color: 'text-pace-purple' },
                    { label: 'Avg Solve Time', val: '2.4h', color: 'text-gray-900' },
                    { label: 'Solved (30d)', val: '412', color: 'text-pace-green' },
                    { label: 'System Uptime', val: '100%', color: 'text-gray-400' },
                ].map((s) => (
                    <div key={s.label} className="p-4 bg-white">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <h4 className={cn("text-[20px] font-black leading-none tracking-tight", s.color)}>{s.val}</h4>
                    </div>
                ))}
            </div>

            {/* Main Data View - Excel Table */}
            <div className="border border-gray-200 rounded overflow-hidden bg-white">
                <div className="px-5 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Search size={14} className="text-gray-300" />
                        <input type="text" placeholder="Lookup incident..." className="bg-transparent border-none outline-none text-[11px] font-bold w-48" />
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded text-[10px] font-black uppercase text-gray-400 hover:text-gray-900 bg-white">Filter</button>
                        <button className="px-3 py-1 border border-gray-200 rounded text-[10px] font-black uppercase text-gray-400 hover:text-gray-900 bg-white">Sort</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100">Ticket ref.</th>
                                <th className="px-5 py-3 border-r border-gray-100">Incident Subject</th>
                                <th className="px-5 py-3 border-r border-gray-100">Tenant Impacted</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Severity</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Status</th>
                                <th className="px-5 py-3 text-right">Age</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-gray-600">
                            {tickets.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <td className="px-5 py-4 font-mono text-gray-300 group-hover:text-gray-900 border-r border-gray-50">{t.id}</td>
                                    <td className="px-5 py-4 border-r border-gray-50 font-bold text-gray-800 underline decoration-gray-100 underline-offset-4">
                                        {t.subject}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50">
                                        <p className="font-bold text-gray-500 leading-none">{t.client}</p>
                                        <p className="text-[9px] text-gray-300 font-black uppercase tracking-tighter mt-1">Assignee: {t.owner}</p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center font-black uppercase text-[10px] tracking-widest">
                                        <span className={cn(
                                            t.priority === 'Urgent' ? "text-red-500" :
                                                t.priority === 'High' ? "text-orange-500" : "text-gray-400"
                                        )}>{t.priority}</span>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest border-b-2",
                                            t.status === 'Solved' ? "text-pace-green border-pace-green/10" : "text-blue-500 border-blue-100"
                                        )}>{t.status}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right font-black text-gray-200 group-hover:text-gray-400 transition-colors">
                                        {t.age}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-gray-200">
                    <button className="text-[10px] font-black text-gray-300 uppercase tracking-widest hover:text-gray-900 transition-colors">View Archived Cases &rarr;</button>
                </div>
            </div>

        </div>
    )
}
