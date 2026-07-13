"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "What infrastructure does PACE support?",
            answer: "PACE integrates directly with MikroTik API ports, OLTs, and RADIUS hubs. It supports PPPoE, IPOE, and Hotspot vouchers with real-time session management."
        },
        {
            question: "How does the M-Pesa STK Push integration work?",
            answer: "Our system connects to Safaricom's Daraja API. When a user checks out, an STK push is instantly sent to their phone. Upon PIN entry, PACE verifies the payment and activates the subscriber's session within 60 seconds."
        },
        {
            question: "Is there a limit on concurrent subscribers?",
            answer: "Our system supports unlimited subscribers. The actual network scaling is only limited by your hardware (NAS) throughput."
        },
        {
            question: "How reliable is the database connection?",
            answer: "Even if your core database connection is momentarily interrupted, active sessions remain stable. Data reconnects and synchronizes seamlessly when the link restores."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-on-surface overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 z-20">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
                                Reliable Control <br/>
                                <span className="text-primary">for ISP Billing</span>
                            </h1>
                            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-normal">
                                Orchestrate PPPoE, Hotspot Billing, and Network Operations with an intuitive ledger. Fully integrated and ready for scale.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/apply">
                                    <button className="px-10 py-4 bg-primary text-white rounded-lg font-bold transition-all hover:bg-primary/90 shadow-xl">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="/features">
                                    <button className="px-10 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-bold backdrop-blur-md hover:bg-white/10 transition-all">
                                        Features
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="lg:w-[90%] lg:absolute lg:-right-[45%] relative mt-16 lg:mt-0"
                    >
                        <div className="relative z-10 rounded-none overflow-hidden border-y border-l border-white/10 shadow-[0_0_120px_rgba(75,29,143,0.2)]">
                            <Image 
                                src="/hero.png" 
                                alt="PACE Dashboard" 
                                width={1600}
                                height={1000}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TRUSTED PARTNERS */}
            <section className="py-40 relative z-10 border-y border-white/5 bg-[#0D0D0D]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <p className="text-[10px] font-bold mb-16 text-center text-white/20 tracking-[0.4em] uppercase">Industry Standard Infrastructure</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-40 opacity-90">
                        <Image src="/cloudflare.png" alt="Cloudflare" width={240} height={80} className="h-14 lg:h-20 w-auto object-contain" />
                        <Image src="/digitalocean.png" alt="DigitalOcean" width={280} height={80} className="h-16 lg:h-24 w-auto object-contain" />
                        <Image src="/safaricom.png" alt="Safaricom" width={240} height={80} className="h-16 lg:h-24 w-auto object-contain" />
                    </div>
                </div>
            </section>

            {/* NETWORK VIEW SECTION */}
            <section className="py-32 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white leading-tight">
                                Real-time <br/>Infrastructure <span className="text-primary">Intelligence</span>
                            </h2>
                            <p className="text-on-surface-variant text-lg leading-relaxed font-normal mb-10">
                                Every session, every connection, every heartbeat. We monitor your network hierarchy so you can focus on expansion.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-[90%] lg:absolute lg:-right-[45%] relative mt-16 lg:mt-0"
                        >
                            <div className="rounded-none overflow-hidden border-y border-l border-white/10 shadow-2xl">
                                <Image 
                                    src="/entries.png" 
                                    alt="Live Entries" 
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICES BENTO GRID */}
            <section className="py-32 relative z-10 bg-[#0F0F0F]/50 backdrop-blur-3xl border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Core Ecosystem</h2>
                        <p className="text-on-surface-variant text-lg font-normal">Everything you need to run a high-performance ISP.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 p-12 bg-white/5 border border-white/10 rounded-xl">
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined text-3xl">terminal</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white">PPPoE Orchestration</h3>
                            <p className="text-on-surface-variant text-lg leading-relaxed font-normal max-w-md">
                                Automated subscriber provisioning with precise bandwidth shaping. Native VLAN support and real-time disconnection logic.
                            </p>
                        </div>
                        
                        <div className="p-12 bg-primary text-white rounded-xl shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-3xl">payments</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">M-Pesa Native</h3>
                                <p className="text-white/80 leading-relaxed font-normal">
                                    Direct STK Push integration. Payments settle and sessions activate in seconds.
                                </p>
                            </div>
                        </div>

                        <div className="p-12 bg-white/5 border border-white/10 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-white">Smart Graphing</h3>
                            <p className="text-on-surface-variant leading-relaxed font-normal">
                                Deep visibility into bandwidth usage and hardware health.
                            </p>
                        </div>

                        <div className="md:col-span-2 p-12 bg-white/5 border border-white/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-12">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-white">Scale Effortlessly</h3>
                                <p className="text-on-surface-variant text-lg font-normal max-w-sm">From 10 to 10,000+ users without changing your management workflow.</p>
                            </div>
                            <Link href="/apply">
                                <button className="px-10 py-4 bg-white text-black rounded-lg font-bold hover:scale-105 transition-all shadow-xl">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-bold tracking-tight text-white mb-6">Designed for Growth</h2>
                        <p className="text-on-surface-variant text-xl font-normal">Simple, predictable, and transparent.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
                        {/* Hotspot */}
                        <div className="p-10 bg-white/5 border border-white/10 rounded-lg flex flex-col hover:border-white/20 transition-all shadow-xl">
                            <h3 className="text-xl font-bold mb-8 text-white">Hotspot Billing</h3>
                            <div className="mb-10">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-white">KES 1,500</span>
                                    <span className="text-sm text-on-surface-variant">/mo</span>
                                </div>
                                <p className="text-sm text-on-surface-variant">First 110 clients. Then <span className="text-white font-bold">KES 13</span> per extra user.</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Unlimited Voucher Generation",
                                    "Automated STK Verification",
                                    "Real-time Session Control",
                                    "Daily Income Ledgers"
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                        <span className="material-symbols-outlined text-primary text-lg">check</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/apply">
                                <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">Get Started</button>
                            </Link>
                        </div>
                        
                        {/* PPPoE */}
                        <div className="p-10 bg-primary text-white rounded-lg flex flex-col shadow-2xl">
                            <h3 className="text-xl font-bold mb-8">PPPoE Enterprise</h3>
                            <div className="mb-10">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold">KES 28</span>
                                    <span className="text-sm text-white/70">/user</span>
                                </div>
                                <p className="text-sm text-white/70">Per active concurrent session.</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Dynamic Queue Management",
                                    "Self-Service Client Portal",
                                    "Auto-Suspension Logic",
                                    "Mikrotik API Integration"
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                                        <span className="material-symbols-outlined text-lg">check</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/apply">
                                <button className="w-full py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 max-w-3xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Intelligence Base</h2>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                        >
                            <button 
                                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-8 text-left group"
                            >
                                <span className={`font-bold transition-colors ${openFaq === index ? 'text-primary' : 'text-white'}`}>{faq.question}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-primary' : 'text-white/20'}`}>
                                    expand_more
                                </span>
                            </button>
                            <AnimatePresence>
                                {openFaq === index && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-8 pb-8 text-white/60 font-normal leading-relaxed"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="py-40 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto px-6"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-12">Ready to PACE?</h2>
                    <Link href="/apply">
                        <button className="px-12 py-5 bg-primary text-white rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40">
                            Apply for Access
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}