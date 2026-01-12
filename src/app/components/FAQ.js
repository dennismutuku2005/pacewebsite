"use client";
import React, { useState } from 'react';

const faqs = [
    {
        question: "How does Tappi help my business?",
        answer: "Tappi provides tools to help you build an online presence, gather customer reviews, and launch effective ads on social media to find and retain customers."
    },
    {
        question: "Is Tappi free to use?",
        answer: "Tappi offers a free tier that gives you a business website. We also have premium plans for advanced features like ad management and deeper customer insights."
    },
    {
        question: "Can I manage my ads from Tappi?",
        answer: "Yes! You can create and manage social media ads (Facebook, Instagram) directly from the Tappi dashboard with simplified tools designed for small businesses."
    },
    {
        question: "How do reviews help my business?",
        answer: "Reviews build trust with potential customers. Tappi makes it easy to collect and showcase positive reviews, improving your online reputation."
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
                        Everything you need to know about Tappi and how we work.
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
