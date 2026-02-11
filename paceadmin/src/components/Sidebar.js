"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Users, CreditCard, Ticket, Settings,
    Activity, FileText, Network, Receipt,
    ShieldCheck, MessageSquare, Globe, ChevronDown,
    LogOut, LayoutDashboard, Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sidebar({ isSidebarOpen, pathname }) {
    const [openMenus, setOpenMenus] = useState(['members'])

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
        {
            id: 'billing',
            name: 'Finance hub',
            icon: Receipt,
            badge: 8,
            children: [
                { name: 'Invoices', href: '/dashboard/invoices' },
                { name: 'Pending Payments', href: '/dashboard/invoices?status=pending' },
                { name: 'Payment History', href: '/dashboard/payments' },
            ]
        },
        { id: 'network', name: 'Network nodes', href: '/dashboard/routers', icon: Network },
        { id: 'submissions', name: 'Applications', href: '/dashboard/applications', icon: FileText, badge: 12 },
        {
            id: 'domains',
            name: 'Managed domains',
            icon: Globe,
            children: [
                { name: 'Domain List', href: '/dashboard/domains' },
                { name: 'DNS Management', href: '/dashboard/domains/dns' },
                { name: 'SSL Certificates', href: '/dashboard/domains/ssl' },
            ]
        },
        { id: 'staff', name: 'System users', href: '/dashboard/users', icon: ShieldCheck },
        { id: 'chat', name: 'Support chat', href: '/dashboard/chat', icon: MessageSquare, badge: 5 },
        {
            id: 'support',
            name: 'Service desk',
            icon: Ticket,
            badge: 24,
            children: [
                { name: 'All Tickets', href: '/dashboard/tickets' },
                { name: 'Active Tickets', href: '/dashboard/tickets?status=active' },
                { name: 'Closed Tickets', href: '/dashboard/tickets?status=closed' },
            ]
        },
        { id: 'payments', name: 'Financials', href: '/dashboard/payments', icon: CreditCard, badge: 3 },
        {
            id: 'status',
            name: 'System health',
            icon: Activity,
            children: [
                { name: 'Real-time Stats', href: '/dashboard/status' },
                { name: 'Network Health', href: '/dashboard/status?view=network' },
                { name: 'Security Logs', href: '/dashboard/logs' },
            ]
        },
        { id: 'logs', name: 'Audit logs', href: '/dashboard/logs', icon: Clock },
        { id: 'settings', name: 'Preferences', href: '/dashboard/settings', icon: Settings },
    ]

    return (
        <aside className={cn(
            "fixed inset-y-0 left-0 z-50 bg-white border-r border-pace-border transition-all duration-300 shadow-none",
            isSidebarOpen ? "w-60" : "w-16"
        )}>
            {/* Logo Section */}
            <div className="h-14 flex items-center justify-center border-b border-gray-100">
                <Link href="/dashboard" className="flex items-center justify-center">
                    <Image
                        src="/logoc.png"
                        alt="Pace"
                        width={isSidebarOpen ? 100 : 32}
                        height={isSidebarOpen ? 32 : 32}
                        className={cn("h-auto w-auto object-contain transition-all", isSidebarOpen ? "scale-[0.6]" : "scale-100")}
                        priority
                    />
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
                                <div className="space-y-1">
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
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold">{item.name}</span>
                                                    {item.badge && (
                                                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-black min-w-[18px] text-center bg-pace-purple text-white">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <ChevronDown size={14} className={cn("transition-transform", isExpanded ? "rotate-180" : "")} />
                                            </div>
                                        )}
                                    </button>
                                    {/* Submenu */}
                                    {isSidebarOpen && isExpanded && (
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
    )
}
