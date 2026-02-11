"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Users, Activity, CreditCard, Network,
    Receipt, RefreshCw, Repeat
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/Loader'
import { Skeleton, CardSkeleton } from '@/components/Skeleton'
import { Badge } from '@/components/Badge'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
    { name: 'Mon', count: 40 },
    { name: 'Tue', count: 30 },
    { name: 'Wed', count: 65 },
    { name: 'Thu', count: 45 },
    { name: 'Fri', count: 90 },
    { name: 'Sat', count: 70 },
    { name: 'Sun', count: 85 },
];

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('overview')
    const [isRefreshing, setIsRefreshing] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsRefreshing(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    const metrics = [
        { label: 'Active connections', value: '1,284', change: '+14% growth', note: 'Managed clients', icon: Users, status: 'success' },
        { label: 'Applications today', value: '42 units', change: '+5 new', note: 'Pending review', icon: Activity, status: 'info' },
        { label: 'Sender IDs', value: '18 active', change: '+2 today', note: 'SMS gateways', icon: Repeat, status: 'success' },
        { label: 'Payment channels', value: '5 live', change: 'M-Pesa/Paybill', note: 'Channel activity', icon: Receipt, status: 'success' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Title Section */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Dashboard overview</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Main command hub for your ISP infrastructure.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:border-pace-purple transition-all bg-white shadow-sm">
                        Export logs
                    </button>
                    <button
                        onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 1000); }}
                        className="p-2 bg-pace-purple text-white rounded-lg hover:bg-[#3d1a75] transition-all shadow-md flex items-center justify-center min-w-[38px]"
                        title="Refresh dashboard"
                    >
                        <RefreshCw size={16} className={cn(isRefreshing ? "animate-spin" : "")} />
                    </button>
                </div>
            </div>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {isRefreshing ? (
                    [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                    metrics.map((metric, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col justify-between hover:border-pace-purple/20 hover:bg-gray-50/20 transition-all group relative overflow-hidden shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                    <metric.icon size={20} />
                                </div>
                                <Badge variant={metric.status === 'success' ? 'success' : 'info'}>{metric.change}</Badge>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-admin-label mb-1">{metric.label}</p>
                                <h3 className="text-[20px] font-extrabold text-admin-value leading-none">{metric.value}</h3>
                                <p className="text-[10px] font-medium text-admin-dim mt-2">{metric.note}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Growth Graph Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 border border-gray-100 rounded-xl bg-white p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-[10px] font-bold text-admin-label uppercase tracking-widest mb-1 opacity-50">Performance</h4>
                            <p className="text-[16px] font-extrabold text-admin-value">New member acquisition</p>
                        </div>
                        <Badge variant="success" className="h-6">+24% Monthly</Badge>
                    </div>
                    <div className="h-[240px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2CB34A" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#2CB34A" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 600, fill: '#9CA3AF' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 600, fill: '#9CA3AF' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '12px',
                                        border: 'none',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="count"
                                    stroke="#2CB34A"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorCount)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="border border-gray-100 rounded-xl bg-white p-6 space-y-6 shadow-sm">
                        <h4 className="text-[11px] font-bold text-admin-label uppercase tracking-widest opacity-50">Client Distribution</h4>
                        <div className="space-y-4">
                            {[
                                { zone: 'Nairobi region', count: 482, color: 'bg-pace-purple' },
                                { zone: 'Mombasa coast', count: 215, color: 'bg-pace-green' },
                                { zone: 'Kisumu lake', count: 128, color: 'bg-orange-400' },
                            ].map((region, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex justify-between items-end">
                                        <p className="text-[12px] font-bold text-admin-value">{region.zone}</p>
                                        <p className="text-[11px] font-medium text-admin-dim">{region.count}</p>
                                    </div>
                                    <div className="w-full bg-gray-50 h-1.5 rounded-full overflow-hidden">
                                        <div className={cn("h-full rounded-full transition-all duration-1000", region.color)} style={{ width: `${(region.count / 500) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-pace-purple to-[#3d1a75] p-6 text-white space-y-4 relative overflow-hidden group shadow-lg">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Repeat size={80} />
                        </div>
                        <Repeat size={24} className="opacity-50 relative z-10" />
                        <div className="relative z-10">
                            <h4 className="text-[13px] font-extrabold tracking-tight">Financial infrastructure</h4>
                            <p className="text-[11px] opacity-80 mt-2 leading-relaxed font-medium">System has 5 active Paybill channels synchronized with client account numbers.</p>
                        </div>
                        <button className="w-full py-2.5 bg-white text-pace-purple border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all relative z-10 hover:bg-opacity-90">
                            Synchronize payments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
