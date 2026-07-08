import avatarDesigner from "../assets/avatar_designer.png";
import avatarLaptop from "../assets/avatar_laptop.png";
import avatarSelfie from "../assets/avatar_selfie.png";
import stickerPhone from "../assets/sticker_phone.png";
import stickerLondon from "../assets/sticker_london.png";

export function Hero() {
  const navItems = ["Works", "Services", "About", "Blog"];

  return (
    <div className="w-full flex flex-col items-center bg-bg-primary text-text-primary px-4 sm:px-6 lg:px-8 relative">
      {/* Curved Top Tab Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-[360px] h-[36px]">
        <svg
          viewBox="0 0 360 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full text-[#232326] dark:text-[#18181A]"
        >
          <path
            d="M 0 0 C 45 0 45 36 90 36 L 270 36 C 315 36 315 0 360 0 Z"
            fill="currentColor"
          />
        </svg>
        <div className="relative z-10 flex items-center gap-2 pb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse shrink-0"></span>
          <span className="text-[#ECEBE8] text-xs font-semibold tracking-wide select-none">
            Available to work!
          </span>
        </div>
      </div>

      {/* Top Navigation */}
      <header className="w-full max-w-7xl h-24 flex justify-between items-center border-b border-text-primary/5 relative">
        {/* Logo */}
        <div className="text-3xl font-semibold tracking-tight text-accent-orange">
          Ankit.
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-text-secondary/70 translate-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-text-primary transition-colors font-bold"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="px-6 py-2 bg-[#2D2D30] text-[#ECEBE8] rounded-full text-sm font-semibold hover:bg-accent-orange transition-all duration-300 shadow-md hover:shadow-lg translate-y-0"
        >
          Contact
        </a>
      </header>

      {/* Main Hero Container */}
      <main className="w-full max-w-7xl flex flex-col items-center pt-16 md:pt-24 pb-12">
        {/* Trusted By Founders Pill */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#E3E2DE] dark:bg-[#1E1E21] rounded-full border border-text-primary/5 text-xs font-semibold text-text-secondary shadow-sm mb-8">
          <div className="flex -space-x-2">
            <img src={avatarSelfie} alt="Founder 1" className="w-5 h-5 rounded-full border border-bg-primary object-cover" />
            <img src={avatarDesigner} alt="Founder 2" className="w-5 h-5 rounded-full border border-bg-primary object-cover" />
            <img src={avatarSelfie} alt="Founder 3" className="w-5 h-5 rounded-full border border-bg-primary object-cover" />
          </div>
          <span className="text-[#333333] dark:text-[#CCCCCC]">Trusted by founders.</span>
        </div>

        {/* Big Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-semibold tracking-tight text-center leading-[1.2] max-w-6xl">
          <span className="text-text-primary">Effortless </span>
          <span className="inline-flex items-center align-middle mx-1 md:mx-2 bg-transparent rounded-[2rem] w-12 h-18 md:w-16 md:h-24 overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <img src={stickerPhone} alt="Phone UI sticker" className="w-full h-full object-cover" />
          </span>
          <span className="text-accent-orange"> Design</span>
          <br />
          <span className="text-text-secondary/60">for </span>
          <span className="inline-flex items-center justify-center align-middle mx-1 md:mx-2 bg-[#2D283E] px-1 rounded-full w-16 h-10 md:w-24 md:h-14 overflow-hidden border border-text-primary/10 hover:scale-105 transition-transform duration-300 shadow-md">
            <img src={avatarLaptop} alt="Laptop sticker" className="w-full h-full object-cover rounded-full scale-105" />
          </span>
          <span className="text-text-primary"> Design Startups</span>
          <br />
          <span className="text-text-secondary/70">based in London, </span>
          <span className="inline-flex items-center align-middle mx-1 md:mx-2 bg-transparent rounded-full w-10 h-10 md:w-16 md:h-16 overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <img src={stickerLondon} alt="London Big Ben sticker" className="w-full h-full object-cover rounded-full" />
          </span>
          <span className="text-text-primary"> UK</span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="mt-8 font-sans text-base sm:text-lg text-text-secondary/80 text-center max-w-3xl leading-relaxed px-4">
          We make it easy for startups to launch, grow, and scale with clean,<br className="hidden sm:inline" />
          conversion focused designs — no delays, no drama.
        </p>

        {/* View Plans CTA */}
        <a
          href="#plans"
          className="mt-8 px-8 py-3.5 bg-[#252528] text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-accent-orange transition-all duration-300 hover:gap-3 shadow-md hover:shadow-xl"
        >
          <span>View Plans</span>
          <span className="text-xs">➔</span>
        </a>

        {/* Overlapping Mockups Grid Container */}
        <div className="w-full mt-16 md:mt-24 rounded-3xl bg-[#09090C] p-6 sm:p-10 md:p-16 overflow-hidden relative aspect-[16/10] md:aspect-[21/9] flex items-center justify-center shadow-2xl border border-white/5">
          {/* Subtle background glow/noise */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.08),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

          {/* Perspective Outer wrapper */}
          <div className="w-full h-full relative flex items-center justify-center scale-90 sm:scale-100" style={{ perspective: "1500px" }}>
            
            {/* Tilted cards wrapper */}
            <div 
              className="w-full h-full relative flex items-center justify-center transition-transform duration-700 ease-out"
              style={{
                transform: "rotateX(20deg) rotateY(-8deg) rotateZ(4deg)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Card 1: AL EXPERIENCE (Leftmost) */}
              <div 
                className="absolute w-[20%] aspect-[3/4] bg-[#121214] border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-[10px_20px_40px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-500 hover:-translate-y-6 hover:shadow-[10px_25px_50px_rgba(255,90,31,0.15)]"
                style={{
                  left: "3%",
                  top: "10%",
                  transform: "translateZ(30px)",
                }}
              >
                <div className="text-[10px] text-white/40 font-pixel">CASE_01</div>
                <div className="text-xl font-bold uppercase text-white leading-tight rotate-180 writing-mode-vertical" style={{ writingMode: "vertical-lr" }}>
                  AL EXPERIENCE
                </div>
                <div className="w-full h-1/3 bg-gradient-to-t from-accent-orange/20 to-transparent rounded-lg border border-accent-orange/10" />
              </div>

              {/* Card 2: VNTNR. (Top Middle-Left) */}
              <div 
                className="absolute w-[26%] aspect-[1.1] bg-[#DF634B] border border-white/10 rounded-xl p-6 flex flex-col justify-between shadow-[15px_25px_50px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-500 hover:-translate-y-6 hover:shadow-[15px_30px_60px_rgba(223,99,75,0.3)]"
                style={{
                  left: "26%",
                  top: "2%",
                  transform: "translateZ(80px)",
                }}
              >
                <div className="flex justify-between items-center text-[10px] text-white/60 font-pixel">
                  <span>VNTNR. STUDIO</span>
                  <span>©2026</span>
                </div>
                <div className="text-3xl font-black uppercase text-white tracking-tighter leading-none mt-4">
                  VNTNR<span className="text-black">.</span>
                </div>
                <div className="text-[11px] text-white/80 font-sans mt-2">
                  IDEAS / WINERIES / SUBSCRIPTIONS
                </div>
                <div className="w-full h-8 bg-white/10 rounded-md mt-4 flex items-center justify-center text-[10px] font-bold text-white">
                  EXPLORE CASE
                </div>
              </div>

              {/* Card 3: Archin Design Studio (Bottom Left-Middle) */}
              <div 
                className="absolute w-[28%] aspect-[1.4] bg-[#161619] border border-white/10 rounded-xl p-4 flex flex-col gap-2 shadow-[20px_30px_60px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500 hover:-translate-y-6 hover:shadow-[20px_35px_70px_rgba(255,90,31,0.2)]"
                style={{
                  left: "15%",
                  bottom: "-5%",
                  transform: "translateZ(120px)",
                }}
              >
                <div className="w-full aspect-[16/10] bg-[#1A1A1E] rounded-lg overflow-hidden border border-white/5 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,90,31,0.15),transparent)]" />
                  <div className="p-3 text-white">
                    <div className="text-[9px] text-white/50 font-pixel">ARCHIN_STUDIO</div>
                    <div className="text-sm font-bold mt-1">Archin Design Studio</div>
                    <div className="mt-2 text-[8px] text-white/40">3D ARCHITECTURAL LAYOUTS</div>
                  </div>
                  <div className="absolute bottom-2 right-2 w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-black/40 text-[8px] text-white">
                    CAD
                  </div>
                </div>
              </div>

              {/* Card 4: sottozero (Top Right-Middle) */}
              <div 
                className="absolute w-[25%] aspect-[1.2] bg-[#A5785B] border border-white/10 rounded-xl p-5 flex flex-col justify-between shadow-[25px_35px_60px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-500 hover:-translate-y-6 hover:shadow-[25px_40px_75px_rgba(165,120,91,0.3)]"
                style={{
                  right: "22%",
                  top: "10%",
                  transform: "translateZ(90px)",
                }}
              >
                <div className="text-[9px] text-white/60 font-pixel uppercase tracking-widest">BRAND IDENTITY</div>
                <div className="text-3xl font-serif italic text-white text-center py-3">
                  sottozero
                </div>
                <div className="flex justify-between items-center text-[9px] text-white/70">
                  <span>CREATIVE LAB</span>
                  <span>MILAN</span>
                </div>
              </div>

              {/* Card 5: CANDREVA DESIGN SHOWCASE (Bottom Middle-Right) */}
              <div 
                className="absolute w-[27%] aspect-[1.3] bg-[#0E0E10] border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-[20px_30px_65px_rgba(0,0,0,0.7)] cursor-pointer transition-all duration-500 hover:-translate-y-6 hover:shadow-[20px_35px_75px_rgba(255,90,31,0.15)]"
                style={{
                  right: "12%",
                  bottom: "-2%",
                  transform: "translateZ(130px)",
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[8px] text-accent-orange font-bold font-pixel">CANDREVA</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                </div>
                <div className="text-base font-bold text-white uppercase mt-2">
                  CANDREVA DESIGN SHOWCASE
                </div>
                <div className="w-full aspect-[21/9] bg-[#171719] rounded-lg mt-3 border border-white/5 overflow-hidden flex items-center justify-center p-2">
                  <div className="grid grid-cols-3 gap-1 w-full">
                    <div className="h-6 bg-white/5 rounded border border-white/5" />
                    <div className="h-6 bg-accent-orange/20 rounded border border-accent-orange/20" />
                    <div className="h-6 bg-white/5 rounded border border-white/5" />
                  </div>
                </div>
              </div>

              {/* Card 6: CREATIVE + SENS... (Rightmost) */}
              <div 
                className="absolute w-[20%] aspect-[3/4] bg-[#19191D] border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-[15px_25px_50px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-500 hover:-translate-y-6 hover:shadow-[15px_30px_60px_rgba(255,90,31,0.1)]"
                style={{
                  right: "2%",
                  top: "20%",
                  transform: "translateZ(50px)",
                }}
              >
                <div className="text-[9px] text-white/30 font-pixel">STAGE_04</div>
                <div className="text-xl font-sans font-black text-white uppercase leading-none py-4">
                  CREATIVE <br/>
                  <span className="text-stroke font-serif italic text-white/20">+ SENS...</span>
                </div>
                <div className="text-[9px] text-white/40 leading-tight">
                  IMPACT DRIVEN SYSTEM
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
