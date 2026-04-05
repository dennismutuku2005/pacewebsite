import PageHero from "../components/PageHero";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-background text-on-surface">
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Review common questions regarding the PACE billing and management systems."
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center">
                <p className="text-on-surface-variant text-base font-normal leading-relaxed">
                    Most common questions are integrated below.  
                    <br/><br/>If you require specific technical guidance bypassing these answers, please contact support.
                </p>
            </div>
        </div>
    );
}
