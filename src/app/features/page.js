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
                "Node Health Status",
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
        <div className="min-h-screen bg-background">
            <PageHero
                title="System Features"
                subtitle="High-performance tools for Internet Service Providers."
            />

            {/* Features Feed */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                {features.map((feature, index) => {
                    const isReversed = index % 2 !== 0;

                    return (
                        <div key={index} className={`${index > 0 ? 'mt-32' : ''}`}>
                            <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
                                <motion.div 
                                    initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-1"
                                >
                                    <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center text-primary mb-6 border border-white/5">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">{feature.title}</h3>
                                    <p className="text-base text-on-surface-variant font-normal leading-relaxed mb-8">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {feature.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-4 text-white/80 font-normal text-sm">
                                                <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/apply">
                                        <button className="bg-surface-container-highest border border-white/5 text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-white/10 transition-all">
                                            Get Started
                                        </button>
                                    </Link>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex-1 w-full"
                                >
                                    <div className="bg-surface-container-low rounded-3xl p-1 border border-white/5 h-[300px] lg:h-[400px] flex items-center justify-center shadow-lg group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                        <span className="material-symbols-outlined text-8xl text-primary/30 group-hover:scale-110 transition-transform duration-500 relative z-10">{feature.icon}</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <div className="bg-primary-container relative overflow-hidden py-32 mt-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
                            Ready to Start?
                        </h2>
                        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto font-normal">
                            Join hundreds of WISPs running their operations seamlessly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/apply">
                                <button className="bg-white text-primary-container px-10 py-4 rounded-xl font-medium text-base shadow-md hover:bg-gray-100 transition-all">
                                    Get Started
                                </button>
                            </Link>
                            <Link href="/pricing">
                                <button className="px-10 py-4 border border-white/20 text-white rounded-xl font-medium text-base hover:bg-white/10 transition-all">
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
