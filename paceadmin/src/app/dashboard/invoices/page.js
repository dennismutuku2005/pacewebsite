"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search, Receipt, Download, FileText, Filter, Send, ChevronDown,
    CheckCircle2, AlertTriangle, Clock, X, CreditCard, Building2,
    User, Mail, Calendar, ChevronLeft, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function InvoicingPage() {
    const [selectedInvoice, setSelectedInvoice] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    const invoices = [
        { id: 'INV-240201', customer: 'SkyNet Solutions Ltd', amount: 'KES 45,000', date: '2024-02-01', due: '2024-02-15', status: 'Paid', method: 'M-PESA B2B', email: 'admin@skynet.co.ke', contact: 'John Kamau' },
        { id: 'INV-240202', customer: 'Coast Connect Ltd', amount: 'KES 12,500', date: '2024-02-05', due: '2024-02-19', status: 'Overdue', method: 'Pending', email: 'billing@coastconnect.net', contact: 'Mary Wanjiku' },
        { id: 'INV-240203', customer: 'RiftWiFi systems', amount: 'KES 45,000', date: '2024-02-06', due: '2024-02-20', status: 'Pending', method: 'Invoice Sent', email: 'ops@riftwifi.co.ke', contact: 'David Omari' },
        { id: 'INV-240204', customer: 'Lake Side Internet', amount: 'KES 8,000', date: '2024-02-08', due: '2024-02-22', status: 'Partial', method: 'Bank (3k)', email: 'dev@lakeside.net', contact: 'Sarah Atieno' },
        { id: 'INV-240205', customer: 'Alpha Telecom', amount: 'KES 45,000', date: '2024-02-09', due: '2024-02-23', status: 'Draft', method: 'Auto-Gen', email: 'info@alpha.net', contact: 'Kelvin Chirchir' },
    ]

    const TableSkeleton = () => (
        <div className="animate-pulse">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex border-b border-gray-50 h-[64px]">
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="flex-1 bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                    <div className="w-[15%] bg-gray-50 h-3 my-auto mx-5 rounded"></div>
                </div>
            ))}
        </div>
    )

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-admin-value leading-none tracking-tight">Billing & Invoicing</h1>
                    <p className="text-[12px] text-admin-label mt-2 font-medium">Manage client subscriptions, payments, and billing cycles.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple transition-all uppercase tracking-widest leading-none flex items-center gap-2 bg-white">
                        <Download size={14} /> Export Report
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded text-[11px] font-black shadow-none hover:bg-[#3d1a75] transition-all uppercase tracking-widest leading-none">
                        Send All Invoices
                    </button>
                </div>
            </div>

            {/* Invoicing Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-4 border border-pace-border rounded divide-x divide-pace-border overflow-hidden bg-white shadow-none">
                {[
                    { label: 'Total Billed', val: 'KES 4.22M', note: 'This Month' },
                    { label: 'Payments Received', val: 'KES 3.10M', note: 'Collected' },
                    { label: 'Pending Payments', val: 'KES 840k', note: 'Awaiting' },
                    { label: 'Overdue Amount', val: 'KES 284k', note: 'Needs Attention', color: 'text-red-500' },
                ].map((s, i) => (
                    <div key={i} className="p-5">
                        <p className="text-[10px] font-black text-admin-label uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        {isLoading ? <div className="h-6 w-24 bg-gray-50 animate-pulse rounded"></div> : (
                            <h4 className={cn("text-[20px] font-black leading-none tracking-tight", s.color || "text-admin-value")}>{s.val}</h4>
                        )}
                        <p className="text-[10px] font-bold text-admin-dim mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Invoices List Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-9">
                <div className="flex items-center gap-2 w-full md:w-auto h-full">
                    <div className="relative w-full md:w-64 h-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                        <input
                            type="text"
                            placeholder="Search by Invoice ID or Client..."
                            className="w-full h-full pl-9 pr-3 rounded border border-pace-border bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[11px] font-black transition-all placeholder:text-admin-dim text-admin-value"
                        />
                    </div>
                    <button className="px-6 h-full border border-pace-border text-admin-label rounded text-[11px] font-black hover:border-pace-purple hover:text-pace-purple bg-white transition-all uppercase tracking-widest">
                        Search
                    </button>
                </div>
                <div className="flex gap-2 h-8">
                    {['All', 'Paid', 'Pending', 'Overdue'].map((tab) => (
                        <button
                            key={tab}
                            className={cn(
                                "px-4 h-full rounded text-[10px] font-black uppercase tracking-[1.5px] transition-all border",
                                tab === 'All' ? "bg-pace-purple text-white border-pace-purple" : "bg-white text-admin-label border-pace-border hover:border-pace-purple hover:text-pace-purple"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Invoice Table */}
            <div className="border border-pace-border rounded overflow-hidden bg-white shadow-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-pace-bg-subtle border-b border-pace-border font-black text-admin-label uppercase tracking-[2px] text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100">Invoice ID</th>
                                <th className="px-5 py-3 border-r border-gray-100">Client Name</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Amount</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Due Date</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Status</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <tr><td colSpan="6"><TableSkeleton /></td></tr>
                            ) : (
                                invoices.map((inv) => (
                                    <tr
                                        key={inv.id}
                                        onClick={() => setSelectedInvoice(inv)}
                                        className="hover:bg-gray-50 transition-all group cursor-pointer"
                                    >
                                        <td className="px-5 py-4 border-r border-gray-50 font-mono text-admin-dim group-hover:text-admin-value transition-colors uppercase font-black">{inv.id}</td>
                                        <td className="px-5 py-4 border-r border-gray-50">
                                            <p className="font-black text-admin-value leading-none">{inv.customer}</p>
                                            <p className="text-[10px] text-admin-label font-black uppercase tracking-[2px] mt-1.5 flex items-center gap-1.5 opacity-70">
                                                <Clock size={11} /> Sent: {inv.date}
                                            </p>
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center font-black text-admin-value">
                                            {inv.amount}
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center font-bold text-admin-label">
                                            {inv.due}
                                        </td>
                                        <td className="px-5 py-4 border-r border-gray-50 text-center">
                                            <span className="font-black uppercase text-[10px] tracking-widest border-b-2 border-gray-100 text-admin-label">{inv.status}</span>
                                            <p className="text-[9px] font-bold text-admin-dim mt-1 uppercase tracking-tight">{inv.method}</p>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button title="Download PDF" className="p-2 border border-pace-border rounded bg-white hover:border-pace-purple text-admin-dim hover:text-pace-purple transition-all font-black text-[10px]">PDF</button>
                                                <button title="View Record" className="px-4 py-2 border border-pace-border rounded bg-white hover:border-pace-purple text-admin-label hover:text-pace-purple transition-all font-black uppercase tracking-widest text-[9px]">Open</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 bg-gray-50/50 border-t border-pace-border flex items-center justify-between">
                    <p className="text-[11px] text-admin-label font-black uppercase tracking-tight">Active Invoices: {invoices.length} entries</p>
                    <div className="flex items-center gap-1 h-8">
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black hover:border-pace-purple transition-all">
                            <ChevronLeft size={14} />
                        </button>
                        <div className="flex gap-1 h-full">
                            <button className="w-8 h-full rounded bg-pace-purple text-white text-[10px] font-black">1</button>
                        </div>
                        <button className="px-3 h-full border border-pace-border rounded text-[10px] uppercase text-admin-label hover:text-admin-value bg-white font-black hover:border-pace-purple transition-all">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Individual Details Modal... */}
            <AnimatePresence>
                {selectedInvoice && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedInvoice(null)} className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-white w-full max-w-2xl rounded border border-pace-border shadow-none overflow-hidden flex flex-col">
                            <div className="px-6 py-4 bg-pace-bg-subtle border-b border-pace-border flex justify-between items-center">
                                <h3 className="text-[14px] font-black text-admin-value uppercase tracking-[2px]">Invoice Details - {selectedInvoice.id}</h3>
                                <button onClick={() => setSelectedInvoice(null)} className="text-admin-dim hover:text-admin-value transition-colors"><X size={20} /></button>
                            </div>
                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black text-admin-label uppercase tracking-widest leading-none">Billing Information</p>
                                        <div>
                                            <p className="text-[20px] font-black text-admin-value leading-none">{selectedInvoice.customer}</p>
                                            <p className="text-[12px] text-admin-label font-black mt-2 uppercase tracking-tight">{selectedInvoice.contact}</p>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-4">
                                        <p className="text-[10px] font-black text-admin-label uppercase tracking-widest leading-none">Total Amount</p>
                                        <div>
                                            <p className="text-[28px] font-black text-admin-value leading-none tracking-tight">{selectedInvoice.amount}</p>
                                            <p className="text-[12px] font-black mt-2 uppercase tracking-widest text-admin-label">{selectedInvoice.status}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 pt-8 border-t border-gray-50">
                                    <button onClick={() => setSelectedInvoice(null)} className="px-6 py-2 border border-pace-border text-admin-label rounded font-black uppercase tracking-widest text-[11px] bg-white">Close</button>
                                    <button className="px-8 py-2 bg-pace-purple text-white rounded font-black uppercase tracking-widest text-[11px]">Send Receipt</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
