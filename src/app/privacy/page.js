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
            content: `The data collected by Pace WISP is used exclusively to operate, maintain, and optimize network performance for our clients. We utilize active session data to throttle bandwidth, manage authentications, and generate accurate financial ledgers for your administrative review.`
        },
        {
            title: "3. Service Integrations",
            content: `Pace relies on third-party infrastructure for key operations. Network validation connects directly to your MikroTik or compliant routing hardware. Payment processing relies on the Safaricom Daraja API. By utilizing Pace, you consent to these secure hand-offs.`
        },
        {
            title: "4. Data Security",
            content: `We implement strict cryptographic security for all traffic bound to our web platforms. Your hardware API credentials (e.g., Winbox/API secrets) are securely hashed. However, it remains your operational obligation to secure your core hardware against physical or external network breaches.`
        },
        {
            title: "5. Subscriber Privacy Operations",
            content: `As an ISP functioning under Pace's umbrella, you are classified as the primary data controller for your individual subscribers. Pace WISP acts solely as the data processor. We do not aggregate, sell, or utilize your subscriber data for marking operations outside of providing the routing system.`
        },
        {
            title: "6. Data Retention",
            content: `Active session logs and network faults are retained temporarily for analytical and troubleshooting needs. Financial ledgers and payment receipts are retained historically to comply with general tax accounting standards and to offer you predictable revenue charting.`
        },
        {
            title: "7. Modifications to Policy",
            content: `We reserve the right to update these privacy structures as our technology suite evolves. Significant shifts concerning data handling or third-party integrations will be communicated to your administrative email address 14 days prior to taking effect.`
        }
    ];

    return (
        <div className="min-h-screen bg-background overflow-hidden">
            <PageHero
                title="Privacy Protocols"
                subtitle="Guidelines on how Pace securely processes network and account data."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 pb-32">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <p className="text-on-surface-variant text-lg font-normal leading-relaxed">
                        Pace WISP ("we", "our") holds your operational data in high regard. This policy outlines what we collect and how we strictly handle data as an infrastructure service provider.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {sections.map((section, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="bg-surface-container-low border border-white/5 rounded-2xl p-8 lg:p-12 shadow-lg hover:border-white/10 transition-colors"
                            >
                                <h2 className="text-2xl font-semibold mb-6 text-white tracking-tight">
                                    {section.title}
                                </h2>
                                <div className="text-on-surface-variant font-normal leading-relaxed whitespace-pre-wrap">
                                    {section.content}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
