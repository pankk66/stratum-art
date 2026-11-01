"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SectionTitle } from "./SectionTitle";

type Work = {
  id: string;
  title: string;
  year: string;
  medium: string;
  color: string;
  img: string;
};

const WORKS: Work[] = [
  { id: "P-01", title: "СЛОЙ ПЕРВЫЙ", year: "2026", medium: "Масло, холст", color: "#C98A3B", img: "/images/painting-01.jpg" },
  { id: "P-02", title: "ОХРА В РАЗЛОМЕ", year: "2025", medium: "Акрил, картон", color: "#A6432E", img: "/images/painting-02.jpg" },
  { id: "P-03", title: "ТИШИНА №4", year: "2026", medium: "Масло, дерево", color: "#3E7C7B", img: "/images/painting-03.jpg" },
  { id: "P-04", title: "ФУКСИЯ И ПЕПЕЛ", year: "2024", medium: "Смешанная техника", color: "#FF2FB3", img: "/images/painting-04.jpg" },
  { id: "P-05", title: "ЭЛЕКТРИЧЕСКИЙ СДВИГ", year: "2026", medium: "Акрил, холст", color: "#2F6BFF", img: "/images/painting-05.jpg" },
  { id: "P-06", title: "ЛАЙМ НАД ТЕНЬЮ", year: "2025", medium: "Масло, лен", color: "#B6FF3B", img: "/images/painting-06.jpg" },
];

function Card({ work, index }: { work: Work; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    const shadow = shadowRef.current;
    if (!card || !img || !shadow) return;

    const onEnter = () => {
      gsap.to(img, { x: 12, y: -12, duration: 0.5, ease: "power3.out" });
      gsap.to(shadow, { x: -16, y: 16, opacity: 1, duration: 0.5, ease: "power3.out" });
    };

    const onLeave = () => {
      gsap.to(img, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
      gsap.to(shadow, { x: 0, y: 0, opacity: 0, duration: 0.5, ease: "power3.out" });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      data-cursor="hover"
      className="group relative aspect-[4/5] w-full painting-card"
      style={{ transform: `translateY(${index % 2 === 0 ? 0 : 32}px)` }}
    >
      <div
        ref={shadowRef}
        className="absolute inset-0 opacity-0 z-0"
        style={{ backgroundColor: work.color, boxShadow: `0 0 0 1px ${work.color}` }}
      />
      
      <div
        ref={imgRef}
        className="relative h-full w-full overflow-hidden bg-stratum-ink border border-stratum-paper/10 z-10"
        style={{ boxShadow: "0 20px 40px -20px rgba(0,0,0,0.8)" }}
      >
        <img
          src={work.img}
          alt={work.title}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 font-accent text-[10px] tracking-[0.3em] text-stratum-paper mix-blend-difference z-20">
          {work.id}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-display z-20">
          <div className="text-stratum-paper mix-blend-difference">
            <div className="text-sm font-bold uppercase tracking-wider">{work.title}</div>
            <div className="font-accent text-[10px] tracking-widest opacity-70">
              {work.medium} · {work.year}
            </div>
          </div>
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: work.color }} />
        </div>
      </div>
    </div>
  );
}

export function PaintingSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.from(".painting-card", {
              y: 100,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
              delay: 0.3,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(titleRef.current);
  }, []);

  return (
    <section id="painting" className="relative z-10 bg-stratum-ink px-6 py-24 md:px-12 md:py-40 border-t border-stratum-paper/20">
      <div ref={titleRef} className="mx-auto max-w-[1600px] mb-16 md:mb-24 relative z-20">
        <SectionTitle layer="СЛОЙ 01 //" title="ЖИВОПИСЬ" />
        <p className="max-w-md font-accent text-sm text-stratum-paper/70 uppercase tracking-widest mt-6">
          Каждый холст — это археология жеста. Мы не показываем картины. Мы позволяем вам снимать слои.
        </p>
      </div>

      <div className="mx-auto max-w-[1600px] grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((work, i) => (
          <Card key={work.id} work={work} index={i} />
        ))}
      </div>
    </section>
  );
}