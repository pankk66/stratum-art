export function SectionTitle({ layer, title, className = "" }: { layer: string; title: string; className?: string }) {
  return (
    <div className={`relative flex flex-col items-start mb-12 ${className}`}>
      {/* Огромный заголовок со слоями */}
      <h2 className="relative inline-block font-display text-[12vw] font-black leading-[0.85] tracking-tighter md:text-[8vw] uppercase text-stratum-paper">
        {/* Синий слой */}
        <span className="absolute inset-0 translate-x-2 translate-y-2 mix-blend-screen opacity-80 pointer-events-none" style={{ color: '#2F6BFF' }} aria-hidden>
          {title}
        </span>
        {/* Розовый слой */}
        <span className="absolute inset-0 -translate-x-2 -translate-y-1 mix-blend-screen opacity-80 pointer-events-none" style={{ color: '#FF2FB3' }} aria-hidden>
          {title}
        </span>
        {/* Основной белый текст */}
        <span className="relative z-10 text-stratum-paper">{title}</span>
      </h2>
      
      {/* Подпись "СЛОЙ 01 //" */}
      <span className="font-accent text-xl md:text-3xl tracking-[0.2em] text-stratum-ochre mt-6 z-10">
        {layer}
      </span>
    </div>
  );
}