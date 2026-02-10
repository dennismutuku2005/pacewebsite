"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Users, Activity, CreditCard, Network,
    Zap, Receipt
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
        { label: 'Active Connections', value: '1,284', change: '+14% growth', note: 'Managed Clients', icon: Users, status: 'success' },
        { label: 'Today Applications', value: '42 units', change: '+5 new', note: 'Pending Review', icon: Activity, status: 'info' },
        { label: 'Sender IDs', value: '18 Active', change: '+2 today', note: 'SMS Gateways', icon: Zap, status: 'success' },
        { label: 'Payment Channels', value: '5 Live', change: 'M-Pesa/Paybill', note: 'Channel Activity', icon: Receipt, status: 'success' },
    ]

    const categories = [
        { id: 'overview', label: 'Main Overview' },
        { id: 'growth', label: 'Member Growth' },
        { id: 'financials', label: 'Billing Records' },
        { id: 'monitoring', label: 'Live Events' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Title Section */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">System Summary</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Main command hub for your ISP infrastructure.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple transition-all uppercase tracking-widest bg-white shadow-sm">
                        Export Logs
                    </button>
                    <button
                        onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 1000); }}
                        className="px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-[0_4px_12px_rgba(75,29,143,0.2)] flex items-center gap-2"
                    >
                        {isRefreshing ? <Spinner size={12} className="text-white" /> : null}
                        Sync Hub
                    </button>
                </div>
            </div>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {isRefreshing ? (
                    [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                    metrics.map((metric, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col justify-between hover:border-pace-purple/30 hover:bg-gray-50/30 transition-all group relative overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                    <metric.icon size={20} />
                                </div>
                                <Badge variant={metric.status === 'success' ? 'success' : 'info'}>{metric.change}</Badge>
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-admin-label uppercase tracking-widest mb-1.5">{metric.label}</p>
                                <h3 className="text-[22px] font-black text-admin-value leading-none">{metric.value}</h3>
                                <p className="text-[10px] font-bold text-admin-dim mt-2 uppercase tracking-wide">{metric.note}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Growth Graph Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 border border-gray-100 rounded-xl bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest mb-1">New Member Acquisition</h4>
                            <p className="text-[16px] font-black text-admin-value uppercase">Growth Performance</p>
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
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 800, fill: '#9CA3AF' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 800, fill: '#9CA3AF' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '8px',
                                        border: '1px solid #E5E7EB',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
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
                    <div className="border border-gray-100 rounded-xl bg-white p-6 space-y-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                        <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Client Distribution</h4>
                        <div className="space-y-4">
                            {[
                                { zone: 'Nairobi', count: 482, color: 'bg-pace-purple' },
                                { zone: 'Mombasa', count: 215, color: 'bg-pace-green' },
                                { zone: 'Kisumu', count: 128, color: 'bg-orange-400' },
                            ].map((region, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex justify-between items-end">
                                        <p className="text-[11px] font-black text-admin-value uppercase tracking-tight">{region.zone}</p>
                                        <p className="text-[11px] font-black text-admin-dim uppercase">{region.count}</p>
                                    </div>
                                    <div className="w-full bg-gray-50 h-1.5 rounded-full overflow-hidden">
                                        <div className={cn("h-full rounded-full transition-all duration-1000", region.color)} style={{ width: `${(region.count / 500) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-pace-purple to-[#3d1a75] p-6 text-white space-y-4 relative overflow-hidden group shadow-[0_8px_24px_rgba(75,29,143,0.2)]">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Zap size={80} />
                        </div>
                        <Zap size={24} className="opacity-50 relative z-10" />
                        <div className="relative z-10">
                            <h4 className="text-[13px] font-black uppercase tracking-widest">Financial Nodes</h4>
                            <p className="text-[11px] opacity-70 mt-2 leading-relaxed">System has 5 active Paybill channels synchronized with client account numbers.</p>
                        </div>
                        <button className="w-full py-2.5 bg-white text-pace-purple border border-white/20 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all relative z-10 hover:bg-opacity-90">
                            Sync Payments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
