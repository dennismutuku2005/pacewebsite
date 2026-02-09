"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search, Filter, Plus, ChevronDown, X, User, MapPin,
    Mail, Shield, Calendar, Phone, CreditCard, Clock,
    Trash2, AlertCircle, ChevronLeft, ChevronRight, MoreHorizontal
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CustomersPage() {
    const router = useRouter()
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [deleteModal, setDeleteModal] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    // Initial data
    const initialIsps = [
        { id: 'REC-001', name: 'SkyNet Solutions Ltd', contact: 'John Kamau', email: 'admin@skynet.co.ke', phone: '+254 712 345 678', location: 'Nairobi', license: 'Enterprise', status: 'Active', renewal: '2024-03-22', balance: 'KES 0', joinDate: '2023-01-15' },
        { id: 'REC-002', name: 'Coast Connect Ltd', contact: 'Mary Wanjiku', email: 'billing@coastconnect.net', phone: '+254 722 987 654', location: 'Mombasa', license: 'Standard', status: 'Verifying', renewal: '2024-02-18', balance: 'KES 12,500', joinDate: '2023-06-10' },
        { id: 'REC-003', name: 'RiftWiFi systems', contact: 'David Omari', email: 'ops@riftwifi.co.ke', phone: '+254 733 111 222', location: 'Nakuru', license: 'Enterprise', status: 'Active', renewal: '2024-04-05', balance: 'KES 0', joinDate: '2022-11-20' },
        { id: 'REC-004', name: 'Lake Side Internet', contact: 'Sarah Atieno', email: 'dev@lakeside.net', phone: '+254 701 444 555', location: 'Kisumu', license: 'Startup', status: 'Active', renewal: '2024-08-12', balance: 'KES 4,500', joinDate: '2023-09-01' },
        { id: 'REC-005', name: 'Alpha Telecom Solutions', contact: 'Kelvin Chirchir', email: 'info@alpha.net', phone: '+254 799 000 999', location: 'Eldoret', license: 'Enterprise', status: 'Active', renewal: '2024-06-30', balance: 'KES 0', joinDate: '2023-03-12' },
    ]

    const [isps, setIsps] = useState(initialIsps)

    // Simulate shimmer loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    const handleDelete = (id) => {
        setIsps(isps.filter(item => item.id !== id))
        setDeleteModal(null)
    }

    const TableSkeleton = () => (
        <div className="animate-pulse">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex border-b border-gray-50 h-[64px]">
                    <div className="w-[12%] bg-gray-50 h-4 my-auto mx-5 rounded"></div>
                    <div className="flex-1 bg-gray-50 h-4 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-4 my-auto mx-5 rounded"></div>
                    <div className="w-[10%] bg-gray-50 h-4 my-auto mx-5 rounded"></div>
                    <div className="w-[10%] bg-gray-50 h-4 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-4 my-auto mx-5 rounded"></div>
                </div>
            ))}
        </div>
    )

    return (
        <div className="space-y-6 font-figtree">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none">Client Directory</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Manage and view all registered ISP clients and their license status.</p>
                </div>
                <button
                    onClick={() => router.push('/dashboard/customers/new')}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-pace-purple text-white rounded text-[12px] font-bold shadow-none hover:bg-[#3d1a75] transition-all uppercase tracking-widest leading-none"
                >
                    <Plus size={14} />
                    Add New Client
                </button>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-2 h-9">
                <div className="relative w-full md:w-80 h-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search by name, ID or email..."
                        className="w-full h-full pl-9 pr-3 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-bold text-admin-value placeholder:text-admin-dim"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto h-full text-[11px] font-black uppercase tracking-widest">
                    <button className="flex items-center gap-2 px-4 h-full border border-pace-border text-admin-label rounded hover:border-pace-purple hover:text-pace-purple transition-all bg-white">
                        <Filter size={12} /> Filter
                    </button>
                    <button className="px-4 h-full border border-pace-border text-admin-dim rounded hover:bg-gray-50 transition-all bg-white">
                        Export Report
                    </button>
                </div>
            </div>

            {/* Main Data Table */}
            <div className="border border-pace-border rounded overflow-hidden bg-white shadow-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-pace-bg-subtle border-b border-pace-border font-black text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-100">Client ID</th>
                                <th className="px-5 py-3 border-r border-gray-100">Business Name</th>
                                <th className="px-5 py-3 border-r border-gray-100">Location</th>
                                <th className="px-5 py-3 border-r border-gray-100">Tier</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Status</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <tr><td colSpan="6"><TableSkeleton /></td></tr>
                            ) : (
                                isps.map((isp) => (
                                    <tr
                                        key={isp.id}
                                        className="hover:bg-gray-50 transition-colors group"
                                    >
                                        <td
                                            onClick={() => setSelectedCustomer(isp)}
                                            className="px-5 py-4 font-mono text-admin-dim group-hover:text-admin-value border-r border-gray-50 font-black transition-colors uppercase cursor-pointer"
                                        >
                                            {isp.id}
                                        </td>
                                        <td
                                            onClick={() => setSelectedCustomer(isp)}
                                            className="px-5 py-4 border-r border-gray-50 cursor-pointer"
                                        >
                                            <p className="font-black text-admin-value leading-none">{isp.name}</p>
                                            <p className="text-[10px] text-admin-label font-black uppercase tracking-tight mt-1.5 opacity-80">{isp.contact} • {isp.email}</p>
                                        </td>
                                        <td className="px-5 py-4 text-admin-label font-bold border-r border-gray-50">{isp.location}</td>
                                        <td className="px-5 py-4 border-r border-gray-50 font-black text-admin-label">
                                            {isp.license}
                                        </td>
                                        <td className="px-5 py-4 text-center border-r border-gray-50">
                                            <span className="font-black uppercase text-[10px] tracking-widest border-b-2 border-gray-100 text-admin-label">{isp.status}</span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex justify-end gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => setDeleteModal(isp)}
                                                    className="p-2 border border-red-50 text-red-300 hover:text-red-500 hover:bg-red-50 rounded transition-all"
                                                    title="Delete Data"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                                <button className="p-2 border border-pace-border text-admin-dim hover:text-admin-value rounded bg-white">
                                                    <MoreHorizontal size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="p-4 bg-gray-50/50 border-t border-pace-border flex items-center justify-between">
                    <p className="text-[11px] text-admin-label font-black uppercase tracking-tight">Records: {isps.length} clients indexed</p>
                    <div className="flex items-center gap-1 h-8">
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black hover:border-pace-purple transition-all">
                            <ChevronLeft size={14} />
                        </button>
                        <div className="flex gap-1 h-full">
                            <button className="w-8 h-full rounded bg-pace-purple text-white text-[10px] font-black">1</button>
                            <button className="w-8 h-full rounded border border-pace-border text-admin-label text-[10px] hover:bg-gray-50 bg-white font-black">2</button>
                        </div>
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black hover:border-pace-purple transition-all">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <AnimatePresence>
                {deleteModal && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteModal(null)} />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-white w-full max-w-md rounded border border-pace-border shadow-2xl p-8 space-y-6"
                        >
                            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                                <AlertCircle size={24} />
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-[18px] font-black text-admin-value font-figtree">Permanently Delete Account?</h3>
                                <p className="text-[12px] text-admin-label font-medium leading-relaxed">
                                    You are about to delete **{deleteModal.name}**. This will permanently remove their financial records, router configurations, and all associated usage data.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setDeleteModal(null)}
                                    className="flex-1 py-3 border border-pace-border text-admin-label rounded font-black uppercase text-[11px] tracking-widest hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => handleDelete(deleteModal.id)}
                                    className="flex-1 py-3 bg-red-500 text-white rounded font-black uppercase text-[11px] tracking-widest hover:bg-red-600 shadow-none hover:shadow-lg transition-all"
                                >
                                    Confirm Delete
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Existing Info Modal... */}
            <AnimatePresence>
                {selectedCustomer && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCustomer(null)} className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-2xl rounded border border-pace-border shadow-none overflow-hidden flex flex-col max-h-[90vh]">
                            {/* ... Content from previous implementation ... */}
                            <div className="px-6 py-4 bg-pace-bg-subtle border-b border-pace-border flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-pace-purple flex items-center justify-center text-white font-black text-[12px]">
                                        {selectedCustomer.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h2 className="text-[16px] font-black text-admin-value leading-none">{selectedCustomer.name}</h2>
                                        <p className="text-[10px] font-black text-admin-label uppercase tracking-[2px] mt-1.5">{selectedCustomer.id}</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedCustomer(null)} className="text-admin-dim hover:text-admin-value transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-8 overflow-y-auto space-y-8">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: 'License Tier', val: selectedCustomer.license },
                                        { label: 'Owed Balance', val: selectedCustomer.balance },
                                        { label: 'Subscription Status', val: selectedCustomer.status }
                                    ].map((s, i) => (
                                        <div key={i} className="border border-gray-100 rounded p-4 bg-gray-50/50">
                                            <p className="text-[10px] font-black text-admin-label uppercase tracking-widest mb-2 leading-none">{s.label}</p>
                                            <p className="text-[17px] font-black text-admin-value leading-none">{s.val}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="border border-pace-border rounded bg-white">
                                    <div className="bg-gray-50 px-4 py-2 border-b border-pace-border">
                                        <h3 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Client Contact Information</h3>
                                    </div>
                                    <div className="divide-y divide-gray-50">
                                        {[
                                            { label: 'Contact Person', val: selectedCustomer.contact, icon: User },
                                            { label: 'Email Address', val: selectedCustomer.email, icon: Mail },
                                            { label: 'Phone Number', val: selectedCustomer.phone, icon: Phone },
                                            { label: 'Business Region', val: selectedCustomer.location, icon: MapPin },
                                            { label: 'Join Date', val: selectedCustomer.joinDate, icon: Clock },
                                            { label: 'Next Renewal', val: selectedCustomer.renewal, icon: Calendar },
                                        ].map((item, i) => (
                                            <div key={i} className="px-4 py-3 flex items-center justify-between text-[12px]">
                                                <div className="flex items-center gap-3 text-admin-label font-black uppercase tracking-tight">
                                                    <item.icon size={14} className="text-admin-dim" />
                                                    <span>{item.label}</span>
                                                </div>
                                                <span className="font-black text-admin-value uppercase tracking-tight">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-pace-bg-subtle border-t border-pace-border flex justify-end gap-3 text-[12px]">
                                <button onClick={() => setSelectedCustomer(null)} className="px-6 py-2 border border-pace-border text-admin-label rounded font-black uppercase tracking-widest hover:border-pace-purple hover:text-pace-purple bg-white shadow-none">Close</button>
                                <button className="px-8 py-2 bg-pace-purple text-white rounded font-black uppercase tracking-widest hover:bg-[#3d1a75]">Update Info</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
