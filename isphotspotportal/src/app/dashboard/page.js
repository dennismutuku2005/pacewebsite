"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Users, Activity, CreditCard, Network,
    Receipt, RefreshCw, Smartphone,
    TrendingUp, Wallet, CheckCircle2, ArrowRight,
    Wifi, Database, SmartphoneIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Skeleton, CardSkeleton } from '@/components/Skeleton'
import { Badge } from '@/components/Badge'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const entryData = [
    { time: '08:00', entries: 12 },
    { time: '10:00', entries: 28 },
    { time: '12:00', entries: 45 },
    { time: '14:00', entries: 32 },
    { time: '16:00', entries: 56 },
    { time: '18:00', entries: 89 },
    { time: '20:00', entries: 64 },
    { time: '22:00', entries: 31 },
];

const revenueData = [
    { label: 'Today', amount: 4500 },
    { label: 'Yesterday', amount: 3800 },
    { label: '2 Days Ago', amount: 5100 },
    { label: '3 Days Ago', amount: 4200 },
    { label: '4 Days Ago', amount: 6000 },
];

const recentEntries = [
    { id: 1, mac: '00:1A:2B:3C:4D:5E', plan: '2hrs - KES 20', time: '2 mins ago', amount: '20' },
    { id: 2, mac: 'AA:BB:CC:DD:EE:FF', plan: '24hrs - KES 50', time: '15 mins ago', amount: '50' },
    { id: 3, mac: '11:22:33:44:55:66', plan: 'Monthly - KES 1000', time: '1 hour ago', amount: '1000' },
];

const mikrotikStatus = [
    { id: 1, name: 'Main Router', ip: '192.168.88.1', status: 'Online', load: '12%' },
    { id: 2, name: 'Branch Office', ip: '192.168.1.5', status: 'Online', load: '45%' },
    { id: 3, name: 'Guest Wing', ip: '10.0.0.1', status: 'Offline', load: '0%' },
];

