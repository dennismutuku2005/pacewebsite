"use client"
import React from 'react';
import PageHero from "../components/PageHero";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function ProductsPage() {
    const products = [
        {
            name: "PPPoE Management",
            description: "Advanced authentication and provisioning for continuous-session broadband users.",
            icon: "router",
            features: [
                "Automated Router Credentials",
                "Bandwidth Management",
                "Session Disconnects",
                "Static IP Leasing",
                "PADI/PADO Log Trace",
                "Mass Resync Capabilities"
            ]
        },
        {
            name: "Hotspot Billing",
            description: "Distributed captive portal management for temporary user validation.",
            icon: "wifi_tethering",
            features: [
                "Time & Data Limit Policies",
                "Instant STK Push Access",
                "Batch Voucher Mining",
                "Concurrent Device Limits",
                "Bypass MAC Protocols",
                "Access Point Controllers"
            ]
        },
        {
            name: "Financial Ledgers",
            description: "High-accuracy transaction records synchronized with gateway nodes.",
            icon: "account_balance",
            features: [
                "M-Pesa Integrations",
                "Automated Reconciliation",
                "SMS Payment Receipts",
                "Revenue Charting",
                "Unmatched Payment Queue",
                "Exportable Data"
            ]
        },
        {
            name: "Network Monitoring",
            description: "Top-level observability system for tracking hardware-layer packet stress.",
            icon: "query_stats",
            features: [
                "Live CPU/RAM Telemetry",
                "SNMP Router Polling",
                "Active Path Alerts",
                "Interface TX/RX Charting",
                "API Connection Tracking",
                "Historical Analytics"
            ]
        },
        {
            name: "Access Controls",
            description: "Strict RBAC (Role-Based Access Control) for internal engineering teams.",
            icon: "gavel",
            features: [
                "Master Override Matrix",
                "Staff Policy View",
                "Action Locks",
                "Audit Trail Logging",
                "Session Hand-off",
                "2FA Authentication"
            ]
        },
        {
            name: "API Integrations",
            description: "Extensible headless interface for linking your external OSS/BSS systems.",
            icon: "cable",
            features: [
                "RESTful Webhooks",
                "Token Authentication",
                "JSON Payload Standards",
                "Payment Hooks",
                "Rate-limited Queries",
                "Extensible Schema"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Product Ecosystem"
                title="Unified Control Systems"
                subtitle="A fully integrated stack of control systems to run and scale your internet service provider."
            />

            <section className="py-20 bg-[#08090E]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {products.map((product, index) => {
                            return (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="bg-[#0E111C]/80 rounded-2xl p-8 border border-white/10 h-full flex flex-col transition-all duration-300 relative overflow-hidden group hover:border-purple-500/30 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)]"
                                >
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-5 text-purple-400">
                                            <span className="material-symbols-outlined text-2xl">
                                                {product.icon}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{product.name}</h3>
                                        <p className="text-slate-300/80 mb-6 flex-grow leading-relaxed text-xs sm:text-sm">
                                            {product.description}
                                        </p>

                                        <div className="space-y-2.5 border-t border-white/[0.08] pt-5">
                                            {product.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2.5">
                                                    <span className="text-purple-400 text-xs font-bold">✓</span>
                                                    <span className="text-xs text-slate-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Architectural Unity Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-950/30 via-[#0E111C] to-indigo-950/30 border border-purple-500/20 rounded-2xl p-10 lg:p-12 text-center relative overflow-hidden"
                    >
                        <div className="max-w-2xl mx-auto relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 tracking-tight text-white">Seamless System Cohesion</h3>
                            <p className="text-slate-300/85 text-sm sm:text-base mb-8 font-normal leading-relaxed">
                                Our modules are not isolated software patches. They operate seamlessly on a single shared core engine. A subscriber payment triggers the ledger and activates the MikroTik session in real time.
                            </p>

                            <Link href="/apply">
                                <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-lg shadow-purple-600/25 active:scale-95 cursor-pointer">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
