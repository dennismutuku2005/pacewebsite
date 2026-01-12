import PageHero from "../components/PageHero";

export default function Careers() {
    return (
        <div className="bg-white">
            <PageHero
                title="Join Our Team"
                subtitle="Build the future of commerce in Africa. We are looking for passionate individuals to join us on our journey."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We are always looking for talented people. Even if you don't see a role that fits, feel free to reach out.
                    </p>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {[
                        { role: "Senior Frontend Engineer", location: "Nairobi, Kenya", type: "Full-time" },
                        { role: "Product Designer", location: "Remote", type: "Full-time" },
                        { role: "Growth Marketing Manager", location: "Lagos, Nigeria", type: "Full-time" }
                    ].map((job, i) => (
                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 rounded-2xl border border-gray-200 hover:border-tappi-purple/50 hover:shadow-lg transition-all bg-white group cursor-pointer">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-tappi-purple transition-colors">{job.role}</h3>
                                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                    <span>{job.location}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <button className="mt-4 sm:mt-0 px-6 py-2 bg-purple-50 text-tappi-purple font-semibold rounded-lg group-hover:bg-tappi-purple group-hover:text-white transition-colors">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
