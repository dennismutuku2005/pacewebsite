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
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Managed Routers</h1>
                    <p className="text-sm text-gray-500 mt-1">Infrastructure control and MikroTik synchronization status.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                    <Plus size={16} />
                    Add Router
                </button>
            </div>

            {/* Main Table */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Router Node</th>
                                <th className="px-4 py-3 font-semibold">Access Details</th>
                                <th className="px-4 py-3 font-semibold">Billing Config</th>
                                <th className="px-4 py-3 font-semibold text-center">Sync Status</th>
                                <th className="px-4 py-3 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(3)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-40" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-4 py-3 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-4 py-3 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                initialRouters.map((router) => (
                                    <tr key={router.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-pace-purple transition-transform group-hover:scale-105">
                                                    <Wifi size={16} />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 leading-none">{router.name}</p>
                                                    <p className="text-xs text-gray-500 mt-1 font-mono">ID: {router.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-gray-700 font-medium text-xs">
                                                    <Activity size={12} className="text-gray-400" />
                                                    <span>{router.ip}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500 text-xs">
                                                    <Terminal size={12} />
                                                    <span>Port: {router.winboxPort}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-gray-700 font-medium text-xs">
                                                    <CreditCard size={12} className="text-gray-400" />
                                                    <span>Paybill: {router.paybill}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500 text-xs pl-5">
                                                    <span>ACC: {router.account}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <Badge variant={router.status === 'Active' ? 'success' : 'error'} className="text-[10px] px-2 py-0.5 font-medium">
                                                {router.status}
                                            </Badge>
                                            <p className="text-[10px] text-gray-400 mt-1 font-medium">{router.lastSync}</p>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
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
