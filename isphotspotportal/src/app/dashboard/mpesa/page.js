"use client"

import React, { useState, useEffect } from 'react'
import { Search, Filter, Download, Calendar, CheckCircle2, XCircle, Clock, Smartphone, Hash, DollarSign, User, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Skeleton } from '@/components/Skeleton'
import { Modal } from '@/components/Modal'

export default function MpesaTransactionsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedTransaction, setSelectedTransaction] = useState(null)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const transactions = [
        {
            id: 'TXN-001',
            mpesaCode: 'RCN1S2D3F4G5',
            mobile: '0712345678',
            amount: '50',
            type: 'STK Push',
            status: 'Success',
            timestamp: '2026-02-13 14:05:32',
            businessShortCode: '247247',
            accountRef: 'HOTSPOT',
            transactionType: 'CustomerPayBillOnline',
            firstName: 'John',
            lastName: 'Doe',
            balance: 'KSH 12,450.00'
        },
        {
            id: 'TXN-002',
            mpesaCode: 'QWE9R8T7Y6U5',
            mobile: '0787654321',
            amount: '20',
            type: 'Paybill',
            status: 'Success',
            timestamp: '2026-02-13 13:45:18',
            businessShortCode: '247247',
            accountRef: 'HOTSPOT',
            transactionType: 'CustomerPayBillOnline',
            firstName: 'Mary',
            lastName: 'Wanjiku',
            balance: 'KSH 12,470.00'
        },
        {
            id: 'TXN-003',
            mpesaCode: 'ZXC5V4B3N2M1',
            mobile: '0700112233',
            amount: '1000',
            type: 'STK Push',
            status: 'Success',
            timestamp: '2026-02-13 12:30:00',
            businessShortCode: '247247',
            accountRef: 'HOTSPOT',
            transactionType: 'CustomerPayBillOnline',
            firstName: 'David',
            lastName: 'Omari',
            balance: 'KSH 13,470.00'
        },
        {
            id: 'TXN-004',
            mpesaCode: 'ASD3F2G1H0J9',
            mobile: '0722998877',
            amount: '100',
            type: 'STK Push',
            status: 'Failed',
            timestamp: '2026-02-13 11:15:42',
            businessShortCode: '247247',
            accountRef: 'HOTSPOT',
            transactionType: 'CustomerPayBillOnline',
            firstName: 'Jane',
            lastName: 'Muthoni',
            balance: 'KSH 13,470.00',
            failureReason: 'Insufficient funds'
        },
        {
            id: 'TXN-005',
            mpesaCode: 'POI8U7Y6T5R4',
            mobile: '0733445566',
            amount: '200',
            type: 'Paybill',
            status: 'Pending',
            timestamp: '2026-02-13 10:50:00',
            businessShortCode: '247247',
            accountRef: 'HOTSPOT',
            transactionType: 'CustomerPayBillOnline',
            firstName: 'Peter',
            lastName: 'Kamau',
            balance: 'KSH 13,470.00'
        },
    ]

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const filteredTransactions = transactions.filter(txn =>
        txn.mpesaCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        txn.mobile.includes(searchTerm) ||
        txn.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        txn.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const getStatusConfig = (status) => {
        switch (status) {
            case 'Success':
                return { variant: 'success', icon: CheckCircle2, color: 'text-pace-green' }
            case 'Failed':
                return { variant: 'error', icon: XCircle, color: 'text-red-500' }
            case 'Pending':
                return { variant: 'warning', icon: Clock, color: 'text-orange-500' }
            default:
                return { variant: 'default', icon: Clock, color: 'text-admin-dim' }
        }
    }

    const handleRefresh = () => {
        setIsRefreshing(true)
        setTimeout(() => setIsRefreshing(false), 2000)
    }

    const totalSuccess = transactions.filter(t => t.status === 'Success').length
    const totalAmount = transactions
        .filter(t => t.status === 'Success')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0)

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-50 pb-4">
                <div>
                    <h1 className="text-[20px] font-black text-pace-purple leading-tight tracking-tight uppercase">M-Pesa Transactions</h1>
                    <p className="text-[11px] text-admin-label mt-1 font-medium tracking-tight opacity-70">Complete payment history and transaction reconciliation.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleRefresh}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-admin-label rounded-lg hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold disabled:opacity-50"
                    >
                        <RefreshCw size={14} className={cn(isRefreshing && "animate-spin")} />
                        {isRefreshing ? 'Syncing...' : 'Refresh'}
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all uppercase tracking-widest shadow-md">
                        <Download size={14} />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-pace-green/10 flex items-center justify-center text-pace-green">
                            <CheckCircle2 size={20} />
                        </div>
                        <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Successful</p>
                    </div>
                    <p className="text-[24px] font-black text-admin-value">{totalSuccess}</p>
                    <p className="text-[10px] text-admin-label font-bold mt-1 opacity-60">Completed payments</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-pace-purple/10 flex items-center justify-center text-pace-purple">
                            <DollarSign size={20} />
                        </div>
                        <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Total Value</p>
                    </div>
                    <p className="text-[24px] font-black text-pace-purple">KSH {totalAmount.toLocaleString()}</p>
                    <p className="text-[10px] text-admin-label font-bold mt-1 opacity-60">Revenue collected</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                            <Clock size={20} />
                        </div>
                        <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Pending</p>
                    </div>
                    <p className="text-[24px] font-black text-admin-value">{transactions.filter(t => t.status === 'Pending').length}</p>
                    <p className="text-[10px] text-admin-label font-bold mt-1 opacity-60">Awaiting confirmation</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                            <XCircle size={20} />
                        </div>
                        <p className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Failed</p>
                    </div>
                    <p className="text-[24px] font-black text-admin-value">{transactions.filter(t => t.status === 'Failed').length}</p>
                    <p className="text-[10px] text-admin-label font-bold mt-1 opacity-60">Declined transactions</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                    <input
                        type="text"
                        placeholder="Search M-Pesa code, mobile, or name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-100 bg-white focus:ring-1 focus:ring-pace-purple/10 focus:border-pace-purple outline-none text-[12px] font-medium text-admin-value shadow-sm transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-xl hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold">
                        <Filter size={14} /> Filter Status
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-admin-label rounded-xl hover:border-pace-purple hover:text-pace-purple transition-all bg-white text-[11px] font-bold">
                        <Calendar size={14} /> Date Range
                    </button>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 font-bold text-admin-dim uppercase tracking-widest text-[9px]">
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">M-Pesa Code</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Mobile</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-28" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-16" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-6 py-5 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-6 py-5"><Skeleton className="h-4 w-32" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredTransactions.map((txn) => {
                                    const statusConfig = getStatusConfig(txn.status)
                                    return (
                                        <tr
                                            key={txn.id}
                                            onClick={() => setSelectedTransaction(txn)}
                                            className="hover:bg-gray-50/30 transition-colors group cursor-pointer"
                                        >
                                            <td className="px-6 py-5">
                                                <p className="font-black text-admin-value uppercase text-[11px]">{txn.id}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <Hash size={12} className="text-admin-dim" />
                                                    <span className="font-extrabold text-admin-value uppercase">{txn.mpesaCode}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <User size={12} className="text-admin-dim" />
                                                    <span className="font-bold text-admin-label">{txn.firstName} {txn.lastName}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <Smartphone size={12} className="text-admin-dim" />
                                                    <span className="font-bold text-admin-label">{txn.mobile}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="font-black text-pace-purple">KSH {txn.amount}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <Badge variant="outline" className="text-[9px] font-black">{txn.type.toUpperCase()}</Badge>
                                            </td>
                                            <td className="px-6 py-5 text-center">
                                                <Badge variant={statusConfig.variant} className="text-[9px] font-black tracking-tight">
                                                    <statusConfig.icon size={10} className="mr-1" />
                                                    {txn.status.toUpperCase()}
                                                </Badge>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2 text-admin-dim">
                                                    <Clock size={10} />
                                                    <span className="text-[11px] font-bold">{txn.timestamp}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
                <p className="text-[11px] text-admin-dim font-bold">Showing 1-{filteredTransactions.length} of {transactions.length} transactions</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-admin-label rounded-lg text-[11px] font-bold hover:bg-gray-50 transition-all">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-[11px] font-bold hover:bg-[#3d1a75] transition-all">
                        Next
                    </button>
                </div>
            </div>

            {/* Transaction Details Modal */}
            <Modal
                isOpen={!!selectedTransaction}
                onClose={() => setSelectedTransaction(null)}
                title="Transaction Details"
                maxWidth="max-w-2xl"
                footer={
                    <>
                        <button onClick={() => setSelectedTransaction(null)} className="px-6 py-2 border border-gray-200 text-admin-label rounded-lg font-bold text-[11px] hover:bg-gray-50 transition-all">Close</button>
                        <button className="px-8 py-2 bg-pace-purple text-white rounded-lg font-bold text-[11px] hover:bg-[#3d1a75] transition-all shadow-md">Download Receipt</button>
                    </>
                }
            >
                {selectedTransaction && (
                    <div className="space-y-6">
                        {/* Status Banner */}
                        <div className={cn(
                            "p-6 rounded-2xl border-2 text-center",
                            selectedTransaction.status === 'Success' && "bg-pace-green/5 border-pace-green/20",
                            selectedTransaction.status === 'Failed' && "bg-red-50 border-red-200",
                            selectedTransaction.status === 'Pending' && "bg-orange-50 border-orange-200"
                        )}>
                            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{
                                backgroundColor: selectedTransaction.status === 'Success' ? 'rgb(34 197 94 / 0.1)' :
                                    selectedTransaction.status === 'Failed' ? 'rgb(239 68 68 / 0.1)' :
                                        'rgb(249 115 22 / 0.1)'
                            }}>
                                {selectedTransaction.status === 'Success' && <CheckCircle2 size={32} className="text-pace-green" />}
                                {selectedTransaction.status === 'Failed' && <XCircle size={32} className="text-red-500" />}
                                {selectedTransaction.status === 'Pending' && <Clock size={32} className="text-orange-500" />}
                            </div>
                            <h3 className="text-[18px] font-black text-admin-value uppercase mb-2">
                                {selectedTransaction.status === 'Success' && 'Payment Successful'}
                                {selectedTransaction.status === 'Failed' && 'Payment Failed'}
                                {selectedTransaction.status === 'Pending' && 'Payment Pending'}
                            </h3>
                            <p className="text-[28px] font-black text-pace-purple">KSH {selectedTransaction.amount}</p>
                            {selectedTransaction.failureReason && (
                                <p className="text-[11px] text-red-600 font-bold mt-2 italic">Reason: {selectedTransaction.failureReason}</p>
                            )}
                        </div>

                        {/* Transaction Info */}
                        <div className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm">
                            <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
                                <h3 className="text-[10px] font-black text-admin-dim uppercase tracking-widest">Transaction Information</h3>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {[
                                    { label: 'M-Pesa Receipt', val: selectedTransaction.mpesaCode, icon: Hash },
                                    { label: 'Transaction ID', val: selectedTransaction.id, icon: Hash },
                                    { label: 'Customer Name', val: `${selectedTransaction.firstName} ${selectedTransaction.lastName}`, icon: User },
                                    { label: 'Mobile Number', val: selectedTransaction.mobile, icon: Smartphone },
                                    { label: 'Payment Type', val: selectedTransaction.type, icon: DollarSign },
                                    { label: 'Business ShortCode', val: selectedTransaction.businessShortCode, icon: Hash },
                                    { label: 'Account Reference', val: selectedTransaction.accountRef, icon: Hash },
                                    { label: 'Transaction Type', val: selectedTransaction.transactionType, icon: Hash },
                                    { label: 'Timestamp', val: selectedTransaction.timestamp, icon: Clock },
                                    { label: 'Account Balance', val: selectedTransaction.balance, icon: DollarSign },
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
        </div>
    )
}
