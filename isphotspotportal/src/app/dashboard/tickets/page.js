"use client"

import React, { useState, useEffect } from 'react'
import { Ticket, Search, Plus, Clock, MessageSquare, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import { Badge } from '@/components/Badge'

export default function SupportDeskPage() {
    const searchParams = useSearchParams()
    const statusFilter = searchParams.get('status')

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    const initialTickets = [
        { id: 'TKT-9021', subject: 'Speed Issues in Nairobi', customer: 'SkyNet Solutions Ltd', priority: 'Critical', status: 'Active', age: '12m ago' },
        { id: 'TKT-9022', subject: 'Payment Confirmation Needed', customer: 'Coast Connect', priority: 'High', status: 'Pending', age: '45m ago' },
        { id: 'TKT-9023', subject: 'Account Login Problem', customer: 'RiftWiFi systems', priority: 'Medium', status: 'Closed', age: '2h ago' },
        { id: 'TKT-9024', subject: 'Question about Upgrade', customer: 'Western Fiber', priority: 'Low', status: 'Active', age: '4h ago' },
        { id: 'TKT-9025', subject: 'Connection Intermittent', customer: 'LakeSide net', priority: 'Critical', status: 'In Progress', age: '5h ago' },
    ]

    const filteredTickets = statusFilter
        ? initialTickets.filter(t => t.status.toLowerCase() === statusFilter.toLowerCase())
        : initialTickets

    const getPriorityVariant = (priority) => {
        if (priority === 'Critical') return 'error'
        if (priority === 'High') return 'warning'
        return 'default'
    }

    const getStatusVariant = (status) => {
        if (status === 'Active' || status === 'In Progress') return 'success'
        if (status === 'Pending') return 'warning'
        if (status === 'Closed') return 'default'
        return 'info'
    }

    const TableSkeleton = () => (
        <div className="animate-pulse">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex border-b border-gray-50 h-[64px]">
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
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
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Support Tickets</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Manage and respond to client help requests and inquiries.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md">
                    <Plus size={14} />
                    New Ticket
                </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Active Tickets', val: '24', note: 'Recently Updated', icon: Ticket, color: 'info' },
                    { label: 'High Priority', val: '04', note: 'Needs Attention', icon: AlertCircle, color: 'error' },
                    { label: 'Avg Wait Time', val: '1.4h', note: 'Response Speed', icon: Clock, color: 'success' },
                    { label: 'Satisfaction', val: '98.2%', note: 'Client Score', icon: MessageSquare, color: 'success' },
                ].map((s, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-pace-purple/20 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-gray-50 rounded-lg text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                <s.icon size={18} />
                            </div>
                            <Badge variant={s.color} className="scale-90">Live</Badge>
                        </div>
                        <p className="text-[10px] font-bold text-admin-label mb-1 uppercase tracking-widest">{s.label}</p>
                        <h4 className="text-[20px] font-extrabold text-admin-value leading-none">{s.val}</h4>
                    </div>
                ))}
            </div>

            {/* Ticket Search Hub */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search tickets by ID, subject or customer..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm"
                    />
                </div>
                <div className="flex gap-2">
                    {['All', 'Active', 'Pending', 'Closed'].map((tab) => {
                        const isSelected = (!statusFilter && tab === 'All') || (statusFilter?.toLowerCase() === tab.toLowerCase());
                        return (
                            <button
                                key={tab}
                                className={cn(
                                    "px-4 py-2.5 rounded-lg text-[11px] font-bold transition-all border",
                                    isSelected ? "bg-pace-purple text-white border-pace-purple shadow-md" : "bg-white text-admin-label border-gray-200 hover:border-pace-purple"
                                )}
                            >
                                {tab}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Ticket List */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Ticket ID</th>
                                <th className="px-6 py-4">Subject & Customer</th>
                                <th className="px-6 py-4 text-center">Priority</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Last Activity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                <tr><td colSpan="5"><TableSkeleton /></td></tr>
                            ) : (
                                filteredTickets.map((t) => (
                                    <tr key={t.id} className="hover:bg-gray-50/50 transition-all group cursor-pointer">
                                        <td className="px-6 py-5 font-bold text-admin-value group-hover:text-pace-purple transition-colors uppercase text-[11px]">{t.id}</td>
                                        <td className="px-6 py-5">
                                            <p className="font-extrabold text-admin-value leading-none uppercase text-[11px] mb-1.5">{t.subject}</p>
                                            <p className="text-[10px] text-admin-label font-bold uppercase tracking-tight opacity-70">{t.customer}</p>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getPriorityVariant(t.priority)} className="uppercase tracking-widest text-[9px]">{t.priority}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(t.status)}>{t.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right font-bold text-admin-dim group-hover:text-admin-value transition-colors uppercase text-[10px]">
                                            {t.age}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Placeholder */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-[11px] text-admin-label font-bold uppercase tracking-widest opacity-50">Support Queue: {filteredTickets.length} tickets</p>
                    <div className="flex items-center gap-1 h-8">
                        <button className="px-3 h-full border border-gray-200 rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-bold hover:border-pace-purple transition-all">
                            <ChevronLeft size={14} />
                        </button>
                        <div className="flex gap-1 h-full">
                            <button className="w-8 h-full rounded bg-pace-purple text-white text-[10px] font-bold">1</button>
                        </div>
                        <button className="px-3 h-full border border-gray-200 rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-bold hover:border-pace-purple transition-all">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
