"use client"
import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import { apiService } from '@/services/apiService';

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
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-gray-500 font-medium">Loading stories...</div>
            </div>
        );
    }

    if (selectedPost) {
        return (
            <div className="bg-white min-h-screen">
                <PageHero
                    title={selectedPost.title}
                    subtitle={`${selectedPost.author || 'Admin'} • ${new Date(selectedPost.created_at).toLocaleDateString()}`}
                />

                <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
                    <button
                        onClick={handleBackToList}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold text-sm uppercase tracking-widest mb-12 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to all news
                    </button>

                    {selectedPost.image && (
                        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>
                    )}

                    <div className="prose prose-lg prose-pace max-w-none">
                        <div
                            className="text-gray-700 leading-relaxed space-y-6"
                            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                        />
                    </div>

                    <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 uppercase tracking-tight">{selectedPost.author || 'Admin'}</p>
                                <p className="text-xs text-gray-500 font-medium">Content Contributor</p>
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
                            className="flex items-center gap-2 px-6 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m.45 6.684a3 3 0 110-5.368 3 3 0 010 5.368zm0-10.736a3 3 0 110-5.368 3 3 0 010 5.368zM5 14a3 3 0 110-6 3 3 0 010 6z" />
                            </svg>
                            Share Story
                        </button>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Pace WISP Blog"
                subtitle="Insights, tips, and stories to help you run a better WISP business."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                {blogPosts.length === 0 ? (
                    <div className="text-center py-20">No blog posts found.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, index) => (
                            <ScrollReveal key={post.id} delay={index * 0.1}>
                                <div className="group h-full border-b border-gray-100 pb-8 flex flex-col cursor-pointer" onClick={() => handlePostClick(post)}>
                                    <div className="bg-gray-50 h-56 w-full relative overflow-hidden rounded-2xl mb-6">
                                        {post.image ? (
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                            <span>{post.author || 'Admin'}</span>
                                            <span className="text-gray-200">•</span>
                                            <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-tappi-purple transition-colors">
                                            {post.title}
                                        </h3>
                                        <div
                                            className="text-gray-600 leading-relaxed line-clamp-2 text-sm prose prose-sm max-w-none mb-6 flex-1"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt || post.content }}
                                        />
                                        <button
                                            className="inline-flex items-center gap-2 text-tappi-purple font-bold text-xs uppercase tracking-[0.2em] group/btn text-left"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
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
