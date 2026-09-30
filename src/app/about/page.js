"use client"
import React from 'react';
import Image from "next/image";
import PageHero from "../components/PageHero";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="About PACE"
                title="Built for High-Growth WISPs"
                subtitle="Empowering network providers with automated subscriber provisioning, M-Pesa billing, and MikroTik core orchestration."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                {/* Our Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-6">Our Mission & Origin</h3>
                        <div className="space-y-4 text-slate-300/85 font-normal leading-relaxed text-sm sm:text-base">
                            <p>
                                Born from firsthand experience operating wireless ISP deployments, PACE was engineered because traditional legacy billing tools were sluggish, complicated, and fragile.
                            </p>
                            <p>
                                We unified MikroTik RouterOS API control directly with real-time M-Pesa STK push reconciliation. Today, PACE empowers WISPs to manage thousands of concurrent subscribers effortlessly.
                            </p>
                            <p>
                                We believe network engineers should focus on expanding physical coverage—not troubleshooting manual billing records. PACE automates the entire subscriber lifecycle from voucher generation to router queue shaping.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl h-[340px] sm:h-[380px] w-full flex items-center justify-center overflow-hidden border border-white/10 bg-[#0E111C]/90 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/15 via-transparent to-indigo-600/10" />
                        <Image
                            src="/logo.png"
                            alt="PACE Infrastructure"
                            width={220}
                            height={80}
                            className="w-44 h-auto object-contain opacity-80"
                        />
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0E111C]/80 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all"
                    >
                        <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-5 text-purple-400">
                            <span className="material-symbols-outlined text-2xl">route</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                        <p className="text-slate-300/80 leading-relaxed font-normal text-xs sm:text-sm">
                            To empower network operators with seamless automation tools, enabling them to expand high-speed internet access without operational friction.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0E111C]/80 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all"
                    >
                        <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-5 text-purple-400">
                            <span className="material-symbols-outlined text-2xl">public</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                        <p className="text-slate-300/80 leading-relaxed font-normal text-xs sm:text-sm">
                            To be the premier operating system for Internet Service Providers across emerging markets, scaling subscriber growth through rock-solid reliability.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-10 text-center">Core Engineering Principles</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Precision",
                                desc: "Infrastructure requires exactness. Every payment trigger and router session queue is mapped with sub-second accuracy.",
                                icon: "api",
                            },
                            {
                                title: "Resilience",
                                desc: "Our architecture is decoupled. Active router traffic remains completely uninterrupted even during upstream synchronizations.",
                                icon: "network_check",
                            },
                            {
                                title: "Partnership",
                                desc: "We are an extension of your engineering team, supporting your capacity upgrades as your subscriber base expands.",
                                icon: "handshake",
                            }
                        ].map((value, i) => (
                            <div key={i} className="bg-[#0E111C]/80 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                                    <span className="material-symbols-outlined text-xl">{value.icon}</span>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-white">{value.title}</h4>
                                <p className="text-slate-300/80 leading-relaxed font-normal text-xs sm:text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
