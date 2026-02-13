"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    Menu, Search, Bell, ChevronRight, X
} from 'lucide-react'
import { Sidebar } from '@/components/Sidebar'
import { cn } from '@/lib/utils'

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const pathname = usePathname()

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close sidebar on route change on mobile
    useEffect(() => {
        if (isMobile) {
            setIsSidebarOpen(false)
        }
    }, [pathname, isMobile])

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
        <div className="min-h-screen bg-gray-100 flex font-figtree text-[13px]">
            {/* Mobile Overlay */}
            {isMobile && isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Component */}
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isMobile={isMobile} pathname={pathname} />

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 min-h-screen flex flex-col transition-all duration-300 w-full",
                // On desktop, add margin based on sidebar state. On mobile, no margin (overlay)
                !isMobile && (isSidebarOpen ? "ml-60" : "ml-16")
            )}>
                {/* Header */}
                <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
                            title="Toggle Sidebar"
                        >
                            {isSidebarOpen && isMobile ? <X size={20} /> : <Menu size={20} />}
                        </button>
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 border-l border-gray-200 pl-4">
                            <span>{getPageName()}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-9 pr-4 py-2 w-64 bg-gray-100/50 border-transparent focus:bg-white border focus:border-gray-200 rounded-full text-sm outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>
                        <div className="flex items-center gap-4 border-l border-gray-200 pl-6 h-8">
                            <Link href="/dashboard/notifications" className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100">
                                <Bell size={18} />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-semibold text-gray-800 leading-none">Dennis Mutuku</p>
                                </div>
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pace-purple/10 to-blue-50 border border-white shadow-sm flex items-center justify-center text-xs font-bold text-pace-purple">
                                    DM
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-x-hidden">
                    {children}
                </div>
            </main>
        </div>
    );
}
