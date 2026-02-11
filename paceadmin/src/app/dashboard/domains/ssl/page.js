"use client"

import React from 'react'
import { ShieldCheck, Lock } from 'lucide-react'

export default function SSLStatusPage() {
    return (
        <div className="space-y-6 font-figtree">
            <div className="border-b border-gray-100 pb-4">
                <h1 className="text-[22px] font-black text-admin-value leading-tight tracking-tight text-pace-purple">SSL Certificates</h1>
                <p className="text-[12px] text-admin-label mt-1 font-medium tracking-tight">Monitor certificate expiry, installation status, and auto-renewal logs.</p>
            </div>

            <div className="flex flex-col items-center justify-center py-20 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                <Lock size={48} className="text-gray-300 mb-4" />
                <h3 className="text-[16px] font-bold text-admin-value mb-2">SSL Security Center</h3>
                <p className="text-[12px] text-admin-label max-w-sm text-center">Your domains are being monitored for security. Detailed SSL logs and management will appear here.</p>
            </div>
        </div>
    )
}
