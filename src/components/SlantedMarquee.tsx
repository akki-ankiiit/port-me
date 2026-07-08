export function SlantedMarquee() {
  const marqueeText = [
    "Lead UX Design",
    "Brand Design",
    "Product Design",
    "Design System",
    "Interaction Design",
  ];

  // Repeat items to fill space for continuous infinite marquee scroll
  const items = Array(8).fill(marqueeText).flat();

  return (
    <section className="relative w-full py-16 md:py-24 bg-bg-primary overflow-hidden flex flex-col justify-center select-none z-20">
      
      {/* Container to handle the rotation and overflow */}
      <div className="w-[110%] -ml-[5%] rotate-[-4deg] flex flex-col gap-4 py-8">
        
        {/* Strip 1: Orange Background, Animating Left */}
        <div className="w-full bg-[#FF5A1F] py-4 overflow-hidden flex border-y-2 border-text-primary/10 shadow-[0_10px_30px_rgba(255,90,31,0.15)]">
          <div className="flex gap-12 whitespace-nowrap animate-marquee-left uppercase font-black text-white text-xl sm:text-2xl md:text-3xl tracking-tight">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>{item}</span>
                {/* 4-point custom SVG star/flower */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-white shrink-0">
                  <path d="M12 0c.5 6 5.5 11 11.5 11.5-.5.5-5.5 5.5-11.5 11.5-.5-.5-5.5-5.5-11.5-11.5C6 11.5 11 6.5 12 0z" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Strip 2: Dark Gray/Black Background, Animating Right */}
        <div className="w-full bg-[#18181A] py-4 overflow-hidden flex border-y-2 border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex gap-12 whitespace-nowrap animate-marquee-right uppercase font-black text-[#F5F5F5] text-xl sm:text-2xl md:text-3xl tracking-tight">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className={i % 2 === 0 ? "text-accent-orange" : "text-white"}>{item}</span>
                {/* 4-point custom SVG star/flower */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-accent-orange shrink-0">
                  <path d="M12 0c.5 6 5.5 11 11.5 11.5-.5.5-5.5 5.5-11.5 11.5-.5-.5-5.5-5.5-11.5-11.5C6 11.5 11 6.5 12 0z" />
                </svg>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
