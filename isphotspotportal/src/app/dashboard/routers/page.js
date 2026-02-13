"use client"

import React, { useState, useEffect } from 'react'
import { Search, Plus, Wifi, Terminal, CreditCard, Activity, CheckCircle2, XCircle, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'

export default function RoutersPage() {
    const [isLoading, setIsLoading] = useState(true)

    const initialRouters = [
        {
            id: 'RTR-001',
            name: 'Nairobi Main Hub',
            ip: '197.248.3.14',
            winboxPort: '8291',
            paybill: '247247',
            account: 'HUB001',
            status: 'Active',
            lastSync: '1 min ago'
        },
        {
            id: 'RTR-002',
            name: 'Mombasa Branch',
            ip: '41.204.18.55',
            winboxPort: '8292',
            paybill: '247247',
            account: 'MBS002',
            status: 'Active',
            lastSync: '5 mins ago'
        },
        {
            id: 'RTR-003',
            name: 'Kisumu Node',
            ip: '102.22.45.1',
            winboxPort: '8291',
            paybill: '880880',
            account: 'KSM003',
            status: 'Offline',
            lastSync: '2 hours ago'
        },
    ]

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Managed Routers</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Infrastructure control and MikroTik synchronization status.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md flex items-center gap-2">
                    <Plus size={14} />
                    Integrate New Router
                </button>
            </div>

            {/* Main Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 font-bold text-admin-dim uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">Router Node</th>
                                <th className="px-6 py-4">Access Details</th>
                                <th className="px-6 py-4">Billing Config</th>
                                <th className="px-6 py-4 text-center">Sync Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(3)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-40" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                initialRouters.map((router) => (
                                    <tr key={router.id} className="hover:bg-gray-50/30 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple font-black transition-transform group-hover:scale-110">
                                                    <Wifi size={16} />
                                                </div>
                                                <div>
                                                    <p className="font-black text-admin-value leading-none uppercase">{router.name}</p>
                                                    <p className="text-[10px] text-admin-dim font-bold mt-1 tracking-tighter italic">ID: {router.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2 text-admin-value font-bold">
                                                    <Activity size={12} className="text-admin-dim" />
                                                    <span>{router.ip}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-admin-dim">
                                                    <Terminal size={12} />
                                                    <span className="text-[11px]">Winbox Port: {router.winboxPort}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2 text-admin-value font-bold uppercase">
                                                    <CreditCard size={12} className="text-admin-dim" />
                                                    <span>Paybill: {router.paybill}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-admin-dim">
                                                    <span className="text-[11px] font-bold">ACC: {router.account}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={router.status === 'Active' ? 'success' : 'error'} className="text-[9px] font-black">
                                                {router.status === 'Active' ? <CheckCircle2 size={10} className="mr-1" /> : <XCircle size={10} className="mr-1" />}
                                                {router.status.toUpperCase()}
                                            </Badge>
                                            <p className="text-[9px] text-admin-dim mt-1.5 font-bold uppercase opacity-50">{router.lastSync}</p>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="p-2 text-admin-dim hover:text-admin-value hover:bg-gray-50 rounded-lg transition-all">
                                                <MoreHorizontal size={18} />
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
