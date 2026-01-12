"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            // Simulate connecting to a rep
            setTimeout(() => {
                setIsTyping(false);
                setMessages([
                    {
                        id: 1,
                        text: "Hi! 👋 Welcome to Tappi support.",
                        sender: 'agent'
                    }
                ]);

                // Simulate follow up
                setTimeout(() => {
                    setIsTyping(true);
                    setTimeout(() => {
                        setIsTyping(false);
                        setMessages(prev => [...prev, {
                            id: 2,
                            text: "How can we help today?",
                            sender: 'agent'
                        }]);
                    }, 1000);
                }, 500);
            }, 1000);
        }
    }, [isOpen, messages.length]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        // Greatly reduced height to ~260px total container roughly, width reduced to 300px
                        className="mb-4 w-[300px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 right-0 origin-bottom-right"
                    >
                        {/* Header - Compact */}
                        <div className="bg-tappi-purple p-3 flex items-center justify-between shadow-sm relative z-10">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-tappi-purple rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-xs">Tappi Support</h3>
                                    <p className="text-purple-200 text-[10px]">Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Chat Area - Reduced Height */}
                        <div className="h-[200px] bg-gray-50 p-3 overflow-y-auto flex flex-col gap-2.5">
                            <div className="text-center">
                                <p className="text-[10px] text-gray-400 font-medium my-2">Today</p>
                            </div>

                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`max-w-[85%] p-2.5 rounded-2xl text-xs leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-tappi-purple text-white self-end rounded-br-none'
                                            : 'bg-white text-gray-800 self-start rounded-bl-none shadow-sm border border-gray-100'
                                        }`}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="bg-white p-2 rounded-2xl rounded-bl-none self-start shadow-sm border border-gray-100">
                                    <div className="flex gap-1">
                                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1 h-1 bg-gray-400 rounded-full"></motion.div>
                                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }} className="w-1 h-1 bg-gray-400 rounded-full"></motion.div>
                                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1 h-1 bg-gray-400 rounded-full"></motion.div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area - Compact */}
                        <div className="p-2.5 bg-white border-t border-gray-100">
                            <form className="flex gap-2" onSubmit={(e) => {
                                e.preventDefault();
                                // Placeholder for sending functionality
                            }}>
                                <input
                                    type="text"
                                    placeholder="Type..."
                                    className="flex-1 bg-gray-100 text-xs rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tappi-purple/50 transition-all placeholder-gray-400 text-gray-700"
                                />
                                <button type="submit" className="w-8 h-8 bg-tappi-purple text-white rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors shadow-sm">
                                    <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </button>
                            </form>
                        </div>

                        {/* Branding - Minimal */}
                        <div className="bg-gray-50 py-1 text-center border-t border-gray-100">
                            <p className="text-[9px] text-gray-400 flex items-center justify-center gap-1">
                                Powered by <span className="font-bold text-gray-500">tappi</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-tappi-purple text-white rounded-full shadow-lg shadow-purple-900/30 flex items-center justify-center hover:bg-purple-800 transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
