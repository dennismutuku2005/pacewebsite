"use client"
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';

function HotspotCalculator() {
    const [clients, setClients] = useState(110);

    const baseFee = 1499;
    const limit = 110;
    const overageRate = 8;

    const overageUnits = Math.max(0, clients - limit);
    const totalPrice = baseFee + (overageUnits * overageRate);

    return (
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-figtree">Hotspot Price Calculator</h3>

            <div className="max-w-md mx-auto space-y-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4 font-figtree">
                        Estimated Number of Clients: <span className="text-tappi-purple font-bold text-lg">{clients}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="5"
                        value={clients}
                        onChange={(e) => setClients(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-tappi-purple"
                    />
                    <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium font-figtree">
                        <span>0 Clients</span>
                        <span>1000+ Clients</span>
                    </div>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 transition-all duration-300">
                    <div className="flex justify-between items-center mb-4 font-figtree">
                        <span className="text-gray-600">Base Fee (Up to 110)</span>
                        <span className="font-semibold text-gray-900">KES 1,499</span>
                    </div>
                    {overageUnits > 0 && (
                        <div className="flex justify-between items-center mb-4 text-sm font-figtree">
                            <span className="text-gray-600">Overage ({overageUnits} x KES 8)</span>
                            <span className="font-semibold text-gray-900">KES {overageUnits * overageRate}</span>
                        </div>
                    )}
                    <div className="border-t border-purple-200 pt-4 mt-4 flex justify-between items-center font-figtree">
                        <span className="text-gray-900 font-bold text-lg">Estimated Total</span>
                        <div className="text-right">
                            <span className="text-3xl font-bold text-tappi-purple">KES {totalPrice.toLocaleString()}</span>
                            <p className="text-xs text-gray-500 mt-1">per month</p>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-gray-500 italic font-figtree leading-relaxed">
                    "Our Hotspot plan is a flat KSH 1,499 per month for up to 110 clients. Beyond that, it's just KSH 8 per additional client."
                </p>
            </div>
        </div>
    );
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Simple, Transparent Pricing"
                subtitle="Pay only for what you use. No hidden fees, no surprises."
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

                        {/* Hotspot Pricing */}
                        <ScrollReveal delay={0.1}>
                            <div className="relative bg-gradient-to-br from-tappi-purple to-tappi-purple-dark rounded-3xl p-8 lg:p-10 text-white border border-white/10 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-bold">Hotspot Billing</h3>
                                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-5xl lg:text-6xl font-bold">1,499</span>
                                            <span className="text-2xl font-semibold">KES</span>
                                        </div>
                                        <p className="text-purple-200 text-lg">Monthly Flat Fee (Up to 110 clients)</p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-tappi-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-purple-100">Covers base allowance of 110 clients</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-tappi-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-purple-100">Only KES 8 per additional client beyond 110</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-tappi-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-purple-100">Predictable monthly revenue flow</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-tappi-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-purple-100">Automated billing and invoicing</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-tappi-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-purple-100">Voucher management system</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-tappi-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-purple-100">24/7 technical support</span>
                                        </div>
                                    </div>

                                    <Link href="/apply">
                                        <button className="w-full bg-white text-tappi-purple px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                                            Get Started with Hotspot
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* PPPoE Pricing */}
                        <ScrollReveal delay={0.2}>
                            <div className="relative bg-gradient-to-br from-tappi-green to-green-600 rounded-3xl p-8 lg:p-10 text-white border border-white/10 transition-all duration-300">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-bold">PPPoE Billing</h3>
                                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-5xl lg:text-6xl font-bold">28</span>
                                            <span className="text-2xl font-semibold">KES</span>
                                        </div>
                                        <p className="text-green-100 text-lg">per active user per month</p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-green-50">Fixed per-user pricing</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-green-50">Automated user management</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-green-50">Bandwidth management tools</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-green-50">Package & plan management</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-green-50">Self-service customer portal</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-green-50">Priority support included</span>
                                        </div>
                                    </div>

                                    <Link href="/apply">
                                        <button className="w-full bg-white text-tappi-green px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                                            Get Started with PPPoE
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Combined Package */}
                    <ScrollReveal delay={0.3}>
                        <div className="relative bg-[#0A0A0A] rounded-3xl p-8 lg:p-12 text-white overflow-hidden border border-white/5">
                            <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10 text-center max-w-4xl mx-auto">
                                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    🎉 BEST VALUE
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Complete WISP Solution</h3>
                                <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
                                    Get both Hotspot and PPPoE billing systems with special bundled pricing
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold mb-2">Save More</h4>
                                        <p className="text-sm text-orange-100">Special discount on combined services</p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold mb-2">Unified Dashboard</h4>
                                        <p className="text-sm text-orange-100">Manage everything from one place</p>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold mb-2">Priority Setup</h4>
                                        <p className="text-sm text-orange-100">Fast-track implementation</p>
                                    </div>
                                </div>

                                <Link href="/apply">
                                    <button className="bg-white text-tappi-orange-mid px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all inline-flex items-center gap-2">
                                        Get Complete Solution
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pricing Calculator */}
                    <ScrollReveal delay={0.4}>
                        <div className="mt-20 max-w-4xl mx-auto">
                            <HotspotCalculator />
                        </div>
                    </ScrollReveal>

                    {/* FAQ Section */}
                    <ScrollReveal delay={0.4}>
                        <div className="mt-20 max-w-3xl mx-auto">
                            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Pricing FAQs</h3>

                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">How is the Hotspot billing calculated?</h4>
                                    <p className="text-gray-600">Our Hotspot plan is a flat KSH 1,499 per month. This covers up to 110 clients. If you go over 110, you are simply charged KSH 8 for each additional client beyond that limit.</p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">What counts as a "user" for PPPoE pricing?</h4>
                                    <p className="text-gray-600">A user is any active PPPoE account in your system. You're only charged for active users each month - inactive accounts don't count.</p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">Are there any setup fees?</h4>
                                    <p className="text-gray-600">No hidden fees! Setup and onboarding are completely free. You only pay the monthly fees based on your usage.</p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h4 className="font-bold text-gray-900 mb-2">Can I switch plans later?</h4>
                                    <p className="text-gray-600">Absolutely! You can upgrade from Hotspot-only or PPPoE-only to the combined solution at any time. Contact our support team for assistance.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
