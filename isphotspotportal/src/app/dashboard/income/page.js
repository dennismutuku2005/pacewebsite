"use client"

import React, { useState, useEffect } from 'react'
import { Wallet, Calendar, TrendingUp, TrendingDown, DollarSign, Download, Clock } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/Skeleton'

const weeklyData = [
    { day: 'Mon', amount: 4500 },
    { day: 'Tue', amount: 5200 },
    { day: 'Wed', amount: 4800 },
    { day: 'Thu', amount: 6100 },
    { day: 'Fri', amount: 5900 },
    { day: 'Sat', amount: 7500 },
    { day: 'Sun', amount: 6800 },
];

export default function IncomePage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Mock Data for Cards
    const metrics = [
        { label: "Today", value: "KSH 6,800", trend: "+12%", trendUp: true, icon: Wallet, color: "text-pace-purple", bg: "bg-pace-purple/10" },
        { label: "This Week", value: "KSH 42,500", trend: "+8%", trendUp: true, icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "This Month", value: "KSH 185,200", trend: "+15%", trendUp: true, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
        { label: "Last Month", value: "KSH 162,400", trend: "-5%", trendUp: false, icon: Clock, color: "text-orange-600", bg: "bg-orange-50" },
        { label: "This Year", value: "KSH 2,450,000", trend: "+22%", trendUp: true, icon: DollarSign, color: "text-teal-600", bg: "bg-teal-50" },
        { label: "Last Year", value: "KSH 1,980,000", trend: "+10%", trendUp: true, icon: TrendingDown, color: "text-gray-600", bg: "bg-gray-50" },
    ]

    return (
        <div className="space-y-8 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Revenue Reports</h1>
                    <p className="text-sm text-gray-500 mt-1">Financial performance summary and analytics.</p>
                </div>
                <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2">
                    <Download size={14} /> Export Report
                </button>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((metric, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-sm transition-all shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-colors", metric.bg, metric.color)}>
                                <metric.icon size={20} />
                            </div>
                            <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full",
                                metric.trendUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                            )}>
                                {metric.trend}
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{metric.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Weekly Area Graph */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm overflow-hidden">
                <div className="mb-6">
                    <h3 className="text-base font-bold text-gray-900">Income This Week</h3>
                    <p className="text-xs text-gray-500 mt-1">Daily revenue breakdown (Mon - Sun)</p>
                </div>

                <div className="overflow-x-auto w-full pb-2">
                    <div className="h-[350px] min-w-[600px]">
                        {isMounted ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={weeklyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="day"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: 500 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: 500 }}
                                        tickFormatter={(value) => `KSH ${value / 1000}k`}
                                    />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
                                        formatter={(value) => [`KSH ${value}`, 'Revenue']}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="amount"
                                        stroke="#7c3aed"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorIncome)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
                                <span className="text-gray-400 text-sm font-medium animate-pulse">Loading Chart...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
