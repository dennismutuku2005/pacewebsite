import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050014] text-gray-400 py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="text-3xl font-extrabold tracking-tight text-white mb-6 block">tappi</Link>
                        <p className="text-sm leading-relaxed mb-8 max-w-xs">
                            Convert one-time customers into loyal ones by getting discovered, growing leads and building your business reputation.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                                    <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/faqs" className="hover:text-white transition-colors">FAQS</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">tappi Tapper</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h4 className="text-white font-bold mb-6">Contact us</h4>
                        <div className="space-y-6 text-sm">
                            <p>Email: <a href="mailto:hey@tappi.app" className="text-tappi-green hover:underline">hey@tappi.app</a></p>

                            <div>
                                <p className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-2">KENYA Address</p>
                                <p>Mitsumi Business Park, 4th Floor,</p>
                                <p>Muthithi Rd, Westlands, Nairobi, Kenya</p>
                                <p className="mt-1">Call/WhatsApp: +254 715 412061</p>
                            </div>

                            <div>
                                <p className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-2">NIGERIA Address</p>
                                <p>Plot 8 Providence Street, Venia Business Hub,</p>
                                <p>Lekki Phase I, Lagos, Nigeria</p>
                                <p className="mt-1">Call/WhatsApp: +234 913 6000 761</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} Tappi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
