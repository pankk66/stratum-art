"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const NAV = [
  { label: "Живопись", href: "#painting", id: "01" },
  { label: "Ногти", href: "#nails", id: "02" },
  { label: "Декор", href: "#decor", id: "03" },
  { label: "Трикотаж", href: "#knit", id: "04" },
  { label: "Процесс", href: "#process", id: "05" },
  { label: "Коллаб", href: "#collab", id: "06" },
];

export function Header() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;
    gsap.from(logoRef.current, {
      y: -40,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });
  }, []);

  // Функция для плавного скролла
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:pl-10 md:pr-16 md:py-8 ">
      <div className="mx-auto flex w-full max-w-[1600px] items-start justify-between">
        
        {/* Логотип */}
        <div ref={logoRef} className="flex flex-col leading-none">
          <Link
            href="/"
            className="glitch-text font-display text-2xl font-black tracking-tighter text-stratum-paper md:text-3xl"
            data-text="STRATUM"
          >
            STRATUM
          </Link>
          <span className="font-accent text-[10px] tracking-[0.4em] text-stratum-ochre md:text-xs">
            ART / SCHICHT
          </span>
        </div>

        {/* Навигация */}
        <nav className="hidden flex-col items-end gap-4 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              data-cursor="hover"
              className="glitch-text group flex items-baseline justify-end gap-3 font-display text-xl md:text-2xl font-black uppercase tracking-wider text-stratum-paper transition-colors hover:text-stratum-lime"
              data-text={item.label}
            >
              <span className="font-accent text-xs md:text-sm text-stratum-ochre group-hover:text-stratum-lime transition-colors">
                {item.id}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Мобильная навигация */}
        <button className="md:hidden font-display text-sm uppercase tracking-widest text-stratum-paper" aria-label="меню">
          [ MENU ]
        </button>
      </div>
    </header>
  );
}