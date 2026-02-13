"use client"

import React, { useState } from 'react'
import { User, Mail, Phone, Lock, Bell, Globe, Palette, Save, Camera } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile')

    const tabs = [
        { id: 'profile', name: 'Profile', icon: User },
        { id: 'security', name: 'Security', icon: Lock },
        { id: 'notifications', name: 'Notifications', icon: Bell },
        { id: 'preferences', name: 'Preferences', icon: Palette },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Account Settings</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Manage your profile, security, and system preferences.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Sidebar Tabs */}
                <div className="lg:col-span-3">
                    <div className="bg-white border border-gray-100 rounded-2xl p-2 shadow-sm space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[12px] font-bold transition-all ${activeTab === tab.id
                                        ? 'bg-pace-purple text-white shadow-lg'
                                        : 'text-admin-label hover:bg-gray-50'
                                    }`}
                            >
                                <tab.icon size={16} />
                                <span className="uppercase tracking-wider">{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-9">
                    {activeTab === 'profile' && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-2xl bg-pace-purple/5 border-2 border-pace-purple/20 flex items-center justify-center text-pace-purple font-black text-[32px]">
                                        DM
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-pace-purple text-white rounded-lg flex items-center justify-center hover:bg-[#3d1a75] transition-all shadow-lg">
                                        <Camera size={14} />
                                    </button>
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-black text-admin-value uppercase">Dennis Mutuku</h3>
                                    <p className="text-[12px] text-admin-label font-medium mt-1">ISP Administrator</p>
                                    <Badge variant="success" className="mt-2 text-[9px] font-black">VERIFIED ACCOUNT</Badge>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Full Name</label>
                                        <div className="relative">
                                            <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" />
                                            <input
                                                type="text"
                                                defaultValue="Dennis Mutuku"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Email Address</label>
                                        <div className="relative">
                                            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" />
                                            <input
                                                type="email"
                                                defaultValue="admin@pacewisp.com"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Phone Number</label>
                                        <div className="relative">
                                            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" />
                                            <input
                                                type="tel"
                                                defaultValue="+254 712 345 678"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Business Name</label>
                                        <div className="relative">
                                            <Globe size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" />
                                            <input
                                                type="text"
                                                defaultValue="Pace Wisp Networks"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-pace-purple text-white rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-[#3d1a75] transition-all shadow-lg flex items-center justify-center gap-2">
                                    <Save size={16} />
                                    Save Profile Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6">
                            <div>
                                <h3 className="text-[15px] font-black text-admin-value uppercase mb-2">Change Password</h3>
                                <p className="text-[11px] text-admin-label font-medium opacity-70">Update your password to keep your account secure.</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Current Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter current password"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">New Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 focus:bg-white transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Confirm New Password</label>
                                    <input
                                        type="password"
                                        placeholder="Confirm new password"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <button className="w-full py-4 bg-admin-value text-white rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-black transition-all shadow-lg">
                                Update Password
                            </button>

                            <div className="pt-6 border-t border-gray-50">
                                <h4 className="text-[13px] font-black text-admin-value uppercase mb-4">Two-Factor Authentication</h4>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div>
                                        <p className="text-[12px] font-bold text-admin-value">SMS Verification</p>
                                        <p className="text-[10px] text-admin-dim mt-1">Add an extra layer of security</p>
                                    </div>
                                    <Badge variant="default" className="text-[9px] font-black">COMING SOON</Badge>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6">
                            <div>
                                <h3 className="text-[15px] font-black text-admin-value uppercase mb-2">Notification Preferences</h3>
                                <p className="text-[11px] text-admin-label font-medium opacity-70">Choose what updates you want to receive.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: 'Payment Notifications', desc: 'Get notified when payments are received' },
                                    { label: 'Router Status Alerts', desc: 'Alerts when routers go offline or online' },
                                    { label: 'New User Connections', desc: 'Notify when new users connect to hotspot' },
                                    { label: 'System Updates', desc: 'Important system and security updates' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                                        <div>
                                            <p className="text-[12px] font-bold text-admin-value">{item.label}</p>
                                            <p className="text-[10px] text-admin-dim mt-1">{item.desc}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pace-purple/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pace-purple"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'preferences' && (
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6">
                            <div>
                                <h3 className="text-[15px] font-black text-admin-value uppercase mb-2">System Preferences</h3>
                                <p className="text-[11px] text-admin-label font-medium opacity-70">Customize your dashboard experience.</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-3 block">Theme Mode</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {['Light Mode', 'Dark Mode'].map((theme) => (
                                            <div
                                                key={theme}
                                                className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${theme === 'Light Mode'
                                                        ? 'border-pace-purple bg-pace-purple/5'
                                                        : 'border-gray-100 hover:border-pace-purple/30'
                                                    }`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl mb-3 ${theme === 'Light Mode' ? 'bg-white border-2 border-gray-100' : 'bg-gray-900'}`} />
                                                <p className="text-[12px] font-black text-admin-value uppercase">{theme}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-3 block">Language</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 transition-all appearance-none cursor-pointer">
                                        <option>English (US)</option>
                                        <option>Swahili (KE)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-3 block">Timezone</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 transition-all appearance-none cursor-pointer">
                                        <option>East Africa Time (EAT) - UTC+3</option>
                                        <option>Central Africa Time (CAT) - UTC+2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
