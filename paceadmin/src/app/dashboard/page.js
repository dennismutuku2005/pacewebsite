"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Users, Activity, CreditCard, Network,
    Receipt, RefreshCw, Repeat, ArrowUpRight,
    TrendingUp, Wallet, CheckCircle2, Link2
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/Loader'
import { Skeleton, CardSkeleton } from '@/components/Skeleton'
import { Badge } from '@/components/Badge'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const chartData = [
    { name: 'Mon', count: 40 },
    { name: 'Tue', count: 30 },
    { name: 'Wed', count: 65 },
    { name: 'Thu', count: 45 },
    { name: 'Fri', count: 90 },
    { name: 'Sat', count: 70 },
    { name: 'Sun', count: 85 },
];

const revenueData = [
    { name: 'Jan', amount: 4200 },
    { name: 'Feb', amount: 3800 },
    { name: 'Mar', amount: 5100 },
    { name: 'Apr', amount: 4700 },
    { name: 'May', amount: 6200 },
    { name: 'Jun', amount: 5800 },
];

const recentPayments = [
    { id: 1, customer: 'SkyNet Solutions', amount: 'KES 45,000', time: '2 mins ago', status: 'verified' },
    { id: 2, customer: 'Coast Connect', amount: 'KES 12,500', time: '15 mins ago', status: 'verified' },
    { id: 3, customer: 'RiftWiFi Systems', amount: 'KES 8,200', time: '1 hour ago', status: 'pending' },
];

export default function DashboardPage() {
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
        <div className="space-y-8 font-figtree animate-in fade-in duration-700">

            {/* Title Section */}
            <div className="pb-4 flex justify-between items-end border-b border-gray-50">
                <div>
                    <h1 className="text-[24px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Command Hub</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Real-time infrastructure and financial health monitoring.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-100 text-admin-label rounded-xl text-[11px] font-bold hover:bg-gray-50 transition-all bg-white/50 backdrop-blur-sm shadow-sm">
                        Generate Report
                    </button>
                    <button
                        onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 1000); }}
                        className="p-2.5 bg-pace-purple text-white rounded-xl hover:bg-[#3d1a75] transition-all shadow-lg shadow-pace-purple/20 flex items-center justify-center min-w-[40px]"
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
                        <div key={i} className="bg-white/40 backdrop-blur-md border border-gray-100/50 rounded-2xl p-6 flex flex-col justify-between hover:border-pace-purple/20 hover:bg-white/60 transition-all group relative overflow-hidden shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded-xl bg-pace-purple/5 flex items-center justify-center text-pace-purple group-hover:scale-110 transition-transform">
                                    <metric.icon size={20} />
                                </div>
                                <Badge variant={metric.status === 'success' ? 'success' : 'info'} className="scale-90 font-black">{metric.change}</Badge>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-admin-label mb-1 uppercase tracking-widest opacity-60">{metric.label}</p>
                                <h3 className="text-[22px] font-black text-admin-value leading-none">{metric.value}</h3>
                                <p className="text-[10px] font-bold text-admin-dim mt-2 opacity-50">{metric.note}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Main Graphs Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* User Growth Area Chart */}
                <div className="lg:col-span-8 border border-gray-100/50 rounded-3xl bg-white/40 backdrop-blur-sm p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest mb-1 opacity-50">User Acquisition</h4>
                            <p className="text-[18px] font-black text-admin-value uppercase tracking-tight">Weekly Growth Velocity</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-pace-green/5 rounded-lg border border-pace-green/10">
                            <TrendingUp size={14} className="text-pace-green" />
                            <span className="text-[11px] font-black text-pace-green">+24.8%</span>
                        </div>
                    </div>
                    <div className="h-[280px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4B1D8F" stopOpacity={0.15} />
                                        <stop offset="95%" stopColor="#4B1D8F" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '16px',
                                        border: 'none',
                                        fontSize: '12px',
                                        fontWeight: '800',
                                        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                                        backgroundColor: 'white'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="count"
                                    stroke="#4B1D8F"
                                    strokeWidth={4}
                                    fillOpacity={1}
                                    fill="url(#colorCount)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Payments Widget */}
                <div className="lg:col-span-4 border border-gray-100/50 rounded-3xl bg-white/40 backdrop-blur-sm p-8 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest opacity-50">Latest Income</h4>
                        <Link2 size={14} className="text-admin-dim hover:text-pace-purple cursor-pointer" />
                    </div>

                    <div className="flex-1 space-y-6">
                        {recentPayments.map((payment) => (
                            <div key={payment.id} className="flex items-center justify-between group cursor-pointer hover:translate-x-1 transition-transform">
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center",
                                        payment.status === 'verified' ? "bg-pace-green/5 text-pace-green" : "bg-orange-50 text-orange-400"
                                    )}>
                                        <Wallet size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-black text-admin-value leading-none uppercase truncate max-w-[120px]">{payment.customer}</p>
                                        <p className="text-[10px] font-bold text-admin-dim mt-1.5 uppercase tracking-tighter">{payment.time}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[13px] font-black text-admin-value">{payment.amount}</p>
                                    <div className="flex items-center justify-end gap-1 mt-1">
                                        {payment.status === 'verified' && <CheckCircle2 size={10} className="text-pace-green" />}
                                        <span className={cn(
                                            "text-[9px] font-black uppercase tracking-widest",
                                            payment.status === 'verified' ? "text-pace-green" : "text-orange-400 opacity-60"
                                        )}>
                                            {payment.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-8 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] font-black text-admin-label uppercase tracking-widest hover:bg-pace-purple hover:text-white hover:border-pace-purple transition-all group">
                        View Finance Hub
                    </button>
                </div>
            </div>

            {/* Bottom Revenue Bar Chart */}
            <div className="border border-gray-100/50 rounded-3xl bg-white/40 backdrop-blur-sm p-8 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest mb-1 opacity-50">Financial Distribution</h4>
                        <p className="text-[18px] font-black text-admin-value uppercase tracking-tight">Monthly Revenue Cycles</p>
                    </div>
                    <div className="flex gap-2">
                        {['Income', 'Billed'].map((t) => (
                            <button key={t} className={cn(
                                "px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all",
                                t === 'Income' ? "bg-pace-purple text-white border-pace-purple" : "bg-white text-admin-label border-gray-100"
                            )}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }}
                            />
                            <Tooltip
                                cursor={{ fill: '#F9FAFB' }}
                                contentStyle={{
                                    borderRadius: '16px',
                                    border: 'none',
                                    fontSize: '12px',
                                    fontWeight: '800',
                                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                                    backgroundColor: 'white'
                                }}
                            />
                            <Bar
                                dataKey="amount"
                                radius={[6, 6, 0, 0]}
                                barSize={40}
                            >
                                {revenueData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === revenueData.length - 1 ? '#4B1D8F' : '#E5E7EB'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
