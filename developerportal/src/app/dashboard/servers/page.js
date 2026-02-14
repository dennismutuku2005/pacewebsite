"use client"

import React, { useState } from 'react'
import { Server, Activity, Globe, Zap, Cpu, HardDrive } from 'lucide-react'
import { Badge } from '@/components/Badge'
import { cn } from '@/lib/utils'

export default function ServersPage() {
    // Mock Data
    const serverStats = {
        uptime: '14d 02h 15m',
        cpu: 45,
        ram: 62,
        storage: 28,
        nginx: true,
        wildcards: true,
        online: true
    }

    const myServers = [
        { id: 1, name: 'Nairobi-01', ip: '102.134.22.1', status: 'online', location: 'Nairobi, KE', load: 'Low' },
        { id: 2, name: 'Mombasa-Edge', ip: '197.23.44.12', status: 'online', location: 'Mombasa, KE', load: 'Moderate' },
        { id: 3, name: 'Backup-01', ip: '104.22.11.5', status: 'maintenance', location: 'London, UK', load: 'Idle' },
        { id: 4, name: 'Kampala-Node', ip: '105.12.33.91', status: 'offline', location: 'Kampala, UG', load: '-' },
    ]

    // Circular Progress Component
    const CircularProgress = ({ value, label, icon: Icon, color = "text-pace-purple" }) => {
        const radius = 30;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (value / 100) * circumference;

        return (
            <div className="flex flex-col items-center gap-2">
                <div className="relative flex items-center justify-center">
                    <svg className="transform -rotate-90 w-24 h-24">
                        <circle
                            cx="48"
                            cy="48"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            className="text-gray-100"
                        />
                        <circle
                            cx="48"
                            cy="48"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            className={cn("transition-all duration-1000 ease-out", color)}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                        {value}%
                    </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {Icon && <Icon size={14} />}
                    {label}
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Server Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Monitor server resources, uptime, and node status.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all shadow-sm">
                        Refresh Stats
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                        <Server size={16} />
                        Add Node
                    </button>
                </div>
            </div>

            {/* Top Row: Server Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Main Server Health */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
                                {/* Digital Ocean / Server Icon */}
                                <Server className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">DigitalOcean Droplet</h3>
                                <p className="text-xs text-gray-500">Ubuntu 22.04 LTS • 8GB / 4 vCPUs</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-400 font-medium uppercase">Uptime</p>
                            <p className="font-mono text-lg font-bold text-gray-700">{serverStats.uptime}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                                <Globe size={16} className="text-blue-500" />
                                <span className="text-sm font-medium text-gray-700">Wildcard Certs</span>
                            </div>
                            {serverStats.wildcards ? (
                                <Badge variant="success" className="text-[10px]">Active</Badge>
                            ) : (
                                <Badge variant="error" className="text-[10px]">Error</Badge>
                            )}
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                                <Zap size={16} className="text-green-500" />
                                <span className="text-sm font-medium text-gray-700">NGINX Service</span>
                            </div>
                            {serverStats.nginx ? (
                                <Badge variant="success" className="text-[10px]">Running</Badge>
                            ) : (
                                <Badge variant="error" className="text-[10px]">Stopped</Badge>
                            )}
                        </div>
                    </div>
                </div>

                {/* Resource Usage */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
                    <h3 className="text-sm font-semibold text-gray-900 mb-6 w-full text-left flex items-center gap-2">
                        <Activity size={16} className="text-pace-purple" />
                        Live Resources
                    </h3>
                    <div className="flex items-center justify-center gap-8 w-full">
                        <CircularProgress value={serverStats.cpu} label="CPU" icon={Cpu} color="text-blue-500" />
                        <CircularProgress value={serverStats.ram} label="RAM" icon={Activity} color="text-purple-500" />
                        <CircularProgress value={serverStats.storage} label="HDD" icon={HardDrive} color="text-orange-500" />
                    </div>
                </div>
            </div>

            {/* Server List */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-semibold text-gray-900">Your Network Nodes</h3>
                </div>
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                            <th className="px-4 py-3 font-semibold">Server Name</th>
                            <th className="px-4 py-3 font-semibold">IP Address</th>
                            <th className="px-4 py-3 font-semibold">Location</th>
                            <th className="px-4 py-3 font-semibold">Status</th>
                            <th className="px-4 py-3 font-semibold">Load</th>
                            <th className="px-4 py-3 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {myServers.map((server) => (
                            <tr key={server.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium text-gray-900">{server.name}</td>
                                <td className="px-4 py-3 font-mono text-xs text-gray-500">{server.ip}</td>
                                <td className="px-4 py-3 text-gray-600">{server.location}</td>
                                <td className="px-4 py-3">
                                    <Badge variant={server.status === 'online' ? 'success' : server.status === 'offline' ? 'error' : 'warning'}>
                                        {server.status}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3 text-gray-600 font-medium">{server.load}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-pace-purple hover:underline text-xs font-medium">
                                        Monitor
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
