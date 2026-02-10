"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Filter, Trash2, AlertCircle, MoreHorizontal, CreditCard, Shield, User, MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Modal } from '@/components/Modal'
import { Skeleton } from '@/components/Skeleton'

export default function CustomersPage() {
    const router = useRouter()
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [deleteModal, setDeleteModal] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Initial data with Account Numbers and Payment Channels
    const initialIsps = [
        {
            id: 'REC-001',
            name: 'SkyNet Solutions Ltd',
            contact: 'John Kamau',
            email: 'admin@skynet.co.ke',
            phone: '+254 712 345 678',
            location: 'Nairobi',
            license: 'Enterprise',
            status: 'Active',
            accNumber: 'ACC-82710',
            payChannel: 'Paybill 247247',
            accStatus: 'Active',
            balance: 'KES 0',
            joinDate: '2023-01-15'
        },
        {
            id: 'REC-002',
            name: 'Coast Connect Ltd',
            contact: 'Mary Wanjiku',
            email: 'billing@coastconnect.net',
            phone: '+254 722 987 654',
            location: 'Mombasa',
            license: 'Standard',
            status: 'Verifying',
            accNumber: 'ACC-11932',
            payChannel: 'Paybill 247247',
            accStatus: 'Pending',
            balance: 'KES 12,500',
            joinDate: '2023-06-10'
        },
        {
            id: 'REC-003',
            name: 'RiftWiFi systems',
            contact: 'David Omari',
            email: 'ops@riftwifi.co.ke',
            phone: '+254 733 111 222',
            location: 'Nakuru',
            license: 'Enterprise',
            status: 'Active',
            accNumber: 'ACC-44501',
            payChannel: 'Paybill 880880',
            accStatus: 'Active',
            balance: 'KES 0',
            joinDate: '2022-11-20'
        }
    ]

    const [isps, setIsps] = useState(initialIsps)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const getStatusVariant = (status) => {
        if (status === 'Active') return 'success'
        if (status === 'Verifying') return 'warning'
        if (status === 'Inactive') return 'error'
        return 'default'
    }

    return (
        <div className="space-y-6 font-figtree">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Client Directory</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Manage ISP members, account numbers, and distribution channels.</p>
                </div>
                <button
                    onClick={() => router.push('/dashboard/customers/new')}
                    className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-black hover:bg-[#3d1a75] transition-all uppercase tracking-widest"
                >
                    Add New Client
                </button>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search ID, Account or Email..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-bold text-admin-value"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-lg hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-black uppercase tracking-widest">
                        <Filter size={12} /> Filter
                    </button>
                    <button className="px-4 py-2.5 border border-gray-200 text-admin-dim rounded-lg hover:bg-gray-50 transition-all bg-white text-[11px] font-black uppercase tracking-widest">
                        Export
                    </button>
                </div>
            </div>

            {/* Main Data Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-black text-admin-label uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">Identity</th>
                                <th className="px-6 py-4">Account Details</th>
                                <th className="px-6 py-4">Financial Channel</th>
                                <th className="px-6 py-4 text-center uppercase">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(4)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-48" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                isps.map((isp) => (
                                    <tr key={isp.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple font-black text-[10px]">
                                                    {isp.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-black text-admin-value leading-none uppercase">{isp.id}</p>
                                                    <p className="text-[10px] text-admin-dim font-bold mt-1.5 uppercase tracking-tighter">{isp.location}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            onClick={() => setSelectedCustomer(isp)}
                                            className="px-6 py-5 cursor-pointer"
                                        >
                                            <p className="font-black text-admin-value leading-none uppercase">{isp.name}</p>
                                            <div className="flex items-center gap-2 mt-1.5">
                                                <Badge variant="info" className="scale-90 h-4 border-none bg-pace-purple/10">{isp.accNumber}</Badge>
                                                <p className="text-[10px] text-admin-label font-bold uppercase opacity-80">{isp.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="font-bold text-admin-label uppercase tracking-tight">{isp.payChannel}</p>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <div className={cn("w-1.5 h-1.5 rounded-full", isp.accStatus === 'Active' ? 'bg-pace-green' : 'bg-orange-400')} />
                                                <p className="text-[9px] font-black text-admin-dim uppercase tracking-widest">{isp.accStatus} Link</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(isp.status)}>{isp.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => setDeleteModal(isp)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded transition-all"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                                <button className="p-2 text-admin-dim hover:text-admin-value hover:bg-white rounded transition-all">
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
                title="Member Infrastructure Details"
                maxWidth="max-w-2xl"
                footer={
                    <>
                        <button onClick={() => setSelectedCustomer(null)} className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-gray-50">Close Hub</button>
                        <button className="px-8 py-2 bg-pace-purple text-white rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-[#3d1a75]">Update Account</button>
                    </>
                }
            >
                {selectedCustomer && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: 'Account Number', val: selectedCustomer.accNumber, badge: 'info' },
                                { label: 'Owed Balance', val: selectedCustomer.balance, badge: 'default' },
                                { label: 'Member Status', val: selectedCustomer.status, badge: getStatusVariant(selectedCustomer.status) }
                            ].map((s, i) => (
                                <div key={i} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                                    <p className="text-[10px] font-black text-admin-label uppercase tracking-widest mb-2 leading-none">{s.label}</p>
                                    <p className="text-[17px] font-black text-admin-value leading-none">{s.val}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-100 rounded-xl bg-white overflow-hidden">
                            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
                                <h3 className="text-[10px] font-black text-admin-label uppercase tracking-widest">Account Connectivity</h3>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {[
                                    { label: 'Payment Channel', val: selectedCustomer.payChannel, icon: CreditCard },
                                    { label: 'Account Status', val: selectedCustomer.accStatus, icon: Shield },
                                    { label: 'Primary Contact', val: selectedCustomer.contact, icon: User },
                                    { label: 'Business Region', val: selectedCustomer.location, icon: MapPin },
                                    { label: 'Join Date', val: selectedCustomer.joinDate, icon: Clock },
                                ].map((item, i) => (
                                    <div key={i} className="px-5 py-4 flex items-center justify-between text-[12px]">
                                        <div className="flex items-center gap-3 text-admin-label font-black uppercase tracking-tight">
                                            <item.icon size={14} className="text-admin-dim" />
                                            <span>{item.label}</span>
                                        </div>
                                        <span className="font-black text-admin-value uppercase tracking-tight">{item.val}</span>
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
                title="Account Termination"
                maxWidth="max-w-md"
                footer={
                    <>
                        <button onClick={() => setDeleteModal(null)} className="flex-1 py-3 border border-gray-200 text-admin-label rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-gray-50">Cancel</button>
                        <button className="flex-1 py-3 bg-red-500 text-white rounded-lg font-black uppercase text-[10px] tracking-widest hover:bg-red-600">Delete Permanently</button>
                    </>
                }
            >
                {deleteModal && (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle size={32} />
                        </div>
                        <h3 className="text-[18px] font-black text-admin-value uppercase tracking-tight">System Purge?</h3>
                        <p className="text-[12px] text-admin-label font-medium leading-relaxed">
                            You are removing **{deleteModal.name}**. This will disconnect account **{deleteModal.accNumber}** and all its domains.
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    )
}
