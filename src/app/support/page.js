"use client"
import React, { useState } from 'react';
import PageHero from "../components/PageHero";
import { motion } from 'framer-motion';

export default function Support() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Customer Support"
                title="We're Here to Help"
                subtitle="Reach out to our engineering support team for MikroTik setup assistance, Daraja API questions, or general guidance."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
                    {/* Contact Channels */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-[#0E111C]/80 border border-white/10 text-center relative overflow-hidden group hover:border-purple-500/30 transition-all"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mx-auto mb-5">
                                <span className="material-symbols-outlined text-2xl">mail</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Email Support</h3>
                            <p className="text-xs text-slate-400 mb-5">General inquiries & onboarding</p>
                            <a href="mailto:hey@pace.com" className="text-purple-400 font-medium hover:text-purple-300 text-xs inline-block bg-purple-500/10 px-5 py-2.5 rounded-xl border border-purple-500/20 transition-all">
                                hey@pace.com
                            </a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-2xl bg-[#0E111C]/80 border border-white/10 text-center relative overflow-hidden group hover:border-purple-500/30 transition-all"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mx-auto mb-5">
                                <span className="material-symbols-outlined text-2xl">call</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Phone & WhatsApp</h3>
                            <p className="text-xs text-slate-400 mb-5">Direct engineering hotline</p>
                            <a href="tel:+254741390949" className="text-purple-400 font-medium hover:text-purple-300 text-xs inline-block bg-purple-500/10 px-5 py-2.5 rounded-xl border border-purple-500/20 transition-all">
                                +254 741 390 949
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto bg-[#0E111C]/90 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
                >
                    <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Send a Direct Message</h3>
                    <p className="text-xs text-slate-400 mb-8">Our support team responds within 15 minutes during standard operations.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                required
                                placeholder="Your Name" 
                                className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs" 
                            />
                            <input 
                                type="text" 
                                placeholder="ISP / Company Name" 
                                className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs" 
                            />
                        </div>
                        <input 
                            type="email" 
                            required
                            placeholder="Email Address" 
                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs" 
                        />
                        <textarea 
                            rows={4} 
                            required
                            placeholder="How can we assist your network operations?" 
                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs resize-none" 
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-md shadow-purple-600/25 active:scale-95 cursor-pointer"
                        >
                            {sent ? 'Message Sent Successfully!' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
