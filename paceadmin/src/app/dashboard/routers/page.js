"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Network, Settings, Trash2, Power, RefreshCw, Link2, AlertCircle, HardDrive, Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RoutersPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [results, setResults] = useState([])

    // Simulated data
    const mockRouters = [
        { account: '992100', name: 'SkyNet-Nairobi-CCR', ip: '197.248.33.12', model: 'MikroTik CCR2004', uptime: '142d 04h', status: 'Online', load: '12%' },
        { account: '992102', name: 'Coast-Mombasa-RB', ip: '197.248.45.101', model: 'MikroTik RB4011', uptime: '12d 22h', status: 'Online', load: '45%' },
        { account: '992105', name: 'RiftWiFi-Nakuru-Core', ip: '196.25.2.44', model: 'MikroTik CCR1036', uptime: '4d 01h', status: 'Warning', load: '82%' },
        { account: '992109', name: 'LakeSide-Kisumu-CCR', ip: '41.215.10.22', model: 'MikroTik CCR2116', uptime: '89d 12h', status: 'Online', load: '22%' },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchTerm) {
            setResults([])
            return
        }
        setIsSearching(true)
        setTimeout(() => {
            const filtered = mockRouters.filter(r => r.account.includes(searchTerm) || r.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setResults(filtered)
            setIsSearching(false)
        }, 600)
    }

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4">
                <h1 className="text-[20px] font-black text-admin-value leading-none">Router & Network Inventory</h1>
                <p className="text-[12px] text-admin-label mt-2 font-medium">View and manage hardware connected to client accounts.</p>
            </div>

            {/* Network Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-pace-border rounded divide-x divide-pace-border overflow-hidden bg-white shadow-none">
                {[
                    { label: 'Total Routers', val: '1,422', note: 'Active Devices' },
                    { label: 'Current Traffic', val: '4.2 Gbps', note: 'Global Flow' },
                    { label: 'System Uptime', val: '99.98%', note: 'Network Wide' },
                    { label: 'Issues Found', val: '02', note: 'Items to Check', color: 'text-orange-500' },
                ].map((s, i) => (
                    <div key={i} className="p-4">
                        <p className="text-[9px] font-black text-admin-label uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <h4 className={cn("text-[20px] font-black leading-none tracking-tight", s.color || "text-admin-value")}>{s.val}</h4>
                        <p className="text-[10px] font-black text-admin-dim mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Search Section - User Centered */}
            <div className="bg-pace-bg-subtle p-6 rounded border border-pace-border">
                <form onSubmit={handleSearch} className="flex gap-2">
                    <div className="relative flex-1 h-11">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={16} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by client account number or router name..."
                            className="w-full h-full pl-10 pr-4 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 outline-none text-[13px] font-black text-admin-value placeholder:text-admin-dim"
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-11 px-8 bg-pace-purple text-white rounded font-black text-[12px] uppercase tracking-[3px] hover:bg-[#3d1a75] transition-all shadow-none"
                    >
                        {isSearching ? 'Searching...' : 'Search'}
                    </button>
                    <button
                        type="button"
                        onClick={() => { setSearchTerm(''); setResults([]); }}
                        className="h-11 px-6 border border-pace-border bg-white text-admin-label rounded font-black text-[11px] uppercase tracking-widest hover:border-pace-purple hover:text-pace-purple transition-all shadow-none"
                    >
                        Clear
                    </button>
                </form>
            </div>

            {/* Results Table */}
            <div className="border border-pace-border rounded overflow-hidden bg-white">
                <div className="px-5 py-3 border-b border-pace-border bg-pace-bg-subtle flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Network Devices</h4>
                    {results.length > 0 && <span className="text-[9px] font-black text-pace-green uppercase tracking-widest">{results.length} Found</span>}
                </div>
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Account #</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Device Name</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">IP Address</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Usage</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Status</th>
                                <th className="px-5 py-3 text-right uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {results.length > 0 ? (
                                results.map((router) => (
                                    <tr key={router.account} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-5 py-4 border-r border-gray-50 font-mono text-admin-dim group-hover:text-admin-value transition-colors uppercase font-black">{router.account}</td>
                                        <td className="px-5 py-4 border-r border-gray-50">
                                            <p className="font-black text-admin-value leading-none">{router.name}</p>
                                            <p className="text-[10px] text-admin-label font-black uppercase tracking-tight mt-1.5">{router.model}</p>
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 font-black text-pace-purple underline underline-offset-4 decoration-pace-purple/20">
                                            {router.ip}
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center">
                                            <div className="flex flex-col items-center gap-1.5">
                                                <span className="font-black text-admin-value">{router.load}</span>
                                                <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className={cn(
                                                        "h-full rounded-full transition-all",
                                                        parseInt(router.load) > 70 ? 'bg-orange-500' : 'bg-pace-purple'
                                                    )} style={{ width: router.load }} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center">
                                            <span className={cn(
                                                "font-black uppercase text-[10px] tracking-widest",
                                                router.status === 'Online' ? 'text-pace-green' : 'text-orange-500'
                                            )}>{router.status}</span>
                                            <p className="text-[9px] font-black text-admin-dim mt-1 uppercase tracking-tighter">UP: {router.uptime}</p>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex justify-end gap-1.5">
                                                <button title="Configure" className="p-2 border border-pace-border rounded bg-white hover:border-pace-purple text-admin-dim hover:text-pace-purple transition-all shadow-none"><Settings size={14} /></button>
                                                <button title="Terminal" className="px-3 py-1.5 border border-pace-border rounded bg-white hover:border-pace-purple text-admin-label hover:text-pace-purple transition-all font-black text-[10px]">CLI</button>
                                                <button title="Restart" className="p-2 border border-red-50 rounded bg-red-50/20 hover:bg-red-50 text-red-300 hover:text-red-500 transition-all shadow-none"><Power size={14} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <Network size={32} className="text-gray-100 mb-2" />
                                            <p className="text-admin-dim font-black uppercase text-[12px] tracking-widest">Search for a device</p>
                                            <p className="text-gray-200 text-[11px] font-black uppercase whitespace-pre-wrap">Enter an account number or router name to find its details</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
