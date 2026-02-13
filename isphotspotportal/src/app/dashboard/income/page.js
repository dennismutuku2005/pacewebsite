"use client"

import React, { useState } from 'react'
import { Wallet, ArrowDownRight, ArrowUpRight, Filter, Search, Download } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function IncomePage() {
    const transactions = [
        { id: 1, type: 'Payment', from: '0712345678', mode: 'M-Pesa STK', amount: '20', date: 'Just now', ref: 'RCN1S2D3F4' },
        { id: 2, type: 'Payment', from: '0787654321', mode: 'Paybill', amount: '50', date: '10 mins ago', ref: 'QWE9R8T7Y6' },
        { id: 3, type: 'Manual', from: 'Admin Panel', mode: 'Voucher', amount: '1000', date: '1 hour ago', ref: 'MAN-9981' },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Revenue Overview</h1>
                    <p className="text-sm text-gray-500 mt-1">Real-time ledger of incoming hotspot revenue transactions.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2">
                        <Download size={14} /> Export CSV
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-pace-purple text-white rounded-2xl p-6 shadow-xl shadow-pace-purple/10">
                    <p className="text-xs font-medium opacity-80 uppercase tracking-wide">Revenue Today</p>
                    <h2 className="text-3xl font-bold mt-2">KSH 4,820</h2>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold bg-white/10 w-fit px-3 py-1.5 rounded-full">
                        <ArrowUpRight size={14} /> +12.5% from yesterday
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Pending Settlements</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">KSH 15,200</h2>
                    <p className="text-xs text-gray-500 mt-2 font-medium italic">Synchronizing with M-Pesa API...</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Commission Fees</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">KSH 482</h2>
                    <p className="text-xs text-gray-500 mt-2 font-medium">System processing costs (10%)</p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-gray-900">Recent Cash-In</h4>
                    <button className="text-xs font-medium text-pace-purple hover:underline">View Ledger</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Ref Code</th>
                                <th className="px-4 py-3 font-semibold">Source</th>
                                <th className="px-4 py-3 font-semibold">Channel</th>
                                <th className="px-4 py-3 font-semibold">Amount</th>
                                <th className="px-4 py-3 font-semibold">Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {transactions.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 font-medium text-gray-900">{t.ref}</td>
                                    <td className="px-4 py-3 text-gray-600">{t.from}</td>
                                    <td className="px-4 py-3">
                                        <Badge variant="outline" className="text-[10px] px-2 py-0.5 font-medium border-gray-200 text-gray-600">{t.mode}</Badge>
                                    </td>
                                    <td className="px-4 py-3 font-bold text-pace-purple">KSH {t.amount}</td>
                                    <td className="px-4 py-3 text-gray-400 text-xs">{t.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
