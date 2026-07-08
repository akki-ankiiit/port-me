"use client";

import { motion } from "framer-motion";

const chapters = [
  {
    id: "01",
    title: "Neostra",
    role: "UX Designer",
    date: "2023 - 2024",
    impact: "Redesigned core flows increasing retention by 25%.",
  },
  {
    id: "02",
    title: "Tejas Pvt Ltd",
    role: "Design Consultant",
    date: "Aug 2024 – Present",
    impact: "Scaling design systems and guiding architectural decisions.",
  },
  {
    id: "03",
    title: "Newstratech",
    role: "Product Designer",
    date: "2022 - 2023",
    impact: "Spearheaded initial product MVP to successful launch.",
  },
];

export function Experience() {
  return (
    <section className="relative w-full py-32 px-6 bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-text-primary/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-text-primary uppercase tracking-tight">
            Experience
          </h2>
          <p className="font-pixel text-accent-orange">CHAPTERS_UNLOCKED</p>
        </div>

        <div className="flex flex-col gap-0 border-t border-text-primary/10">
          {chapters.map((chapter, index) => (
            <ChapterItem key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ChapterItem({ chapter, index }: { chapter: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-16 border-b border-text-primary/10 hover:bg-bg-primary/50 transition-colors cursor-pointer hoverable px-4 md:px-8 -mx-4 md:-mx-8"
    >
      <div className="flex flex-col gap-2">
        <span className="font-serif italic text-text-secondary text-xl">Chapter {chapter.id}</span>
        <h3 className="text-4xl md:text-5xl font-sans font-bold text-text-primary group-hover:text-accent-orange transition-colors">
          {chapter.title}
        </h3>
      </div>
      
      <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 gap-2">
        <span className="font-pixel text-accent-green">{chapter.role}</span>
        <span className="font-sans text-text-secondary text-sm">{chapter.date}</span>
      </div>

      {/* Hidden details revealed on hover or click */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute right-[20%] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 font-script text-8xl text-text-primary"
        >
          {chapter.impact}
        </motion.div>
      </div>
    </motion.div>
  );
}
