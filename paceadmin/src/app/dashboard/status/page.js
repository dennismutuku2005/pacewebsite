"use client"

import React from 'react'
import { Activity, Cpu, RefreshCw, Server, Network, Layout } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import { Badge } from '@/components/Badge'

export default function PlatformHealthPage() {
    const searchParams = useSearchParams()
    const view = searchParams.get('view')

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
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">System Health</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Monitoring the performance and availability of your ISP management platform.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 border border-gray-200 rounded-lg text-admin-dim hover:text-pace-purple hover:border-pace-purple transition-all bg-white shadow-sm">
                        <RefreshCw size={14} />
                    </button>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Average Uptime', val: '99.98%', note: 'Past 30 Days', icon: Activity, color: 'success' },
                    { label: 'Response Time', val: '2.4ms', note: 'Fast', icon: Cpu, color: 'success' },
                    { label: 'System Load', val: '14%', note: 'Optimized', icon: Server, color: 'info' },
                    { label: 'Deployment Sync', val: 'Synchronized', note: 'Global Nodes', icon: RefreshCw, color: 'success' },
                ].map((s, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-pace-purple/20 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-gray-50 rounded-lg text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                <s.icon size={18} />
                            </div>
                            <Badge variant={s.color} className="scale-90">Live</Badge>
                        </div>
                        <p className="text-[10px] font-bold text-admin-label mb-1 uppercase tracking-widest">{s.label}</p>
                        <h4 className="text-[20px] font-extrabold text-admin-value leading-none">{s.val}</h4>
                        <p className="text-[10px] font-bold text-admin-dim mt-2 uppercase tracking-widest opacity-60">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* View Selector Placeholder */}
            {view && (
                <div className="flex items-center gap-2 px-4 py-2 bg-pace-purple/5 border border-pace-purple/10 rounded-lg">
                    <Layout size={14} className="text-pace-purple" />
                    <span className="text-[11px] font-bold text-pace-purple uppercase tracking-widest">Active View: {view.replace('-', ' ')}</span>
                </div>
            )}

            {/* Service Status List */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <h4 className="text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-60">Core Services Monitoring</h4>
                    <span className="text-[10px] font-bold text-admin-dim uppercase tracking-widest opacity-60">Updated 15s ago</span>
                </div>
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Service Name</th>
                                <th className="px-6 py-4">Deployment Zone</th>
                                <th className="px-6 py-4 text-center">Resource Usage</th>
                                <th className="px-6 py-4 text-center">Reliability</th>
                                <th className="px-6 py-4 text-right">Live Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {nodes.map((node) => (
                                <tr key={node.label} className="hover:bg-gray-50/50 transition-colors group cursor-default">
                                    <td className="px-6 py-5">
                                        <p className="font-extrabold text-admin-value leading-none uppercase text-[11px] group-hover:text-pace-purple transition-colors">{node.label}</p>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-admin-dim uppercase text-[10px] tracking-widest">{node.zone}</td>
                                    <td className="px-6 py-5 text-center font-black text-admin-value uppercase">
                                        {node.load}
                                    </td>
                                    <td className="px-6 py-5 text-center font-bold text-admin-label uppercase">
                                        {node.uptime}
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <Badge variant="success" className="uppercase tracking-widest font-black text-[9px]">{node.status}</Badge>
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
