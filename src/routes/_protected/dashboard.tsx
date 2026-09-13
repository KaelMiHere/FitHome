import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0E] text-[#e4e4e7] font-sans antialiased p-8">
      <header className="flex items-center justify-between mb-10">
        <Link to="/" className="font-heading text-2xl font-black text-white">HOME<span className="text-[#FF5E1E]">FIT</span></Link>
      </header>
      <main className="max-w-3xl mx-auto space-y-6">
        <h1 className="font-heading text-3xl font-black text-white">Dashboard</h1>
        <div className="bg-[#161619] border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <h2 className="font-heading text-xl font-black text-white mb-2">Selamat Datang</h2>
          <p className="text-zinc-300 text-sm">Akses dashboard tanpa login aktif.</p>
        </div>
      </main>
    </div>
  )
}
