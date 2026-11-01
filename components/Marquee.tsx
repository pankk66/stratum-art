"use client";

export function Marquee() {
  return (
    <div className="flex w-max animate-marquee whitespace-nowrap">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="mx-4 font-display text-xl md:text-2xl font-bold uppercase tracking-widest text-stratum-paper">
          GALERIE STRATUM · SCHICHTSTRASSE 7 · SCHICHTEN DER ZEIT · 
        </span>
      ))}
    </div>
  );
}