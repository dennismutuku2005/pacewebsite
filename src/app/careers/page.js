"use client"
import React from 'react';
import PageHero from "../components/PageHero";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Careers() {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Careers at PACE"
                subtitle="Join our team and help build the software that powers internet providers."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center py-24 bg-surface-container-low rounded-3xl border border-white/5 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-surface-container-highest border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <span className="material-symbols-outlined text-4xl text-primary">engineering</span>
                        </div>
                        <h3 className="text-3xl font-semibold text-white mb-4">No Open Positions</h3>
                        <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-base font-normal leading-relaxed">
                            Our team is currently fully staffed. However, we are constantly on the lookout for talented individuals. Feel free to send your resume for future consideration.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="mailto:careers@pace.com" className="bg-primary/10 border border-primary/20 text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-all text-sm">
                                Send Resume
                            </a>
                            <Link href="/about" className="text-white font-medium hover:text-primary transition-colors text-sm flex items-center gap-2">
                                Learn about us
                                <span className="material-symbols-outlined text-sm flex-shrink-0">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
