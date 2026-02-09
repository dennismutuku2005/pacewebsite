"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Search, Shield, Server, User, Database } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AuditLogsPage() {
    const logs = [
        { id: 'LOG-8821', time: '14:20:12', user: 'Admin', action: 'Update License', target: 'SkyNet Solutions', status: 'Success' },
        { id: 'LOG-8820', time: '14:15:05', user: 'System', action: 'Account Sync', target: 'Nairobi Region', status: 'Success' },
        { id: 'LOG-8819', time: '14:10:44', user: 'Billing', action: 'Process Payment', target: 'INV-0221', status: 'Notice' },
        { id: 'LOG-8818', time: '13:58:22', user: 'Admin', action: 'Change Config', target: 'Network Login', status: 'Success' },
        { id: 'LOG-8817', time: '13:45:10', user: 'Auditor', action: 'Review Application', target: 'REC-1024', status: 'Success' },
        { id: 'LOG-8816', time: '13:30:55', user: 'Admin', action: 'Successful Login', target: 'Portal', status: 'Info' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4">
                <h1 className="text-[20px] font-black text-admin-value leading-none">System Activity Logs</h1>
                <p className="text-[12px] text-admin-label mt-2 font-medium">A history of activities and changes made within the system.</p>
            </div>

            {/* Content Hub */}
            <div className="flex flex-col md:flex-row items-center gap-2 h-9">
                <div className="relative w-full md:w-80 h-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search logs..."
                        className="w-full h-full pl-9 pr-3 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-black text-admin-value placeholder:text-admin-dim h-full"
                    />
                </div>
                <div className="flex gap-2 h-full">
                    <button className="px-6 h-full border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple hover:text-pace-purple transition-all uppercase tracking-widest bg-white shadow-none">Search</button>
                    <button className="px-4 h-full border border-pace-border text-admin-dim rounded text-[11px] font-black hover:bg-gray-50 transition-all uppercase tracking-widest bg-white shadow-none">Download CSV</button>
                </div>
            </div>

            {/* List View */}
            <div className="border border-pace-border rounded bg-white overflow-hidden shadow-none">
                <div className="px-5 py-3 border-b border-pace-border bg-pace-bg-subtle flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Master Activity List</h4>
                </div>
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-100">Event #</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Time</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Actor</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Activity</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Target</th>
                                <th className="px-5 py-3 text-right uppercase">Result</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50 transition-colors group cursor-default">
                                    <td className="px-5 py-3 font-mono text-admin-dim group-hover:text-admin-value border-r border-gray-50 font-black uppercase transition-colors">{log.id}</td>
                                    <td className="px-5 py-3 font-black text-admin-dim border-r border-gray-50 tabular-nums">{log.time}</td>
                                    <td className="px-5 py-3 border-r border-gray-50">
                                        <div className="flex items-center gap-2">
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
                                        <span className="font-black uppercase text-[10px] tracking-widest px-2 py-0.5 rounded-sm border border-gray-100 text-admin-label">
                                            {log.status}
                                        </span>
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
