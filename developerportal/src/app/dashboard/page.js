"use client"

import React from 'react'
import {
    Server, Activity, Globe, Users, Bell,
    Code, ArrowUpRight
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardHome() {

    // Quick Stats Cards
    const stats = [
        { label: 'Total Users', value: '1,248', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', link: '/dashboard/users' },
        { label: 'Active Servers', value: '3/4', icon: Server, color: 'text-green-500', bg: 'bg-green-50', link: '/dashboard/servers' },
        { label: 'API Status', value: 'Online', icon: Code, color: 'text-purple-500', bg: 'bg-purple-50', link: '/dashboard/apis' },
        { label: 'Domains', value: '5', icon: Globe, color: 'text-orange-500', bg: 'bg-orange-50', link: '/dashboard/domains' },
    ]

    return (
        <div className="space-y-8 animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Dennis</h1>
                <p className="text-gray-500">Here is what is happening with your infrastructure today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <Link key={i} href={stat.link} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 rounded-lg ${stat.bg}`}>
                                <stat.icon size={20} className={stat.color} />
                            </div>
                            <ArrowUpRight size={16} className="text-gray-300 group-hover:text-pace-purple transition-colors" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-gray-500 font-medium uppercase mt-1">{stat.label}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Simplified Server View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold mb-2">System Health Good</h2>
                        <p className="text-gray-300 text-sm mb-6 max-w-md">
                            All services are running normally. No incidents reported in the last 24 hours.
                            Your next backup is scheduled for 03:00 AM.
                        </p>
                        <Link href="/dashboard/servers" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-all backdrop-blur-md">
                            <Activity size={16} /> View Server Metrics
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pace-purple/30 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                        <Link href="/dashboard/notifications" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 text-sm text-gray-700">
                            <Bell size={16} className="text-gray-400" /> Send Broadcast
                        </Link>
                        <Link href="/dashboard/users" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 text-sm text-gray-700">
                            <Users size={16} className="text-gray-400" /> Manage Users
                        </Link>
                        <Link href="/dashboard/domains" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 text-sm text-gray-700">
                            <Globe size={16} className="text-gray-400" /> Add Domain
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
