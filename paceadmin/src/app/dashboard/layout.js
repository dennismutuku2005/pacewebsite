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
        { name: 'Dashboard', href: '/dashboard', icon: Home },
        {
            name: 'Customers', href: '/dashboard/customers', icon: Users,
            nested: [
                { name: 'Directory', href: '/dashboard/customers' },
                { name: 'Invoicing', href: '/dashboard/customers/invoicing' }
            ]
        },
        { name: 'Applications', href: '/dashboard/applications', icon: FileText },
        { name: 'Tickets', href: '/dashboard/tickets', icon: Ticket },
        { name: 'Payments', href: '/dashboard/payments', icon: CreditCard },
        { name: 'System Status', href: '/dashboard/status', icon: Activity },
        { name: 'Logs', href: '/dashboard/logs', icon: Clock },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-[#F0F2F5] flex font-rubik">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-[70] transition-all duration-300 ease-in-out bg-white border-r border-gray-200 shadow-sm",
                isSidebarOpen ? "w-[260px]" : "w-[0px] lg:w-[80px]",
                isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
                {/* Logo Section */}
                <div className="h-16 flex items-center px-6 mb-4 bg-white grow-0 shrink-0">
                    <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
                        <Image src="/logo.png" alt="Pace" width={100} height={30} className="h-8 w-auto object-contain" />
                        <span className={cn(
                            "text-lg font-black text-pace-purple-dark tracking-tight transition-opacity",
                            isSidebarOpen ? "opacity-100" : "opacity-0"
                        )}>Admin</span>
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav className="px-3 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)] no-scrollbar pb-10">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || (item.nested && item.nested.some(n => pathname === n.href));
                        return (
                            <div key={item.name} className="relative">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group relative",
                                        isActive
                                            ? "bg-pace-purple/10 text-pace-purple font-bold"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-pace-purple"
                                    )}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    <item.icon size={20} className={cn(
                                        "shrink-0 transition-colors",
                                        isActive ? "text-pace-purple" : "text-gray-400 group-hover:text-pace-purple"
                                    )} />
                                    <span className={cn(
                                        "text-sm tracking-wide transition-all duration-200",
                                        isSidebarOpen ? "opacity-100" : "lg:opacity-0 lg:hidden"
                                    )}>{item.name}</span>

                                    {item.nested && isSidebarOpen && (
                                        <ChevronRight size={14} className={cn("ml-auto transition-transform", isActive && "rotate-90")} />
                                    )}

                                    {/* Collapsed Active Indicator */}
                                    {!isSidebarOpen && isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-pace-purple rounded-r-full" />
                                    )}
                                </Link>

                                {item.nested && isSidebarOpen && isActive && (
                                    <div className="mt-1 ml-9 space-y-1">
                                        {item.nested.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-1.5 text-[13px] rounded-lg transition-colors",
                                                    pathname === sub.href ? "text-pace-purple font-bold" : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
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

                {/* Bottom Profile Info (Optional/Simplified) */}
                <div className={cn(
                    "absolute bottom-0 w-full p-4 border-t border-gray-100 bg-white transition-opacity",
                    isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none lg:hidden"
                )}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-pace-purple/10 flex items-center justify-center text-pace-purple">
                            <LogOut size={16} />
                        </div>
                        <span className="text-sm font-bold text-gray-700">Logout</span>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 transition-all duration-300 min-h-screen relative flex flex-col",
                isSidebarOpen ? "lg:ml-[260px]" : "lg:ml-[80px]"
            )}>
                {/* Simplified Header */}
                <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-50 flex items-center justify-between px-4 lg:px-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.innerWidth < 1024 ? setIsMobileOpen(true) : setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 text-gray-400 hover:text-pace-purple transition-colors active:scale-95"
                        >
                            <Menu size={22} />
                        </button>

                        <div className="hidden md:flex items-center gap-2 text-sm">
                            <span className="text-gray-400 font-medium">Pages</span>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 font-bold capitalize">{pathname.split('/').pop() || 'Dashboard'}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Search Bar (Simplified) */}
                        <div className="relative hidden lg:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Universal Search..."
                                className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-xl text-xs font-rubik focus:bg-white focus:border-pace-purple outline-none transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-3 pl-4 lg:border-l lg:border-gray-200">
                            <div className="w-9 h-9 rounded-full bg-pace-purple flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-sm">
                                AJ
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[13px] font-bold text-gray-900 leading-none">Adam Joe</p>
                                <p className="text-[11px] font-medium text-gray-400 mt-1">Super Admin</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-4 lg:p-8 flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}
