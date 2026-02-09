"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    Activity, Globe, Server, Database,
    Cpu, HardDrive, Wifi, ShieldCheck,
    Zap, AlertTriangle
} from 'lucide-react'
import { cn } from '@/lib/utils'

const StatusCard = ({ title, icon: Icon, value, status, progress, color }) => (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm">
        <div className="flex items-center justify-between mb-6">
            <div className={cn("p-2.5 rounded-xl", color.bg)}>
                <Icon size={20} className={color.text} />
            </div>
            <span className={cn(
                "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                status === 'Healthy' ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
            )}>
                {status}
            </span>
        </div>
        <p className="text-sm font-bold text-[#64748b] mb-1">{title}</p>
        <div className="flex items-end justify-between mb-4">
            <h3 className="text-2xl font-bold text-[#1e293b]">{value}</h3>
        </div>
        <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold text-[#94a3b8]">
                <span>Usage</span>
                <span>{progress}%</span>
            </div>
            <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn("h-full rounded-full", color.main)}
                ></motion.div>
            </div>
        </div>
    </div>
)

export default function StatusPage() {
    const nodes = [
        { name: 'Nairobi Main Core', ip: '10.0.0.1', type: 'CCR1036', uptime: '142d 5h', load: '12%', status: 'Online' },
        { name: 'Mombasa Gateway', ip: '10.0.1.5', type: 'CCR2004', uptime: '89d 12h', load: '45%', status: 'Online' },
        { name: 'Kisumu Relay 1', ip: '192.168.4.2', type: 'RB1100', uptime: '12d 2h', load: '82%', status: 'Busy' },
        { name: 'Eldoret Tower A', ip: '172.16.2.1', type: 'NetMetal', uptime: '0d 4h', load: '5%', status: 'Warning' },
    ]

    return (
        <div className="space-y-6 pb-10">

            {/* Global Status Banner */}
            <div className="bg-[#4a6cf7] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-500/20">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
                            <h2 className="text-xl font-bold">Network Systems Operational</h2>
                        </div>
                        <p className="text-blue-100 font-medium">All core systems are running optimally. Last global check: 2 mins ago.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-center px-6 border-r border-white/20">
                            <p className="text-3xl font-bold">99.9%</p>
                            <p className="text-[11px] font-bold uppercase tracking-widest opacity-70">Uptime</p>
                        </div>
                        <div className="text-center px-6">
                            <p className="text-3xl font-bold">14ms</p>
                            <p className="text-[11px] font-bold uppercase tracking-widest opacity-70">Latency</p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatusCard
                    title="Core CPU"
                    icon={Cpu}
                    value="12%"
                    status="Healthy"
                    progress={12}
                    color={{ text: 'text-blue-600', bg: 'bg-blue-50', main: 'bg-blue-500' }}
                />
                <StatusCard
                    title="RAM Usage"
                    icon={Activity}
                    value="4.2 / 16GB"
                    status="Healthy"
                    progress={26}
                    color={{ text: 'text-purple-600', bg: 'bg-purple-50', main: 'bg-purple-500' }}
                />
                <StatusCard
                    title="Disk Space"
                    icon={HardDrive}
                    value="1.4 / 5.0 TB"
                    status="Healthy"
                    progress={28}
                    color={{ text: 'text-orange-600', bg: 'bg-orange-50', main: 'bg-orange-500' }}
                />
                <StatusCard
                    title="Network Load"
                    icon={Wifi}
                    value="842 Mbps"
                    status="Healthy"
                    progress={65}
                    color={{ text: 'text-green-600', bg: 'bg-green-50', main: 'bg-green-500' }}
                />
            </div>

            {/* Network Nodes Table */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#1e293b] flex items-center gap-3">
                        <Server size={20} className="text-[#4a6cf7]" />
                        Network Infrastructure
                    </h3>
                    <button className="text-sm font-bold text-[#4a6cf7] hover:underline">View All Nodes</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans">
                        <thead>
                            <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Node Name</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Router Model</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Uptime</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#64748b] uppercase tracking-widest text-right">Ping</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1f5f9]">
                            {nodes.map((node, i) => (
                                <tr key={node.name} className="hover:bg-[#f8fafc] transition-colors group">
                                    <td className="px-6 py-5">
                                        <div>
                                            <p className="text-[14px] font-bold text-[#1e293b]">{node.name}</p>
                                            <p className="text-[11px] text-[#94a3b8] font-mono">{node.ip}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-2.5 py-1 bg-gray-100 rounded text-[11px] font-bold text-gray-600 border border-gray-200">{node.type}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-[13px] font-medium text-[#64748b]">{node.uptime}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full",
                                                node.status === 'Online' ? "bg-green-500 animate-pulse" :
                                                    node.status === 'Busy' ? "bg-blue-500" : "bg-orange-500"
                                            )}></div>
                                            <span className={cn(
                                                "text-[12px] font-bold",
                                                node.status === 'Online' ? "text-green-600" :
                                                    node.status === 'Busy' ? "text-blue-600" : "text-orange-600"
                                            )}>{node.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right font-mono text-[12px] font-bold text-gray-400 group-hover:text-[#4a6cf7] transition-colors">
                                        2ms
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
