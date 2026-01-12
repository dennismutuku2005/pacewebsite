"use client"
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export default function Features() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
            title: "Hotspot Billing System",
            description: "Complete voucher-based billing solution designed specifically for public WiFi hotspots. Generate, manage, and track vouchers with ease.",
            benefits: [
                "Automated voucher generation",
                "Reseller management portal",
                "Real-time revenue tracking",
                "Multiple package options"
            ],
            color: "purple"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            title: "PPPoE Management",
            description: "Advanced user provisioning and bandwidth management for PPPoE connections. Automate your entire user lifecycle from signup to billing.",
            benefits: [
                "Automated user provisioning",
                "Bandwidth throttling & FUP",
                "Package scheduling",
                "Bulk operations support"
            ],
            color: "green"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            title: "Payment Integration",
            description: "Seamless integration with M-Pesa, bank transfers, and card payments. Automated reconciliation saves you hours of manual work.",
            benefits: [
                "M-Pesa STK Push",
                "Automated reconciliation",
                "Payment reminders",
                "Invoice generation"
            ],
            color: "orange"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Analytics & Reporting",
            description: "Comprehensive business intelligence with real-time dashboards. Make data-driven decisions to grow your WISP business.",
            benefits: [
                "Revenue reports",
                "Customer analytics",
                "Growth metrics",
                "Export to Excel/PDF"
            ],
            color: "blue"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            title: "Customer Portal",
            description: "Self-service portal for your customers to manage their accounts, view usage, make payments, and submit support tickets.",
            benefits: [
                "Account management",
                "Usage statistics",
                "Package upgrades",
                "Support tickets"
            ],
            color: "pink"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Network Monitoring",
            description: "Real-time monitoring of your network infrastructure. Get instant alerts when issues arise and track performance metrics.",
            benefits: [
                "Uptime monitoring",
                "Bandwidth graphs",
                "Device status tracking",
                "Alert notifications"
            ],
            color: "indigo"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            purple: { bg: "bg-purple-100", text: "text-tappi-purple", gradient: "from-tappi-purple to-tappi-purple-dark" },
            green: { bg: "bg-green-100", text: "text-tappi-green", gradient: "from-tappi-green to-green-600" },
            orange: { bg: "bg-orange-100", text: "text-orange-600", gradient: "from-orange-500 to-orange-600" },
            blue: { bg: "bg-blue-100", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
            pink: { bg: "bg-pink-100", text: "text-pink-600", gradient: "from-pink-500 to-pink-600" },
            indigo: { bg: "bg-indigo-100", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" }
        };
        return colors[color];
    };

    return (
        <div className="bg-white">
            <PageHero
                title="Powerful Features for WISPs"
                subtitle="Everything you need to run and grow your wireless internet service provider business."
            />

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {features.map((feature, index) => {
                    const colors = getColorClasses(feature.color);
                    const isReversed = index % 2 !== 0;

                    return (
                        <div key={index} className={`${index > 0 ? 'mt-32' : ''}`}>
                            <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                                <ScrollReveal className="flex-1">
                                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-8`}>
                                        {feature.icon}
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{feature.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {feature.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <svg className="w-5 h-5 text-tappi-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/apply">
                                        <button className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all`}>
                                            Get Started
                                        </button>
                                    </Link>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2} className="flex-1">
                                    <div className={`bg-gradient-to-br ${colors.gradient} rounded-3xl p-12 h-[400px] flex items-center justify-center shadow-2xl`}>
                                        <div className="text-white/20 text-center">
                                            {feature.icon}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your WISP?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join hundreds of WISPs already using Pace to streamline their operations and grow their business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/apply">
                                <button className="bg-tappi-purple text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-tappi-purple-dark transition-all hover:-translate-y-1 shadow-lg">
                                    Apply Now
                                </button>
                            </Link>
                            <Link href="/pricing">
                                <button className="bg-white text-tappi-purple px-10 py-4 rounded-xl font-bold text-lg border-2 border-tappi-purple hover:bg-tappi-purple hover:text-white transition-all">
                                    View Pricing
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
