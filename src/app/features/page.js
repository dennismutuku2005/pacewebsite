import PageHero from "../components/PageHero";

export default function Features() {
    return (
        <div className="bg-white">
            <PageHero
                title="Features built for growth"
                subtitle="Powerful tools to help you manage your online presence and connect with customers."
            />

            {/* Feature 1 */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-tappi-purple mb-8">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Instant Website Creation</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Don't have a website? No problem. Tappi automatically generates a professional, SEO-optimized website for your business in minutes using your existing social media profile.
                        </p>
                        <ul className="space-y-3">
                            {['Mobile-optimized design', 'Custom domain support', 'SEO readiness'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <svg className="w-5 h-5 text-tappi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-3xl p-8 border border-gray-100 h-[400px] flex items-center justify-center">
                        <span className="text-gray-400 font-medium">Website Builder Mockup</span>
                    </div>
                </div>
            </div>

            {/* Feature 2 (Reversed) */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                        <div className="flex-1">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-8">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Social Media Ad Manager</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Run ads on Facebook and Instagram directly from Tappi without the complexity of Ads Manager. Reach thousands of new customers with a few clicks.
                            </p>
                            <ul className="space-y-3">
                                {['Targeted audience selection', 'Automated ad creation', 'Real-time performance tracking'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <svg className="w-5 h-5 text-tappi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 bg-white rounded-3xl p-8 border border-gray-100 h-[400px] flex items-center justify-center shadow-sm">
                            <span className="text-gray-400 font-medium">Ad Manager Interface</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
