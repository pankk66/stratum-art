"use client";

import { SectionTitle } from "./SectionTitle";

export function CollabSection() {
  return (
    <section id="collab" className="relative z-10 border-t border-stratum-paper/20 bg-stratum-ink px-6 py-24 md:px-12 overflow-hidden">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[40vw] w-[40vw] translate-x-1/3 translate-y-1/3 rounded-full bg-stratum-fuchsia/10 blur-[100px]" />

      <div className="mx-auto max-w-[1600px] relative z-10">
        <SectionTitle layer="СЛОЙ 06 //" title="КОЛЛАБОРАЦИИ" className="mb-8" />
        
        <p className="font-sans text-stratum-paper/70 uppercase tracking-widest mb-12 max-w-xl">
          Ищу нейл-мастеров, декораторов и производителей одежды для создания вещей в стиле Stratum Art. Если у вас есть идея — напишите мне.
        </p>

        <form className="max-w-2xl flex flex-col gap-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input 
              type="text" 
              placeholder="ВАШЕ ИМЯ / БРЕНД" 
              className="w-full bg-transparent border-b border-stratum-paper/30 py-4 text-stratum-paper font-display uppercase tracking-wider outline-none focus:border-stratum-lime transition-colors" 
              required 
            />
            <input 
              type="text" 
              placeholder="TELEGRAM ИЛИ INSTAGRAM" 
              className="w-full bg-transparent border-b border-stratum-paper/30 py-4 text-stratum-paper font-display uppercase tracking-wider outline-none focus:border-stratum-lime transition-colors" 
              required 
            />
          </div>

          <input 
            type="email" 
            placeholder="EMAIL ДЛЯ СВЯЗИ" 
            className="w-full bg-transparent border-b border-stratum-paper/30 py-4 text-stratum-paper font-display uppercase tracking-wider outline-none focus:border-stratum-lime transition-colors" 
            required 
          />
          
          <select 
            className="w-full bg-stratum-ink border-b border-stratum-paper/30 py-4 text-stratum-paper/50 font-display uppercase tracking-wider outline-none focus:border-stratum-lime transition-colors appearance-none cursor-pointer" 
            required 
            defaultValue=""
          >
            <option value="" disabled>ЧТО ХОТИТЕ СОЗДАТЬ?</option>
            <option value="nails">Ногти / Nail Art</option>
            <option value="decor">Декор / Архитектура</option>
            <option value="clothes">Трикотаж / Шарфы</option>
            <option value="other">Другое</option>
          </select>

          <button 
            type="button" 
            className="mt-4 self-start px-10 py-5 bg-stratum-paper text-stratum-ink font-display font-black text-lg uppercase tracking-widest hover:bg-stratum-lime transition-colors relative group overflow-hidden"
          >
            <span className="relative z-10">Отправить заявку</span>
            <div className="absolute inset-0 bg-stratum-electric translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-screen" />
          </button>

        </form>
      </div>
    </section>
  );
}