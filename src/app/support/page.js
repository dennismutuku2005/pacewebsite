import PageHero from "../components/PageHero";

export default function Support() {
    return (
        <div className="bg-white">
            <PageHero
                title="Support Center"
                subtitle="Need help? We are here for you. Find answers or get in touch with our team."
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {/* Contact Channels */}
                    <div className="p-8 rounded-3xl bg-purple-50 border border-purple-100 text-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-tappi-purple mx-auto mb-6 shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-500 mb-4">For general inquiries</p>
                        <a href="mailto:hey@tappi.app" className="text-tappi-purple font-semibold hover:underline">hey@tappi.app</a>
                    </div>

                    <div className="p-8 rounded-3xl bg-green-50 border border-green-100 text-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-tappi-green mx-auto mb-6 shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                        <p className="text-gray-500 mb-4">Mon-Fri from 8am to 5pm</p>
                        <a href="tel:+254715412061" className="text-tappi-green font-semibold hover:underline">+254 715 412 061</a>
                    </div>

                    <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 text-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-500 mx-auto mb-6 shadow-sm">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                        <p className="text-gray-500 mb-4">Instant support</p>
                        <button className="text-blue-600 font-semibold hover:underline">Start Chat</button>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
                    <form className="max-w-2xl mx-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tappi-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" />
                            <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tappi-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tappi-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" />
                        <textarea rows="4" placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tappi-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all"></textarea>
                        <button type="button" className="w-full bg-tappi-purple text-white font-bold py-4 rounded-xl hover:bg-purple-800 transition-colors">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
