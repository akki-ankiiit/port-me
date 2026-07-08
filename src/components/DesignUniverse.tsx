"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "UX Design", radius: 120, speed: 20, color: "text-accent-orange", size: "text-sm" },
  { name: "Product Design", radius: 180, speed: 25, color: "text-text-primary", size: "text-base font-bold" },
  { name: "Branding", radius: 240, speed: 30, color: "text-accent-red", size: "text-lg" },
  { name: "Motion", radius: 300, speed: 35, color: "text-text-secondary", size: "text-sm" },
  { name: "Research", radius: 150, speed: 22, color: "text-accent-green", size: "text-xs" },
  { name: "Strategy", radius: 210, speed: 28, color: "text-accent-gold", size: "text-md" },
  { name: "AI", radius: 270, speed: 32, color: "text-text-primary", size: "text-xl font-serif italic" },
  { name: "3D Design", radius: 330, speed: 38, color: "text-accent-orange", size: "text-sm" },
  { name: "Design Systems", radius: 190, speed: 26, color: "text-text-secondary", size: "text-xs font-pixel" },
  { name: "Storytelling", radius: 250, speed: 31, color: "text-accent-red", size: "text-lg font-script" },
];

export function DesignUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-bg-primary overflow-hidden flex items-center justify-center py-20">
      <div className="absolute top-10 left-10 z-10">
        <h2 className="text-4xl font-sans font-bold uppercase text-text-primary">
          My Design Universe
        </h2>
        <p className="font-serif italic text-text-secondary mt-2">
          Everything orbits around creating impact.
        </p>
      </div>

      <div className="relative w-full h-full flex items-center justify-center max-w-[800px] max-h-[800px]">
        {/* Center */}
        <div className="absolute z-20 w-32 h-32 bg-text-primary text-bg-primary rounded-full flex items-center justify-center shadow-2xl hoverable">
          <span className="font-sans font-black text-2xl tracking-tighter">ANKIT</span>
        </div>

        {/* Orbit Rings */}
        {[1, 2, 3, 4].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border border-text-primary/5 pointer-events-none"
            style={{ width: ring * 150 + 100, height: ring * 150 + 100 }}
          />
        ))}

        {/* Orbiting Skills */}
        {skills.map((skill) => {
          const isHovered = hoveredSkill === skill.name;
          const isFaded = hoveredSkill !== null && !isHovered;

          return (
            <motion.div
              key={skill.name}
              className="absolute w-full h-full flex items-center justify-center pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{
                duration: skill.speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute pointer-events-auto hoverable cursor-pointer"
                style={{ y: -skill.radius }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Counter-rotate text so it stays upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: skill.speed,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`bg-bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full border border-text-primary/10 shadow-sm transition-opacity duration-300 ${skill.color} ${skill.size} ${isFaded ? "opacity-20" : "opacity-100"}`}
                >
                  {skill.name}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
