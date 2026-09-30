"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/features' },
        { name: 'Products', href: '/products' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Support', href: '/support' },
    ];

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
            <nav className={`pointer-events-auto w-full max-w-5xl rounded-2xl border transition-all duration-300 ${
                scrolled
                    ? 'border-purple-500/25 bg-[#090B12]/90 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl py-2.5 px-5 sm:px-6'
                    : 'border-white/10 bg-[#090B12]/75 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl py-3 px-5 sm:px-7'
            }`}>
                <div className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="hover:opacity-90 transition-opacity flex items-center shrink-0">
                        <Image src="/logo.png" alt="PACE Logo" width={100} height={36} className="h-7 w-auto object-contain" priority />
                    </Link>

                    {/* Desktop Menu Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className="text-slate-300 hover:text-white font-medium transition-colors duration-200 text-xs uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center gap-3">
                        <Link href="/apply">
                            <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 sm:px-5 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all active:scale-95 shadow-md shadow-purple-600/25 hidden sm:block cursor-pointer">
                                Get Started
                            </button>
                        </Link>
                        
                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden text-slate-300 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden pt-4 pb-2 border-t border-white/10 mt-3"
                        >
                            <div className="flex flex-col gap-3">
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.name} 
                                        href={link.href} 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-slate-300 hover:text-white font-medium transition-colors text-xs uppercase tracking-wider py-1.5"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link 
                                    href="/apply" 
                                    onClick={() => setMobileMenuOpen(false)} 
                                    className="text-purple-400 font-medium text-xs uppercase tracking-wider pt-2 border-t border-white/5 flex items-center justify-between"
                                >
                                    <span>Get Started</span>
                                    <span>&rarr;</span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
