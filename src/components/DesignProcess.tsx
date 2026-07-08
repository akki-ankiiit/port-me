"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const processSteps = [
  { id: "01", title: "Research", note: "Understand the human." },
  { id: "02", title: "Think", note: "Find the root problem." },
  { id: "03", title: "Sketch", note: "Doodle on napkins." },
  { id: "04", title: "Prototype", note: "Build it fast." },
  { id: "05", title: "Test", note: "Break it. Fix it." },
  { id: "06", title: "Refine", note: "Pixel perfection." },
  { id: "07", title: "Launch", note: "Ship it." },
];

export function DesignProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-bg-tertiary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-text-primary mb-20 text-center">
          How I <span className="italic text-accent-red">Make Things</span>
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-4 flex-wrap mt-10">
          
          {/* Animated SVG Path Connecting Steps */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] hidden md:block z-0">
            <svg width="100%" height="20" preserveAspectRatio="none">
              <motion.path
                d="M 0 10 Q 200 20 400 10 T 800 10 T 1200 10"
                fill="transparent"
                stroke="var(--accent-orange)"
                strokeWidth="2"
                strokeDasharray="10 10"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </div>

          {processSteps.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center hoverable group">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-bg-primary rounded-full border border-text-primary/10 flex items-center justify-center shadow-md group-hover:border-accent-orange group-hover:scale-110 transition-all duration-300"
              >
                <span className="font-sans font-bold text-lg md:text-xl text-text-primary">{step.id}</span>
              </motion.div>
              <h3 className="mt-4 font-sans font-medium text-text-primary uppercase tracking-wider text-sm md:text-base">
                {step.title}
              </h3>
              
              {/* Sticky Note */}
              <div className="absolute top-20 opacity-0 group-hover:opacity-100 group-hover:top-24 transition-all duration-300 pointer-events-none">
                <div className="w-32 bg-[#FEF6C8] dark:bg-[#D9C471] p-3 shadow-lg rotate-3 text-black">
                  <p className="font-script text-lg leading-tight">{step.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
