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
                    <h1 className="text-[20px] font-black text-gray-900 leading-none">Software Tenant Registry</h1>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">Detailed database of global ISP software licenses and deployment regions.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded text-[12px] font-bold shadow-none hover:opacity-90 transition-all uppercase tracking-widest leading-none">
                    <Plus size={14} />
                    Onboard New Entity
                </button>
            </div>

            {/* Control Bar - Excel-like */}
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="relative w-full md:w-80 h-9">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                    <input
                        type="text"
                        placeholder="Lookup by name or ID..."
                        className="w-full h-full pl-9 pr-3 rounded border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 outline-none text-[12px] font-medium transition-all"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto h-9">
                    <button className="flex items-center gap-2 px-4 h-full border border-gray-200 text-gray-500 rounded text-[11px] font-bold hover:bg-gray-50 transition-all uppercase tracking-widest leading-none">
                        <Filter size={12} /> Filter Settings <ChevronDown size={12} />
                    </button>
                    <button className="px-4 h-full border border-gray-200 text-gray-400 rounded text-[11px] font-bold hover:bg-gray-50 transition-all uppercase tracking-widest leading-none">
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Main Data Sheet - The "Excel" look */}
            <div className="border border-gray-200 rounded overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 font-black text-gray-400 uppercase tracking-widest text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100">Record ID</th>
                                <th className="px-5 py-3 border-r border-gray-100">Enterprise Entity</th>
                                <th className="px-5 py-3 border-r border-gray-100">Region Zone</th>
                                <th className="px-5 py-3 border-r border-gray-100">Software tier</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Software Status</th>
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
                                    <td className="px-5 py-3 font-mono text-gray-300 group-hover:text-gray-900 border-r border-gray-50 transition-colors">{isp.id}</td>
                                    <td className="px-5 py-3 border-r border-gray-50">
                                        <p className="font-bold text-gray-900">{isp.name}</p>
                                        <p className="text-[10px] text-gray-400 font-medium leading-none mt-1">{isp.contact} • {isp.email}</p>
                                    </td>
                                    <td className="px-5 py-3 text-gray-500 font-medium border-r border-gray-50">{isp.location}</td>
                                    <td className="px-5 py-3 border-r border-gray-50 font-bold text-gray-600">
                                        {isp.license}
                                    </td>
                                    <td className="px-5 py-3 text-center border-r border-gray-50">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest border-b-2",
                                            isp.status === 'Active' ? "text-pace-green border-pace-green/20" : "text-orange-500 border-orange-200"
                                        )}>{isp.status}</span>
                                    </td>
                                    <td className="px-5 py-3 text-right font-black text-gray-900 tracking-tight">
                                        {isp.renewal}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-gray-200 flex items-center justify-between font-bold">
                    <p className="text-[11px] text-gray-400 uppercase tracking-tight">Showing 1 - {isps.length} of 1,284 Software Nodes</p>
                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 border border-gray-200 rounded text-[10px] uppercase text-gray-400 hover:text-gray-900 bg-white shadow-none font-bold">Prev</button>
                        <div className="flex gap-1 h-7">
                            <button className="w-7 h-full rounded bg-gray-900 text-white text-[10px] font-black">1</button>
                            <button className="w-7 h-full rounded border border-gray-200 text-gray-400 text-[10px] hover:bg-gray-50 font-bold bg-white">2</button>
                        </div>
                        <button className="px-3 py-1.5 border border-gray-200 rounded text-[10px] uppercase text-gray-600 hover:text-gray-900 bg-white shadow-none font-bold">Next</button>
                    </div>
                </div>
            </div>

            {/* Customer Info Modal - Flat 2D */}
            <AnimatePresence>
                {selectedCustomer && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCustomer(null)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative bg-white w-full max-w-2xl rounded-lg border border-gray-200 shadow-none overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-white font-black text-[12px]">
                                        {selectedCustomer.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h2 className="text-[16px] font-black text-gray-900 leading-none">{selectedCustomer.name}</h2>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[2px] mt-1">{selectedCustomer.id}</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedCustomer(null)} className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto space-y-8">
                                {/* Top Section: Quick Stats */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: 'License tier', val: selectedCustomer.license, icon: Shield },
                                        { label: 'Owed Balance', val: selectedCustomer.balance, icon: CreditCard },
                                        { label: 'Subscription', val: selectedCustomer.status, color: selectedCustomer.status === 'Active' ? 'text-pace-green' : 'text-orange-500' }
                                    ].map((s, i) => (
                                        <div key={i} className="border border-gray-100 rounded p-4 bg-gray-50/50">
                                            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 leading-none">{s.label}</p>
                                            <p className={cn("text-[16px] font-black text-gray-900 leading-none", s.color)}>{s.val}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Detailed Data Matrix */}
                                <div className="border border-gray-100 rounded bg-white">
                                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
                                        <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Administrative Records</h3>
                                    </div>
                                    <div className="divide-y divide-gray-50">
                                        {[
                                            { label: 'Contact Person', val: selectedCustomer.contact, icon: User },
                                            { label: 'Primary Email', val: selectedCustomer.email, icon: Mail },
                                            { label: 'Mobile Link', val: selectedCustomer.phone, icon: Phone },
                                            { label: 'Deployed Zone', val: selectedCustomer.location, icon: MapPin },
                                            { label: 'Member Since', val: selectedCustomer.joinDate, icon: Clock },
                                            { label: 'Next Renewal', val: selectedCustomer.renewal, icon: Calendar },
                                        ].map((item, i) => (
                                            <div key={i} className="px-4 py-3 flex items-center justify-between text-[12px]">
                                                <div className="flex items-center gap-3 text-gray-400 font-bold uppercase tracking-tight">
                                                    <item.icon size={14} className="opacity-50" />
                                                    <span>{item.label}</span>
                                                </div>
                                                <span className="font-bold text-gray-900 uppercase tracking-tight">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* System Notes */}
                                <div className="p-4 bg-orange-50/50 border border-orange-100 rounded text-[12px] text-gray-600 font-medium leading-relaxed">
                                    <span className="font-black uppercase text-[10px] text-orange-600 block mb-2 tracking-widest">System Memo</span>
                                    Software deployment verified in {selectedCustomer.location} cluster. No latency spikes recorded in the last 24h cycle. All license keys currently active and synchronized with global core.
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 text-[12px]">
                                <button onClick={() => setSelectedCustomer(null)} className="px-4 py-2 border border-gray-200 text-gray-600 rounded font-bold uppercase tracking-widest hover:bg-white transition-all">Close Entry</button>
                                <button className="px-6 py-2 bg-gray-900 text-white rounded font-black uppercase tracking-widest hover:opacity-90 transition-all">Edit Record</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    )
}
