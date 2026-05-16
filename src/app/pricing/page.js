"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';

function HotspotCalculator() {
    const [clients, setClients] = useState(110);

    const baseFee = 1499;
    const limit = 110;
    const overageRate = 8;

    const overageUnits = Math.max(0, clients - limit);
    const totalPrice = baseFee + (overageUnits * overageRate);

    return (
        <div className="bg-white/5 rounded-xl p-10 lg:p-14 border border-white/10 shadow-xl relative overflow-hidden">
            <h3 className="text-2xl font-semibold mb-10 text-center text-white">Price Calculator</h3>

            <div className="max-w-md mx-auto space-y-10 relative z-10">
                <div>
                    <label className="flex items-center justify-between text-sm font-medium text-on-surface-variant mb-4">
                        Concurrent Users: 
                        <span className="text-primary text-xl font-bold tabular-nums">{clients}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="5"
                        value={clients}
                        onChange={(e) => setClients(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-3 text-xs text-on-surface-variant/50">
                        <span>0</span>
                        <span>1,000+</span>
                    </div>
                </div>

                <div className="bg-white/5 rounded-xl p-8 border border-white/5">
                    <div className="flex justify-between items-center mb-5 border-b border-white/5 pb-5">
                        <span className="text-sm font-medium text-on-surface-variant">Base Fee (110 users)</span>
                        <span className="font-semibold text-white">KES 1,499</span>
                    </div>
                    {overageUnits > 0 && (
                        <div className="flex justify-between items-center mb-5 border-b border-white/5 pb-5">
                            <span className="text-sm font-medium text-primary">Overage ({overageUnits} x KES 8)</span>
                            <span className="font-semibold text-primary">+ KES {(overageUnits * overageRate).toLocaleString()}</span>
                        </div>
                    )}
                    <div className="pt-2 flex justify-between items-center">
                        <span className="text-white font-semibold text-lg">Estimated Total</span>
                        <span className="text-3xl font-bold text-white tabular-nums">KES {totalPrice.toLocaleString()}</span>
                    </div>
                </div>

                <p className="text-center text-sm text-on-surface-variant/70 italic">
                    Pay a flat KES 1,499 for the first 110 clients. Beyond that, just KES 8 per user.
                </p>
            </div>
        </div>
    );
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-on-surface">
            <PageHero
                title="Simple Pricing"
                subtitle="Transparent pricing built for scaling your network smoothly."
            />

            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">

                        {/* Hotspot Pricing */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-xl p-10 lg:p-14 text-white flex flex-col group shadow-xl hover:border-white/20 transition-all"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-semibold tracking-tight">Hotspot Billing</h3>
                                <span className="material-symbols-outlined text-3xl text-primary">wifi_tethering</span>
                            </div>

                            <div className="mb-10 border-b border-white/5 pb-8">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-5xl lg:text-6xl font-bold tracking-tight text-white">1,499</span>
                                    <span className="text-xl font-medium text-white/40">KES / mo</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-normal">Monthly flat fee for up to 110 users</p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Up to 110 concurrent clients covered",
                                    "KES 8 per additional user",
                                    "Zero hidden transaction fees",
                                    "Integrated STK Push Included",
                                    "24/7 technical support"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 text-sm font-normal text-white/80">
                                        <span className="material-symbols-outlined text-primary text-lg">check</span>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link href="/apply">
                                <button className="w-full bg-primary text-white px-6 py-4 rounded-xl font-medium text-base hover:bg-primary/90 transition-all border border-transparent">
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
                            className="bg-primary text-white rounded-3xl p-10 lg:p-14 flex flex-col shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-semibold tracking-tight">PPPoE Management</h3>
                                <span className="material-symbols-outlined text-3xl text-white/40">router</span>
                            </div>

                            <div className="mb-10 border-b border-white/20 pb-8">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-5xl lg:text-6xl font-bold tracking-tight">28</span>
                                    <span className="text-xl font-medium text-white/60">KES / user</span>
                                </div>
                                <p className="text-sm text-white/70 font-normal">Per active concurrent session / month</p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Only pay for active sessions",
                                    "Dynamic bandwidth shaping",
                                    "Subscriber self-care portal",
                                    "Hardware independent setups",
                                    "Automated disconnection logic"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 text-sm font-normal text-white/90">
                                        <span className="material-symbols-outlined text-white text-lg">check</span>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link href="/apply">
                                <button className="w-full bg-white text-primary px-6 py-4 rounded-xl font-medium text-base hover:bg-gray-100 transition-all border border-transparent">
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
