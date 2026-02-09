"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, User } from 'lucide-react'

export default function LoginPage() {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            router.push('/dashboard')
        }, 1500)
    }

    return (
        <div className="h-screen w-screen flex bg-white overflow-hidden p-4 lg:p-0">
            {/* Container - Split 50/50 on large screens */}
            <div className="flex w-full h-full lg:flex-row flex-col rounded-3xl lg:rounded-none overflow-hidden border border-gray-100 lg:border-none shadow-2xl lg:shadow-none bg-white">

                {/* Left Side - Login Form (50%) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center py-8 lg:p-12 relative overflow-hidden h-full">
                    {/* Subtle Background Decoration */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-pace-purple/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                    <div className="max-w-[400px] w-full px-6 z-10">
                        {/* Logo Section */}
                        <div className="mb-8 text-center lg:text-left">
                            <Image
                                src="/logo.png"
                                alt="Pace Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain mx-auto lg:mx-0 mb-8"
                                priority
                            />
                            <h1 className="text-2xl font-bold text-[#0f172a] tracking-tight mb-2">Admin Login</h1>
                            <p className="text-[14px] text-gray-500 font-medium">Please enter your credentials to access the portal.</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[13px] font-bold text-gray-700 flex items-center gap-2 uppercase tracking-widest pl-1">
                                    <User size={14} className="text-gray-400" />
                                    Username
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="admin@pacewisp.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300 text-[14px] font-medium bg-gray-50/30"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[13px] font-bold text-gray-700 flex items-center gap-2 uppercase tracking-widest pl-1">
                                    <Lock size={14} className="text-gray-400" />
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300 text-[14px] font-medium bg-gray-50/30"
                                />
                            </div>

                            <div className="flex items-center justify-between py-1">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer w-4 h-4 rounded-md border-gray-300 text-pace-purple focus:ring-pace-purple transition-all cursor-pointer opacity-0 absolute z-10" />
                                        <div className="w-4 h-4 border border-gray-300 rounded-md bg-white peer-checked:bg-pace-purple peer-checked:border-pace-purple transition-all flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    </div>
                                    <span className="text-[13px] text-gray-600 font-bold group-hover:text-gray-900 transition-colors">Remember me</span>
                                </label>
                                <button type="button" className="text-[13px] font-bold text-pace-purple hover:underline transition-all">
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-pace-purple text-white py-3 rounded-xl font-bold text-[15px] hover:bg-pace-purple-dark transition-all hover:shadow-lg hover:shadow-pace-purple/20 active:scale-[0.98] flex items-center justify-center mt-2 disabled:opacity-70 disabled:active:scale-100"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    "Sign In to Account"
                                )}
                            </button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col gap-3">
                            <p className="text-center text-[12px] text-gray-400 font-medium leading-relaxed">
                                Management Portal Version 1.0.4 <br />
                                Pace WISP Management Systems
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Side Image (50%) */}
                <div className="hidden lg:block lg:w-1/2 relative bg-gray-100 h-full">
                    <Image
                        src="/sideimage.png"
                        alt="Admin Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Theme Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-pace-purple/80 via-pace-purple/20 to-transparent mix-blend-multiply opacity-60"></div>
                </div>
            </div>
        </div>
    )
}
