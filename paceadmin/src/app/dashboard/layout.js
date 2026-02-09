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
        { name: 'Home', href: '/dashboard', icon: Home },
        {
            name: 'Customers', href: '/dashboard/customers', icon: Users,
            nested: [
                { name: 'Directory', href: '/dashboard/customers' },
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
        <div className="min-h-screen bg-[#f8fafc] flex">
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
                "fixed inset-y-0 left-0 z-[70] transition-all duration-300 ease-in-out border-r border-gray-200 bg-white shadow-xl shadow-gray-200/50",
                isSidebarOpen ? "w-[280px]" : "w-[80px]",
                isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
                {/* Logo Section */}
                <div className="h-20 flex items-center px-6 border-b border-gray-100 mb-6 bg-white shrink-0">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 bg-pace-purple rounded-xl flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg shadow-pace-purple/30">P</div>
                        <span className={cn(
                            "text-xl font-bold text-pace-purple tracking-tight whitespace-nowrap transition-opacity",
                            isSidebarOpen ? "opacity-100" : "opacity-0"
                        )}>Pace Admin</span>
                    </div>
                </div>

                {/* Navigation Section */}
                <nav className="px-3 space-y-1 overflow-y-auto max-h-[calc(100vh-160px)] pb-20 no-scrollbar">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || (item.nested && item.nested.some(n => pathname === n.href));
                        return (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 relative group",
                                        isActive
                                            ? "bg-pace-purple text-white shadow-lg shadow-pace-purple/20"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    <item.icon size={22} className={cn(
                                        "shrink-0 transition-transform duration-200",
                                        isActive ? "scale-110" : "group-hover:scale-110"
                                    )} />
                                    <span className={cn(
                                        "font-medium transition-all duration-200",
                                        isSidebarOpen ? "opacity-100" : "lg:opacity-0 lg:hidden"
                                    )}>{item.name}</span>

                                    {/* Tooltip for collapsed mode */}
                                    {!isSidebarOpen && (
                                        <div className="absolute left-full ml-6 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-medium hidden lg:block z-[80] whitespace-nowrap">
                                            {item.name}
                                        </div>
                                    )}
                                </Link>

                                {/* Nested Links if sidebar is open */}
                                {item.nested && isSidebarOpen && isActive && (
                                    <div className="mt-1 ml-9 space-y-1">
                                        {item.nested.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors capitalize",
                                                    pathname === sub.href ? "text-pace-purple font-bold" : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                                                )}
                                            >
                                                <ChevronRight size={14} />
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>

                {/* Logout Section */}
                <div className="absolute bottom-0 w-full p-4 border-t border-gray-100 bg-white">
                    <button className={cn(
                        "w-full flex items-center gap-3 px-3 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all",
                        !isSidebarOpen && "justify-center"
                    )}>
                        <LogOut size={22} />
                        <span className={cn(
                            "font-bold transition-opacity",
                            isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
                        )}>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Container */}
            <main className={cn(
                "flex-1 transition-all duration-300 min-h-screen relative flex flex-col",
                isSidebarOpen ? "lg:ml-[280px]" : "lg:ml-[80px]"
            )}>
                {/* Header - Top Search & Profile Bar */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 flex items-center justify-between px-4 lg:px-8">
                    <div className="flex items-center gap-4 flex-1">
                        <button
                            onClick={() => window.innerWidth < 1024 ? setIsMobileOpen(true) : setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2.5 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all active:scale-95"
                        >
                            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>

                        {/* Search Bar */}
                        <div className="max-w-md w-full relative hidden sm:block">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search anything..."
                                className="w-full pl-11 pr-4 py-2.5 rounded-xl border-none bg-gray-100/80 focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-400 text-sm font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <button className="p-2.5 rounded-xl text-gray-400 hover:bg-gray-100 transition-all relative">
                            <Bell size={22} />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>

                        <div className="h-10 w-px bg-gray-200 mx-2"></div>

                        <div className="flex items-center gap-3 pl-2 group cursor-pointer">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-900 group-hover:text-pace-purple transition-colors">Admin Account</p>
                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Super Administrator</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                                <Image src="https://ui-avatars.com/api/?name=Admin&background=4B1D8F&color=fff" alt="Avatar" width={40} height={40} />
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
    )
}
