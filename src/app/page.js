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
            answer: "PACE integrates directly with MikroTik RouterOS API ports, OLTs, and RADIUS authentication hubs. It supports PPPoE queues, IPoE, and Hotspot vouchers with instantaneous session control."
        },
        {
            question: "How does the M-Pesa STK Push integration work?",
            answer: "Our system connects securely to Safaricom's Daraja API. When a subscriber checks out, an STK push prompt is sent immediately to their mobile number. Upon PIN verification, PACE reconciles the payment and activates the user session within seconds."
        },
        {
            question: "Is there a limit on concurrent subscribers?",
            answer: "PACE is engineered for horizontal scalability with unlimited subscriber support. Your network throughput is only bounded by your physical MikroTik hardware capacity."
        },
        {
            question: "How reliable is the database and session synchronization?",
            answer: "Even during momentary upstream interruptions, active customer sessions continue uninterrupted on your MikroTik core. Data and accounting ledgers automatically reconnect and synchronize as soon as connectivity resumes."
        }
    ];

    return (
        <div className="min-h-screen bg-[#08090E] text-on-surface overflow-hidden relative selection:bg-purple-600/30 selection:text-white font-inter">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(139,92,246,0.18),transparent_70%)]" />
            <div className="pointer-events-none absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
            <div className="pointer-events-none absolute top-[55%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[160px]" />

            {/* HERO SECTION */}
            <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
                <div className="w-full relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        {/* Text Left Column (5 cols) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="lg:col-span-5 max-w-xl pl-6 sm:pl-10 lg:pl-16 xl:pl-28 pr-6 z-20"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.08] text-white">
                                Reliable control <br />
                                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                                    for ISP billing & core.
                                </span>
                            </h1>

                            <p className="mt-5 text-base text-slate-300/85 leading-relaxed">
                                Orchestrate PPPoE subscriber queues, Hotspot captive portals, and M-Pesa automated billing with a high-performance, focused interface.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3.5">
                                <Link href="/apply">
                                    <button className="rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider transition-all shadow-lg shadow-purple-600/25 active:scale-95 cursor-pointer">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="/features">
                                    <button className="rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-white transition-all backdrop-blur-md active:scale-95 cursor-pointer">
                                        Explore Features
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Image Right Column (7 cols - Touches Screen Edge, Cut Directly by Right Edge) */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                            className="lg:col-span-7 relative w-full pl-6 sm:pl-10 lg:pl-0 pr-0"
                        >
                            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[75vh] min-h-[460px] max-h-[820px] rounded-2xl lg:rounded-r-none lg:rounded-l-3xl overflow-hidden border border-white/10 lg:border-r-0 bg-[#0E111C]/90 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_100px_rgba(139,92,246,0.2)]">
                                <Image
                                    src="/hero.png"
                                    alt="PACE Dashboard Interface"
                                    fill
                                    className="object-cover object-left-top block"
                                    priority
                                    unoptimized
                                />
                                {/* Clean glass sheen overlay on left border */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CLEAN DATA VIEW (Left Screen Edge Bleed Image) */}
            <section className="relative z-10 py-20 lg:py-28 overflow-hidden">
                <div className="w-full relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        {/* Image Left Column (7 cols - Touches Left Screen Edge, Cut Directly by Left Edge) */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="lg:col-span-7 relative w-full pr-6 sm:pr-10 lg:pr-0 pl-0 order-2 lg:order-1"
                        >
                            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[75vh] min-h-[460px] max-h-[820px] rounded-2xl lg:rounded-l-none lg:rounded-r-3xl overflow-hidden border border-white/10 lg:border-l-0 bg-[#0E111C]/90 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_100px_rgba(139,92,246,0.2)]">
                                <Image
                                    src="/entries.png"
                                    alt="Clean Data View Ledger"
                                    fill
                                    className="object-cover object-left-top block"
                                    unoptimized
                                />
                                {/* Clean glass sheen overlay on right border */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-purple-500/10 via-transparent to-transparent" />
                            </div>
                        </motion.div>

                        {/* Text Right Column (5 cols) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-5 max-w-xl pl-6 sm:pl-10 lg:pl-4 xl:pl-8 pr-6 sm:pr-10 lg:pr-16 xl:pr-28 z-20 order-1 lg:order-2"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-2">Clean Data View</span>
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                                Real-time infrastructure <br />
                                <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                                    intelligence & monitoring.
                                </span>
                            </h2>
                            <p className="mt-4 text-base text-slate-300/80 leading-relaxed">
                                Every subscriber session, bandwidth spike, and router heartbeat is indexed in real-time. Gain complete visibility into your ISP operations without cognitive overload.
                            </p>
                            
                            <div className="mt-8 space-y-3">
                                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                    <div className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-white">Automated Provisioning</h4>
                                        <p className="text-xs text-slate-400 mt-0.5">Dynamic creation and modification of PPPoE secrets and hotspot users.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-white">Instant Payment Reconciliation</h4>
                                        <p className="text-xs text-slate-400 mt-0.5">Automatic M-Pesa transaction matching with zero operator intervention.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CORE ECOSYSTEM BENTO GRID */}
            <section className="relative z-10 border-t border-white/[0.06] bg-white/[0.015] py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="mb-12 max-w-2xl">
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-2">Capabilities</span>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Engineered for Modern WISPs</h2>
                        <p className="mt-3 text-base text-slate-300/80">
                            Everything you need to operate, bill, and scale your internet service provider with ease.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div className="md:col-span-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04] p-8 transition-colors">
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                <span className="material-symbols-outlined text-xl">terminal</span>
                            </div>
                            <h3 className="text-xl font-medium text-white">PPPoE & Queue Orchestration</h3>
                            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-lg">
                                Automated client provisioning, granular bandwidth rate-limiting, and instant disconnect logic triggered upon billing cycle completion.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 hover:bg-purple-950/30 p-8 transition-colors">
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                                <span className="material-symbols-outlined text-xl">payments</span>
                            </div>
                            <h3 className="text-xl font-medium text-white">Native M-Pesa Engine</h3>
                            <p className="mt-2 text-sm text-slate-300/80 leading-relaxed">
                                Direct STK push integration ensures fast subscriber renewals and automated account activation in under 30 seconds.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04] p-8 transition-colors">
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                <span className="material-symbols-outlined text-xl">signal_cellular_alt</span>
                            </div>
                            <h3 className="text-lg font-medium text-white">Bandwidth & Traffic Graphing</h3>
                            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                Deep visual metrics on real-time port utilization, interface dropouts, and hardware resource health.
                            </p>
                        </div>

                        <div className="md:col-span-2 flex flex-col justify-between gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04] p-8 md:flex-row md:items-center transition-colors">
                            <div>
                                <h3 className="text-xl font-medium text-white">Scale from 50 to 50,000+ Subscribers</h3>
                                <p className="mt-1.5 max-w-lg text-sm text-slate-400 leading-relaxed">
                                    Expand your network footprint across multiple MikroTik routers without modifying your administration workflow.
                                </p>
                            </div>
                            <Link href="/apply">
                                <button className="rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap active:scale-95 shadow-md shadow-purple-600/20 cursor-pointer">
                                    Apply For Access
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING PLANS */}
            <section className="relative z-10 py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-2">Transparent Pricing</span>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple, Predictable Plans</h2>
                        <p className="mt-3 text-base text-slate-400">Everything is billed on actual usage without hidden maintenance fees.</p>
                    </div>

                    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
                        {/* Hotspot Plan */}
                        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8 transition-all hover:border-white/[0.15]">
                            <span className="text-xs font-medium uppercase tracking-wider text-purple-400">Captive Portal</span>
                            <h3 className="text-xl font-medium text-white mt-1">Hotspot Billing</h3>
                            <div className="mt-6 pb-6 border-b border-white/[0.06]">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-3xl sm:text-4xl font-semibold text-white">KES 1,500</span>
                                    <span className="text-xs text-slate-400 font-normal">/month</span>
                                </div>
                                <p className="mt-2 text-xs text-slate-400">
                                    Covers first 110 active clients. Then only <span className="font-semibold text-white">KES 13</span> per extra user.
                                </p>
                            </div>
                            <ul className="mt-6 flex-grow space-y-3">
                                {[
                                    "Unlimited voucher generation",
                                    "Instant M-Pesa STK verification",
                                    "Custom captive portal themes",
                                    "Real-time session authorization",
                                    "Daily automated revenue ledger"
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                                        <span className="text-emerald-400 font-bold">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/apply">
                                <button className="mt-8 w-full rounded-xl border border-purple-500/30 bg-purple-600/10 hover:bg-purple-600 text-purple-300 hover:text-white px-5 py-3 text-xs font-medium uppercase tracking-wider transition-all active:scale-95 cursor-pointer">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                        {/* PPPoE Plan */}
                        <div className="flex flex-col rounded-2xl border border-purple-500/30 bg-purple-950/20 p-8 relative shadow-[0_0_50px_rgba(139,92,246,0.12)]">
                            <div className="absolute top-4 right-4">
                                <span className="text-[10px] font-medium uppercase px-2.5 py-1 rounded-full bg-purple-500 text-white shadow-sm">Popular</span>
                            </div>
                            <span className="text-xs font-medium uppercase tracking-wider text-purple-300">Enterprise Fiber</span>
                            <h3 className="text-xl font-medium text-white mt-1">PPPoE Enterprise</h3>
                            <div className="mt-6 pb-6 border-b border-purple-500/20">
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-3xl sm:text-4xl font-semibold text-white">KES 28</span>
                                    <span className="text-xs text-purple-200/70 font-normal">/user/mo</span>
                                </div>
                                <p className="mt-2 text-xs text-purple-200/70">Per active concurrent customer session.</p>
                            </div>
                            <ul className="mt-6 flex-grow space-y-3">
                                {[
                                    "Dynamic queue & rate management",
                                    "Automated overdue service suspension",
                                    "Direct MikroTik RouterOS API sync",
                                    "Client self-care payment portal",
                                    "SMS alert dispatch integrations"
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-xs text-white">
                                        <span className="text-emerald-400 font-bold">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/apply">
                                <button className="mt-8 w-full rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 text-xs font-medium uppercase tracking-wider transition-all shadow-md shadow-purple-600/25 active:scale-95 cursor-pointer">
                                    Deploy PPPoE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="relative z-10 border-t border-white/[0.06] bg-white/[0.015] py-20 lg:py-28">
                <div className="max-w-3xl mx-auto px-6 w-full">
                    <div className="mb-10 text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-2">FAQ</span>
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                    className="flex w-full items-center justify-between gap-3 p-4 text-left sm:p-5 transition-colors hover:bg-white/[0.02] cursor-pointer"
                                >
                                    <span className={`text-xs sm:text-sm font-medium transition-colors ${openFaq === index ? 'text-purple-400' : 'text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${openFaq === index ? 'rotate-180 text-purple-400' : 'text-slate-400'}`}>
                                        expand_more
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="px-4 pb-4 text-xs leading-relaxed text-slate-300 sm:px-5 sm:pb-5 border-t border-white/[0.04] pt-3"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative z-10 py-20 lg:py-28 text-center overflow-hidden">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="p-10 sm:p-14 rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/30 to-transparent relative shadow-[0_0_60px_rgba(139,92,246,0.1)]">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                            Ready to Transform Your ISP?
                        </h2>
                        <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 font-normal">
                            Join high-growth ISPs in Kenya running automated billing and MikroTik operations with PACE.
                        </p>
                        <Link href="/apply">
                            <button className="rounded-xl bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 text-xs font-medium uppercase tracking-wider transition-all shadow-lg shadow-purple-600/30 active:scale-95 cursor-pointer">
                                Apply For Access
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}