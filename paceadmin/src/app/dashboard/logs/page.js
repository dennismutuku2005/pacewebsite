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
        { id: 1, event: 'License Key Dispatched', user: 'System Relay', status: 'Success', time: 'Just now', msg: 'Enterprise SaaS key generated for SkyNet Ken.' },
        { id: 2, event: 'Rate Limit Warning', user: 'Core API', status: 'Warning', time: '12m ago', msg: 'Coast Connect Ltd exceeded burst limit.' },
        { id: 3, event: 'Super Admin Login', user: 'Adam Joe', status: 'Info', time: '48m ago', msg: 'Session established from IP 197.248.33.12' },
        { id: 4, event: 'Payment Mismatch', user: 'Billing Eng', status: 'Error', time: '2h ago', msg: 'KES 45,000 received but no matching invoice ID.' },
    ]

    return (
        <div className="space-y-8 font-rubik">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-[26px] font-black text-pace-purple-dark tracking-tight">Audit Trail</h1>
                    <p className="text-[14px] text-gray-500 mt-1 font-medium">Monitoring platform global events and administrator actions.</p>
                </div>
                <div className="flex gap-3">
                    <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-pace-purple transition-all">
                        <RefreshCw size={18} />
                    </button>
                    <button className="px-6 py-3 bg-pace-purple text-white rounded-xl text-[13px] font-black shadow-lg shadow-pace-purple/10">Export Audit Log</button>
                </div>
            </div>

            <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-[2px] leading-none">System Event</th>
                                <th className="px-8 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-[2px] leading-none text-right">Time Log</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50/50 transition-all cursor-default group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-start gap-5">
                                            <div className={cn(
                                                "mt-1 rounded-full p-2 border",
                                                log.status === 'Success' ? "text-pace-green bg-pace-green/5 border-pace-green/10" :
                                                    log.status === 'Warning' ? "text-orange-500 bg-orange-50 border-orange-100" :
                                                        log.status === 'Error' ? "text-red-500 bg-red-50 border-red-100" : "text-pace-purple bg-pace-purple/5 border-pace-purple/10"
                                            )}>
                                                {log.status === 'Success' ? <CheckCircle2 size={16} /> :
                                                    log.status === 'Warning' ? <AlertCircle size={16} /> :
                                                        log.status === 'Error' ? <ShieldAlert size={16} /> : <Info size={16} />}
                                            </div>
                                            <div>
                                                <p className="text-[15px] font-bold text-gray-900 leading-none">{log.event}</p>
                                                <p className="text-[12px] text-gray-400 font-medium mt-2 leading-relaxed">{log.msg}</p>
                                                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-1">Initiated by: {log.user}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right font-black text-[13px] text-gray-300 group-hover:text-gray-900 transition-colors">
                                        {log.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-8 flex justify-center border-t border-gray-100 bg-gray-50/30">
                    <button className="text-[12px] font-black text-pace-purple uppercase tracking-[3px] hover:underline">Historical Archive &rarr;</button>
                </div>
            </div>

        </div>
    )
}
