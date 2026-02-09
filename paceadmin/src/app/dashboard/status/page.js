"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Zap, RefreshCw, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function PlatformHealthPage() {
    const nodes = [
        { label: 'Core Auth Gateway', zone: 'AF-East-1', load: '12%', uptime: '99.99%', status: 'Nominal' },
        { label: 'Regional Billing Sync', zone: 'AF-East-1', load: '08%', uptime: '100.0%', status: 'Nominal' },
        { label: 'Tenant DB Cluster', zone: 'Global-Edge', load: '24%', uptime: '99.98%', status: 'Nominal' },
        { label: 'License Validator API', zone: 'AF-East-1', load: '04%', uptime: '99.99%', status: 'Nominal' },
        { label: 'SaaS Frontend Cluster', zone: 'Global-CDA', load: '18%', uptime: '100.0%', status: 'Nominal' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-gray-900 leading-none">Global Infrastructure Telemetry</h1>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">Real-time monitoring of SaaS nodes and database cluster health.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-pace-green-light border border-pace-green/10 rounded">
                        <div className="w-1.5 h-1.5 bg-pace-green rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-pace-green uppercase tracking-widest leading-none">All Systems Nominal</span>
                    </div>
                    <button className="p-2 border border-gray-200 rounded text-gray-400 hover:text-gray-900 transition-all">
                        <RefreshCw size={14} />
                    </button>
                </div>
            </div>

            {/* Primary Metrics Grid - Excel Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded divide-x divide-gray-200 overflow-hidden bg-white">
                {[
                    { label: 'Global Uptime (30d)', val: '99.98%', note: 'Stable' },
                    { label: 'Avg API Latency', val: '2.44ms', note: 'Optimal' },
                    { label: 'Core CPU Peak', val: '14.2%', note: 'Normal' },
                    { label: 'Cluster Bandwidth', val: '1.8 Gbps', note: 'Nominal' },
                ].map((s) => (
                    <div key={s.label} className="p-5">
                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <p className="text-[20px] font-black text-gray-900 leading-none">{s.val}</p>
                        <p className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Advanced Telemetry Table - Excel View */}
            <div className="border border-gray-200 rounded overflow-hidden bg-white">
                <div className="px-5 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h4 className="text-[11px] font-black text-gray-600 uppercase tracking-widest">Active Node Matrix</h4>
                    <span className="text-[10px] font-bold text-gray-400">Scan interval: 15s</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100">Regional Cluster Node</th>
                                <th className="px-5 py-3 border-r border-gray-100">Zone Code</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">CPU Load</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Uptime (Rel)</th>
                                <th className="px-5 py-3 text-right">Status State</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {nodes.map((node) => (
                                <tr key={node.label} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-5 py-4 border-r border-gray-50 underline decoration-gray-100 underline-offset-4">
                                        <p className="font-bold text-gray-800">{node.label}</p>
                                        <p className="text-[9px] text-gray-400 font-black uppercase tracking-tighter mt-1">SaaS Core v2.4.1</p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 font-mono text-gray-400 group-hover:text-gray-900">{node.zone}</td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center font-black text-gray-700">
                                        {node.load}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center font-bold text-gray-400">
                                        {node.uptime}
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <span className="inline-flex items-center gap-1.5 font-black uppercase text-[10px] tracking-widest text-pace-green">
                                            <Zap size={10} /> {node.status}
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
