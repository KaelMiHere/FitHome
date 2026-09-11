import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [jenis, setJenis] = useState('Calisthenics');
  const [sulit, setSulit] = useState('Pemula');
  const [latihan, setLatihan] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/getExercises')
      .then((r) => r.json())
      .then((d) => setLatihan(d.latihan || []))
      .catch(() => {});
  }, []);

  const jenisList = ['Calisthenics', 'Dumbbell', 'Running', 'Core'];
  const sulitList = ['Pemula', 'Menengah', 'Maju'];

  return (
    <main className="bg-[#0C0C0E] text-[#e4e4e7] font-sans antialiased max-w-7xl mx-auto px-6 py-16 space-y-24">
      <h1 className="font-[Montserrat] text-center text-5xl font-black uppercase tracking-tighter text-white mb-2">
        Dashboard
      </h1>
      <div className="w-24 h-1 bg-[#FF5E1E] mx-auto rounded-full mb-12" />

      {/* Pilih Latihan */}
      <section id="pilih" className="py-16">
        <h2 className="font-[Montserrat] text-4xl font-black uppercase tracking-tight text-white mb-6">
          Pilih Latihan
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {/* Jenis */}
          <div className="bg-[#161619] border border-[#28282E] rounded-2xl p-6 shadow-lg">
            <h3 className="font-[Montserrat] font-black text-white mb-3">Jenis Latihan</h3>
            <div className="flex flex-wrap gap-3 w-full justify-center">
              {jenisList.map((t) => (
                <button
                  key={t}
                  onClick={() => setJenis(t)}
                  className={`bg-zinc-900 border hover:border-brand text-white text-sm font-bold px-6 py-4 rounded-xl flex-1 min-w-[140px] ${jenis === t ? 'border-brand' : ''}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-2">Sumber: src/lib/exercise.functions.ts / db</p>
          </div>

          {/* Kesulitan */}
          <div className="bg-[#161619] border border-[#28282E] rounded-2xl p-6 shadow-lg">
            <h3 className="font-[Montserrat] font-black text-white mb-3">Kesulitan Latihan</h3>
            <div className="flex flex-wrap gap-3 w-full justify-center">
              {sulitList.map((t) => (
                <button
                  key={t}
                  onClick={() => setSulit(t)}
                  className={`bg-zinc-900 border hover:border-brand text-white text-sm font-bold px-6 py-4 rounded-xl flex-1 min-w-[140px] ${sulit === t ? 'border-brand' : ''}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-2">Sumber: drizzle/schema folder</p>
          </div>
        </div>

        <button
          onClick={() => alert(`Memulai: ${jenis} - ${sulit}`)}
          className="mt-6 mx-auto block bg-[#FF5E1E] hover:bg-[#E04D13] text-white font-extrabold px-6 py-3 rounded-xl transition"
        >
          Mulai Latihan
        </button>
      </section>

      {/* Daftar Latihan */}
      <section id="latihan">
        <h2 className="font-[Montserrat] text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-10">
          Daftar Latihan {latihan.length > 0 ? `(${latihan.length} dari API)` : ''}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(latihan.length
            ? latihan
            : [
                { nama: 'No-Equipment Calisthenics', durasi: '15 menit' },
                { nama: 'Dumbbell Hypertrophy', durasi: '30 menit' },
                { nama: '10K Running Prep', durasi: '45 menit' },
              ]
          ).map((x: any, i: number) => (
            <div
              key={i}
              className="bg-[#161619] border border-[#28282E] rounded-2xl p-8 shadow-lg hover:border-brand transition"
            >
              <h3 className="font-[Montserrat] text-xl font-black text-white mb-3">{x.nama || x.t || 'Latihan'}</h3>
              <p className="text-sm text-zinc-400">{x.durasi || 'Data latihan.'}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GPS */}
      <section id="gps" className="border-y border-zinc-800/60 py-16">
        <h2 className="font-[Montserrat] text-4xl font-black uppercase tracking-tight text-white mb-10">GPS Tracker & Lokasi</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#161619] border border-[#28282E] rounded-2xl p-8 shadow-lg">
            <h4 className="font-[Montserrat] text-lg font-black text-white mb-3">Track Lari Outdoor</h4>
            <p className="text-sm text-zinc-400">Gunakan GPS untuk analisis rute, kecepatan, dan kalori terbakar secara real-time.</p>
          </div>
          <div className="bg-[#161619] border border-[#28282E] rounded-2xl p-8 shadow-lg">
            <h4 className="font-[Montserrat] text-lg font-black text-white mb-3">Gym Terdekat</h4>
            <p className="text-sm text-zinc-400">Temukan peralatan gym dan stadion terdekat berdasarkan lokasi Anda saat ini.</p>
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai">
        <h2 className="font-[Montserrat] text-4xl font-black uppercase tracking-tight text-white mb-6 text-center">Chatbox AI</h2>
        <div className="bg-[#161619] border border-[#28282E] rounded-3xl p-6 shadow-2xl max-w-3xl mx-auto">
          <div className="h-64 overflow-y-auto space-y-3 mb-4" id="chat-body">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center text-xs font-bold">AI</div>
              <div className="bg-zinc-800/80 border border-zinc-700/60 rounded-2xl p-3 text-xs text-zinc-200">Halo! Saya FitAI Coach. Tanyakan latihan, nutrisi, atau streak Anda!</div>
            </div>
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const b = document.getElementById('chat-body') as HTMLElement;
              const i = (e.currentTarget.elements.namedItem('chatIn') as HTMLInputElement);
              if (i.value.trim()) {
                const u = document.createElement('div');
                u.className = 'flex justify-end';
                u.innerHTML = `<div class="bg-brand text-white rounded-2xl p-3 text-xs max-w-md">${i.value}</div>`;
                b.appendChild(u);
                i.value = '';
                setTimeout(() => {
                  const bot = document.createElement('div');
                  bot.className = 'flex gap-3';
                  bot.innerHTML = `<div class="w-8 h-8 rounded-full bg-brand/20 text-brand flex items-center justify-center text-xs font-bold">AI</div><div class="bg-zinc-800/80 border border-zinc-700/60 rounded-2xl p-3 text-xs text-zinc-200">Oke! Saya akan bantu rencanakan latihan sesuai kondisi Anda.</div>`;
                  b.appendChild(bot);
                  b.scrollTop = b.scrollHeight;
                }, 700);
              }
            }}
          >
            <input
              name="chatIn"
              className="bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 rounded-xl flex-1 focus:outline-none focus:border-brand"
              placeholder="Tanyakan sesuatu..."
              type="text"
            />
            <button className="bg-[#FF5E1E] hover:bg-[#E04D13] text-white font-extrabold px-5 py-3 rounded-xl transition" type="submit">Kirim</button>
          </form>
        </div>
      </section>
    </main>
  );
}
