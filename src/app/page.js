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
        <div className="min-h-screen bg-[#06070A] text-on-surface overflow-hidden relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(75,29,143,0.28),_transparent_36%),radial-gradient(circle_at_85%_15%,_rgba(98,255,173,0.12),_transparent_24%)]" />

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="max-w-2xl"
                        >
                            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
                                Reliable control <br />
                                <span className="text-primary">for ISP billing</span>
                            </h1>
                            <p className="mt-6 text-lg text-on-surface-variant leading-8 max-w-xl">
                                Orchestrate PPPoE, Hotspot billing, and network operations with a calmer, more focused workflow.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link href="/apply">
                                    <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary/90">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="/features">
                                    <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10">
                                        Explore Features
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                            className="lg:w-[90%] lg:absolute lg:-right-[45%] relative mt-16 lg:mt-0"
                        >
                            <div className="relative z-10 overflow-hidden border-y border-l border-white/10 shadow-[0_0_120px_rgba(75,29,143,0.2)]">
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
                </div>
            </section>

            {/* TRUSTED PARTNERS */}
            <section className="relative z-10 min-h-screen flex items-center border-y border-white/5 bg-white/[0.025] py-14">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.35em] text-white/35">
                        Industry standard infrastructure
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 lg:gap-20 opacity-100">
                        <Image src="/cloudflare.png" alt="Cloudflare" width={240} height={80} className="h-16 sm:h-20 lg:h-24 w-auto max-w-[220px] object-contain" />
                        <Image src="/digitalocean.png" alt="DigitalOcean" width={280} height={80} className="h-16 sm:h-20 lg:h-24 w-auto max-w-[260px] object-contain" />
                        <Image src="/safaricom.png" alt="Safaricom" width={240} height={80} className="h-16 sm:h-20 lg:h-24 w-auto max-w-[220px] object-contain" />
                    </div>
                </div>
            </section>

            {/* NETWORK VIEW SECTION */}
            <section className="relative z-10 min-h-screen flex items-center overflow-hidden py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5 text-white leading-tight">
                                Real-time <br />
                                <span className="text-primary">infrastructure intelligence</span>
                            </h2>
                            <p className="text-lg leading-8 text-on-surface-variant">
                                Every session, every connection, and every heartbeat is visible in one place.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-[90%] lg:absolute lg:-right-[45%] relative mt-16 lg:mt-0"
                        >
                            <div className="overflow-hidden border-y border-l border-white/10 shadow-2xl">
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
            <section className="relative z-10 min-h-screen flex items-center border-y border-white/5 bg-white/[0.025] py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="mb-10 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Core Ecosystem</h2>
                        <p className="mt-3 text-lg text-on-surface-variant">
                            Everything you need to run a high-performance ISP, wrapped in a calmer experience.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="md:col-span-2 rounded-[24px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                                <span className="material-symbols-outlined text-2xl">terminal</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white">PPPoE orchestration</h3>
                            <p className="mt-3 max-w-md text-base leading-7 text-on-surface-variant">
                                Automated provisioning, precise shaping, and real-time disconnect logic for modern network teams.
                            </p>
                        </div>

                        <div className="rounded-[24px] bg-primary p-8 text-white shadow-[0_20px_60px_rgba(75,29,143,0.25)]">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                                <span className="material-symbols-outlined text-2xl">payments</span>
                            </div>
                            <h3 className="text-xl font-semibold">M-Pesa native</h3>
                            <p className="mt-3 text-sm leading-7 text-white/80">
                                Direct STK push integration keeps billing flowing and sessions activating in seconds.
                            </p>
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-8">
                            <h3 className="text-lg font-semibold text-white">Smart graphing</h3>
                            <p className="mt-3 text-base leading-7 text-on-surface-variant">
                                Deep visibility into bandwidth usage and hardware health without clutter.
                            </p>
                        </div>

                        <div className="md:col-span-2 flex flex-col justify-between gap-6 rounded-[24px] border border-white/10 bg-white/[0.05] p-8 md:flex-row md:items-center">
                            <div>
                                <h3 className="text-2xl font-semibold text-white">Scale effortlessly</h3>
                                <p className="mt-2 max-w-md text-base leading-7 text-on-surface-variant">
                                    Move from a handful of subscribers to thousands without changing your management workflow.
                                </p>
                            </div>
                            <Link href="/apply">
                                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="relative z-10 min-h-screen flex items-center py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Designed for growth</h2>
                        <p className="mt-3 text-lg text-on-surface-variant">Simple, predictable, and transparent.</p>
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
                        <div className="flex flex-col rounded-[24px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.16)]">
                            <h3 className="text-xl font-semibold text-white">Hotspot billing</h3>
                            <div className="mt-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-semibold text-white">KES 1,500</span>
                                    <span className="text-sm text-on-surface-variant">/mo</span>
                                </div>
                                <p className="mt-2 text-sm text-on-surface-variant">
                                    First 110 clients. Then <span className="font-semibold text-white">KES 13</span> per extra user.
                                </p>
                            </div>
                            <ul className="mt-8 flex-grow space-y-3">
                                {[
                                    "Unlimited voucher generation",
                                    "Automated STK verification",
                                    "Real-time session control",
                                    "Daily income ledgers"
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/75">
                                        <span className="material-symbols-outlined text-primary text-lg">check</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/apply">
                                <button className="mt-8 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                        <div className="flex flex-col rounded-[24px] bg-primary p-8 text-white shadow-[0_20px_60px_rgba(75,29,143,0.28)]">
                            <h3 className="text-xl font-semibold">PPPoE enterprise</h3>
                            <div className="mt-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-semibold">KES 28</span>
                                    <span className="text-sm text-white/70">/user</span>
                                </div>
                                <p className="mt-2 text-sm text-white/70">Per active concurrent session.</p>
                            </div>
                            <ul className="mt-8 flex-grow space-y-3">
                                {[
                                    "Dynamic queue management",
                                    "Self-service client portal",
                                    "Auto-suspension logic",
                                    "Mikrotik API integration"
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                                        <span className="material-symbols-outlined text-lg">check</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/apply">
                                <button className="mt-8 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-gray-100">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10 min-h-screen flex items-center mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-12">
                <div className="w-full">
                    <div className="mb-6 text-center sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Intelligence base</h2>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.05]"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                    className="flex w-full items-center justify-between gap-3 p-4 text-left sm:p-5"
                                >
                                    <span className={`text-sm font-medium leading-6 transition-colors sm:text-base ${openFaq === index ? 'text-primary' : 'text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 material-symbols-outlined text-lg transition-transform duration-300 sm:text-xl ${openFaq === index ? 'rotate-180 text-primary' : 'text-white/25'}`}>
                                        expand_more
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-4 pb-4 text-sm leading-7 text-white/70 sm:px-5 sm:pb-5"
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

            {/* FOOTER CTA */}
            <section className="relative z-10 min-h-screen flex items-center justify-center py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mx-auto max-w-4xl px-6"
                >
                    <h2 className="mb-8 text-4xl sm:text-5xl font-semibold tracking-tight text-white">Ready to PACE?</h2>
                    <Link href="/apply">
                        <button className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary/90">
                            Apply for Access
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}