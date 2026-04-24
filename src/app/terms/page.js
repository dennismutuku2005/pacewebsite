"use client";
import React from 'react';
import PageHero from "../components/PageHero";
import { motion } from 'framer-motion';

export default function Terms() {
    const sections = [
        {
            title: "1. Acceptance of Agreement",
            content: `You agree to the terms and conditions outlined in this Terms of Service Agreement ("Agreement") with respect to our software and services. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings.`
        },
        {
            title: "2. Service Overview",
            content: `Pace WISP provides a cloud-based management and billing platform for Wireless Internet Service Providers (WISPs). Our services include but are not limited to:\n\n• Hotspot Voucher Management System\n• PPPoE User Management & Billing\n• Network Monitoring & Analytics\n• Customer Self-Service Portals\n• Integrated Payment Processing`
        },
        {
            title: "3. Fees and Payments",
            content: `By using Pace WISP, you agree to the following pricing structure:\n\n• Hotspot Billing: KES 1,499 flat fee (up to 110 clients) + KES 8 per additional client.\n• PPPoE Management: KES 28 per active user per month.\n• Bundled Services: Custom pricing applies for providers using both systems, as agreed upon during setup.\n\nPayment is due within 7 days of the invoice date. Late payments may result in temporary service suspension.`
        },
        {
            title: "4. Account Responsibilities",
            content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify Pace WISP immediately of any unauthorized use of your account.`
        },
        {
            title: "5. Intellectual Property",
            content: `The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Service are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, or publication by you of any such matters or any part of the Service is strictly prohibited.`
        },
        {
            title: "6. User Data and Privacy",
            content: `Pace WISP acts as a data processor for your customer information. You maintain ownership of all data related to your customers. We will not use this data for any purpose other than providing the service to you.`
        },
        {
            title: "7. Support and Uptime",
            content: `We strive to provide 99.9% uptime for our platform. Technical support is available 24/7 for critical issues. Routine maintenance will be communicated at least 24 hours in advance.`
        },
        {
            title: "8. Limitation of Liability",
            content: `Pace WISP shall not be liable for any loss of revenue, data, or technical disruptions caused by external factors, including but not limited to, upstream ISP failures, hardware malfunctions on the client side, or power outages.`
        },
        {
            title: "9. Termination",
            content: `Either party may terminate this agreement with 30 days' written notice. Upon termination, you will have 14 days to export your data from the platform.`
        },
        {
            title: "10. Governing Law",
            content: `This Agreement shall be treated as though it were executed and performed in Kenya, and shall be governed by and construed in accordance with the laws of Kenya.`
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Terms of Service"
                subtitle="Please review our operational guidelines and legal agreements."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 pb-32">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <p className="text-on-surface-variant text-lg font-normal leading-relaxed">
                        Welcome to Pace WISP. By using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {sections.map((section, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
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
