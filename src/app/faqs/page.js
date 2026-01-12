import PageHero from "../components/PageHero";

export default function FAQPage() {
    return (
        <div className="bg-white">
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about Tappi's services and features."
            />

            {/* 
        The actual FAQ list is handled by the global FAQ component in layout.js 
        which appears before the footer. 
        So here we might add additional content or just let the layout handle the list.
        However, to avoid an empty page body, we can add a small intro or specific categories here.
      */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
                <p className="text-gray-500 text-lg">
                    Browse our most common questions below. If you can't find what you're looking for, please contact our support team.
                </p>
            </div>
        </div>
    );
}
