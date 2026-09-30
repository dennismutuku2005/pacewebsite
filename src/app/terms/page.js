"use client";
import React from 'react';
import PageHero from "../components/PageHero";
import { motion } from 'framer-motion';

export default function Terms() {
    const sections = [
        {
            title: "1. Acceptance of Agreement",
            content: `You agree to the terms and conditions outlined in this Terms of Service Agreement ("Agreement") with respect to our software and services. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior agreements, representations, and warranties.`
        },
        {
            title: "2. Service Overview",
            content: `PACE provides a cloud-based management and billing platform for Internet Service Providers (WISPs). Our services include:\n\n• Hotspot Voucher Management System\n• PPPoE User Management & Automated Disconnection Logic\n• Network Monitoring & Mikrotik RouterOS API Sync\n• Customer Self-Service Portals\n• Automated M-Pesa STK Push Integration`
        },
        {
            title: "3. Fees and Billing",
            content: `By using PACE, you agree to the standard pricing tier:\n\n• Hotspot Billing: KES 1,500 flat fee (up to 110 clients) + KES 13 per additional client.\n• PPPoE Management: KES 28 per active concurrent user per month.\n\nInvoicing occurs monthly, and services remain active with automatic reconciliation.`
        },
        {
            title: "4. Account Responsibilities",
            content: `You are responsible for maintaining the confidentiality of your administrative credentials and router API secrets. You agree to notify PACE immediately upon discovering any unauthorized use of your account.`
        },
        {
            title: "5. Intellectual Property",
            content: `The interface, codebases, design architecture, and trademarks related to PACE are protected under applicable intellectual property laws. Redistribution or unauthorized reverse engineering is strictly prohibited.`
        },
        {
            title: "6. User Data and Ownership",
            content: `PACE acts as a data processor for your customer information. You maintain complete ownership of all subscriber records and financial transaction data. We do not monetize or share your subscriber data with third parties.`
        },
        {
            title: "7. Uptime and Infrastructure Resilience",
            content: `We engineer our software for 99.9% uptime. In the event of temporary cloud network interruptions, your physical MikroTik routing policies continue running uninterrupted locally.`
        },
        {
            title: "8. Governing Law",
            content: `This Agreement shall be governed by and construed in accordance with the laws of Kenya.`
        }
    ];

    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Legal & Terms"
                title="Terms of Service"
                subtitle="Please review our operational guidelines and platform service agreements."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 pb-28">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 p-6 rounded-2xl bg-[#0E111C]/80 border border-white/10"
                >
                    <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                        By accessing or utilizing PACE platforms and APIs, you agree to comply with the terms outlined below.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-[#0E111C]/80 border border-white/10 p-6 sm:p-8 rounded-2xl"
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 tracking-tight">
                                {section.title}
                            </h3>
                            <p className="text-slate-300/85 text-xs sm:text-sm font-normal leading-relaxed whitespace-pre-line">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
