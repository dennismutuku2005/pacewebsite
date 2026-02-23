import PageHero from "../components/PageHero";
import Link from "next/link";

export default function Careers() {
    return (
        <div className="bg-white">
            <PageHero
                title="Careers at Pace"
                subtitle="Join us in our mission to empower WISPs across Africa with innovative technology solutions."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-tappi-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">No Open Positions</h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-8 text-lg">
                        We don't have any open vacancies at the moment. However, we're always interested in meeting talented people who share our passion.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:careers@pacewisp.com" className="bg-tappi-purple text-white px-8 py-3 rounded-xl font-bold hover:bg-tappi-purple-dark transition-all">
                            Send Spontaneous Application
                        </a>
                        <Link href="/about" className="text-tappi-purple font-bold hover:underline">
                            Learn more about us &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
