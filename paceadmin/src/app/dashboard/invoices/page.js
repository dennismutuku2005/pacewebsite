"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
    Search, Download, CreditCard, Clock, Filter, Receipt,
    MoreHorizontal, CheckCircle2, AlertTriangle, Building2,
    Repeat, Activity, Plus
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Modal } from '@/components/Modal'
import { Skeleton } from '@/components/Skeleton'

import { useSearchParams } from 'next/navigation'

export default function InvoicingPage() {
    const searchParams = useSearchParams()
    const statusFilter = searchParams.get('status')

    const [selectedInvoice, setSelectedInvoice] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
    }, [])

    const initialInvoices = [
        { id: 'INV-240201', customer: 'SkyNet Solutions Ltd', amount: 'KES 45,000', date: '2024-02-01', status: 'Paid', channel: 'Paybill 247247', acc: 'ACC-82710' },
        { id: 'INV-240202', customer: 'Coast Connect Ltd', amount: 'KES 12,500', date: '2024-02-05', status: 'Overdue', channel: 'Paybill 247247', acc: 'ACC-11932' },
        { id: 'INV-240203', customer: 'RiftWiFi systems', amount: 'KES 45,000', date: '2024-02-06', status: 'Pending', channel: 'Paybill 880880', acc: 'ACC-44501' },
    ]

    const filteredInvoices = statusFilter
        ? initialInvoices.filter(inv => inv.status.toLowerCase() === statusFilter.toLowerCase())
        : initialInvoices

    const getStatusVariant = (status) => {
        if (status === 'Paid') return 'success'
        if (status === 'Overdue') return 'error'
        if (status === 'Pending') return 'warning'
        return 'default'
    }

    return (
        <div className="space-y-6 font-figtree">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">Financial records</h1>
                    <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Management of payment channels, paybills, and client receivables.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:border-pace-purple transition-all bg-white shadow-sm flex items-center gap-2">
                        <Download size={14} />
                        Export records
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all flex items-center gap-2 shadow-md">
                        <Plus size={14} />
                        New invoice
                    </button>
                </div>
            </div>

            {/* Financial Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Total billed', val: 'KES 4.22M', status: 'info', icon: Receipt },
                    { label: 'Payments received', val: 'KES 3.10M', status: 'success', icon: CheckCircle2 },
                    { label: 'Active paybills', val: '5 channels', status: 'success', icon: Repeat },
                    { label: 'Pending auth', val: 'KES 284k', status: 'warning', icon: AlertTriangle },
                ].map((s, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-pace-purple/20 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-gray-50 rounded-lg text-admin-dim group-hover:text-pace-purple group-hover:bg-pace-purple/5 transition-all">
                                <s.icon size={18} />
                            </div>
                            <Badge variant={s.status} className="scale-90">Live</Badge>
                        </div>
                        <p className="text-[10px] font-bold text-admin-label mb-1 uppercase tracking-widest">{s.label}</p>
                        <h4 className="text-[20px] font-extrabold text-admin-value leading-none">{s.val}</h4>
                    </div>
                ))}
            </div>

            {/* Invoices List Controls */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search invoice or account..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm"
                    />
                </div>
                <div className="flex gap-2">
                    {['All', 'Paid', 'Pending', 'Overdue'].map((tab) => {
                        const isSelected = (!statusFilter && tab === 'All') || (statusFilter?.toLowerCase() === tab.toLowerCase());
                        return (
                            <button
                                key={tab}
                                className={cn(
                                    "px-4 py-2.5 rounded-lg text-[11px] font-bold transition-all border",
                                    isSelected ? "bg-pace-purple text-white border-pace-purple shadow-md" : "bg-white text-admin-label border-gray-200 hover:border-pace-purple"
                                )}
                            >
                                {tab}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Main Table */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 font-bold text-admin-label uppercase tracking-widest text-[9px] opacity-60">
                                <th className="px-6 py-4">Transaction identity</th>
                                <th className="px-6 py-4">Subscriber entity</th>
                                <th className="px-6 py-4">Linked channel</th>
                                <th className="px-6 py-4 text-center">Amount</th>
                                <th className="px-6 py-4 text-center">Status</th>
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
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-16 mx-auto" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-6 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredInvoices.map((inv) => (
                                    <tr
                                        key={inv.id}
                                        onClick={() => setSelectedInvoice(inv)}
                                        className="hover:bg-gray-50/50 transition-all group cursor-pointer"
                                    >
                                        <td className="px-6 py-5 font-bold text-admin-value group-hover:text-pace-purple transition-colors uppercase text-[11px]">{inv.id}</td>
                                        <td className="px-6 py-5">
                                            <p className="font-extrabold text-admin-value leading-none uppercase text-[11px] mb-1.5">{inv.customer}</p>
                                            <div className="flex items-center gap-2 font-medium text-admin-label">
                                                <Badge variant="info" className="scale-90 px-1">{inv.acc}</Badge>
                                                <p className="text-[10px] opacity-70 italic">{inv.date}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <CreditCard size={12} className="text-pace-purple" />
                                                <span className="font-bold text-admin-label uppercase text-[10px] tracking-tight">{inv.channel}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center font-black text-admin-value uppercase">
                                            {inv.amount}
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <Badge variant={getStatusVariant(inv.status)}>{inv.status}</Badge>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedInvoice(inv); }}
                                                className="p-2 text-admin-dim hover:text-pace-purple hover:bg-gray-50 rounded-lg transition-all"
                                                title="View Invoice Details"
                                            >
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Details Modal */}
            <Modal
                isOpen={!!selectedInvoice}
                onClose={() => setSelectedInvoice(null)}
                title="Transaction audit"
                maxWidth="max-w-xl"
                footer={
                    <>
                        <button onClick={() => setSelectedInvoice(null)} className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all">Close</button>
                        <button className="px-8 py-2 bg-pace-purple text-white rounded-lg font-bold text-[11px] hover:bg-[#3d1a75] transition-all shadow-md">Send receipt</button>
                    </>
                }
            >
                {selectedInvoice && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest opacity-50 mb-2 leading-none">Subscriber identity</p>
                                <h3 className="text-[18px] font-black text-admin-value uppercase">{selectedInvoice.customer}</h3>
                                <p className="text-[11px] font-medium text-admin-label">Account: <span className="font-bold text-pace-purple">{selectedInvoice.acc}</span></p>
                            </div>
                            <div className="text-right">
                                <Badge variant={getStatusVariant(selectedInvoice.status)} className="mb-2">{selectedInvoice.status}</Badge>
                                <p className="text-[26px] font-black text-admin-value leading-none">{selectedInvoice.amount}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest mb-3 opacity-50 leading-none">Payment channel</p>
                                <div className="flex items-center gap-2">
                                    <Repeat size={14} className="text-pace-purple" />
                                    <p className="text-[13px] font-extrabold text-admin-value uppercase">{selectedInvoice.channel}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <p className="text-[10px] font-bold text-admin-label uppercase tracking-widest mb-3 opacity-50 leading-none">Verification status</p>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-pace-green" />
                                    <p className="text-[13px] font-extrabold text-admin-value uppercase">Auto-reconciled</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
