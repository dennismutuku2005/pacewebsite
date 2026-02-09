"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Users, Ticket, CreditCard, ArrowUpRight,
    ArrowDownRight, MoreHorizontal, UserPlus,
    RefreshCcw, Search, BarChart3, TrendingUp,
    Settings, Activity, CheckCircle2
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
    const stats = [
        { name: 'Total Active Clients', value: '1,284', change: '+12%', icon: Users, color: 'text-pace-purple', bg: 'bg-pace-purple/5' },
        { name: 'Open Support Tickets', value: '24', change: '-5', icon: Ticket, color: 'text-pace-green', bg: 'bg-pace-green/5' },
        { name: 'Daily Revenue', value: 'KES 142.5k', change: '+8.2%', icon: CreditCard, color: 'text-orange-500', bg: 'bg-orange-50' },
        { name: 'Monthly Target', value: 'KES 4.2M', change: '85%', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-50' },
    ]

    const recentClients = [
        { name: 'John Kamau', plan: 'Fiber Pro 50', status: 'Active', joined: '2h ago' },
        { name: 'Mary Wanjira', plan: 'Home Lite 10', status: 'Pending', joined: '5h ago' },
        { name: 'David Omari', plan: 'Fiber Pro 50', status: 'Active', joined: 'Yesterday' },
        { name: 'Sarah Atieno', plan: 'Premium WISP', status: 'Active', joined: 'Yesterday' },
    ]

    return (
        <div className="space-y-6">

            {/* Header Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-pace-purple-dark">Management Overview</h1>
                    <p className="text-sm text-gray-500 mt-1">Welcome back, Adam. Here is the latest for your network.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2">
                        <RefreshCcw size={14} /> Sync Routers
                    </button>
                    <button className="px-5 py-2 bg-pace-purple text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all shadow-lg shadow-pace-purple/10">
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Stats Grid - Simplified Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-pace-purple/20 transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={cn("p-2.5 rounded-xl", stat.bg)}>
                                <stat.icon size={20} className={stat.color} />
                            </div>
                            <span className={cn(
                                "text-[11px] font-bold px-2 py-0.5 rounded-full",
                                stat.change.startsWith('+') ? "text-pace-green bg-pace-green/10" : "text-gray-500 bg-gray-100"
                            )}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{stat.name}</p>
                        <h3 className="text-2xl font-black text-gray-900 mt-1">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Recent Performance Section */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-bold text-gray-900">Recent Customer Joiners</h3>
                            <button className="text-xs font-bold text-pace-purple hover:underline">View Directory</button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-gray-50">
                                        <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Client Name</th>
                                        <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Plan</th>
                                        <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                        <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Joined</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {recentClients.map((client) => (
                                        <tr key={client.name} className="group cursor-pointer">
                                            <td className="py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                                        {client.name.charAt(0)}
                                                    </div>
                                                    <p className="text-sm font-bold text-gray-800 group-hover:text-pace-purple transition-colors">{client.name}</p>
                                                </div>
                                            </td>
                                            <td className="py-4 text-[13px] font-medium text-gray-500">{client.plan}</td>
                                            <td className="py-4">
                                                <span className={cn(
                                                    "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                                                    client.status === 'Active' ? "bg-pace-green/10 text-pace-green" : "bg-orange-50 text-orange-600"
                                                )}>
                                                    {client.status}
                                                </span>
                                            </td>
                                            <td className="py-4 text-right text-[12px] font-medium text-gray-400">{client.joined}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Network Node Status - Simplified */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Network Node Status</h3>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-pace-green animate-pulse"></div>
                                <span className="text-[11px] font-bold text-pace-green uppercase tracking-widest">All Core Online</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'Nairobi Main Gateway', ip: '197.248.01.01', load: 45 },
                                { name: 'Mombasa Relay Tower', ip: '102.164.22.14', load: 12 },
                                { name: 'Kisumu Core Router', ip: '41.215.11.08', load: 78 },
                            ].map((node) => (
                                <div key={node.name} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            <Activity size={16} className="text-pace-purple" />
                                        </div>
                                        <div>
                                            <p className="text-[13px] font-bold text-gray-800">{node.name}</p>
                                            <p className="text-[10px] text-gray-400 font-mono tracking-tighter">{node.ip}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 flex-1 max-w-[120px]">
                                        <div className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div className={cn(
                                                "h-full rounded-full transition-all",
                                                node.load > 70 ? "bg-red-500" : "bg-pace-purple"
                                            )} style={{ width: `${node.load}%` }}></div>
                                        </div>
                                        <span className="text-[11px] font-bold text-gray-500">{node.load}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions & System Health */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-pace-purple-dark text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h4 className="text-lg font-bold mb-1">Billing Engine</h4>
                            <p className="text-purple-200/80 text-[13px] mb-6 leading-relaxed">Automated invoicing and M-Pesa sync running in background.</p>
                            <div className="flex items-center gap-2 mb-8">
                                <CheckCircle2 size={16} className="text-pace-green" />
                                <span className="text-[11px] font-bold uppercase tracking-widest">Last Sync: 14:32:01</span>
                            </div>
                            <button className="w-full py-3 bg-white text-pace-purple-dark rounded-xl text-xs font-black hover:bg-gray-50 transition-all shadow-lg active:scale-95">
                                Open Billing Portal
                            </button>
                        </div>
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest text-center">System Log Snippet</h3>
                        <div className="space-y-4">
                            {[
                                { time: '14:20', text: 'Backup completed', type: 'system' },
                                { time: '14:15', text: 'New login from admin_root', type: 'auth' },
                                { time: '13:58', text: 'Payment detected James K.', type: 'billing' },
                            ].map((log, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <span className="text-[10px] font-bold text-gray-300 mt-1">{log.time}</span>
                                    <p className="text-[12px] font-medium text-gray-600 group-hover:text-pace-purple transition-colors cursor-default">{log.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2 border-t border-gray-50 text-[11px] font-bold text-pace-purple hover:underline pt-4">Full Log View</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
