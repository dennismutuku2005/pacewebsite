"use client"

import React, { useState } from 'react'
import { CreditCard, Smartphone, Building2, CheckCircle2, Clock, AlertCircle, DollarSign, Download, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function BillingPage() {
    const [selectedMethod, setSelectedMethod] = useState('mpesa')

    const paymentMethods = [
        { id: 'mpesa', name: 'M-Pesa STK Push', icon: Smartphone, status: 'Active', color: 'bg-green-100 text-green-600' },
        { id: 'paybill', name: 'Paybill Direct', icon: Building2, status: 'Active', color: 'bg-blue-100 text-blue-600' },
        { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, status: 'Coming Soon', color: 'bg-gray-100 text-gray-500' },
    ]

    const billingHistory = [
        { id: 1, date: '2026-02-13', description: 'Monthly Subscription', amount: '5000', status: 'Paid', method: 'M-Pesa' },
        { id: 2, date: '2026-01-13', description: 'Monthly Subscription', amount: '5000', status: 'Paid', method: 'M-Pesa' },
        { id: 3, date: '2025-12-13', description: 'Monthly Subscription', amount: '5000', status: 'Paid', method: 'Paybill' },
    ]

    return (
        <div className="space-y-8 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Billing Center</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage subscription payments and transaction history.</p>
                </div>
            </div>

            {/* Current Plan */}
            <div className="bg-gradient-to-br from-pace-purple to-purple-800 text-white rounded-2xl p-8 shadow-xl shadow-pace-purple/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-6">
                    <div>
                        <Badge variant="success" className="bg-white/20 text-white border-white/20 mb-3 backdrop-blur-sm">ACTIVE PLAN</Badge>
                        <h2 className="text-3xl font-bold">Professional Tier</h2>
                        <ul className="mt-4 space-y-2 opacity-90 text-[13px] font-medium">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} /> Unlimited routers & Network Nodes
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} /> Advanced analytics dashboard
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} /> 24/7 Priority support
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[280px] border border-white/10">
                        <p className="text-xs opacity-70 font-medium uppercase tracking-wider">Monthly Total</p>
                        <p className="text-4xl font-bold mt-1">KSH 5,000</p>
                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                            <span className="opacity-70">Next billing</span>
                            <span className="font-bold">March 13, 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Methods */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            onClick={() => method.status === 'Active' && setSelectedMethod(method.id)}
                            className={`bg-white border rounded-xl p-5 cursor-pointer transition-all ${selectedMethod === method.id
                                ? 'border-pace-purple ring-1 ring-pace-purple shadow-md'
                                : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                                } ${method.status !== 'Active' ? 'opacity-60 cursor-not-allowed bg-gray-50' : ''}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-10 h-10 rounded-lg ${method.color} flex items-center justify-center`}>
                                    <method.icon size={20} />
                                </div>
                                {selectedMethod === method.id && method.status === 'Active' && (
                                    <div className="w-5 h-5 bg-pace-purple rounded-full flex items-center justify-center text-white">
                                        <CheckCircle2 size={12} />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">{method.name}</h4>
                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-xs text-gray-500">{method.status === 'Active' ? 'Connected' : 'Unavailable'}</span>
                                    {method.status === 'Active' && <ChevronRight size={14} className="text-gray-400" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Billing History */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-gray-900">Billing History</h4>
                    <button className="text-xs font-medium text-pace-purple hover:underline flex items-center gap-1">
                        <Download size={14} /> Download All
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Date</th>
                                <th className="px-4 py-3 font-semibold">Description</th>
                                <th className="px-4 py-3 font-semibold">Method</th>
                                <th className="px-4 py-3 font-semibold">Amount</th>
                                <th className="px-4 py-3 font-semibold text-center">Status</th>
                                <th className="px-4 py-3 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {billingHistory.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 text-gray-500 font-medium text-xs font-mono">{item.date}</td>
                                    <td className="px-4 py-3 font-medium text-gray-900">{item.description}</td>
                                    <td className="px-4 py-3 text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs">{item.method}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 font-bold text-gray-900">KSH {item.amount}</td>
                                    <td className="px-4 py-3 text-center">
                                        <Badge variant="success" className="text-[10px] px-2 py-0.5 font-medium">
                                            {item.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="text-pace-purple text-xs font-medium hover:underline">Invoice</button>
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
