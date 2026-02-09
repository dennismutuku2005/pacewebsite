"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    User, Shield, Bell, Globe,
    Smartphone, Save, Camera, Mail,
    Lock, CreditCard, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SettingItem = ({ icon: Icon, title, description, badge }) => (
    <div className="flex items-center justify-between p-6 hover:bg-[#f8fafc] transition-colors group cursor-pointer border-b border-[#f1f5f9] last:border-0">
        <div className="flex items-center gap-5">
            <div className="p-3 bg-white border border-[#e2e8f0] rounded-xl text-[#94a3b8] group-hover:text-[#4a6cf7] group-hover:border-[#4a6cf7]/30 transition-all shadow-sm">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="text-[15px] font-bold text-[#1e293b]">{title}</h4>
                <p className="text-[13px] text-[#64748b] font-medium">{description}</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            {badge && (
                <span className="px-2 py-0.5 bg-blue-50 text-[#4a6cf7] text-[10px] font-black uppercase tracking-widest rounded border border-blue-100">{badge}</span>
            )}
            <ChevronRight size={18} className="text-[#cbd5e1] group-hover:text-[#4a6cf7] transition-all" />
        </div>
    </div>
)

export default function SettingsPage() {
    return (
        <div className="space-y-6 pb-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Profile Card */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                        <div className="h-24 bg-gradient-to-tr from-[#4a6cf7] to-[#818cf8]"></div>
                        <div className="px-8 pb-8 flex flex-col items-center">
                            <div className="relative -mt-12 mb-4">
                                <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-xl border border-white">
                                    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                                        <img src="https://ui-avatars.com/api/?name=Adam+Joe&background=4a6cf7&color=fff&size=200" alt="Avatar" />
                                    </div>
                                </div>
                                <button className="absolute bottom-1 right-1 p-2 bg-white rounded-lg shadow-lg border border-[#e2e8f0] text-[#64748b] hover:text-[#4a6cf7] transition-all">
                                    <Camera size={14} />
                                </button>
                            </div>
                            <h3 className="text-xl font-bold text-[#1e293b]">Adam Joe</h3>
                            <p className="text-sm text-[#64748b] font-medium mb-6">Super Administrator</p>

                            <div className="w-full grid grid-cols-2 gap-4 py-6 border-y border-[#f1f5f9]">
                                <div className="text-center">
                                    <p className="text-lg font-bold text-[#1e293b]">14k</p>
                                    <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest">Invoices</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-bold text-[#1e293b]">1.2k</p>
                                    <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest">Clients</p>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-3 bg-[#f8fafc] border border-[#e2e8f0] text-[#1e293b] rounded-xl text-sm font-bold hover:bg-[#f1f5f9] transition-all">Edit Profile</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8">
                        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Storage Usage</h3>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-[#64748b]">System Logs</span>
                            <span className="text-xs font-bold text-[#1e293b]">84%</span>
                        </div>
                        <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden mb-6">
                            <div className="h-full w-[84%] bg-[#4a6cf7] rounded-full"></div>
                        </div>
                        <button className="text-sm font-bold text-[#4a6cf7] hover:underline">Manage Storage &rarr;</button>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                        <div className="px-8 py-6 border-b border-[#e2e8f0]">
                            <h3 className="text-lg font-bold text-[#1e293b]">Account Settings</h3>
                            <p className="text-sm text-[#64748b] font-medium">Update your account information and preferences</p>
                        </div>
                        <div>
                            <SettingItem
                                icon={User}
                                title="Personal Information"
                                description="Email, phone number, and account details"
                            />
                            <SettingItem
                                icon={Shield}
                                title="Password & Security"
                                description="2FA, login history, and password updates"
                                badge="Strong"
                            />
                            <SettingItem
                                icon={Bell}
                                title="Notification Preferences"
                                description="System alerts, email, and SMS triggers"
                            />
                            <SettingItem
                                icon={CreditCard}
                                title="Billing & Tax"
                                description="Manage invoicing details and tax settings"
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
                        <div className="px-8 py-6 border-b border-[#e2e8f0]">
                            <h3 className="text-lg font-bold text-[#1e293b]">System Configuration</h3>
                            <p className="text-sm text-[#64748b] font-medium">Core network and application parameters</p>
                        </div>
                        <div>
                            <SettingItem
                                icon={Globe}
                                title="Network Gateways"
                                description="Manage router connections and core IP gateways"
                            />
                            <SettingItem
                                icon={Smartphone}
                                title="SMS API Integration"
                                description="Twilio, Africa's Talking, or custom gateways"
                                badge="Healthy"
                            />
                            <SettingItem
                                icon={Lock}
                                title="API Keys & Access"
                                description="Generate tokens for external integrations"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button className="px-8 py-3 bg-white border border-[#e2e8f0] text-[#64748b] rounded-xl text-sm font-bold hover:bg-[#f8fafc] transition-all">Discard Changes</button>
                        <button className="px-8 py-3 bg-[#4a6cf7] text-white rounded-xl text-sm font-bold hover:bg-[#3d59e0] transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-2">
                            <Save size={18} />
                            Save All Settings
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
