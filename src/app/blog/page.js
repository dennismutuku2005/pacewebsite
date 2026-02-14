"use client"
import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import { apiService } from '@/services/apiService';

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const data = await apiService.getBlogs();
            setBlogPosts(data);
        } catch (error) {
            console.error("Failed to fetch blogs", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Pace WISP Blog"
                subtitle="Insights, tips, and stories to help you run a better WISP business."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {/* Blog Grid */}
                {isLoading ? (
                    <div className="text-center py-20">Loading blogs...</div>
                ) : blogPosts.length === 0 ? (
                    <div className="text-center py-20">No blog posts found.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, index) => (
                            <ScrollReveal key={post.id} delay={index * 0.1}>
                                <div className="group h-full border-b border-gray-100 pb-8 flex flex-col">
                                    <div className="bg-gray-50 h-56 w-full relative overflow-hidden rounded-2xl mb-6">
                                        <Link href={`/blog/${post.id}`}>
                                            {post.image ? (
                                                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                            <span>{post.author || 'Admin'}</span>
                                            <span className="text-gray-200">•</span>
                                            <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                        </div>
                                        <Link href={`/blog/${post.id}`}>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-tappi-purple transition-colors">
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <div
                                            className="text-gray-600 leading-relaxed line-clamp-2 text-sm prose prose-sm max-w-none mb-6 flex-1"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt || post.content }}
                                        />
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-2 text-tappi-purple font-bold text-xs uppercase tracking-[0.2em] group/btn"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
