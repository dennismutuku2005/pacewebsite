"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Home, Users, CreditCard, Ticket, Settings,
    Activity, FileText, Bell, Search, Menu,
    X, LogOut, ChevronRight, Clock,
    LayoutDashboard
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const pathname = usePathname()

    const navigation = [
        { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Clients', href: '/dashboard/customers', icon: Users },
        { name: 'Applications', href: '/dashboard/applications', icon: FileText },
        { name: 'Support', href: '/dashboard/tickets', icon: Ticket },
        { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
        { name: 'System Status', href: '/dashboard/status', icon: Activity },
        { name: 'Audit Logs', href: '/dashboard/logs', icon: Clock },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-white flex font-figtree text-[13px]">
            {/* Sidebar - Flat 2D */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-200",
                isSidebarOpen ? "w-60" : "w-16"
            )}>
                {/* Logo Section */}
                <div className="h-14 flex items-center px-4 border-b border-gray-100">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Pace" width={80} height={25} className="h-6 w-auto object-contain grayscale" />
                        {isSidebarOpen && <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Admin</span>}
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="p-2 space-y-0.5">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                                    isActive
                                        ? "bg-pace-purple text-white shadow-none"
                                        : "text-gray-500 hover:bg-gray-50"
                                )}
                            >
                                <item.icon size={16} className="shrink-0" />
                                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                            </Link>
                        )
                    })}
                </nav>

                <div className="absolute bottom-4 w-full px-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-red-600 transition-colors rounded-md hover:bg-red-50">
                        <LogOut size={16} />
                        {isSidebarOpen && <span className="font-semibold">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 min-h-screen flex flex-col transition-all duration-200",
                isSidebarOpen ? "ml-60" : "ml-16"
            )}>
                {/* Header - Excel Style */}
                <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-gray-900 transition-colors p-1">
                            <Menu size={18} />
                        </button>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-l border-gray-100 pl-4">
                            <span>Admin</span>
                            <ChevronRight size={12} />
                            <span className="text-gray-900">{pathname.split('/').pop() || 'Overview'}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                            <input
                                type="text"
                                placeholder="Search data..."
                                className="pl-8 pr-3 py-1.5 w-64 bg-gray-50 border border-gray-200 rounded text-[12px] focus:bg-white focus:ring-1 focus:ring-pace-purple outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-3 border-l border-gray-100 pl-6 h-8">
                            <div className="text-right">
                                <p className="text-[12px] font-bold text-gray-900 leading-none">A. Joe</p>
                                <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase">Root</p>
                            </div>
                            <div className="w-8 h-8 rounded border border-gray-200 bg-gray-50 flex items-center justify-center text-[11px] font-bold">AJ</div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-6 bg-white flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}
