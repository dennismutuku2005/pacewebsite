"use client"

import React from 'react'
import { Code, CheckCircle2, Clock, Shield } from 'lucide-react'
import { Badge } from '@/components/Badge'

export default function ApisPage() {
    const apis = [
        { id: 1, name: 'Auth Service', endpoint: '/api/v1/auth', method: 'POST', status: 'Online', latency: '45ms', uptime: '99.99%' },
        { id: 2, name: 'Customer Data', endpoint: '/api/v1/customers', method: 'GET', status: 'Online', latency: '120ms', uptime: '99.95%' },
        { id: 3, name: 'Billing/M-Pesa', endpoint: '/api/v1/billing/mpesa', method: 'POST', status: 'Online', latency: '80ms', uptime: '99.99%' },
        { id: 4, name: 'Router Control', endpoint: '/api/v1/routers/sync', method: 'PUT', status: 'Degraded', latency: '450ms', uptime: '98.50%' },
        { id: 5, name: 'Logs Stream', endpoint: '/api/v1/logs/stream', method: 'WS', status: 'Online', latency: '10ms', uptime: '99.99%' },
    ]

    return (
        <div className="space-y-6 animate-in fade-in duration-700 max-w-[1600px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">API Status</h1>
                    <p className="text-sm text-gray-500 mt-1">Real-time monitoring of all system API endpoints.</p>
                </div>
                <Badge variant="success" className="px-3 py-1.5 text-xs flex items-center gap-2">
                    <CheckCircle2 size={14} /> All Systems Operational
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apis.map((api) => (
                    <div key={api.id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-pace-purple/20"></div>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-gray-800">{api.name}</h3>
                                <p className="text-xs font-mono text-gray-500 mt-1 bg-gray-50 px-2 py-1 rounded inline-block">{api.endpoint}</p>
                            </div>
                            <Badge variant={api.method === 'GET' ? 'info' : api.method === 'POST' ? 'success' : 'warning'}>
                                {api.method}
                            </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-4 mt-2">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Status</p>
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-2 h-2 rounded-full ${api.status === 'Online' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                    <span className="text-sm font-medium text-gray-700">{api.status}</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Latency</p>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-gray-400" />
                                    <span className={`text-sm font-medium ${parseInt(api.latency) > 300 ? 'text-orange-500' : 'text-gray-700'}`}>
                                        {api.latency}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
