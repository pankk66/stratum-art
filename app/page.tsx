"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV = [
  { label: "МАНИФЕСТ", href: "#manifest", id: "01" },
  { label: "РАБОТЫ", href: "#works", id: "02" },
  { label: "ВЫСТАВКА", href: "#exhibition", id: "03" },
  { label: "КОТ БОСХ", href: "#bosch", id: "04" },
  { label: "ПРОЦЕСС", href: "#process", id: "05" },
  { label: "КОНТАКТЫ", href: "#contact", id: "06" },
];

const GALLERY = [
  { id: 1, src: "/images/art-1.jpg", title: "Слой под кожей", desc: "Портрет. 2026" },
  { id: 2, src: "/images/art-2.jpg", title: "Город, который не проснулся", desc: "Пейзаж. 2025" },
  { id: 3, src: "/images/art-3.jpg", title: "Утро. Городская елка", desc: "Зимний пейзаж. 2025" },
  { id: 4, src: "/images/art-4.jpg", title: "Красная планета", desc: "Фантастика. 2026" },
  { id: 5, src: "/images/art-5.jpg", title: "Одинокий маяк", desc: "Марина. 2026" },
  { id: 6, src: "/images/art-6.jpg", title: "Мир. Труд. Май", desc: "Символизм. 2025" },
  { id: 7, src: "/images/art-7.jpg", title: "Слой №7", desc: "Абстракция" },
  { id: 8, src: "/images/art-8.jpg", title: "Слой №8", desc: "Абстракция" },
  { id: 9, src: "/images/art-9.jpg", title: "Слой №9", desc: "Абстракция" },
  { id: 10, src: "/images/art-10.jpg", title: "Слой №10", desc: "Абстракция" },
  { id: 11, src: "/images/art-11.jpg", title: "Слой №11", desc: "Абстракция" },
  { id: 12, src: "/images/art-12.jpg", title: "Слой №12", desc: "Абстракция" },
  { id: 13, src: "/images/art-13.jpg", title: "Слой №13", desc: "Абстракция" },
  { id: 14, src: "/images/art-14.jpg", title: "Слой №14", desc: "Абстракция" },
  { id: 15, src: "/images/art-15.jpg", title: "Слой №15", desc: "Абстракция" },
  { id: 16, src: "/images/art-16.jpg", title: "Слой №16", desc: "Абстракция" },
  { id: 17, src: "/images/art-17.jpg", title: "Слой №17", desc: "Абстракция" },
  { id: 18, src: "/images/art-18.jpg", title: "Слой №18", desc: "Абстракция" },
  { id: 19, src: "/images/art-19.jpg", title: "Слой №19", desc: "Абстракция" },
  { id: 20, src: "/images/art-20.jpg", title: "Слой №20", desc: "Абстракция" },
];

