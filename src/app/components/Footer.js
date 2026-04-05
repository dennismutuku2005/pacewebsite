import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-surface-container-lowest border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <div className="text-2xl font-semibold tracking-tight text-white mb-6">PACE</div>
                        <p className="text-on-surface-variant font-normal text-sm leading-relaxed mb-6">
                            Complete billing, user management, and network monitoring system for modern Internet Service Providers.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-6">Products</h4>
                        <ul className="space-y-4">
                            <li><Link href="/products" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Hotspot Billing</Link></li>
                            <li><Link href="/products" className="text-on-surface-variant hover:text-primary transition-colors text-sm">PPPoE Management</Link></li>
                            <li><Link href="/products" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Network Monitoring</Link></li>
                            <li><Link href="/products" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Customer Portal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/careers" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Careers</Link></li>
                            <li><Link href="/blog" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Blog</Link></li>
                            <li><Link href="/support" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Contact Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/faqs" className="text-on-surface-variant hover:text-primary transition-colors text-sm">FAQs</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-on-surface-variant text-sm font-normal">
                        &copy; {new Date().getFullYear()} PaceWisp. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-on-surface-variant hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                        </Link>
                        <Link href="#" className="text-on-surface-variant hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
