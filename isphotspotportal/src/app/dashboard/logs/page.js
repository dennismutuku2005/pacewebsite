"use client"

import React, { useState } from 'react'
import { Search, Filter, FileText, Activity, AlertCircle, Info, CheckCircle2, Clock } from 'lucide-react'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'

export default function LogsPage() {
    const [isLoading, setIsLoading] = useState(false)

    const logs = [
        {
            id: 1,
            type: 'info',
            action: 'User Login',
            description: 'MAC 00:1A:2B:3C:4D:5E authenticated successfully',
            timestamp: '2026-02-13 14:05:32',
            user: 'System',
            ip: '197.248.3.14'
        },
        {
            id: 2,
            type: 'success',
            action: 'Payment Processed',
            description: 'M-Pesa transaction RCN1S2D3F4 completed - KSH 50',
            timestamp: '2026-02-13 14:03:15',
            user: '0712345678',
            ip: '41.204.18.55'
        },
        {
            id: 3,
            type: 'warning',
            action: 'Router Sync Failed',
            description: 'Unable to connect to Kisumu Node - timeout after 30s',
            timestamp: '2026-02-13 12:00:00',
            user: 'System',
            ip: '102.22.45.1'
        },
        {
            id: 4,
            type: 'info',
            action: 'Theme Updated',
            description: 'Premium Flow theme deployed to Nairobi Main Hub',
            timestamp: '2026-02-13 10:30:00',
            user: 'Admin',
            ip: '197.248.3.14'
        },
    ]

    const getTypeConfig = (type) => {
        switch (type) {
            case 'success':
                return { icon: CheckCircle2, variant: 'success', color: 'text-pace-green' }
            case 'warning':
                return { icon: AlertCircle, variant: 'warning', color: 'text-orange-500' }
            case 'error':
                return { icon: AlertCircle, variant: 'error', color: 'text-red-500' }
            default:
                return { icon: Info, variant: 'info', color: 'text-blue-500' }
        }
    }

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">System Logs</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Comprehensive audit trail of all system activities and events.</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search logs by action, user, or IP..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-100 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-xl hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold">
                        <Filter size={14} /> Filter Type
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-xl hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold">
                        <Clock size={14} /> Date Range
                    </button>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 font-bold text-admin-dim uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">Timestamp</th>
                                <th className="px-6 py-4">Event Type</th>
                                <th className="px-6 py-4">Action</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">User/Source</th>
                                <th className="px-6 py-4">IP Address</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-48" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-28" /></td>
                                    </tr>
                                ))
                            ) : (
                                logs.map((log) => {
                                    const config = getTypeConfig(log.type)
                                    return (
                                        <tr key={log.id} className="hover:bg-gray-50/30 transition-colors group">
                                            <td className="px-6 py-5 font-bold text-admin-dim">{log.timestamp}</td>
                                            <td className="px-6 py-5">
                                                <Badge variant={config.variant} className="text-[9px] font-black">
                                                    <config.icon size={10} className="mr-1" />
                                                    {log.type.toUpperCase()}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-5 font-black text-admin-value uppercase">{log.action}</td>
                                            <td className="px-6 py-5 font-medium text-admin-label max-w-md truncate">{log.description}</td>
                                            <td className="px-6 py-5 font-bold text-admin-dim">{log.user}</td>
                                            <td className="px-6 py-5 font-mono text-[11px] text-admin-dim">{log.ip}</td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
                <p className="text-[11px] text-admin-dim font-bold">Showing 1-10 of 245 log entries</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-all">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
