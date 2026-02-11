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
    ShieldCheck, MessageSquare, Globe, ChevronDown,
    RefreshCw
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [openMenus, setOpenMenus] = useState(['members'])
    const pathname = usePathname()

    const toggleMenu = (id) => {
        setOpenMenus(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        )
    }

    const navigation = [
        { id: 'summary', name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        {
            id: 'members',
            name: 'Client Base',
            icon: Users,
            children: [
                { name: 'All Members', href: '/dashboard/customers' },
                { name: 'PPPoE Clients', href: '/dashboard/customers?service=pppoe' },
                { name: 'Hotspot Users', href: '/dashboard/customers?service=hotspot' },
            ]
        },
        { id: 'billing', name: 'Finance hub', href: '/dashboard/invoices', icon: Receipt },
        { id: 'network', name: 'Network nodes', href: '/dashboard/routers', icon: Network },
        { id: 'submissions', name: 'Applications', href: '/dashboard/applications', icon: FileText, badge: 12 },
        { id: 'domains', name: 'Managed domains', href: '/dashboard/domains', icon: Globe },
        { id: 'staff', name: 'System users', href: '/dashboard/users', icon: ShieldCheck },
        { id: 'chat', name: 'Support chat', href: '/dashboard/chat', icon: MessageSquare },
        { id: 'support', name: 'Service desk', href: '/dashboard/tickets', icon: Ticket },
        { id: 'payments', name: 'Financials', href: '/dashboard/payments', icon: CreditCard },
        { id: 'status', name: 'System health', href: '/dashboard/status', icon: Activity },
        { id: 'logs', name: 'Audit logs', href: '/dashboard/logs', icon: Clock },
        { id: 'settings', name: 'Preferences', href: '/dashboard/settings', icon: Settings },
    ]

    // Helper to format path name for breadcrumbs
    const getPageName = () => {
        const path = pathname.split('/').pop() || 'Summary';
        return path
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <div className="min-h-screen bg-white flex font-figtree text-[13px]">
            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 bg-white border-r border-pace-border transition-all duration-300 shadow-none",
                isSidebarOpen ? "w-60" : "w-16"
            )}>
                {/* Logo Section */}
                <div className="h-14 flex items-center px-4 border-b border-gray-100">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Pace" width={80} height={25} className="h-6 w-auto object-contain grayscale" priority />
                        {isSidebarOpen && <span className="text-[10px] font-bold uppercase tracking-tight text-admin-dim">Admin</span>}
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="p-2 space-y-1 overflow-y-auto max-h-[calc(100vh-8rem)]">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || item.children?.some(child => child.href === pathname);
                        const isExpanded = openMenus.includes(item.id);

                        return (
                            <div key={item.id} className="space-y-1">
                                {item.children ? (
                                    <button
                                        onClick={() => toggleMenu(item.id)}
                                        className={cn(
                                            "w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all group relative",
                                            isActive && !isExpanded ? "bg-pace-purple/5 text-pace-purple" : "text-admin-label hover:bg-gray-50 hover:text-admin-value"
                                        )}
                                    >
                                        <item.icon size={16} className={cn("shrink-0", isActive ? "text-pace-purple" : "text-admin-dim group-hover:text-admin-value")} />
                                        {isSidebarOpen && (
                                            <div className="flex-1 flex items-center justify-between">
                                                <span className="font-semibold">{item.name}</span>
                                                <ChevronDown size={14} className={cn("transition-transform", isExpanded ? "rotate-180" : "")} />
                                            </div>
                                        )}
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2.5 rounded transition-all group relative",
                                            isActive
                                                ? "bg-pace-purple text-white shadow-[0_4px_12px_rgba(75,29,143,0.3)]"
                                                : "text-admin-label hover:bg-gray-50 hover:text-admin-value"
                                        )}
                                    >
                                        <item.icon size={16} className={cn("shrink-0", isActive ? "text-white" : "text-admin-dim group-hover:text-admin-value")} />
                                        {isSidebarOpen && (
                                            <div className="flex-1 flex items-center justify-between">
                                                <span className="font-semibold">{item.name}</span>
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
                                )}

                                {/* Submenu */}
                                {isSidebarOpen && item.children && isExpanded && (
                                    <div className="ml-9 space-y-1 border-l border-gray-100 pl-2">
                                        {item.children.map((child) => {
                                            const isChildActive = pathname === child.href;
                                            return (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className={cn(
                                                        "block px-3 py-2 rounded text-[12px] transition-all",
                                                        isChildActive
                                                            ? "bg-pace-purple/5 text-pace-purple font-bold"
                                                            : "text-admin-dim hover:text-admin-value hover:bg-gray-50"
                                                    )}
                                                >
                                                    {child.name}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>

                <div className="absolute bottom-4 w-full px-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-admin-dim hover:text-red-600 transition-colors rounded hover:bg-red-50 font-bold text-[11px] tracking-tight">
                        <LogOut size={16} />
                        {isSidebarOpen && <span>Sign Out account</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 min-h-screen flex flex-col transition-all duration-300 px-0",
                isSidebarOpen ? "ml-60" : "ml-16"
            )}>
                {/* Header */}
                <header className="h-14 bg-white border-b border-pace-border flex items-center justify-between px-6 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-admin-dim hover:text-admin-value transition-colors p-1" title="Toggle Sidebar">
                            <Menu size={18} />
                        </button>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-admin-label border-l border-gray-100 pl-4">
                            <span className="text-admin-dim">Pace Admin</span>
                            <ChevronRight size={12} className="text-gray-300" />
                            <span className="text-admin-value font-bold">{getPageName()}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                            <input
                                type="text"
                                placeholder="Search everything..."
                                className="pl-8 pr-3 py-2 w-64 bg-gray-50 border border-gray-200 rounded-lg text-[12px] focus:bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none transition-all placeholder:text-admin-dim font-medium text-admin-value shadow-sm"
                            />
                        </div>
                        <div className="flex items-center gap-3 border-l border-gray-100 pl-6 h-8">
                            <div className="text-right">
                                <p className="text-[12px] font-bold text-admin-value leading-none">Dennis Mutuku</p>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-pace-border bg-pace-purple/5 flex items-center justify-center text-[11px] font-black text-pace-purple">DM</div>
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
