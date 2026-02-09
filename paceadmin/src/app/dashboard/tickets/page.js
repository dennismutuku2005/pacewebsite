"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Ticket, Search, Plus, Filter,
    MessageSquare, User, Clock, CheckCircle2,
    AlertCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TicketsPage() {
    const tickets = [
        { id: 'TIC-1024', subj: 'Speed Issues', user: 'James Kamau', priority: 'High', status: 'Open', time: '10m ago' },
        { id: 'TIC-1025', subj: 'Router Config', user: 'Sarah Wanjira', priority: 'Med', status: 'In Progress', time: '2h ago' },
        { id: 'TIC-1026', subj: 'Payment Error', user: 'David Omari', priority: 'Low', status: 'Resolved', time: '1d ago' },
    ]

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-pace-purple-dark text-[24px]">Support Tickets</h1>
                    <p className="text-[13px] text-gray-500 font-medium">Manage and respond to customer network inquiries.</p>
                </div>
                <button className="px-6 py-2.5 bg-pace-purple text-white rounded-xl text-xs font-black shadow-lg shadow-pace-purple/10 active:scale-95 flex items-center gap-2">
                    <Plus size={16} /> New Ticket
                </button>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Open', val: '24', color: 'text-red-500' },
                    { label: 'In Progress', val: '12', color: 'text-pace-purple' },
                    { label: 'Resolved', val: '142', color: 'text-pace-green' },
                    { label: 'Avg Time', val: '14m', color: 'text-gray-400' },
                ].map((s) => (
                    <div key={s.label} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-2">{s.label}</p>
                        <h4 className={cn("text-lg font-black leading-none", s.color)}>{s.val}</h4>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Subject</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Priority</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-[13px]">
                            {tickets.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50/50 transition-all cursor-pointer group">
                                    <td className="px-6 py-5">
                                        <p className="font-bold text-gray-800 group-hover:text-pace-purple transition-colors">{t.subj}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[10px] font-bold text-gray-300 uppercase">{t.id}</span>
                                            <span className="text-[10px] font-medium text-gray-400">• {t.user}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={cn(
                                            "text-[11px] font-bold",
                                            t.priority === 'High' ? "text-orange-500" : "text-gray-400"
                                        )}>{t.priority}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <span className={cn(
                                            "px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-widest",
                                            t.status === 'Open' ? "bg-red-50 text-red-600" :
                                                t.status === 'In Progress' ? "bg-pace-purple/5 text-pace-purple" :
                                                    "bg-pace-green/5 text-pace-green"
                                        )}>{t.status}</span>
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
