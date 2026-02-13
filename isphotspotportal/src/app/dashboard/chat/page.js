"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Search, User, MoreHorizontal, Phone, Video } from 'lucide-react'
import { Skeleton } from '@/components/Skeleton'
import { cn } from '@/lib/utils'

export default function ChatPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [activeChat, setActiveChat] = useState(1)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    const contacts = [
        { id: 1, name: 'Client: Nairobi Region Hub', lastMsg: 'Router node CCR-01 is online.', time: '12:45 PM', unread: 2 },
        { id: 2, name: 'Mombasa Coastal Admin', lastMsg: 'Weekly report uploaded.', time: '11:20 AM', unread: 0 },
        { id: 3, name: 'Support: Technical Desk', lastMsg: 'Acknowledged ticket #482.', time: 'Yesterday', unread: 0 },
        { id: 4, name: 'System Alerts', lastMsg: 'UPS battery low in Nakuru Center.', time: '2 days ago', unread: 5 },
    ]

    const messages = [
        { id: 1, text: "Hello team, has the CCR-01 node been updated?", sender: 'other', time: '12:40 PM' },
        { id: 2, text: "Yes, we just pushed the latest firmware update.", sender: 'me', time: '12:42 PM' },
        { id: 3, text: "Perfect. It's showing as stable on our end now. Thanks!", sender: 'other', time: '12:45 PM' },
    ]

    return (
        <div className="h-[calc(100vh-140px)] flex border border-pace-border rounded-lg overflow-hidden bg-white">
            {/* Contacts Sidebar */}
            <div className="w-80 border-r border-pace-border flex flex-col bg-gray-50/50">
                <div className="p-4 border-b border-pace-border bg-white">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-dim" size={14} />
                        <input
                            type="text"
                            placeholder="Filter channels..."
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded text-[12px] focus:bg-white focus:border-pace-purple outline-none transition-all font-bold placeholder:text-admin-dim"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-auto divide-y divide-gray-100">
                    {isLoading ? (
                        [...Array(4)].map((_, i) => (
                            <div key={i} className="p-4 flex gap-4">
                                <Skeleton className="w-10 h-10 rounded-full shrink-0" />
                                <div className="space-y-2 flex-1">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-3 w-48" />
                                </div>
                            </div>
                        ))
                    ) : (
                        contacts.map((contact) => (
                            <button
                                key={contact.id}
                                onClick={() => setActiveChat(contact.id)}
                                className={cn(
                                    "w-full p-4 flex gap-4 hover:bg-white transition-colors text-left group",
                                    activeChat === contact.id ? "bg-white border-r-2 border-r-pace-purple" : ""
                                )}
                            >
                                <div className="w-10 h-10 rounded-full bg-pace-purple/5 border border-pace-purple/10 flex items-center justify-center text-pace-purple font-black text-[12px]">
                                    {contact.name.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <p className="text-[12px] font-black text-admin-value leading-none uppercase truncate">{contact.name}</p>
                                        <span className="text-[10px] text-admin-dim font-bold">{contact.time}</span>
                                    </div>
                                    <p className="text-[11px] text-admin-label font-medium truncate italic">"{contact.lastMsg}"</p>
                                </div>
                                {contact.unread > 0 && (
                                    <div className="w-5 h-5 rounded-full bg-pace-purple text-white flex items-center justify-center text-[9px] font-black">
                                        {contact.unread}
                                    </div>
                                )}
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="h-16 px-6 border-b border-pace-border flex items-center justify-between bg-white">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-pace-purple text-white flex items-center justify-center text-[10px] font-black">
                            {contacts.find(c => c.id === activeChat)?.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-[13px] font-black text-admin-value leading-none uppercase">{contacts.find(c => c.id === activeChat)?.name}</p>
                            <p className="text-[10px] text-pace-green font-black mt-1.5 uppercase tracking-tighter flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-pace-green" />
                                Operational Node
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-admin-dim hover:text-pace-purple rounded transition-all"><Phone size={18} /></button>
                        <button className="p-2 text-admin-dim hover:text-pace-purple rounded transition-all"><MoreHorizontal size={18} /></button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-6 overflow-auto bg-gray-50/30 space-y-6">
                    {messages.map((msg) => (
                        <div key={msg.id} className={cn(
                            "flex flex-col max-w-[70%]",
                            msg.sender === 'me' ? "ml-auto items-end" : "items-start"
                        )}>
                            <div className={cn(
                                "px-4 py-3 rounded-lg text-[13px] font-medium leading-relaxed shadow-none",
                                msg.sender === 'me'
                                    ? "bg-pace-purple text-white rounded-tr-none"
                                    : "bg-white border border-pace-border text-admin-value rounded-tl-none"
                            )}>
                                {msg.text}
                            </div>
                            <span className="text-[10px] text-admin-dim font-bold mt-2 uppercase tracking-tighter">{msg.time}</span>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-pace-border">
                    <form
                        onSubmit={(e) => { e.preventDefault(); setMessage(''); }}
                        className="flex gap-4"
                    >
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Push updates or message team..."
                            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded text-[12px] focus:bg-white focus:border-pace-purple outline-none transition-all font-bold"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-pace-purple text-white rounded font-black text-[11px] uppercase tracking-widest hover:bg-[#3d1a75] transition-all flex items-center gap-3 shadow-none disabled:opacity-50"
                            disabled={!message}
                        >
                            <Send size={14} />
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
