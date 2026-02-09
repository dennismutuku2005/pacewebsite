"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    CreditCard, DollarSign, ArrowUpRight,
    ArrowDownRight, MoreHorizontal, Download,
    ExternalLink, Calendar, CheckCircle2,
    AlertCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PaymentsPage() {
    const transactions = [
        { id: 'TXN-001', customer: 'James Njuguna', amount: '+ KES 2,500', method: 'M-Pesa', status: 'Completed', date: 'Just now' },
        { id: 'TXN-002', customer: 'Sarah Omari', amount: '+ KES 4,500', method: 'Bank', status: 'Pending', date: '12m ago' },
        { id: 'TXN-003', customer: 'David Kingi', amount: '- KES 1,200', method: 'Reversal', status: 'Failed', date: '1h ago' },
    ]

    return (
        <div className="space-y-6">

            {/* Cards - Simplified, No 3D, No Blue */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none">Total Revenue</p>
                        <div className="p-2 bg-pace-purple/5 text-pace-purple rounded-lg">
                            <CreditCard size={18} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 leading-none">KES 2.4M</h3>
                    <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-pace-green">
                        <ArrowUpRight size={14} /> +12.5% <span className="text-gray-400">vs last month</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest leading-none">Today's Collection</p>
                        <div className="p-2 bg-orange-50 text-orange-500 rounded-lg">
                            <DollarSign size={18} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 leading-none">KES 142,500</h3>
                    <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-pace-green">
                        <ArrowUpRight size={14} /> +2.3% <span className="text-gray-400">vs yesterday</span>
                    </div>
                </div>

                <div className="bg-pace-purple-dark p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                    <h3 className="text-white text-lg font-black leading-tight">Automated Billing <br /> is Active</h3>
                    <button className="mt-4 w-full py-2.5 bg-white text-pace-purple-dark rounded-xl text-xs font-black hover:opacity-90 transition-all">
                        Configure Billing
                    </button>
                </div>
            </div>

            {/* Transactions Table - Simplified */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="text-[16px] font-black text-gray-900">Recent Transactions</h3>
                    <button className="text-[11px] font-bold text-pace-purple border border-pace-purple/20 px-3 py-1.5 rounded-lg hover:bg-pace-purple/5 transition-colors">Export Statement</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">ID</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Amount</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm">
                            {transactions.map((txn, i) => (
                                <tr key={txn.id} className="hover:bg-gray-50/80 transition-all">
                                    <td className="px-6 py-4 font-mono text-[12px] text-gray-400 font-bold">{txn.id}</td>
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-gray-800 leading-none">{txn.customer}</p>
                                        <p className="text-[10px] text-gray-400 font-medium mt-1">{txn.method}</p>
                                    </td>
                                    <td className={cn(
                                        "px-6 py-4 text-right font-black text-[14px]",
                                        txn.amount.startsWith('+') ? "text-pace-green" : "text-red-500"
                                    )}>{txn.amount}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={cn(
                                            "px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-widest",
                                            txn.status === 'Completed' ? "bg-pace-green/10 text-pace-green" :
                                                txn.status === 'Pending' ? "bg-blue-50 text-blue-600" :
                                                    "bg-red-50 text-red-600"
                                        )}>{txn.status}</span>
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
