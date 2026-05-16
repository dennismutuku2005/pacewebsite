"use client"
import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { apiService } from '@/services/apiService';
import { motion } from 'framer-motion';

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
            await new Promise(resolve => setTimeout(resolve, 800));

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
        <div className="min-h-screen bg-background text-on-surface">
            <PageHero
                title="Get Started Today"
                subtitle="Join hundreds of infrastructure leads securely managing operations."
            />

            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl font-semibold tracking-tight mb-4">Account Setup</h3>
                        <p className="text-on-surface-variant font-normal max-w-2xl mx-auto leading-relaxed">
                            Submit your network details below. Our team will contact you within 24 hours to begin integration.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 border border-white/10 shadow-2xl rounded-md p-8 lg:p-12 relative overflow-hidden"
                    >
                        {submitStatus === 'success' && (
                            <div className="mb-8 p-6 bg-tertiary/10 border border-tertiary/20 rounded-md">
                                <p className="text-tertiary font-medium text-center">
                                    Application submitted successfully! We will contact you shortly.
                                </p>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mb-8 p-6 bg-error/10 border border-error/20 rounded-md">
                                <p className="text-error font-medium text-center">
                                    {errorMessage}
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="space-y-5">
                                <h3 className="text-lg font-medium text-white border-b border-white/5 pb-3">
                                    Company Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-normal text-white/80">Company Name *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 text-sm"
                                            placeholder="Your WISP Name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-normal text-white/80">Contact Person *</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-normal text-white/80">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 text-sm"
                                            placeholder="contact@example.com"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-normal text-white/80">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 text-sm"
                                            placeholder="+254 700 000 000"
                                        />
                                    </div>
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-sm font-normal text-white/80">Location *</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 text-sm"
                                            placeholder="City, Country"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <h3 className="text-lg font-medium text-white border-b border-white/5 pb-3">
                                    Service Requirements
                                </h3>
                                
                                <div className="space-y-1.5">
                                    <label className="text-sm font-normal text-white/80">Service Type *</label>
                                    <select
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#1A1A1A] px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#1A1A1A] text-white">-- Select Service --</option>
                                        <option value="hotspot" className="bg-[#1A1A1A] text-white">Hotspot Only</option>
                                        <option value="pppoe" className="bg-[#1A1A1A] text-white">PPPoE Only</option>
                                        <option value="both" className="bg-[#1A1A1A] text-white">Both Hotspot & PPPoE</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-normal text-white/80">Current Number of Users</label>
                                        <input
                                            type="number"
                                            name="currentUsers"
                                            value={formData.currentUsers}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 text-sm"
                                            placeholder="e.g. 100"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-normal text-white/80">Expected Monthly Growth</label>
                                        <input
                                            type="text"
                                            name="expectedGrowth"
                                            value={formData.expectedGrowth}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all text-white placeholder-white/30 text-sm"
                                            placeholder="e.g. +10%"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <h3 className="text-lg font-medium text-white border-b border-white/5 pb-3">
                                    Additional Info
                                </h3>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-normal text-white/80">Anything else we should know?</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-white/5 px-4 py-3 rounded-sm border border-white/10 focus:border-primary focus:ring-0 outline-none transition-all resize-none text-white placeholder-white/30 text-sm"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white px-8 py-5 rounded-sm font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed my-2 shadow-xl active:scale-95"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
