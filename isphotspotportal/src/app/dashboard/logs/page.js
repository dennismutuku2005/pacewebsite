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
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">System Logs</h1>
                    <p className="text-sm text-gray-500 mt-1">Audit trail of system activities and events.</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search logs..."
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple focus:border-pace-purple outline-none text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium">
                        <Clock size={16} /> Date
                    </button>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Timestamp</th>
                                <th className="px-4 py-3 font-semibold">Event Type</th>
                                <th className="px-4 py-3 font-semibold">Action</th>
                                <th className="px-4 py-3 font-semibold">Description</th>
                                <th className="px-4 py-3 font-semibold">User</th>
                                <th className="px-4 py-3 font-semibold">IP Address</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-48" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-28" /></td>
                                    </tr>
                                ))
                            ) : (
                                logs.map((log) => {
                                    const config = getTypeConfig(log.type)
                                    return (
                                        <tr key={log.id} className="hover:bg-gray-50 transition-colors group">
                                            <td className="px-4 py-3 text-gray-500 text-xs">{log.timestamp}</td>
                                            <td className="px-4 py-3">
                                                <Badge variant={config.variant} className="text-[10px] px-2 py-0.5 font-medium">
                                                    {log.type}
                                                </Badge>
                                            </td>
                                            <td className="px-4 py-3 font-medium text-gray-700">{log.action}</td>
                                            <td className="px-4 py-3 text-gray-500 max-w-md truncate" title={log.description}>{log.description}</td>
                                            <td className="px-4 py-3 text-gray-600">{log.user}</td>
                                            <td className="px-4 py-3 font-mono text-xs text-gray-400">{log.ip}</td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">Showing 1-10 of 245 log entries</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all disabled:opacity-50">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 hover:text-pace-purple hover:border-pace-purple rounded-lg text-sm font-medium transition-all">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
