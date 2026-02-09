"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ApplicationsPage() {
    const applications = [
        { id: 'APP-1024', company: 'Global Logistics Ltd', person: 'Samson Kiruba', zone: 'Nairobi', license: 'Enterprise SaaS', status: 'In Review', age: '2h ago' },
        { id: 'APP-1025', company: 'Nyali Heights Hotel', person: 'Alice Atieno', zone: 'Mombasa', license: 'Standard Hotspot', status: 'Signed', age: 'Yesterday' },
        { id: 'APP-1026', company: 'Rift Valley Academy', person: 'Paul Mwangi', zone: 'Nakuru', license: 'Educator Pack', status: 'Pending', age: 'Yesterday' },
        { id: 'APP-1027', company: 'Western Fiber Net', person: 'Kelvin Omondi', zone: 'Kisumu', license: 'SaaS Core', status: 'In Review', age: '2 days ago' },
    ]

    return (
        <div className="space-y-6 font-figtree">

            {/* Header */}
            <div className="border-b border-gray-100 pb-4">
                <h1 className="text-[20px] font-black text-gray-900 leading-none">New Software Inquiries</h1>
                <p className="text-[12px] text-gray-400 mt-2 font-medium">Processing inbound ISP business applications and deployment requests.</p>
            </div>

            {/* Main Table - The Excel look */}
            <div className="border border-gray-200 rounded overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 font-bold text-gray-400 uppercase tracking-widest text-[10px]">
                                <th className="px-5 py-3 border-r border-gray-100">Ticket ID</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Submission</th>
                                <th className="px-5 py-3 border-r border-gray-100">Company Name / Contact</th>
                                <th className="px-5 py-3 border-r border-gray-100">Requested Deployment</th>
                                <th className="px-5 py-3 border-r border-gray-100 text-center">Status Case</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-5 py-4 font-mono text-gray-300 group-hover:text-gray-900 border-r border-gray-50">{app.id}</td>
                                    <td className="px-5 py-4 font-bold text-center border-r border-gray-50 text-gray-400">{app.age}</td>
                                    <td className="px-5 py-4 border-r border-gray-50 max-w-xs overflow-hidden text-ellipsis">
                                        <p className="font-bold text-gray-900">{app.company}</p>
                                        <p className="text-[10px] text-gray-400 font-medium leading-none mt-1">{app.person} • {app.zone}</p>
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 font-bold text-gray-600">
                                        {app.license}
                                    </td>
                                    <td className="px-5 py-4 border-r border-gray-50 text-center">
                                        <span className={cn(
                                            "font-black uppercase text-[10px] tracking-widest",
                                            app.status === 'Signed' ? "text-pace-green" :
                                                app.status === 'In Review' ? "text-blue-500" :
                                                    "text-orange-500"
                                        )}>{app.status}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="px-3 py-1.5 border border-gray-200 rounded text-[10px] font-black uppercase bg-white hover:border-gray-400 transition-all">Review</button>
                                            <button className="px-3 py-1.5 border border-red-100 text-red-400 rounded text-[10px] font-black uppercase bg-red-50/20 hover:bg-red-50 transition-all">Ignore</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-gray-50/50 border-t border-gray-200">
                    <button className="text-[10px] font-black text-gray-300 uppercase tracking-widest hover:text-gray-900 transition-colors">Archive View &rarr;</button>
                </div>
            </div>

        </div>
    )
}
