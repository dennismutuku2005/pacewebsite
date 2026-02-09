"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PaymentsPage() {
    const transactions = [
        { id: 'SaaS-0221', customer: 'SkyNet Solutions', amount: 'KES 45,000', method: 'M-PESA B2B', status: 'Cleared', date: '2024-02-09' },
        { id: 'SaaS-0222', customer: 'Coast Connect Ltd', amount: 'KES 12,500', method: 'Bank Transfer', status: 'Pending', date: '2024-02-09' },
        { id: 'SaaS-0223', customer: 'RiftWiFi Systems', amount: 'KES 45,000', method: 'M-PESA B2B', status: 'Cleared', date: '2024-02-08' },
        { id: 'SaaS-0224', customer: 'Lake Side Internet', amount: 'KES 8,000', method: 'Internal Credit', status: 'Cleared', date: '2024-02-08' },
        { id: 'SaaS-0225', customer: 'Western Fiber Net', amount: 'KES 45,000', method: 'Direct Deposit', status: 'Failed', date: '2024-02-07' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-gray-900 leading-none tracking-tight">Financial Transaction Ledger</h1>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">Audited record of subscription revenues and software licensing fees.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded text-[11px] font-bold hover:bg-gray-50 transition-all uppercase tracking-widest leading-none flex items-center gap-2">
                        <Download size={12} /> Statement
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-bold shadow-none hover:opacity-90 transition-all uppercase tracking-widest leading-none">
                        Reconcile Feed
                    </button>
                </div>
            </div>

            {/* Stats - Grid boxes without shadows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-200 rounded divide-x divide-gray-200 overflow-hidden">
                {[
                    { label: 'Cumulative Revenue', val: 'KES 2,442,500', note: '+12.5% MoM' },
                    { label: 'Active Subscriptions', val: '984 Total', note: '82 New this month' },
                    { label: 'Pending Collections', val: 'KES 142,000', note: '12 Invoices Awaiting' },
                ].map((s) => (
                    <div key={s.label} className="p-6 bg-white">
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <p className="text-[22px] font-black text-gray-900 leading-none">{s.val}</p>
                        <p className="text-[11px] font-bold text-gray-400 mt-4 uppercase tracking-wide">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Table Section - The "Excel" Part */}
            <div className="border border-gray-200 rounded overflow-hidden">
                <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Search size={14} className="text-gray-300" />
                        <input type="text" placeholder="Filter records..." className="bg-transparent border-none outline-none text-[11px] font-bold w-48" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing last 30 days</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100">Transact ID</th>
                                <th className="px-5 py-3 border-r border-gray-100">Entity Name</th>
                                <th className="px-5 py-3 border-r border-gray-100">Revenue Amount</th>
                                <th className="px-5 py-3 border-r border-gray-100">Method</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Status</th>
                                <th className="px-5 py-3 text-right">Processing Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {transactions.map((txn) => (
                                <tr key={txn.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-5 py-4 font-mono text-gray-300 group-hover:text-gray-900 border-r border-gray-50">{txn.id}</td>
                                    <td className="px-5 py-4 border-r border-gray-50">
                                        <p className="font-bold text-gray-900">{txn.customer}</p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 font-black text-gray-700">
                                        {txn.amount}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-gray-500 font-medium">
                                        {txn.method}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest border-b-2",
                                            txn.status === 'Cleared' ? "text-pace-green border-pace-green/20" :
                                                txn.status === 'Pending' ? "text-blue-500 border-blue-100" :
                                                    "text-red-500 border-red-100"
                                        )}>{txn.status}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right font-bold text-gray-400">
                                        {txn.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
