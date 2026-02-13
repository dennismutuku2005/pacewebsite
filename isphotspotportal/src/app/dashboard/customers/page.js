"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, Filter, Trash2, AlertCircle, MoreHorizontal, Phone, Wifi, User, Clock, CheckCircle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/Badge'
import { Modal } from '@/components/Modal'
import { Skeleton } from '@/components/Skeleton'

export default function CustomersPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const serviceFilter = searchParams.get('service')

    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [deleteModal, setDeleteModal] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [customers, setCustomers] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const observer = useRef()

    // Mock initial data generation
    const generateCustomers = (count, startIndex = 0) => {
        return Array.from({ length: count }).map((_, i) => {
            const index = startIndex + i + 1;
            return {
                id: `CUST-${index.toString().padStart(3, '0')}`,
                mac: `00:1A:${Math.floor(Math.random() * 99)}:${Math.floor(Math.random() * 99)}:5E`,
                mobile: `07${Math.floor(Math.random() * 90000000 + 10000000)}`,
                status: Math.random() > 0.2 ? 'Active' : 'Blocked',
                lastSeen: `${Math.floor(Math.random() * 59)} mins ago`,
                totalSpent: `KSH ${Math.floor(Math.random() * 5000)}`,
                sessions: Math.floor(Math.random() * 100)
            }
        })
    }

    // Initial load
    useEffect(() => {
        const timer = setTimeout(() => {
            setCustomers(generateCustomers(20))
            setIsLoading(false)
        }, 800)
        return () => clearTimeout(timer)
    }, [])

    // Infinite Scroll Observer
    const lastCustomerElementRef = useCallback(node => {
        if (isLoading || isLoadingMore) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMoreCustomers()
            }
        })
        if (node) observer.current.observe(node)
    }, [isLoading, isLoadingMore, hasMore])

    const loadMoreCustomers = async () => {
        setIsLoadingMore(true)
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        setCustomers(prev => [...prev, ...generateCustomers(10, prev.length)])
        setIsLoadingMore(false)

        // Stop after 100 items for demo purpose
        if (customers.length >= 100) setHasMore(false)
    }

    const filteredCustomers = serviceFilter
        ? customers.filter(customer => customer.status.toLowerCase() === serviceFilter)
        : customers

    const getStatusVariant = (status) => {
        if (status === 'Active') return 'success'
        if (status === 'Blocked') return 'error'
        return 'default'
    }

    return (
        <div className="space-y-6 font-figtree max-w-[1600px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Customer Database</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage hotspot users, MAC addresses, and mobile numbers.</p>
                </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row items-center gap-3 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search MAC or mobile number..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-purple-100 focus:border-purple-200 outline-none text-sm text-gray-700 transition-all placeholder:text-gray-400"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all bg-white text-sm font-medium whitespace-nowrap">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all text-sm font-medium whitespace-nowrap ml-auto md:ml-0">
                        Add Customer
                    </button>
                </div>
            </div>

            {/* Main Data Table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer ID</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">MAC Address</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Mobile Number</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Spent</th>
                                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Seen</th>
                                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {isLoading ? (
                                [...Array(8)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-28" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-20" /></td>
                                        <td className="px-6 py-4 text-center"><Skeleton className="h-6 w-16 mx-auto rounded-full" /></td>
                                        <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                                        <td className="px-6 py-4 text-right"><Skeleton className="h-8 w-8 ml-auto" /></td>
                                    </tr>
                                ))
                            ) : (
                                filteredCustomers.map((customer, index) => {
                                    const isLast = index === filteredCustomers.length - 1
                                    return (
                                        <tr
                                            key={customer.id}
                                            ref={isLast ? lastCustomerElementRef : null}
                                            className="hover:bg-gray-50/80 transition-colors group"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                                                        {customer.id.split('-')[1]}
                                                    </div>
                                                    <span className="font-medium text-gray-900 text-sm">{customer.id}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-mono text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">{customer.mac}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Phone size={14} className="text-gray-400" />
                                                    <span className="text-sm">{customer.mobile}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-semibold text-gray-900">{customer.totalSpent}</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <Badge variant={getStatusVariant(customer.status)}>{customer.status}</Badge>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm text-gray-500">{customer.lastSeen}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-1">
                                                    <button
                                                        onClick={() => setDeleteModal(customer)}
                                                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-all"
                                                        title="Delete Customer"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedCustomer(customer)}
                                                        className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-all"
                                                        title="View Details"
                                                    >
                                                        <MoreHorizontal size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )}

                            {/* Loading More Indicator */}
                            {isLoadingMore && (
                                <tr>
                                    <td colSpan="7" className="px-6 py-4 text-center text-gray-400 text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                                            Loading more customers...
                                        </div>
                                    </td>
                                </tr>
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
                maxWidth="max-w-xl"
                footer={
                    <>
                        <button onClick={() => setSelectedCustomer(null)} className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium text-sm">Close</button>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium text-sm hover:bg-purple-700 transition-all shadow-sm">View History</button>
                    </>
                }
            >
                {selectedCustomer && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: 'Total Spent', val: selectedCustomer.totalSpent },
                                { label: 'Sessions', val: selectedCustomer.sessions },
                                { label: 'Status', val: selectedCustomer.status, badge: true }
                            ].map((s, i) => (
                                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{s.label}</p>
                                    {s.badge ? (
                                        <Badge variant={getStatusVariant(s.val)}>{s.val}</Badge>
                                    ) : (
                                        <p className="text-lg font-semibold text-gray-900">{s.val}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="rounded-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Information</h3>
                            </div>
                            <div className="divide-y divide-gray-100 bg-white">
                                {[
                                    { label: 'MAC Address', val: selectedCustomer.mac, icon: Wifi },
                                    { label: 'Mobile Number', val: selectedCustomer.mobile, icon: Phone },
                                    { label: 'Customer ID', val: selectedCustomer.id, icon: User },
                                    { label: 'Last Activity', val: selectedCustomer.lastSeen, icon: Clock },
                                ].map((item, i) => (
                                    <div key={i} className="px-4 py-3 flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <item.icon size={16} className="text-gray-400" />
                                            <span>{item.label}</span>
                                        </div>
                                        <span className="font-medium text-gray-900">{item.val}</span>
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
                maxWidth="max-w-sm"
                footer={
                    <>
                        <button onClick={() => setDeleteModal(null)} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50 transition-all">Cancel</button>
                        <button className="flex-1 py-2.5 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-all shadow-sm">Block Customer</button>
                    </>
                }
            >
                {deleteModal && (
                    <div className="text-center space-y-4 py-4">
                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                            <AlertCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Block this customer?</h3>
                            <p className="text-sm text-gray-500 mt-2">
                                You are about to block <span className="font-semibold text-gray-900">{deleteModal.mac}</span>. This action can be undone later.
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
