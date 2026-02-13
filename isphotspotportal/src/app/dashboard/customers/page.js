"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Filter, Trash2, AlertCircle, MoreHorizontal, CreditCard, Shield, User, MapPin, Clock, Phone, Mail, Calendar, Wifi, Cable, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Modal } from '@/components/Modal'
import { Skeleton } from '@/components/Skeleton'
import { useSearchParams } from 'next/navigation'

export default function CustomersPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const serviceFilter = searchParams.get('service')

    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [deleteModal, setDeleteModal] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Hotspot customer data
    const initialCustomers = [
        {
            id: 'CUST-001',
            mac: '00:1A:2B:3C:4D:5E',
            mobile: '0712345678',
            status: 'Active',
            lastSeen: '2 mins ago',
            totalSpent: 'KSH 2,450',
            sessions: 42
        },
        {
            id: 'CUST-002',
            mac: 'AA:BB:CC:DD:EE:FF',
            mobile: '0787654321',
            status: 'Active',
            lastSeen: '15 mins ago',
            totalSpent: 'KSH 1,200',
            sessions: 28
        },
        {
            id: 'CUST-003',
            mac: '11:22:33:44:55:66',
            mobile: '0700112233',
            status: 'Blocked',
            lastSeen: '2 days ago',
            totalSpent: 'KSH 5,800',
            sessions: 95
        },
        {
            id: 'CUST-004',
            mac: 'FF:EE:DD:CC:BB:AA',
            mobile: '0722998877',
            status: 'Active',
            lastSeen: '1 hour ago',
            totalSpent: 'KSH 850',
            sessions: 15
        }
    ]

    const [customers, setCustomers] = useState(initialCustomers)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const filteredCustomers = serviceFilter
        ? initialCustomers.filter(customer => customer.status.toLowerCase() === serviceFilter)
        : initialCustomers

    const getStatusVariant = (status) => {
        if (status === 'Active') return 'success'
        if (status === 'Blocked') return 'error'
        return 'default'
    }

    return (
        <div className="space-y-6 font-figtree">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">Customer Database</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Manage hotspot users, MAC addresses, and mobile numbers.</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search MAC or mobile number..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-lg hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold">
                        <Filter size={14} /> Filter
                    </button>
                </div>
            </div>

            {/* Main Data Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Customer ID</th>
                                <th className="px-6 py-4">MAC Address</th>
                                <th className="px-6 py-4">Mobile Number</th>
                                <th className="px-6 py-4">Total Spent</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4">Last Seen</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(4)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-28" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredCustomers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple font-black text-[11px]">
                                                    {customer.id.split('-')[1]}
                                                </div>
                                                <p className="font-bold text-admin-value leading-none uppercase text-[11px]">{customer.id}</p>
                                            </div>
                                        </td>
                                        <td
                                            onClick={() => setSelectedCustomer(customer)}
                                            className="px-6 py-5 cursor-pointer"
                                        >
                                            <p className="font-extrabold text-admin-value leading-none uppercase">{customer.mac}</p>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <Phone size={12} className="text-admin-dim" />
                                                <p className="font-bold text-admin-label">{customer.mobile}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="font-black text-pace-purple">{customer.totalSpent}</p>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(customer.status)}>{customer.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-[11px] text-admin-dim font-medium italic">{customer.lastSeen}</p>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2 items-center">
                                                <button
                                                    onClick={() => setDeleteModal(customer)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Delete Customer"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                                <button
                                                    onClick={() => setSelectedCustomer(customer)}
                                                    className="p-2 text-admin-dim hover:text-admin-value hover:bg-gray-50 rounded-lg transition-all"
                                                    title="View Details"
                                                >
                                                    <MoreHorizontal size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View Details Modal */}
            <Modal
                isOpen={!!selectedCustomer}
                onClose={() => setSelectedCustomer(null)}
                title="Customer Details"
                maxWidth="max-w-2xl"
                footer={
                    <>
                        <button onClick={() => setSelectedCustomer(null)} className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all">Close</button>
                        <button className="px-8 py-2 bg-pace-purple text-white rounded-lg font-bold text-[11px] hover:bg-[#3d1a75] transition-all shadow-md">View History</button>
                    </>
                }
            >
                {selectedCustomer && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: 'Total Spent', val: selectedCustomer.totalSpent, badge: 'info' },
                                { label: 'Sessions', val: selectedCustomer.sessions, badge: 'default' },
                                { label: 'Status', val: selectedCustomer.status, badge: getStatusVariant(selectedCustomer.status) }
                            ].map((s, i) => (
                                <div key={i} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                                    <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest mb-2 leading-none opacity-50">{s.label}</p>
                                    <p className="text-[16px] font-black text-admin-value leading-none">{s.val}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm">
                            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
                                <h3 className="text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-50">Customer Information</h3>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {[
                                    { label: 'MAC Address', val: selectedCustomer.mac, icon: Wifi },
                                    { label: 'Mobile Number', val: selectedCustomer.mobile, icon: Phone },
                                    { label: 'Customer ID', val: selectedCustomer.id, icon: User },
                                    { label: 'Last Activity', val: selectedCustomer.lastSeen, icon: Clock },
                                ].map((item, i) => (
                                    <div key={i} className="px-5 py-4 flex items-center justify-between text-[12px]">
                                        <div className="flex items-center gap-3 text-admin-label font-bold">
                                            <item.icon size={14} className="text-admin-dim" />
                                            <span>{item.label}</span>
                                        </div>
                                        <span className="font-extrabold text-admin-value">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Delete Modal */}
            <Modal
                isOpen={!!deleteModal}
                onClose={() => setDeleteModal(null)}
                title="Block Customer"
                maxWidth="max-w-md"
                footer={
                    <>
                        <button onClick={() => setDeleteModal(null)} className="flex-1 py-3 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all">Cancel</button>
                        <button className="flex-1 py-3 bg-red-500 text-white rounded-lg font-bold text-[11px] hover:bg-red-600 transition-all shadow-md">Block Customer</button>
                    </>
                }
            >
                {deleteModal && (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle size={32} />
                        </div>
                        <h3 className="text-[18px] font-extrabold text-admin-value">Block this customer?</h3>
                        <p className="text-[12px] text-admin-label font-medium leading-relaxed">
                            You are blocking <span className="text-admin-value font-bold">{deleteModal.mac}</span> ({deleteModal.mobile}). This will prevent them from accessing the hotspot network.
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    )
}
