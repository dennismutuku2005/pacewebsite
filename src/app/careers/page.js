"use client"
import React from 'react';
import PageHero from "../components/PageHero";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Careers() {
    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Join PACE"
                title="Careers at PACE"
                subtitle="Build the modern billing, infrastructure orchestration, and API tooling that powers regional internet service providers."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center py-20 bg-[#0E111C]/80 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
                >
                    <div className="relative z-10 px-6">
                        <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-400">
                            <span className="material-symbols-outlined text-3xl">engineering</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">No Open Positions Currently</h3>
                        <p className="text-slate-300/80 max-w-xl mx-auto mb-8 text-xs sm:text-sm font-normal leading-relaxed">
                            Our core engineering team is currently fully staffed. However, we are always eager to connect with exceptional full-stack engineers and MikroTik network specialists.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                            <a href="mailto:hey@pace.com" className="bg-purple-600 hover:bg-purple-500 text-white px-7 py-3 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-md shadow-purple-600/25 cursor-pointer">
                                Send General Application
                            </a>
                            <Link href="/about" className="text-slate-300 hover:text-white px-7 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-medium uppercase tracking-wider transition-all flex items-center gap-2">
                                <span>About Us</span>
                                <span>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
