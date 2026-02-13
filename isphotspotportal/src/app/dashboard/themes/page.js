"use client"

import React, { useState } from 'react'
import { Layout, Check, Server, Folder, Globe, UploadCloud, RefreshCw, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ThemesPage() {
    const [selectedTheme, setSelectedTheme] = useState('premium')
    const [isUpdating, setIsUpdating] = useState(false)

    const themes = [
        { id: 'premium', name: 'Premium Flow', preview: 'Dark mode, high animations, glassmorphism UI.', color: 'bg-indigo-600' },
        { id: 'minimal', name: 'Minimal White', preview: 'Clean, fast, high contrast light UI strategy.', color: 'bg-gray-800' },
        { id: 'vibrant', name: 'Electric Blue', preview: 'Gaming style, high visibility, bold typography.', color: 'bg-blue-500' },
    ]

    const handleUpdate = () => {
        setIsUpdating(true)
        setTimeout(() => setIsRefreshing(false), 2000)
    }

    return (
        <div className="space-y-8 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Hotspot Theming</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Customize the captive portal appearance across your router nodes.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Configuration Panel */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6">
                        <h3 className="text-[12px] font-black text-admin-value uppercase tracking-widest border-b border-gray-50 pb-4">Deployment Config</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Target Router</label>
                                <div className="relative">
                                    <Server size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" />
                                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 transition-all appearance-none cursor-pointer">
                                        <option>Nairobi Main Hub</option>
                                        <option>Mombasa Branch</option>
                                        <option>Kisumu Node</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2 block">Flash Directory</label>
                                <div className="relative">
                                    <Folder size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" />
                                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-[12px] font-bold text-admin-value outline-none focus:ring-1 focus:ring-pace-purple/20 transition-all appearance-none cursor-pointer">
                                        <option>/flash/hotspot</option>
                                        <option>/disk1/portal</option>
                                        <option>/skins/default</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => { setIsUpdating(true); setTimeout(() => setIsUpdating(false), 2000); }}
                            disabled={isUpdating}
                            className="w-full py-4 bg-pace-purple text-white rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-[#3d1a75] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isUpdating ? <RefreshCw size={16} className="animate-spin" /> : <UploadCloud size={16} />}
                            {isUpdating ? 'Synchronizing...' : 'Update Theme Now'}
                        </button>
                    </div>

                    <div className="bg-pace-purple/5 border border-pace-purple/10 rounded-2xl p-4 flex items-start gap-3">
                        <Globe size={18} className="text-pace-purple shrink-0 mt-0.5" />
                        <p className="text-[11px] text-[#4B1D8F] font-medium leading-relaxed">
                            Changes are applied instantly to the router's file system. Make sure the directory has write permissions.
                        </p>
                    </div>
                </div>

                {/* Theme Selection */}
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {themes.map((theme) => (
                            <div
                                key={theme.id}
                                onClick={() => setSelectedTheme(theme.id)}
                                className={cn(
                                    "relative bg-white border rounded-3xl p-6 cursor-pointer transition-all group overflow-hidden h-[240px] flex flex-col justify-between",
                                    selectedTheme === theme.id ? "border-pace-purple ring-1 ring-pace-purple/20 shadow-xl" : "border-gray-100 hover:border-pace-purple/30"
                                )}
                            >
                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", theme.color)}>
                                    <Smartphone size={24} />
                                </div>

                                <div>
                                    <h4 className="text-[15px] font-black text-admin-value uppercase">{theme.name}</h4>
                                    <p className="text-[11px] text-admin-label font-medium mt-2 leading-tight opacity-70 italic">{theme.preview}</p>
                                </div>

                                {selectedTheme === theme.id && (
                                    <div className="absolute top-4 right-4 w-6 h-6 bg-pace-purple text-white rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                                        <Check size={14} />
                                    </div>
                                )}

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pace-purple/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        ))}

                        <div className="border border-dashed border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-admin-dim hover:text-pace-purple hover:border-pace-purple/50 transition-all cursor-pointer group">
                            <Plus size={32} className="mb-2 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                            <p className="text-[10px] font-black uppercase tracking-widest">Custom Upload</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
