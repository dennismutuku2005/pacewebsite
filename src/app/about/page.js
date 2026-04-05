"use client"
import React from 'react';
import Image from "next/image";
import PageHero from "../components/PageHero";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="About Pace"
                subtitle="Empowering global network providers with stable control, real-time analytics, and smooth orchestration."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                {/* Our Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-semibold tracking-tight mb-8">Our Journey</h3>
                        <div className="space-y-6 text-on-surface-variant font-normal leading-relaxed text-base">
                            <p>
                                Founded from the need to manage wireless deployments, PACE was built because existing billing systems were too slow and too complex.
                            </p>
                            <p>
                                We merged simple routing logic directly with a fast business ledger. Today, we empower WISPs to serve thousands of clients smoothly, keeping the connections stable.
                            </p>
                            <p>
                                We believe providers shouldn't act like accountants. Pace automates the billing, so you can focus on building your network.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative glass-panel rounded-3xl h-[400px] w-full flex items-center justify-center overflow-hidden border border-white/5 shadow-md"
                    >
                        <Image
                            src="/logo.png"
                            alt="PACE Infrastructure"
                            width={300}
                            height={300}
                            className="w-48 h-48 object-contain opacity-40 mix-blend-screen"
                        />
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface-container-low border border-white/5 rounded-2xl p-10 relative overflow-hidden group"
                    >
                        <div className="w-16 h-16 bg-surface-container-highest border border-white/5 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">route</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                        <p className="text-on-surface-variant leading-relaxed font-normal text-sm">
                            To empower every network provider globally with smooth orchestration tools, allowing them to focus entirely on expanding their physical network without billing headaches.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-surface-container-low border border-white/5 rounded-2xl p-10 relative overflow-hidden group"
                    >
                        <div className="w-16 h-16 bg-surface-container-highest border border-white/5 rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-tertiary text-3xl">public</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                        <p className="text-on-surface-variant leading-relaxed font-normal text-sm">
                            To become the undisputed central tool for ISPs worldwide, automating management and connecting users reliably.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-semibold tracking-tight mb-12 text-center">Core Values</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Precision",
                                desc: "Infrastructure requires exactness. We write code that handles payments and sessions with accuracy.",
                                icon: "api",
                            },
                            {
                                title: "Resilience",
                                desc: "Our systems ensure your business survives hardware loops and database restarts.",
                                icon: "network_check",
                            },
                            {
                                title: "Partnership",
                                desc: "We are an extension of your own team. We scale exactly as your business grows.",
                                icon: "handshake",
                            }
                        ].map((value, i) => (
                            <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5">
                                <span className="material-symbols-outlined text-3xl text-primary mb-6 block">{value.icon}</span>
                                <h3 className="text-xl font-medium mb-3 text-white">{value.title}</h3>
                                <p className="text-on-surface-variant leading-relaxed font-normal text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
