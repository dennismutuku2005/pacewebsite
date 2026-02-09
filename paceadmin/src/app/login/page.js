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
        <div className="h-screen w-screen flex bg-white font-figtree overflow-hidden">

            {/* Left side Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center py-8 lg:p-12 relative overflow-hidden h-full">

                {/* Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
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
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-[380px] px-6 lg:px-0 relative z-10"
                >
                    <div className="mb-10 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start mb-6">
                            <Image src="/logo.png" alt="Pace Logo" width={110} height={35} className="h-9 w-auto object-contain" priority />
                        </div>
                        <h1 className="text-[30px] font-black text-pace-purple-dark tracking-tight leading-none">Management Portal</h1>
                        <p className="text-[14px] text-gray-400 mt-3 font-semibold">Enter your credentials to access the admin panel.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-[12px] font-extrabold text-gray-500 mb-2 uppercase tracking-widest">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User size={18} className="text-gray-300 group-focus-within:text-pace-purple transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-100 focus:border-pace-purple outline-none transition-all placeholder:text-gray-300 text-[14px] font-bold bg-gray-50/30"
                                    placeholder="admin@pacewisp.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[12px] font-extrabold text-gray-500 uppercase tracking-widest">Password</label>
                                <button type="button" className="text-[11px] font-extrabold text-pace-purple hover:underline">Forgot Access?</button>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock size={18} className="text-gray-300 group-focus-within:text-pace-purple transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    className="w-full pl-12 pr-12 py-3.5 rounded-2xl border border-gray-100 focus:border-pace-purple outline-none transition-all placeholder:text-gray-300 text-[14px] font-bold bg-gray-50/30"
                                    placeholder="••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-pace-purple transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5 py-1">
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-100 text-pace-purple focus:ring-pace-purple/10" />
                            <label htmlFor="remember" className="text-[12px] font-bold text-gray-400 cursor-pointer">Stay logged in for 30 days</label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-pace-purple text-white py-4 rounded-2xl font-black text-[15px] hover:opacity-95 transition-all shadow-xl shadow-pace-purple/10 active:scale-[0.98] flex items-center justify-center mt-4 disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                "Sign In to Dashboard"
                            )}
                        </button>
                    </form>

                    <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-2 text-[11px] font-extrabold text-gray-400 mb-3 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-pace-green" />
                            <span>Systems Operational</span>
                        </div>
                        <p className="text-[11px] text-gray-300 font-bold leading-relaxed">
                            © 2026 Pace WISP Software systems. Secure Portal Access.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right side Image */}
            <div className="hidden lg:block lg:w-1/2 relative bg-gray-100 h-full">
                <Image
                    src="/sideimage.png"
                    alt="Admin Hero"
                    fill
                    className="object-cover grayscale-[0.1] contrast-[1.05]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pace-purple-dark/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-16 left-16 right-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/10 backdrop-blur-xl p-10 rounded-[32px] border border-white/10 shadow-2xl"
                    >
                        <div className="w-12 h-1 bg-pace-green mb-6"></div>
                        <h4 className="text-[28px] font-black text-white leading-tight">Advanced SaaS <br /> Licensing Solutions.</h4>
                        <p className="text-white/70 text-[15px] mt-4 font-semibold leading-relaxed">Enterprise-grade tools for scaling and managing global ISP software deployments seamlessly.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
