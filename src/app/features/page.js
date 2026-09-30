"use client"
import React from 'react';
import PageHero from "../components/PageHero";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            icon: "wifi_tethering",
            title: "Hotspot Access",
            description: "A complete voucher-based authentication engine built for Wi-Fi deployments. Generate, manage, and distribute access tokens easily.",
            benefits: [
                "Automated Voucher Generation",
                "Sub-Reseller Management",
                "Live Revenue Logs",
                "Multi-Tier Packages"
            ]
        },
        {
            icon: "router",
            title: "PPPoE Management",
            description: "User provisioning for broadband operators. Manage your clients directly with MikroTik routers using strict bandwidth rules.",
            benefits: [
                "Automated Provisioning",
                "Queue Management (QoS)",
                "Automated Disconnects",
                "Mass Network Operations"
            ]
        },
        {
            icon: "account_balance",
            title: "Financial Integrations",
            description: "Integrate Daraja API for STK push. Handle transactions to activate sessions seamlessly.",
            benefits: [
                "STK Push Triggers",
                "Automated Reconciliation",
                "Instant Session Unlock",
                "Financial Reports"
            ]
        },
        {
            icon: "query_stats",
            title: "Network Monitoring",
            description: "Observability for tracking your hardware. Get insights into CPU, active sessions, and core router health.",
            benefits: [
                "Live Dashboard",
                "Bandwidth Graphs",
                "Router Health Status",
                "Data Exports"
            ]
        },
        {
            icon: "person",
            title: "Client Portal",
            description: "Give end-users a clean interface to query their session expiry, initiate STK push, and log connection faults.",
            benefits: [
                "Session Viewing",
                "M-Pesa Gateways",
                "Package Scaling",
                "Ticketing System"
            ]
        },
        {
            icon: "health_and_safety",
            title: "System Reliability",
            description: "Core session failover. Even if connection drops occur, active routing remains untouched.",
            benefits: [
                "Data Persistence",
                "Automated Backups",
                "Decoupled Webhooks",
                "Scalable Architecture"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Feature Suite"
                title="Engineered for Scalable WISPs"
                subtitle="High-performance billing, subscriber provisioning, and MikroTik automation tools."
            />

            {/* Features Feed */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                {features.map((feature, index) => {
                    const isReversed = index % 2 !== 0;

                    return (
                        <div key={index} className={`${index > 0 ? 'mt-24' : ''}`}>
                            <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 lg:gap-16`}>
                                <motion.div 
                                    initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-1"
                                >
                                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                                        <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed mb-6">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {feature.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium">
                                                <span className="text-emerald-400 font-bold">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/apply">
                                        <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-md shadow-purple-600/25 active:scale-95 cursor-pointer">
                                            Get Started
                                        </button>
                                    </Link>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex-1 w-full"
                                >
                                    <div className="bg-[#0E111C]/80 rounded-3xl p-8 border border-white/10 h-[260px] sm:h-[320px] lg:h-[360px] flex items-center justify-center shadow-xl group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent"></div>
                                        <span className="material-symbols-outlined text-7xl sm:text-8xl text-purple-400/30 group-hover:scale-110 group-hover:text-purple-400/50 transition-all duration-500 relative z-10">{feature.icon}</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden py-24 border-t border-white/[0.06] bg-gradient-to-b from-[#08090E] to-[#0E111C]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 tracking-tight">
                            Ready to Upgrade Your ISP Operations?
                        </h2>
                        <p className="text-base text-slate-300/80 mb-8 max-w-xl mx-auto font-normal">
                            Join hundreds of WISPs running automated billing and MikroTik core orchestration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                            <Link href="/apply">
                                <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-lg shadow-purple-600/25 cursor-pointer">
                                    Get Started
                                </button>
                            </Link>
                            <Link href="/pricing">
                                <button className="px-8 py-3.5 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white rounded-xl text-xs font-medium uppercase tracking-wider transition-all backdrop-blur-md cursor-pointer">
                                    View Pricing
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
