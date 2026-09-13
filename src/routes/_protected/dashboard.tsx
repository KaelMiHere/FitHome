import React from 'react'
import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const [jenis, setJenis] = useState('Arm')
  const [sulit, setSulit] = useState('Mudah')
  const [chatBody, setChatBody] = useState<string[]>([])
  const [chatInput, setChatInput] = useState('')

  return (
    <div className="min-h-screen bg-[#0C0C0E] text-[#e4e4e7] font-sans antialiased">
      <header className="sticky top-0 z-40 glass-nav bg-[#0E0E12]/90 backdrop-blur-md border-b border-zinc-800/60 h-20 flex items-center justify-between px-6 lg:px-10">
        <Link to="/" className="font-heading text-2xl font-black tracking-wider text-white">HOME<span className="text-[#FF5E1E]">FIT</span></Link>
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-100 absolute left-1/2 -translate-x-1/2 items-center">
          <Link to="/" className="hover:text-[#FF5E1E] transition-colors">Beranda</Link>
          <span className="hover:text-[#FF5E1E] transition-colors text-xs font-bold uppercase tracking-widest text-zinc-100">Dashboard</span>
          <Link to="/community" className="hover:text-[#FF5E1E] transition-colors">Community</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* AI Chat */}
        <section id="ai" className="py-16"><h2 className="font-heading text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 text-center">Chatbox AI</h2>
          <div className="bg-[#161619] rounded-3xl p-6 shadow-2xl max-w-3xl mx-auto"><div className="h-64 overflow-y-auto space-y-3 mb-4">
            {chatBody.map((msg,i)=> (msg.startsWith('AI:') ? <div key={i} className="flex gap-3"><div className="w-8 h-8 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center text-xs font-bold">AI</div><div className="bg-zinc-800/80 border border-zinc-700/60 rounded-2xl p-3 text-xs text-zinc-200">{msg.replace('AI:','')}</div></div> : <div key={i} className="flex justify-end"><div className="bg-[#FF5E1E] text-white rounded-2xl p-3 text-xs max-w-md">{msg}</div></div>))}
          </div>
          <form onSubmit={e=>{e.preventDefault(); if(chatInput.trim()){setChatBody([...chatBody, chatInput, 'AI:Oke! Saya akan bantu rencanakan latihan sesuai kondisi Anda.']); setChatInput('');}}} className="flex gap-2"><input value={chatInput} onChange={e=>setChatInput(e.target.value)} className="bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 rounded-xl flex-1 focus:outline-none focus:border-[#FF5E1E]" placeholder="Tanyakan sesuatu..."></input><button type="submit" className="bg-[#FF5E1E] hover:bg-[#E04D13] text-white font-extrabold px-5 py-3 rounded-xl transition">Kirim</button></form></div>
        </section>
      </main>
    </div>
  )
}
