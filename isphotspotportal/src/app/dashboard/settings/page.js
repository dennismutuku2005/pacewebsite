"use client"

import React from 'react'
import { User, Mail, Phone, Globe, Save, Camera, Shield, Key } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function SettingsPage() {
    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Account Settings</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage your personal profile and security preferences.</p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="p-8 border-b border-gray-50 bg-gradient-to-r from-gray-50/50 to-white">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-pace-purple font-bold text-3xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-pace-purple to-purple-800 opacity-10"></div>
                                <span className="relative z-10">DM</span>
                            </div>
                            <button className="absolute bottom-0 right-0 w-8 h-8 bg-pace-purple text-white rounded-full flex items-center justify-center hover:bg-pace-purple/90 transition-all shadow-md border-2 border-white group-hover:scale-110">
                                <Camera size={14} />
                            </button>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Dennis Mutuku</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1 flex items-center justify-center sm:justify-start gap-2">
                                <Shield size={14} className="text-pace-purple" />
                                ISP Senior Administrator
                            </p>
                            <div className="flex gap-2 mt-3 justify-center sm:justify-start">
                                <Badge variant="success" className="text-[10px] px-2 py-0.5 font-medium border-green-200 bg-green-50 text-green-700">Verified Account</Badge>
                                <Badge variant="outline" className="text-[10px] px-2 py-0.5 font-medium border-gray-200 text-gray-500">2FA Enabled</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-700 ml-1">Full Name</label>
                            <div className="relative">
                                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    defaultValue="Dennis Mutuku"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 text-sm font-medium text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-pace-purple/10 focus:border-pace-purple transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-700 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    defaultValue="admin@pacewisp.com"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 text-sm font-medium text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-pace-purple/10 focus:border-pace-purple transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-700 ml-1">Phone Number</label>
                            <div className="relative">
                                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    defaultValue="+254 712 345 678"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 text-sm font-medium text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-pace-purple/10 focus:border-pace-purple transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-700 ml-1">Organization</label>
                            <div className="relative">
                                <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    defaultValue="Pace Wisp Networks"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/30 text-sm font-medium text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-pace-purple/10 focus:border-pace-purple transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-50 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
                            <Key size={16} />
                            Change Password
                        </button>
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-pace-purple text-white rounded-lg font-medium text-sm hover:bg-pace-purple/90 transition-all shadow-sm flex items-center justify-center gap-2">
                            <Save size={16} />
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
