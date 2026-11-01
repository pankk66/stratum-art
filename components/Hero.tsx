"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Marquee } from "./Marquee";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Анимация выезда текста без прозрачности
      gsap.from(".stratum-layer", {
        y: 100,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });
      
      gsap.from(subRef.current, {
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-32 pb-10">
      
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-stratum-ochre/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[30vw] w-[30vw] translate-x-1/2 translate-y-1/2 rounded-full bg-stratum-teal/20 blur-[100px]" />

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center pl-6 md:pl-16">
        
        <h1 ref={titleRef} className="relative flex flex-col items-start font-display text-[16vw] font-black leading-[0.8] tracking-tighter md:text-[11vw] uppercase text-stratum-paper">
          
          <span className="relative inline-block">
            <span className="absolute inset-0 translate-x-2 translate-y-2 mix-blend-screen opacity-80" style={{ color: '#2F6BFF' }}>STRATUM</span>
            <span className="absolute inset-0 -translate-x-2 -translate-y-1 mix-blend-screen opacity-80" style={{ color: '#FF2FB3' }}>STRATUM</span>
            <span className="relative z-10 text-stratum-paper">STRATUM</span>
          </span>

          <span className="relative inline-block mt-2 md:-mt-4">
            <span className="absolute inset-0 translate-x-2 translate-y-2 mix-blend-screen opacity-80" style={{ color: '#B6FF3B' }}>ART</span>
            <span className="absolute inset-0 -translate-x-2 -translate-y-1 mix-blend-screen opacity-80" style={{ color: '#C98A3B' }}>ART</span>
            <span className="relative z-10 text-stratum-paper">ART</span>
          </span>
        </h1>

        <p ref={subRef} className="mt-8 max-w-xl font-sans text-xl md:text-2xl font-medium tracking-wide text-stratum-paper uppercase z-20 relative">
          Галереи не существует.<br className="hidden md:block"/> Есть только слои.
        </p>
      </div>

      <div className="relative z-20 mt-10 w-full overflow-hidden border-y border-stratum-paper/20 bg-stratum-ink py-4">
        <Marquee />
      </div>
    </section>
  );
}