"use client"

import React, { useState, useEffect } from 'react'
import {
    Users, Activity, CreditCard, Network,
    RefreshCw, Smartphone, Hash,
    Wallet, Wifi, ArrowUpRight, ArrowDownRight, Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { CardSkeleton } from '@/components/Skeleton'
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
    { label: 'Mon', amount: 4500 },
    { label: 'Tue', amount: 3800 },
    { label: 'Wed', amount: 5100 },
    { label: 'Thu', amount: 4200 },
    { label: 'Fri', amount: 6000 },
    { label: 'Sat', amount: 7500 },
    { label: 'Sun', amount: 6800 },
];

const recentEntries = [
    { id: 1, mac: '00:1A:2B:3C:4D:5E', plan: '2hrs - KES 20', time: '2m ago', amount: '20' },
    { id: 2, mac: 'AA:BB:CC:DD:EE:FF', plan: '24hrs - KES 50', time: '15m ago', amount: '50' },
    { id: 3, mac: '11:22:33:44:55:66', plan: 'Monthly - KES 1000', time: '1h ago', amount: '1000' },
    { id: 4, mac: 'CC:DD:EE:FF:00:11', plan: '2hrs - KES 20', time: '2h ago', amount: '20' },
];

const mikrotikStatus = [
    { id: 1, name: 'Main Router', ip: '197.248.3.14', status: 'Online', load: '12%' },
    { id: 2, name: 'Mombasa Node', ip: '41.204.18.55', status: 'Online', load: '45%' },
    { id: 3, name: 'Kisumu Hub', ip: '102.22.45.1', status: 'Offline', load: '0%' },
];

export default function DashboardPage() {
    const [isRefreshing, setIsRefreshing] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsRefreshing(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const metrics = [
        { label: "Today's Earnings", value: 'KSH 4,500', change: '12%', trend: 'up', note: 'Last 24 hours', icon: Wallet, color: 'text-pace-purple', bg: 'bg-pace-purple/10' },
        { label: "Month Revenue", value: 'KSH 125,800', change: '8%', trend: 'up', note: 'Current cycle', icon: CreditCard, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: "Active Sessions", value: '356', change: '5%', trend: 'down', note: 'Live connections', icon: Activity, color: 'text-green-600', bg: 'bg-green-50' },
        { label: "System Health", value: '98%', change: 'Stable', trend: 'flat', note: 'Network uptime', icon: Network, color: 'text-orange-500', bg: 'bg-orange-50' },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto pb-10">
            {/* Title Section */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Dashboard Overview</h1>
                    <p className="text-sm text-gray-500 mt-1">Real-time monitoring for hotspot performance.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 1000); }}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium"
                    >
                        <RefreshCw size={16} className={cn(isRefreshing && "animate-spin")} />
                        {isRefreshing ? 'Syncing...' : 'Refresh Data'}
                    </button>
                </div>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {isRefreshing ? (
                    [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                    metrics.map((metric, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-sm transition-all shadow-sm group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-colors", metric.bg, metric.color)}>
                                    <metric.icon size={20} />
                                </div>
                                <div className={cn("text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1",
                                    metric.trend === 'up' ? "bg-green-50 text-green-600" :
                                        metric.trend === 'down' ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-600"
                                )}>
                                    {metric.trend === 'up' && <ArrowUpRight size={10} />}
                                    {metric.trend === 'down' && <ArrowDownRight size={10} />}
                                    {metric.change}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{metric.value}</h3>
                                <p className="text-sm font-medium text-gray-500 mt-1">{metric.label}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Traffic Chart */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-base font-bold text-gray-900">Network Traffic</h4>
                            <p className="text-xs text-gray-500 mt-1">User connections over time</p>
                        </div>
                        <Badge variant="outline" className="text-xs">Live</Badge>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={entryData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorEntries" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis
                                    dataKey="time"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 500 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 500 }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                                    cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="entries"
                                    stroke="#7c3aed"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorEntries)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Entries List */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-base font-bold text-gray-900">Recent Login Activity</h4>
                        <button className="text-xs font-semibold text-pace-purple hover:underline">View All</button>
                    </div>
                    <div className="flex-1 space-y-0">
                        {recentEntries.map((entry) => (
                            <div key={entry.id} className="flex items-center justify-between border-b border-gray-50 py-4 last:border-0 last:pb-0 first:pt-0 group hover:bg-gray-50/50 -mx-2 px-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:border-pace-purple/20 group-hover:text-pace-purple transition-colors">
                                        <Smartphone size={14} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 font-mono tracking-tight">{entry.mac}</p>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <Badge variant="outline" className="text-[9px] px-1.5 py-0 h-auto border-gray-200 text-gray-500 font-normal">
                                                {entry.plan.split(' - ')[0]}
                                            </Badge>
                                            <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                                <Clock size={8} /> {entry.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-gray-900">KSH {entry.amount}</p>
                                    <div className={cn("w-1.5 h-1.5 rounded-full ml-auto mt-1",
                                        parseInt(entry.amount) > 50 ? "bg-green-500" : "bg-gray-300"
                                    )} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Router Status List */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="text-base font-bold text-gray-900">Router Health</h4>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full border border-green-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">System OK</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {mikrotikStatus.map((router) => (
                            <div key={router.id} className="p-4 bg-white border border-gray-100 rounded-xl hover:border-pace-purple/30 hover:shadow-md transition-all group">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2 rounded-lg transition-colors",
                                            router.status === 'Online' ? "bg-green-50 text-green-600 group-hover:bg-green-100" : "bg-red-50 text-red-500 group-hover:bg-red-100"
                                        )}>
                                            <Wifi size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{router.name}</p>
                                            <p className="text-[10px] font-medium text-gray-500 mt-0.5 font-mono">{router.ip}</p>
                                        </div>
                                    </div>
                                    <Badge variant={router.status === 'Online' ? 'success' : 'error'} className="text-[10px] px-2 py-0.5 font-bold">
                                        {router.status.toUpperCase()}
                                    </Badge>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2 overflow-hidden">
                                    <div
                                        className={cn("h-full rounded-full transition-all duration-500",
                                            parseInt(router.load) > 80 ? "bg-red-500" :
                                                parseInt(router.load) > 50 ? "bg-orange-500" : "bg-green-500"
                                        )}
                                        style={{ width: router.load }}
                                    />
                                </div>
                                <div className="flex justify-between mt-1.5">
                                    <span className="text-[10px] text-gray-400 font-medium">CPU Load</span>
                                    <span className="text-[10px] font-bold text-gray-600">{router.load}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Revenue Bar Chart */}
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-base font-bold text-gray-900">Weekly Revenue</h4>
                            <p className="text-xs text-gray-500 mt-1">Income performance vs last week</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-pace-purple"></span>
                                <span className="text-xs text-gray-500 font-medium">This Week</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                                <span className="text-xs text-gray-500 font-medium">Last Week</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[280px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis
                                    dataKey="label"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 500 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#9ca3af', fontWeight: 500 }}
                                />
                                <Tooltip
                                    cursor={{ fill: '#f9fafb' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                                />
                                <Bar dataKey="amount" radius={[4, 4, 4, 4]} barSize={40} fill="#7c3aed">
                                    {revenueData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === revenueData.length - 2 ? '#7c3aed' : '#e5e7eb'} />
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
