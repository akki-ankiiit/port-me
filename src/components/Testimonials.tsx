import { motion } from "framer-motion";
import { useRef, useState } from "react";

const postcardsData = [
  {
    id: 1,
    text: "Hey Ankit, the eye for detail you brought to the core flow redesign is unmatched. User retention is up by 25%! Outstanding work.",
    author: "Neostra Team",
    date: "OCT 12, 2023",
    city: "SAN FRANCISCO",
    postmarkDate: "12.X.23",
    stampCountry: "USA",
    stampValue: "20¢",
    stampIcon: "🌉",
    rotate: "-rotate-3",
    x: "5%",
    y: "8%",
  },
  {
    id: 2,
    text: "The architecture decisions and scale of the design systems you guided are saving us hundreds of hours daily. Cheers!",
    author: "Tejas Pvt Ltd",
    date: "JAN 04, 2024",
    city: "NEW DELHI",
    postmarkDate: "04.I.24",
    stampCountry: "INDIA",
    stampValue: "5 ₹",
    stampIcon: "🏛️",
    rotate: "rotate-6",
    x: "55%",
    y: "5%",
  },
  {
    id: 3,
    text: "Incredible work helping us launch our initial MVP. Your ability to balance logic and user flow design is a true superpower.",
    author: "Newstratech",
    date: "JUL 28, 2023",
    city: "MUNICH",
    postmarkDate: "28.VII.23",
    stampCountry: "DEUTSCHLAND",
    stampValue: "1,10 €",
    stampIcon: "🏰",
    rotate: "-rotate-8",
    x: "28%",
    y: "35%",
  },
  {
    id: 4,
    text: "The client presentation deck and studio website look phenomenal. Tactical, tactile, and pure class. Let's build the next one soon!",
    author: "BlackSpace Studio",
    date: "MAY 27, 2026",
    city: "LONDON",
    postmarkDate: "27.V.26",
    stampCountry: "UK",
    stampValue: "1ST",
    stampIcon: "⚓",
    rotate: "rotate-3",
    x: "4%",
    y: "55%",
  },
  {
    id: 5,
    text: "Ankit just gets it. He doesn't just design interfaces, he designs systems that tell stories and connect with users. A rare talent.",
    author: "Founding Partner",
    date: "MAR 15, 2025",
    city: "NEW YORK",
    postmarkDate: "15.III.25",
    stampCountry: "USA",
    stampValue: "35¢",
    stampIcon: "🗽",
    rotate: "-rotate-2",
    x: "53%",
    y: "53%",
  },
];

function PostageStamp({ country, value, icon }: { country: string; value: string; icon: string }) {
  return (
    <div className="relative w-14 h-18 bg-[#F5EFE0] p-1 shadow-md border-2 border-dashed border-[#B8A484] flex flex-col justify-between items-center select-none overflow-hidden rounded-sm transform hover:scale-105 transition-transform">
      {/* Stamp Header */}
      <span className="text-[7px] font-pixel tracking-widest text-[#8C7A5C] uppercase">{country}</span>
      
      {/* Stamp Icon/Image */}
      <div className="w-full flex-1 flex items-center justify-center bg-[#E6DDC8] my-1 rounded-sm relative">
        <span className="text-xl opacity-60 filter sepia">{icon}</span>
      </div>

      {/* Stamp Price */}
      <span className="text-[8px] font-serif font-bold text-[#8C7A5C]">{value}</span>
    </div>
  );
}

