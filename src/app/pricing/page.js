"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';

function HotspotCalculator() {
    const [clients, setClients] = useState(110);

    const baseFee = 1500;
    const limit = 110;
    const overageRate = 13;

    const overageUnits = Math.max(0, clients - limit);
    const totalPrice = baseFee + (overageUnits * overageRate);

    return (
        <div className="bg-[#0E111C]/90 rounded-2xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-white">Interactive Price Calculator</h3>

            <div className="max-w-md mx-auto space-y-8 relative z-10">
                <div>
                    <label className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-300 mb-3">
                        <span>Concurrent Users:</span>
                        <span className="text-purple-400 text-lg font-bold tabular-nums">{clients}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="5"
                        value={clients}
                        onChange={(e) => setClients(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between mt-2 text-[11px] text-slate-500">
                        <span>0 users</span>
                        <span>1,000+ users</span>
                    </div>
                </div>

                <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06]">
                    <div className="flex justify-between items-center mb-4 border-b border-white/[0.06] pb-4 text-xs sm:text-sm">
                        <span className="text-slate-400">Base Fee (110 users)</span>
                        <span className="font-semibold text-white">KES 1,500</span>
                    </div>
                    {overageUnits > 0 && (
                        <div className="flex justify-between items-center mb-4 border-b border-white/[0.06] pb-4 text-xs sm:text-sm">
                            <span className="text-purple-400">Overage ({overageUnits} x KES 13)</span>
                            <span className="font-semibold text-purple-300">+ KES {(overageUnits * overageRate).toLocaleString()}</span>
                        </div>
                    )}
                    <div className="pt-2 flex justify-between items-center">
                        <span className="text-white font-semibold text-sm sm:text-base">Estimated Total</span>
                        <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">KES {totalPrice.toLocaleString()}</span>
                    </div>
                </div>

                <p className="text-center text-xs text-slate-400 leading-relaxed">
                    Pay a flat KES 1,500 for the first 110 clients. Beyond that, just KES 13 per user.
                </p>
            </div>
        </div>
    );
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Transparent Billing"
                title="Simple, Scalable Pricing"
                subtitle="Predictable cost models built for growing and enterprise Internet Service Providers."
            />

            <section className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">

                        {/* Hotspot Pricing */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0E111C]/80 border border-white/10 rounded-2xl p-8 sm:p-10 text-white flex flex-col group shadow-xl hover:border-white/20 transition-all"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Hotspot Billing</h3>
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                    <span className="material-symbols-outlined text-2xl">wifi_tethering</span>
                                </div>
                            </div>

                            <div className="mb-8 border-b border-white/[0.08] pb-6">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">1,500</span>
                                    <span className="text-sm font-medium text-slate-400">KES / mo</span>
                                </div>
                                <p className="text-xs text-slate-400 font-normal">Monthly flat fee for up to 110 concurrent users</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                {[
                                    "Up to 110 concurrent clients covered",
                                    "KES 13 per additional active user",
                                    "Zero hidden transaction fees",
                                    "Integrated STK Push Included",
                                    "24/7 technical support"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                                        <span className="text-purple-400 font-bold">✓</span>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link href="/apply">
                                <button className="w-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 px-6 py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all active:scale-95 cursor-pointer">
                                    Get Started
                                </button>
                            </Link>
                        </motion.div>

                        {/* PPPoE Pricing */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-b from-purple-950/40 via-[#0E111C] to-[#0E111C] border border-purple-500/30 rounded-2xl p-8 sm:p-10 flex flex-col shadow-[0_15px_50px_rgba(139,92,246,0.15)] relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">PPPoE Management</h3>
                                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                                    <span className="material-symbols-outlined text-2xl">router</span>
                                </div>
                            </div>

                            <div className="mb-8 border-b border-white/[0.08] pb-6">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">28</span>
                                    <span className="text-sm font-medium text-purple-300">KES / user</span>
                                </div>
                                <p className="text-xs text-slate-300 font-normal">Per active concurrent session / month</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                {[
                                    "Only pay for active sessions",
                                    "Dynamic bandwidth rate-limiting",
                                    "Subscriber self-care portal",
                                    "Hardware independent setups",
                                    "Automated disconnection logic"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                                        <span className="text-purple-400 font-bold">✓</span>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link href="/apply">
                                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white px-6 py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-lg shadow-purple-600/25 active:scale-95 cursor-pointer">
                                    Get Started
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Calculator tool */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-3xl mx-auto">
                            <HotspotCalculator />
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
