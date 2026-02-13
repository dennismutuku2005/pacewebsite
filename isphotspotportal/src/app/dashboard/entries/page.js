"use client"

import React, { useState, useEffect } from 'react'
import { Search, Filter, Clock, Smartphone, Hash, CreditCard, Router as RouterIcon, CheckCircle2, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'

export default function EntriesPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    const initialEntries = [
        {
            id: 'ENT-001',
            mac: '00:1A:2B:3C:4D:5E',
            mpesaCode: 'RCN1S2D3F4',
            mobile: '0712345678',
            router: 'Main_Nairobi_01',
            amount: '50',
            status: 'Active',
            createTime: '2026-02-13 10:20:00',
            expireTime: '2026-02-14 10:20:00'
        },
        {
            id: 'ENT-002',
            mac: 'AA:BB:CC:DD:EE:FF',
            mpesaCode: 'QWE9R8T7Y6',
            mobile: '0787654321',
            router: 'Branch_Mombasa_A',
            amount: '20',
            status: 'Expired',
            createTime: '2026-02-12 14:05:00',
            expireTime: '2026-02-12 16:05:00'
        },
        {
            id: 'ENT-003',
            mac: '11:22:33:44:55:66',
            mpesaCode: 'ZXC5V4B3N2',
            mobile: '0700112233',
            router: 'Main_Nairobi_01',
            amount: '1000',
            status: 'Active',
            createTime: '2026-01-20 09:00:00',
            expireTime: '2026-02-20 09:00:00'
        },
    ]

    const [entries, setEntries] = useState(initialEntries)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const filteredEntries = initialEntries.filter(entry =>
        entry.mac.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.mpesaCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.mobile.includes(searchTerm) ||
        entry.router.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Hotspot Entries</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Monitor all client logins, payments, and session statuses.</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search Mac, M-Pesa, Mobile or Router..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-100 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-xl hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold">
                    <Filter size={14} /> Filter Range
                </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 font-bold text-admin-dim uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">Client Details</th>
                                <th className="px-6 py-4">Transaction</th>
                                <th className="px-6 py-4">Network Info</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4">Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-28" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-12" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-16 mx-auto" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredEntries.map((entry) => (
                                    <tr key={entry.id} className="hover:bg-gray-50/30 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-admin-dim group-hover:bg-pace-purple/5 group-hover:text-pace-purple transition-colors">
                                                    <Smartphone size={14} />
                                                </div>
                                                <div>
                                                    <p className="font-black text-admin-value leading-none uppercase">{entry.mac}</p>
                                                    <p className="text-[10px] text-admin-dim font-bold mt-1">{entry.mobile}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <Hash size={12} className="text-admin-dim" />
                                                <span className="font-bold text-admin-value uppercase">{entry.mpesaCode}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <RouterIcon size={12} className="text-admin-dim" />
                                                <span className="font-bold text-admin-label truncate max-w-[120px] uppercase">{entry.router}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="font-black text-pace-purple">KSH {entry.amount}</span>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={entry.status === 'Active' ? 'success' : 'error'} className="text-[9px] font-black tracking-tight">
                                                {entry.status === 'Active' ? <CheckCircle2 size={10} className="mr-1" /> : <XCircle size={10} className="mr-1" />}
                                                {entry.status.toUpperCase()}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-admin-dim">
                                                    <Clock size={10} />
                                                    <span className="text-[10px] font-bold">Start: {entry.createTime}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-pace-purple">
                                                    <Clock size={10} />
                                                    <span className="text-[10px] font-bold italic">End: {entry.expireTime}</span>
                                                </div>
                                            </div>
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
