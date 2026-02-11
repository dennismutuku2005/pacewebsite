"use client"

import React, { useState, useEffect } from 'react'
import { Download, Search, Receipt, CreditCard, CheckCircle2, AlertTriangle, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'

export default function PaymentsPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const transactions = [
        { id: 'SaaS-0221', customer: 'SkyNet Solutions', amount: 'KES 45,000', method: 'M-PESA B2B', status: 'Cleared', date: '2024-02-09' },
        { id: 'SaaS-0222', customer: 'Coast Connect Ltd', amount: 'KES 12,500', method: 'Bank Transfer', status: 'Pending', date: '2024-02-09' },
        { id: 'SaaS-0223', customer: 'RiftWiFi Systems', amount: 'KES 45,000', method: 'M-PESA B2B', status: 'Cleared', date: '2024-02-08' },
        { id: 'SaaS-0224', customer: 'Lake Side Internet', amount: 'KES 8,000', method: 'Internal Credit', status: 'Cleared', date: '2024-02-08' },
        { id: 'SaaS-0225', customer: 'Western Fiber Net', amount: 'KES 45,000', method: 'Direct Deposit', status: 'Failed', date: '2024-02-07' },
    ]

    const getStatusVariant = (status) => {
        if (status === 'Cleared') return 'success'
        if (status === 'Pending') return 'warning'
        return 'error'
    }

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Financial Transaction Ledger</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Audited record of subscription revenues and software licensing fees.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:border-pace-purple transition-all bg-white shadow-sm flex items-center gap-2">
                        <Download size={14} />
                        Statement
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all flex items-center gap-2 shadow-md">
                        Reconcile Feed
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    { label: 'Cumulative Revenue', val: 'KES 2.44M', note: '+12.5% MoM', icon: Receipt },
                    { label: 'Active Subscriptions', val: '984 Total', note: '82 New this month', icon: CheckCircle2 },
                    { label: 'Pending Collections', val: 'KES 142k', note: '12 Invoices Awaiting', icon: AlertTriangle },
                ].map((s, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:border-pace-purple/20 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-gray-50 rounded-lg text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                <s.icon size={18} />
                            </div>
                        </div>
                        <p className="text-[10px] font-bold text-admin-label mb-1 uppercase tracking-widest">{s.label}</p>
                        <h4 className="text-[22px] font-black text-admin-value leading-none">{s.val}</h4>
                        <p className="text-[11px] font-bold text-admin-dim mt-3 uppercase tracking-wider opacity-60">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Transaction Search */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search by ID or customer..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm"
                    />
                </div>
                <span className="text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-60">Showing last 30 days</span>
            </div>

            {/* Main Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Entity Name</th>
                                <th className="px-6 py-4">Revenue Amount</th>
                                <th className="px-6 py-4">Method</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Processing Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-48" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-6 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-4 w-20 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                transactions.map((txn) => (
                                    <tr key={txn.id} className="hover:bg-gray-50/50 transition-all group">
                                        <td className="px-6 py-5 font-bold text-admin-label group-hover:text-pace-purple uppercase font-mono text-[11px]">{txn.id}</td>
                                        <td className="px-6 py-5">
                                            <p className="font-extrabold text-admin-value leading-none uppercase text-[11px]">{txn.customer}</p>
                                        </td>
                                        <td className="px-6 py-5 font-black text-admin-value uppercase">{txn.amount}</td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <CreditCard size={12} className="text-pace-purple" />
                                                <span className="font-bold text-admin-label uppercase text-[10px] tracking-tight">{txn.method}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(txn.status)}>{txn.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right font-bold text-admin-dim uppercase text-[10px]">
                                            {txn.date}
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
