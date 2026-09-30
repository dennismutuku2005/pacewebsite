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
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Failed to submit application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#08090E] text-slate-200 font-inter">
            <PageHero
                badge="Onboarding"
                title="Get Started with PACE"
                subtitle="Complete the form below to register your ISP network for automated billing and MikroTik integration."
            />

            <section className="py-20 relative z-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0E111C]/90 border border-white/10 shadow-2xl rounded-2xl p-8 sm:p-12 relative overflow-hidden"
                    >
                        {submitStatus === 'success' && (
                            <div className="mb-8 p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                <p className="text-emerald-400 font-medium text-xs sm:text-sm text-center">
                                    ✓ Application submitted successfully! Our engineering team will reach out shortly.
                                </p>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mb-8 p-5 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                                <p className="text-rose-400 font-medium text-xs sm:text-sm text-center">
                                    {errorMessage}
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="space-y-5">
                                <h3 className="text-base font-semibold text-white border-b border-white/[0.08] pb-3">
                                    Company Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-slate-300">Company / WISP Name *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs"
                                            placeholder="Your WISP Name"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-slate-300">Contact Person *</label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-slate-300">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs"
                                            placeholder="admin@yourwisp.com"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-slate-300">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs"
                                            placeholder="+254 700 000 000"
                                        />
                                    </div>
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-xs font-medium text-slate-300">Operational Region / Location *</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs"
                                            placeholder="Nairobi, Kenya"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <h3 className="text-base font-semibold text-white border-b border-white/[0.08] pb-3">
                                    Network Architecture
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-slate-300">Service Type *</label>
                                        <select
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0E111C] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white text-xs cursor-pointer"
                                        >
                                            <option value="">Select Service</option>
                                            <option value="hotspot">Hotspot Billing</option>
                                            <option value="pppoe">PPPoE Management</option>
                                            <option value="both">Both Hotspot & PPPoE</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-slate-300">Active Subscribers</label>
                                        <input
                                            type="text"
                                            name="currentUsers"
                                            value={formData.currentUsers}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs"
                                            placeholder="e.g., 250"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-slate-300">Expected Growth (6 mos)</label>
                                        <input
                                            type="text"
                                            name="expectedGrowth"
                                            value={formData.expectedGrowth}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs"
                                            placeholder="e.g., 1000"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-slate-300">Additional Notes / Custom Requirements</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-white/[0.04] px-4 py-3 rounded-xl border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all text-white placeholder-slate-500 text-xs resize-none"
                                        placeholder="Tell us about your MikroTik router models, OLTs, or payment gateways..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-all shadow-lg shadow-purple-600/25 active:scale-95 cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting Application...' : 'Submit Onboarding Application'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
