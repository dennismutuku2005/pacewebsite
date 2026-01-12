import PageHero from "../components/PageHero";

export default function Privacy() {
    return (
        <div className="bg-white">
            <PageHero
                title="Privacy Policy"
                subtitle="We value your privacy and are committed to protecting your personal data."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-gray-600 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                    <p className="leading-relaxed mb-4">
                        We collect information that you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Name and contact information</li>
                        <li>Business details</li>
                        <li>Payment information</li>
                        <li>Communication history</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                    <p className="leading-relaxed">
                        We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about products, services, offers, and events.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                    <p className="leading-relaxed">
                        We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is completely secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
                    <p className="leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@tappi.app" className="text-tappi-purple hover:underline">privacy@tappi.app</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
