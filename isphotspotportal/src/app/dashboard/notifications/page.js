"use client"

import React from 'react'
import { Bell, CheckCircle2, AlertCircle, Info, Wifi, CreditCard, Clock } from 'lucide-react'
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

    const getTypeColor = (type) => {
        switch (type) {
            case 'success': return 'bg-pace-green/10 text-pace-green border-pace-green/20'
            case 'warning': return 'bg-orange-50 text-orange-500 border-orange-200'
            case 'info': return 'bg-blue-50 text-blue-500 border-blue-200'
            default: return 'bg-gray-50 text-admin-dim border-gray-200'
        }
    }

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Notification Center</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">System alerts, payment confirmations, and status updates.</p>
                </div>
                <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-all uppercase tracking-widest">
                    Mark All Read
                </button>
            </div>

            <div className="space-y-3">
                {notifications.map((notif) => (
                    <div
                        key={notif.id}
                        className={`bg-white border rounded-2xl p-6 transition-all hover:shadow-md ${notif.read ? 'border-gray-100 opacity-70' : 'border-pace-purple/20 shadow-sm'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${getTypeColor(notif.type)}`}>
                                <notif.icon size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-[14px] font-black text-admin-value uppercase leading-tight">{notif.title}</h3>
                                        <p className="text-[12px] text-admin-label font-medium mt-2 leading-relaxed">{notif.message}</p>
                                    </div>
                                    {!notif.read && (
                                        <div className="w-2 h-2 rounded-full bg-pace-purple animate-pulse shrink-0 mt-1" />
                                    )}
                                </div>
                                <div className="flex items-center gap-2 mt-4 text-[10px] text-admin-dim font-bold">
                                    <Clock size={12} />
                                    <span>{notif.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {notifications.length === 0 && (
                <div className="text-center py-16">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bell size={32} className="text-admin-dim" />
                    </div>
                    <h3 className="text-[16px] font-black text-admin-value uppercase">All Caught Up!</h3>
                    <p className="text-[12px] text-admin-label mt-2">No new notifications at the moment.</p>
                </div>
            )}
        </div>
    )
}
