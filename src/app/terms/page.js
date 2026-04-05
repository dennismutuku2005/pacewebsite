"use client"
import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import { apiService } from '@/services/apiService';
import { motion } from 'framer-motion';

export default function Terms() {
    const [content, setContent] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await apiService.getTerms();
                setContent(data.content || '');
                setUpdatedAt(data.updated_at || '');
            } catch (error) {
                console.error("Failed to fetch terms", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Terms of Service"
                subtitle={updatedAt ? `Last Updated: ${new Date(updatedAt).toLocaleDateString()}` : "Please read our operational directives."}
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                        </span>
                        <div className="text-sm font-medium text-primary">Loading...</div>
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-surface-container-low border border-white/5 rounded-2xl p-10 lg:p-14 shadow-lg"
                    >
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:font-normal prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white"
                            dangerouslySetInnerHTML={{ __html: content || "No terms available." }}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
}
