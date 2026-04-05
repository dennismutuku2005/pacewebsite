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
            <div className="bg-background min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                    </span>
                    <div className="text-sm font-medium text-primary">Loading block...</div>
                </div>
            </div>
        );
    }

    if (selectedPost) {
        return (
            <div className="bg-background min-h-screen">
                <PageHero
                    title={selectedPost.title}
                    subtitle={`Posted by ${selectedPost.author || 'Admin'} • ${new Date(selectedPost.created_at).toISOString().split('T')[0]}`}
                />

                <article className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
                    <button
                        onClick={handleBackToList}
                        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-white font-medium text-sm mb-12 transition-colors group"
                    >
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Posts
                    </button>

                    {selectedPost.image && (
                        <div className="mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-lg relative">
                            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>
                    )}

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-p:font-normal prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white">
                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                    </div>

                    <div className="mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-surface-container-highest border border-white/5 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">{selectedPost.author || 'Admin'}</p>
                                <p className="text-xs text-on-surface-variant">Author</p>
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
                            className="flex items-center gap-2 px-6 py-3 bg-surface-container-low border border-white/5 rounded-xl text-white font-medium hover:bg-white/5 transition-all text-sm"
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
        <div className="bg-background min-h-screen">
            <PageHero
                title="Pace Blog"
                subtitle="Updates, features, and stories from our team."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                {blogPosts.length === 0 ? (
                    <div className="text-center py-20 bg-surface-container-low border border-white/5 rounded-3xl">
                        <div className="text-base font-normal text-on-surface-variant">No posts available.</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div 
                                key={post.id} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-surface-container-low border border-white/5 rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all hover:border-white/20" 
                                onClick={() => handlePostClick(post)}
                            >
                                <div className="h-56 w-full relative overflow-hidden bg-surface-container-highest border-b border-white/5">
                                    {post.image ? (
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 relative z-0" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-on-surface-variant/30 relative z-0">
                                            <span className="material-symbols-outlined text-4xl">description</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col p-8">
                                    <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant mb-3">
                                        <span>{post.author || 'Admin'}</span>
                                        <span className="text-primary">•</span>
                                        <span>{new Date(post.created_at).toISOString().split('T')[0]}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                                        {post.title}
                                    </h3>
                                    <div
                                        className="text-on-surface-variant font-normal leading-relaxed line-clamp-3 text-sm max-w-none mb-6 flex-1"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt || post.content }}
                                    />
                                    <div className="text-primary font-medium text-sm flex items-center gap-2 group/btn mt-auto">
                                        Read Post
                                        <span className="material-symbols-outlined text-sm transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
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
