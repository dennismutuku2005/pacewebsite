"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Clock, Filter, Search, Download,
    AlertCircle, CheckCircle2, Info,
    ShieldAlert, RefreshCw
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LogsPage() {
    const logs = [
        { id: 1, event: 'Success Payment Received', user: 'System (M-Pesa)', action: 'Payment', status: 'Success', time: 'Just now', details: 'KES 2,500 received for Acct: James Njuguna' },
        { id: 2, event: 'Core Router High Load', user: 'Monit', action: 'Alert', status: 'Warning', time: '12 mins ago', details: 'Nairobi Main Core CPU > 85%' },
        { id: 3, event: 'New Admin Login', user: 'Adam Joe', action: 'Auth', status: 'Info', time: '45 mins ago', details: 'Login successful from IP 197.248.33.12' },
        { id: 4, event: 'Failed Invoice Generation', user: 'Billing Eng', action: 'Error', status: 'Error', time: '2 hours ago', details: 'Tax template not found for client: Sarah Omari' },
        { id: 5, event: 'MicroTik Sync Completed', user: 'Pace Relay', action: 'Sync', status: 'Success', time: '3 hours ago', details: '1,284 clients synced with active routers' },
        { id: 6, event: 'Database Backup Created', user: 'Backup Job', action: 'System', status: 'Success', time: '5 hours ago', details: 'S3 snapshot completed: pace_prod_v23_snap' },
    ]

    return (
        <div className="space-y-6 pb-10">

            {/* Search & Actions Bar */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={18} />
                    <input
                        type="text"
                        placeholder="Search audit logs..."
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#f4f7fe] border-none focus:ring-2 focus:ring-[#4a6cf7]/20 outline-none transition-all placeholder:text-[#94a3b8] text-sm font-medium"
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-[#e2e8f0] text-[#64748b] rounded-xl text-sm font-bold hover:bg-[#f8fafc] transition-all">
                        <RefreshCw size={18} />
                        Live Feed
                    </button>
                    <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 bg-[#4a6cf7] text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20">
                        <Download size={18} />
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans">
                        <thead>
                            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Event</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Type</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Initiator</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest text-right">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1f5f9]">
                            {logs.map((log, i) => (
                                <motion.tr
                                    key={log.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#f8fafc] transition-colors group cursor-help"
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex items-start gap-4">
                                            <div className={cn(
                                                "mt-1 p-2 rounded-lg shrink-0",
                                                log.status === 'Success' ? "bg-green-50 text-green-600" :
                                                    log.status === 'Warning' ? "bg-orange-50 text-orange-600" :
                                                        log.status === 'Error' ? "bg-red-50 text-red-600" :
                                                            "bg-blue-50 text-blue-600"
                                            )}>
                                                {log.status === 'Success' ? <CheckCircle2 size={16} /> :
                                                    log.status === 'Warning' ? <AlertCircle size={16} /> :
                                                        log.status === 'Error' ? <ShieldAlert size={16} /> : <Info size={16} />}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-bold text-[#1e293b]">{log.event}</p>
                                                <p className="text-[12px] text-[#64748b] font-medium mt-0.5">{log.details}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-[13px] font-bold text-[#1e293b]">{log.action}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-[13px] font-medium text-[#64748b]">{log.user}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right font-medium text-[12px] text-[#94a3b8]">
                                        {log.time}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-center">
                    <button className="text-sm font-bold text-[#4a6cf7] hover:underline">Load More History &rarr;</button>
                </div>
            </div>

        </div>
    )
}
