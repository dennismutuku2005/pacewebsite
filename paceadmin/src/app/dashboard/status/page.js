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
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-6">
            <div className={cn("p-2 rounded-lg bg-gray-50 text-gray-500")}>
                <Icon size={18} />
            </div>
            <span className={cn(
                "px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                status === 'Healthy' ? "bg-pace-green/5 text-pace-green" : "bg-red-50 text-red-600"
            )}>
                {status}
            </span>
        </div>
        <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{title}</p>
        <h3 className="text-2xl font-black text-gray-800 my-1">{value}</h3>
        <div className="mt-auto pt-4">
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className={cn("h-full rounded-full transition-all bg-pace-purple")}
                ></motion.div>
            </div>
        </div>
    </div>
)

export default function StatusPage() {
    const nodes = [
        { name: 'Nairobi Core Gateway', ip: '10.0.0.1', uptime: '142d', status: 'Online' },
        { name: 'Mombasa Tower Relay', ip: '10.0.1.5', uptime: '89d', status: 'Online' },
        { name: 'Kisumu Sub-Station', ip: '10.0.4.2', uptime: '12d', status: 'Busy' },
    ]

    return (
        <div className="space-y-6">

            {/* Banner - Simplified, deep purple */}
            <div className="bg-pace-purple-dark rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2.5 h-2.5 bg-pace-green rounded-full animate-pulse"></div>
                        <h2 className="text-xl font-bold">Systems Operational</h2>
                    </div>
                    <p className="text-purple-200 text-sm font-medium">All network nodes are communicating normally. Global latency: 14ms.</p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatusCard title="Gateway CPU" icon={Cpu} value="12%" status="Healthy" progress={12} />
                <StatusCard title="RAM Allocation" icon={Activity} value="4.2GB" status="Healthy" progress={26} />
                <StatusCard title="SSD Storage" icon={HardDrive} value="1.4TB" status="Healthy" progress={28} />
                <StatusCard title="Current Lane Load" icon={Wifi} value="842Mb" status="Healthy" progress={65} />
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="text-[16px] font-black text-gray-900">Network Infrastructure Nodes</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Node Name</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Uptime</th>
                                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {nodes.map((node) => (
                                <tr key={node.name} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="text-[14px] font-bold text-gray-800">{node.name}</p>
                                        <p className="text-[10px] text-gray-400 font-mono tracking-tighter">{node.ip}</p>
                                    </td>
                                    <td className="px-6 py-4 text-[13px] font-medium text-gray-500">{node.uptime}</td>
                                    <td className="px-6 py-4 text-right">
                                        <span className={cn(
                                            "text-[12px] font-bold",
                                            node.status === 'Online' ? "text-pace-green" :
                                                node.status === 'Busy' ? "text-pace-purple" : "text-orange-500"
                                        )}>{node.status}</span>
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
