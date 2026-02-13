"use client"

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts'
import { Calendar, Download, TrendingUp, TrendingDown, DollarSign } from 'lucide-react'

const monthlyData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 },
]

export default function IncomeReportPage() {
    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Strategic Reports</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Visual analysis of revenue growth and performance cycles.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md flex items-center gap-2">
                        <Download size={14} /> Full Audit Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h4 className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-1">Performance Index</h4>
                            <p className="text-[18px] font-black text-admin-value uppercase tracking-tight">Monthly Revenue Velocity</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-pace-green/5 rounded-lg border border-pace-green/10">
                            <TrendingUp size={14} className="text-pace-green" />
                            <span className="text-[11px] font-black text-pace-green">+34.2%</span>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={monthlyData}>
                                <defs>
                                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4B1D8F" stopOpacity={0.15} />
                                        <stop offset="95%" stopColor="#4B1D8F" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F9FAFB" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9CA3AF' }} />
                                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', fontSize: '12px', fontWeight: '800', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', backgroundColor: 'white' }} />
                                <Area type="monotone" dataKey="revenue" stroke="#4B1D8F" strokeWidth={4} fillOpacity={1} fill="url(#revenueGradient)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                        <h4 className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-4">Total Life-Time Revenue</h4>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-pace-purple/5 flex items-center justify-center text-pace-purple font-black">
                                <DollarSign size={24} />
                            </div>
                            <div>
                                <h2 className="text-[24px] font-black text-admin-value leading-none">KSH 1.2M</h2>
                                <p className="text-[10px] text-admin-label font-bold mt-1 uppercase">Since deployment</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                        <h4 className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-4">Average Per Transaction</h4>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-pace-green/5 flex items-center justify-center text-pace-green font-black">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h2 className="text-[24px] font-black text-admin-value leading-none">KSH 84.50</h2>
                                <p className="text-[10px] text-admin-label font-bold mt-1 uppercase">+5% improvement</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-3xl p-6 shadow-xl text-white">
                        <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-2">Quarterly Forecast</p>
                        <h2 className="text-[20px] font-black uppercase">Growth Optimized</h2>
                        <button className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 transition-all rounded-xl text-[10px] font-black uppercase tracking-widest">
                            Analyze Predictions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
