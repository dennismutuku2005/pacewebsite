"use client";
import React from 'react';
import PageHero from "../components/PageHero";
import { motion } from 'framer-motion';

export default function Privacy() {
    const sections = [
        {
            title: "1. Information Collection",
            content: `We collect information necessary to provide and manage internet infrastructure services. This includes account details, network configurations, subscriber usage metrics, and payment transaction logs routed through our APIs (such as M-Pesa STK payloads).`
        },
        {
            title: "2. How We Use Data",
            content: `The data collected by PACE is used exclusively to operate, maintain, and optimize network performance for our clients. We utilize active session data to shape bandwidth, manage authentications, and generate accurate financial ledgers for your administrative review.`
        },
        {
            title: "3. Service Integrations",
            content: `PACE connects directly with your MikroTik routing hardware via API/TLS. Payment processing integrates securely with the Safaricom Daraja API. By utilizing PACE, you consent to these operational integrations.`
        },
        {
            title: "4. Data Security",
            content: `We implement strict cryptographic security for all traffic bound to our platforms. Your hardware API credentials and access secrets are securely encrypted. However, it remains your operational obligation to secure your core hardware with proper firewall rules.`
        },
        {
            title: "5. Subscriber Privacy Operations",
            content: `As an ISP operating on PACE, you are classified as the primary data controller for your individual subscribers. PACE acts solely as the data processor. We do not aggregate, sell, or monetize your subscriber records.`
        },
        {
            title: "6. Data Retention",
            content: `Active session logs and network faults are retained for analytical and troubleshooting needs. Financial ledgers and payment receipts are retained historically to comply with tax and revenue accounting standards.`
        },
        {
            title: "7. Modifications to Policy",
            content: `We reserve the right to update these privacy structures as our technology suite evolves. Significant shifts concerning data handling will be communicated to your administrative account email address.`
        }
    ];

    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Legal & Privacy"
                title="Privacy Protocols"
                subtitle="Guidelines on how PACE securely processes network configurations, subscriber records, and transaction logs."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 pb-28">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 p-6 rounded-2xl bg-[#0E111C]/80 border border-white/10"
                >
                    <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                        PACE ("we", "our") holds your operational and customer data in high regard. This policy outlines what we collect and how we strictly handle data as an infrastructure service provider.
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
                            <p className="text-slate-300/85 text-xs sm:text-sm font-normal leading-relaxed">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
