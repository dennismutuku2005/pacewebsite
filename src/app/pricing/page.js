"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';

function HotspotCalculator() {
    const [clients, setClients] = useState(110);

    const baseFee = 1499;
    const limit = 110;
    const overageRate = 5;

    const overageUnits = Math.max(0, clients - limit);
    const totalPrice = baseFee + (overageUnits * overageRate);

    return (
        <div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 border border-white/5 shadow-xl relative overflow-hidden">
            <h3 className="text-2xl font-semibold mb-8 text-center tracking-tight text-white">Price Calculator</h3>

            <div className="max-w-md mx-auto space-y-10 relative z-10">
                <div>
                    <label className="flex items-center justify-between text-sm font-medium text-white mb-4">
                        Estimated Concurrent Users: 
                        <span className="text-primary text-xl tabular-nums">{clients}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="5"
                        value={clients}
                        onChange={(e) => setClients(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-3 text-xs text-on-surface-variant font-normal">
                        <span>0 Users</span>
                        <span>1000+ Users</span>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-8 border border-white/5">
                    <div className="flex justify-between items-center mb-5 border-b border-white/5 pb-5">
                        <span className="text-sm font-medium text-on-surface-variant">Base Fee (Up to 110 users)</span>
                        <span className="font-semibold text-white tabular-nums">KES 1,499</span>
                    </div>
                    {overageUnits > 0 && (
                        <div className="flex justify-between items-center mb-5 text-sm border-b border-white/5 pb-5">
                            <span className="text-sm font-medium text-tertiary">Overage ({overageUnits} x KES 5)</span>
                            <span className="font-semibold text-tertiary tabular-nums">+ KES {overageUnits * overageRate}</span>
                        </div>
                    )}
                    <div className="pt-2 flex justify-between items-center">
                        <span className="text-white font-semibold text-lg">Estimated Total</span>
                        <div className="text-right">
                            <span className="text-3xl font-semibold text-primary tabular-nums">KES {totalPrice.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                    Predictable billing. You are paying a flat KES 1,499 for the first 110 clients. Any user beyond that is just KES 5 each.
            </div>
        </div>
    );
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Simple Pricing"
                subtitle="Transparent pricing built for scaling your network smoothly."
            />

            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 max-w-5xl mx-auto">

                        {/* Hotspot Pricing */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-surface-container-low rounded-3xl p-10 lg:p-14 text-white border border-white/5 transition-all hover:border-white/20 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-semibold tracking-tight">Hotspot Billing</h3>
                                <span className="material-symbols-outlined text-3xl text-primary">wifi_tethering</span>
                            </div>

                            <div className="mb-10 border-b border-white/5 pb-8">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-2xl font-medium text-primary">KES</span>
                                    <span className="text-5xl lg:text-6xl font-semibold tracking-tight tabular-nums">1,499</span>
                                </div>
                                <p className="text-sm text-on-surface-variant font-normal">Monthly flat fee for up to 110 users</p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Up to 110 concurrent clients covered",
                                    "KES 5 per additional user",
                                    "Zero hidden transaction fees",
                                    "Integrated STK Push Included",
                                    "24/7 technical support"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4 text-sm font-normal text-white">
                                        <span className="material-symbols-outlined text-primary text-lg">check</span>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link href="/apply">
                                <button className="w-full bg-primary text-white border-transparent px-6 py-4 rounded-xl font-medium text-base hover:bg-primary/90 transition-all border">
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
                            className="bg-primary-container rounded-3xl p-10 lg:p-14 text-white border border-primary/40 transition-all flex flex-col shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-semibold tracking-tight">PPPoE Management</h3>
                                <span className="material-symbols-outlined text-3xl text-white">router</span>
                            </div>

                            <div className="mb-10 border-b border-white/20 pb-8">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-2xl font-medium text-white">KES</span>
                                    <span className="text-5xl lg:text-6xl font-semibold tracking-tight tabular-nums">28</span>
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
                                    <div key={i} className="flex items-start gap-4 text-sm font-normal text-white">
                                        <span className="material-symbols-outlined text-white text-lg">check</span>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <Link href="/apply">
                                <button className="w-full bg-white text-primary-container border-transparent px-6 py-4 rounded-xl font-medium text-base hover:bg-gray-100 transition-all">
                                    Get Started
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Combined Package - Sovereign Tier */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-surface-container-low rounded-3xl p-12 lg:p-16 text-white border border-white/5 text-center mb-32 max-w-5xl mx-auto"
                    >
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-white">Unified Billing Package</h3>
                            <p className="text-lg text-on-surface-variant mb-12 font-normal leading-relaxed">
                                Need both services? Manage Hotspot profiles and PPPoE authentication all under a single dashboard panel.
                            </p>
                            <Link href="/apply">
                                <button className="bg-primary text-white border-transparent px-10 py-4 rounded-xl font-medium text-base hover:bg-primary/90 transition-all shadow-md">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Calculator tool */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
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
