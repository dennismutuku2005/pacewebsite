"use client"
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
    {
        name: "James Kimani",
        company: "NetLink WISP",
        location: "Nairobi, Kenya",
        image: "JK",
        text: "Pace WISP transformed our billing operations. We've reduced manual work by 80% and our revenue tracking is now real-time. The hotspot voucher system is incredibly efficient!",
        rating: 5
    },
    {
        name: "Sarah Mwangi",
        company: "ConnectPlus Internet",
        location: "Mombasa, Kenya",
        image: "SM",
        text: "The PPPoE management system is a game-changer. We can now manage 5,000+ users effortlessly. The customer portal has significantly reduced support calls.",
        rating: 5
    },
    {
        name: "David Ochieng",
        company: "SkyNet Services",
        location: "Kisumu, Kenya",
        image: "DO",
        text: "Best investment we've made! The 3% revenue model for hotspot is fair and the 28 KES per user for PPPoE is very affordable. Support team is always responsive.",
        rating: 5
    },
    {
        name: "Grace Wanjiru",
        company: "FastLink Communications",
        location: "Nakuru, Kenya",
        image: "GW",
        text: "We switched from our old system to Pace WISP and never looked back. The reporting features give us insights we never had before. Highly recommended!",
        rating: 5
    },
    {
        name: "Peter Mutua",
        company: "WaveNet ISP",
        location: "Eldoret, Kenya",
        image: "PM",
        text: "Integration with M-Pesa was seamless. Our customers love the convenience and we love the automated reconciliation. Revenue has increased by 35% since we started.",
        rating: 5
    },
    {
        name: "Lucy Akinyi",
        company: "MetroConnect",
        location: "Thika, Kenya",
        image: "LA",
        text: "The unified dashboard for both hotspot and PPPoE is brilliant. We can see everything at a glance. The analytics help us make better business decisions.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            What Our Users Say
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Join hundreds of satisfied WISPs who have transformed their operations with Pace WISP
                        </p>
                    </div>
                </ScrollReveal>

                {/* Marquee Effect - First Row */}
                <div className="relative mb-8">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex gap-6"
                        animate={{ x: [0, -1800] }}
                        transition={{
                            repeat: Infinity,
                            duration: 40,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 min-w-[400px] flex-shrink-0"
                            >
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-tappi-purple to-tappi-purple-dark rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                                        <div className="text-xs text-gray-500">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Marquee Effect - Second Row (Reverse Direction) */}
                <div className="relative">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex gap-6"
                        animate={{ x: [-1800, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 40,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 min-w-[400px] flex-shrink-0"
                            >
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-tappi-green to-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                                        <div className="text-xs text-gray-500">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA - No Arrow */}
                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-16">
                        <p className="text-gray-600 mb-6 text-lg">
                            Ready to join these successful WISPs?
                        </p>
                        <a href="/apply">
                            <button className="bg-tappi-purple text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-tappi-purple-dark transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl">
                                Start Your Journey
                            </button>
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
