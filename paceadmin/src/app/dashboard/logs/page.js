"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Search, Shield, Server, User, Database } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AuditLogsPage() {
    const logs = [
        { id: 'LOG-8821', time: '14:20:12', user: 'root_admin', action: 'License Dispatched', target: 'SAAS-11', status: 'Success' },
        { id: 'LOG-8820', time: '14:15:05', user: 'system_node', action: 'Cluster Sync', target: 'AF-East-1', status: 'Success' },
        { id: 'LOG-8819', time: '14:10:44', user: 'billing_svc', action: 'Payment Match', target: 'INV-0221', status: 'Warning' },
        { id: 'LOG-8818', time: '13:58:22', user: 'root_admin', action: 'Config Update', target: 'Auth-Gateway', status: 'Success' },
        { id: 'LOG-8817', time: '13:45:10', user: 'audit_daemon', action: 'Inquiry Review', target: 'APP-1024', status: 'Success' },
        { id: 'LOG-8816', time: '13:30:55', user: 'root_admin', action: 'Login Success', target: 'AdminPortal', status: 'Info' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4">
                <h1 className="text-[20px] font-black text-admin-value leading-none">Global System Audit Logs</h1>
                <p className="text-[12px] text-admin-label mt-2 font-medium">Immutable record of all administrative actions and automated system events.</p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row items-center gap-2 h-9">
                <div className="relative w-full md:w-80 h-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search logs by keyword..."
                        className="w-full h-full pl-9 pr-3 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 outline-none text-[12px] font-black text-admin-value shadow-none"
                    />
                </div>
                <div className="flex gap-2 h-full">
                    <button className="px-4 h-full border border-pace-border text-admin-label rounded text-[11px] font-black hover:bg-gray-50 transition-all uppercase tracking-widest bg-white shadow-none">All Types</button>
                    <button className="px-4 h-full border border-pace-border text-admin-dim rounded text-[11px] font-black hover:bg-gray-50 transition-all uppercase tracking-widest bg-white shadow-none">Export TSV</button>
                </div>
            </div>

            {/* Log Table - The "Excel" Part */}
            <div className="border border-pace-border rounded bg-white overflow-hidden shadow-none">
                <div className="px-5 py-3 border-b border-pace-border bg-pace-bg-subtle flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Master Audit Registry</h4>
                    <span className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Live Feed Enabled</span>
                </div>
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-black text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-100">Event Hash</th>
                                <th className="px-5 py-3 border-r border-gray-100">Timestamp</th>
                                <th className="px-5 py-3 border-r border-gray-100">Actor Entity</th>
                                <th className="px-5 py-3 border-r border-gray-100">Action Type</th>
                                <th className="px-5 py-3 border-r border-gray-100">Target Object</th>
                                <th className="px-5 py-3 text-right">State</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-5 py-3 font-mono text-admin-dim group-hover:text-admin-value border-r border-gray-50 font-black uppercase transition-colors">{log.id}</td>
                                    <td className="px-5 py-3 font-black text-admin-dim border-r border-gray-50 tabular-nums">{log.time}</td>
                                    <td className="px-5 py-3 border-r border-gray-50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pace-purple"></div>
                                            <span className="font-black text-admin-value uppercase">{log.user}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 border-r border-gray-50 font-black text-admin-label uppercase tracking-tight">
                                        {log.action}
                                    </td>
                                    <td className="px-5 py-3 border-r border-gray-50 font-black text-admin-dim group-hover:text-admin-label transition-colors">
                                        {log.target}
                                    </td>
                                    <td className="px-5 py-3 text-right">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest px-2 py-0.5 rounded-sm border",
                                            log.status === 'Success' ? "text-pace-green bg-pace-green-light border-pace-green/10" :
                                                log.status === 'Warning' ? "text-orange-500 bg-orange-50 border-orange-100" :
                                                    "text-blue-500 bg-blue-50 border-blue-100"
                                        )}>{log.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-pace-bg-subtle border-t border-pace-border flex items-center justify-between font-black">
                    <button className="text-[10px] text-admin-dim hover:text-admin-value uppercase tracking-widest transition-all">Clear Feed Buffer</button>
                    <p className="text-[10px] text-admin-dim uppercase tracking-widest">End of Master Registry</p>
                </div>
            </div>

        </div>
    )
}
