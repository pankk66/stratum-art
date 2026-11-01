"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      gsap.set(dot, { x: e.clientX - 4, y: e.clientY - 4 });
    };

    const onEnterLink = () => {
      gsap.to(ring, {
        scale: 2.4,
        backgroundColor: "#EDE6D6",
        mixBlendMode: "difference",
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onLeaveLink = () => {
      gsap.to(ring, {
        scale: 1,
        backgroundColor: "rgba(237, 230, 214, 0)",
        mixBlendMode: "normal",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const onClick = () => {
      gsap.to(ring, {
        scale: 0.6,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    };

    // Плавное следование кольца (эффект мастихина)
    const ticker = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;
      gsap.set(ring, { x: ringPos.current.x - 24, y: ringPos.current.y - 24 });
    };
    gsap.ticker.add(ticker);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    const links = document.querySelectorAll("a, button, [data-cursor='hover']");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Точка-ядро мастихина */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-stratum-paper mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      {/* Кольцо-мастихин */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-12 w-12 rounded-full border border-stratum-paper/70 transition-[background-color] duration-300"
        style={{ willChange: "transform" }}
      />
    </>
  );
}