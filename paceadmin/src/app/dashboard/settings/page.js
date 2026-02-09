"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Shield, Bell, User, Globe, Lock, Save } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none">Settings</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Manage your system preferences and account details.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-2 bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-none">
                    <Save size={14} />
                    Save Changes
                </button>
            </div>

            {/* Settings Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Side Nav */}
                <div className="lg:col-span-1 space-y-1">
                    {[
                        { icon: User, label: 'Account Information', active: true },
                        { icon: Lock, label: 'Security & Access' },
                        { icon: Bell, label: 'Notifications' },
                        { icon: Globe, label: 'Region & Display' },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded transition-all font-black text-[12px] uppercase tracking-widest",
                                item.active ? "bg-pace-purple text-white shadow-none" : "text-admin-label hover:bg-gray-50 hover:text-admin-value"
                            )}
                        >
                            <item.icon size={16} />
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Form Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="border border-pace-border rounded bg-white p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-admin-label uppercase tracking-widest">Admin Name</label>
                                <input
                                    type="text"
                                    defaultValue="Pace Root Administrator"
                                    className="w-full px-4 py-3 rounded border border-pace-border bg-gray-50 bg-white focus:border-pace-purple outline-none text-[12px] font-bold text-admin-value"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-admin-label uppercase tracking-widest">Email Address</label>
                                <input
                                    type="text"
                                    defaultValue="admin@pacewisp.com"
                                    className="w-full px-4 py-3 rounded border border-pace-border bg-gray-50 bg-white focus:border-pace-purple outline-none text-[12px] font-bold text-admin-value"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-admin-label uppercase tracking-widest">System Theme</label>
                            <div className="flex gap-2">
                                <button className="px-6 py-2 border-2 border-pace-purple bg-pace-purple/5 text-pace-purple rounded text-[11px] font-black uppercase tracking-widest">Light Mode</button>
                                <button className="px-6 py-2 border border-pace-border text-admin-label hover:border-admin-value rounded text-[11px] font-black uppercase tracking-widest bg-white">Dark Mode (Coming Soon)</button>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div>
                                <h4 className="text-[12px] font-black text-admin-value uppercase tracking-tight">Two-Factor Authentication</h4>
                                <p className="text-[11px] text-admin-label font-bold mt-1">Keep your account secure with an extra layer of login protection.</p>
                            </div>
                            <button className="px-6 py-2 border border-pace-purple text-pace-purple bg-white rounded text-[10px] font-black uppercase tracking-widest hover:bg-pace-purple hover:text-white transition-all">Enable 2FA</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
