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
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Profile */}
        <section id="profile" className="max-w-2xl mx-auto scroll-mt-24">
          <div className="bg-[#161619] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 shadow-2xl border border-zinc-800/60 relative overflow-hidden">
            <img alt="Profile" className="w-28 h-28 rounded-full object-cover ring-4 ring-[#FF5E1E]/30 shadow-2xl relative z-10" src="https://api.dicebear.com/7.x/avataaars/svg?seed=FitUser" />
            <div className="text-center sm:text-left relative z-10">
              <h3 className="font-heading text-3xl font-black text-white mb-2">FitUser</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#FF5E1E]/10 text-[#FF5E1E] text-xs font-extrabold border border-[#FF5E1E]/20">Level Menengah</span>
                <span className="px-3 py-1 rounded-full bg-[#FF5E1E]/10 text-[#FF5E1E] text-xs font-extrabold border border-[#FF5E1E]/20">12 Hari Streak</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pilih Latihan */}
        <section id="pilih" className="py-16">
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-white mb-10 text-center">Pilih Latihan</h2>
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            <div className="bg-[#161619] p-8 rounded-3xl border border-zinc-800/60 shadow-2xl">
              <h3 className="font-heading font-black text-xl text-white mb-4">Jenis Latihan</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Arm','Back','Chest','Leg','Cardio'].map(t => (
                  <button key={t} onClick={() => setJenis(t)} className={`flex-1 px-5 py-3 rounded-2xl font-bold transition ${jenis === t ? 'bg-[#FF5E1E]/10 border-[#FF5E1E] text-[#FF5E1E] ring-2 ring-[#FF5E1E]' : 'bg-zinc-900/90 border-zinc-700/70 text-zinc-100 hover:border-[#FF5E1E] hover:text-white'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="bg-[#161619] p-8 rounded-3xl border border-zinc-800/60 shadow-xl">
              <h3 className="font-heading font-black text-xl text-white mb-4 relative z-10">Kesulitan Latihan</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Mudah','Menengah','Sulit'].map(s => (
                  <button key={s} onClick={() => setSulit(s)} className={`flex-1 px-5 py-3 rounded-2xl font-bold transition ${sulit === s ? 'bg-[#FF5E1E]/10 border-[#FF5E1E] text-[#FF5E1E] ring-2 ring-[#FF5E1E]' : 'bg-zinc-900/90 border-zinc-700/70 text-zinc-100 hover:border-[#FF5E1E] hover:text-white'}`}>{s}</button>
                ))}
              </div>
            </div>
          </div>
          <button onClick={() => alert('Memulai: '+jenis+' - '+sulit)} className="mt-10 mx-auto block bg-[#FF5E1E] hover:bg-[#E04D13] text-white font-extrabold px-8 py-4 rounded-2xl transition shadow-lg shadow-[#FF5E1E]/20">Mulai Latihan</button>
        </section>

        {/* List */}
        <section id="latihan"><h2 className="font-heading text-4xl font-black uppercase tracking-tight text-white mb-4 text-center">Daftar Latihan</h2><div className="w-24 h-1 bg-[#FF5E1E] mx-auto rounded-full mb-12"></div><div className="grid md:grid-cols-3 gap-8">
          {[
            {t:'No-Equipment Calisthenics',d:'15 MENIT',p:'Push-up, squat, plank. Cocok di rumah tanpa peralatan.'},
            {t:'Dumbbell Hypertrophy',d:'PROGRESIF',p:'Biceps curl, row, overhead press. Gaya progresif untuk pertumbuhan otot.'},
            {t:'10K Running Prep',d:'ENDURANCE',p:'Interval lari, pacing, dan endurance build-up untuk persiapan 10K.'}
          ].map(x => (
            <div key={x.t} className="bg-[#161619] rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition duration-300 border border-zinc-800/60 shadow-xl"><h3 className="font-heading text-2xl font-black text-white mb-2">{x.t}</h3><div className="inline-block px-3 py-1 rounded-full bg-[#FF5E1E]/20 text-[#FF5E1E] text-xs font-bold mb-4">{x.d}</div><p className="text-zinc-300 text-sm leading-relaxed">{x.p}</p></div>
          ))}
        </div></section>

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
