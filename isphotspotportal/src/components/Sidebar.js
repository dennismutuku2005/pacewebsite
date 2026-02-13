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

export function Sidebar({ isSidebarOpen, setIsSidebarOpen, isMobile, pathname }) {
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
        { id: 'income', name: 'Income', href: '/dashboard/income', icon: CreditCard },
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
        <>
            <aside className={sidebarClass}>
                {/* Logo Section */}
                <div className="h-16 flex items-center justify-center border-b border-gray-100">
                    <Link href="/dashboard" className="flex items-center justify-center gap-2">
                        {/* Placeholder for Logo if image fails or just use text if preferred */}
                        {showText ? (
                            <Image
                                src="/logoc.png"
                                alt="Pace"
                                width={100}
                                height={32}
                                className="h-8 w-auto object-contain"
                                priority
                            />
                        ) : (
                            <Image
                                src="/logoc.png"
                                alt="Pace"
                                width={32}
                                height={32}
                                className="h-6 w-auto object-contain"
                                priority
                            />
                        )}
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-8rem)] scrollbar-hide">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || item.children?.some(child => child.href === pathname);
                        const isExpanded = openMenus.includes(item.id);

                        return (
                            <div key={item.id} className="space-y-0.5">
                                {item.children ? (
                                    <div className="space-y-0.5">
                                        <button
                                            onClick={() => toggleMenu(item.id)}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all group relative text-[13px]",
                                                isActive && !isExpanded ? "bg-pace-purple/10 text-pace-purple font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            )}
                                        >
                                            <item.icon size={18} className={cn("shrink-0", isActive ? "text-pace-purple" : "text-gray-400 group-hover:text-gray-600")} />
                                            {showText && (
                                                <div className="flex-1 flex items-center justify-between transition-opacity duration-200">
                                                    <span className="truncate">{item.name}</span>
                                                    <ChevronDown size={14} className={cn("transition-transform duration-200 text-gray-400", isExpanded ? "rotate-180" : "")} />
                                                </div>
                                            )}
                                        </button>
                                        {/* Submenu */}
                                        {showText && isExpanded && (
                                            <div className="ml-4 space-y-0.5 border-l border-gray-100 pl-2 my-1">
                                                {item.children.map((child) => {
                                                    const isChildActive = pathname === child.href;
                                                    return (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className={cn(
                                                                "block px-3 py-2 rounded-md text-[12px] transition-all",
                                                                isChildActive
                                                                    ? "text-pace-purple font-medium bg-pace-purple/5"
                                                                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
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
                                                {item.badge && (
                                                    <span className={cn(
                                                        "text-[10px] px-1.5 py-0.5 rounded-full font-medium min-w-[20px] text-center",
                                                        isActive ? "bg-white/20 text-white" : "bg-pace-purple/10 text-pace-purple"
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

                <div className="absolute bottom-4 w-full px-3">
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className="w-full flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-red-600 transition-colors rounded-md hover:bg-red-50 text-[13px] font-medium"
                    >
                        <LogOut size={18} />
                        {showText && <span>Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Logout Confirmation Modal */}
            <Modal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                title="Sign Out"
                maxWidth="max-w-sm"
                footer={
                    <>
                        <button
                            onClick={() => setShowLogoutModal(false)}
                            className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                window.location.href = '/login';
                            }}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-medium hover:bg-red-700 transition-all shadow-sm"
                        >
                            Sign Out
                        </button>
                    </>
                }
            >
                <div className="p-1">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Are you sure you want to sign out?
                    </p>
                </div>
            </Modal>
        </>
    )
}
