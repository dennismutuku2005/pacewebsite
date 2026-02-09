"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Plus, ChevronDown, X, User, MapPin, Mail, Shield, Calendar, Phone, CreditCard, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CustomersPage() {
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const isps = [
        { id: 'REC-001', name: 'SkyNet Solutions Ltd', contact: 'John Kamau', email: 'admin@skynet.co.ke', phone: '+254 712 345 678', location: 'Nairobi', license: 'Enterprise', status: 'Active', renewal: '2024-03-22', balance: 'KES 0', joinDate: '2023-01-15' },
        { id: 'REC-002', name: 'Coast Connect Ltd', contact: 'Mary Wanjiku', email: 'billing@coastconnect.net', phone: '+254 722 987 654', location: 'Mombasa', license: 'Standard', status: 'Verifying', renewal: '2024-02-18', balance: 'KES 12,500', joinDate: '2023-06-10' },
        { id: 'REC-003', name: 'RiftWiFi systems', contact: 'David Omari', email: 'ops@riftwifi.co.ke', phone: '+254 733 111 222', location: 'Nakuru', license: 'Enterprise', status: 'Active', renewal: '2024-04-05', balance: 'KES 0', joinDate: '2022-11-20' },
        { id: 'REC-004', name: 'Lake Side Internet', contact: 'Sarah Atieno', email: 'dev@lakeside.net', phone: '+254 701 444 555', location: 'Kisumu', license: 'Startup', status: 'Active', renewal: '2024-08-12', balance: 'KES 4,500', joinDate: '2023-09-01' },
        { id: 'REC-005', name: 'Alpha Telecom Solutions', contact: 'Kelvin Chirchir', email: 'info@alpha.net', phone: '+254 799 000 999', location: 'Eldoret', license: 'Enterprise', status: 'Active', renewal: '2024-06-30', balance: 'KES 0', joinDate: '2023-03-12' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none">Client Directory</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Manage and view all registered ISP clients and their license status.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-pace-purple text-white rounded text-[12px] font-bold shadow-none hover:bg-[#3d1a75] transition-all uppercase tracking-widest leading-none">
                    <Plus size={14} />
                    Add New Client
                </button>
            </div>

            {/* Control Bar - Excel-like */}
            <div className="flex flex-col md:flex-row items-center gap-2 h-9">
                <div className="relative w-full md:w-80 h-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search by name, ID or email..."
                        className="w-full h-full pl-9 pr-3 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-bold text-admin-value"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto h-full">
                    <button className="flex items-center gap-2 px-4 h-full border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple hover:text-pace-purple transition-all uppercase tracking-widest leading-none bg-white">
                        <Filter size={12} /> Filter
                    </button>
                    <button className="px-4 h-full border border-pace-border text-admin-dim rounded text-[11px] font-black hover:bg-gray-50 hover:text-admin-label transition-all uppercase tracking-widest leading-none bg-white">
                        Export List
                    </button>
                </div>
            </div>

            {/* Main Data Sheet */}
            <div className="border border-pace-border rounded overflow-hidden bg-white shadow-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-pace-bg-subtle border-b border-pace-border font-black text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-200">Client ID</th>
                                <th className="px-5 py-3 border-r border-gray-200">Business Name</th>
                                <th className="px-5 py-3 border-r border-gray-200">Location</th>
                                <th className="px-5 py-3 border-r border-gray-200">Tier</th>
                                <th className="px-5 py-3 border-r border-gray-200 text-center">Status</th>
                                <th className="px-5 py-3 text-right">Renewal Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isps.map((isp) => (
                                <tr
                                    key={isp.id}
                                    onClick={() => setSelectedCustomer(isp)}
                                    className="hover:bg-gray-50 transition-colors group cursor-pointer"
                                >
                                    <td className="px-5 py-3 font-mono text-admin-dim group-hover:text-admin-value border-r border-gray-50 font-bold transition-colors uppercase">{isp.id}</td>
                                    <td className="px-5 py-3 border-r border-gray-50">
                                        <p className="font-black text-admin-value">{isp.name}</p>
                                        <p className="text-[10px] text-admin-label font-black leading-none mt-1.5 uppercase tracking-tighter">{isp.contact} • {isp.email}</p>
                                    </td>
                                    <td className="px-5 py-3 text-admin-label font-bold border-r border-gray-50">{isp.location}</td>
                                    <td className="px-5 py-3 border-r border-gray-50 font-black text-admin-label">
                                        {isp.license}
                                    </td>
                                    <td className="px-5 py-3 text-center border-r border-gray-50">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest border-b-2",
                                            isp.status === 'Active' ? "text-pace-green border-pace-green/10" : "text-orange-500 border-orange-200"
                                        )}>{isp.status}</span>
                                    </td>
                                    <td className="px-5 py-3 text-right font-black text-admin-value tracking-tight">
                                        {isp.renewal}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-pace-border flex items-center justify-between">
                    <p className="text-[11px] text-admin-label font-black uppercase tracking-tight">Showing {isps.length} clients</p>
                    <div className="flex items-center gap-1 h-8">
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black shadow-none tracking-widest">Prev</button>
                        <div className="flex gap-1 h-full font-black">
                            <button className="w-8 h-full rounded bg-pace-purple text-white text-[10px]">1</button>
                            <button className="w-8 h-full rounded border border-pace-border text-admin-label text-[10px] hover:bg-gray-50 bg-white">2</button>
                        </div>
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black shadow-none tracking-widest">Next</button>
                    </div>
                </div>
            </div>

            {/* Customer Info Modal */}
            <AnimatePresence>
                {selectedCustomer && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedCustomer(null)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                            className="relative bg-white w-full max-w-2xl rounded border border-pace-border shadow-none overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
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

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto space-y-8">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: 'License Tier', val: selectedCustomer.license },
                                        { label: 'Owed Balance', val: selectedCustomer.balance },
                                        { label: 'Subscription Status', val: selectedCustomer.status, color: selectedCustomer.status === 'Active' ? 'text-pace-green' : 'text-orange-500' }
                                    ].map((s, i) => (
                                        <div key={i} className="border border-gray-100 rounded p-4 bg-gray-50/50">
                                            <p className="text-[10px] font-black text-admin-label uppercase tracking-widest mb-2 leading-none">{s.label}</p>
                                            <p className={cn("text-[17px] font-black text-admin-value leading-none", s.color)}>{s.val}</p>
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
                                                    <item.icon size={14} className="text-pace-purple opacity-60" />
                                                    <span>{item.label}</span>
                                                </div>
                                                <span className="font-black text-admin-value uppercase tracking-tight">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 bg-pace-purple/5 border border-pace-purple/10 rounded-sm text-[12px] text-admin-label font-bold leading-relaxed">
                                    <span className="font-black uppercase text-[10px] text-pace-purple block mb-2 tracking-widest">Administrative Note</span>
                                    The client {selectedCustomer.name} is currently in good standing. All license keys are synchronized and active in the {selectedCustomer.location} region.
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="px-6 py-4 bg-pace-bg-subtle border-t border-pace-border flex justify-end gap-3 text-[12px]">
                                <button onClick={() => setSelectedCustomer(null)} className="px-6 py-2 border border-pace-border text-admin-label rounded font-black uppercase tracking-widest hover:border-pace-purple hover:text-pace-purple transition-all bg-white shadow-none">Close</button>
                                <button className="px-8 py-2 bg-pace-purple text-white rounded font-black uppercase tracking-widest hover:bg-[#3d1a75] transition-all">Update Info</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    )
}
