"use client";

import { motion } from "framer-motion";

const achievements = [
  { value: "50+", label: "Projects Completed", icon: "🚀" },
  { value: "30+", label: "Clients Served", icon: "🤝" },
  { value: "15+", label: "Brands Built", icon: "✨" },
  { value: "100+", label: "Interfaces Designed", icon: "📱" },
  { value: "5+", label: "Systems Created", icon: "⚙️" },
  { value: "8+", label: "Years Experience", icon: "⏳" },
];

export function Achievements() {
  return (
    <section className="relative w-full py-24 bg-bg-secondary border-y border-text-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl font-pixel text-text-primary">ACHIEVEMENT_BOARD</h2>
          <span className="font-sans text-text-secondary text-sm animate-pulse">100% UNLOCKED</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-bg-primary border border-text-primary/10 p-6 flex flex-col items-center justify-center gap-2 hover:bg-accent-orange/10 hover:border-accent-orange transition-colors group hoverable"
            >
              <span className="text-3xl md:text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">
                {item.icon}
              </span>
              <h3 className="text-4xl md:text-5xl font-sans font-black text-text-primary group-hover:text-accent-orange mt-2">
                {item.value}
              </h3>
              <p className="font-pixel text-text-secondary text-[10px] md:text-xs text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
