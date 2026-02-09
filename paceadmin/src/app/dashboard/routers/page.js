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
                <h1 className="text-[20px] font-black text-gray-900 leading-none">Router Infrastructure Registry</h1>
                <p className="text-[12px] text-gray-400 mt-2 font-medium">Monitoring core networking hardware and edge deployments for ISP tenants.</p>
            </div>

            {/* Global Infrastructure Stats - Matrix Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded divide-x divide-gray-200 overflow-hidden bg-white">
                {[
                    { label: 'Network Nodes', val: '1,422', note: 'Active' },
                    { label: 'Traffic (In)', val: '4.2 Gbps', note: 'Nominal' },
                    { label: 'Uptime Avg', val: '99.98%', note: 'Global' },
                    { label: 'Alerts', val: '02', note: 'Attention Req.', color: 'text-orange-500' },
                ].map((s, i) => (
                    <div key={i} className="p-4">
                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <h4 className={cn("text-[20px] font-black leading-none tracking-tight", s.color || "text-gray-900")}>{s.val}</h4>
                        <p className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Search Section */}
            <div className="bg-gray-50 p-6 rounded border border-gray-200">
                <form onSubmit={handleSearch} className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by Tenant Account # or Node Name (e.g. 992100)..."
                            className="w-full h-11 pl-10 pr-4 rounded border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 outline-none text-[13px] font-bold transition-all placeholder:text-gray-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-11 px-8 bg-gray-900 text-white rounded font-black text-[12px] uppercase tracking-[3px] hover:bg-black transition-all shadow-none"
                    >
                        {isSearching ? 'Processing...' : 'Fetch Data'}
                    </button>
                    <button
                        type="button"
                        onClick={() => { setSearchTerm(''); setResults([]); }}
                        className="h-11 px-6 border border-gray-200 bg-white text-gray-400 rounded font-bold text-[12px] uppercase tracking-widest hover:border-gray-900 transition-all shadow-none"
                    >
                        Reset
                    </button>
                </form>
            </div>

            {/* Results Table */}
            <div className="border border-gray-200 rounded overflow-hidden bg-white">
                <div className="px-5 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                    <h4 className="text-[11px] font-black text-gray-600 uppercase tracking-widest">Router Connectivity Matrix</h4>
                    {results.length > 0 && <span className="text-[10px] font-bold text-pace-green uppercase tracking-widest">Showing {results.length} mapped record(s)</span>}
                </div>
                <div className="overflow-x-auto min-h-[300px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-white border-b border-gray-100 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Account Link</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Hardware Node</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">IPv4 Address</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">CPU Load</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Status State</th>
                                <th className="px-5 py-3 text-right uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {results.length > 0 ? (
                                results.map((router) => (
                                    <tr key={router.account} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-5 py-4 border-r border-gray-50 font-mono text-gray-400 group-hover:text-gray-900 transition-colors uppercase font-bold">{router.account}</td>
                                        <td className="px-5 py-4 border-r border-gray-50">
                                            <p className="font-black text-gray-900 leading-none">{router.name}</p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1.5">{router.model}</p>
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 font-bold text-sky-600 underline underline-offset-4 decoration-sky-100">
                                            {router.ip}
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center">
                                            <div className="flex flex-col items-center gap-1.5">
                                                <span className="font-black text-gray-800">{router.load}</span>
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
                                            <p className="text-[9px] font-bold text-gray-300 mt-1 uppercase tracking-tighter">UP: {router.uptime}</p>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex justify-end gap-1.5">
                                                <button title="Settings" className="p-2 border border-gray-100 rounded bg-white hover:border-gray-300 text-gray-400 hover:text-gray-900 transition-all shadow-none"><Settings size={14} /></button>
                                                <button title="Terminal" className="p-2 border border-gray-100 rounded bg-white hover:border-gray-300 text-gray-400 hover:text-gray-900 transition-all shadow-none font-bold">CLI</button>
                                                <button title="Reboot" className="p-2 border border-red-50 rounded bg-red-50/20 hover:bg-red-50 text-red-300 hover:text-red-500 transition-all shadow-none"><Power size={14} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <Network size={32} className="text-gray-100 mb-2" />
                                            <p className="text-gray-300 font-black uppercase text-[12px] tracking-widest">Ready for hardware lookup</p>
                                            <p className="text-gray-200 text-[11px] font-bold uppercase">Enter an account link or node fragment to query infra database</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-gray-200 text-center">
                    <button className="text-[10px] font-black text-gray-300 uppercase tracking-widest hover:text-gray-900 transition-colors uppercase">System Audit: Global Infra Sync V2.4 Stable</button>
                </div>
            </div>

        </div>
    )
}
