"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Globe, Laptop } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
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

    return (
        <div className="space-y-6 font-figtree">

            {/* Title Section - Excel Style */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-bold text-gray-900 leading-tight">System Overview</h1>
                    <p className="text-[12px] text-gray-400 mt-1 font-medium tracking-tight">Real-time telemetry and ISP software deployment data.</p>
                </div>
                <button className="px-4 py-2 bg-gray-900 text-white rounded text-[12px] font-bold hover:bg-gray-800 transition-colors uppercase tracking-wider">
                    Generate Report
                </button>
            </div>

            {/* Numerical Data Grid - Excel Matrix style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 divide-x divide-gray-200 rounded overflow-hidden">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-5 hover:bg-gray-50 transition-colors">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-3">{stat.label}</p>
                        <h3 className="text-[22px] font-black text-gray-900 leading-none">{stat.value}</h3>
                        <p className="text-[11px] font-bold text-pace-green mt-3 flex items-center gap-1.5 uppercase tracking-wide">
                            <span>{stat.change}</span>
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Table Section - The "Excel" Part */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="border border-gray-200 rounded bg-white overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                            <h4 className="text-[12px] font-bold text-gray-700 uppercase tracking-[1px]">Recent Software Tenants</h4>
                            <span className="text-[10px] font-bold text-gray-400">Total: 1,284 Managed nodes</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-[12px]">
                                <thead>
                                    <tr className="bg-white border-b border-gray-100 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                                        <th className="px-4 py-3 bg-transparent">Internal ID</th>
                                        <th className="px-4 py-3 bg-transparent">Entity Name</th>
                                        <th className="px-4 py-3 bg-transparent">Region</th>
                                        <th className="px-4 py-3 bg-transparent text-center">Software Tier</th>
                                        <th className="px-4 py-3 bg-transparent text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {recentClients.map((client) => (
                                        <tr key={client.id} className="hover:bg-gray-50 transition-colors group">
                                            <td className="px-4 py-3 font-mono text-gray-300 group-hover:text-gray-900 transition-colors">{client.id}</td>
                                            <td className="px-4 py-3 font-bold text-gray-800">{client.name}</td>
                                            <td className="px-4 py-3 text-gray-500">{client.region}</td>
                                            <td className="px-4 py-3 text-center">
                                                <span className="px-2 py-0.5 rounded-sm bg-gray-100 text-gray-600 font-bold uppercase text-[9px] tracking-widest border border-gray-200">{client.tier}</span>
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                <span className={cn(
                                                    "font-bold uppercase text-[10px] tracking-widest",
                                                    client.status === 'Active' ? "text-pace-green" : "text-orange-500"
                                                )}>{client.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/30">
                            <button className="text-[10px] font-bold text-pace-purple hover:underline uppercase tracking-widest">Full Record Sheet &rarr;</button>
                        </div>
                    </div>

                    {/* Platform Status Log - High Density */}
                    <div className="border border-gray-200 rounded p-5 bg-white space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Globe size={14} className="text-gray-400" />
                            <h4 className="text-[12px] font-bold text-gray-700 uppercase tracking-widest">Global Node Latency</h4>
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
                                    <p className="text-[15px] font-bold text-gray-900 mt-1.5 leading-none">{n.v}</p>
                                    <div className="flex items-center gap-1 mt-2">
                                        <div className="w-1.5 h-1.5 bg-pace-green rounded-full shadow-sm"></div>
                                        <span className="text-[9px] font-black text-pace-green uppercase tracking-tighter">{n.s}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Panel - Simplified */}
                <div className="space-y-6">
                    <div className="bg-pace-purple p-6 rounded text-white space-y-8 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <h4 className="text-[18px] font-black leading-tight">Managed SaaS <br /> Distribution Portal</h4>
                            <p className="text-[12px] font-medium text-white/70 mt-3 leading-relaxed">Centralized environment for overseeing ISP software keys, tenant health, and cloud-hosted database clusters.</p>
                        </div>
                        <div className="space-y-2">
                            <button className="w-full py-2.5 bg-white text-pace-purple rounded text-[11px] font-extrabold uppercase tracking-widest hover:bg-gray-100 transition-colors">Manage Deployments</button>
                            <button className="w-full py-2.5 bg-pace-purple text-white/50 border border-white/10 rounded text-[11px] font-extrabold uppercase tracking-widest hover:bg-white/5 transition-colors">Documentation</button>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded bg-white overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                            <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Recent Events</h4>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { t: '14:20', m: 'License Dispatched: SAAS-11' },
                                { t: '14:15', m: 'System Sync: Regional Cluster B' },
                                { t: '13:58', m: 'Payment Matched: INV-0221' },
                                { t: '13:45', m: 'Lead: New SaaS Inquiry' },
                                { t: '13:30', m: 'Auth: Super_Admin established' },
                            ].map((e, idx) => (
                                <div key={idx} className="px-4 py-3 flex gap-3 items-center group cursor-default">
                                    <span className="text-[10px] font-bold text-gray-300 whitespace-nowrap">{e.t}</span>
                                    <span className="text-[12px] font-medium text-gray-500 group-hover:text-pace-purple transition-colors">{e.m}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
