"use client";
import React, { useState } from 'react';
import PageHero from "../components/PageHero";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            question: "What hardware and RouterOS versions does PACE support?",
            answer: "PACE connects directly with all MikroTik RouterOS v6.x and v7.x devices via the RouterOS API port (8728 / 8729 TLS). It also integrates with GPON OLTs, switches, and standard RADIUS authentication hubs."
        },
        {
            question: "How does the M-Pesa STK Push integration work?",
            answer: "Our system connects securely to Safaricom's Daraja API. When a subscriber initiates a voucher or monthly renewal purchase, an STK push is instantly dispatched to their mobile phone. Upon entering their MPESA PIN, PACE reconciles the transaction and activates the PPPoE secret or Hotspot session within 3 seconds."
        },
        {
            question: "What happens if our upstream internet connection is briefly interrupted?",
            answer: "Active client sessions and MikroTik queues continue functioning undisturbed locally on your hardware. When connectivity returns, PACE reconciles any cached logs and synchronizes the financial ledger automatically."
        },
        {
            question: "Is there any limit on concurrent subscribers?",
            answer: "No. PACE is engineered with horizontal scalability. Whether you manage 50 hotspot clients or 10,000+ PPPoE home broadband subscribers, your network throughput is only bounded by your physical MikroTik hardware capacity."
        },
        {
            question: "Can I manage multiple MikroTik routers in different locations?",
            answer: "Yes. PACE supports multi-site, multi-router deployments. You can manage multiple points of presence (PoPs) from a single unified admin dashboard."
        },
        {
            question: "How does customer self-care work?",
            answer: "PACE provides a responsive Customer Portal where subscribers can view their remaining bundle time, download payment receipts, renew their subscriptions with M-Pesa, and submit support tickets."
        }
    ];

    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Knowledge Base"
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about PACE billing architecture, MikroTik integration, and payment automation."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                    isOpen 
                                        ? 'border-purple-500/30 bg-[#0E111C]/90 shadow-[0_4px_25px_rgba(139,92,246,0.1)]' 
                                        : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenFaq(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                                >
                                    <span className="font-semibold text-white text-base sm:text-lg pr-4">
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                        isOpen 
                                            ? 'border-purple-500/40 bg-purple-500/10 text-purple-300 rotate-45' 
                                            : 'border-white/10 text-slate-400'
                                    }`}>
                                        <span className="text-xl font-light leading-none">+</span>
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeOut' }}
                                        >
                                            <div className="px-6 pb-6 pt-1 text-slate-300/85 text-sm sm:text-base leading-relaxed border-t border-white/[0.04]">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center p-8 rounded-2xl bg-[#0E111C]/60 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-2">Have a question not listed here?</h3>
                    <p className="text-xs text-slate-400 mb-6">Our technical team is available to assist you with custom topologies and requirements.</p>
                    <Link href="/support">
                        <button className="bg-purple-600 hover:bg-purple-500 text-white px-7 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-md shadow-purple-600/25 cursor-pointer">
                            Contact Support
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