export default function Home() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [selectedArt, setSelectedArt] = useState<number | null>(null);

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
    
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", moveCursor);
    } else {
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
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono overflow-x-hidden md:cursor-none">
      
      {/* Кастомный курсор */}
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
      <header className="fixed left-0 top-0 z-40 w-full px-6 py-4 md:px-12 md:py-6 bg-black/90 backdrop-blur-sm border-b border-gray-800">
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

      <div className="pt-32 md:pt-40">
        
        {/* ГЛАВНЫЙ ЭКРАН */}
        <section id="manifest" className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 pt-10 pb-20">
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
             <Image src="/images/ark-portrait.jpg" alt="Ark Veresov" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-top" />
          </div>
        </section>

        {/* БЕГУЩАЯ СТРОКА */}
        <div className="w-full overflow-hidden whitespace-nowrap bg-gray-900 py-2 text-xs md:text-sm tracking-widest text-gray-400 uppercase border-y border-gray-800">
          ARK VERESOV · STRATUM ART · ARK VERESOV · STRATUM ART · ARK VERESOV · STRATUM ART ·
        </div>

        {/* НОВЫЙ МАНИФЕСТ */}
        <section className="px-6 md:px-20 lg:px-32 py-20 md:py-32 border-b border-gray-800 bg-[#080808]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Манифест: Слой среза</h2>
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
              <p>Раньше я вдавливал в краску историю — газеты, документы, чужие голоса. Теперь я ее срезаю.</p>
              <p><strong>Сграффито</strong> — это не просто техника. Это хирургия. Я наношу десятки слоев краски, а затем мастихином вскрываю их, обнажая то, что скрыто под верхним слоем.</p>
              <p>На поверхности остаются рельефные борозды и острые срезы. Это не пейзажи и не портреты. Это геологические разрезы времени.</p>
              <p className="text-white font-bold">Смотрите на срезы. Там всегда есть еще один слой.</p>
            </div>
          </div>
        </section>

        {/* ГАЛЕРЕЯ (СЕТКА 5x4, ВЫЕЗД ПРИ КЛИКЕ) */}
        <section id="works" className="px-6 md:px-20 lg:px-32 py-16 md:py-24 border-b border-gray-800">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">02 РАБОТЫ</h2>
          <p className="text-gray-400 mb-12 uppercase tracking-wider text-sm">СЛОЙ 01 // Живопись</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 relative">
            {GALLERY.map((art, index) => {
              const isSelected = selectedArt === index;
              
              return (
                <div
                  key={art.id}
                  onClick={() => setSelectedArt(isSelected ? null : index)}
                  className={`relative cursor-pointer transition-all duration-500 ease-in-out border bg-black
                    ${isSelected 
                      ? 'z-50 scale-125 md:scale-150 shadow-[0_0_50px_rgba(255,255,255,0.2)] border-white grayscale-0' 
                      : 'z-10 border-gray-800 grayscale hover:grayscale-0 hover:scale-105'
                    }
                  `}
                >
                  <div className="aspect-[3/4] relative overflow-hidden w-full h-full">
                    <Image 
                      src={art.src} 
                      alt={art.title} 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw" 
                      className="object-cover" 
                    />
                  </div>
                  
                  {/* Подпись (видна только на выбранной) */}
                  <div className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-sm md:text-lg font-bold text-white leading-tight">{art.title}</h3>
                    <p className="text-gray-400 text-xs">{art.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Нажми на картину, чтобы она выехала вперед. Нажми еще раз, чтобы вернуть.</p>
          </div>
        </section>

        {/* ВЫСТАВКА (Восстановлено) */}
        <section id="exhibition" className="px-6 md:px-20 lg:px-32 py-20 md:py-32 border-b border-gray-800 bg-gray-950">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">03 ВЫСТАВКА</h2>
          <p className="text-gray-400 mb-6 uppercase tracking-wider text-sm">СЛОЙ 02 // История</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              <p className="mb-4">Первая выставка была неудачной.</p>
              <p className="mb-4">Критик сказал: «это не живопись, это скрапбукинг».</p>
              <p>Я подумал: ок, значит, я на верном пути.</p>
            </div>
            <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden border border-gray-700">
               <Image src="/images/exhibition.jpg" alt="Exhibition" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* КОТ БОСХ (Восстановлено) */}
        <section id="bosch" className="px-6 md:px-20 lg:px-32 py-20 md:py-32 border-b border-gray-800">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">04 КОТ БОСХ</h2>
          <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 03 // Муза</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square bg-gray-800 relative overflow-hidden">
               <Image src="/images/bosch-cat.jpg" alt="Bosch the Cat" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Босх</h3>
              <p className="text-gray-400 text-lg">Не говорит, но осуждает. Назван в честь Иеронима, потому что тоже смотрит на мир и видит чудовищ. Один глаз зелёный, другой жёлтый.</p>
            </div>
          </div>
        </section>

        {/* ПРОЦЕСС (Восстановлено) */}
        <section id="process" className="px-6 md:px-20 lg:px-32 py-20 md:py-32 border-b border-gray-800 bg-gray-950">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">05 ПРОЦЕСС</h2>
          <p className="text-gray-400 mb-10 uppercase tracking-wider text-sm">СЛОЙ 04 // Метод</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-700 p-4">
              <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
                 <Image src="/images/process-1.jpg" alt="Процесс 1" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="text-center font-bold text-xl mb-2">01 ЭСКИЗ</div>
            </div>
            <div className="border border-gray-700 p-4">
              <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
                 <Image src="/images/process-2.jpg" alt="Процесс 2" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="text-center font-bold text-xl mb-2">02 ТЕКСТ</div>
            </div>
            <div className="border border-gray-700 p-4">
              <div className="aspect-square bg-gray-800 mb-4 relative overflow-hidden">
                 <Image src="/images/process-3.jpg" alt="Процесс 3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="text-center font-bold text-xl mb-2">03 ФАКТУРА</div>
            </div>
          </div>
        </section>

        {/* КОНТАКТЫ (Восстановлено) */}
        <section id="contact" className="px-6 md:px-20 lg:px-32 py-20 md:py-32 bg-[#050505]">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">06 КОНТАКТЫ</h2>
            <p className="text-gray-400 mb-12 uppercase tracking-wider text-sm">СЛОЙ 05 // Связь</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Давай сделаем слой</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Открыт к коллаборациям с брендами красок, книг, музеев и одежды. 
                  Если у тебя есть идея, вопрос или ты просто хочешь купить картину — напиши.
                </p>
                <a href="mailto:arkveresov@gmail.com" className="inline-flex items-center gap-3 border border-gray-600 px-8 py-4 font-bold text-white hover:bg-white hover:text-black transition-colors">
                  <span>ARKVERESOV@GMAIL.COM</span>
                </a>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4">Где меня найти</h4>
                  <div className="flex flex-col gap-4">
                    <a href="https://instagram.com/arkveresov" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-gray-800 pb-4 hover:border-white transition-colors">
                      <span className="text-lg font-bold group-hover:text-lime-400 transition-colors">Instagram</span>
                      <span className="text-gray-500 group-hover:text-white transition-colors">↗</span>
                    </a>
                    <a href="https://t.me/arkveresov" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-gray-800 pb-4 hover:border-white transition-colors">
                      <span className="text-lg font-bold group-hover:text-lime-400 transition-colors">Telegram (Закулисье)</span>
                      <span className="text-gray-500 group-hover:text-white transition-colors">↗</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2">Локация</h4>
                  <p className="text-lg text-gray-300">Минск ↔ Берлин</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ФУТЕР (Восстановлено) */}
        <footer className="px-6 md:px-20 lg:px-32 py-12 bg-black text-sm text-gray-500 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-white font-bold text-xl font-display tracking-widest">STRATUM</div>
            <div>© 2026 ARK VERESOV. Все слои защищены.</div>
          </div>
          <div className="text-xs text-gray-600 max-w-[250px]">
            Персонаж вымышлен. Изображения созданы с помощью AI. Смотрите ближе.
          </div>
        </footer>
      </div>
    </main>
  );
}