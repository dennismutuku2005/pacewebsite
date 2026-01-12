"use client"
import Link from 'next/link';
import Image from 'next/image';
import PartnersMarquee from './components/PartnersMarquee';
import ScrollReveal from './components/ScrollReveal';
import Testimonials from './components/Testimonials';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-rubik overflow-x-hidden selection:bg-tappi-orange-mid selection:text-white">

      {/* Hero Section */}
      <div className="bg-tappi-purple text-white relative overflow-hidden">
        <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <ScrollReveal className="flex-1 max-w-2xl pt-8 text-center lg:text-left z-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🚀 Trusted by 500+ WISPs Across Africa
                </div>
              </motion.div>

              <h1 className="text-4xl lg:text-[4.5rem] font-bold leading-[1.1] mb-6 font-rubik tracking-tight">
                Utility Software <br />
                for <span className="text-gradient-orange inline-block transform hover:scale-105 transition-transform duration-300">Wireless</span> <br />
                Internet Providers
              </h1>

              <p className="text-lg text-purple-100/80 mb-8 max-w-lg mx-auto lg:mx-0 font-rubik leading-relaxed font-light">
                Streamline your WISP operations with our cutting-edge billing systems for Hotspot and PPPoE. Manage users, track revenue, and grow your business effortlessly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/apply">
                  <button className="w-full sm:w-auto bg-tappi-green text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-green-600 transition-all hover:-translate-y-1 shadow-[0_8px_30px_rgba(44,179,74,0.3)] flex items-center justify-center gap-2">
                    Get Started Free
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all hover:border-white/40 flex items-center justify-center gap-2">
                    View Pricing
                  </button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Right - Logo */}
            <ScrollReveal delay={0.2} className="flex-1 w-full flex justify-center lg:justify-end relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/30 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-96">
                  <Image
                    src="/hero-phone.png"
                    alt="Pace WISP Logo"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </main>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* Features Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Run Your WISP
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive tools designed specifically for wireless internet service providers
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-tappi-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hotspot Billing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Complete voucher-based billing system with automated generation, reseller management, and real-time revenue tracking.
                </p>
                <Link href="/products" className="text-tappi-purple font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Feature 2 */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-tappi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">PPPoE Management</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced user provisioning, bandwidth management, and package scheduling for seamless PPPoE operations.
                </p>
                <Link href="/products" className="text-tappi-green font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Feature 3 */}
            <ScrollReveal delay={0.3}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reports</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive business intelligence with revenue reports, customer analytics, and growth metrics.
                </p>
                <Link href="/products" className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Feature 4 */}
            <ScrollReveal delay={0.4}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Integration</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Seamless M-Pesa, bank transfer, and card payment integration with automated reconciliation.
                </p>
                <Link href="/products" className="text-orange-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Feature 5 */}
            <ScrollReveal delay={0.5}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Portal</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Self-service portal for customers to manage accounts, view usage, and make payments easily.
                </p>
                <Link href="/products" className="text-pink-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Feature 6 */}
            <ScrollReveal delay={0.6}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Round-the-clock technical support to ensure your operations run smoothly without interruption.
                </p>
                <Link href="/support" className="text-indigo-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Pay only for what you use. No hidden fees, no surprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-tappi-purple/20 hover:border-tappi-purple transition-all">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Hotspot</h3>
                  <div className="text-5xl font-bold text-tappi-purple mb-2">3%</div>
                  <p className="text-gray-600 mb-6">of Hotspot Revenue</p>
                  <Link href="/pricing">
                    <button className="w-full bg-tappi-purple text-white px-6 py-3 rounded-xl font-bold hover:bg-tappi-purple-dark transition-all">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-tappi-green/20 hover:border-tappi-green transition-all">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">PPPoE</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-tappi-green">28</span>
                    <span className="text-2xl font-semibold text-gray-600">KES</span>
                  </div>
                  <p className="text-gray-600 mb-6">per user per month</p>
                  <Link href="/pricing">
                    <button className="w-full bg-tappi-green text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-all">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-tappi-purple py-20 relative overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Ready to Transform <br />
              Your WISP Operations?
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of WISPs already using Pace to streamline their billing, manage users, and grow their business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/apply">
                <button className="bg-gradient-to-r from-tappi-orange-start to-tappi-orange-end text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1 flex items-center gap-2">
                  Get Started Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <Link href="/products">
                <button className="px-10 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all hover:border-white/40 text-white">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </ScrollReveal>
      </section>
    </div>
  );
}