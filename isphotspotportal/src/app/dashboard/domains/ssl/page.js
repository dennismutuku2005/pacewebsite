"use client"

import React, { useState, useEffect } from 'react'
import { Lock, ShieldCheck, Search, Plus, Globe, RefreshCcw, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'

export default function SSLStatusPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const certificates = [
        { id: 1, domain: 'pacewisp.com', issuer: "Let's Encrypt", expiry: '2024-05-20', status: 'Active', type: 'Wildcard' },
        { id: 2, domain: 'portal.pacewisp.com', issuer: "Let's Encrypt", expiry: '2024-05-20', status: 'Active', type: 'Single' },
        { id: 3, domain: 'coastconnect.net', issuer: 'Sectigo RSA', expiry: '2025-01-15', status: 'Active', type: 'Enterprise' },
        { id: 4, domain: 'riftwifi.co.ke', issuer: "Let's Encrypt", expiry: '2024-02-15', status: 'Expiring Soon', type: 'Single' },
    ]

    const getStatusVariant = (status) => {
        if (status === 'Active') return 'success'
        if (status === 'Expiring Soon') return 'warning'
        return 'error'
    }

    return (
        <div className="space-y-6 font-figtree">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">SSL Certificates</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Monitor certificate expiry, installation status, and auto-renewal logs.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest flex items-center gap-2 shadow-md">
                    <Plus size={14} />
                    Issue Certificate
                </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    { label: 'Secure Domains', val: '18 Total', note: 'All systems green', icon: ShieldCheck, color: 'success' },
                    { label: 'Auto-Renewals', val: '12 Active', note: 'Managed by Pace', icon: RefreshCcw, color: 'info' },
                    { label: 'Attention Req.', val: '01 Domain', note: 'Manual update path', icon: AlertCircle, color: 'warning' },
                ].map((s, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-pace-purple/20 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-gray-50 rounded-lg text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                <s.icon size={18} />
                            </div>
                            <Badge variant={s.color} className="scale-90 px-1">Global</Badge>
                        </div>
                        <p className="text-[10px] font-bold text-admin-label mb-1 uppercase tracking-widest">{s.label}</p>
                        <h4 className="text-[20px] font-extrabold text-admin-value leading-none">{s.val}</h4>
                    </div>
                ))}
            </div>

            {/* Selector Placeholder */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-pace-purple shadow-sm">
                    <Lock size={18} />
                </div>
                <div className="flex-1">
                    <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-60">Security monitoring for:</p>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="font-extrabold text-admin-value text-[14px] uppercase">All Enterprise Domains</span>
                        <Badge variant="info" className="scale-90">Auto-Scaling</Badge>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Domain name</th>
                                <th className="px-6 py-4">Authority / Issuer</th>
                                <th className="px-6 py-4 text-center">Cert Type</th>
                                <th className="px-6 py-4 text-center">Expiry date</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Protection</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(4)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-6 w-16 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-6 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-6 w-12 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                certificates.map((cert) => (
                                    <tr key={cert.id} className="hover:bg-gray-50/50 transition-all group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-7 h-7 rounded-full bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple">
                                                    <Globe size={12} />
                                                </div>
                                                <p className="font-extrabold text-admin-value leading-none uppercase text-[11px] group-hover:text-pace-purple transition-colors">{cert.domain}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 font-bold text-admin-label uppercase text-[10px] tracking-tight">{cert.issuer}</td>
                                        <td className="px-6 py-5 text-center font-bold text-admin-dim uppercase text-[10px]">{cert.type}</td>
                                        <td className="px-6 py-5 text-center font-black text-admin-value uppercase">{cert.expiry}</td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(cert.status)}>{cert.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end">
                                                <ShieldCheck size={16} className="text-pace-green" />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
