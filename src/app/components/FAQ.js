"use client";
import React, { useState } from 'react';

const faqs = [
    {
        question: "What billing systems does Pace WISP support?",
        answer: "Pace WISP supports both Hotspot and PPPoE billing systems, giving you complete flexibility to manage your wireless internet service provider operations efficiently."
    },
    {
        question: "How much does Pace WISP cost?",
        answer: "Our pricing is simple and transparent: KES 1,499 flat fee (up to 110 clients) + KES 8 per additional client for Hotspot, and KES 28 per PPPoE user. This ensures predictable costs as your business grows."
    },
    {
        question: "Can Pace WISP integrate with my existing Routers?",
        answer: "Yes! Pace WISP seamlessly integrates with industry-leading platforms including Mikrotik routers, and we partner with Digital Ocean for reliable hosting. Our system is designed to work with your existing setup."
    },
    {
        question: "What features are included in the billing system?",
        answer: "Our comprehensive billing system includes automated invoicing, payment tracking, customer management, usage monitoring, bandwidth control, and detailed reporting. Everything you need to run your WISP efficiently."
    },
    {
        question: "Do you offer support and training?",
        answer: "Absolutely! We provide full technical support and comprehensive training to ensure your team can make the most of Pace WISP. Our partners include One Network, Trajon Byte, and Stream Mikrotik for extended support."
    },
    {
        question: "Can I try Pace WISP before committing?",
        answer: "Yes! We offer a demo and consultation to help you understand how Pace WISP can transform your WISP operations. Contact us through our Apply page to get started."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about Pace WISP and how we empower your business.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden transition-all duration-300 hover:border-tappi-purple/30"
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-tappi-purple' : 'text-gray-900'}`}>{faq.question}</span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
