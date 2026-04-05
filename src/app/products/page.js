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
            ],
            color: "primary" 
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
            ],
            color: "tertiary" 
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
            ],
            color: "purple" 
        },
        {
            name: "Network Monitoring",
            description: "Top-level observability system for tracking hardware-layer packet stress.",
            icon: "query_stats",
            features: [
                "Live CPU/RAM Telemetry",
                "SNMP Node Polling",
                "Active Path Alerts",
                "Interface TX/RX Charting",
                "API Connection Tracking",
                "Historical Analytics"
            ],
            color: "green" 
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
            ],
            color: "orange" 
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
            ],
            color: "blue"
        }
    ];

    const getColorClasses = (colorName) => {
        const themeMap = {
            primary: { text: "text-primary" },
            tertiary: { text: "text-tertiary" },
            purple: { text: "text-[#6320EE]" },
            green: { text: "text-[#00D084]" },
            orange: { text: "text-orange-500" },
            blue: { text: "text-blue-500" }
        };
        return themeMap[colorName] || themeMap.primary;
    };

    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Our Products"
                subtitle="A fully integrated stack of control systems to run your network."
            />

            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {products.map((product, index) => {
                            const styles = getColorClasses(product.color);
                            return (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-surface-container-low rounded-2xl p-10 border border-white/5 h-full flex flex-col transition-all duration-300 relative overflow-hidden group hover:border-white/20"
                                >
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-14 h-14 bg-surface-container-highest border border-white/5 rounded-xl flex items-center justify-center mb-6">
                                            <span className={`material-symbols-outlined text-3xl ${styles.text}`}>
                                                {product.icon}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{product.name}</h3>
                                        <p className="text-on-surface-variant font-normal mb-8 flex-grow leading-relaxed text-sm">
                                            {product.description}
                                        </p>

                                        <div className="space-y-3 border-t border-white/5 pt-6">
                                            {product.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <span className={`material-symbols-outlined text-sm flex-shrink-0 ${styles.text}`}>check</span>
                                                    <span className="text-sm font-normal text-white">{feature}</span>
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
                        className="bg-surface-container-highest/20 border border-white/5 rounded-2xl p-12 text-center"
                    >
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-3xl font-semibold mb-4 tracking-tight text-white">System Cohesion</h3>
                            <p className="text-on-surface-variant text-lg mb-10 font-normal leading-relaxed">
                                Our modules are not isolated software patches. They run on a shared core engine. A payment triggers the ledger and activates the session simultaneously.
                            </p>

                            <Link href="/apply">
                                <button className="bg-primary text-white border-transparent px-8 py-4 rounded-xl font-medium text-base hover:bg-primary/90 transition-all shadow-md">
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
