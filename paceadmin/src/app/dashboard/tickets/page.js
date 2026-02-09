"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Ticket, Search, Filter, Plus, Clock, MessageSquare, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SupportDeskPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    const tickets = [
        { id: 'TKT-9021', subject: 'Speed Issues in Nairobi', customer: 'SkyNet Solutions Ltd', priority: 'Critical', status: 'Open', age: '12m ago' },
        { id: 'TKT-9022', subject: 'Payment Confirmation Needed', customer: 'Coast Connect', priority: 'High', status: 'Pending', age: '45m ago' },
        { id: 'TKT-9023', subject: 'Account Login Problem', customer: 'RiftWiFi systems', priority: 'Medium', status: 'Resolved', age: '2h ago' },
        { id: 'TKT-9024', subject: 'Question about Upgrade', customer: 'Western Fiber', priority: 'Low', status: 'Open', age: '4h ago' },
        { id: 'TKT-9025', subject: 'Connection Intermittent', customer: 'LakeSide net', priority: 'Critical', status: 'In Progress', age: '5h ago' },
    ]

    const TableSkeleton = () => (
        <div className="animate-pulse">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex border-b border-gray-50 h-[64px]">
                    <div className="w-[10%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="flex-1 bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="w-[10%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                </div>
            ))}
        </div>
    )

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none">Support Tickets</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Manage and respond to client help requests and inquiries.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-none">
                    <Plus size={14} />
                    New Ticket
                </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-pace-border rounded overflow-hidden bg-white shadow-none divide-x divide-pace-border">
                {[
                    { label: 'Active Tickets', val: '24', note: 'Recently Updated' },
                    { label: 'High Priority', val: '04', note: 'Needs Attention', color: 'text-red-500' },
                    { label: 'Avg Wait Time', val: '1.4h', note: 'Response Speed' },
                    { label: 'Satisfaction', val: '98.2%', note: 'Client Score' },
                ].map((s, i) => (
                    <div key={i} className="p-5">
                        <p className="text-[10px] font-black text-admin-label uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        {isLoading ? <div className="h-6 w-16 bg-gray-50 animate-pulse rounded"></div> : (
                            <h4 className={cn("text-[20px] font-black leading-none tracking-tight", s.color || "text-admin-value")}>{s.val}</h4>
                        )}
                        <p className="text-[10px] font-black text-admin-dim mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Ticket Search Hub */}
            <div className="flex flex-col md:flex-row items-center gap-2 h-9">
                <div className="relative w-full md:w-80 h-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search tickets by ID, subject or customer..."
                        className="w-full h-full pl-9 pr-3 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-black text-admin-value placeholder:text-admin-dim h-full"
                    />
                </div>
                <button className="px-8 h-full bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest">Search</button>
            </div>

            {/* Ticket List */}
            <div className="border border-pace-border rounded bg-white overflow-hidden shadow-none">
                <div className="px-5 py-3 border-b border-pace-border bg-pace-bg-subtle flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Ongoing Conversations</h4>
                </div>
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-100">Ticket ID</th>
                                <th className="px-5 py-3 border-r border-gray-100">Subject</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Priority</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Status</th>
                                <th className="px-5 py-3 text-right">Activity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                <tr><td colSpan="5"><TableSkeleton /></td></tr>
                            ) : (
                                tickets.map((t) => (
                                    <tr key={t.id} className="hover:bg-gray-50 transition-all group cursor-pointer">
                                        <td className="px-5 py-4 border-r border-gray-50 font-mono text-admin-dim group-hover:text-admin-value transition-colors font-black uppercase">{t.id}</td>
                                        <td className="px-5 py-4 border-r border-gray-50">
                                            <p className="font-black text-admin-value leading-none">{t.subject}</p>
                                            <p className="text-[10px] text-admin-label font-black uppercase tracking-tighter mt-1.5 opacity-80">{t.customer}</p>
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center">
                                            <span className={cn(
                                                "font-black uppercase text-[10px] tracking-widest px-2 py-0.5 rounded-sm border",
                                                t.priority === 'Critical' ? "text-red-500 bg-red-50/20 border-red-100" :
                                                    t.priority === 'High' ? "text-orange-500 bg-orange-50 border-orange-100" :
                                                        "text-admin-label bg-gray-50 border-gray-100"
                                            )}>{t.priority}</span>
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center">
                                            <span className="font-black uppercase text-[10px] tracking-widest border-b-2 border-gray-100 text-admin-label">{t.status}</span>
                                        </td>
                                        <td className="px-5 py-4 text-right font-black text-admin-dim group-hover:text-admin-value transition-colors uppercase">
                                            {t.age}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 bg-gray-50/50 border-t border-pace-border flex items-center justify-between">
                    <p className="text-[11px] text-admin-label font-black uppercase tracking-tight">Support Queue: {tickets.length} tickets</p>
                    <div className="flex items-center gap-1 h-8">
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black hover:border-pace-purple transition-all">
                            <ChevronLeft size={14} />
                        </button>
                        <div className="flex gap-1 h-full font-black">
                            <button className="w-8 h-full rounded bg-pace-purple text-white text-[10px]">1</button>
                        </div>
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black hover:border-pace-purple transition-all">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
