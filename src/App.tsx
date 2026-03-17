import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f9f4] text-[#333333] font-sans flex flex-col">
      <header className="bg-[#4CAF50] text-white py-8 px-5 text-center">
        <h1 className="text-3xl font-bold mb-2">Dobrodošli na naši kmetiji</h1>
        <p className="text-lg">Sveže novice, zgodbe in pridelki iz našega dvorišča</p>
      </header>

      <main className="flex-grow w-4/5 max-w-[800px] mx-auto my-5">
        <article className="bg-white mb-5 p-5 rounded-lg shadow-md border-l-[5px] border-[#8BC34A]">
          <h2 className="mt-0 text-[#2E7D32] text-2xl font-semibold mb-2">Spomladanska setev se je začela!</h2>
          <p className="text-sm text-gray-500 italic mb-3">Objavljeno: 17. marec 2026</p>
          <p>Danes smo izkoristili prečudovito vreme in začeli s pripravo njiv za letošnjo sezono. Traktorji brnijo in zemlja je pripravljena na nova semena. Komaj čakamo prve poganjke!</p>
        </article>

        <article className="bg-white mb-5 p-5 rounded-lg shadow-md border-l-[5px] border-[#8BC34A]">
          <h2 className="mt-0 text-[#2E7D32] text-2xl font-semibold mb-2">Naši novi telički</h2>
          <p className="text-sm text-gray-500 italic mb-3">Objavljeno: 10. marec 2026</p>
          <p>Z veseljem sporočamo, da se je naša čreda povečala. Prejšnji teden smo dobili dva zdrava telička. Če nas obiščete, ju lahko pozdravite v hlevu.</p>
        </article>
      </main>

      <footer className="text-center p-4 bg-[#333333] text-white mt-10">
        <p>&copy; 2026 Naša Kmetija. Vse pravice pridržane.</p>
      </footer>
    </div>
  );
}
