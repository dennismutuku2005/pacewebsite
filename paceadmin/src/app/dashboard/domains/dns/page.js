"use client"

import React from 'react'
import { Globe, Server, Shield } from 'lucide-react'

export default function DNSManagementPage() {
    return (
        <div className="space-y-6 font-figtree">
            <div className="border-b border-gray-100 pb-4">
                <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">DNS Management</h1>
                <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Configure name servers and DNS records for your managed domains.</p>
            </div>

            <div className="flex flex-col items-center justify-center py-20 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                <Server size={48} className="text-gray-300 mb-4" />
                <h3 className="text-[16px] font-bold text-admin-value mb-2">DNS Records Configuration</h3>
                <p className="text-[12px] text-admin-label max-w-sm text-center">Select a domain from the sidebar or main list to start managing its DNS records and name servers.</p>
            </div>
        </div>
    )
}
