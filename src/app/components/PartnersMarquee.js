"use client";
import { motion } from "framer-motion";

const partners = [
    "Safaricom", "M-PESA", "Equity Bank", "KCB Group",
    "Co-op Bank", "Absa", "NCBA", "Stanbic Bank",
    "Family Bank", "I&M Bank"
];

export default function PartnersMarquee() {
    return (
        <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Trusted by over 100k businesses across Africa
                </p>
            </div>

            <div className="flex overflow-hidden relative">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default select-none">
                            {partner}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
