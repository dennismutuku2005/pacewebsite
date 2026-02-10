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

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('overview')
    const [isRefreshing, setIsRefreshing] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsRefreshing(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    const metrics = [
        { label: 'Active Connections', value: '1,284', change: '+14% growth', note: 'Managed Clients', icon: Users },
        { label: 'Today Applications', value: '42 units', change: '+5 new', note: 'Pending Review', icon: Activity },
        { label: 'Financial Flow', value: 'KES 2.4M', change: '+8.2% avg', note: 'Monthly Billing', icon: CreditCard },
        { label: 'Today Payments', value: 'KES 84,200', change: '+12 today', note: 'Successful', icon: Receipt },
    ]

    const categories = [
        { id: 'overview', label: 'Main Overview' },
        { id: 'network', label: 'Network Health' },
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
                    <button className="px-4 py-2 border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple transition-all uppercase tracking-widest bg-white">
                        Export Logs
                    </button>
                    <button
                        onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 1000); }}
                        className="px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-none flex items-center gap-2"
                    >
                        {isRefreshing ? <Spinner size={12} className="text-white" /> : null}
                        Sync Data
                    </button>
                </div>
            </div>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {isRefreshing ? (
                    [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
                ) : (
                    metrics.map((metric, i) => (
                        <div key={i} className="bg-white border border-pace-border rounded p-5 flex flex-col justify-between hover:border-pace-purple transition-all group relative overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-10 h-10 rounded bg-gray-50 flex items-center justify-center text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                    <metric.icon size={20} />
                                </div>
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded-sm border",
                                    metric.change.includes('+') ? "text-pace-green bg-pace-green/5 border-pace-green/10" : "text-orange-500 bg-orange-50 border-orange-100"
                                )}>{metric.change}</span>
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

            {/* Module Tabs */}
            <div className="space-y-6">
                <div className="flex border-b border-gray-100">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={cn(
                                "px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all relative",
                                activeTab === cat.id ? "text-pace-purple" : "text-admin-dim hover:text-admin-value"
                            )}
                        >
                            {cat.label}
                            {activeTab === cat.id && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pace-purple" />
                            )}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    >
                        {/* Information Column */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="border border-pace-border rounded bg-white overflow-hidden shadow-none">
                                <div className="bg-gray-50 px-5 py-4 border-b border-pace-border flex justify-between items-center">
                                    <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Client Distribution</h4>
                                    <span className="text-[10px] bg-pace-purple/10 text-pace-purple px-2 py-0.5 rounded font-black">LIVE</span>
                                </div>
                                <div className="p-0 divide-y divide-gray-50">
                                    {isRefreshing ? (
                                        [...Array(5)].map((_, i) => (
                                            <div key={i} className="px-5 py-4">
                                                <Skeleton className="w-full h-10" />
                                            </div>
                                        ))
                                    ) : (
                                        [
                                            { zone: 'Nairobi Region', count: '482', growth: '+12%', cap: 'High' },
                                            { zone: 'Mombasa Coastal', count: '215', growth: '+5%', cap: 'Medium' },
                                            { zone: 'Kisumu Hub', count: '128', growth: '+22%', cap: 'Scaling' },
                                            { zone: 'Nakuru Central', count: '94', growth: '+8%', cap: 'Stable' },
                                            { zone: 'Eldoret North', count: '62', growth: '+31%', cap: 'Expansion' },
                                        ].map((region, i) => (
                                            <div key={i} className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center text-admin-dim font-black text-[10px] uppercase">
                                                        {region.zone.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="text-[12px] font-black text-admin-value leading-none uppercase">{region.zone}</p>
                                                        <p className="text-[10px] text-admin-label font-bold mt-1.5 uppercase tracking-tighter">Status: {region.cap}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[12px] font-black text-admin-value leading-none">{region.count}</p>
                                                    <p className="text-[10px] text-pace-green font-black mt-1.5 uppercase">{region.growth}</p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <button className="w-full py-4 text-center border-t border-gray-50 text-[10px] font-black text-pace-purple uppercase tracking-widest hover:bg-gray-50 transition-all">
                                    View Full Analytics
                                </button>
                            </div>
                        </div>

                        {/* Fast Actions/Monitoring Column */}
                        <div className="space-y-4">
                            <div className="border border-pace-border rounded bg-white p-6 space-y-6">
                                <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Core Operations</h4>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Router Provisioning', sub: '3 nodes pending', color: 'bg-pace-purple' },
                                        { label: 'Billing Cycles', sub: '12 accounts today', color: 'bg-pace-green' },
                                        { label: 'Network Integrity', sub: 'All nodes normal', color: 'bg-orange-400' },
                                    ].map((action, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className={cn("w-1 h-10 rounded-full", action.color)}></div>
                                            <div>
                                                <p className="text-[11px] font-black text-admin-value uppercase tracking-tight leading-none">{action.label}</p>
                                                <p className="text-[10px] text-admin-label font-medium mt-1.5">{action.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full py-3 bg-gray-50 border border-gray-100 text-admin-label rounded text-[10px] font-black uppercase tracking-widest hover:border-pace-purple hover:text-pace-purple transition-all">
                                    Open Command Center
                                </button>
                            </div>

                            <div className="border border-pace-border rounded bg-pace-purple p-6 text-white space-y-4 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <Zap size={80} />
                                </div>
                                <Zap size={24} className="opacity-50 relative z-10" />
                                <div className="relative z-10">
                                    <h4 className="text-[13px] font-black uppercase tracking-widest">Express Setup</h4>
                                    <p className="text-[11px] opacity-70 mt-2 leading-relaxed">Instantly provision a new router node for a member using pre-configured CCR templates.</p>
                                </div>
                                <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-[10px] font-black uppercase tracking-widest transition-all relative z-10">
                                    Start Deployment
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
