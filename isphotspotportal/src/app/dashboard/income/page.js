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
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Cash Streams</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Real-time ledger of incoming hotspot revenue transactions.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                        <Download size={14} /> Export CSV
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-pace-purple text-white rounded-3xl p-8 shadow-xl shadow-pace-purple/20">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Revenue Today</p>
                    <h2 className="text-[32px] font-black mt-2">KSH 4,820</h2>
                    <div className="mt-6 flex items-center gap-2 text-[11px] font-bold bg-white/10 w-fit px-3 py-1.5 rounded-full">
                        <ArrowUpRight size={14} /> +12.5% from yesterday
                    </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Pending Settlements</p>
                    <h2 className="text-[32px] font-black text-admin-value mt-2">KSH 15,200</h2>
                    <p className="text-[11px] text-admin-label font-bold mt-2 italic opacity-60">Synchronizing with M-Pesa API...</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Commission Fees</p>
                    <h2 className="text-[32px] font-black text-admin-value mt-2">KSH 482</h2>
                    <p className="text-[11px] text-admin-label font-bold mt-2 opacity-60">System processing costs (10%)</p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-[11px] font-black text-admin-dim uppercase tracking-widest">Recent Cash-In</h4>
                    <button className="text-[10px] font-black text-pace-purple uppercase hover:underline">View Ledger</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50/50 text-admin-dim font-bold uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">Ref Code</th>
                                <th className="px-6 py-4">Source</th>
                                <th className="px-6 py-4">Channel</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {transactions.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50/30 transition-colors">
                                    <td className="px-6 py-5 font-black text-admin-value uppercase">{t.ref}</td>
                                    <td className="px-6 py-5 font-bold text-admin-label">{t.from}</td>
                                    <td className="px-6 py-5">
                                        <Badge variant="outline" className="text-[9px] font-black">{t.mode.toUpperCase()}</Badge>
                                    </td>
                                    <td className="px-6 py-5 font-black text-pace-purple">KSH {t.amount}</td>
                                    <td className="px-6 py-5 text-admin-dim font-medium">{t.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
