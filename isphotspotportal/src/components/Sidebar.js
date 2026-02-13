"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Users, CreditCard, Ticket, Settings,
    Activity, FileText, Network, Receipt,
    UserRoundCheck, MessageSquare, Globe, ChevronDown,
    LogOut, LayoutDashboard, Clock, Smartphone, Bell
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Modal } from '@/components/Modal'

export function Sidebar({ isSidebarOpen, pathname }) {
    const [openMenus, setOpenMenus] = useState([])
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    const toggleMenu = (id) => {
        setOpenMenus(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        )
    }

    const navigation = [
        { id: 'dashboard', name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { id: 'entries', name: 'Entries', href: '/dashboard/entries', icon: Clock },
        {
            id: 'income',
            name: 'Incomes',
            icon: CreditCard,
            children: [
                { name: 'Income', href: '/dashboard/income' },
                { name: 'Income Report', href: '/dashboard/income/report' },
            ]
        },
        {
            id: 'customers',
            name: 'Customers',
            icon: Users,
            children: [
                { name: 'Customer List', href: '/dashboard/customers' },
                { name: 'Block STK', href: '/dashboard/customers/block-stk' },
            ]
        },
        {
            id: 'themes',
            name: 'Themes',
            icon: Globe,
            children: [
                { name: 'Hotspot Theme', href: '/dashboard/themes' },
            ]
        },
        {
            id: 'captive',
            name: 'Captive Portal',
            icon: Globe,
            children: [
                { name: 'Manage Prices', href: '/dashboard/captive/prices' },
                { name: 'Packages', href: '/dashboard/captive/packages' },
            ]
        },
        { id: 'routers', name: 'Routers', href: '/dashboard/routers', icon: Network },
        { id: 'mpesa', name: 'M-Pesa Transactions', href: '/dashboard/mpesa', icon: Smartphone },
        { id: 'billing', name: 'Billing', href: '/dashboard/billing', icon: Receipt },
        { id: 'notifications', name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
        { id: 'logs', name: 'Activity Logs', href: '/dashboard/logs', icon: FileText },
        { id: 'settings', name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    return (
        <>
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
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-admin-dim hover:text-red-600 transition-colors rounded hover:bg-red-50 font-bold text-[11px] tracking-tight"
                    >
                        <LogOut size={16} />
                        {isSidebarOpen && <span>Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Logout Confirmation Modal */}
            <Modal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                title="Sign Out?"
                maxWidth="max-w-md"
                footer={
                    <>
                        <button
                            onClick={() => setShowLogoutModal(false)}
                            className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all uppercase tracking-wider"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                // Add logout logic here if needed, like clearing session
                                window.location.href = '/login';
                            }}
                            className="px-8 py-2 bg-red-600 text-white rounded-lg font-bold text-[11px] hover:bg-red-700 transition-all shadow-md uppercase tracking-wider"
                        >
                            Sign Out
                        </button>
                    </>
                }
            >
                <div className="p-1">
                    <p className="text-[13px] text-admin-label font-medium leading-relaxed">
                        Are you sure you want to sign out? You will need to sign in again to access the portal.
                    </p>
                </div>
            </Modal>
        </>
    )
}
