"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Phone, MoreVertical, Plus, UserPlus } from 'lucide-react'
import { Skeleton } from '@/components/Skeleton'
import { cn } from '@/lib/utils'

export default function UsersPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const users = [
        { id: 1, name: 'Dennis Mutuku', role: 'System Administrator', email: 'dennis@pacewisp.com', lastActive: 'Active now', status: 'Online' },
        { id: 2, name: 'Sarah Chen', role: 'Billing Manager', email: 'sarah@pacewisp.com', lastActive: '2 hours ago', status: 'Away' },
        { id: 3, name: 'John Doe', role: 'Network Support', email: 'john@pacewisp.com', lastActive: '1 day ago', status: 'Offline' },
        { id: 4, name: 'Alice Smith', role: 'Client Relations', email: 'alice@pacewisp.com', lastActive: '3 days ago', status: 'Offline' },
    ]

    return (
        <div className="space-y-6 font-figtree">
            <div className="border-b border-gray-100 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Staff & Permissions</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Manage system users and their access levels.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest flex items-center gap-2">
                    <UserPlus size={14} />
                    Add Member
                </button>
            </div>

            <div className="bg-white border border-pace-border rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-pace-border">
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label w-1/3">User Profile</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label">Access Level</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label">Activity Status</th>
                            <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-admin-label text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {isLoading ? (
                            [...Array(4)].map((_, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4"><Skeleton className="h-10 w-48" /></td>
                                    <td className="px-6 py-4"><Skeleton className="h-5 w-32" /></td>
                                    <td className="px-6 py-4"><Skeleton className="h-5 w-24" /></td>
                                    <td className="px-6 py-4"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                </tr>
                            ))
                        ) : (
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple font-black text-[12px]">
                                                {user.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-[13px] font-black text-admin-value leading-none uppercase">{user.name}</p>
                                                <p className="text-[11px] text-admin-dim font-bold mt-1.5 uppercase tracking-tighter">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <Shield size={14} className="text-pace-purple" />
                                            <span className="text-[11px] font-black text-admin-label uppercase tracking-tight">{user.role}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full",
                                                user.status === 'Online' ? "bg-pace-green" : user.status === 'Away' ? "bg-orange-400" : "bg-gray-300"
                                            )}></div>
                                            <span className="text-[11px] font-bold text-admin-label uppercase tracking-tight">{user.lastActive}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="p-2 text-admin-dim hover:text-admin-value hover:bg-gray-100 rounded transition-all">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
