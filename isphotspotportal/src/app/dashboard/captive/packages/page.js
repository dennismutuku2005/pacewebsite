"use client"

import React from 'react'
import { Plus, Package, Zap, Users, Gauge, Edit3, Trash2 } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function PackagesPage() {
    const packages = [
        { id: 1, name: 'Standard Hotspot', speed: '5Mbps', users: '1 User', color: 'bg-blue-500' },
        { id: 2, name: 'Premium High-Speed', speed: '10Mbps', users: '2 Users', color: 'bg-purple-600' },
        { id: 3, name: 'Family Bundle', speed: '15Mbps', users: '5 Users', color: 'bg-orange-500' },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Product Packages</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Define bandwidth profiles and concurrency limits for clients.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md flex items-center gap-2">
                    <Plus size={14} />
                    Create Package
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                        <div className={`h-2 ${pkg.color}`} />
                        <div className="p-8">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-admin-dim group-hover:bg-pace-purple/5 group-hover:text-pace-purple transition-all mb-6">
                                <Package size={24} />
                            </div>
                            <h3 className="text-[18px] font-black text-admin-value uppercase mb-6">{pkg.name}</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <Zap size={18} className="text-pace-purple" />
                                    <div>
                                        <p className="text-[9px] font-black text-admin-dim uppercase tracking-widest leading-none mb-1">Max Speed</p>
                                        <p className="text-[14px] font-black text-admin-value">{pkg.speed}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <Users size={18} className="text-admin-dim" />
                                    <div>
                                        <p className="text-[9px] font-black text-admin-dim uppercase tracking-widest leading-none mb-1">Device Limit</p>
                                        <p className="text-[14px] font-black text-admin-value">{pkg.users}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 py-3 bg-gray-50 text-[11px] font-black text-admin-label uppercase tracking-widest rounded-xl hover:bg-pace-purple hover:text-white transition-all">
                                    Edit Config
                                </button>
                                <button className="px-4 py-3 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
