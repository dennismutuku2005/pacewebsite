"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Home, Users, CreditCard, Ticket, Settings,
    Activity, FileText, Bell, Search, Menu,
    X, LogOut, ChevronRight, BarChart3, Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const pathname = usePathname()

    // Handle mobile resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const navigation = [
        {
            name: 'Dashboard', href: '/dashboard', icon: BarChart3,
            nested: [
                { name: 'Marketing', href: '/dashboard' },
                { name: 'Analytics', href: '/dashboard/analytics' }
            ]
        },
        {
            name: 'Customers', href: '/dashboard/customers', icon: Users,
            nested: [
                { name: 'All Clients', href: '/dashboard/customers' },
                { name: 'Auto Invoicing', href: '/dashboard/customers/invoicing' }
            ]
        },
        { name: 'Applications', href: '/dashboard/applications', icon: FileText },
        { name: 'Tickets', href: '/dashboard/tickets', icon: Ticket },
        { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
        { name: 'Server Status', href: '/dashboard/status', icon: Activity },
        { name: 'Logs', href: '/dashboard/logs', icon: Clock },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-[#f4f7fe] flex">
            {/* Mobile Drawer Backdrop */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[60] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar - Desktop & Mobile Drawer */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-[70] transition-all duration-300 ease-in-out border-r border-[#e2e8f0] bg-white shadow-sm",
                isSidebarOpen ? "w-[260px]" : "w-[0px] lg:w-[80px]",
                isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
                {/* Logo Section */}
                <div className="h-20 flex items-center px-6 mb-4 bg-white shrink-0">
                    <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
                        <div className="w-8 h-8 bg-pace-purple rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg shadow-pace-purple/30">P</div>
                        <span className={cn(
                            "text-xl font-bold text-[#1e293b] tracking-tight whitespace-nowrap transition-opacity",
                            isSidebarOpen ? "opacity-100" : "opacity-0"
                        )}>PaceAdmin</span>
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav className="px-4 space-y-1 overflow-y-auto max-h-[calc(100vh-100px)] pb-10 no-scrollbar">
                    <p className={cn("px-2 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest transition-opacity", !isSidebarOpen && "opacity-0")}>Menu</p>
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || (item.nested && item.nested.some(n => pathname === n.href));
                        return (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative group",
                                        isActive
                                            ? "text-pace-purple bg-[#f1f5f9]"
                                            : "text-[#64748b] hover:text-[#1e293b] hover:bg-[#f8fafc]"
                                    )}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    <item.icon size={20} className={cn(
                                        "shrink-0 transition-transform duration-200",
                                        isActive ? "text-pace-purple" : "text-[#94a3b8]"
                                    )} />
                                    <span className={cn(
                                        "font-medium transition-all duration-200 text-[14px]",
                                        isSidebarOpen ? "opacity-100" : "lg:opacity-0 lg:hidden"
                                    )}>{item.name}</span>

                                    {item.nested && isSidebarOpen && (
                                        <ChevronRight size={14} className={cn("ml-auto transition-transform", isActive && "rotate-90")} />
                                    )}

                                    {!isSidebarOpen && (
                                        <div className="absolute left-full ml-6 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-medium hidden lg:block z-[80] whitespace-nowrap">
                                            {item.name}
                                        </div>
                                    )}
                                </Link>

                                {item.nested && isSidebarOpen && isActive && (
                                    <div className="mt-1 ml-9 space-y-1 border-l-2 border-[#f1f5f9]">
                                        {item.nested.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-1.5 text-[13px] transition-colors",
                                                    pathname === sub.href ? "text-pace-purple font-bold" : "text-[#64748b] hover:text-[#1e293b]"
                                                )}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>
            </aside>

            {/* Main Content Container */}
            <main className={cn(
                "flex-1 transition-all duration-300 min-h-screen relative flex flex-col bg-[#f4f7fe]",
                isSidebarOpen ? "lg:ml-[260px]" : "lg:ml-[80px]"
            )}>
                {/* Header - Top Search & Profile Bar */}
                <header className="h-20 bg-white sticky top-0 z-50 flex items-center justify-between px-4 lg:px-8 shadow-sm">
                    <div className="flex items-center gap-6 flex-1">
                        {/* Blue Menu Toggle Button like in image */}
                        <button
                            onClick={() => window.innerWidth < 1024 ? setIsMobileOpen(true) : setIsSidebarOpen(!isSidebarOpen)}
                            className="bg-[#4a6cf7] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#3d59e0] transition-all active:scale-95 shadow-md shadow-blue-500/20"
                        >
                            <Menu size={18} />
                            <span className="hidden sm:inline font-bold text-sm">Menu</span>
                        </button>

                        {/* Search Bar */}
                        <div className="max-w-xs w-full relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={16} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#f4f7fe] focus:bg-white border border-transparent focus:border-[#4a6cf7]/20 outline-none transition-all placeholder:text-[#94a3b8] text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-full text-[#64748b] hover:bg-[#f4f7fe] transition-all relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>

                        <button className="p-2.5 rounded-full text-[#64748b] hover:bg-[#f4f7fe] transition-all">
                            <Clock size={20} />
                        </button>

                        <div className="flex items-center gap-3 pl-4 border-l border-[#e2e8f0]">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-[#1e293b]">Adam Joe</p>
                                <p className="text-[11px] font-medium text-[#64748b]">Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                                <Image
                                    src="https://ui-avatars.com/api/?name=Adam+Joe&background=4a6cf7&color=fff"
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-4 lg:p-8 flex-1">
                    {/* Page Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1e293b]">{pathname === '/dashboard' ? 'Marketing Dashboard' : pathname.split('/').pop().charAt(0).toUpperCase() + pathname.split('/').pop().slice(1)}</h2>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-white px-4 py-2 rounded-lg border border-[#e2e8f0] shadow-sm">
                            <span className="text-[#64748b] font-medium">Dashboard</span>
                            <span className="text-[#94a3b8]">/</span>
                            <span className="text-[#4a6cf7] font-bold">{pathname === '/dashboard' ? 'Marketing' : pathname.split('/').pop()}</span>
                        </div>
                    </div>
                    {children}
                </div>
            </main>
        </div>
    );
}
