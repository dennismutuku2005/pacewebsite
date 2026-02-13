"use client"

import React, { useState } from 'react'
import { Plus, Package, Zap, Users, Gauge, Edit3, Trash2, MoreHorizontal } from 'lucide-react'
import { Badge } from '@/components/Badge'
import { cn } from '@/lib/utils'

export default function PackagesPage() {
    // Simulated larger dataset for pagination feel
    const allPackages = [
        { id: 1, name: 'Standard Hotspot', speed: '5 Mbps', users: '1 Device', color: 'bg-blue-500', price: '20' },
        { id: 2, name: 'Premium High-Speed', speed: '10 Mbps', users: '2 Devices', color: 'bg-purple-600', price: '50' },
        { id: 3, name: 'Family Bundle', speed: '15 Mbps', users: '5 Devices', color: 'bg-orange-500', price: '100' },
        { id: 4, name: 'Gamer Pro', speed: '25 Mbps', users: '1 Device', color: 'bg-red-500', price: '150' },
        { id: 5, name: 'Business Lite', speed: '10 Mbps', users: '10 Devices', color: 'bg-indigo-500', price: '500' },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Product Packages</h1>
                    <p className="text-sm text-gray-500 mt-1">Define bandwidth profiles and concurrency limits for clients.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                    <Plus size={16} />
                    Create Package
                </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Package Name</th>
                                <th className="px-4 py-3 font-semibold">Speed Limit</th>
                                <th className="px-4 py-3 font-semibold">Concurrency</th>
                                <th className="px-4 py-3 font-semibold text-center">Color Tag</th>
                                <th className="px-4 py-3 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {allPackages.map((pkg) => (
                                <tr key={pkg.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
                                                <Package size={16} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{pkg.name}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">ID: {pkg.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                                            <Zap size={14} className="text-pace-purple" />
                                            <span>{pkg.speed}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Users size={14} className="text-gray-400" />
                                            <span>{pkg.users}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <div className={cn("w-4 h-4 rounded-full mx-auto", pkg.color)} />
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-gray-500 hover:text-pace-purple hover:bg-purple-50 rounded-lg transition-all" title="Edit">
                                                <Edit3 size={16} />
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-2 gap-4">
                <p className="text-sm text-gray-500">Showing 1-{allPackages.length} of {allPackages.length} packages</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all disabled:opacity-50" disabled>
                        Previous
                    </button>
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all disabled:opacity-50" disabled>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
