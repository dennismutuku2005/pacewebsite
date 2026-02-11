"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, Filter, Trash2, AlertCircle, MoreHorizontal, CreditCard, Shield, User, MapPin, Clock, Phone, Mail, Calendar, Wifi, Cable } from 'lucide-react'
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

    // Initial data with PPPoE and Hotspot status
    const initialIsps = [
        {
            id: 'REC-001',
            name: 'SkyNet Solutions Ltd',
            contact: 'John Kamau',
            email: 'admin@skynet.co.ke',
            location: 'Nairobi',
            status: 'Active',
            accNumber: 'ACC-82710',
            payChannel: 'Paybill 247247',
            pppoe: true,
            hotspot: true,
            balance: 'KES 0',
            joinDate: 'Jan 15, 2023'
        },
        {
            id: 'REC-002',
            name: 'Coast Connect Ltd',
            contact: 'Mary Wanjiku',
            email: 'billing@coastconnect.net',
            location: 'Mombasa',
            status: 'Verifying',
            accNumber: 'ACC-11932',
            payChannel: 'Paybill 247247',
            pppoe: true,
            hotspot: false,
            balance: 'KES 12,500',
            joinDate: 'Jun 10, 2023'
        },
        {
            id: 'REC-003',
            name: 'RiftWiFi systems',
            contact: 'David Omari',
            email: 'ops@riftwifi.co.ke',
            location: 'Nakuru',
            status: 'Active',
            accNumber: 'ACC-44501',
            payChannel: 'Paybill 880880',
            pppoe: false,
            hotspot: true,
            balance: 'KES 0',
            joinDate: 'Nov 20, 2022'
        }
    ]

    const [isps, setIsps] = useState(initialIsps)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const filteredIsps = serviceFilter
        ? initialIsps.filter(isp => isp[serviceFilter])
        : initialIsps

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
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Client directory</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Manage ISP members, account numbers, and active services.</p>
                </div>
                <button
                    onClick={() => router.push('/dashboard/customers/new')}
                    className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md"
                >
                    Add new client
                </button>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search ID, account or email..."
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
                                <th className="px-6 py-4">Identity</th>
                                <th className="px-6 py-4">Account details</th>
                                <th className="px-6 py-4 text-center">Active services</th>
                                <th className="px-6 py-4 text-center">Member status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(4)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-48" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-32 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredIsps.map((isp) => (
                                    <tr key={isp.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple font-black text-[11px]">
                                                    {isp.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-admin-value leading-none uppercase text-[11px] mb-1">{isp.id}</p>
                                                    <p className="text-[10px] text-admin-label font-medium">{isp.location}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            onClick={() => setSelectedCustomer(isp)}
                                            className="px-6 py-5 cursor-pointer"
                                        >
                                            <p className="font-extrabold text-admin-value leading-none uppercase mb-1.5">{isp.name}</p>
                                            <div className="flex items-center gap-2">
                                                <Badge variant="info" className="scale-90 h-4 px-1">{isp.accNumber}</Badge>
                                                <p className="text-[10px] text-admin-dim font-medium">{isp.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                {isp.pppoe && (
                                                    <div className="flex items-center gap-1.5 px-2 py-1 bg-pace-purple/5 rounded-md border border-pace-purple/10" title="PPPoE service active">
                                                        <Cable size={12} className="text-pace-purple" />
                                                        <span className="text-[10px] font-bold text-pace-purple">PPPoE</span>
                                                    </div>
                                                )}
                                                {isp.hotspot && (
                                                    <div className="flex items-center gap-1.5 px-2 py-1 bg-pace-green/5 rounded-md border border-pace-green/10" title="Hotspot service active">
                                                        <Wifi size={12} className="text-pace-green" />
                                                        <span className="text-[10px] font-bold text-pace-green">Hotspot</span>
                                                    </div>
                                                )}
                                                {!isp.pppoe && !isp.hotspot && (
                                                    <span className="text-[10px] text-admin-dim font-medium italic">No active services</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(isp.status)}>{isp.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => setDeleteModal(isp)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                                <button className="p-2 text-admin-dim hover:text-admin-value hover:bg-gray-50 rounded-lg transition-all">
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
                title="Member infrastructure details"
                maxWidth="max-w-2xl"
                footer={
                    <>
                        <button onClick={() => setSelectedCustomer(null)} className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all">Close</button>
                        <button className="px-8 py-2 bg-pace-purple text-white rounded-lg font-bold text-[11px] hover:bg-[#3d1a75] transition-all shadow-md">Update account</button>
                    </>
                }
            >
                {selectedCustomer && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: 'Account number', val: selectedCustomer.accNumber, badge: 'info' },
                                { label: 'Owed balance', val: selectedCustomer.balance, badge: 'default' },
                                { label: 'Member status', val: selectedCustomer.status, badge: getStatusVariant(selectedCustomer.status) }
                            ].map((s, i) => (
                                <div key={i} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                                    <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest mb-2 leading-none opacity-50">{s.label}</p>
                                    <p className="text-[16px] font-black text-admin-value leading-none">{s.val}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm">
                            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
                                <h3 className="text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-50">Account Summary</h3>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {[
                                    { label: 'Payment channel', val: selectedCustomer.payChannel, icon: CreditCard },
                                    { label: 'Active services', val: `${selectedCustomer.pppoe ? 'PPPoE ' : ''}${selectedCustomer.hotspot ? 'Hotspot' : ''}`, icon: Shield },
                                    { label: 'Primary contact', val: selectedCustomer.contact, icon: User },
                                    { label: 'Business region', val: selectedCustomer.location, icon: MapPin },
                                    { label: 'Joined on', val: selectedCustomer.joinDate, icon: Clock },
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
                title="Account termination"
                maxWidth="max-w-md"
                footer={
                    <>
                        <button onClick={() => setDeleteModal(null)} className="flex-1 py-3 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all">Cancel</button>
                        <button className="flex-1 py-3 bg-red-500 text-white rounded-lg font-bold text-[11px] hover:bg-red-600 transition-all shadow-md">Terminate permanently</button>
                    </>
                }
            >
                {deleteModal && (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle size={32} />
                        </div>
                        <h3 className="text-[18px] font-extrabold text-admin-value">Purge member account?</h3>
                        <p className="text-[12px] text-admin-label font-medium leading-relaxed">
                            You are removing <span className="text-admin-value font-bold">{deleteModal.name}</span>. This will disconnect account <span className="text-pace-purple font-bold">{deleteModal.accNumber}</span> and terminate all linked domains.
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    )
}
