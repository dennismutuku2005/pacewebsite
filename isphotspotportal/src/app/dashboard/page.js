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
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto pb-10">
            {/* Title Section */}
            <div className="pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Overview</h1>
                    <p className="text-sm text-gray-500 mt-1">Real-time monitoring for hotpsot performance.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 1000); }}
                        className="p-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 px-3 shadow-sm"
                    >
                        <RefreshCw size={14} className={cn(isRefreshing ? "animate-spin" : "text-gray-400")} />
                        <span className="text-xs font-semibold">Refresh</span>
                    </button>
                </div>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {isRefreshing ? (
                    [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                    metrics.map((metric, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-purple-200 transition-all shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-purple-600">
                                    <metric.icon size={20} />
                                </div>
                                <Badge variant={metric.status === 'success' ? 'success' : 'info'} className="text-[10px] font-medium px-2 py-0.5">{metric.change}</Badge>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                                <p className="text-sm font-medium text-gray-500 mb-1">{metric.label}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Area Graph: Today Entries */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-base font-bold text-gray-900">Entry Traffic</h4>
                            <p className="text-xs text-gray-500 mt-1">Visitors throughout the day</p>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={entryData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorEntries" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#9333ea" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis
                                    dataKey="time"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#6b7280' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#6b7280' }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    cursor={{ stroke: '#e5e7eb' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="entries"
                                    stroke="#9333ea"
                                    strokeWidth={2}
                                    fillOpacity={1}
                                    fill="url(#colorEntries)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Entries Widget */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-base font-bold text-gray-900">Recent Activity</h4>
                    </div>
                    <div className="flex-1 space-y-0">
                        {recentEntries.map((entry) => (
                            <div key={entry.id} className="flex items-center justify-between border-b border-gray-50 py-4 last:border-0 last:pb-0 first:pt-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                                        <Smartphone size={14} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{entry.mac}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">{entry.plan}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-gray-900">KSH {entry.amount}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{entry.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 border border-gray-200 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all rounded-lg">
                        View All
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Mikrotik Routers Widget */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-base font-bold text-gray-900">Routers</h4>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-semibold text-green-700">System Healthy</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {mikrotikStatus.map((router) => (
                            <div key={router.id} className="p-3 bg-gray-50 rounded-lg border border-transparent hover:border-purple-100 transition-all">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2 rounded-lg", router.status === 'Online' ? "bg-white text-green-600 shadow-sm" : "bg-white text-red-500 shadow-sm")}>
                                            <Wifi size={14} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">{router.name}</p>
                                            <p className="text-[10px] font-medium text-gray-500 mt-0.5">{router.ip}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={router.status === 'Online' ? 'success' : 'error'} className="text-[10px] px-2 py-0.5">{router.status}</Badge>
                                        <p className="text-[10px] font-medium text-gray-400 mt-1">CPU: {router.load}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Earnings Bar Graph */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-base font-bold text-gray-900">Revenue</h4>
                            <p className="text-xs text-gray-500 mt-1">Daily income performance</p>
                        </div>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis
                                    dataKey="label"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#6b7280' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#6b7280' }}
                                />
                                <Tooltip
                                    cursor={{ fill: '#f9fafb' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="amount" radius={[4, 4, 0, 0]} barSize={50} fill="#9333ea">
                                    {revenueData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === revenueData.length - 1 ? '#9333ea' : '#e5e7eb'} />
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
