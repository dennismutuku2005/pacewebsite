"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import {
    Activity, Server, Globe, Users, Bell,
    Code, MessageSquare, Settings, LogOut, LayoutDashboard
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sidebar({ isSidebarOpen, setIsSidebarOpen, isMobile, pathname }) {
    const [openMenus, setOpenMenus] = useState([])

    const navigation = [
        { id: 'home', name: 'Home', href: '/dashboard', icon: LayoutDashboard },
        { id: 'domains', name: 'Domains', href: '/dashboard/domains', icon: Globe },
        { id: 'servers', name: 'Servers', href: '/dashboard/servers', icon: Server },
        { id: 'users', name: 'Users', href: '/dashboard/users', icon: Users },
        { id: 'notifications', name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
        { id: 'apis', name: 'APIs', href: '/dashboard/apis', icon: Code },
        { id: 'sender-ids', name: 'Sender IDs', href: '/dashboard/sender-ids', icon: MessageSquare },
        { id: 'settings', name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    const sidebarClass = isMobile
        ? cn(
            "fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-100 transition-transform duration-300 w-64 shadow-xl",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )
        : cn(
            "fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-100 transition-all duration-300 shadow-sm",
            isSidebarOpen ? "w-60" : "w-16"
        );

    const showText = isMobile || isSidebarOpen;

    return (
        <aside className={sidebarClass}>
            {/* Logo Section */}
            <div className="h-16 flex items-center justify-center border-b border-gray-100">
                <Link href="/dashboard" className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 bg-pace-purple rounded-lg flex items-center justify-center text-white font-bold">
                        P
                    </div>
                    {showText && <span className="font-bold text-lg text-gray-800 tracking-tight">Portal</span>}
                </Link>
            </div>

            {/* Navigation */}
            <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-8rem)] scrollbar-hide">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md transition-all group relative text-[13px]",
                                isActive
                                    ? "bg-pace-purple text-white shadow-sm font-medium"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <item.icon size={18} className={cn("shrink-0", isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600")} />
                            {showText && (
                                <div className="flex-1 flex items-center justify-between whitespace-nowrap overflow-hidden transition-opacity duration-200">
                                    <span>{item.name}</span>
                                </div>
                            )}
                        </Link>
                    )
                })}
            </nav>

            <div className="absolute bottom-4 w-full px-3">
                <button
                    className="w-full flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-red-600 transition-colors rounded-md hover:bg-red-50 text-[13px] font-medium"
                >
                    <LogOut size={18} />
                    {showText && <span>Sign Out</span>}
                </button>
            </div>
        </aside>
    )
}
