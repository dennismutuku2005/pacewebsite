"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Plus, Search, MoreVertical, ExternalLink, Shield, Server, Box, ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/Skeleton'
import { Badge } from '@/components/Badge'
import { Modal } from '@/components/Modal'

export default function DomainsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [expandedDomain, setExpandedDomain] = useState(null)
    const [selectedDomain, setSelectedDomain] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const domains = [
        {
            id: 1,
            name: 'pacewisp.com',
            owner: 'SkyNet Solutions Ltd',
            status: 'Active',
            type: 'Main Domain',
            subdomains: [
                { id: 101, name: 'portal.pacewisp.com', service: 'Client Portal', status: 'Active' },
                { id: 102, name: 'api.pacewisp.com', service: 'Backend API', status: 'Active' },
                { id: 103, name: 'cdn.pacewisp.com', service: 'Assets Storage', status: 'Maintenance' },
            ]
        },
        {
            id: 2,
            name: 'coastconnect.net',
            owner: 'Coast Connect Ltd',
            status: 'Active',
            type: 'Main Domain',
            subdomains: [
                { id: 201, name: 'manage.coastconnect.net', service: 'ISP Manager', status: 'Active' },
                { id: 202, name: 'billing.coastconnect.net', service: 'Payment Gateway', status: 'Active' },
            ]
        },
        {
            id: 3,
            name: 'riftwifi.co.ke',
            owner: 'RiftWiFi systems',
            status: 'Pending',
            type: 'Main Domain',
            subdomains: []
        },
    ]

    return (
        <div className="space-y-6 font-figtree">
            {/* Page Header */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Managed domains</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Enterprise domain provisioning and subdomain management.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest flex items-center gap-2 shadow-md">
                    <Plus size={14} />
                    Register domain
                </button>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search domains or owners..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value placeholder:text-admin-dim shadow-sm"
                    />
                </div>
            </div>

            {/* Domains Table */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-6 py-4 text-[9px] uppercase tracking-widest font-bold text-admin-label w-1/3 opacity-60">Domain identity</th>
                            <th className="px-6 py-4 text-[9px] uppercase tracking-widest font-bold text-admin-label opacity-60">Account owner</th>
                            <th className="px-6 py-4 text-[9px] uppercase tracking-widest font-bold text-admin-label text-center opacity-60">Subdomains</th>
                            <th className="px-6 py-4 text-[9px] uppercase tracking-widest font-bold text-admin-label text-center opacity-60">Status</th>
                            <th className="px-6 py-4 text-[9px] uppercase tracking-widest font-bold text-admin-label text-right opacity-60">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-[12px]">
                        {isLoading ? (
                            [...Array(3)].map((_, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-5"><Skeleton className="h-4 w-48" /></td>
                                    <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                    <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-12 mx-auto" /></td>
                                    <td className="px-6 py-5 text-center"><Skeleton className="h-6 w-20 mx-auto" /></td>
                                    <td className="px-6 py-5"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                </tr>
                            ))
                        ) : (
                            domains.map((domain) => (
                                <React.Fragment key={domain.id}>
                                    <tr className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => setExpandedDomain(expandedDomain === domain.id ? null : domain.id)}
                                                    className="p-1 hover:bg-white rounded transition-all"
                                                >
                                                    {expandedDomain === domain.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                                </button>
                                                <div className="w-8 h-8 rounded-lg bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple">
                                                    <Globe size={14} />
                                                </div>
                                                <div>
                                                    <p className="font-extrabold text-admin-value leading-none uppercase text-[11px] mb-1">{domain.name}</p>
                                                    <p className="text-[10px] text-admin-dim font-medium">{domain.type}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <Shield size={12} className="text-pace-purple" />
                                                <span className="font-bold text-admin-label uppercase text-[11px] tracking-tight">{domain.owner}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="font-bold text-admin-value bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{domain.subdomains.length}</span>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={domain.status === 'Active' ? 'success' : 'warning'}>{domain.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button
                                                onClick={() => setSelectedDomain(domain)}
                                                className="p-2 text-admin-dim hover:text-pace-purple hover:bg-gray-50 rounded-lg transition-all"
                                            >
                                                <MoreVertical size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                    <AnimatePresence>
                                        {expandedDomain === domain.id && (
                                            <motion.tr
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="bg-gray-50/50"
                                            >
                                                <td colSpan="5" className="px-16 py-4">
                                                    <div className="space-y-3">
                                                        <h5 className="text-[9px] font-bold text-admin-dim uppercase tracking-[1.5px] opacity-60 mb-2">Subdomain mapping</h5>
                                                        {domain.subdomains.length > 0 ? (
                                                            domain.subdomains.map((sub) => (
                                                                <div key={sub.id} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg group/sub hover:border-pace-purple/30 transition-all shadow-sm">
                                                                    <div className="flex items-center gap-4">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-pace-purple" />
                                                                        <div>
                                                                            <p className="font-bold text-admin-value leading-none">{sub.name}</p>
                                                                            <p className="text-[10px] text-admin-dim font-medium mt-1">{sub.service}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex items-center gap-4">
                                                                        <Badge variant={sub.status === 'Active' ? 'success' : 'warning'} className="scale-90">{sub.status}</Badge>
                                                                        <button className="opacity-0 group-hover/sub:opacity-100 p-1.5 text-admin-dim hover:text-pace-purple transition-all">
                                                                            <ExternalLink size={12} />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <p className="text-[11px] text-admin-dim italic font-medium px-4">No subdomains provisioned for this entry.</p>
                                                        )}
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        )}
                                    </AnimatePresence>
                                </React.Fragment>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* View Domain Details Modal */}
            <Modal
                isOpen={!!selectedDomain}
                onClose={() => setSelectedDomain(null)}
                title="Domain configuration"
                maxWidth="max-w-xl"
                footer={
                    <>
                        <button onClick={() => setSelectedDomain(null)} className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all">Cancel</button>
                        <button className="px-8 py-2 bg-pace-purple text-white rounded-lg font-bold text-[11px] hover:bg-[#3d1a75] transition-all shadow-md">Save changes</button>
                    </>
                }
            >
                {selectedDomain && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest mb-2 opacity-50">Main domain</p>
                                <p className="text-[14px] font-extrabold text-admin-value uppercase">{selectedDomain.name}</p>
                            </div>
                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest mb-2 opacity-50">Current status</p>
                                <Badge variant={selectedDomain.status === 'Active' ? 'success' : 'warning'}>{selectedDomain.status}</Badge>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-[10px] font-bold text-admin-label uppercase tracking-[2px] opacity-50">Owner account</label>
                            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                                <div className="w-10 h-10 rounded-lg bg-pace-purple flex items-center justify-center text-white font-black">
                                    {selectedDomain.owner.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-[13px] font-extrabold text-admin-value leading-none uppercase">{selectedDomain.owner}</p>
                                    <p className="text-[11px] text-admin-dim font-medium mt-1.5">Authorized enterprise account</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="block text-[10px] font-bold text-admin-label uppercase tracking-[2px] opacity-50">System records</label>
                                <button className="text-[10px] font-bold text-pace-purple uppercase tracking-widest flex items-center gap-1 hover:underline">
                                    <Plus size={12} /> Add mapping
                                </button>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg text-[12px] bg-white group hover:border-pace-purple/20 transition-all">
                                    <span className="font-bold text-admin-label">DNS records</span>
                                    <span className="font-bold text-pace-green">Verified</span>
                                </div>
                                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg text-[12px] bg-white group hover:border-pace-purple/20 transition-all">
                                    <span className="font-bold text-admin-label">SSL certificate</span>
                                    <span className="font-bold text-pace-green">Enabled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
