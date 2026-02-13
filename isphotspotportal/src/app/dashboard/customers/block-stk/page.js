"use client"

import React, { useState } from 'react'
import { Search, ShieldAlert, Phone, ShieldCheck, UserX, AlertCircle, Unlock, Ban, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Modal } from '@/components/Modal'

export default function BlockStkPage() {
    const [mobile, setMobile] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const [isSearching, setIsSearching] = useState(false)

    // Modal & Action States
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isUnblockModalOpen, setIsUnblockModalOpen] = useState(false)
    const [selectedBlockedUser, setSelectedBlockedUser] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    // Mock initial data
    const [blockedNumbers, setBlockedNumbers] = useState([
        { id: 1, name: 'John Doe', mobile: '0712 345 678', reason: 'Fraudulent Activity', date: '2023-10-25' },
        { id: 2, name: 'Jane Smith', mobile: '0722 111 222', reason: 'Repeated Failed Push', date: '2023-10-28' },
        { id: 3, name: 'Michael Brown', mobile: '0733 444 555', reason: 'Security Flag', date: '2023-11-02' },
    ])

    const handleSearch = () => {
        if (!mobile) return
        setIsSearching(true)
        // Mock Search API call
        setTimeout(() => {
            setSearchResult({
                name: 'David Kimani',
                mobile: mobile,
                status: 'Active',
                lastTransaction: 'KSH 50 - 2 mins ago',
                macAddress: '00:1A:2B:3C:4D:5E'
            })
            setIsSearching(false)
            setIsModalOpen(true)
        }, 800)
    }

    const handleBlock = async () => {
        setIsProcessing(true)
        try {
            // Simulate API Call
            await new Promise(resolve => setTimeout(resolve, 1500))

            /* 
            // Real API Call Implementation:
            const response = await fetch('/api/stk/block', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobile: searchResult.mobile, reason: 'Manual Block' })
            })
            if (!response.ok) throw new Error('Failed to block')
            */

            // Update State
            const newBlock = {
                id: Date.now(), // Generate mock ID
                name: searchResult.name,
                mobile: searchResult.mobile,
                reason: 'Manual Block',
                date: new Date().toISOString().split('T')[0]
            }
            setBlockedNumbers([newBlock, ...blockedNumbers])
            setIsModalOpen(false)
            setMobile('')
            setSearchResult(null)
        } catch (error) {
            console.error("Block failed:", error)
            // Handle error toast here
        } finally {
            setIsProcessing(false)
        }
    }

    const handleUnblockClick = (user) => {
        setSelectedBlockedUser(user)
        setIsUnblockModalOpen(true)
    }

    const confirmUnblock = async () => {
        if (!selectedBlockedUser) return
        setIsProcessing(true)
        try {
            // Simulate API Call
            await new Promise(resolve => setTimeout(resolve, 1500))

            /* 
            // Real API Call Implementation:
            const response = await fetch(`/api/stk/unblock/${selectedBlockedUser.id}`, {
                method: 'DELETE'
            })
            if (!response.ok) throw new Error('Failed to unblock')
            */

            // Update State
            setBlockedNumbers(prev => prev.filter(user => user.id !== selectedBlockedUser.id))
            setIsUnblockModalOpen(false)
            setSelectedBlockedUser(null)
        } catch (error) {
            console.error("Unblock failed:", error)
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <div className="max-w-[1600px] mx-auto space-y-8 font-figtree animate-in fade-in duration-700">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">STK Security Control</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage and restrict customers from initiating STK push payments.</p>
                </div>
            </div>

            {/* Search Section - Stacked on top */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="max-w-3xl">
                    <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <ShieldAlert size={18} className="text-red-500" />
                        Block New Number
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 items-end">
                        <div className="flex-1 w-full">
                            <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Customer Mobile Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="e.g. 0712345678"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-1 focus:ring-pace-purple focus:border-pace-purple outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-all shadow-sm"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleSearch}
                            disabled={isSearching || !mobile}
                            className="w-full sm:w-auto px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
                        >
                            {isSearching ? (
                                <span className="animate-pulse">Searching...</span>
                            ) : (
                                <>
                                    <Search size={16} />
                                    Find Customer
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Blocked List Table - Stacked below */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-base font-bold text-gray-900">Blocked Numbers</h3>
                    <Badge variant="error" className="text-xs">{blockedNumbers.length} Blocked</Badge>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-6 py-3 font-semibold">Customer</th>
                                <th className="px-6 py-3 font-semibold">Mobile Number</th>
                                <th className="px-6 py-3 font-semibold">Block Reason</th>
                                <th className="px-6 py-3 font-semibold">Date Blocked</th>
                                <th className="px-6 py-3 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {blockedNumbers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-gray-900">{user.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 font-mono text-xs">
                                        {user.mobile}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant="outline" className="bg-red-50 text-red-600 border-red-100 font-normal">
                                            {user.reason}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-xs">
                                        {user.date}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleUnblockClick(user)}
                                            className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all shadow-sm flex items-center gap-1.5 ml-auto"
                                        >
                                            <Unlock size={14} />
                                            Unblock
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {blockedNumbers.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                                        <ShieldCheck size={48} className="mx-auto mb-3 text-gray-200" />
                                        <p className="font-medium">No blocked numbers found</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Block Confirmation Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => !isProcessing && setIsModalOpen(false)}
                title="Confirm STK Block"
                maxWidth="max-w-lg"
                footer={
                    <>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            disabled={isProcessing}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleBlock}
                            disabled={isProcessing}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 shadow-sm flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> : <Ban size={16} />}
                            {isProcessing ? 'Processing...' : 'Confirm Block'}
                        </button>
                    </>
                }
            >
                {searchResult && (
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 shadow-sm shrink-0">
                                <UserX size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">{searchResult.name}</h4>
                                <p className="text-sm text-gray-500 font-medium">{searchResult.mobile}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Badge variant="success" className="text-[10px] px-2 py-0.5">{searchResult.status}</Badge>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500 font-mono">{searchResult.macAddress}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 flex gap-3">
                            <AlertTriangle size={20} className="text-orange-500 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-orange-800">Warning: Action is immediate</p>
                                <p className="text-xs text-orange-700 leading-relaxed">
                                    Blocking this number will prevent all future M-Pesa push requests. This should only be done for flagged fraudulent numbers or excessive failed attempts.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-700 ml-1">Reason for blocking (Optional)</label>
                            <textarea
                                className="w-full p-3 rounded-lg border border-gray-200 bg-white text-sm focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none min-h-[80px]"
                                placeholder="e.g. Excessive failed transactions..."
                            ></textarea>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Unblock Confirmation Modal */}
            <Modal
                isOpen={isUnblockModalOpen}
                onClose={() => !isProcessing && setIsUnblockModalOpen(false)}
                title="Confirm Unblock Number"
                maxWidth="max-w-lg"
                footer={
                    <>
                        <button
                            onClick={() => setIsUnblockModalOpen(false)}
                            disabled={isProcessing}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={confirmUnblock}
                            disabled={isProcessing}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 shadow-sm flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> : <Unlock size={16} />}
                            {isProcessing ? 'Processing...' : 'Unblock Access'}
                        </button>
                    </>
                }
            >
                {selectedBlockedUser && (
                    <div className="space-y-6">
                        <div className="p-4 bg-green-50 rounded-xl border border-green-100 flex gap-3">
                            <ShieldCheck size={24} className="text-green-600 shrink-0" />
                            <div>
                                <p className="text-sm font-bold text-green-900">Restore M-Pesa Access?</p>
                                <p className="text-xs text-green-700 mt-1 leading-relaxed">
                                    You are about to unblock <span className="font-bold">{selectedBlockedUser.name} ({selectedBlockedUser.mobile})</span>.
                                    They will immediately be able to initiate STK push requests again.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-500 border border-gray-100">
                            <strong>Original Block Reason:</strong><br />
                            {selectedBlockedUser.reason}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
