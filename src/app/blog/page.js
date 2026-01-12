"use client"
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        category: "Industry Insights",
        title: "The Future of WISP Billing: Trends to Watch in 2026",
        excerpt: "Explore the emerging trends in wireless internet billing systems and how automation is transforming the WISP industry across Africa.",
        readTime: "5 min read",
        date: "Jan 10, 2026",
        color: "purple"
    },
    {
        id: 2,
        category: "Best Practices",
        title: "How to Reduce Churn Rate for Your PPPoE Customers",
        excerpt: "Learn proven strategies to keep your subscribers happy and reduce customer churn with better service delivery and communication.",
        readTime: "7 min read",
        date: "Jan 8, 2026",
        color: "green"
    },
    {
        id: 3,
        category: "Case Study",
        title: "How NetLink WISP Increased Revenue by 80% with Pace",
        excerpt: "A detailed case study on how one WISP transformed their operations and dramatically increased their revenue using our platform.",
        readTime: "10 min read",
        date: "Jan 5, 2026",
        color: "orange"
    },
    {
        id: 4,
        category: "Technical Guide",
        title: "Setting Up Hotspot Vouchers: A Complete Guide",
        excerpt: "Step-by-step instructions on configuring and managing hotspot vouchers for maximum efficiency and customer satisfaction.",
        readTime: "8 min read",
        date: "Jan 3, 2026",
        color: "blue"
    },
    {
        id: 5,
        category: "Growth Tips",
        title: "5 Ways to Scale Your WISP Business in 2026",
        excerpt: "Practical tips and strategies for growing your wireless internet business, from customer acquisition to infrastructure expansion.",
        readTime: "6 min read",
        date: "Dec 28, 2025",
        color: "pink"
    },
    {
        id: 6,
        category: "Product Updates",
        title: "New Features: Advanced Analytics Dashboard Released",
        excerpt: "Discover the powerful new analytics features that give you deeper insights into your business performance and customer behavior.",
        readTime: "4 min read",
        date: "Dec 25, 2025",
        color: "indigo"
    }
];

const getCategoryColor = (color) => {
    const colors = {
        purple: "text-tappi-purple bg-purple-50",
        green: "text-tappi-green bg-green-50",
        orange: "text-orange-600 bg-orange-50",
        blue: "text-blue-600 bg-blue-50",
        pink: "text-pink-600 bg-pink-50",
        indigo: "text-indigo-600 bg-indigo-50"
    };
    return colors[color] || colors.purple;
};

export default function Blog() {
    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Pace WISP Blog"
                subtitle="Insights, tips, and stories to help you run a better WISP business."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {/* Featured Post */}
                <ScrollReveal>
                    <div className="mb-20">
                        <div className="bg-gradient-to-br from-tappi-purple to-tappi-purple-dark rounded-3xl overflow-hidden shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="p-12 flex flex-col justify-center text-white">
                                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                                        Featured Post
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                        Complete Guide to Starting a WISP in 2026
                                    </h2>
                                    <p className="text-purple-100 mb-6 text-lg leading-relaxed">
                                        Everything you need to know about launching and running a successful wireless internet service provider, from licensing to customer management.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-purple-200 mb-6">
                                        <span>15 min read</span>
                                        <span>•</span>
                                        <span>Jan 12, 2026</span>
                                    </div>
                                    <Link href="/blog/1">
                                        <button className="bg-white text-tappi-purple px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all w-fit">
                                            Read Article
                                        </button>
                                    </Link>
                                </div>
                                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                    <svg className="w-32 h-32 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <ScrollReveal key={post.id} delay={index * 0.1}>
                            <Link href={`/blog/${post.id}`}>
                                <div className="group cursor-pointer h-full">
                                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-48 w-full mb-6 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-tappi-purple/20 to-tappi-green/20 group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(post.color)}`}>
                                        {post.category}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                        <span>{post.readTime}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-tappi-purple transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-20 bg-gray-50 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get the latest WISP industry insights, tips, and product updates delivered to your inbox every week.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none"
                            />
                            <button className="bg-tappi-purple text-white px-8 py-3 rounded-xl font-bold hover:bg-tappi-purple-dark transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
