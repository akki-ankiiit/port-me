export function ClientLogos() {
  return (
    <section className="w-full py-16 bg-bg-primary border-t border-text-primary/5 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-60">
        
        {/* Kamdhenu Adhesive */}
        <div className="flex flex-col items-center group cursor-pointer hover:opacity-100 transition-opacity duration-300">
          <span className="font-sans font-extrabold text-lg md:text-xl tracking-[0.2em] text-text-primary leading-none text-center">
            KAMDHENU
          </span>
          <span className="font-sans text-[9px] tracking-[0.4em] text-text-secondary mt-1">
            ADHESIVE
          </span>
        </div>

        {/* Tejas */}
        <div className="flex items-center justify-center group cursor-pointer hover:opacity-100 transition-opacity duration-300">
          <span className="font-serif italic font-medium text-3xl md:text-4xl text-text-primary lowercase tracking-tighter">
            tejas
          </span>
        </div>

        {/* BlackSpace */}
        <div className="flex items-center justify-center group cursor-pointer hover:opacity-100 transition-opacity duration-300">
          <span className="font-sans font-black text-2xl md:text-3xl text-text-primary tracking-tighter uppercase flex items-center">
            Black<span className="text-stroke font-serif italic text-xl md:text-2xl font-light ml-0.5 lowercase text-text-primary/70">Space</span>
          </span>
        </div>

        {/* Nyusta */}
        <div className="flex items-center justify-center group cursor-pointer hover:opacity-100 transition-opacity duration-300">
          <span className="font-sans font-semibold text-xl md:text-2xl text-text-primary tracking-[0.3em] flex items-center">
            N<span className="scale-x-[-1] inline-block">Y</span>USTA
          </span>
        </div>

      </div>
    </section>
  );
}
