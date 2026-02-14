"use client"
import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import { apiService } from '@/services/apiService';

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
        <div className="bg-white">
            <PageHero
                title="Terms of Service"
                subtitle={updatedAt ? `Last Updated: ${new Date(updatedAt).toLocaleDateString()}` : "Please read our terms and conditions carefully."}
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
                {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-tappi-purple"></div>
                    </div>
                ) : (
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: content || "No terms content available." }}
                    />
                )}
            </div>
        </div>
    );
}
