import PageHero from "../components/PageHero";

export default function About() {
    return (
        <div className="bg-white">
            <PageHero
                title="About Us"
                subtitle="We're on a mission to empower small businesses across Africa with the tools they need to grow and thrive in the digital age."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Founded with a vision to democratize access to digital tools, Tappi began as a simple idea: what if every small business could have a world-class online presence without the complexity?
                            </p>
                            <p>
                                Today, we serve over 100k businesses, helping them connect with millions of customers. We believe that technology should be an enabler, not a barrier. That's why we build tools that are intuitive, powerful, and accessible to everyone.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-3xl h-[400px] w-full flex items-center justify-center">
                        <span className="text-gray-400 font-medium">About Us Image / Team Photo</span>
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Empowerment", desc: "We build tailored solutions that give power back to the business owner." },
                            { title: "Simplicity", desc: "We obsess over making complex technology simple and easy to use." },
                            { title: "Growth", desc: "Our success is defined by the growth and success of our customers." }
                        ].map((value, i) => (
                            <div key={i} className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                                <h3 className="text-xl font-bold text-tappi-purple mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
