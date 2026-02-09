"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Users, Ticket, CreditCard, ArrowUpRight,
    ArrowDownRight, MoreHorizontal, UserPlus,
    RefreshCcw, Search, BarChart3, TrendingUp,
    Instagram, Globe, Facebook, ExternalLink
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
    const stats = [
        {
            name: 'Avg. Client Rating',
            value: '7.8/10',
            change: '+2.5%',
            icon: UserPlus,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            sub: 'than last Week'
        },
        {
            name: 'Monthly Revenue',
            value: 'KES 4.2M',
            change: '-1.5%',
            icon: TrendingUp,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            sub: 'than last Month'
        },
        {
            name: 'Transacted Today',
            value: 'KES 142,500',
            change: '+2.6%',
            icon: CreditCard,
            color: 'text-orange-600',
            bg: 'bg-orange-50',
            sub: 'than yesterday'
        },
    ]

    const metrics = [
        { label: 'Google Analytics', icon: Globe, link: 'https://analytics.google.com' },
        { label: 'Facebook Ads', icon: Facebook, link: 'https://business.facebook.com' },
        { label: 'Instagram Ads', icon: Instagram, link: 'https://adsmanager.facebook.com' },
    ]

    return (
        <div className="space-y-6 pb-10">

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className={cn("p-3 rounded-xl", stat.bg)}>
                                <stat.icon size={24} className={stat.color} />
                            </div>
                        </div>
                        <p className="text-[14px] font-medium text-[#64748b] mb-1">{stat.name}</p>
                        <div className="flex items-end gap-3">
                            <h3 className="text-3xl font-bold text-[#1e293b]">{stat.value}</h3>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2">
                            <span className={cn(
                                "text-[13px] font-bold flex items-center",
                                stat.change.startsWith('+') ? "text-green-500" : "text-red-500"
                            )}>
                                {stat.change.startsWith('+') ? <ArrowUpRight size={14} className="mr-0.5" /> : <ArrowDownRight size={14} className="mr-0.5" />}
                                {stat.change}
                            </span>
                            <span className="text-[13px] text-[#94a3b8] font-medium">{stat.sub}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Bar Chart Mockup */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-[#1e293b]">Network Traffic</h3>
                            <p className="text-sm text-[#64748b]">Detailed analytics of your network load</p>
                        </div>
                        <div className="px-4 py-2 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] text-sm font-medium text-[#64748b] cursor-pointer hover:bg-white transition-all">
                            March 2024
                        </div>
                    </div>

                    {/* Custom SVG Bar Chart to match UI Exactly */}
                    <div className="h-[280px] w-full flex items-end justify-between gap-2 px-2 mt-10">
                        {[40, 65, 50, 85, 45, 70, 40, 90, 60, 80, 55, 65].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                                {/* Tooltip on hover */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1e293b] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {val}Mbps
                                </div>
                                {/* The Bar */}
                                <div className="w-full relative flex flex-col items-center">
                                    {/* Negative space like in image */}
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${val}%` }}
                                        className="w-2.5 sm:w-4 rounded-full bg-[#4a6cf7] relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#4a6cf7] to-[#818cf8]"></div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${val * 0.4}%` }}
                                        className="w-2.5 sm:w-4 rounded-full bg-[#93c5fd] mt-1"
                                    ></motion.div>
                                </div>
                                <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-tighter">
                                    {16 + i}/08
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex items-center justify-center gap-8 border-t border-[#f1f5f9] pt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#4a6cf7]"></div>
                            <span className="text-sm font-bold text-[#64748b]">Download</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#93c5fd]"></div>
                            <span className="text-sm font-bold text-[#64748b]">Upload</span>
                        </div>
                    </div>
                </div>

                {/* Donut Chart and Links */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8">
                        <h3 className="text-lg font-bold text-[#1e293b] mb-2">Usage Distribution</h3>
                        <div className="relative h-48 flex items-center justify-center mt-6">
                            <svg viewBox="0 0 100 100" className="w-40 h-40 transform -rotate-90">
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                                <motion.circle
                                    cx="50" cy="50" r="40" fill="transparent" stroke="#4a6cf7" strokeWidth="12"
                                    strokeDasharray="251.2"
                                    initial={{ strokeDashoffset: 251.2 }}
                                    animate={{ strokeDashoffset: 251.2 * 0.35 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-black text-[#1e293b]">36,358</span>
                                <span className="text-[11px] font-bold text-green-500 flex items-center gap-0.5">
                                    <TrendingUp size={10} /> +9% <span className="text-[#94a3b8]">vs last year</span>
                                </span>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#4a6cf7]"></div>
                                <span className="text-xs font-bold text-[#64748b]">Fiber</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                                <span className="text-xs font-bold text-[#64748b]">Wireless</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-[#1e293b]">External Management</h3>
                            <MoreHorizontal size={20} className="text-[#94a3b8] cursor-pointer" />
                        </div>
                        <p className="text-sm text-[#64748b] mb-6 font-medium">Most used business resources</p>
                        <div className="space-y-3">
                            {metrics.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 bg-[#f8fafc] border border-transparent hover:border-[#4a6cf7]/20 hover:bg-white rounded-xl transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#f1f5f9] transition-colors">
                                            <item.icon size={18} className="text-[#4a6cf7]" />
                                        </div>
                                        <span className="text-[14px] font-bold text-[#1e293b]">{item.label}</span>
                                    </div>
                                    <ExternalLink size={16} className="text-[#94a3b8] group-hover:text-[#4a6cf7] transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Finisher */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="z-10">
                    <h3 className="text-xl font-bold text-[#1e293b] mb-1">Pace Billing Engine</h3>
                    <p className="text-[#64748b] font-medium max-w-md">Automated billing, invoicing and client management at your fingertips.</p>
                </div>
                <div className="flex items-center gap-4 z-10 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-initial px-8 py-3 bg-[#4a6cf7] text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-[#3d59e0] transition-all active:scale-95">Open Billing</button>
                    <button className="flex-1 sm:flex-initial px-8 py-3 bg-white border border-[#e2e8f0] text-[#1e293b] rounded-xl font-bold hover:bg-[#f8fafc] transition-all active:scale-95">View Logs</button>
                </div>
                {/* Subtle decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

        </div>
    )
}
