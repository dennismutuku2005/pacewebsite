"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    FileText, Search, Filter,
    MapPin, User, Building2,
    CheckCircle2, XCircle, Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ApplicationsPage() {
    const applications = [
        { id: '1', company: 'Global Logistics Ltd', person: 'Samson Kiruba', location: 'Nairobi CBD', type: 'PPPoE', growth: 'High', status: 'Pending', date: '2 hours ago' },
        { id: '2', company: 'Nyali Heights Hotel', person: 'Alice Atieno', location: 'Mombasa', type: 'Hotspot', growth: 'Medium', status: 'Reviewing', date: '5 hours ago' },
        { id: '3', company: 'Rift Valley Academy', person: 'Paul Mwangi', location: 'Nakuru', type: 'Both', growth: 'Extreme', status: 'Approved', date: 'Yesterday' },
        { id: '4', company: 'Sunshine Internet Cafe', person: 'Kevin Odhiambo', location: 'Kisumu', type: 'Hotspot', growth: 'Low', status: 'Rejected', date: '2 days ago' },
    ]

    return (
        <div className="space-y-6 pb-10">

            {/* Search & Actions Bar */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={18} />
                    <input
                        type="text"
                        placeholder="Search applications..."
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#f4f7fe] border-none focus:ring-2 focus:ring-[#4a6cf7]/20 outline-none transition-all placeholder:text-[#94a3b8] text-sm font-medium"
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-[#e2e8f0] text-[#64748b] rounded-xl text-sm font-bold hover:bg-[#f8fafc] transition-all">
                        <Filter size={18} />
                        Sort By Date
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {applications.map((app, i) => (
                    <motion.div
                        key={app.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-6 hover:shadow-md hover:border-[#4a6cf7]/20 transition-all cursor-pointer relative overflow-hidden"
                    >
                        {/* Status Indicator Bar */}
                        <div className={cn(
                            "absolute top-0 left-0 w-1.5 h-full",
                            app.status === 'Pending' ? "bg-orange-400" :
                                app.status === 'Reviewing' ? "bg-blue-400" :
                                    app.status === 'Approved' ? "bg-green-400" : "bg-red-400"
                        )}></div>

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pl-4">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#4a6cf7] shrink-0">
                                    <Building2 size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1e293b] mb-1 group-hover:text-[#4a6cf7] transition-colors">{app.company}</h3>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#64748b] font-medium">
                                        <span className="flex items-center gap-1.5"><User size={14} className="text-[#94a3b8]" /> {app.person}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#94a3b8]" /> {app.location}</span>
                                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#94a3b8]" /> {app.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-8">
                                <div className="text-center">
                                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">Service Type</p>
                                    <p className="text-[14px] font-bold text-[#1e293b]">{app.type}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1">Expectation</p>
                                    <span className={cn(
                                        "px-2.5 py-0.5 rounded-lg text-[11px] font-bold border",
                                        app.growth === 'Extreme' ? "bg-purple-50 text-purple-700 border-purple-100" :
                                            app.growth === 'High' ? "bg-blue-50 text-blue-700 border-blue-100" :
                                                "bg-gray-50 text-gray-700 border-gray-100"
                                    )}>
                                        {app.growth} Growth
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 ml-4">
                                    {app.status === 'Pending' && (
                                        <div className="flex items-center gap-2">
                                            <button className="px-4 py-2 bg-green-500 text-white rounded-xl text-xs font-bold hover:bg-green-600 transition-all shadow-md shadow-green-500/20">Approve</button>
                                            <button className="px-4 py-2 bg-white border border-[#e2e8f0] text-[#64748b] rounded-xl text-xs font-bold hover:bg-gray-50 transition-all">Ignore</button>
                                        </div>
                                    )}
                                    {app.status !== 'Pending' && (
                                        <div className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border",
                                            app.status === 'Approved' ? "bg-green-50 text-green-700 border-green-200" :
                                                app.status === 'Rejected' ? "bg-red-50 text-red-700 border-red-200" :
                                                    "bg-blue-50 text-blue-700 border-blue-200"
                                        )}>
                                            {app.status === 'Approved' ? <CheckCircle2 size={14} /> :
                                                app.status === 'Rejected' ? <XCircle size={14} /> : <Clock size={14} />}
                                            {app.status}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}
