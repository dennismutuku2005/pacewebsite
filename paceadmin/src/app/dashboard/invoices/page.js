"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Receipt, Download, FileText, Filter, Send, ChevronDown, CheckCircle2, AlertTriangle, Clock, X, CreditCard, Building2, User, Mail, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function InvoicingPage() {
    const [selectedInvoice, setSelectedInvoice] = useState(null)
    const invoices = [
        { id: 'INV-240201', customer: 'SkyNet Solutions Ltd', amount: 'KES 45,000', date: '2024-02-01', due: '2024-02-15', status: 'Paid', method: 'M-PESA B2B', email: 'admin@skynet.co.ke', contact: 'John Kamau' },
        { id: 'INV-240202', customer: 'Coast Connect Ltd', amount: 'KES 12,500', date: '2024-02-05', due: '2024-02-19', status: 'Overdue', method: 'Pending', email: 'billing@coastconnect.net', contact: 'Mary Wanjiku' },
        { id: 'INV-240203', customer: 'RiftWiFi systems', amount: 'KES 45,000', date: '2024-02-06', due: '2024-02-20', status: 'Pending', method: 'Invoice Sent', email: 'ops@riftwifi.co.ke', contact: 'David Omari' },
        { id: 'INV-240204', customer: 'Lake Side Internet', amount: 'KES 8,000', date: '2024-02-08', due: '2024-02-22', status: 'Partial', method: 'Bank (3k)', email: 'dev@lakeside.net', contact: 'Sarah Atieno' },
        { id: 'INV-240205', customer: 'Alpha Telecom', amount: 'KES 45,000', date: '2024-02-09', due: '2024-02-23', status: 'Draft', method: 'Auto-Gen', email: 'info@alpha.net', contact: 'Kelvin Chirchir' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-gray-900 leading-none tracking-tight">Financial Invoicing System</h1>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">Managing multi-tenant SaaS subscription billing and payment reconciliation.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded text-[11px] font-bold hover:bg-gray-50 transition-all uppercase tracking-widest leading-none flex items-center gap-2 bg-white">
                        <Download size={14} /> Global Export
                    </button>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded text-[11px] font-bold shadow-none hover:bg-black transition-all uppercase tracking-widest leading-none">
                        Dispatch Batch
                    </button>
                </div>
            </div>

            {/* Invoicing Matrix Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 border border-gray-200 rounded divide-x divide-gray-200 overflow-hidden bg-white shadow-none">
                {[
                    { label: 'Total Invoiced', val: 'KES 4.22M', note: 'Feb Collection' },
                    { label: 'Cleared Dues', val: 'KES 3.10M', note: '74% Success Rate', color: 'text-pace-green' },
                    { label: 'Pending Cycle', val: 'KES 840k', note: 'In-Transit' },
                    { label: 'Overdue Vol.', val: 'KES 284k', note: 'Attention Required', color: 'text-red-500' },
                ].map((s, i) => (
                    <div key={i} className="p-5">
                        <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none mb-3">{s.label}</p>
                        <h4 className={cn("text-[20px] font-black leading-none tracking-tight", s.color || "text-gray-900")}>{s.val}</h4>
                        <p className="text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-wider">{s.note}</p>
                    </div>
                ))}
            </div>

            {/* Filter Hub */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-64 h-9">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                        <input
                            type="text"
                            placeholder="Invoice # or ID..."
                            className="w-full h-full pl-9 pr-3 rounded border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple/10 outline-none text-[11px] font-bold transition-all placeholder:text-gray-300 shadow-none"
                        />
                    </div>
                    <button className="px-4 h-9 border border-gray-200 text-gray-500 rounded text-[11px] font-bold hover:bg-gray-50 transition-all uppercase tracking-widest bg-white shadow-none">
                        Filter
                    </button>
                </div>
                <div className="flex gap-2">
                    {['All Status', 'Paid', 'Pending', 'Overdue'].map((tab) => (
                        <button
                            key={tab}
                            className={cn(
                                "px-4 h-8 rounded text-[10px] font-black uppercase tracking-[1.5px] transition-all border",
                                tab === 'All Status' ? "bg-pace-purple text-white border-pace-purple" : "bg-white text-gray-400 border-gray-100 hover:border-gray-300"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Invoice Sheet */}
            <div className="border border-gray-200 rounded overflow-hidden bg-white shadow-none">
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 font-bold text-gray-400 uppercase tracking-[2px] text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Billing ID</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase">Tenant Name</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase text-center">Amount Due</th>
                                <th className="px-5 py-3 border-r border-gray-100 uppercase text-center">Due Date</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center uppercase">Ledger State</th>
                                <th className="px-5 py-3 text-right uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-600">
                            {invoices.map((inv) => (
                                <tr
                                    key={inv.id}
                                    onClick={() => setSelectedInvoice(inv)}
                                    className="hover:bg-gray-50 transition-all group cursor-pointer"
                                >
                                    <td className="px-5 py-4 border-r border-gray-50 font-mono text-gray-300 group-hover:text-gray-900 transition-colors uppercase font-bold">{inv.id}</td>
                                    <td className="px-5 py-4 border-r border-gray-50">
                                        <p className="font-black text-gray-900 leading-none">{inv.customer}</p>
                                        <p className="text-[9px] text-gray-400 font-black uppercase tracking-[2px] mt-1.5 flex items-center gap-1.5 opacity-60">
                                            <Clock size={10} /> Issued: {inv.date}
                                        </p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center font-black text-gray-800">
                                        {inv.amount}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center font-bold text-gray-400">
                                        {inv.due}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest border-b-2 transition-all",
                                            inv.status === 'Paid' ? "text-pace-green border-pace-green/10" :
                                                inv.status === 'Overdue' ? "text-red-500 border-red-50" :
                                                    inv.status === 'Pending' ? "text-blue-500 border-blue-50" :
                                                        inv.status === 'Partial' ? "text-orange-500 border-orange-50" : "text-gray-300 border-gray-50"
                                        )}>{inv.status}</span>
                                        <p className="text-[9px] font-bold text-gray-300 mt-1 uppercase tracking-tight opacity-50">{inv.method}</p>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <div className="flex justify-end gap-1">
                                            <button title="Download PDF" className="p-2 border border-gray-100 rounded bg-white hover:border-gray-900 text-gray-400 hover:text-gray-900 transition-all font-bold">PDF</button>
                                            <button title="View Record" className="p-2 border border-gray-100 rounded bg-white hover:border-gray-900 text-gray-400 hover:text-gray-900 transition-all font-bold uppercase tracking-widest text-[9px]">Open</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Invoice Detail Modal */}
            <AnimatePresence>
                {selectedInvoice && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedInvoice(null)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                            className="relative bg-white w-full max-w-2xl rounded border border-gray-200 shadow-none overflow-hidden flex flex-col"
                        >
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="text-[14px] font-black text-gray-900 uppercase tracking-[2px]">Invoice Details: {selectedInvoice.id}</h3>
                                <button onClick={() => setSelectedInvoice(null)} className="text-gray-400 hover:text-gray-900 transition-colors"><X size={20} /></button>
                            </div>
                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none">Billing Entity</p>
                                        <div>
                                            <p className="text-[18px] font-black text-gray-900 leading-none">{selectedInvoice.customer}</p>
                                            <p className="text-[12px] text-gray-400 font-bold mt-2 uppercase tracking-tight">{selectedInvoice.contact}</p>
                                            <p className="text-[12px] text-gray-400 font-bold mt-1 tracking-tight">{selectedInvoice.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-4">
                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none">Record Statement</p>
                                        <div>
                                            <p className="text-[24px] font-black text-gray-900 leading-none">{selectedInvoice.amount}</p>
                                            <p className={cn(
                                                "text-[12px] font-black mt-2 uppercase tracking-widest",
                                                selectedInvoice.status === 'Paid' ? 'text-pace-green' : 'text-orange-500'
                                            )}>{selectedInvoice.status} • {selectedInvoice.method}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-gray-100 rounded overflow-hidden">
                                    <table className="w-full text-left text-[11px]">
                                        <thead className="bg-gray-50 border-b border-gray-100">
                                            <tr className="font-black text-gray-400 uppercase tracking-widest">
                                                <th className="px-4 py-2">Service Component</th>
                                                <th className="px-4 py-2 text-right">Quantity</th>
                                                <th className="px-4 py-2 text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50 font-bold text-gray-600">
                                            <tr>
                                                <td className="px-4 py-3">SaaS Subscription (Enterprise)</td>
                                                <td className="px-4 py-3 text-right">01</td>
                                                <td className="px-4 py-3 text-right">{selectedInvoice.amount}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3">Cloud Node Maintenance</td>
                                                <td className="px-4 py-3 text-right">01</td>
                                                <td className="px-4 py-3 text-right">Included</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className="bg-gray-50/50 font-black text-gray-900">
                                            <tr>
                                                <td className="px-4 py-3 uppercase tracking-widest">Subtotal Due</td>
                                                <td colSpan="2" className="px-4 py-3 text-right">{selectedInvoice.amount}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className="flex justify-between items-center pt-4">
                                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">Issued: {selectedInvoice.date} • Due: {selectedInvoice.due}</div>
                                    <button className="px-8 py-3 bg-gray-900 text-white rounded text-[11px] font-black uppercase tracking-[2px] transition-all hover:bg-black">Generate Receipts</button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* System Notification - Floating style 2D */}
            <div className="p-4 bg-pace-purple/5 border border-pace-purple/10 rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Clock size={16} className="text-pace-purple/50" />
                    <p className="text-[12px] font-bold text-gray-500 uppercase tracking-tight">System Notice: <span className="text-pace-purple font-black">March Billing Cycle Dispatch</span> scheduled in 20 days. Ensure M-PESA B2B webhooks are active.</p>
                </div>
                <button className="text-[10px] font-black text-pace-purple hover:underline uppercase tracking-widest">Acknowledge</button>
            </div>

        </div>
    )
}
