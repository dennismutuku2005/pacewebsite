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
        { id: '1', company: 'Global Logistics Ltd', person: 'Samson Kiruba', location: 'Nairobi', type: 'PPPoE', status: 'Pending', date: '2h ago' },
        { id: '2', company: 'Nyali Heights Hotel', person: 'Alice Atieno', location: 'Mombasa', type: 'Hotspot', status: 'Approved', date: 'Yesterday' },
        { id: '3', company: 'Rift Valley Academy', person: 'Paul Mwangi', location: 'Nakuru', type: 'Fiber', status: 'Reviewing', date: 'Yesterday' },
    ]

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-pace-purple-dark text-[24px]">Service Applications</h1>
                    <p className="text-[13px] text-gray-500 font-medium">Review and process new business signups from the main website.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {applications.map((app, i) => (
                    <motion.div
                        key={app.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:border-pace-purple/30 transition-all cursor-pointer relative"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-pace-purple/5 flex items-center justify-center text-pace-purple shrink-0">
                                    <Building2 size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-gray-800 mb-1 group-hover:text-pace-purple transition-colors">{app.company}</h3>
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-gray-500 font-medium">
                                        <span className="flex items-center gap-1.5"><User size={14} className="text-gray-300" /> {app.person}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gray-300" /> {app.location}</span>
                                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-gray-300" /> {app.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-8">
                                <div className="hidden sm:block">
                                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Service</p>
                                    <p className="text-[14px] font-bold text-gray-700">{app.type}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    {app.status === 'Pending' ? (
                                        <>
                                            <button className="px-5 py-2 bg-pace-purple text-white rounded-xl text-xs font-black shadow-lg shadow-pace-purple/10">Approve</button>
                                            <button className="px-5 py-2 border border-gray-100 text-gray-500 rounded-xl text-xs font-bold hover:bg-gray-50">Reject</button>
                                        </>
                                    ) : (
                                        <span className={cn(
                                            "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border",
                                            app.status === 'Approved' ? "bg-pace-green/5 text-pace-green border-pace-green/20" : "bg-blue-50 text-blue-600 border-blue-200"
                                        )}>
                                            {app.status}
                                        </span>
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
