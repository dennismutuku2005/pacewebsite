"use client"

import React, { useState } from 'react'
import { Plus, MessageSquare, Trash2, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function SenderIdsPage() {
    const senderIds = [
        { id: 1, name: 'PACE_ISP', type: 'Transactional', status: 'Active', created: '2022-01-01' },
        { id: 2, name: 'PACE_WIFI', type: 'Promotional', status: 'Active', created: '2023-05-15' },
        { id: 3, name: 'PACE_ALERT', type: 'Alerts', status: 'Pending Approval', created: '2026-02-14' },
    ]

    return (
        <div className="space-y-6 animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Sender IDs</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage approved Sender IDs for SMS broadcasts.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                    <Plus size={16} />
                    Request Sender ID
                </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                            <th className="px-4 py-3 font-semibold">Sender Name</th>
                            <th className="px-4 py-3 font-semibold">Type</th>
                            <th className="px-4 py-3 font-semibold">Status</th>
                            <th className="px-4 py-3 font-semibold">Created Date</th>
                            <th className="px-4 py-3 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {senderIds.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-pace-purple">
                                            <MessageSquare size={16} />
                                        </div>
                                        <p className="font-bold text-gray-900">{item.name}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-600">{item.type}</td>
                                <td className="px-4 py-3">
                                    <Badge variant={item.status === 'Active' ? 'success' : 'warning'}>
                                        {item.status}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{item.created}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-gray-400 hover:text-red-500 transition-colors p-2">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
                <div className="text-blue-500 mt-0.5">
                    <CheckCircle2 size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-blue-900">Sender ID Regulations</h4>
                    <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                        Sender IDs must be registered with local authorities depending on the region.
                        It typically takes 24-48 hours for a new Sender ID to be approved by the network carriers.
                    </p>
                </div>
            </div>
        </div>
    )
}
