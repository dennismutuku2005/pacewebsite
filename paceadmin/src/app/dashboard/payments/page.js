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
        { id: 'TXN-002', customer: 'Sarah Omari', amount: '+ KES 4,500', method: 'Bank Transfer', status: 'Pending', date: '12 mins ago' },
        { id: 'TXN-003', customer: 'David Kingi', amount: '- KES 1,200', method: 'Reversal', status: 'Failed', date: '1 hour ago' },
        { id: 'TXN-004', customer: 'Mary Wanjiku', amount: '+ KES 3,000', method: 'M-Pesa', status: 'Completed', date: '3 hours ago' },
    ]

    return (
        <div className="space-y-6 pb-10">

            {/* Financial Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                <CreditCard size={24} />
                            </div>
                        </div>
                        <p className="text-[13px] font-bold text-[#64748b] uppercase tracking-widest mb-1">Total Revenue</p>
                        <h3 className="text-3xl font-black text-[#1e293b]">KES 2.4M</h3>
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
                        <span className="text-sm font-bold text-green-500 flex items-center gap-1">+12.5% <ArrowUpRight size={14} /></span>
                        <span className="text-[11px] text-[#94a3b8] font-bold uppercase tracking-widest">Since last month</span>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                                <DollarSign size={24} />
                            </div>
                        </div>
                        <p className="text-[13px] font-bold text-[#64748b] uppercase tracking-widest mb-1">Collection Today</p>
                        <h3 className="text-3xl font-black text-[#1e293b]">KES 142,500</h3>
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#f1f5f9] flex items-center justify-between">
                        <span className="text-sm font-bold text-green-500 flex items-center gap-1">+2.3% <ArrowUpRight size={14} /></span>
                        <span className="text-[11px] text-[#94a3b8] font-bold uppercase tracking-widest">Since yesterday</span>
                    </div>
                </div>

                {/* Auto Invoicing Setup Card */}
                <div className="bg-[#1e293b] p-8 rounded-2xl text-white relative overflow-hidden shadow-xl">
                    <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-2">Automated Billing</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">System generates invoices and sends them to customers automatically.</p>

                        <div className="flex items-center gap-3">
                            <button className="px-6 py-2.5 bg-[#4a6cf7] text-white rounded-xl text-xs font-bold hover:bg-[#3d59e0] transition-all">Configure Now</button>
                            <button className="p-2.5 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all"><Settings size={18} /></button>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>

            {/* Recent Transactions Table */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#1e293b]">Recent Transactions</h3>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-[#f4f7fe] rounded-lg text-xs font-bold text-[#4a6cf7] hover:bg-[#e0e7ff] transition-all">View Statement</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest font-sans">TXN ID</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest font-sans">Customer</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest font-sans">Amount</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest font-sans">Method</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest font-sans">Status</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest font-sans text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1f5f9]">
                            {transactions.map((txn, i) => (
                                <motion.tr
                                    key={txn.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-[#f8fafc] transition-colors group"
                                >
                                    <td className="px-6 py-5">
                                        <span className="text-[13px] font-mono font-bold text-[#64748b]">{txn.id}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-[14px] font-bold text-[#1e293b]">{txn.customer}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={cn(
                                            "text-[14px] font-black",
                                            txn.amount.startsWith('+') ? "text-green-500" : "text-red-500"
                                        )}>{txn.amount}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                            <span className="text-[13px] font-bold text-[#64748b]">{txn.method}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                                            txn.status === 'Completed' ? "bg-green-50 text-green-700 border-green-200" :
                                                txn.status === 'Pending' ? "bg-blue-50 text-blue-700 border-blue-200" :
                                                    "bg-red-50 text-red-700 border-red-200"
                                        )}>
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right font-medium text-[12px] text-[#94a3b8]">
                                        {txn.date}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
