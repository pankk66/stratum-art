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

    // Включаем курсор только на устройствах с мышкой (не на телефонах)
    const cursor = document.getElementById("custom-cursor");
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    
    // Проверка: если у устройства есть точный указатель (мышь), показываем курсор
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", moveCursor);
    } else {
      // На телефонах скрываем кастомный курсор
      if (cursor) cursor.style.display = "none";
      document.body.classList.remove("cursor-none");
    }

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#manifest") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 100; 
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono overflow-x-hidden md:cursor-none">
      
      {/* Кастомный курсор (скрыт на телефонах через useEffect) */}
      <div
        id="custom-cursor"
        className="hidden md:block fixed w-8 h-8 pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 10l7.5-7.5a2.12 2.12 0 0 0-3-3L11 7\"/><path d=\"M11 7l6 6\"/><path d=\"M11 7L3 15\"/><path d=\"M3 15v6h6\"/><path d=\"M9 21l-6-6\"/></svg>')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ХЕДЕР */}
      <header className="fixed left-0 top-0 z-50 w-full px-6 py-4 md:px-12 md:py-6 bg-black border-b border-gray-800">
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
      <section id="manifest" className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-32 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="w-full md:w-1/2 z-10 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 glitch-text" data-text="STRATUM ART">
            STRATUM ART
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl leading-snug">
            Я пишу не картины. Я пишу слои.<br />
            <span className="text-gray-400">Смотри ближе — там всегда есть ещё один слой.</span>
          </p>
        </div>
        <div className="w-full md:w-[45%] h-[50vh] md:h-[60vh] relative overflow-hidden border border-gray-700">
           <Image src="/images/ark-portrait.jpg" alt="Ark Veresov" fill className="object-cover object-top" />
        </div>
      </section>

      {/* БЕГУЩАЯ СТРОКА */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-gray-900 py-2 text-xs md:text-sm tracking-widest text-gray-400 uppercase border-b border-gray-800">
        ARK VERESOV · STRATUM ART · ARK VERESOV · STRATUM ART · ARK VERESOV · STRATUM ART ·
      </div>

      {/* РАБОТЫ */}
      <section id="works" className="px-8 md:px-20 lg:px-32 py-16 md:py-24 border-b border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">02 РАБОТЫ</h2>
        <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 01 // Живопись</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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

      {/* ВЫСТАВКА */}
      <section id="exhibition" className="px-8 md:px-20 lg:px-32 py-16 md:py-24 border-b border-gray-800 bg-gray-950">
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

      {/* КОТ БОСХ */}
      <section id="bosch" className="px-8 md:px-20 lg:px-32 py-16 md:py-24 border-b border-gray-800">
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

      {/* ПРОЦЕСС */}
      <section id="process" className="px-8 md:px-20 lg:px-32 py-16 md:py-24 border-b border-gray-800 bg-gray-950">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">05 ПРОЦЕСС</h2>
        <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 04 // Метод</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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

      {/* КОНТАКТЫ (в стиле Арка) */}
      <section id="contact" className="px-8 md:px-20 lg:px-32 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">06 КОНТАКТЫ</h2>
        <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 05 // Связь</p>
        
        <div className="border border-gray-800 bg-[#0a0a0a] p-8 md:p-12 max-w-3xl relative overflow-hidden">
          {/* Декоративный номер слоя */}
          <div className="absolute top-4 right-6 text-6xl md:text-8xl font-black text-gray-800/30 pointer-events-none">
            06
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Давай сделаем слой</h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Открыт к коллаборациям с брендами красок, книг, музеев и одежды. Если у тебя есть идея или вопрос — напиши.
          </p>
          
          <a 
            href="mailto:arkveresov@gmail.com" 
            className="group inline-flex items-center gap-3 border border-gray-600 px-8 py-4 font-bold text-white hover:bg-white hover:text-black transition-colors"
          >
            <span>ARKVERESOV@GMAIL.COM</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <div className="mt-12 pt-6 border-t border-gray-800 flex flex-wrap gap-6 text-sm text-gray-500 font-accent uppercase tracking-widest">
            <a href="https://instagram.com/arkveresov" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <span>📍 Минск ↔ Берлин</span>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="px-8 md:px-20 lg:px-32 py-6 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <div>© 2026 ARK VERESOV</div>
        <div>STRATUM ART · СЛОИСТОЕ ПИСЬМО</div>
      </footer>
    </main>
  );
}