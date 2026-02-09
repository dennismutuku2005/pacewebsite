"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, User, ArrowRight } from 'lucide-react'

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
            {/* Left Side - Login Form */}
            <div className="w-full lg:w-[450px] p-8 lg:p-16 flex flex-col justify-center bg-white z-10">
                <div className="mb-10 text-center lg:text-left">
                    <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
                        <div className="w-10 h-10 bg-pace-purple rounded-xl flex items-center justify-center text-white font-bold text-2xl">P</div>
                        <span className="text-2xl font-bold text-pace-purple tracking-tight">Pace Admin</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-500">Please enter your details to sign in.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <User size={16} className="text-gray-400" />
                            Username
                        </label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="admin@pacewisp.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Lock size={16} className="text-gray-400" />
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none transition-all placeholder:text-gray-300"
                        />
                    </div>

                    <div className="flex items-center justify-between py-2">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-pace-purple focus:ring-pace-purple transition-all" />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
                        </label>
                        <button type="button" className="text-sm font-semibold text-pace-purple hover:text-pace-purple-dark transition-colors">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-pace-purple text-white py-4 rounded-xl font-bold text-lg hover:bg-pace-purple-dark transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:transform-none"
                    >
                        {isLoading ? (
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                Sign In
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account? <span className="text-pace-purple font-semibold hover:underline cursor-pointer">Contact Support</span>
                </p>
            </div>

            {/* Right Side - Image/Illustration */}
            <div className="hidden lg:flex flex-1 bg-pace-purple relative overflow-hidden items-center justify-center p-20 text-white">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pace-orange-start/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

                <div className="relative z-10 max-w-xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto shadow-2xl border border-white/20 mb-8">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">Premium WISP <br /> Management Portal</h1>
                        <p className="text-xl text-purple-100/70 font-light leading-relaxed">
                            Streamline your wireless internet operations with our powerful billing and customer management suite.
                        </p>
                    </motion.div>

                    {/* Stats Preview */}
                    <div className="grid grid-cols-2 gap-6 mt-12 text-left">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                            <p className="text-purple-200 text-sm mb-1 uppercase tracking-widest font-bold">Today's Revenue</p>
                            <p className="text-2xl font-bold">KES 142,500</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                            <p className="text-purple-200 text-sm mb-1 uppercase tracking-widest font-bold">Server Status</p>
                            <p className="text-2xl font-bold flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                                Healthy
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating circles decoration */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-pace-orange-start to-pace-orange-end rounded-full opacity-50 blur-xl"
                ></motion.div>
            </div>
        </div>
    )
}
