"use client"

import React, { useState, useEffect } from 'react'
import { Search, Filter, Clock, Smartphone, Hash, Router as RouterIcon, CheckCircle2, XCircle } from 'lucide-react'
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
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Hotspot Entries</h1>
                    <p className="text-sm text-gray-500 mt-1">Monitor all client logins, payments, and session statuses.</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search Mac, M-Pesa, Mobile or Router..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple focus:border-pace-purple outline-none text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium">
                    <Filter size={16} /> Filter
                </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Client Details</th>
                                <th className="px-4 py-3 font-semibold">Transaction</th>
                                <th className="px-4 py-3 font-semibold">Network Info</th>
                                <th className="px-4 py-3 font-semibold">Amount</th>
                                <th className="px-4 py-3 font-semibold text-center">Status</th>
                                <th className="px-4 py-3 font-semibold">Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-28" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-12" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-16 mx-auto" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-32" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredEntries.map((entry) => (
                                    <tr key={entry.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:text-pace-purple transition-colors">
                                                    <Smartphone size={16} />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 leading-none">{entry.mac}</p>
                                                    <p className="text-xs text-gray-500 mt-1">{entry.mobile}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Hash size={14} className="text-gray-400" />
                                                <span className="font-medium">{entry.mpesaCode}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <RouterIcon size={14} className="text-gray-400" />
                                                <span className="font-medium truncate max-w-[120px]">{entry.router}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="font-bold text-gray-900">KSH {entry.amount}</span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <Badge variant={entry.status === 'Active' ? 'success' : 'error'} className="text-[10px] px-2 py-0.5 font-medium">
                                                {entry.status}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-gray-500 text-xs">
                                                    <span className="font-medium">Start: {entry.createTime}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-pace-purple text-xs">
                                                    <span className="font-medium">End: {entry.expireTime}</span>
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
