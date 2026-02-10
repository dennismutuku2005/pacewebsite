"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    Users, CreditCard, Ticket, Settings,
    Activity, FileText, Search, Menu,
    LogOut, ChevronRight, Clock,
    LayoutDashboard, Network, Receipt,
    ShieldCheck, MessageSquare
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const pathname = usePathname()

    const navigation = [
        { name: 'Summary', href: '/dashboard', icon: LayoutDashboard },
        { id: 'members', name: 'Members', href: '/dashboard/customers', icon: Users },
        { id: 'billing', name: 'Billing', href: '/dashboard/invoices', icon: Receipt },
        { id: 'network', name: 'Network Nodes', href: '/dashboard/routers', icon: Network },
        { id: 'submissions', name: 'Submissions', href: '/dashboard/applications', icon: FileText, badge: 12 },
        { id: 'staff', name: 'System Users', href: '/dashboard/users', icon: ShieldCheck },
        { id: 'chat', name: 'Chat Panel', href: '/dashboard/chat', icon: MessageSquare },
        { id: 'support', name: 'Service Desk', href: '/dashboard/tickets', icon: Ticket },
        { id: 'payments', name: 'Financials', href: '/dashboard/payments', icon: CreditCard },
        { id: 'status', name: 'Health Hub', href: '/dashboard/status', icon: Activity },
        { id: 'logs', name: 'Event History', href: '/dashboard/logs', icon: Clock },
        { id: 'settings', name: 'Preferences', href: '/dashboard/settings', icon: Settings },
    ]

    // Helper to format path name for breadcrumbs
    const getPageName = () => {
        const path = pathname.split('/').pop() || 'Overview';
        return path
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <div className="min-h-screen bg-white flex font-figtree text-[13px]">
            {/* Sidebar - Flat 2D */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 bg-white border-r border-pace-border transition-all duration-200 shadow-none",
                isSidebarOpen ? "w-60" : "w-16"
            )}>
                {/* Logo Section */}
                <div className="h-14 flex items-center px-4 border-b border-gray-100">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Pace" width={80} height={25} className="h-6 w-auto object-contain grayscale" priority />
                        {isSidebarOpen && <span className="text-[10px] font-black uppercase tracking-wider text-admin-dim">Admin</span>}
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
                                    "flex items-center gap-3 px-3 py-2.5 rounded transition-colors group relative",
                                    isActive
                                        ? "bg-pace-purple text-white shadow-none"
                                        : "text-admin-label hover:bg-gray-50 hover:text-admin-value"
                                )}
                            >
                                <item.icon size={16} className={cn("shrink-0", isActive ? "text-white" : "text-admin-dim group-hover:text-admin-value")} />
                                {isSidebarOpen && (
                                    <div className="flex-1 flex items-center justify-between">
                                        <span className="font-bold tracking-tight">{item.name}</span>
                                        {item.badge && (
                                            <span className={cn(
                                                "text-[9px] px-1.5 py-0.5 rounded-full font-black min-w-[18px] text-center",
                                                isActive ? "bg-white text-pace-purple" : "bg-pace-purple text-white"
                                            )}>
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <div className="absolute bottom-4 w-full px-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-admin-dim hover:text-red-600 transition-colors rounded hover:bg-red-50 font-black uppercase text-[11px] tracking-widest">
                        <LogOut size={16} />
                        {isSidebarOpen && <span>Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 min-h-screen flex flex-col transition-all duration-200",
                isSidebarOpen ? "ml-60" : "ml-16"
            )}>
                {/* Header - Professional UI */}
                <header className="h-14 bg-white border-b border-pace-border flex items-center justify-between px-6 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-admin-dim hover:text-admin-value transition-colors p-1" title="Toggle Sidebar">
                            <Menu size={18} />
                        </button>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-admin-label border-l border-gray-100 pl-4">
                            <span className="text-admin-dim">Management</span>
                            <ChevronRight size={12} className="text-gray-300" />
                            <span className="text-admin-value font-black">{getPageName()}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-8 pr-3 py-2 w-64 bg-gray-50 border border-gray-200 rounded text-[12px] focus:bg-white focus:ring-1 focus:ring-pace-purple focus:border-pace-purple outline-none transition-all placeholder:text-admin-dim font-bold text-admin-value shadow-none"
                            />
                        </div>
                        <div className="flex items-center gap-3 border-l border-gray-100 pl-6 h-8">
                            <div className="text-right">
                                <p className="text-[12px] font-black text-admin-value leading-none uppercase">Dennis Mutuku</p>
                            </div>
                            <div className="w-8 h-8 rounded border border-pace-border bg-gray-50 flex items-center justify-center text-[11px] font-black text-pace-purple">DM</div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-6 bg-white flex-1 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