export default function DashboardPage() {
    const [isRefreshing, setIsRefreshing] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsRefreshing(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const metrics = [
        { label: "Today's Earnings", value: 'KSH 4,500', change: '+12% from avg', note: 'Last 24 hours', icon: Wallet, status: 'success' },
        { label: "This Month", value: 'KSH 125,800', change: '85% of target', note: 'Current billing cycle', icon: CreditCard, status: 'info' },
        { label: "Entries Today", value: '356', change: '+42 new', note: 'Active sessions', icon: Activity, status: 'success' },
        { label: "Active Routers", value: '03 / 04', change: '1 offline', note: 'Network health', icon: Network, status: 'info' },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">

            {/* Title Section */}
            <div className="pb-4 flex justify-between items-end border-b border-gray-50">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Pace Wisp Overview</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Real-time monitoring for hotspot performance and earnings.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 1000); }}
                        className="p-2 bg-pace-purple/10 text-pace-purple rounded-lg hover:bg-pace-purple/20 transition-all flex items-center gap-2 px-3"
                    >
                        <RefreshCw size={14} className={cn(isRefreshing ? "animate-spin" : "")} />
                        <span className="text-[10px] font-bold uppercase">Refresh Dashboard</span>
                    </button>
                </div>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {isRefreshing ? (
                    [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                    metrics.map((metric, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-pace-purple/30 transition-all shadow-sm group">
                            <div className="flex justify-between items-start mb-3">
                                <div className="w-9 h-9 rounded-lg bg-pace-purple/5 flex items-center justify-center text-pace-purple group-hover:scale-110 transition-transform">
                                    <metric.icon size={18} />
                                </div>
                                <Badge variant={metric.status === 'success' ? 'success' : 'info'} className="text-[9px] font-black px-1.5">{metric.change}</Badge>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-admin-dim uppercase tracking-wider mb-1">{metric.label}</p>
                                <h3 className="text-[20px] font-black text-admin-value leading-none">{metric.value}</h3>
                                <p className="text-[9px] font-bold text-admin-dim mt-2 opacity-50 uppercase tracking-tighter">{metric.note}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Area Graph: Today Entries */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-1">Entry Velocity</h4>
                            <p className="text-[15px] font-black text-admin-value uppercase tracking-tight">Today's Traffic Flow</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-pace-purple/5 rounded-full">
                            <Activity size={12} className="text-pace-purple" />
                            <span className="text-[10px] font-black text-pace-purple">LIVE UPDATES</span>
                        </div>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={entryData}>
                                <defs>
                                    <linearGradient id="colorEntries" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4B1D8F" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#4B1D8F" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F9FAFB" />
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700, fill: '#9CA3AF' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700, fill: '#9CA3AF' }} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '11px', fontWeight: '800', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: 'white' }} />
                                <Area type="monotone" dataKey="entries" stroke="#4B1D8F" strokeWidth={3} fillOpacity={1} fill="url(#colorEntries)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Entries Widget */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Recent Entries</h4>
                        <Badge variant="outline" className="text-[9px]">LATEST</Badge>
                    </div>
                    <div className="flex-1 space-y-5">
                        {recentEntries.map((entry) => (
                            <div key={entry.id} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-admin-dim group-hover:bg-pace-purple/5 group-hover:text-pace-purple">
                                        <Smartphone size={14} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black text-admin-value leading-none uppercase">{entry.mac}</p>
                                        <p className="text-[9px] font-bold text-admin-dim mt-1 tracking-tighter uppercase">{entry.plan}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[11px] font-black text-pace-purple">KSH {entry.amount}</p>
                                    <p className="text-[9px] text-admin-dim mt-1 font-bold italic">{entry.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2.5 bg-gray-50 text-[10px] font-black text-admin-label uppercase tracking-widest hover:bg-pace-purple hover:text-white transition-all rounded-lg">
                        See All Entries
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Mikrotik Routers Widget */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Mikrotik Nodes</h4>
                        <div className="flex items-center gap-1 text-[9px] font-black text-pace-green">
                            <div className="w-1.5 h-1.5 rounded-full bg-pace-green animate-pulse" />
                            <span>HEALTHY</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {mikrotikStatus.map((router) => (
                            <div key={router.id} className="p-3 bg-gray-50/50 rounded-xl border border-transparent hover:border-pace-purple/10 transition-all">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2 rounded-lg", router.status === 'Online' ? "bg-pace-green/10 text-pace-green" : "bg-red-50 text-red-400")}>
                                            <Wifi size={14} />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-black text-admin-value leading-none uppercase">{router.name}</p>
                                            <p className="text-[9px] font-bold text-admin-dim mt-1">{router.ip}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={cn("text-[9px] font-black uppercase", router.status === 'Online' ? "text-pace-green" : "text-red-500")}>{router.status}</p>
                                        <p className="text-[9px] font-bold text-admin-dim mt-1 uppercase">CPU: {router.load}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Fade effect and see more */}
                    <div className="mt-4 pt-4 border-t border-gray-50 text-center relative">
                        <div className="absolute top-[-20px] left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                        <button className="text-[10px] font-black text-pace-purple hover:underline uppercase tracking-widest flex items-center justify-center gap-2 mx-auto">
                            See More Routers <ArrowRight size={12} />
                        </button>
                    </div>
                </div>

                {/* Earnings Bar Graph */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-1">Financial Trends</h4>
                            <p className="text-[15px] font-black text-admin-value uppercase tracking-tight">Recent Daily Earnings</p>
                        </div>
                    </div>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F9FAFB" />
                                <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700, fill: '#9CA3AF' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700, fill: '#9CA3AF' }} />
                                <Tooltip cursor={{ fill: '#F9FAFB' }} contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '11px', fontWeight: '800', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: 'white' }} />
                                <Bar dataKey="amount" radius={[4, 4, 0, 0]} barSize={40}>
                                    {revenueData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === revenueData.length - 1 ? '#4B1D8F' : '#E5E7EB'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
