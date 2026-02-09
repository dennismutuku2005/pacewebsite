"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Zap, RefreshCw, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PlatformHealthPage() {
    const nodes = [
        { label: 'Login Service', zone: 'Primary', load: '12%', uptime: '99.99%', status: 'Online' },
        { label: 'Billing Engine', zone: 'Primary', load: '08%', uptime: '100.0%', status: 'Online' },
        { label: 'Database Cluster', zone: 'Edge', load: '24%', uptime: '99.98%', status: 'Online' },
        { label: 'App Interface', zone: 'Primary', load: '04%', uptime: '99.99%', status: 'Online' },
        { label: 'Client Portal', zone: 'Global', load: '18%', uptime: '100.0%', status: 'Online' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none">System Health</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Monitoring the performance and availability of your ISP management platform.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-pace-green-light border border-pace-green/10 rounded">
                        <div className="w-1.5 h-1.5 bg-pace-green rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-black text-pace-green uppercase tracking-widest leading-none">All Systems Normal</span>
                    </div>
                    <button className="p-2 border border-pace-border rounded text-admin-dim hover:text-pace-purple hover:border-pace-purple transition-all bg-white shadow-none">
                        <RefreshCw size={14} />
                    </button>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-pace-border rounded overflow-hidden bg-white shadow-none divide-x divide-pace-border">
                {[
                    { label: 'Average Uptime', val: '99.98%', note: 'Past 30 Days' },
                    { label: 'Response Time', val: '2.4ms', note: 'Fast' },
                    { label: 'System Load', val: '14%', note: 'Optimized' },
                    { label: 'Bandwidth', val: '1.8 Gbps', note: 'Global Flow' },
                ].map((s) => (
                    <div key={s.label} className="p-5">
                        <p className="text-[10px] font-black text-admin-label uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <p className="text-[22px] font-black text-admin-value leading-none tracking-tight">{s.val}</p>
                        <p className="text-[10px] font-black text-admin-dim mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Service Status List */}
            <div className="border border-pace-border rounded overflow-hidden bg-white shadow-none">
                <div className="px-5 py-3 border-b border-pace-border bg-pace-bg-subtle flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Core Services</h4>
                    <span className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Updated 15s ago</span>
                </div>
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-100">Service Name</th>
                                <th className="px-5 py-3 border-r border-gray-100">Location</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Usage</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Uptime</th>
                                <th className="px-5 py-3 text-right uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {nodes.map((node) => (
                                <tr key={node.label} className="hover:bg-gray-50 transition-colors group cursor-default">
                                    <td className="px-5 py-4 border-r border-gray-50">
                                        <p className="font-black text-admin-value leading-none">{node.label}</p>
                                        <p className="text-[10px] text-admin-label font-black uppercase tracking-tighter mt-1.5 opacity-80">Online & Active</p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 font-mono text-admin-dim group-hover:text-admin-label font-black uppercase">{node.zone}</td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center font-black text-admin-value">
                                        {node.load}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center font-bold text-admin-label">
                                        {node.uptime}
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <span className="inline-flex items-center gap-1.5 font-black uppercase text-[10px] tracking-widest text-pace-green">
                                            <div className="w-1.5 h-1.5 bg-pace-green rounded-full"></div> {node.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
