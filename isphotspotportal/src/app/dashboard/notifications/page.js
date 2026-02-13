"use client"

import React from 'react'
import { Bell, CheckCircle2, AlertCircle, Info, Wifi, CreditCard, Clock, Check } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function NotificationsPage() {
    const notifications = [
        {
            id: 1,
            type: 'success',
            icon: CheckCircle2,
            title: 'Payment Received',
            message: 'KSH 50 payment from 0712345678 processed successfully.',
            time: '2 minutes ago',
            read: false
        },
        {
            id: 2,
            type: 'warning',
            icon: AlertCircle,
            title: 'Router Offline',
            message: 'Kisumu Node (102.22.45.1) has been offline for 2 hours.',
            time: '2 hours ago',
            read: false
        },
        {
            id: 3,
            type: 'info',
            icon: Wifi,
            title: 'New User Connected',
            message: 'MAC 00:1A:2B:3C:4D:5E connected to Nairobi Main Hub.',
            time: '5 hours ago',
            read: true
        },
        {
            id: 4,
            type: 'success',
            icon: CreditCard,
            title: 'Billing Successful',
            message: 'Monthly subscription payment of KSH 5,000 completed.',
            time: '1 day ago',
            read: true
        },
    ]

    const getTypeConfig = (type) => {
        switch (type) {
            case 'success': return { variant: 'success', color: 'text-pace-green' }
            case 'warning': return { variant: 'warning', color: 'text-orange-500' }
            case 'info': return { variant: 'info', color: 'text-blue-500' }
            default: return { variant: 'default', color: 'text-gray-500' }
        }
    }

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Notifications</h1>
                    <p className="text-sm text-gray-500 mt-1">System alerts and updates.</p>
                </div>
                <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2">
                    <Check size={16} />
                    Mark all read
                </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold w-24">Status</th>
                                <th className="px-4 py-3 font-semibold">Title</th>
                                <th className="px-4 py-3 font-semibold">Message</th>
                                <th className="px-4 py-3 font-semibold">Time</th>
                                <th className="px-4 py-3 font-semibold w-24">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {notifications.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                                        <Bell size={32} className="mx-auto mb-3 opacity-20" />
                                        <p>No new notifications</p>
                                    </td>
                                </tr>
                            ) : (
                                notifications.map((notif) => {
                                    const config = getTypeConfig(notif.type)
                                    return (
                                        <tr key={notif.id} className={`hover:bg-gray-50 transition-colors group ${!notif.read ? 'bg-purple-50/10' : ''}`}>
                                            <td className="px-4 py-3">
                                                <Badge variant={config.variant} className="text-[10px] px-2 py-0.5 font-medium uppercase">
                                                    {notif.type}
                                                </Badge>
                                            </td>
                                            <td className="px-4 py-3 font-semibold text-gray-800 flex items-center gap-2">
                                                {!notif.read && <div className="w-1.5 h-1.5 rounded-full bg-pace-purple shrink-0" />}
                                                {notif.title}
                                            </td>
                                            <td className="px-4 py-3 text-gray-500 max-w-md truncate" title={notif.message}>
                                                {notif.message}
                                            </td>
                                            <td className="px-4 py-3 text-gray-400 text-xs">
                                                {notif.time}
                                            </td>
                                            <td className="px-4 py-3">
                                                {!notif.read && (
                                                    <button className="text-pace-purple text-xs font-bold hover:underline">
                                                        Read
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
