"use client"
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-white">
            <PageHero
                title="About Pace WISP"
                subtitle="We're on a mission to empower wireless internet service providers across Africa with cutting-edge billing and management solutions."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {/* Our Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <ScrollReveal>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Founded in 2020, Pace WISP was born from a simple observation: wireless internet providers across Africa were struggling with outdated, complex billing systems that hindered their growth.
                                </p>
                                <p>
                                    We set out to change that. Today, we serve over 500 WISPs across Kenya, Tanzania, Uganda, and Nigeria, helping them manage 100,000+ end users efficiently. Our platform has processed millions in revenue and continues to grow alongside our partners.
                                </p>
                                <p>
                                    We believe that technology should empower, not complicate. That's why we build intuitive, powerful tools specifically designed for the unique challenges of wireless internet providers.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-tappi-purple to-tappi-purple-dark rounded-3xl h-[400px] w-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Pace WISP"
                                    width={300}
                                    height={300}
                                    className="w-64 h-64 object-contain opacity-20"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <ScrollReveal delay={0.1}>
                        <div className="bg-gradient-to-br from-tappi-purple to-tappi-purple-dark rounded-3xl p-10 text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-purple-100 leading-relaxed">
                                To empower every wireless internet service provider in Africa with world-class billing and management tools, enabling them to focus on what matters most: delivering excellent internet service to their communities.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="bg-gradient-to-br from-tappi-green to-green-600 rounded-3xl p-10 text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-green-100 leading-relaxed">
                                To become the leading WISP management platform across Africa, connecting millions of people to the internet through our partner providers, and driving digital transformation in underserved communities.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Our Values */}
                <ScrollReveal>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Innovation",
                                    desc: "We continuously innovate to stay ahead of industry needs and provide cutting-edge solutions.",
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    ),
                                    color: "purple"
                                },
                                {
                                    title: "Reliability",
                                    desc: "Our 99.9% uptime SLA ensures your business operations never skip a beat.",
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    ),
                                    color: "green"
                                },
                                {
                                    title: "Partnership",
                                    desc: "Your success is our success. We grow together through genuine partnership and support.",
                                    icon: (
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    color: "orange"
                                }
                            ].map((value, i) => (
                                <div key={i} className={`bg-${value.color === 'purple' ? 'purple' : value.color === 'green' ? 'green' : 'orange'}-50 p-8 rounded-3xl border border-${value.color === 'purple' ? 'purple' : value.color === 'green' ? 'green' : 'orange'}-100 transition-all duration-300`}>
                                    <div className={`w-12 h-12 bg-${value.color === 'purple' ? 'tappi-purple' : value.color === 'green' ? 'tappi-green' : 'orange-500'} rounded-xl flex items-center justify-center text-white mb-6`}>
                                        {value.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold mb-4 ${value.color === 'purple' ? 'text-tappi-purple' : value.color === 'green' ? 'text-tappi-green' : 'text-orange-600'}`}>{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Stats */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-24 bg-gradient-to-br from-tappi-purple to-tappi-purple-dark rounded-3xl p-12 text-white">
                        <h3 className="text-3xl font-bold text-center mb-12">Our Impact</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: "500+", label: "WISPs Served" },
                                { number: "100K+", label: "End Users" },
                                { number: "99.9%", label: "Uptime SLA" },
                                { number: "24/7", label: "Support" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                                    <div className="text-purple-200">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
