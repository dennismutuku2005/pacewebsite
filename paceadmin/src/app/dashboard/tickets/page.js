"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Ticket, Plus, CheckCircle2,
    AlertCircle, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TicketsPage() {
    const tickets = [
        { id: 'TIC-1024', subj: 'Portal Auth Access', user: 'SkyNet Ken.', priority: 'Urgent', status: 'Working', time: '10m ago' },
        { id: 'TIC-1025', subj: 'Billing Webhook Delay', user: 'Coast Connect', priority: 'High', status: 'Pending', time: '2h ago' },
        { id: 'TIC-1026', subj: 'Invoice Auto-Sync', user: 'RiftWiFi', priority: 'Med', status: 'Solved', time: '1d ago' },
    ]

    return (
        <div className="space-y-10 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                    <h1 className="text-[32px] font-black text-pace-purple-dark tracking-tight leading-none">Support Desk</h1>
                    <p className="text-[15px] text-gray-400 mt-3 font-semibold">Managed incident reports for ISP software tenants.</p>
                </div>
                <button className="px-8 py-3.5 bg-pace-purple text-white rounded-[18px] text-[15px] font-black shadow-xl shadow-pace-purple/10 active:scale-95 flex items-center gap-2 leading-none transition-all">
                    <Plus size={20} /> Create New Case
                </button>
            </div>

            {/* Grid - Mini Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: 'Active Cases', val: '24', color: 'text-pace-purple' },
                    { label: 'Awaiting Fix', val: '08', color: 'text-orange-500' },
                    { label: 'Solved (30d)', val: '412', color: 'text-pace-green' },
                    { label: 'Avg Uptime', val: '100%', color: 'text-gray-300' },
                ].map((s) => (
                    <div key={s.label} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm transition-all hover:border-pace-purple/10">
                        <p className="text-[11px] font-black text-gray-300 uppercase tracking-[3px] mb-4 leading-none">{s.label}</p>
                        <h4 className={cn("text-[32px] font-black leading-none tracking-tight", s.color)}>{s.val}</h4>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-10 py-6 text-[11px] font-black text-gray-300 uppercase tracking-[2.5px]">Software Incident</th>
                                <th className="px-10 py-6 text-[11px] font-black text-gray-300 uppercase tracking-[2.5px]">Severity</th>
                                <th className="px-10 py-6 text-[11px] font-black text-gray-300 uppercase tracking-[2.5px] text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {tickets.map((t, i) => (
                                <tr key={t.id} className="hover:bg-gray-50/50 transition-all cursor-pointer group">
                                    <td className="px-10 py-8">
                                        <p className="text-[17px] font-black text-gray-900 group-hover:text-pace-purple transition-colors leading-none tracking-tight">{t.subj}</p>
                                        <div className="flex items-center gap-4 mt-3">
                                            <span className="text-[11px] font-black text-gray-200 uppercase tracking-[2.5px]">{t.id}</span>
                                            <span className="text-[11px] font-black text-gray-300 uppercase tracking-widest">• {t.user}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={cn(
                                            "text-[12px] font-black uppercase tracking-[2.5px] leading-none",
                                            t.priority === 'Urgent' ? "text-red-500" :
                                                t.priority === 'High' ? "text-orange-500" : "text-gray-300"
                                        )}>{t.priority}</span>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <span className={cn(
                                            "px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[2px] border inline-flex items-center gap-2 leading-none",
                                            t.status === 'Solved' ? "bg-pace-green/5 text-pace-green border-pace-green/20" : "bg-blue-50 text-blue-600 border-blue-200"
                                        )}>
                                            {t.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-10 border-t border-gray-50 bg-gray-50/30 flex justify-center">
                    <button className="text-[13px] font-black text-pace-purple uppercase tracking-[4px] hover:underline leading-none">Support Archives &rarr;</button>
                </div>
            </div>

        </div>
    )
}
