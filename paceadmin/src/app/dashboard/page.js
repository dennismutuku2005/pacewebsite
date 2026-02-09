"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    CheckCircle2, Globe, Laptop, Activity,
    CreditCard, Users, Zap, Clock, TrendingUp,
    Receipt, Network, Search, ArrowUpRight, ArrowDownRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Area Graph Component - Custom SVG for Premium 2D UI
const AreaGraph = ({ data, color = "#4B1D8F", height = 120 }) => {
    const max = Math.max(...data)
    const points = data.map((d, i) => ({
        x: (i / (data.length - 1)) * 100,
        y: 100 - (d / max) * 100
    }))

    const pathData = `M 0 100 ${points.map(p => `L ${p.x} ${p.y}`).join(' ')} L 100 100 Z`
    const lineData = `M ${points[0].x} ${points[0].y} ${points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')}`

    return (
        <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.1" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={pathData} fill="url(#areaGradient)" />
                <path d={lineData} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('summary')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    const stats = [
        { label: 'Total Clients', value: '1,284', change: '+14% growth', trend: 'up' },
        { label: 'New Inquiries', value: '42 units', change: '+5 today', trend: 'up' },
        { label: 'Monthly Revenue', value: 'KES 2.4M', change: '+8.2% avg', trend: 'up' },
        { label: 'Bandwidth Use', value: '1.2 Tbps', change: '-2.1% low', trend: 'down' },
    ]

    const chartData = [20, 45, 28, 60, 55, 85, 75, 90, 80, 100]

    const Skeleton = ({ className }) => (
        <div className={cn("animate-pulse bg-gray-50 rounded", className)}></div>
    )

    return (
        <div className="space-y-6 font-figtree">

            {/* Title Section */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-tight">Dashboard Overview</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Enterprise ISP Management & Provisioning Core.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-none">
                        Refresh Records
                    </button>
                </div>
            </div>

            {/* Numerical Data Grid with Area Graphs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white border border-pace-border rounded overflow-hidden flex flex-col hover:border-pace-purple transition-all group">
                        <div className="p-5 flex-1">
                            {isLoading ? (
                                <div className="space-y-3">
                                    <Skeleton className="h-3 w-16" />
                                    <Skeleton className="h-6 w-24" />
                                    <Skeleton className="h-3 w-20" />
                                </div>
                            ) : (
                                <>
                                    <p className="text-[9px] font-black text-admin-label uppercase tracking-widest mb-3">{stat.label}</p>
                                    <h3 className="text-[22px] font-black text-admin-value leading-none">{stat.value}</h3>
                                    <p className={cn(
                                        "text-[10px] font-black mt-3 flex items-center gap-1.5 uppercase tracking-wide",
                                        stat.trend === 'up' ? "text-pace-green" : "text-orange-500"
                                    )}>
                                        {stat.trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                        <span>{stat.change}</span>
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="mt-auto opacity-40 group-hover:opacity-100 transition-opacity">
                            <AreaGraph data={chartData.slice(i, i + 6)} color={stat.trend === 'up' ? "#2CB34A" : "#F97316"} height={40} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Report Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <div className="border border-pace-border rounded bg-white overflow-hidden shadow-none">
                        <div className="bg-gray-50 px-5 py-4 border-b border-pace-border flex justify-between items-center">
                            <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Growth Analytics</h4>
                            <select className="bg-transparent text-[10px] font-black uppercase tracking-widest text-admin-dim outline-none">
                                <option>Last 30 Days</option>
                                <option>Last 6 Months</option>
                            </select>
                        </div>
                        <div className="p-8">
                            {isLoading ? (
                                <Skeleton className="h-40 w-full" />
                            ) : (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[11px] font-black text-admin-label uppercase tracking-widest leading-none mb-2">Total Monthly Revenue</p>
                                            <h2 className="text-[32px] font-black text-admin-value leading-none tabular-nums">KES 2,428,000</h2>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[11px] font-black text-pace-green uppercase tracking-widest leading-none mb-2">+12.4%</p>
                                            <p className="text-[10px] text-admin-dim font-bold uppercase">vs Prev Month</p>
                                        </div>
                                    </div>
                                    <AreaGraph data={chartData} color="#4B1D8F" height={160} />
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                        {['01 Feb', '05 Feb', '10 Feb', '15 Feb', '20 Feb', '25 Feb', '28 Feb'].map(date => (
                                            <span key={date} className="text-[9px] font-black text-admin-dim uppercase tracking-widest">{date}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* System Activity Hub */}
                <div className="space-y-4">
                    <div className="border border-pace-border rounded bg-white overflow-hidden flex flex-col h-full shadow-none">
                        <div className="bg-gray-50 px-5 py-4 border-b border-pace-border">
                            <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Recent Activity</h4>
                        </div>
                        <div className="flex-1 p-0 divide-y divide-gray-50 overflow-y-auto max-h-[480px]">
                            {isLoading ? (
                                [...Array(6)].map((_, i) => (
                                    <div key={i} className="p-4 flex gap-4">
                                        <Skeleton className="w-8 h-8 rounded shrink-0" />
                                        <div className="space-y-2 flex-1">
                                            <Skeleton className="h-3 w-1/2" />
                                            <Skeleton className="h-2 w-1/3" />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                [
                                    { user: 'Admin', action: 'Modified CCR2004 Config', time: '12m ago', target: 'SkyNet' },
                                    { user: 'System', action: 'Auto-Payment Processed', time: '45m ago', target: 'Coast' },
                                    { user: 'Provisioner', action: 'New Client Registered', time: '1h ago', target: 'Metro-WiFi' },
                                    { user: 'Security', action: 'Successful Login', time: '2h ago', target: 'Node-01' },
                                    { user: 'Billing', action: 'License Renewed', time: '4h ago', target: 'Alpha' },
                                    { user: 'System', action: 'Daily Backup Complete', time: '6h ago', target: 'Core' },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 hover:bg-gray-50 transition-all flex gap-3 text-[12px]">
                                        <div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center text-admin-dim shrink-0">
                                            <Activity size={14} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-black text-admin-value leading-none truncate uppercase tracking-tight">
                                                {item.action}
                                            </p>
                                            <p className="text-[10px] text-admin-label font-bold mt-1.5 uppercase tracking-tighter opacity-80">
                                                {item.user} • {item.target}
                                            </p>
                                        </div>
                                        <span className="text-[10px] font-black text-admin-dim uppercase shrink-0">{item.time}</span>
                                    </div>
                                ))
                            )}
                        </div>
                        <button className="p-4 text-center border-t border-gray-50 text-[10px] font-black text-pace-purple uppercase tracking-widest hover:bg-gray-50 transition-all">
                            View Master Audit Logs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
