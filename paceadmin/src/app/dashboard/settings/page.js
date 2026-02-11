"use client"

import React, { useState } from 'react'
import {
    User, Mail, Phone, MapPin,
    Shield, Bell, Globe, Lock,
    Save, Camera, CheckCircle2,
    Calendar, Key, Fingerprint
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile')

    const tabs = [
        { id: 'profile', icon: User, label: 'Personal Profile' },
        { id: 'security', icon: Shield, label: 'Security & Access' },
        { id: 'notifications', icon: Bell, label: 'Communication' },
        { id: 'display', icon: Globe, label: 'System Display' },
    ]

    return (
        <div className="space-y-8 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-100 pb-6">
                <div>
                    <h1 className="text-[24px] font-black text-admin-value leading-tight tracking-tight text-pace-purple transition-all">Platform Preferences</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Customize your administrative experience and security parameters.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 bg-pace-purple text-white rounded-xl text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-lg shadow-pace-purple/20 flex items-center gap-2 group">
                        <Save size={14} className="group-hover:scale-110 transition-transform" />
                        Persist Changes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Left: Tab Navigation */}
                <div className="lg:col-span-3 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group",
                                activeTab === tab.id
                                    ? "bg-pace-purple text-white shadow-md scale-[1.02]"
                                    : "text-admin-label hover:bg-gray-50 hover:text-admin-value"
                            )}
                        >
                            <tab.icon size={18} className={cn("transition-colors", activeTab === tab.id ? "text-white" : "text-admin-dim group-hover:text-pace-purple")} />
                            <span className="font-bold text-[12px] uppercase tracking-wider">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Right: Content Area */}
                <div className="lg:col-span-9 space-y-8">

                    {/* Profile Section */}
                    {activeTab === 'profile' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">

                            {/* Avatar/Cover Area */}
                            <div className="relative border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm group">
                                <div className="h-24 bg-gradient-to-r from-pace-purple to-[#6a29be] opacity-10" />
                                <div className="px-8 pb-8 flex flex-col sm:flex-row items-end gap-6 -mt-10">
                                    <div className="relative">
                                        <div className="w-24 h-24 rounded-2xl border-4 border-white bg-pace-purple flex items-center justify-center text-[32px] font-black text-white shadow-xl">
                                            DM
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-gray-100 rounded-lg text-pace-purple shadow-lg hover:scale-110 transition-transform">
                                            <Camera size={14} />
                                        </button>
                                    </div>
                                    <div className="flex-1 space-y-1 mb-2">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-[20px] font-black text-admin-value uppercase tracking-tight">Dennis Mutuku</h2>
                                            <Badge variant="success" className="px-2 py-0.5">Root Admin</Badge>
                                        </div>
                                        <p className="text-[12px] text-admin-label font-medium flex items-center gap-1.5 uppercase tracking-widest opacity-60">
                                            <Mail size={12} /> dennis@pacewisp.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Form */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: 'Display Name', val: 'Dennis Mutuku', icon: User },
                                    { label: 'Work Email', val: 'dennis@pace.tech', icon: Mail },
                                    { label: 'Liaison Number', val: '+254 700 000 000', icon: Phone },
                                    { label: 'Operating Zone', val: 'Nairobi HQ, Kenya', icon: MapPin },
                                ].map((field, i) => (
                                    <div key={i} className="space-y-2.5">
                                        <label className="flex items-center gap-2 text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-60">
                                            <field.icon size={12} /> {field.label}
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={field.val}
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-100 bg-white focus:border-pace-purple focus:ring-4 focus:ring-pace-purple/5 outline-none text-[13px] font-bold text-admin-value transition-all shadow-sm"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Role Summary */}
                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-[11px] font-black text-admin-value uppercase tracking-wider">Access Tier: Enterprise</p>
                                    <p className="text-[11px] text-admin-label font-medium">You have full administrative control over all system nodes.</p>
                                </div>
                                <div className="flex -space-x-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-pace-purple/10 flex items-center justify-center text-[9px] font-black text-pace-purple">
                                            {String.fromCharCode(65 + i)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Placeholder */}
                    {activeTab === 'security' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 border border-gray-100 rounded-3xl bg-white shadow-sm flex flex-col justify-between h-48 group hover:border-pace-purple/20 transition-all">
                                    <div className="p-3 bg-pace-purple/5 rounded-2xl w-fit text-pace-purple group-hover:scale-110 transition-transform">
                                        <Key size={20} />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-[14px] font-black text-admin-value uppercase tracking-tight">Password Management</h4>
                                        <p className="text-[11px] text-admin-label font-medium">Last rotated: 42 days ago</p>
                                        <button className="text-[10px] font-black text-pace-purple uppercase tracking-widest hover:underline mt-2">Change Secret Key</button>
                                    </div>
                                </div>
                                <div className="p-6 border border-gray-100 rounded-3xl bg-white shadow-sm flex flex-col justify-between h-48 group hover:border-pace-purple/20 transition-all">
                                    <div className="p-3 bg-pace-green/5 rounded-2xl w-fit text-pace-green group-hover:scale-110 transition-transform">
                                        <Fingerprint size={20} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-[14px] font-black text-admin-value uppercase tracking-tight">Two-Factor Auth</h4>
                                            <Badge variant="success" className="scale-75">Active</Badge>
                                        </div>
                                        <p className="text-[11px] text-admin-label font-medium">Authentication via Pace Mobile App</p>
                                        <button className="text-[10px] font-black text-admin-dim uppercase tracking-widest hover:underline mt-2">Recovery Codes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