function Postmark({ city, date }: { city: string; date: string }) {
  return (
    <div className="absolute top-[-8px] right-2 w-20 h-20 border border-dashed border-[#8B3E2F]/30 rounded-full flex flex-col items-center justify-center rotate-[-12deg] pointer-events-none select-none">
      <div className="w-16 h-16 border border-dashed border-[#8B3E2F]/20 rounded-full flex flex-col items-center justify-center">
        <span className="text-[8px] font-sans font-bold text-[#8B3E2F]/40 tracking-wider uppercase leading-none">{city}</span>
        <span className="text-[6px] font-pixel text-[#8B3E2F]/30 mt-1 leading-none">{date}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full h-[95vh] bg-[#2E2015] dark:bg-[#1A110B] overflow-hidden py-16 px-6 flex flex-col items-center justify-between border-y-8 border-[#1C120B] shadow-2xl">
      {/* Desktop Wood Texture Panel and Blotter Border */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none z-0" />
      
      {/* Testimonials Title */}
      <div className="relative z-10 text-center mb-6 pointer-events-none">
        <h2 className="text-5xl font-script text-[#EADEC9] dark:text-[#E8DCC4] tracking-wide select-none drop-shadow">
          Correspondence // Wall of Notes
        </h2>
        <p className="font-pixel text-[10px] uppercase tracking-[0.25em] mt-2 text-[#C0A880] select-none">
          MESSAGES_FROM_THE_ARCHIVE
        </p>
      </div>

      {/* Leather Writing Desk Pad Blotter */}
      <div className="relative z-10 w-full max-w-7xl h-full rounded-2xl border-[5px] border-[#A88C52] bg-[#1E3326] dark:bg-[#0E1A13] p-8 shadow-[inset_0_0_80px_rgba(0,0,0,0.8),0_20px_50px_rgba(0,0,0,0.7)] flex items-center justify-center">
        {/* Felt / Leather fine noise */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.4))] rounded-xl pointer-events-none" />
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay rounded-xl pointer-events-none" />

        {/* Nostalgic Decorative items resting on the desk */}
        <div className="absolute bottom-6 left-6 text-4xl opacity-30 select-none pointer-events-none rotate-12 hover:opacity-50 transition-opacity">
          👓
        </div>
        <div className="absolute top-6 right-6 text-4xl opacity-25 select-none pointer-events-none -rotate-[45deg] hover:opacity-50 transition-opacity">
          ✒️
        </div>
        <div className="absolute bottom-6 right-8 text-4xl opacity-20 select-none pointer-events-none rotate-[20deg] hover:opacity-50 transition-opacity">
          ☕
        </div>

        {/* Postcards Area */}
        <div className="relative w-full h-full">
          {postcardsData.map((note) => (
            <DraggablePostcard key={note.id} note={note} containerRef={containerRef} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DraggablePostcard({ note, containerRef }: { note: any; containerRef: any }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ 
        scale: 1.04, 
        zIndex: 50, 
        rotate: 0,
        boxShadow: "0px 30px 60px rgba(0,0,0,0.5)"
      }}
      initial={{ left: note.x, top: note.y }}
      className={`absolute cursor-grab active:cursor-grabbing hoverable w-[25rem] h-60 bg-gradient-to-br from-[#FCFAF0] via-[#F4EDE0] to-[#E5DABC] border border-[#C5B595] rounded-[3px] shadow-lg p-5 flex select-none ${
        !isDragging ? note.rotate : ""
      } transition-shadow duration-300`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front texture sheen */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/10 rounded-[3px] pointer-events-none" />

      {/* Left side: Handwritten Message */}
      <div className="w-[60%] h-full flex flex-col justify-between pr-4 border-r border-dashed border-[#A08C78]/30">
        <div className="flex flex-col gap-1">
          {/* Postcard Header */}
          <div className="flex justify-between items-center text-[8px] font-pixel tracking-wider text-[#8A7968]/70 uppercase">
            <span>POST CARD</span>
            <span>{note.date}</span>
          </div>
          
          {/* Main message */}
          <p className="font-script text-[1.25rem] text-[#243342] leading-relaxed mt-3 select-none">
            "{note.text}"
          </p>
        </div>

        {/* Sender Name */}
        <p className="font-script text-base text-right text-[#405366]/80 pr-2">
          — {note.author}
        </p>
      </div>

      {/* Right side: Stamp & Address */}
      <div className="w-[40%] h-full flex flex-col justify-between pl-4 relative">
        {/* Stamp & Postmark */}
        <div className="flex justify-end relative">
          <PostageStamp country={note.stampCountry} value={note.stampValue} icon={note.stampIcon} />
          <Postmark city={note.city} date={note.postmarkDate} />
        </div>

        {/* Address Lines */}
        <div className="flex flex-col gap-1.5 w-full mt-2 select-none">
          <div className="w-full border-b border-[#A08C78]/40 h-5 flex items-end pl-1">
            <span className="text-[10px] font-serif italic text-[#8A7968] leading-none mb-0.5">To: Ankit Chandrakar</span>
          </div>
          <div className="w-full border-b border-[#A08C78]/40 h-5 flex items-end pl-1">
            <span className="text-[9px] font-sans text-[#8A7968]/80 leading-none mb-0.5">UX Design Studio</span>
          </div>
          <div className="w-full border-b border-[#A08C78]/40 h-5 flex items-end pl-1 font-pixel text-[6px] text-[#8A7968]/60 uppercase leading-none mb-0.5">
            <span>London, United Kingdom</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
