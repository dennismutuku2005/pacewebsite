"use client"

import React, { useState, useEffect } from 'react'
import { Bell, Search, Filter, Trash2, CheckCircle, Info, AlertTriangle, MoreHorizontal, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'

export default function NotificationsPage() {
    const [isLoading, setIsLoading] = useState(true)

    const notifications = [
        {
            id: 'NOT-001',
            category: 'Billing',
            message: 'Invoice #INV-2024-001 for SkyNet Solutions has been paid.',
            time: '2 hours ago',
            status: 'Unread',
            type: 'success'
        },
        {
            id: 'NOT-002',
            category: 'System',
            message: 'New router node "Node-Mombasa-04" has been registered.',
            time: '5 hours ago',
            status: 'Read',
            type: 'info'
        },
        {
            id: 'NOT-003',
            category: 'Support',
            message: 'Urgent ticket #TK-8829 assigned to your department.',
            time: 'Yesterday',
            status: 'Unread',
            type: 'warning'
        },
        {
            id: 'NOT-004',
            category: 'Security',
            message: 'Failed login attempt detected from IP 192.168.1.45.',
            time: '2 days ago',
            status: 'Read',
            type: 'error'
        },
        {
            id: 'NOT-005',
            category: 'Member',
            message: 'RiftWiFi systems updated their primary contact information.',
            time: '3 days ago',
            status: 'Read',
            type: 'info'
        }
    ]

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const getIcon = (type) => {
        switch (type) {
            case 'success': return <CheckCircle size={16} className="text-pace-green" />
            case 'warning': return <AlertTriangle size={16} className="text-amber-500" />
            case 'error': return <AlertTriangle size={16} className="text-red-500" />
            default: return <Info size={16} className="text-blue-500" />
        }
    }

    const getStatusVariant = (status) => {
        return status === 'Unread' ? 'success' : 'default'
    }

    return (
        <div className="space-y-6 font-figtree">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Notification Center</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Stay updated with system activities, billing, and support requests.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-all uppercase tracking-widest shadow-sm">
                        Mark all as read
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md flex items-center gap-2">
                        <Trash2 size={14} />
                        Clear all
                    </button>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search notifications..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-lg hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold">
                        <Filter size={14} /> Filter
                    </button>
                </div>
            </div>

            {/* Notifications Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Event Category</th>
                                <th className="px-6 py-4">Message Details</th>
                                <th className="px-6 py-4">Timeline</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-64" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-16 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                notifications.map((notif) => (
                                    <tr key={notif.id} className={cn("hover:bg-gray-50/50 transition-colors group", notif.status === 'Unread' ? "bg-pace-purple/[0.02]" : "")}>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className={cn(
                                                    "w-8 h-8 rounded-lg flex items-center justify-center border",
                                                    notif.type === 'success' ? "bg-pace-green/5 border-pace-green/10" :
                                                        notif.type === 'warning' ? "bg-amber-50 border-amber-100" :
                                                            notif.type === 'error' ? "bg-red-50 border-red-100" :
                                                                "bg-blue-50 border-blue-100"
                                                )}>
                                                    {getIcon(notif.type)}
                                                </div>
                                                <span className="font-bold text-admin-value uppercase text-[11px]">{notif.category}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className={cn("text-[13px] font-medium leading-tight", notif.status === 'Unread' ? "text-admin-value font-bold" : "text-admin-label")}>
                                                {notif.message}
                                            </p>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-1.5 text-admin-dim">
                                                <Clock size={12} />
                                                <span className="text-[11px] font-medium">{notif.time}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(notif.status)}>{notif.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button
                                                className="p-2 text-admin-dim hover:text-admin-value hover:bg-gray-50 rounded-lg transition-all"
                                                title="More Options"
                                                onClick={() => { }}
                                            >
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
