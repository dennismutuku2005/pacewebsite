"use client"

import React, { useState } from 'react'
import { MessageSquare, CheckCircle, Smartphone, Clock, Search, Filter, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function MessagingPage() {
    // Mock Data for Sender ID
    const senderId = {
        name: "pacewisp",
        status: "Active",
        provider: "AfricasTalking",
        balance: "KSH 4,502.50"
    }

    // Mock Data for Message Logs
    const messageLogs = [
        { id: 1, to: "0712345678", message: "Your Wi-Fi package expires in 10 mins. Renew now to stay connected via M-Pesa.", status: "Delivered", time: "Just now", cost: "0.80" },
        { id: 2, to: "0798765432", message: "Payment received. KSH 50 for 24 Hours Unlimited access. Valid until tomorrow 2PM.", status: "Delivered", time: "15 mins ago", cost: "0.80" },
        { id: 3, to: "0722334455", message: "Welcome to Pace Wi-Fi! Your OTP code is 4829.", status: "Delivered", time: "1 hour ago", cost: "0.80" },
        { id: 4, to: "0755667788", message: "Your bundle has expired. Click here to renew.", status: "Failed", time: "2 hours ago", cost: "0.00" },
        { id: 5, to: "0711223344", message: "Dear Customer, network maintenance scheduled for tonight 2AM-3AM.", status: "Delivered", time: "5 hours ago", cost: "0.80" },
    ]

    return (
        <div className="space-y-6 font-figtree animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Messaging Overview</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage SMS notifications and view delivery reports.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all shadow-sm flex items-center gap-2">
                        <MessageSquare size={16} />
                        Send Broadcast
                    </button>
                </div>
            </div>

            {/* Sender ID Status Card */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Main Sender ID</h3>
                            <div className="flex items-center gap-2 mt-0.5">
                                <h2 className="text-2xl font-bold text-gray-900">{senderId.name}</h2>
                                <Badge variant="success" className="text-[10px] px-2 py-0.5 uppercase tracking-wide">{senderId.status}</Badge>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                Service operational • No issues detected
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 border-t md:border-t-0 border-gray-50 pt-4 md:pt-0">
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Provider</p>
                            <p className="font-semibold text-gray-900">{senderId.provider}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-1">SMS Balance</p>
                            <p className="font-semibold text-gray-900">{senderId.balance}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Message Logs */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                        <Clock size={16} className="text-gray-400" />
                        Recent Message Logs
                    </h4>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search number..."
                                className="pl-9 pr-4 py-2 bg-gray-50 border-transparent focus:bg-white border focus:border-gray-200 rounded-lg text-xs outline-none transition-all w-full sm:w-48"
                            />
                        </div>
                        <button className="px-3 py-2 border border-gray-200 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50 transition-all flex items-center gap-2">
                            <Filter size={14} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
                                <th className="px-4 py-3 font-semibold">Recipient</th>
                                <th className="px-4 py-3 font-semibold">Message Content</th>
                                <th className="px-4 py-3 font-semibold">Status</th>
                                <th className="px-4 py-3 font-semibold">Cost</th>
                                <th className="px-4 py-3 font-semibold text-right">Time</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {messageLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-4 py-3 font-medium text-gray-900">
                                        <div className="flex items-center gap-2">
                                            <Smartphone size={14} className="text-gray-400" />
                                            {log.to}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 max-w-[300px] truncate" title={log.message}>
                                        {log.message}
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={log.status === 'Delivered' ? 'success' : 'destructive'} className="text-[10px] px-2 py-0.5">
                                            {log.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 font-medium">
                                        KSH {log.cost}
                                    </td>
                                    <td className="px-4 py-3 text-right text-gray-400 text-xs">
                                        {log.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
