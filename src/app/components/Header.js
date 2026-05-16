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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
            scrolled ? 'bg-[#131313]/95 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent border-transparent'
        } backdrop-blur-xl py-6`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                    <Image src="/logo.png" alt="PACE Logo" width={110} height={40} className="object-contain" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="text-white/70 font-medium hover:text-white transition-colors duration-300 text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/apply">
                        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-transform active:scale-95 border border-primary/20 hidden md:block">
                            Get Started
                        </button>
                    </Link>
                    
                    {/* Mobile Toggle */}
                    <button 
                        className="md:hidden text-white p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#131313] border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white/70 font-medium hover:text-white transition-colors text-base"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/apply" onClick={() => setMobileMenuOpen(false)} className="text-primary font-medium text-base pt-4 border-t border-white/5">
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
