"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Plus, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CustomersPage() {
    const isps = [
        { id: 'REC-001', name: 'SkyNet Solutions Ltd', contact: 'John Kamau', email: 'admin@skynet.co.ke', location: 'Nairobi', license: 'Enterprise', status: 'Active', renewal: '2024-03-22' },
        { id: 'REC-002', name: 'Coast Connect Ltd', contact: 'Mary Wanjiku', email: 'billing@coastconnect.net', location: 'Mombasa', license: 'Standard', status: 'Verifying', renewal: '2024-02-18' },
        { id: 'REC-003', name: 'RiftWiFi systems', contact: 'David Omari', email: 'ops@riftwifi.co.ke', location: 'Nakuru', license: 'Enterprise', status: 'Active', renewal: '2024-04-05' },
        { id: 'REC-004', name: 'Lake Side Internet', contact: 'Sarah Atieno', email: 'dev@lakeside.net', location: 'Kisumu', license: 'Startup', status: 'Active', renewal: '2024-08-12' },
        { id: 'REC-005', name: 'Alpha Telecom Solutions', contact: 'Kelvin Chirchir', email: 'info@alpha.net', location: 'Eldoret', license: 'Enterprise', status: 'Active', renewal: '2024-06-30' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-gray-900 leading-none">Software Tenant Registry</h1>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">Detailed database of global ISP software licenses and deployment regions.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-pace-purple text-white rounded text-[12px] font-bold shadow-none hover:opacity-90 transition-all uppercase tracking-widest leading-none">
                    <Plus size={14} />
                    Onboard New Entity
                </button>
            </div>

            {/* Control Bar - Excel-like */}
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                    <input
                        type="text"
                        placeholder="Lookup by name or ID..."
                        className="w-full pl-9 pr-3 py-2 rounded border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 outline-none text-[12px] font-medium"
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
                                <tr key={isp.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-5 py-3 font-mono text-gray-300 group-hover:text-gray-900 border-r border-gray-50">{isp.id}</td>
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
                    <p className="text-[11px] text-gray-400 uppercase tracking-tight">Showing 1 - 5 of 1,284 Software Nodes</p>
                    <div className="flex items-center gap-1">
                        <button className="px-3 py-1.5 border border-gray-200 rounded text-[10px] uppercase text-gray-400 hover:text-gray-900 bg-white">Prev</button>
                        <div className="flex gap-1 h-7">
                            <button className="w-7 h-full rounded bg-gray-900 text-white text-[10px] font-black">1</button>
                            <button className="w-7 h-full rounded border border-gray-200 text-gray-400 text-[10px] hover:bg-gray-50">2</button>
                            <button className="w-7 h-full rounded border border-gray-200 text-gray-400 text-[10px] hover:bg-gray-50">3</button>
                        </div>
                        <button className="px-3 py-1.5 border border-gray-200 rounded text-[10px] uppercase text-gray-600 hover:text-gray-900 bg-white">Next</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
