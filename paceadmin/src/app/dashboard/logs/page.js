"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Clock, Search, Download,
    CheckCircle2, AlertCircle, Info,
    ShieldAlert, RefreshCw
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LogsPage() {
    const logs = [
        { id: 1, event: 'Payment Received', user: 'James K.', status: 'Success', time: 'Just now', msg: 'KES 2,500 synced via M-Pesa' },
        { id: 2, event: 'Router High Load', user: 'Monit', status: 'Warning', time: '12m ago', msg: 'CCR-1036 CPU @ 85%' },
        { id: 3, event: 'Admin Login', user: 'Adam Joe', status: 'Info', time: '45m ago', msg: 'Login from 197.248.33.12' },
        { id: 4, event: 'Auth Error', user: 'Unknown', status: 'Error', time: '2h ago', msg: 'Multiple failed login attempts' },
    ]

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-pace-purple-dark text-[24px]">Audit Trail</h1>
                    <p className="text-[13px] text-gray-500 font-medium">Monitoring system events and administrator actions.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-pace-purple transition-all">
                        <RefreshCw size={18} />
                    </button>
                    <button className="px-6 py-2.5 bg-pace-purple text-white rounded-xl text-xs font-black shadow-lg shadow-pace-purple/10">Export Logs</button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Event & Description</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Initiator</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none text-right">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-[13px]">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50/50 transition-all cursor-default group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-start gap-4">
                                            <div className={cn(
                                                "mt-1 rounded-full p-1",
                                                log.status === 'Success' ? "text-pace-green" :
                                                    log.status === 'Warning' ? "text-orange-500" :
                                                        log.status === 'Error' ? "text-red-500" : "text-pace-purple"
                                            )}>
                                                {log.status === 'Success' ? <CheckCircle2 size={14} /> :
                                                    log.status === 'Warning' ? <AlertCircle size={14} /> :
                                                        log.status === 'Error' ? <ShieldAlert size={14} /> : <Info size={14} />}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800">{log.event}</p>
                                                <p className="text-[11px] text-gray-400 font-medium mt-1">{log.msg}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="font-bold text-gray-500">{log.user}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right font-medium text-gray-300 group-hover:text-gray-900 transition-colors">
                                        {log.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 flex justify-center border-t border-gray-50">
                    <button className="text-[11px] font-bold text-pace-purple hover:underline">Download Historical Audit</button>
                </div>
            </div>

        </div>
    )
}
