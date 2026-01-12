"use client"
import Link from 'next/link';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';

export default function ProductsPage() {
    const products = [
        {
            name: "Hotspot Billing System",
            description: "Complete voucher-based billing solution for public WiFi hotspots",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            ),
            features: [
                "Automated voucher generation",
                "Multiple package options",
                "Real-time revenue tracking",
                "Customer usage analytics",
                "Mobile money integration",
                "Reseller management"
            ],
            color: "purple"
        },
        {
            name: "PPPoE Management",
            description: "Advanced user management system for PPPoE connections",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            features: [
                "Automated user provisioning",
                "Bandwidth management",
                "Package scheduling",
                "FUP (Fair Usage Policy)",
                "Customer self-service portal",
                "Bulk operations support"
            ],
            color: "green"
        },
        {
            name: "Network Monitoring",
            description: "Real-time monitoring and analytics for your network infrastructure",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            features: [
                "Network uptime monitoring",
                "Bandwidth usage graphs",
                "Device status tracking",
                "Alert notifications",
                "Performance reports",
                "Historical data analysis"
            ],
            color: "blue"
        },
        {
            name: "Customer Portal",
            description: "Self-service portal for your customers to manage their accounts",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            features: [
                "Account management",
                "Payment history",
                "Package upgrades",
                "Support tickets",
                "Usage statistics",
                "Mobile-responsive design"
            ],
            color: "orange"
        },
        {
            name: "Payment Integration",
            description: "Seamless integration with multiple payment gateways",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            features: [
                "M-Pesa integration",
                "Bank transfers",
                "Card payments",
                "Automated reconciliation",
                "Payment reminders",
                "Invoice generation"
            ],
            color: "pink"
        },
        {
            name: "Reporting & Analytics",
            description: "Comprehensive business intelligence and reporting tools",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            features: [
                "Revenue reports",
                "Customer analytics",
                "Growth metrics",
                "Churn analysis",
                "Custom dashboards",
                "Export to Excel/PDF"
            ],
            color: "indigo"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            purple: {
                bg: "bg-tappi-purple/10",
                text: "text-tappi-purple",
                border: "border-tappi-purple/20",
                hover: "hover:border-tappi-purple"
            },
            green: {
                bg: "bg-tappi-green/10",
                text: "text-tappi-green",
                border: "border-tappi-green/20",
                hover: "hover:border-tappi-green"
            },
            blue: {
                bg: "bg-blue-50",
                text: "text-blue-600",
                border: "border-blue-200",
                hover: "hover:border-blue-600"
            },
            orange: {
                bg: "bg-orange-50",
                text: "text-orange-600",
                border: "border-orange-200",
                hover: "hover:border-orange-600"
            },
            pink: {
                bg: "bg-pink-50",
                text: "text-pink-600",
                border: "border-pink-200",
                hover: "hover:border-pink-600"
            },
            indigo: {
                bg: "bg-indigo-50",
                text: "text-indigo-600",
                border: "border-indigo-200",
                hover: "hover:border-indigo-600"
            }
        };
        return colors[color];
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Our Products"
                subtitle="Comprehensive solutions to power your WISP operations"
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Introduction */}
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Everything You Need to Run Your WISP
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Our integrated suite of products works seamlessly together to provide a complete management solution for wireless internet service providers of all sizes.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {products.map((product, index) => {
                            const colors = getColorClasses(product.color);
                            return (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className={`bg-white rounded-3xl p-8 border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col`}>
                                        <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 ${colors.text}`}>
                                            {product.icon}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                        <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>

                                        <div className="space-y-3">
                                            {product.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <svg className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {/* Integration Section */}
                    <ScrollReveal delay={0.3}>
                        <div className="bg-gradient-to-br from-tappi-purple to-tappi-purple-dark rounded-3xl p-12 text-white text-center">
                            <h3 className="text-3xl lg:text-4xl font-bold mb-4">All Products Work Together</h3>
                            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                                Our products are designed to integrate seamlessly, giving you a unified platform to manage every aspect of your WISP business.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-4xl font-bold mb-2">99.9%</div>
                                    <div className="text-purple-200">Uptime SLA</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-4xl font-bold mb-2">24/7</div>
                                    <div className="text-purple-200">Support</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-4xl font-bold mb-2">500+</div>
                                    <div className="text-purple-200">WISPs Served</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="text-4xl font-bold mb-2">100K+</div>
                                    <div className="text-purple-200">End Users</div>
                                </div>
                            </div>

                            <Link href="/apply">
                                <button className="bg-white text-tappi-purple px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-2xl inline-flex items-center gap-2">
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
