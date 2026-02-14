"use client"
import { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import { apiService } from '@/services/apiService';

export default function Privacy() {
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await apiService.getPrivacyPolicy();
                setContent(data.content || '');
            } catch (error) {
                console.error("Failed to fetch privacy policy", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="bg-white">
            <PageHero
                title="Privacy Policy"
                subtitle="We value your privacy and are committed to protecting your personal data."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-gray-600 space-y-8">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: content || "No privacy policy content available." }}
                    />
                )}
            </div>
        </div>
    );
}
