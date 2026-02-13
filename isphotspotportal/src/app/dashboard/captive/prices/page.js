"use client"

import React, { useState } from 'react'
import { Plus, Tag, Edit3, Trash2, ArrowUpRight, DollarSign, Clock } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function ManagePricesPage() {
    const prices = [
        { id: 1, name: '2 Hours Access', price: '20', duration: '2 Hours', status: 'Active' },
        { id: 2, name: 'Daily Unlimited', price: '50', duration: '24 Hours', status: 'Active' },
        { id: 3, name: 'Weekly Pass', price: '300', duration: '7 Days', status: 'Active' },
        { id: 4, name: 'Monthly Standard', price: '1000', duration: '30 Days', status: 'Active' },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Price Management</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Configure end-user pricing modules for hotspot vouchers.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md flex items-center gap-2">
                    <Plus size={14} />
                    New Price Point
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {prices.map((p) => (
                    <div key={p.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-pace-purple/30 transition-all shadow-sm group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-admin-dim group-hover:bg-pace-purple/5 group-hover:text-pace-purple transition-colors">
                                <Tag size={18} />
                            </div>
                            <Badge variant="success" className="text-[9px] font-black">{p.status}</Badge>
                        </div>
                        <h3 className="text-[15px] font-black text-admin-value uppercase">{p.name}</h3>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between text-[12px]">
                                <span className="text-admin-dim font-bold flex items-center gap-1.5"><DollarSign size={12} /> Rate</span>
                                <span className="text-pace-purple font-black">KSH {p.price}</span>
                            </div>
                            <div className="flex items-center justify-between text-[12px]">
                                <span className="text-admin-dim font-bold flex items-center gap-1.5"><Clock size={12} /> Validity</span>
                                <span className="text-admin-value font-black uppercase text-[10px]">{p.duration}</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-50 flex gap-2">
                            <button className="flex-1 py-2 bg-gray-50 text-admin-dim rounded-lg hover:bg-admin-value hover:text-white transition-all">
                                <Edit3 size={14} className="mx-auto" />
                            </button>
                            <button className="flex-1 py-2 bg-red-50 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                                <Trash2 size={14} className="mx-auto" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
