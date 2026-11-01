import { CollabSection } from "@/components/CollabSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PaintingSection } from "@/components/PaintingSection";
import { SectionTitle } from "@/components/SectionTitle";

export default function Home() {
  return (
    <main className="relative bg-stratum-ink text-stratum-paper selection:bg-stratum-lime selection:text-stratum-ink">
      <Header />
      <Hero />
      <PaintingSection />

      {/* СЕКЦИЯ 2: НОГТИ */}
      <section id="nails" className="relative z-10 border-t border-stratum-paper/20 bg-stratum-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionTitle layer="СЛОЙ 02 //" title="НОГТИ" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="group relative aspect-[4/5] overflow-hidden bg-stratum-paper/5 border border-stratum-paper/20 cursor-crosshair">
               <img src="/images/nails-sketch.jpg" alt="Эскиз" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 z-0" />
               <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                  <span className="text-stratum-paper uppercase font-display text-2xl tracking-widest mb-2 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-md">Эскиз на бумаге</span>
               </div>
               <div className="absolute inset-0 bg-stratum-teal opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-screen z-20 pointer-events-none" />
            </div>

            <div className="group relative aspect-[4/5] overflow-hidden bg-stratum-paper/5 border border-stratum-paper/20 cursor-crosshair">
               <img src="/images/nails-mockup.jpg" alt="Мокап" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 z-0" />
               <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                  <span className="text-stratum-paper uppercase font-display text-2xl tracking-widest mb-2 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-md">Мокап на ногте</span>
               </div>
               <div className="absolute inset-0 bg-stratum-fuchsia opacity-0 group-hover:opacity-60 transition-opacity duration-500 mix-blend-screen z-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 3: ДЕКОР */}
      <section id="decor" className="relative z-10 border-t border-stratum-paper/20 bg-stratum-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionTitle layer="СЛОЙ 03 //" title="ДЕКОР" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "ПАННО «АРКА»", img: "/images/decor-01.jpg" },
              { name: "ПОДСВЕЧНИК", img: "/images/decor-02.jpg" },
              { name: "ВАЗА «СЛОЙ»", img: "/images/decor-03.jpg" }
            ].map((item, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden bg-stratum-paper/5 border border-stratum-paper/20 cursor-crosshair flex flex-col items-center justify-center">
                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 z-0" />
                <span className="text-stratum-paper uppercase font-display text-xl tracking-widest z-10 transition-opacity group-hover:opacity-0 px-4 text-center drop-shadow-md">{item.name}</span>
                <div className="absolute inset-0 bg-stratum-electric opacity-0 group-hover:opacity-50 transition-opacity duration-500 mix-blend-screen z-20 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 4: ТРИКОТАЖ */}
      <section id="knit" className="relative z-10 border-t border-stratum-paper/20 bg-stratum-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionTitle layer="СЛОЙ 04 //" title="ТРИКОТАЖ" />
          <div className="w-full h-[50vh] bg-stratum-paper/5 border border-stratum-paper/20 relative group overflow-hidden cursor-crosshair">
             <img src="/images/knit-01.jpg" alt="Трикотаж" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 z-0" />
             <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                <span className="text-stratum-paper uppercase font-display text-3xl md:text-5xl tracking-widest mb-4 group-hover:opacity-0 transition-opacity duration-300 text-center drop-shadow-lg">Бесконечная лента ткани</span>
                <span className="text-stratum-paper/80 font-accent text-lg uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300 drop-shadow-md">Шарфы / Свитеры / Принты</span>
             </div>
             <div className="absolute inset-0 bg-stratum-ochre opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-screen z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 5: ПРОЦЕСС */}
      <section id="process" className="relative z-10 border-t border-stratum-paper/20 bg-stratum-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionTitle layer="СЛОЙ 05 //" title="ПРОЦЕСС" />
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            {[
              { step: "ЭСКИЗ", img: "/images/process-01.jpg" },
              { step: "ЦВЕТ", img: "/images/process-02.jpg" },
              { step: "ФАКТУРА", img: "/images/process-03.jpg" },
              { step: "ВЕЩЬ", img: "/images/process-04.jpg" }
            ].map((item, i) => (
              <div key={i} className="flex-1 aspect-[4/3] bg-stratum-paper/5 border border-stratum-paper/20 relative group overflow-hidden cursor-crosshair">
                <img src={item.img} alt={item.step} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 z-0" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
                  <span className="font-accent text-stratum-paper text-xl mb-1 drop-shadow-md transition-opacity group-hover:opacity-0">0{i + 1}</span>
                  <span className="font-display text-2xl text-stratum-paper uppercase drop-shadow-md transition-opacity group-hover:opacity-0">{item.step}</span>
                </div>
                <div className="absolute inset-0 bg-stratum-lime opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-screen z-20 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CollabSection />

      {/* ФУТЕР */}
      <footer className="relative z-10 border-t border-stratum-paper/20 bg-stratum-ink px-6 py-12 md:px-12">
        <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="font-display text-4xl font-black uppercase text-stratum-paper mb-6 md:mb-0">
            STRATUM ART
          </div>
          <p className="font-sans text-sm text-stratum-paper/50 uppercase tracking-widest">
            Галереи не существует. Есть только слои.
          </p>
        </div>
      </footer>
    </main>
  );
}