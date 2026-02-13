"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    Menu, Search, Bell, ChevronRight
} from 'lucide-react'
import { Sidebar } from '@/components/Sidebar'
import { cn } from '@/lib/utils'

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const pathname = usePathname()

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
            {/* Sidebar Component */}
            <Sidebar isSidebarOpen={isSidebarOpen} pathname={pathname} />

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
                        <div className="flex items-center gap-4 border-l border-gray-100 pl-6 h-8">
                            <Link href="/dashboard/notifications" className="relative p-1.5 text-admin-dim hover:text-pace-purple transition-colors rounded-lg hover:bg-pace-purple/5">
                                <Bell size={18} />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </Link>
                            <div className="flex items-center gap-3 h-8">
                                <div className="text-right hidden sm:block">
                                    <p className="text-[12px] font-bold text-admin-value leading-none">Dennis Mutuku</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-pace-border bg-pace-purple/5 flex items-center justify-center text-[11px] font-black text-pace-purple">DM</div>
                            </div>
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
