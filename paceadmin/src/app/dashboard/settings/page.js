"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    User, Shield, Bell, Globe,
    Smartphone, Save, Camera, Mail,
    Lock, CreditCard, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const SettingItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-center justify-between p-5 hover:bg-gray-50/80 transition-all group cursor-pointer border-b border-gray-50 last:border-0">
        <div className="flex items-center gap-4">
            <div className="p-2.5 bg-gray-50 rounded-xl text-gray-400 group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                <Icon size={18} />
            </div>
            <div>
                <h4 className="text-[14px] font-bold text-gray-800 leading-none">{title}</h4>
                <p className="text-[11px] text-gray-400 font-medium mt-1.5">{description}</p>
            </div>
        </div>
        <ChevronRight size={16} className="text-gray-300 group-hover:text-pace-purple transition-all" />
    </div>
)

export default function SettingsPage() {
    return (
        <div className="space-y-6">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Profile Sidebar */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center">
                        <div className="relative mb-6">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 p-1 ring-1 ring-gray-100">
                                <img src="https://ui-avatars.com/api/?name=Adam+Joe&background=4B1D8F&color=fff" className="rounded-xl" alt="Avatar" />
                            </div>
                        </div>
                        <h3 className="text-lg font-black text-gray-900 leading-none">Adam Joe</h3>
                        <p className="text-[12px] font-bold text-gray-400 mt-2 uppercase tracking-widest">Super Administrator</p>
                        <button className="w-full mt-8 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[12px] font-bold text-gray-600 hover:bg-white hover:border-pace-purple/30 hover:text-pace-purple transition-all">Change Photo</button>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <p className="text-[11px] font-black text-gray-300 uppercase tracking-widest mb-4">Storage Info</p>
                        <div className="flex justify-between items-center text-[12px] font-bold mb-2">
                            <span className="text-gray-500">Log Archive</span>
                            <span className="text-gray-900">84%</span>
                        </div>
                        <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden">
                            <div className="h-full w-[84%] bg-pace-purple"></div>
                        </div>
                    </div>
                </div>

                {/* Main Settings Area */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50">
                            <h3 className="text-[16px] font-black text-gray-900">Account Preferences</h3>
                        </div>
                        <div>
                            <SettingItem icon={User} title="Personal Info" description="Update your system display name and email address." />
                            <SettingItem icon={Shield} title="Security & Login" description="Change password and configure 2-factor authentication." />
                            <SettingItem icon={Bell} title="System Alerts" description="Email and SMS triggers for network downtime." />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50">
                            <h3 className="text-[16px] font-black text-gray-900">Infrastructure Setup</h3>
                        </div>
                        <div>
                            <SettingItem icon={Globe} title="Router Gateways" description="Manage core CCR and RB router credentials." />
                            <SettingItem icon={Smartphone} title="SMS Integration" description="Configure Africa's Talking or Twilio API keys." />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="px-10 py-3 bg-pace-purple text-white rounded-xl text-sm font-black shadow-lg shadow-pace-purple/10 active:scale-95 transition-all">
                            Save Changes
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}
