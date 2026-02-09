"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    User, Shield, Bell, Globe,
    Smartphone, Save, Lock, CreditCard,
    ChevronRight, Database, Cloud, Key
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4">
                <h1 className="text-[20px] font-black text-gray-900 leading-none tracking-tight">System Configuration</h1>
                <p className="text-[12px] text-gray-400 mt-2 font-medium">Manage administrator accounts, security protocols, and SaaS platform parameters.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Sidebar - Profile Summary */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="border border-gray-200 rounded p-8 bg-white flex flex-col items-center">
                        <div className="w-20 h-20 rounded border border-gray-100 bg-gray-50 flex items-center justify-center text-[24px] font-black text-pace-purple mb-6">
                            AJ
                        </div>
                        <h3 className="text-[18px] font-black text-gray-900 leading-none">Adam Joe</h3>
                        <p className="text-[11px] font-black text-gray-300 mt-2 uppercase tracking-[2px]">Super Administrator</p>
                        <div className="w-full mt-10 pt-8 border-t border-gray-50 space-y-4">
                            <div className="flex justify-between items-center text-[11px] font-bold">
                                <span className="text-gray-400 uppercase tracking-widest leading-none">Status</span>
                                <span className="text-pace-green uppercase tracking-widest leading-none">Verified</span>
                            </div>
                            <div className="flex justify-between items-center text-[11px] font-bold">
                                <span className="text-gray-400 uppercase tracking-widest leading-none">Auth Level</span>
                                <span className="text-gray-900 uppercase tracking-widest leading-none">Root Access</span>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded p-6 bg-white">
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[2px] mb-4">Platform Data Sheet</p>
                        <div className="space-y-4">
                            {[
                                { label: 'Log Storage', val: '84%', color: 'bg-pace-purple' },
                                { label: 'Cloud Bandwidth', val: '12%', color: 'bg-pace-green' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">{item.label}</span>
                                        <span className="text-[11px] font-black text-gray-900">{item.val}</span>
                                    </div>
                                    <div className="h-1 bg-gray-50 rounded-full overflow-hidden">
                                        <div className={cn("h-full rounded-full transition-all", item.color)} style={{ width: item.val }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Settings - Excel Style list */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="border border-gray-200 rounded bg-white overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[2px]">Security & Identity</h4>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { title: 'Personal Information', desc: 'Managed name, primary email and system profile tokens.' },
                                { title: 'Access Credentials', desc: 'Securely rotate root passwords and manage 2FA keys.' },
                                { title: 'Notification Matrix', desc: 'Configure SMS and Email triggers for global node status.' },
                            ].map((item, i) => (
                                <div key={i} className="px-6 py-5 hover:bg-gray-50 transition-colors group cursor-pointer flex justify-between items-center">
                                    <div>
                                        <h5 className="text-[13px] font-black text-gray-800 leading-none">{item.title}</h5>
                                        <p className="text-[11px] text-gray-400 font-medium mt-1.5 leading-relaxed">{item.desc}</p>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-200 group-hover:text-pace-purple transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded bg-white overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[2px]">Platform Infrastructure</h4>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { title: 'API & Key Configurations', desc: 'Regulate software deployment keys and SaaS endpoint tokens.' },
                                { title: 'Cloud Integration (Global)', desc: 'Manage AWS Africa region clusters and DB storage nodes.' },
                                { title: 'Payment Webhooks (M-PESA)', desc: 'Set up B2B API keys and reconciliation sync intervals.' },
                            ].map((item, i) => (
                                <div key={i} className="px-6 py-5 hover:bg-gray-50 transition-colors group cursor-pointer flex justify-between items-center">
                                    <div>
                                        <h5 className="text-[13px] font-black text-gray-800 leading-none">{item.title}</h5>
                                        <p className="text-[11px] text-gray-400 font-medium mt-1.5 leading-relaxed">{item.desc}</p>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-200 group-hover:text-pace-purple transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="px-8 py-3 bg-gray-900 text-white rounded text-[12px] font-black uppercase tracking-[3px] shadow-none hover:bg-black transition-all leading-none">
                            Apply Changes
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
