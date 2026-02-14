"use client"
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import PageHero from "../../components/PageHero";
import Link from "next/link";
import { apiService } from '@/services/apiService';

export default function BlogPost() {
    const { id } = useParams();
    const router = useRouter();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBlogPost();
    }, [id]);

    const fetchBlogPost = async () => {
        try {
            const data = await apiService.getBlogs();
            // Since we don't have a single blog endpoint yet, we filter from the list
            const foundPost = data.find(p => p.id === parseInt(id) || p.id === id);
            if (foundPost) {
                setPost(foundPost);
            } else {
                console.error("Post not found");
            }
        } catch (error) {
            console.error("Failed to fetch blog post", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-gray-500 font-medium">Loading story...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="bg-white min-h-screen flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
                <Link href="/blog" className="text-pace-purple font-bold uppercase tracking-widest text-sm hover:underline">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title={post.title}
                subtitle={`${post.author || 'Admin'} • ${new Date(post.created_at).toLocaleDateString()}`}
            />

            <article className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold text-sm uppercase tracking-widest mb-12 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to all news
                </Link>

                {post.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                )}

                <div className="prose prose-lg prose-pace max-w-none">
                    <div
                        className="text-gray-700 leading-relaxed space-y-6"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 uppercase tracking-tight">{post.author || 'Admin'}</p>
                            <p className="text-xs text-gray-500 font-medium">Content Contributor</p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: post.title,
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
