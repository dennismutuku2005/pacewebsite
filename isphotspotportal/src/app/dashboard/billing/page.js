"use client"

import React, { useState } from 'react'
import { CreditCard, Smartphone, Building2, CheckCircle2, Clock, AlertCircle, DollarSign } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function BillingPage() {
    const [selectedMethod, setSelectedMethod] = useState('mpesa')

    const paymentMethods = [
        { id: 'mpesa', name: 'M-Pesa STK Push', icon: Smartphone, status: 'Active', color: 'bg-green-500' },
        { id: 'paybill', name: 'Paybill Direct', icon: Building2, status: 'Active', color: 'bg-blue-500' },
        { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, status: 'Coming Soon', color: 'bg-gray-400' },
    ]

    const billingHistory = [
        { id: 1, date: '2026-02-13', description: 'Monthly Subscription', amount: '5000', status: 'Paid', method: 'M-Pesa' },
        { id: 2, date: '2026-01-13', description: 'Monthly Subscription', amount: '5000', status: 'Paid', method: 'M-Pesa' },
        { id: 3, date: '2025-12-13', description: 'Monthly Subscription', amount: '5000', status: 'Paid', method: 'Paybill' },
    ]

    return (
        <div className="space-y-8 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Billing Center</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Manage subscription payments and transaction history.</p>
                </div>
            </div>

            {/* Current Plan */}
            <div className="bg-gradient-to-br from-pace-purple to-[#3d1a75] text-white rounded-3xl p-8 shadow-2xl shadow-pace-purple/20">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Current Plan</p>
                        <h2 className="text-[28px] font-black mt-2 uppercase">Professional Tier</h2>
                        <p className="text-[13px] opacity-80 mt-2 font-medium">Unlimited routers • Advanced analytics • Priority support</p>
                    </div>
                    <Badge variant="success" className="bg-white/20 text-white border-white/30">ACTIVE</Badge>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div>
                        <p className="text-[11px] opacity-60 font-bold uppercase tracking-wider">Next billing date</p>
                        <p className="text-[16px] font-black mt-1">March 13, 2026</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[11px] opacity-60 font-bold uppercase tracking-wider">Monthly rate</p>
                        <p className="text-[24px] font-black mt-1">KSH 5,000</p>
                    </div>
                </div>
            </div>

            {/* Payment Methods */}
            <div>
                <h3 className="text-[13px] font-black text-admin-value uppercase tracking-widest mb-4">Payment Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            onClick={() => method.status === 'Active' && setSelectedMethod(method.id)}
                            className={`bg-white border rounded-2xl p-6 cursor-pointer transition-all ${selectedMethod === method.id
                                    ? 'border-pace-purple ring-2 ring-pace-purple/20 shadow-lg'
                                    : 'border-gray-100 hover:border-pace-purple/30'
                                } ${method.status !== 'Active' ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-2xl ${method.color} text-white flex items-center justify-center`}>
                                    <method.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-black text-admin-value uppercase">{method.name}</h4>
                                    <Badge variant={method.status === 'Active' ? 'success' : 'default'} className="text-[8px] mt-1">
                                        {method.status}
                                    </Badge>
                                </div>
                            </div>
                            {selectedMethod === method.id && method.status === 'Active' && (
                                <div className="flex items-center gap-2 text-pace-purple text-[11px] font-bold">
                                    <CheckCircle2 size={14} />
                                    <span>Selected</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Billing History */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-[11px] font-black text-admin-dim uppercase tracking-widest">Transaction History</h4>
                    <button className="text-[10px] font-black text-pace-purple uppercase hover:underline">Download Invoice</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50/50 text-admin-dim font-bold uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">Payment Method</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {billingHistory.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/30 transition-colors">
                                    <td className="px-6 py-5 font-bold text-admin-label">{item.date}</td>
                                    <td className="px-6 py-5 font-black text-admin-value uppercase">{item.description}</td>
                                    <td className="px-6 py-5 font-medium text-admin-dim">{item.method}</td>
                                    <td className="px-6 py-5 font-black text-pace-purple">KSH {item.amount}</td>
                                    <td className="px-6 py-5 text-center">
                                        <Badge variant="success" className="text-[9px] font-black">
                                            <CheckCircle2 size={10} className="mr-1" />
                                            {item.status.toUpperCase()}
                                        </Badge>
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
