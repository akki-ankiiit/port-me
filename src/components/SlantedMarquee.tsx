export function SlantedMarquee() {
  const orangeItemsText = ["Logo Design", "Website Design", "Brand Design"];
  const blackItemsText = ["Senior Designer", "10 Years of Experience", "Over 100 Customers"];

  // Repeat items to fill space for continuous infinite marquee scroll
  const orangeItems = Array(12).fill(orangeItemsText).flat();
  const blackItems = Array(12).fill(blackItemsText).flat();

  return (
    <section className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] bg-bg-primary overflow-hidden flex items-center justify-center select-none z-20 py-8">
      {/* Wrapper for absolute positioning and rotations */}
      <div className="absolute w-[130%] -left-[15%] h-full flex items-center justify-center">
        
        {/* Strip 1: Dark Gray/Black Background, Animating Right, Rotated -3deg (Underneath) */}
        <div 
          className="absolute w-full bg-[#18181A] py-3 md:py-4.5 overflow-hidden flex border-y border-white/5 shadow-[0_8px_25px_rgba(0,0,0,0.3)] origin-center"
          style={{ transform: "rotate(-3.5deg)" }}
        >
          <div className="flex gap-16 whitespace-nowrap animate-marquee-right uppercase font-black text-[#F5F5F5] text-lg sm:text-xl md:text-2xl tracking-tight">
            {blackItems.map((item, i) => (
              <div key={i} className="flex items-center gap-16">
                <span>{item}</span>
                <span className="text-white opacity-80">✖</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strip 2: Orange Background, Animating Left, Rotated 3deg (On Top) */}
        <div 
          className="absolute w-full bg-[#FF5A1F] py-3 md:py-4.5 overflow-hidden flex border-y border-text-primary/10 shadow-[0_10px_30px_rgba(255,90,31,0.2)] origin-center z-10"
          style={{ transform: "rotate(3deg)" }}
        >
          <div className="flex gap-16 whitespace-nowrap animate-marquee-left uppercase font-black text-white text-lg sm:text-xl md:text-2xl tracking-tight">
            {orangeItems.map((item, i) => (
              <div key={i} className="flex items-center gap-16">
                <span>{item}</span>
                <span className="text-white">✖</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
