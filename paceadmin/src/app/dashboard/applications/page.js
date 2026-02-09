"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Building2, User, MapPin, Clock, CheckCircle2, XCircle, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ApplicationsPage() {
    const applications = [
        { id: 'APP-1024', company: 'Global Logistics Ltd', person: 'Samson Kiruba', zone: 'Nairobi', plan: 'Enterprise Plan', status: 'Reviewing', age: '2h ago' },
        { id: 'APP-1023', company: 'Prime Connect ISP', person: 'Janet Mwangi', zone: 'Mombasa', plan: 'Standard Plan', status: 'Pending', age: '5h ago' },
        { id: 'APP-1022', company: 'Summit Solutions', person: 'Robert Onyango', zone: 'Eldoret', plan: 'Startup Plan', status: 'Approved', age: '1d ago' },
        { id: 'APP-1021', company: 'Metro-WiFi', person: 'Alice Wairimu', zone: 'Kisumu', plan: 'Enterprise Plan', status: 'Reviewing', age: '1d ago' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Page Header */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none">Client Applications</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Review and process new inquiries from potential ISP clients.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple hover:text-pace-purple transition-all uppercase tracking-widest bg-white">
                        View Archived
                    </button>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-2 h-9">
                <div className="relative w-full md:w-80 h-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search inquiries..."
                        className="w-full h-full pl-9 pr-3 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-black text-admin-value placeholder:text-admin-dim h-full"
                    />
                </div>
                <button className="px-6 h-full border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple hover:text-pace-purple transition-all uppercase tracking-widest bg-white">Search</button>
            </div>

            {/* Main Table */}
            <div className="border border-pace-border rounded overflow-hidden bg-white shadow-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-pace-bg-subtle border-b border-pace-border font-black text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-200">ID</th>
                                <th className="px-5 py-3 border-r border-gray-200">Company Details</th>
                                <th className="px-5 py-3 border-r border-gray-200">Region</th>
                                <th className="px-5 py-3 border-r border-gray-200 text-center uppercase">Requested Plan</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Status</th>
                                <th className="px-5 py-3 text-right uppercase">Sent</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50 transition-all group cursor-pointer">
                                    <td className="px-5 py-4 border-r border-gray-50 font-mono text-admin-dim group-hover:text-admin-value transition-colors font-black uppercase">{app.id}</td>
                                    <td className="px-5 py-4 border-r border-gray-50">
                                        <p className="font-black text-admin-value leading-none">{app.company}</p>
                                        <p className="text-[10px] text-admin-label font-black uppercase tracking-tighter mt-1.5 opacity-80">{app.person}</p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 font-bold text-admin-label uppercase tracking-tighter">{app.zone}</td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className="font-black text-admin-value uppercase text-[10px] tracking-widest border border-gray-100 px-2 py-0.5 rounded-sm bg-gray-50/50">{app.plan}</span>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className="font-black uppercase text-[10px] tracking-widest border-b-2 border-gray-100 text-admin-label">{app.status}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right font-black text-admin-dim group-hover:text-admin-value transition-colors uppercase">
                                        {app.age}
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
