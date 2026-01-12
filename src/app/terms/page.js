import PageHero from "../components/PageHero";

export default function Terms() {
    return (
        <div className="bg-white">
            <PageHero
                title="Terms of Service"
                subtitle="Please read our terms and conditions carefully."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-gray-600 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                    <p className="leading-relaxed">
                        Welcome to Tappi. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
                    <p className="leading-relaxed">
                        You agree to use Tappi only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Content and Intellectual Property</h2>
                    <p className="leading-relaxed">
                        All content provided on Tappi, including text, graphics, logos, and software, is the property of Tappi or its licensors and is protected by copyright and other intellectual property laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
                    <p className="leading-relaxed">
                        Tappi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the services.
                    </p>
                </section>
            </div>
        </div>
    );
}
