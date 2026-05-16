"use client"
import React from 'react';
import PageHero from "../components/PageHero";
import { motion } from 'framer-motion';

export default function Support() {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Support Center"
                subtitle="Get assistance from our technical team. We are here to help."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                    {/* Contact Channels */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-md bg-white/5 border border-white/10 text-center relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-primary mx-auto mb-6">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                            <p className="text-on-surface-variant font-normal text-sm mb-6 opacity-60">For general inquiries</p>
                            <a href="mailto:hey@pacewisp.co.ke" className="text-primary font-bold hover:underline text-sm inline-block bg-primary/5 px-6 py-3 rounded-sm border border-primary/20 transition-all">hey@pace.com</a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-10 rounded-md bg-white/5 border border-white/10 text-center relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-tertiary mx-auto mb-6">
                                <span className="material-symbols-outlined text-3xl">call</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                            <p className="text-on-surface-variant font-normal text-sm mb-6 opacity-60">Available Mon-Fri 8am-5pm</p>
                            <a href="tel:+254741390949" className="text-tertiary font-bold hover:underline text-sm inline-block bg-tertiary/5 px-6 py-3 rounded-sm border border-tertiary/20 transition-all">+254 74139 0949</a>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-md p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Send a Message</h3>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full bg-white/5 px-5 py-4 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 font-normal text-sm" 
                            />
                            <input 
                                type="text" 
                                placeholder="Company" 
                                className="w-full bg-white/5 px-5 py-4 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 font-normal text-sm" 
                            />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full bg-white/5 px-5 py-4 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 font-normal text-sm" 
                        />
                        <textarea 
                            rows="5" 
                            placeholder="Describe what you need help with..." 
                            className="w-full bg-white/5 px-5 py-4 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all resize-none text-white placeholder-white/30 font-normal text-sm"
                        ></textarea>
                        
                        <div className="pt-6 border-t border-white/10">
                            <button 
                                type="button" 
                                className="w-full bg-primary text-white px-8 py-5 rounded-sm font-bold text-lg hover:bg-primary/90 transition-all shadow-xl active:scale-95"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
