"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, User, Globe } from 'lucide-react'

export default function LoginPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            router.push('/dashboard')
        }, 1500)
    }

    return (
        <div className="h-screen w-screen flex bg-white font-rubik overflow-hidden">

            {/* 50/50 Split - Left side Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center py-8 lg:p-12 relative overflow-hidden h-full">

                {/* Subtle Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-[380px] px-6 lg:px-0 relative z-10"
                >
                    <div className="mb-10 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start mb-6">
                            <Image src="/logo.png" alt="Pace Logo" width={110} height={35} className="h-9 w-auto object-contain" priority />
                        </div>
                        <h1 className="text-[28px] font-black text-pace-purple-dark tracking-tight">Management Portal</h1>
                        <p className="text-[14px] text-gray-500 mt-2 font-medium">Enter your credentials to access the admin panel.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-[13px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User size={16} className="text-gray-400 group-focus-within:text-pace-purple transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300 text-[14px] font-medium bg-gray-50/30"
                                    placeholder="admin@pacewisp.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide">Password</label>
                                <button type="button" className="text-xs font-bold text-pace-purple hover:underline">Forgot?</button>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock size={16} className="text-gray-400 group-focus-within:text-pace-purple transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300 text-[14px] font-medium bg-gray-50/30"
                                    placeholder="••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-pace-purple transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-pace-purple focus:ring-pace-purple/20" />
                            <label htmlFor="remember" className="text-xs font-bold text-gray-600 cursor-pointer">Stay logged in for 30 days</label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-pace-purple text-white py-3.5 rounded-xl font-black text-[15px] hover:opacity-95 transition-all shadow-md shadow-pace-purple/10 active:scale-[0.98] flex items-center justify-center mt-2 disabled:opacity-70 disabled:active:scale-100"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                "Sign In to Dashboard"
                            )}
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-100/50 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 mb-4">
                            <Globe size={14} />
                            <span>Global Infrastructure Status:</span>
                            <span className="text-pace-green">Operational</span>
                        </div>
                        <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                            © 2026 Pace WISP Management. All rights reserved. Secured by Enterprise Armor.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* 50/50 Split - Right side Image */}
            <div className="hidden lg:block lg:w-1/2 relative bg-gray-100 h-full">
                <Image
                    src="/sideimage.png"
                    alt="Admin Hero"
                    fill
                    className="object-cover grayscale-[0.2] contrast-[1.1]"
                    priority
                />
                {/* Simplified Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pace-purple-dark/60 via-transparent to-transparent"></div>

                {/* High-end decorative label */}
                <div className="absolute bottom-12 left-12 right-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
                    >
                        <div className="w-10 h-1 h-0.5 bg-pace-green mb-4"></div>
                        <h4 className="text-2xl font-black text-white leading-tight">Advanced Connectivity <br /> Management Systems.</h4>
                        <p className="text-white/70 text-sm mt-3 font-medium">Enterprise-grade tools for scaling your wireless internet business seamlessly.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
