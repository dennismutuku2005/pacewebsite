"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LogsPage() {
    const logs = [
        { id: 1, event: 'License Key Dispatched', user: 'System-Core', status: 'Success', age: 'Just now', msg: 'Enterprise SaaS key generated for SkyNet Solutions.' },
        { id: 2, event: 'Rate Limit Warning', user: 'Auth-Gateway', status: 'Warning', age: '12m ago', msg: 'Coast Connect Ltd exceeded burst limit on Cluster B.' },
        { id: 3, event: 'Admin Session Established', user: 'Adam Joe', status: 'Info', age: '48m ago', msg: 'Super Admin login recorded from IP: 197.248.33.12' },
        { id: 4, event: 'Billing Reconcile Failure', user: 'PaymentEng', status: 'Error', age: '2h ago', msg: 'INV-4421: Amount mismatch during automated sync.' },
        { id: 5, event: 'Platform Update Applied', user: 'Global-CDA', status: 'Success', age: '4h ago', msg: 'Service update v2.4.1 deployed to all African nodes.' },
    ]

    return (
        <div className="space-y-6 font-figtree text-[12px]">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-gray-900 leading-none">Global Event Audit Logs</h1>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">Immutable stream of platform telemetry and administrator activity.</p>
                </div>
                <div className="flex gap-2 h-9">
                    <button className="px-3 border border-gray-200 rounded text-gray-400 hover:text-gray-900 transition-all bg-white">
                        <RefreshCw size={14} />
                    </button>
                    <button className="px-4 bg-gray-900 text-white rounded font-bold uppercase tracking-widest leading-none">Export TXT</button>
                </div>
            </div>

            <div className="border border-gray-200 rounded overflow-hidden bg-white">
                <div className="px-5 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Search size={14} className="text-gray-300" />
                        <input type="text" placeholder="Lookup event record..." className="bg-transparent border-none outline-none text-[11px] font-bold w-48" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing: Real-time Feed</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100">Timestamp</th>
                                <th className="px-5 py-3 border-r border-gray-100">System Source</th>
                                <th className="px-5 py-3 border-r border-gray-100">Log Event Type</th>
                                <th className="px-5 py-3 border-r border-gray-100">Detailed Message</th>
                                <th className="px-5 py-3 text-right">State</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-gray-600">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-5 py-4 font-bold text-gray-400 border-r border-gray-100">
                                        {log.age}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-100 font-black tracking-tighter uppercase text-gray-300">
                                        {log.user}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-100 font-bold text-gray-900">
                                        {log.event}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-100 max-w-xs overflow-hidden text-ellipsis font-medium">
                                        {log.msg}
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest border-b-2",
                                            log.status === 'Success' ? "text-pace-green border-pace-green/10" :
                                                log.status === 'Warning' ? "text-orange-500 border-orange-100" :
                                                    log.status === 'Error' ? "text-red-500 border-red-100" : "text-gray-400"
                                        )}>{log.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-gray-200 text-center">
                    <button className="text-[10px] font-black text-gray-300 uppercase tracking-widest hover:text-gray-900 transition-colors">Load Historical Record Set (Archive)</button>
                </div>
            </div>

        </div>
    )
}
