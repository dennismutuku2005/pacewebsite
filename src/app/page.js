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
        <div className="min-h-screen bg-background text-on-surface overflow-hidden">
            {/* HERO SECTION - DARK MODE FORCED */}
            <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[85vh] bg-background">
                {/* Left side contained content */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:block">
                    <div className="lg:w-1/2 lg:pr-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-loose lg:leading-tight mb-8 text-white">
                                Reliable Control <br/>for ISP Billing
                            </h1>
                            <p className="text-on-surface-variant text-lg max-w-lg mb-10 leading-relaxed font-normal">
                                Orchestrate PPPoE, Hotspot Billing, and Network Operations with an easy-to-use ledger. Fully integrated and ready for scale.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-16 lg:mb-0">
                                <Link href="/apply">
                                    <button className="px-10 py-4 bg-primary text-white rounded-xl font-medium transition-all hover:bg-primary/90 shadow-lg border border-transparent">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side bleeding / squeezed dashboard image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full h-[280px] sm:h-[400px] mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-[55vw] lg:h-[120%] z-0"
                    >
                        {/* Hidden gradient mask on mobile (so image doesn't get cut off), shown on desktop */}
                        <div className="w-full h-full relative lg:[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_100%)] [-webkit-mask-image:none] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_100%)]">
                            <Image 
                                src="/hero.png" 
                                alt="PACE Dashboard" 
                                fill 
                                className="object-contain lg:object-cover object-center lg:object-left-top"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DEDICATED PARTNERS SECTION */}
            <section className="py-16 border-y border-white/5 opacity-80 bg-surface-container-low overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto px-6 lg:px-12 text-center"
                >
                    <p className="text-sm font-medium mb-12 text-on-surface-variant tracking-[0.2em] uppercase">Trusted Infrastructure Partners</p>
                    <div className="relative w-full flex items-center justify-center">
                        <div className="flex flex-nowrap justify-start lg:justify-center items-center gap-10 lg:gap-32 w-full overflow-x-auto snap-x snap-mandatory py-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                            <div className="relative w-28 h-12 lg:w-56 lg:h-24 flex-shrink-0 snap-center"><Image src="/cloudflare.png" alt="Cloudflare" fill className="object-contain" /></div>
                            <div className="relative w-36 h-12 lg:w-64 lg:h-24 flex-shrink-0 snap-center"><Image src="/digitalocean.png" alt="DigitalOcean" fill className="object-contain" /></div>
                            <div className="relative w-28 h-12 lg:w-48 lg:h-24 flex-shrink-0 snap-center"><Image src="/safaricom.png" alt="Safaricom" fill className="object-contain" /></div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* DARK MODE SECTIONS */}
            <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-3xl font-semibold tracking-tight mb-6 text-white">Live Network View</h3>
                        <p className="text-on-surface-variant leading-relaxed font-normal mb-8 max-w-lg">
                            Monitor every PPPoE session and Hotspot identity with ease. Our interface mirrors your network instantly without complex setups.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-surface-container-low border border-white/5 rounded-xl">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl font-semibold">12</div>
                                <div>
                                    <p className="text-xs font-semibold text-white tracking-wider">Active Alerts</p>
                                    <p className="text-[10px] text-on-surface-variant font-medium">Core Node Hub-01</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-surface-container-low border border-white/5 rounded-2xl shadow-xl relative aspect-[16/9]"
                    >
                        <Image 
                            src="/entries.png" 
                            alt="Live Entries" 
                            fill 
                            className="object-contain sm:object-cover rounded-2xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Services Bento */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -80 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: "-100px" }} 
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 bg-surface-container-low border border-white/5 p-12 rounded-2xl relative group shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-white">PPPoE Automation</h3>
                        <p className="text-on-surface-variant leading-relaxed max-w-md font-normal">
                            Complete subscriber provisioning with tight bandwidth control. Our system manages low-latency sessions for hundreds of concurrent users without manual input.
                        </p>
                        <div className="mt-8 flex gap-3">
                            <span className="px-4 py-2 bg-background rounded-md text-xs font-medium text-white/80 border border-white/5">VLAN Support</span>
                            <span className="px-4 py-2 bg-background rounded-md text-xs font-medium text-white/80 border border-white/5">Dynamic Shaping</span>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 80 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: "-100px" }} 
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-surface-container-low border border-white/5 p-12 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-white">M-Pesa Built In</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-normal">
                            Zero-friction payment collection. We handle the Daraja configuration so sessions activate immediately via MPESA STK push.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -80 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: "-100px" }} 
                        transition={{ duration: 0.6 }}
                        className="bg-surface-container-low border border-white/5 p-12 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-white">Network Graphing</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed font-normal">
                            View bandwidth spikes and active routing faults in a unified console. Monitor hardware stress proactively.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 80 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true, margin: "-100px" }} 
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 bg-primary-container border border-primary/20 p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 group shadow-lg"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-white">Bring your operations online</h3>
                            <p className="text-white/70 max-w-sm font-normal">No coding or deployment required from you. Fill out the application form and our team configures your network.</p>
                        </div>
                        <Link href="/apply">
                            <button className="px-8 py-3 bg-white text-primary-container rounded-xl font-medium hover:bg-gray-200 transition-colors">
                                Fill Application Form
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-32 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h3 className="text-4xl font-semibold tracking-tight text-white">Simple Pricing</h3>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
                        {/* Hotspot Pricing */}
                        <motion.div 
                            initial={{ opacity: 0, x: -80 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-surface-container-low border border-white/5 p-10 rounded-3xl flex flex-col hover:border-white/20 transition-colors shadow-lg"
                        >
                            <h4 className="text-xl font-medium tracking-wide mb-2 text-white">Hotspot Billing</h4>
                            <div className="text-4xl font-semibold mb-6 text-white">KES 1,500<span className="text-base font-normal text-on-surface-variant ml-2">/mo</span></div>
                            <p className="text-sm text-on-surface-variant mb-8">Covers up to 110 concurrent users. Overage is just KES 8 each.</p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3 text-sm text-white font-normal">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                                    Voucher Generation Engine
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white font-normal">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                                    M-PESA STK Push Ready
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white font-normal">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                                    Daily Income Ledgers
                                </li>
                            </ul>
                            <Link href="/apply">
                                <button className="w-full py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all border border-transparent">Get Started</button>
                            </Link>
                        </motion.div>
                        
                        {/* PPPoE Pricing */}
                        <motion.div 
                            initial={{ opacity: 0, x: 80 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-primary-container p-10 rounded-3xl border border-primary/50 text-white flex flex-col shadow-lg"
                        >
                            <h4 className="text-xl font-medium tracking-wide mb-2 text-white">PPPoE Subscriptions</h4>
                            <div className="text-4xl font-semibold mb-6 text-white">KES 28<span className="text-base font-normal text-white/70 ml-2">/user</span></div>
                            <p className="text-sm text-white/70 mb-8">Billed monthly based on active database clients.</p>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3 text-sm font-normal text-white">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                                    Automated Activations
                                </li>
                                <li className="flex items-center gap-3 text-sm font-normal text-white">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                                    Bandwidth Throttling Scripts
                                </li>
                                <li className="flex items-center gap-3 text-sm font-normal text-white">
                                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                                    Automated Suspension Rules
                                </li>
                            </ul>
                            <Link href="/apply">
                                <button className="w-full py-4 bg-white text-primary-container font-medium rounded-xl hover:bg-gray-200 transition-all">Get Started</button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Matrix */}
            <section className="py-32 max-w-3xl mx-auto px-6 lg:px-12 font-inter overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl font-semibold tracking-tight text-white">Common Questions</h3>
                </motion.div>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                className="bg-surface-container-low border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-white/10"
                            >
                                <button 
                                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                >
                                    <span className={`font-medium text-base transition-colors ${openFaq === index ? 'text-primary' : 'text-white'}`}>{faq.question}</span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                                        expand_more
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-6 text-on-surface-variant font-normal leading-relaxed text-sm bg-surface-container-low"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}