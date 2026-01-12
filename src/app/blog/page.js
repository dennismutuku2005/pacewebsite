import PageHero from "../components/PageHero";

export default function Blog() {
    return (
        <div className="bg-white">
            <PageHero
                title="The Tappi Blog"
                subtitle="Insights, tips, and stories to help you run a better business."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="bg-gray-100 rounded-2xl h-48 w-full mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
                                {/* Placeholder for blog image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Blog Image {i}</div>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-tappi-purple font-medium mb-3">
                                <span>Growth</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-tappi-purple transition-colors">
                                How to Optimize Your Business for Search Engines in 2025
                            </h3>
                            <p className="text-gray-500 line-clamp-3 leading-relaxed">
                                Discover the latest strategies to ensure your business gets found by the right customers at the right time. SEO is changing, and here is what you need to know.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
