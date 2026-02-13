"use client"

import React, { useState, useEffect } from 'react'
import { Search, Filter, Download, Calendar, CheckCircle2, XCircle, Clock, Smartphone, Hash, DollarSign, User, RefreshCw, X } from 'lucide-react'
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
                return { variant: 'default', icon: Clock, color: 'text-gray-500' }
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
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">M-Pesa Transactions</h1>
                    <p className="text-sm text-gray-500 mt-1">Complete payment history and transaction reconciliation.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleRefresh}
                        disabled={isRefreshing}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium disabled:opacity-50"
                    >
                        <RefreshCw size={16} className={cn(isRefreshing && "animate-spin")} />
                        {isRefreshing ? 'Syncing...' : 'Refresh'}
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm">
                        <Download size={16} />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                            <CheckCircle2 size={20} />
                        </div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Successful</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{totalSuccess}</p>
                    <p className="text-xs text-gray-500 mt-1">Completed payments</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-pace-purple">
                            <DollarSign size={20} />
                        </div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Total Value</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">KSH {totalAmount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">Revenue collected</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                            <Clock size={20} />
                        </div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pending</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{transactions.filter(t => t.status === 'Pending').length}</p>
                    <p className="text-xs text-gray-500 mt-1">Awaiting confirmation</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                            <XCircle size={20} />
                        </div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Failed</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{transactions.filter(t => t.status === 'Failed').length}</p>
                    <p className="text-xs text-gray-500 mt-1">Declined transactions</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search M-Pesa code, mobile, or name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple focus:border-pace-purple outline-none text-sm text-gray-900 shadow-sm transition-all"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium">
                        <Calendar size={16} /> Date
                    </button>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Transaction ID</th>
                                <th className="px-4 py-3 font-semibold">M-Pesa Code</th>
                                <th className="px-4 py-3 font-semibold">Customer</th>
                                <th className="px-4 py-3 font-semibold">Mobile</th>
                                <th className="px-4 py-3 font-semibold">Amount</th>
                                <th className="px-4 py-3 font-semibold">Type</th>
                                <th className="px-4 py-3 font-semibold text-center">Status</th>
                                <th className="px-4 py-3 font-semibold">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-28" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-16" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-4 py-3 text-center"><Skeleton className="h-4 w-20 mx-auto" /></td>
                                        <td className="px-4 py-3"><Skeleton className="h-4 w-32" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredTransactions.map((txn) => {
                                    const statusConfig = getStatusConfig(txn.status)
                                    return (
                                        <tr
                                            key={txn.id}
                                            onClick={() => setSelectedTransaction(txn)}
                                            className="hover:bg-gray-50 transition-colors group cursor-pointer"
                                        >
                                            <td className="px-4 py-3 text-gray-500 font-medium text-xs">
                                                {txn.id}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="font-medium text-gray-900">{txn.mpesaCode}</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray-900 font-medium text-sm">{txn.firstName} {txn.lastName}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-gray-500 text-sm">
                                                {txn.mobile}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="font-bold text-gray-900">KSH {txn.amount}</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-gray-200 text-gray-600 font-medium">{txn.type}</Badge>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <Badge variant={statusConfig.variant} className="text-[10px] px-2 py-0.5 font-medium">
                                                    {txn.status}
                                                </Badge>
                                            </td>
                                            <td className="px-4 py-3 text-gray-400 text-xs">
                                                {txn.timestamp}
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
            <div className="flex justify-between items-center px-2">
                <p className="text-sm text-gray-500">Showing 1-{filteredTransactions.length} of {transactions.length} transactions</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm">
                        Next
                    </button>
                </div>
            </div>

            {/* Transaction Details Modal */}
            <Modal
                isOpen={!!selectedTransaction}
                onClose={() => setSelectedTransaction(null)}
                title="Transaction Details"
                maxWidth="max-w-xl"
                footer={
                    <>
                        <button onClick={() => setSelectedTransaction(null)} className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50 transition-all">Close</button>
                        <button className="px-4 py-2 bg-pace-purple text-white rounded-lg font-medium text-sm hover:bg-pace-purple/90 transition-all shadow-sm">Download Receipt</button>
                    </>
                }
            >
                {selectedTransaction && (
                    <div className="space-y-6">
                        {/* Status Banner */}
                        <div className="flex flex-col items-center justify-center py-6 border-b border-gray-100">
                            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4",
                                selectedTransaction.status === 'Success' ? 'bg-green-50 text-green-600' :
                                    selectedTransaction.status === 'Failed' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                            )}>
                                {selectedTransaction.status === 'Success' && <CheckCircle2 size={32} />}
                                {selectedTransaction.status === 'Failed' && <XCircle size={32} />}
                                {selectedTransaction.status === 'Pending' && <Clock size={32} />}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">KSH {selectedTransaction.amount}</h3>
                            <p className={cn("text-sm font-medium mt-1",
                                selectedTransaction.status === 'Success' ? 'text-green-600' :
                                    selectedTransaction.status === 'Failed' ? 'text-red-600' : 'text-orange-600'
                            )}>
                                {selectedTransaction.status === 'Success' && 'Payment Successful'}
                                {selectedTransaction.status === 'Failed' && 'Payment Failed'}
                                {selectedTransaction.status === 'Pending' && 'Payment Pending'}
                            </p>
                            {selectedTransaction.failureReason && (
                                <p className="text-xs text-red-500 mt-2 bg-red-50 px-3 py-1 rounded-full">{selectedTransaction.failureReason}</p>
                            )}
                        </div>

                        {/* Transaction Info - Clean List */}
                        <div className="space-y-4">
                            {[
                                { label: 'M-Pesa Receipt', val: selectedTransaction.mpesaCode },
                                { label: 'Customer', val: `${selectedTransaction.firstName} ${selectedTransaction.lastName}` },
                                { label: 'Mobile', val: selectedTransaction.mobile },
                                { label: 'Date', val: selectedTransaction.timestamp },
                                { label: 'Type', val: selectedTransaction.type },
                                { label: 'Transaction ID', val: selectedTransaction.id },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-medium text-gray-900">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
