"use client"
import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import Link from "next/link";
import { apiService } from '@/services/apiService';
import { motion } from 'framer-motion';

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
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

    const handlePostClick = (post) => {
        setSelectedPost(post);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToList = () => {
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading) {
        return (
            <div className="bg-[#08090E] min-h-screen flex items-center justify-center font-inter">
                <div className="flex flex-col items-center gap-4">
                    <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-600"></span>
                    </span>
                    <div className="text-xs uppercase tracking-wider font-semibold text-purple-400">Loading articles...</div>
                </div>
            </div>
        );
    }

    if (selectedPost) {
        return (
            <div className="bg-[#08090E] min-h-screen font-inter text-slate-200">
                <PageHero
                    badge="Article"
                    title={selectedPost.title}
                    subtitle={`Published by ${selectedPost.author || 'PACE Engineering'} • ${new Date(selectedPost.created_at).toISOString().split('T')[0]}`}
                />

                <article className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
                    <button
                        onClick={handleBackToList}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium text-xs uppercase tracking-wider mb-10 transition-colors group cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Articles
                    </button>

                    {selectedPost.image && (
                        <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>
                    )}

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:text-white prose-p:font-normal prose-p:leading-relaxed prose-p:text-slate-300 prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white">
                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <span className="material-symbols-outlined text-xl">person</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">{selectedPost.author || 'PACE Team'}</p>
                                <p className="text-xs text-slate-400">Author</p>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: selectedPost.title,
                                        url: window.location.href
                                    });
                                }
                            }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl text-white font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-sm">share</span>
                            Share
                        </button>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div className="bg-[#08090E] min-h-screen font-inter text-slate-200">
            <PageHero
                badge="Engineering & Updates"
                title="PACE Insights & Blog"
                subtitle="Technical deep dives, ISP business guides, and product updates from the PACE team."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                {blogPosts.length === 0 ? (
                    <div className="text-center py-20 bg-[#0E111C]/80 border border-white/10 rounded-3xl max-w-2xl mx-auto shadow-xl">
                        <div className="text-sm font-normal text-slate-400">No blog posts published yet. Stay tuned!</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.div 
                                key={post.id} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="group bg-[#0E111C]/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all hover:border-purple-500/30 hover:shadow-[0_10px_40px_rgba(139,92,246,0.12)]" 
                                onClick={() => handlePostClick(post)}
                            >
                                <div className="h-48 w-full relative overflow-hidden bg-white/[0.02] border-b border-white/[0.08]">
                                    {post.image ? (
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 relative z-0" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-600 relative z-0">
                                            <span className="material-symbols-outlined text-4xl">description</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col p-6">
                                    <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 mb-2.5">
                                        <span>{post.author || 'Admin'}</span>
                                        <span className="text-purple-400">•</span>
                                        <span>{new Date(post.created_at).toISOString().split('T')[0]}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2.5 group-hover:text-purple-300 transition-colors tracking-tight line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <div
                                        className="text-slate-300/80 font-normal leading-relaxed line-clamp-3 text-xs mb-5 flex-1"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt || post.content }}
                                    />
                                    <div className="text-purple-400 font-medium text-xs uppercase tracking-wider flex items-center gap-1.5 group/btn mt-auto">
                                        <span>Read Article</span>
                                        <span className="transform group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
