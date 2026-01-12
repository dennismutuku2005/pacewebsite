import PageHero from "../components/PageHero";

export default function Pricing() {
    return (
        <div className="bg-white">
            <PageHero
                title="Simple, Transparent Pricing"
                subtitle="Choose the plan that fits your business needs. No hidden fees."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-tappi-purple/50 transition-colors hover:shadow-xl relative flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Starter</h3>
                            <p className="text-gray-500 text-sm mt-2">Perfect for getting online</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">$0</span>
                            <span className="text-gray-500">/month</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Free Website
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Basic Analytics
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Collect Reviews
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border-2 border-tappi-purple text-tappi-purple font-bold hover:bg-tappi-purple hover:text-white transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* Growth Plan */}
                    <div className="bg-tappi-purple rounded-3xl p-8 border border-tappi-purple text-white hover:shadow-2xl hover:shadow-purple-500/20 relative transform md:-translate-y-4 flex flex-col">
                        <div className="absolute top-0 right-0 bg-tappi-orange-mid text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                            POPULAR
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold">Growth</h3>
                            <p className="text-purple-200 text-sm mt-2">For scaling businesses</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">$15</span>
                            <span className="text-purple-200">/month</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-white">
                                <svg className="w-5 h-5 text-tappi-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Everything in Starter
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white">
                                <svg className="w-5 h-5 text-tappi-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Ad Management (FB & Insta)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white">
                                <svg className="w-5 h-5 text-tappi-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Advanced Analytics
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white">
                                <svg className="w-5 h-5 text-tappi-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Priority Support
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-white text-tappi-purple font-bold hover:bg-gray-50 transition-all shadow-lg">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-tappi-purple/50 transition-colors hover:shadow-xl relative flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Pro</h3>
                            <p className="text-gray-500 text-sm mt-2">For established brands</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">$45</span>
                            <span className="text-gray-500">/month</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Everything in Growth
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Dedicated Account Manager
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Custom Integrations
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-900 font-bold hover:border-tappi-purple hover:text-tappi-purple transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
