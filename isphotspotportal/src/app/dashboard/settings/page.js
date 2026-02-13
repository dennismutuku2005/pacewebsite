"use client"

import React from 'react'
import { User, Mail, Phone, Globe, Save, Camera } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function SettingsPage() {
    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Account Profile</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your personal information and contact details.</p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm space-y-8">
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple font-bold text-3xl">
                            DM
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-pace-purple text-white rounded-full flex items-center justify-center hover:bg-pace-purple/90 transition-all shadow-sm border border-white">
                            <Camera size={14} />
                        </button>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Dennis Mutuku</h3>
                        <p className="text-sm text-gray-500 font-medium mt-0.5">ISP Administrator</p>
                        <Badge variant="success" className="mt-2 text-[10px] px-2 py-0.5 font-medium">Verified Account</Badge>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-semibold text-gray-700 mb-2 block">Full Name</label>
                            <div className="relative">
                                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    defaultValue="Dennis Mutuku"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 outline-none focus:ring-1 focus:ring-pace-purple focus:border-pace-purple transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-700 mb-2 block">Email Address</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    defaultValue="admin@pacewisp.com"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 outline-none focus:ring-1 focus:ring-pace-purple focus:border-pace-purple transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-700 mb-2 block">Phone Number</label>
                            <div className="relative">
                                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    defaultValue="+254 712 345 678"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 outline-none focus:ring-1 focus:ring-pace-purple focus:border-pace-purple transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-700 mb-2 block">Business Name</label>
                            <div className="relative">
                                <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    defaultValue="Pace Wisp Networks"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 outline-none focus:ring-1 focus:ring-pace-purple focus:border-pace-purple transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button className="px-6 py-2.5 bg-pace-purple text-white rounded-lg font-medium text-sm hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                            <Save size={16} />
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
