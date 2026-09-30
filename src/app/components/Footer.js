import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-[#06070B] border-t border-white/[0.08] pt-16 pb-12 font-inter text-slate-400 overflow-hidden">
            {/* Ambient Background Light */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/[0.04] rounded-full blur-[140px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/[0.06]">
                    {/* Brand & Description (5 cols) */}
                    <div className="md:col-span-5 space-y-5">
                        <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <Image 
                                src="/logo.png" 
                                alt="PACE Logo" 
                                width={110} 
                                height={38} 
                                className="h-8 w-auto object-contain brightness-100" 
                            />
                        </Link>
                        <p className="text-xs sm:text-sm text-slate-400/90 leading-relaxed max-w-sm">
                            Complete billing, user management, and MikroTik network automation system for modern Internet Service Providers.
                        </p>
                    </div>

                    {/* Products Links (2 cols) */}
                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
                            Products
                        </h4>
                        <ul className="space-y-3 text-xs">
                            <li>
                                <Link href="/products" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>Hotspot Billing</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>PPPoE Management</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>Network Telemetry</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>Customer Portal</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links (3 cols) */}
                    <div className="md:col-span-3">
                        <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3 text-xs">
                            <li>
                                <Link href="/about" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>Careers</span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Hiring</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="hover:text-purple-300 transition-colors inline-flex items-center gap-1 group">
                                    <span>Contact Support</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links (2 cols) */}
                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-xs">
                            <li>
                                <Link href="/privacy" className="hover:text-purple-300 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-purple-300 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="hover:text-purple-300 transition-colors">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} PACE. All rights reserved.</p>
                    <p className="text-slate-500 flex items-center gap-1.5">
                        <span>Engineered for high-throughput MikroTik ISP networks</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
