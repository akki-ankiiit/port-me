"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  { id: "01", title: "Neostra", category: "UX/UI Design", color: "bg-[#111111]" },
  { id: "02", title: "Kamdhenu Adhesive", category: "Brand Identity", color: "bg-[#C66A2B]" },
  { id: "03", title: "Adhikar App", category: "Product Design", color: "bg-[#5D6A50]" },
  { id: "04", title: "MistriBhai", category: "Web Application", color: "bg-[#8A2D2D]" },
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-bg-primary">
      {/* Sticky Header */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center pointer-events-none z-0">
        <h2 className="text-[15vw] font-sans font-black uppercase text-text-primary/5 tracking-tighter whitespace-nowrap">
          Featured Work
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32 flex flex-col gap-[30vh]">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ scale }}
      className={`relative w-full aspect-[4/3] md:aspect-[21/9] ${project.color} rounded-2xl overflow-hidden hoverable cursor-pointer group flex ${isEven ? "justify-start" : "justify-end"} items-center p-8 md:p-16`}
    >
      {/* Background Noise Image/Pattern Placeholder */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

      {/* Parallax Content */}
      <motion.div style={{ y }} className="relative z-10 flex flex-col text-[#F5F5F5] mix-blend-difference">
        <span className="font-pixel text-sm md:text-base opacity-70 mb-4">PROJECT_{project.id}</span>
        <h3 className="text-5xl md:text-8xl font-sans font-black uppercase tracking-tight group-hover:italic transition-all duration-500">
          {project.title}
        </h3>
        <p className="font-serif text-xl md:text-3xl italic mt-2 opacity-90">{project.category}</p>
        
        <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-[1px] bg-[#F5F5F5]" />
          <span className="font-sans text-sm uppercase tracking-widest">Explore Case Study</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
