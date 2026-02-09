"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  React.useEffect(() => {
    // Check for auth or just redirect to login for demo
    router.push('/login')
  }, [router])

  return (
    <div className="min-h-screen bg-pace-purple flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>
  )
}
