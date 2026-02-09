"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Users, Search, Filter, Plus,
    MoreVertical, Mail, Phone, MapPin,
    Trash2, Edit2, Shield, UserPlus
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CustomersPage() {
    const customers = [
        { id: '1', name: 'John Kamau', email: 'john@example.com', phone: '+254 712 345 678', location: 'Westlands', plan: 'Fiber Pro', status: 'Active', balance: 'KES 0' },
        { id: '2', name: 'Mary Wanjiku', email: 'mary@example.com', phone: '+254 722 987 654', location: 'Nyali', plan: 'Wireless Home', status: 'Blocked', balance: 'KES 2,500' },
        { id: '3', name: 'David Omari', email: 'david@example.com', phone: '+254 733 111 222', location: 'Milimani', plan: 'Fiber Lite', status: 'Active', balance: 'KES 0' },
        { id: '4', name: 'Sarah Atieno', email: 'sarah@example.com', phone: '+254 700 444 555', location: 'Lanet', plan: 'Premium WISP', status: 'Expired', balance: 'KES 4,500' },
    ]

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-pace-purple-dark text-[24px]">Client Directory</h1>
                    <p className="text-[13px] text-gray-500 font-medium">Manage and monitor all your active and pending subscriptions.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-pace-purple text-white rounded-xl text-xs font-black shadow-lg shadow-pace-purple/10 hover:opacity-90 transition-all active:scale-95">
                    <UserPlus size={16} />
                    Add New Client
                </button>
            </div>

            {/* Filter Bar - Simplified */}
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Find client by name..."
                        className="w-full pl-11 pr-4 py-2 rounded-xl bg-gray-50 border-none focus:ring-1 focus:ring-pace-purple transition-all placeholder:text-gray-400 text-xs font-medium"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 border border-gray-100 text-gray-500 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all">
                        <Filter size={14} /> Filter Status
                    </button>
                </div>
            </div>

            {/* Table Card - Simplified */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-rubik">Customer</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-rubik">Service Plan</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-rubik">Status</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-rubik">Balance</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest font-rubik text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {customers.map((c, i) => (
                                <motion.tr
                                    key={c.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group hover:bg-gray-50/80 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-pace-purple/5 flex items-center justify-center text-pace-purple font-black text-xs">
                                                {c.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-bold text-gray-800 group-hover:text-pace-purple transition-colors leading-none">{c.name}</p>
                                                <p className="text-[11px] text-gray-400 font-medium mt-1">{c.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[13px] font-bold text-gray-700">{c.plan}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                                            c.status === 'Active' ? "bg-pace-green/10 text-pace-green" :
                                                c.status === 'Blocked' ? "bg-red-50 text-red-600" :
                                                    "bg-orange-50 text-orange-600"
                                        )}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "text-[13px] font-bold",
                                            c.balance === 'KES 0' ? "text-gray-300 font-medium" : "text-red-500"
                                        )}>
                                            {c.balance}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-lg text-gray-400 hover:text-pace-purple transition-all">
                                                <Edit2 size={14} />
                                            </button>
                                            <button className="p-2 rounded-lg text-gray-400 hover:text-red-500 transition-all">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-5 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-[12px] text-gray-400 font-medium">Showing 4 entries</p>
                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 rounded-lg border border-gray-100 text-[11px] font-bold text-gray-400 bg-white" disabled>Prev</button>
                        <button className="px-3 py-1.5 rounded-lg bg-pace-purple text-white text-[11px] font-bold">1</button>
                        <button className="px-3 py-1.5 rounded-lg border border-gray-100 text-[11px] font-bold text-gray-500 hover:bg-gray-50 transition-all">Next</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
