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
                    <h1 className="text-[20px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Managed Domains</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Enterprise domain provisioning and subdomain management.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest flex items-center gap-2">
                    <Plus size={14} />
                    Register Domain
                </button>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search domains or owners..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-bold text-admin-value placeholder:text-admin-dim"
                    />
                </div>
            </div>

            {/* Domains Table */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label w-1/3">Domain Identity</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label">Account Owner</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label text-center">Subdomains</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label text-center">Status</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label text-right">Actions</th>
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
                                                <div className="w-8 h-8 rounded bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple">
                                                    <Globe size={14} />
                                                </div>
                                                <div>
                                                    <p className="font-black text-admin-value leading-none uppercase">{domain.name}</p>
                                                    <p className="text-[10px] text-admin-dim font-bold mt-1.5 uppercase tracking-tighter">{domain.type}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <Shield size={12} className="text-pace-purple" />
                                                <span className="font-bold text-admin-label uppercase tracking-tight">{domain.owner}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="font-black text-admin-value bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{domain.subdomains.length}</span>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={domain.status === 'Active' ? 'success' : 'warning'}>{domain.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button
                                                onClick={() => setSelectedDomain(domain)}
                                                className="p-2 text-admin-dim hover:text-pace-purple hover:bg-white rounded transition-all"
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
                                                        <h5 className="text-[9px] font-black text-admin-dim uppercase tracking-[2px] mb-2">Subdomain Mapping</h5>
                                                        {domain.subdomains.length > 0 ? (
                                                            domain.subdomains.map((sub) => (
                                                                <div key={sub.id} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg group/sub hover:border-pace-purple/30 transition-all">
                                                                    <div className="flex items-center gap-4">
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-pace-purple" />
                                                                        <div>
                                                                            <p className="font-black text-admin-value leading-none">{sub.name}</p>
                                                                            <p className="text-[10px] text-admin-dim font-bold mt-1.5 uppercase tracking-tighter">{sub.service}</p>
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
                title="Domain Configuration"
                maxWidth="max-w-xl"
                footer={
                    <>
                        <button onClick={() => setSelectedDomain(null)} className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-gray-50">Cancel</button>
                        <button className="px-8 py-2 bg-pace-purple text-white rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-[#3d1a75]">Save Changes</button>
                    </>
                }
            >
                {selectedDomain && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2">Main Domain</p>
                                <p className="text-[14px] font-black text-admin-value">{selectedDomain.name}</p>
                            </div>
                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest mb-2">Current Status</p>
                                <Badge variant={selectedDomain.status === 'Active' ? 'success' : 'warning'}>{selectedDomain.status}</Badge>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-[10px] font-black text-admin-label uppercase tracking-[2px]">Owner Account</label>
                            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-pace-purple flex items-center justify-center text-white font-black">
                                    {selectedDomain.owner.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-[13px] font-black text-admin-value leading-none uppercase">{selectedDomain.owner}</p>
                                    <p className="text-[11px] text-admin-dim font-bold mt-1.5 uppercase tracking-tighter">Authorized Enterprise Account</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="block text-[10px] font-black text-admin-label uppercase tracking-[2px]">System Records</label>
                                <button className="text-[10px] font-black text-pace-purple uppercase tracking-widest flex items-center gap-1">
                                    <Plus size={12} /> Add Mapping
                                </button>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg text-[12px]">
                                    <span className="font-bold text-admin-label">DNS Records</span>
                                    <span className="font-black text-pace-green uppercase">Verified</span>
                                </div>
                                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg text-[12px]">
                                    <span className="font-bold text-admin-label">SSL Certificate</span>
                                    <span className="font-black text-pace-green uppercase">Enabled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
