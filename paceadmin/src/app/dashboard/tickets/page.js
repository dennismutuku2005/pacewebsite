"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Ticket, Search, Plus, Filter,
    MessageSquare, User, Clock, CheckCircle2,
    AlertCircle, ArrowUpRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TicketsPage() {
    const tickets = [
        { id: 'TIC-1024', subject: 'Internet Speed Issues', user: 'James Kamau', priority: 'High', status: 'Open', time: '10 mins ago' },
        { id: 'TIC-1025', subject: 'Router Configuration', user: 'Sarah Wanjira', priority: 'Medium', status: 'In Progress', time: '2 hours ago' },
        { id: 'TIC-1026', subject: 'Payment Confirmation', user: 'David Omari', priority: 'Low', status: 'Resolved', time: 'Yesterday' },
        { id: 'TIC-1027', subject: 'Fibre Cut Report', user: 'System Alert', priority: 'Urgent', status: 'Open', time: 'Just now' },
    ]

    return (
        <div className="space-y-6 pb-10">

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">Total Open</p>
                    <h4 className="text-xl font-bold text-[#1e293b]">24</h4>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">In Progress</p>
                    <h4 className="text-xl font-bold text-blue-600">12</h4>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">Urgent</p>
                    <h4 className="text-xl font-bold text-red-500">3</h4>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">Avg Response</p>
                    <h4 className="text-xl font-bold text-green-500">14m</h4>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={16} />
                        <input type="text" placeholder="Search tickets..." className="pl-10 pr-4 py-2 bg-[#f4f7fe] border-none rounded-lg text-sm w-full outline-none" />
                    </div>
                    <button className="px-6 py-2 bg-[#4a6cf7] text-white rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 active:scale-95 flex items-center gap-2">
                        <Plus size={18} />
                        New Ticket
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Subject</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Customer</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Priority</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest text-right">Updated</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1f5f9]">
                            {tickets.map((t, i) => (
                                <tr key={t.id} className="hover:bg-[#f8fafc] transition-colors group cursor-pointer">
                                    <td className="px-6 py-5">
                                        <div>
                                            <p className="text-[14px] font-bold text-[#1e293b] group-hover:text-[#4a6cf7] transition-colors">{t.subject}</p>
                                            <p className="text-[11px] text-[#94a3b8] font-bold uppercase tracking-widest">{t.id}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-[13px] text-[#64748b]">{t.user}</td>
                                    <td className="px-6 py-5">
                                        <span className={cn(
                                            "text-[12px] font-bold",
                                            t.priority === 'Urgent' ? "text-red-600" :
                                                t.priority === 'High' ? "text-orange-600" :
                                                    t.priority === 'Medium' ? "text-blue-600" : "text-gray-400"
                                        )}>{t.priority}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                                            t.status === 'Open' ? "bg-red-50 text-red-700 border-red-200" :
                                                t.status === 'In Progress' ? "bg-blue-50 text-blue-700 border-blue-200" :
                                                    "bg-green-50 text-green-700 border-green-200"
                                        )}>{t.status}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right font-medium text-[12px] text-[#94a3b8]">
                                        {t.time}
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
