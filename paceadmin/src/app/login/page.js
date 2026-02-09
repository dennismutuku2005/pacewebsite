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
        // Simulate login
        setTimeout(() => {
            router.push('/dashboard')
        }, 1500)
    }

    return (
        <div className="min-h-screen flex bg-white font-sans overflow-hidden">
            {/* Left Side - Login Form (50%) */}
            <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white z-10 relative">
                <div className="max-w-md mx-auto w-full">
                    <div className="mb-12">
                        <div className="mb-10 text-center lg:text-left">
                            <div className="inline-block mb-10">
                                <Image
                                    src="/logo.png"
                                    alt="Pace Logo"
                                    width={150}
                                    height={50}
                                    className="h-12 w-auto object-contain mx-auto lg:mx-0"
                                    priority
                                />
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Admin Login</h2>
                            <p className="text-gray-500 font-medium">Please enter your credentials to access the portal.</p>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wider">
                                <User size={14} className="text-gray-400" />
                                Username
                            </label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="admin@pacewisp.com"
                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300 font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2 uppercase tracking-wider">
                                <Lock size={14} className="text-gray-400" />
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300 font-medium"
                            />
                        </div>

                        <div className="flex items-center justify-between py-2">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-300 text-pace-purple focus:ring-pace-purple transition-all" />
                                <span className="text-sm text-gray-600 font-bold group-hover:text-gray-900 transition-colors">Remember me</span>
                            </label>
                            <button type="button" className="text-sm font-bold text-pace-purple hover:text-pace-purple-dark transition-colors">
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-pace-purple text-white py-4 rounded-2xl font-black text-lg hover:bg-pace-purple-dark transition-all hover:shadow-[0_8px_30px_rgba(75,29,143,0.3)] hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                "Sign In to Account"
                            )}
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="text-center text-sm text-gray-500 font-medium">
                            By logging in, you agree to our <span className="text-gray-900 font-bold hover:underline cursor-pointer">Security Terms</span> and <span className="text-gray-900 font-bold hover:underline cursor-pointer">Privacy Policy</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Side Image (50%) */}
            <div className="hidden lg:block lg:w-1/2 relative bg-gray-900">
                <Image
                    src="/sideimage.png"
                    alt="Admin Hero"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Subtle Overlay to match Pace theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-pace-purple/40 to-black/60 mix-blend-multiply"></div>
            </div>
        </div>
    )
}
