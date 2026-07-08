"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const timelineItems = [
  { year: "2002", title: "Born", description: "Curious kid with a knack for opening things." },
  { year: "2015", title: "Creative Explorer", description: "First sketches and discovering visual arts." },
  { year: "2018", title: "Engineering Mindset", description: "Learning how things work, combining logic with form." },
  { year: "2020", title: "Design Discovery", description: "Transitioning into digital interfaces and systems." },
  { year: "2021", title: "Product Design", description: "Building apps, websites, and user flows." },
  { year: "2023", title: "Brand Systems", description: "Creating identities that tell a story." },
  { year: "2024", title: "AI Workflows", description: "Exploring the intersection of generative AI and design." },
  { year: "2025", title: "Design Consultant", description: "Helping businesses scale through strategic design." },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">
        
        {/* Sticky Title */}
        <div className="md:w-1/3 flex flex-col relative">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-6xl font-serif text-text-primary tracking-tight">
              The Story<br />
              <span className="italic text-accent-orange">So Far</span>
            </h2>
            <p className="font-sans text-text-secondary mt-6 max-w-sm">
              Documenting the evolution from curiosity to mastery. A visual journey of building, breaking, and redesigning.
            </p>
            {/* Doodles/Artifacts */}
            <div className="mt-12 hidden md:block">
              <div className="w-32 h-32 border-2 border-text-secondary/20 rounded-full flex items-center justify-center font-script text-text-primary/50 rotate-[-10deg]">
                Sketches go here
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="md:w-2/3 relative pl-8 border-l border-text-primary/10">
          <motion.div
            className="absolute top-0 left-[-1px] w-[2px] bg-accent-orange origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-16">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col group hoverable cursor-default"
    >
      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 border-accent-orange bg-bg-primary group-hover:bg-accent-orange transition-colors duration-300" />
      
      <span className="font-pixel text-accent-green text-sm mb-2">{item.year}</span>
      <h3 className="text-2xl font-sans font-bold text-text-primary mb-2">{item.title}</h3>
      <p className="font-serif text-lg text-text-secondary max-w-md">{item.description}</p>
      
      {/* Visual artifacts that appear on hover */}
      <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0 pointer-events-none hidden lg:block">
        <div className="w-48 h-32 bg-bg-secondary border border-text-primary/10 shadow-lg p-2 rotate-3">
          <div className="w-full h-full bg-text-primary/5 flex items-center justify-center font-script text-text-primary/40">
            Artifact #{index + 1}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
