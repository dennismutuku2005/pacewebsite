"use client"
import { useState } from 'react';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import { apiService } from '@/services/apiService';

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        serviceType: '',
        currentUsers: '',
        expectedGrowth: '',
        location: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            console.log("Submitting application payload:", formData);
            // Artificial delay for better UX and to ensure loading state is visible
            await new Promise(resolve => setTimeout(resolve, 800));

            // Map form data to backend expected format matching the new DB schema
            const payload = {
                company_name: formData.companyName,
                contact_person: formData.contactPerson,
                email: formData.email,
                phone: formData.phone,
                location: formData.location,
                service_type: formData.serviceType,
                current_users: formData.currentUsers,
                expected_growth: formData.expectedGrowth,
                message: formData.message
            };

            const result = await apiService.submitApplication(payload);

            if (result.error) {
                throw new Error(result.error);
            }

            setSubmitStatus('success');
            // Reset form
            setFormData({
                companyName: '',
                contactPerson: '',
                email: '',
                phone: '',
                serviceType: '',
                currentUsers: '',
                expectedGrowth: '',
                location: '',
                message: ''
            });
        } catch (error) {
            console.error("Submission failed:", error);
            setSubmitStatus('error');
            setErrorMessage('Failed to submit application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Apply for Pace WISP"
                subtitle="Join hundreds of WISPs already using our platform to streamline their operations"
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-2">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Get Started Today
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Fill out the form below and our team will get back to you within 24 hours to set up your billing system.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-12">
                            {submitStatus === 'success' && (
                                <div className="mb-8 p-4 bg-tappi-green/10 border border-tappi-green rounded-xl">
                                    <p className="text-tappi-green font-semibold text-center">
                                        ✓ Application submitted successfully! We'll contact you soon.
                                    </p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <p className="text-red-600 font-semibold text-center">
                                        {errorMessage}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Company Information */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                                        Company Information
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all"
                                                placeholder="Your WISP Name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Contact Person *
                                            </label>
                                            <input
                                                type="text"
                                                id="contactPerson"
                                                name="contactPerson"
                                                value={formData.contactPerson}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all"
                                                placeholder="contact@yourwisp.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all"
                                                placeholder="+254 700 000 000"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Location *
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all"
                                                placeholder="City, Country"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                                        Service Requirements
                                    </h3>

                                    <div>
                                        <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Type *
                                        </label>
                                        <select
                                            id="serviceType"
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select a service type</option>
                                            <option value="hotspot">Hotspot Only</option>
                                            <option value="pppoe">PPPoE Only</option>
                                            <option value="both">Both Hotspot & PPPoE</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="currentUsers" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Current Number of Users
                                            </label>
                                            <input
                                                type="number"
                                                id="currentUsers"
                                                name="currentUsers"
                                                value={formData.currentUsers}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all"
                                                placeholder="e.g., 500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="expectedGrowth" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Expected Monthly Growth
                                            </label>
                                            <input
                                                type="text"
                                                id="expectedGrowth"
                                                name="expectedGrowth"
                                                value={formData.expectedGrowth}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all"
                                                placeholder="e.g., 10-15%"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Information */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                                        Additional Information
                                    </h3>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Tell us about your requirements
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-tappi-purple focus:ring-2 focus:ring-tappi-purple/20 outline-none transition-all resize-none"
                                            placeholder="Any specific requirements or questions you have..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-tappi-purple text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-tappi-purple-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </button>
                                    <p className="text-sm text-gray-500 text-center mt-4">
                                        By submitting, you agree to our terms and conditions
                                    </p>
                                </div>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* Why Choose Us */}
                    <ScrollReveal delay={0.3}>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-tappi-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-tappi-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Quick Setup</h3>
                                <p className="text-gray-600 text-sm">Get up and running in less than 48 hours</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-tappi-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-tappi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
                                <p className="text-gray-600 text-sm">Round-the-clock assistance when you need it</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Secure & Reliable</h3>
                                <p className="text-gray-600 text-sm">Enterprise-grade security for your data</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
