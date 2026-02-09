"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    CheckCircle2, Globe, Laptop, Activity,
    CreditCard, Users, Zap, Clock, TrendingUp,
    Receipt, Network
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('summary')

    const stats = [
        { label: 'Licensed ISPs', value: '1,284', change: '+14% growth' },
        { label: 'Pending Apps', value: '42 units', change: '+5 today' },
        { label: 'Monthly Revenue', value: 'KES 2.4M', change: '+8.2% avg' },
        { label: 'System Uptime', value: '99.99%', change: 'Stable Node' },
    ]

    const recentClients = [
        { id: 'SAAS-01', name: 'SkyNet Solutions Ltd', region: 'Nairobi', tier: 'Enterprise', status: 'Active', age: '2h ago' },
        { id: 'SAAS-02', name: 'Coast Connect', region: 'Mombasa', tier: 'Standard', status: 'Pending', age: '5h ago' },
        { id: 'SAAS-03', name: 'RiftWiFi Systems', region: 'Nakuru', tier: 'Enterprise', status: 'Active', age: '1d ago' },
        { id: 'SAAS-04', name: 'Lake Side Internet', region: 'Kisumu', tier: 'Lite', status: 'Active', age: '1d ago' },
    ]

    const tabs = [
        { id: 'summary', label: 'Summary' },
        { id: 'financials', label: 'Financials' },
        { id: 'infrastructure', label: 'Infrastructure' },
        { id: 'security', label: 'Security' }
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Title Section - Excel Style */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-gray-900 leading-tight">System Global Control</h1>
                    <p className="text-[12px] text-gray-400 mt-1 font-medium tracking-tight">Real-time telemetry and ISP software deployment data.</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-pace-green-light border border-pace-green/10 rounded">
                        <div className="w-1.5 h-1.5 bg-pace-green rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-black text-pace-green uppercase tracking-widest leading-none">All Nodes Stable</span>
                    </div>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded text-[11px] font-black hover:bg-gray-800 transition-all uppercase tracking-widest shadow-none">
                        Run Batch Audit
                    </button>
                </div>
            </div>

            {/* Tab Navigation - Added as requested */}
            <div className="flex items-center gap-1 border-b border-gray-100">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-6 py-2.5 text-[11px] font-black uppercase tracking-[2px] mb-[-1px] transition-all",
                            activeTab === tab.id
                                ? "border-b-2 border-pace-purple text-pace-purple bg-pace-purple/5"
                                : "text-gray-400 hover:text-gray-900"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Numerical Data Grid - Excel Matrix style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 divide-x divide-gray-200 rounded overflow-hidden shadow-none">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-5 hover:bg-gray-50 transition-colors">
                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none mb-3">{stat.label}</p>
                        <h3 className="text-[22px] font-black text-gray-900 leading-none">{stat.value}</h3>
                        <p className="text-[11px] font-bold text-pace-green mt-3 flex items-center gap-1.5 uppercase tracking-wide">
                            <TrendingUp size={12} />
                            <span>{stat.change}</span>
                        </p>
                    </div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'summary' && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    >
                        {/* Table Section - The "Excel" Part */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="border border-gray-200 rounded bg-white overflow-hidden shadow-none">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                                    <h4 className="text-[11px] font-black text-gray-600 uppercase tracking-[2px]">Recent Software Tenants</h4>
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Global Index: 1,284 Managed nodes</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                                        <thead>
                                            <tr className="bg-white border-b border-gray-100 font-bold text-gray-400 uppercase tracking-widest text-[9px]">
                                                <th className="px-4 py-3 border-r border-gray-50 uppercase">Internal ID</th>
                                                <th className="px-4 py-3 border-r border-gray-50 uppercase">Entity Name</th>
                                                <th className="px-4 py-3 border-r border-gray-50 uppercase">Region Zone</th>
                                                <th className="px-4 py-3 border-r border-gray-50 text-center uppercase">Software Tier</th>
                                                <th className="px-4 py-3 text-right uppercase">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {recentClients.map((client) => (
                                                <tr key={client.id} className="hover:bg-gray-50 transition-colors group">
                                                    <td className="px-4 py-3 font-mono text-gray-300 group-hover:text-gray-900 border-r border-gray-50 transition-colors">{client.id}</td>
                                                    <td className="px-4 py-3 font-bold text-gray-800 border-r border-gray-50">{client.name}</td>
                                                    <td className="px-4 py-3 text-gray-500 border-r border-gray-50">{client.region}</td>
                                                    <td className="px-4 py-3 text-center border-r border-gray-50">
                                                        <span className="px-2 py-0.5 rounded-sm bg-gray-50 text-gray-400 font-black uppercase text-[9px] tracking-widest border border-gray-100">{client.tier}</span>
                                                    </td>
                                                    <td className="px-4 py-3 text-right">
                                                        <span className={cn(
                                                            "font-black uppercase text-[10px] tracking-widest border-b-2",
                                                            client.status === 'Active' ? "text-pace-green border-pace-green/10" : "text-orange-500 border-orange-100"
                                                        )}>{client.status}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/30 text-center">
                                    <button className="text-[10px] font-black text-pace-purple hover:underline uppercase tracking-widest transition-all">Full Record Master Sheet &rarr;</button>
                                </div>
                            </div>

                            {/* Platform Status Log - High Density */}
                            <div className="border border-gray-200 rounded p-5 bg-white space-y-4 shadow-none">
                                <div className="flex items-center gap-2 mb-2">
                                    <Globe size={14} className="text-gray-400" />
                                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Cluster Global Latency Matrix</h4>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {[
                                        { n: 'Asia-S', v: '84ms', s: 'UP' },
                                        { n: 'Africa-E', v: '12ms', s: 'UP' },
                                        { n: 'Europe-W', v: '22ms', s: 'UP' },
                                        { n: 'Americas', v: '112ms', s: 'UP' },
                                    ].map((n) => (
                                        <div key={n.n} className="p-3 border border-gray-100 rounded bg-gray-50/50">
                                            <p className="text-[9px] font-black text-gray-300 uppercase leading-none">{n.n}</p>
                                            <p className="text-[15px] font-black text-gray-900 mt-1.5 leading-none transition-colors group-hover:text-pace-purple">{n.v}</p>
                                            <div className="flex items-center gap-1 mt-2">
                                                <div className="w-1.5 h-1.5 bg-pace-green rounded-full"></div>
                                                <span className="text-[9px] font-black text-pace-green uppercase tracking-tighter">{n.s}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Panel - Simplified */}
                        <div className="space-y-6">
                            <div className="bg-pace-purple p-8 rounded text-white space-y-8 flex flex-col justify-between shadow-none min-h-[320px] relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-[18px] font-black leading-tight uppercase tracking-tight">Enterprise SaaS <br /> Management</h4>
                                    <p className="text-[11px] font-bold text-white/50 mt-4 leading-relaxed uppercase tracking-wider">Regulating ISP software license tokens, tenant node health, and edge database synchronization clusters.</p>
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <button className="w-full py-3 bg-white text-pace-purple rounded text-[10px] font-black uppercase tracking-[2px] hover:bg-gray-100 transition-all">Manage Deployments</button>
                                    <button className="w-full py-3 bg-pace-purple text-white/50 border border-white/10 rounded text-[10px] font-black uppercase tracking-[2px] hover:bg-white/5 transition-all">Documentation</button>
                                </div>
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] translate-x-12 -translate-y-12"></div>
                            </div>

                            <div className="border border-gray-200 rounded bg-white overflow-hidden shadow-none">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Real-time Feed</h4>
                                    <Clock size={12} className="text-gray-300" />
                                </div>
                                <div className="divide-y divide-gray-50">
                                    {[
                                        { t: '14:20', m: 'License Link: SAAS-11', type: 'system' },
                                        { t: '14:15', m: 'Node Sync: African Cluster', type: 'sync' },
                                        { t: '13:58', m: 'Revenue Match: INV-0221', type: 'billing' },
                                        { t: '13:45', m: 'Inquiry: New SaaS Lead', type: 'leads' },
                                        { t: '13:30', m: 'Security: Super_Auth Entry', type: 'auth' },
                                    ].map((e, idx) => (
                                        <div key={idx} className="px-4 py-3 flex gap-3 items-center group cursor-default">
                                            <span className="text-[9px] font-black text-gray-200 group-hover:text-gray-400 transition-colors uppercase tabular-nums">{e.t}</span>
                                            <span className="text-[12px] font-bold text-gray-400 group-hover:text-pace-purple transition-colors">{e.m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'financials' && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="p-12 border border-dashed border-gray-200 rounded text-center">
                        <Receipt size={32} className="text-gray-100 mx-auto mb-4" />
                        <h4 className="text-[14px] font-black text-gray-900 uppercase tracking-[2px]">Revenue Telemetry Module</h4>
                        <p className="text-[12px] text-gray-400 mt-2 font-medium">Historical fiscal data and subscription cycle projections are loading...</p>
                    </motion.div>
                )}

                {activeTab === 'infrastructure' && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="p-12 border border-dashed border-gray-200 rounded text-center">
                        <Network size={32} className="text-gray-100 mx-auto mb-4" />
                        <h4 className="text-[14px] font-black text-gray-900 uppercase tracking-[2px]">Global Node Topology</h4>
                        <p className="text-[12px] text-gray-400 mt-2 font-medium">Mapped infrastructure nodes and edge routing metadata is loading...</p>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}
