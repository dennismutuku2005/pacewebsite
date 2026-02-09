"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, User } from 'lucide-react'

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            router.push('/dashboard')
        }, 1200)
    }

    return (
        <div className="h-screen w-screen flex bg-[#F9FAFB] font-figtree text-[13px] overflow-hidden">

            {/* Login Container - Flat 2D */}
            <div className="w-full lg:w-[500px] h-full bg-white border-r border-gray-200 flex flex-col justify-center px-12 lg:px-20 relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full"
                >
                    <div className="mb-12">
                        <div className="flex mb-8">
                            <Image src="/logo.png" alt="Pace Logo" width={90} height={30} className="h-7 w-auto object-contain grayscale" priority />
                        </div>
                        <h1 className="text-[24px] font-black text-admin-value leading-none tracking-tight">Admin Portal</h1>
                        <p className="text-[12px] text-admin-label mt-3 font-bold uppercase tracking-tight">Sign in to manage your system</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-[10px] font-black text-admin-label mb-2 uppercase tracking-[2px]">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded border border-gray-200 bg-gray-50 focus:bg-white focus:border-pace-purple outline-none transition-all placeholder:text-gray-300 font-bold"
                                placeholder="admin@pacewisp.com"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[10px] font-black text-admin-label uppercase tracking-[2px]">Password</label>
                            </div>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded border border-gray-200 bg-gray-50 focus:bg-white focus:border-pace-purple outline-none transition-all placeholder:text-gray-300 font-bold text-[16px] tracking-[4px]"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-pace-purple text-white py-3.5 rounded font-black text-[12px] uppercase tracking-[3px] hover:bg-[#3d1a75] transition-all active:scale-[0.99] flex items-center justify-center mt-6 shadow-none"
                        >
                            {isLoading ? "Signing in..." : "Login to Dashboard"}
                        </button>
                    </form>

                    <div className="mt-16 pt-10 border-t border-gray-50">
                        <p className="text-[10px] text-admin-dim font-bold leading-relaxed uppercase tracking-widest">
                            © 2026 Pace WISP Software systems.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Hero Side - User Centered */}
            <div className="hidden lg:flex flex-1 bg-white items-center justify-center p-20 relative overflow-hidden">
                {/* Flat Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="gridLarge" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#gridLarge)" />
                    </svg>
                </div>

                <div className="max-w-md relative z-10">
                    <div className="w-12 h-1 bg-pace-purple mb-8"></div>
                    <h4 className="text-[32px] font-black text-admin-value leading-[1.1] tracking-tighter mb-6 uppercase">Manage Your ISP <br /> Business Faster.</h4>
                    <p className="text-admin-label text-[14px] font-bold leading-relaxed tracking-tight">A unified administrative experience designed for speed, clarity, and control. Manage your clients, licenses, and networks in one clean 2D workspace.</p>
                </div>
            </div>
        </div>
    )
}
