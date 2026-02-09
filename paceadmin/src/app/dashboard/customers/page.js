"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Users, Search, Filter, Plus,
    MoreVertical, Mail, Phone, MapPin,
    Trash2, Edit2, Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CustomersPage() {
    const customers = [
        { id: '1', name: 'John Kamau', email: 'john@example.com', phone: '+254 712 345 678', location: 'Nairobi, Westlands', plan: 'Fiber Pro', status: 'Active', balance: 'KES 0' },
        { id: '2', name: 'Mary Wanjiku', email: 'mary@example.com', phone: '+254 722 987 654', location: 'Mombasa, Nyali', plan: 'Wireless Home', status: 'Blocked', balance: 'KES 2,500' },
        { id: '3', name: 'David Omari', email: 'david@example.com', phone: '+254 733 111 222', location: 'Kisumu, Milimani', plan: 'Fiber Lite', status: 'Active', balance: 'KES 0' },
        { id: '4', name: 'Sarah Atieno', email: 'sarah@example.com', phone: '+254 700 444 555', location: 'Nakuru, Lanet', plan: 'Premium WISP', status: 'Expired', balance: 'KES 4,500' },
        { id: '5', name: 'George Maina', email: 'george@example.com', phone: '+254 755 666 777', location: 'Eldoret, Town', plan: 'Fiber Pro', status: 'Active', balance: 'KES 0' },
    ]

    return (
        <div className="space-y-6 pb-10">

            {/* Search & Actions Bar */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, email or phone..."
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#f4f7fe] border-none focus:ring-2 focus:ring-[#4a6cf7]/20 outline-none transition-all placeholder:text-[#94a3b8] text-sm font-medium"
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-[#e2e8f0] text-[#64748b] rounded-xl text-sm font-bold hover:bg-[#f8fafc] transition-all">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 bg-[#4a6cf7] text-white rounded-xl text-sm font-bold hover:bg-[#3d59e0] transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                        <Plus size={18} />
                        Add Customer
                    </button>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                                <th className="px-6 py-4 text-[12px] font-bold text-[#64748b] uppercase tracking-wider">Customer Details</th>
                                <th className="px-6 py-4 text-[12px] font-bold text-[#64748b] uppercase tracking-wider">Service Plan</th>
                                <th className="px-6 py-4 text-[12px] font-bold text-[#64748b] uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-[12px] font-bold text-[#64748b] uppercase tracking-wider">Balance</th>
                                <th className="px-6 py-4 text-[12px] font-bold text-[#64748b] uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1f5f9]">
                            {customers.map((c, i) => (
                                <motion.tr
                                    key={c.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group hover:bg-[#f8fafc] transition-colors"
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center text-[#4a6cf7] font-bold overflow-hidden border border-[#e2e8f0]">
                                                {c.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-bold text-[#1e293b] group-hover:text-[#4a6cf7] transition-colors">{c.name}</p>
                                                <div className="flex items-center gap-3 mt-1 text-[11px] text-[#64748b] font-medium">
                                                    <span className="flex items-center gap-1"><Mail size={12} /> {c.email}</span>
                                                    <span className="flex items-center gap-1"><MapPin size={12} /> {c.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-[13px] font-bold text-[#1e293b]">{c.plan}</span>
                                            <span className="text-[11px] text-[#94a3b8] font-medium">Next Billing: Apr 1, 2024</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                                            c.status === 'Active' ? "bg-green-50 text-green-700 border-green-200" :
                                                c.status === 'Blocked' ? "bg-red-50 text-red-700 border-red-200" :
                                                    "bg-orange-50 text-orange-700 border-orange-200"
                                        )}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={cn(
                                            "text-[14px] font-bold",
                                            c.balance === 'KES 0' ? "text-gray-400" : "text-red-500"
                                        )}>
                                            {c.balance}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-lg text-[#64748b] hover:bg-white hover:shadow-sm hover:text-blue-500 transition-all">
                                                <Shield size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg text-[#64748b] hover:bg-white hover:shadow-sm hover:text-orange-500 transition-all">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg text-[#64748b] hover:bg-white hover:shadow-sm hover:text-red-500 transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg text-[#94a3b8] hover:bg-white transition-all">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center justify-between">
                    <p className="text-sm text-[#64748b] font-medium">Showing <span className="font-bold text-[#1e293b]">5</span> of <span className="font-bold text-[#1e293b]">1,284</span> customers</p>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg border border-[#e2e8f0] bg-white text-[#64748b] disabled:opacity-50 cursor-pointer" disabled>Prev</button>
                        <div className="px-4 py-2 bg-[#4a6cf7] text-white rounded-lg text-xs font-bold shadow-md shadow-blue-500/20">1</div>
                        <button className="px-4 py-2 border border-[#e2e8f0] bg-white text-[#64748b] rounded-lg text-xs font-bold hover:bg-[#f1f5f9] transition-all">2</button>
                        <button className="px-4 py-2 border border-[#e2e8f0] bg-white text-[#64748b] rounded-lg text-xs font-bold hover:bg-[#f1f5f9] transition-all">3</button>
                        <button className="p-2 rounded-lg border border-[#e2e8f0] bg-white text-[#64748b] hover:bg-[#f1f5f9] transition-all">Next</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
