"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const NAV = [
  { label: "МАНИФЕСТ", href: "#manifest", id: "01" },
  { label: "РАБОТЫ", href: "#works", id: "02" },
  { label: "ВЫСТАВКА", href: "#exhibition", id: "03" },
  { label: "КОТ БОСХ", href: "#bosch", id: "04" },
  { label: "ПРОЦЕСС", href: "#process", id: "05" },
  { label: "КОНТАКТЫ", href: "#contact", id: "06" },
];

export default function Home() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;
    gsap.from(logoRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    const cursor = document.getElementById("custom-cursor");
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80; 
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono overflow-x-hidden cursor-none">
      
      <div
        id="custom-cursor"
        className="fixed w-8 h-8 pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 10l7.5-7.5a2.12 2.12 0 0 0-3-3L11 7\"/><path d=\"M11 7l6 6\"/><path d=\"M11 7L3 15\"/><path d=\"M3 15v6h6\"/><path d=\"M9 21l-6-6\"/></svg>')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <header className="fixed left-0 top-0 z-50 w-full px-6 py-4 md:px-12 md:py-6 bg-black/50 backdrop-blur-sm border-b border-gray-800/50">
        <div className="mx-auto flex w-full max-w-[1600px] items-start justify-between">
          <div ref={logoRef} className="flex flex-col leading-none">
            <a href="/" className="glitch-text font-display text-2xl font-black tracking-tighter text-white md:text-3xl" data-text="STRATUM">
              STRATUM
            </a>
            <span className="font-accent text-[10px] tracking-[0.4em] text-yellow-600 md:text-xs mt-1">
              ART / SCHICHT
            </span>
          </div>

          <nav className="hidden flex-col items-end gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="glitch-text group flex items-baseline justify-end gap-3 font-display text-lg md:text-xl font-black uppercase tracking-wider text-white transition-colors hover:text-lime-400"
                data-text={item.label}
              >
                <span className="font-accent text-xs text-yellow-600 group-hover:text-lime-400 transition-colors">
                  {item.id}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ГЛАВНЫЙ ЭКРАН */}
      <section id="manifest" className="relative min-h-screen flex flex-col justify-between p-6 md:p-20">
        
        {/* Текст прижат к верху, с отступом под шапку */}
        <div className="pt-24 md:pt-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 glitch-text" data-text="STRATUM ART">
            STRATUM ART
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-2xl leading-snug">
            Я пишу не картины. Я пишу слои.<br />
            <span className="text-gray-400">Смотри ближе — там всегда есть ещё один слой.</span>
          </p>
        </div>
        
        {/* Портрет прижат к правому нижнему углу */}
        <div className="w-full flex justify-end mt-auto">
          <div className="w-full md:w-[40%] h-[40vh] md:h-[50vh] relative overflow-hidden border border-gray-700">
             <Image src="/images/ark-portrait.jpg" alt="Ark Veresov" fill className="object-cover object-top" />
          </div>
        </div>

      </section>

      <div className="w-full overflow-hidden whitespace-nowrap bg-gray-900 py-2 text-xs md:text-sm tracking-widest text-gray-400 uppercase border-b border-gray-800">
        ARK VERESOV · STRATUM ART · ARK VERESOV · STRATUM ART · ARK VERESOV · STRATUM ART ·
      </div>

      <section id="works" className="p-6 md:p-20 border-b border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">02 РАБОТЫ</h2>
        <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 01 // Живопись</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border border-gray-700 p-4">
            <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
               <Image src="/images/painting-1.jpg" alt="Stratum Detail 1" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">ГОРОД И ПАМЯТЬ</h3>
            <p className="text-gray-500">Масло, текст, холст · 2026</p>
          </div>
          
          <div className="border border-gray-700 p-4">
            <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
               <Image src="/images/painting-2.jpg" alt="Stratum Detail 2" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">НЕОНОВЫЙ СЛОЙ</h3>
            <p className="text-gray-500">Акрил, газета · 2025</p>
          </div>

          <div className="border border-gray-700 p-4">
            <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
               <Image src="/images/painting-3.jpg" alt="Stratum Detail 3" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">СИНЯЯ БЕЗДНА</h3>
            <p className="text-gray-500">Масло, мастихин · 2024</p>
          </div>
        </div>
      </section>

      <section id="exhibition" className="p-6 md:p-20 border-b border-gray-800 bg-gray-950">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">03 ВЫСТАВКА</h2>
        <p className="text-gray-400 mb-6 uppercase tracking-wider text-sm">СЛОЙ 02 // История</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
            <p className="mb-4">Первая выставка была неудачной.</p>
            <p className="mb-4">Критик сказал: «это не живопись, это скрапбукинг».</p>
            <p>Я подумал: ок, значит, я на верном пути.</p>
          </div>
          <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden border border-gray-700">
             <Image src="/images/exhibition.jpg" alt="Exhibition" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="bosch" className="p-6 md:p-20 border-b border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">04 КОТ БОСХ</h2>
        <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 03 // Муза</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square bg-gray-800 relative overflow-hidden">
             <Image src="/images/bosch-cat.jpg" alt="Bosch the Cat" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Босх</h3>
            <p className="text-gray-400 text-lg">Не говорит, но осуждает. Назван в честь Иеронима, потому что тоже смотрит на мир и видит чудовищ. Один глаз зелёный, другой жёлтый.</p>
          </div>
        </div>
      </section>

      <section id="process" className="p-6 md:p-20 border-b border-gray-800 bg-gray-950">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">05 ПРОЦЕСС</h2>
        <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 04 // Метод</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-700 p-4">
            <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
               <Image src="/images/process-1.jpg" alt="Процесс 1" fill className="object-cover" />
            </div>
            <div className="text-center font-bold text-xl mb-2">01 ЭСКИЗ</div>
          </div>
          
          <div className="border border-gray-700 p-4">
            <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
               <Image src="/images/process-2.jpg" alt="Процесс 2" fill className="object-cover" />
            </div>
            <div className="text-center font-bold text-xl mb-2">02 ТЕКСТ</div>
          </div>

          <div className="border border-gray-700 p-4">
            <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
               <Image src="/images/process-3.jpg" alt="Процесс 3" fill className="object-cover" />
            </div>
            <div className="text-center font-bold text-xl mb-2">03 ФАКТУРА</div>
          </div>
        </div>
      </section>

      <section id="contact" className="p-6 md:p-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">06 КОНТАКТЫ</h2>
        <p className="text-gray-400 mb-6 uppercase tracking-wider text-sm">СЛОЙ 05 // Связь</p>
        <div className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
          <p className="mb-6">Открыт к коллаборациям с брендами красок, книг, музеев и одежды.</p>
          <a href="mailto:arkveresov@gmail.com" className="inline-block border border-white px-8 py-4 font-bold hover:bg-white hover:text-black transition">
            НАПИСАТЬ ПИСЬМО
          </a>
        </div>
      </section>

      <footer className="p-6 border-t border-gray-800 text-xs text-gray-500 flex justify-between">
        <div>© 2026 ARK VERESOV</div>
        <div>MINKS ↔ BERLIN</div>
      </footer>
    </main>
  );
}