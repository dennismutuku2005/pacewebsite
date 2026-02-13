"use client"

import React, { useState } from 'react'
import { Search, ShieldAlert, Phone, ShieldCheck, UserX, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'

export default function BlockStkPage() {
    const [mobile, setMobile] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const [isSearching, setIsSearching] = useState(false)

    const handleSearch = () => {
        if (!mobile) return
        setIsSearching(true)
        // Mock API call
        setTimeout(() => {
            setSearchResult({
                name: 'John Doe',
                mobile: mobile,
                status: 'Active',
                lastTransaction: 'KSH 50 - 2026-02-13',
                macAddress: '00:1A:2B:3C:4D:5E'
            })
            setIsSearching(false)
        }, 800)
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 font-figtree animate-in fade-in duration-700">
            <div className="text-center space-y-2 border-b border-gray-50 pb-8">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-100">
                    <ShieldAlert size={32} />
                </div>
                <h1 className="text-[24px] font-black text-admin-value uppercase tracking-tight">Financial Security Center</h1>
                <p className="text-[13px] text-admin-label font-medium opacity-70">Search and restrict customers from making STK payments.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="space-y-6">
                    <div>
                        <label className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-3 block">Customer Mobile Number</label>
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-admin-dim" size={18} />
                                <input
                                    type="text"
                                    placeholder="Enter mobile number (e.g. 0712345678)"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-red-400 outline-none text-[14px] font-bold text-admin-value transition-all"
                                />
                            </div>
                            <button
                                onClick={handleSearch}
                                disabled={isSearching}
                                className="px-8 py-4 bg-admin-value text-white rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95 disabled:opacity-50"
                            >
                                {isSearching ? 'Scanning...' : 'Search User'}
                            </button>
                        </div>
                    </div>

                    {searchResult && (
                        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 animate-in slide-in-from-top duration-500">
                            <div className="flex items-start justify-between">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-1">Customer Profile</p>
                                        <h3 className="text-[18px] font-black text-admin-value uppercase leading-none">{searchResult.name}</h3>
                                        <p className="text-[12px] text-admin-label font-bold mt-1.5">{searchResult.mobile}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-white rounded-xl border border-gray-100">
                                            <p className="text-[9px] font-black text-admin-dim uppercase mb-1">Status</p>
                                            <Badge variant="success" className="text-[9px] font-black uppercase">{searchResult.status}</Badge>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-gray-100">
                                            <p className="text-[9px] font-black text-admin-dim uppercase mb-1">MAC Address</p>
                                            <p className="text-[11px] font-extrabold text-admin-value">{searchResult.macAddress}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right space-y-4">
                                    <div className="inline-flex flex-col items-end">
                                        <p className="text-[9px] font-black text-admin-dim uppercase mb-1">Recent Activity</p>
                                        <p className="text-[11px] font-bold text-admin-label">{searchResult.lastTransaction}</p>
                                    </div>
                                    <button className="w-full py-4 bg-red-500 text-white rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-red-100 flex items-center justify-center gap-2">
                                        <UserX size={18} />
                                        Block STK Access
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                <AlertCircle size={18} className="text-orange-500 shrink-0" />
                                <p className="text-[11px] text-orange-700 font-medium leading-relaxed">
                                    Blocking STK access will prevent this customer from initiating any M-Pesa push payments. This is a security measure to prevent fraudulent transactions or multiple failed attempts.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
