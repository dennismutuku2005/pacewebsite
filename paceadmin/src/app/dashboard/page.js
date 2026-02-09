"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Users, Ticket, CreditCard, ArrowUpRight,
    ArrowDownRight, MoreHorizontal, UserPlus,
    RefreshCcw, Search, Filter, Mail
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
    const stats = [
        { name: 'Total Clients', value: '1,284', change: '+12.5%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { name: 'Open Tickets', value: '24', change: '-4.3%', icon: Ticket, color: 'text-orange-600', bg: 'bg-orange-50' },
        { name: 'Transacted Today', value: 'KES 142,500', change: '+28.4%', icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
        { name: 'New Applications', value: '18', change: '+5.7%', icon: UserPlus, color: 'text-purple-600', bg: 'bg-purple-50' },
    ]

    const recentClients = [
        { id: '1', name: 'James Kamau', plan: 'Fiber Pro', balance: 'KES 0', status: 'Active', joined: 'Oct 24, 2023' },
        { id: '2', name: 'Sarah Omari', plan: 'Wireless Home', balance: 'KES 2,500', status: 'Overdue', joined: 'Nov 12, 2023' },
        { id: '3', name: 'Maina George', plan: 'Premium WISP', balance: 'KES 0', status: 'Active', joined: 'Dec 05, 2023' },
        { id: '4', name: 'Lucy Wanjiku', plan: 'Hotspot Retail', balance: 'KES 0', status: 'Active', joined: 'Jan 15, 2024' },
        { id: '5', name: 'Tom Kwena', plan: 'Fiber Lite', balance: 'KES 4,500', status: 'Suspended', joined: 'Feb 01, 2024' },
    ]

    return (
        <div className="space-y-8 pb-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Overview</h1>
                    <p className="text-gray-500 font-medium">Monitoring your WISP business performance.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                        <RefreshCcw size={16} />
                        Refresh Data
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-pace-purple text-white rounded-xl text-sm font-bold hover:bg-pace-purple-dark transition-all shadow-lg shadow-pace-purple/20">
                        Export Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:shadow-gray-200/40 transition-all group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={cn("p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300", stat.bg)}>
                                <stat.icon className={cn("w-6 h-6", stat.color)} />
                            </div>
                            <div className={cn(
                                "px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1",
                                stat.change.startsWith('+') ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
                            )}>
                                {stat.change.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.change}
                            </div>
                        </div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.name}</p>
                        <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Main Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Clients Table Card */}
                <div className="lg:col-span-8 bg-white rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/20 overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-pace-purple/10 rounded-xl flex items-center justify-center text-pace-purple font-bold">
                                <Users size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Recent Clients</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                                <input type="text" placeholder="Quick search..." className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-medium outline-none focus:ring-4 focus:ring-pace-purple/5 transition-all w-full sm:w-48" />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Service Plan</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentClients.map((client) => (
                                    <tr key={client.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-400 text-xs">
                                                    {client.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 group-hover:text-pace-purple transition-colors">{client.name}</p>
                                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Joined {client.joined}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-pace-purple-dark/20"></div>
                                                <span className="text-sm font-bold text-gray-600">{client.plan}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                client.status === 'Active' ? "bg-green-100 text-green-700" :
                                                    client.status === 'Overdue' ? "bg-orange-100 text-orange-700" :
                                                        "bg-red-100 text-red-700"
                                            )}>
                                                {client.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 rounded-lg text-gray-400 hover:bg-white hover:shadow-md hover:text-pace-purple transition-all active:scale-95">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
                        <button className="text-sm font-bold text-pace-purple hover:underline">View All Customers &rarr;</button>
                    </div>
                </div>

                {/* Server Status & Notifications */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-pace-purple rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl shadow-pace-purple/30">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-white/10 rounded-2xl border border-white/20">
                                    <Activity className="text-white" size={24} />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-green-400/20 text-green-300 text-[10px] font-black uppercase tracking-[2px] border border-green-400/30">Live Status</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Server Network</h3>
                            <p className="text-purple-200/70 text-sm mb-6 font-medium">Monitoring your WISP access points.</p>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                        <span>Network Uptime</span>
                                        <span className="text-green-300">99.98%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: '99.98%' }} className="h-full bg-green-400"></motion.div>
                                    </div>
                                </div>
                                <div className="space-y-1.5 pt-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                        <span>Core CPU Load</span>
                                        <span className="text-purple-200">24%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: '24%' }} className="h-full bg-white"></motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Wave Decoration */}
                        <svg className="absolute bottom-0 right-0 w-32 h-32 text-white/5" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M0 100 Q 25 25, 50 100 T 100 100" />
                        </svg>
                    </div>

                    {/* Quick Actions Card */}
                    <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/20 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 bg-pace-orange-start/10 rounded-lg flex items-center justify-center text-pace-orange-mid">
                                <Ticket size={16} />
                            </div>
                            Quick Tasks
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="p-4 rounded-2xl bg-gray-50 hover:bg-pace-purple hover:text-white transition-all text-left group">
                                <Mail className="w-5 h-5 text-gray-400 mb-2 group-hover:text-white" />
                                <span className="text-xs font-bold block">Broadcast</span>
                                <span className="text-[10px] text-gray-400 group-hover:text-purple-200">SMS Clients</span>
                            </button>
                            <button className="p-4 rounded-2xl bg-gray-50 hover:bg-pace-green hover:text-white transition-all text-left group">
                                <RefreshCcw className="w-5 h-5 text-gray-400 mb-2 group-hover:text-white" />
                                <span className="text-xs font-bold block">Update</span>
                                <span className="text-[10px] text-gray-400 group-hover:text-white">All Routers</span>
                            </button>
                            <button className="p-4 rounded-2xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all text-left group col-span-2">
                                <CreditCard className="w-5 h-5 text-gray-400 mb-2 group-hover:text-white" />
                                <span className="text-xs font-bold block">Generate Invoices</span>
                                <span className="text-[10px] text-gray-400 group-hover:text-blue-100">For all active clients</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
