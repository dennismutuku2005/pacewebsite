"use client"

import React from 'react'
import { Plus, User, Mail, Search, Filter } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function UsersPage() {
    const users = [
        { id: 1, name: 'Dennis Mutuku', email: 'dennis@pacewifi.com', role: 'Super Admin', status: 'Active', joined: '2023-01-15' },
        { id: 2, name: 'John Doe', email: 'john.doe@example.com', role: 'Developer', status: 'Active', joined: '2023-03-22' },
        { id: 3, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Viewer', status: 'Inactive', joined: '2023-06-10' },
        { id: 4, name: 'Support Team', email: 'support@pacewifi.com', role: 'Admin', status: 'Active', joined: '2023-02-01' },
    ]

    return (
        <div className="space-y-6 animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">User Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage portal access and user roles.</p>
                </div>
                <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                    <Plus size={16} />
                    Invite User
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple focus:border-pace-purple outline-none text-sm text-gray-700 placeholder:text-gray-400 shadow-sm transition-all"
                    />
                </div>
                <button className="px-3 py-2 border border-gray-200 bg-white rounded-lg text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2 text-sm font-medium">
                    <Filter size={16} /> Filter
                </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                            <th className="px-4 py-3 font-semibold">User</th>
                            <th className="px-4 py-3 font-semibold">Role</th>
                            <th className="px-4 py-3 font-semibold">Status</th>
                            <th className="px-4 py-3 font-semibold">Joined Date</th>
                            <th className="px-4 py-3 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                            <User size={16} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-gray-600">{user.role}</td>
                                <td className="px-4 py-3">
                                    <Badge variant={user.status === 'Active' ? 'success' : 'default'}>
                                        {user.status}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{user.joined}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-gray-400 hover:text-pace-purple transition-colors font-medium text-xs">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
