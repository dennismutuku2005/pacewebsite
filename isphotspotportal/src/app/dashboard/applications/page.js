"use client"

import React from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/Skeleton'
import { Badge } from '@/components/Badge'

export default function ApplicationsPage() {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const submissions = [
        { id: 'SUB-1024', entity: 'Global Logistics Hub', contact: 'Samson Kiruba', zone: 'Nairobi', tier: 'Enterprise', status: 'In Review', age: '2h ago' },
        { id: 'SUB-1023', entity: 'Prime Connect ISP', contact: 'Janet Mwangi', zone: 'Mombasa', tier: 'Standard', status: 'Pending', age: '5h ago' },
        { id: 'SUB-1022', entity: 'Summit Solutions', contact: 'Robert Onyango', zone: 'Eldoret', tier: 'Startup', status: 'Approved', age: '1d ago' },
        { id: 'SUB-1021', entity: 'Metro-WiFi', contact: 'Alice Wairimu', zone: 'Kisumu', tier: 'Enterprise', status: 'In Review', age: '1d ago' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Page Header */}
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Submissions Archive</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Manage and process incoming member inquiries.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-pace-border text-admin-label rounded-lg text-[11px] font-black hover:border-pace-purple hover:text-pace-purple transition-all uppercase tracking-widest bg-white">
                        Archived Inbox
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest">
                        New Entry
                    </button>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search summaries..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-bold text-admin-value placeholder:text-admin-dim"
                    />
                </div>
                <div className="flex gap-2">
                    <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[11px] font-black uppercase tracking-widest outline-none focus:border-pace-purple">
                        <option>Status: All</option>
                        <option>Pending</option>
                        <option>Approved</option>
                    </select>
                </div>
            </div>

            {/* Main Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-black text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Entity Details</th>
                                <th className="px-6 py-4">Target Region</th>
                                <th className="px-6 py-4 text-center">Service Tier</th>
                                <th className="px-6 py-4 text-center">Current Status</th>
                                <th className="px-6 py-4 text-right">Received</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(4)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-12" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-48" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-4 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-4 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-4 text-right"><Skeleton className="h-4 w-16 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                submissions.map((sub) => (
                                    <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                                        <td className="px-6 py-5 font-mono text-admin-dim group-hover:text-pace-purple transition-colors font-black uppercase">{sub.id}</td>
                                        <td className="px-6 py-5">
                                            <p className="font-black text-admin-value leading-none uppercase">{sub.entity}</p>
                                            <p className="text-[10px] text-admin-label font-bold uppercase tracking-tighter mt-1.5 opacity-80">{sub.contact}</p>
                                        </td>
                                        <td className="px-6 py-5 font-bold text-admin-label uppercase tracking-tighter">{sub.zone}</td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant="info" className="bg-gray-50/50 border-gray-200">{sub.tier}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={sub.status === 'Approved' ? 'success' : 'default'}>{sub.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right font-black text-admin-dim group-hover:text-admin-value transition-colors uppercase">
                                            {sub.age}
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
