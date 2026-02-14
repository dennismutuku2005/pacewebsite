"use client"

import React, { useState } from 'react'
import { Bell, Lock, Send, CheckCircle2 } from 'lucide-react'

export default function NotificationsPage() {
    const [senderId, setSenderId] = useState('PACE_ISP')
    const [message, setMessage] = useState('')
    const [isSent, setIsSent] = useState(false)

    const handleSend = () => {
        if (!message) return;
        setIsSent(true);
        setTimeout(() => {
            setIsSent(false);
            setMessage('');
        }, 3000);
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Notifications Center</h1>
                    <p className="text-sm text-gray-500 mt-1">Broadcast messages to users via SMS or Push Notifications.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Compose Section */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <Send size={20} className="text-pace-purple" />
                        Compose Broadcast
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Sender ID</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={senderId}
                                    onChange={(e) => setSenderId(e.target.value)}
                                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-semibold text-gray-800 focus:outline-none focus:border-pace-purple focus:ring-1 focus:ring-pace-purple/50"
                                />
                                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-green-600 font-medium">Verified</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">This ID will appear as the sender on recipients' phones.</p>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Target Audience</label>
                            <select className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-pace-purple focus:ring-1 focus:ring-pace-purple/50">
                                <option>All Users</option>
                                <option>Active Subscribers</option>
                                <option>Expired Accounts</option>
                                <option>Specific Group</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message Content</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 min-h-[120px] focus:outline-none focus:border-pace-purple focus:ring-1 focus:ring-pace-purple/50 resize-y"
                            ></textarea>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-gray-400">{message.length} chars</span>
                                <span className="text-xs text-gray-400">1 SMS credit per user</span>
                            </div>
                        </div>

                        <button
                            onClick={handleSend}
                            disabled={!message || isSent}
                            className="w-full py-2.5 bg-pace-purple text-white rounded-lg text-sm font-medium hover:bg-pace-purple/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSent ? (
                                <>
                                    <CheckCircle2 size={18} /> Sent Successfully!
                                </>
                            ) : (
                                <>
                                    <Bell size={18} /> Send Broadcast
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Preview / History Section */}
                <div className="space-y-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">Message Preview</h4>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 max-w-xs mx-auto">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Bell size={14} className="text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{senderId}</p>
                                    <p className="text-[10px] text-gray-400">now</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed min-h-[40px]">
                                {message || "Your message preview will appear here..."}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <div className="p-4 border-b border-gray-100">
                            <h4 className="font-semibold text-gray-900 text-sm">Recent Broadcasts</h4>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-medium text-gray-800 text-sm">System Maintenance</span>
                                        <span className="text-[10px] text-gray-400">2 days ago</span>
                                    </div>
                                    <p className="text-xs text-gray-500 line-clamp-2">
                                        Dear User, our servers will undergo scheduled maintenance this Sunday...
                                    </p>
                                    <div className="mt-2 flex items-center gap-4 text-[10px] text-gray-400">
                                        <span>To: All Users</span>
                                        <span className="text-green-600 flex items-center gap-1"><CheckCircle2 size={10} /> Delivered</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
