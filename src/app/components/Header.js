"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownTimeout = useRef(null);

    const handleMouseEnter = (menu) => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="absolute top-0 w-full z-50 border-b border-white/5 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-extrabold tracking-tight hover:opacity-90 transition-opacity z-50 relative">
                        <span className="text-white font-rubik">tappi</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        {/* Company Mega Menu Trigger */}
                        <div
                            className="relative h-24 flex items-center"
                            onMouseEnter={() => handleMouseEnter('company')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={`flex items-center gap-2 text-[15px] font-medium transition-colors ${activeDropdown === 'company' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                            >
                                Company
                                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Mega Dropdown */}
                            <AnimatePresence>
                                {activeDropdown === 'company' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl p-6 ring-1 ring-black/5 overflow-hidden">
                                            <div className="grid grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-xs font-bold text-tappi-purple uppercase tracking-wider mb-4">Company</h3>
                                                    <div className="space-y-2">
                                                        <Link href="/about" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                                            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 text-sm">About Us</h4>
                                                                <p className="text-gray-500 text-xs mt-0.5">Our mission & story</p>
                                                            </div>
                                                        </Link>
                                                        <Link href="/careers" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                                            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-tappi-purple group-hover:bg-tappi-purple group-hover:text-white transition-all">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 text-sm">Careers</h4>
                                                                <p className="text-gray-500 text-xs mt-0.5">Join our diverse team</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-xs font-bold text-tappi-purple uppercase tracking-wider mb-4">Resources</h3>
                                                    <div className="space-y-2">
                                                        <Link href="/blog" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 text-sm">Blog</h4>
                                                                <p className="text-gray-500 text-xs mt-0.5">Latest news & articles</p>
                                                            </div>
                                                        </Link>
                                                        <Link href="/support" className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 text-sm">Help & Supported</h4>
                                                                <p className="text-gray-500 text-xs mt-0.5">Get answers fast</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Action Bar */}
                                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                                <p className="text-sm font-medium text-gray-900">Ready to get started?</p>
                                                <Link href="/signup" className="text-sm font-bold text-tappi-purple hover:underline">
                                                    Sign up for free &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Resources Trigger (kept simple or similar logic, for now I integrated into Company as per 'Company > Resources' visual in request, but let's keep separate top level too) */}
                        {/* User request image had "Company" and "Resources" headers inside one dropdown. I did that above. 
                But the top nav has "Resources" too. 
                I'll make "Resources" top nav item just open the SAME or a different dropdown.
                Actually, let's keep "Resources" separate for clarity but uses same styling. 
            */}
                        <div
                            className="relative h-24 flex items-center"
                            onMouseEnter={() => handleMouseEnter('resources')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className={`flex items-center gap-2 text-[15px] font-medium transition-colors ${activeDropdown === 'resources' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                            >
                                Resources
                                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'resources' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-4"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl p-4 ring-1 ring-black/5 overflow-hidden">
                                            <div className="space-y-1">
                                                <Link href="/blog" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                                                    <h4 className="font-semibold text-gray-900 text-sm">Blog</h4>
                                                    <p className="text-gray-500 text-xs mt-0.5">Read our latest articles</p>
                                                </Link>
                                                <Link href="/faqs" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                                                    <h4 className="font-semibold text-gray-900 text-sm">FAQs</h4>
                                                    <p className="text-gray-500 text-xs mt-0.5">Common questions</p>
                                                </Link>
                                                <Link href="/support" className="block p-3 rounded-lg hover:bg-purple-50 transition-colors">
                                                    <h4 className="font-semibold text-gray-900 text-sm">Support</h4>
                                                    <p className="text-gray-500 text-xs mt-0.5">Contact us</p>
                                                </Link>
                                            </div>
                                            <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                                                <Link href="/support" className="text-xs font-bold text-tappi-purple flex items-center justify-center gap-2">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                                    Chat to support
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/blog" className="text-[15px] font-medium text-white/90 hover:text-white transition-colors">Blog</Link>
                    </div>

                    {/* Auth Buttons + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden lg:block text-[15px] font-medium text-white hover:text-gray-200 transition-colors">
                            Login
                        </Link>
                        <Link href="/signup" className="hidden lg:block bg-tappi-green text-white px-6 py-2.5 rounded-lg font-bold hover:bg-green-600 transition-all hover:shadow-[0_4px_12px_rgba(44,179,74,0.3)] hover:-translate-y-0.5 text-sm md:text-[15px]">
                            Get started
                        </Link>

                        {/* Hamburger Button */}
                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full sm:w-[350px] bg-white z-50 lg:hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-gray-100">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-extrabold text-tappi-purple">tappi</Link>
                                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                <div className="space-y-4">
                                    <div className="pb-4 border-b border-gray-100">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Company</p>
                                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 hover:text-tappi-purple">About Us</Link>
                                        <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 hover:text-tappi-purple">Careers</Link>
                                    </div>
                                    <div className="pb-4 border-b border-gray-100">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Resources</p>
                                        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 hover:text-tappi-purple">Blog</Link>
                                        <Link href="/support" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 hover:text-tappi-purple">Support</Link>
                                        <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-gray-900 hover:text-tappi-purple">FAQs</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-100 space-y-3 bg-gray-50">
                                <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-3 font-bold text-gray-900 hover:text-tappi-purple border border-gray-300 rounded-xl bg-white">
                                    Login
                                </Link>
                                <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-3 font-bold text-white bg-tappi-green rounded-xl hover:bg-green-600 shadow-lg shadow-green-500/20">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
