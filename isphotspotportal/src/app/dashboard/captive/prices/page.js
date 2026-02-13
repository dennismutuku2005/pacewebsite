"use client"

import React, { useState } from 'react'
import { Plus, Tag, Edit3, Trash2, ArrowUpRight, DollarSign, Clock } from 'lucide-react'
import { Badge } from '@/components/Badge'
import { cn } from '@/lib/utils'

export default function ManagePricesPage() {
    // Simulated larger data for pagination
    const allPrices = [
        { id: 1, name: '2 Hours Access', price: '20', duration: '2 Hours', status: 'Active' },
        { id: 2, name: 'Daily Unlimited', price: '50', duration: '24 Hours', status: 'Active' },
        { id: 3, name: 'Weekly Pass', price: '300', duration: '7 Days', status: 'Active' },
        { id: 4, name: 'Monthly Standard', price: '1000', duration: '30 Days', status: 'Active' },
        { id: 5, name: 'Monthly Premium', price: '1500', duration: '30 Days', status: 'Inactive' },
        { id: 6, name: '1 Hour Trial', price: '10', duration: '1 Hour', status: 'Active' },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Price Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Configure end-user pricing modules for hotspot vouchers.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                    <Plus size={16} />
                    New Price Point
                </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Plan Name</th>
                                <th className="px-4 py-3 font-semibold">Price (KSH)</th>
                                <th className="px-4 py-3 font-semibold">Duration</th>
                                <th className="px-4 py-3 font-semibold text-center">Status</th>
                                <th className="px-4 py-3 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {allPrices.map((p) => (
                                <tr key={p.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
                                                <Tag size={16} />
                                            </div>
                                            <span className="font-semibold text-gray-900">{p.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900">
                                        {p.price}
                                    </td>
                                    <td className="px-4 py-3 text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="text-gray-400" />
                                            <span>{p.duration}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Badge variant={p.status === 'Active' ? 'success' : 'secondary'} className="text-[10px] px-2 py-0.5">
                                            {p.status}
                                        </Badge>
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
                <p className="text-sm text-gray-500">Showing 1-{allPrices.length} of {allPrices.length} plans</p>
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
