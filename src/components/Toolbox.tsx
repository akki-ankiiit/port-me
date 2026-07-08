import { motion } from "framer-motion";

const tools = [
  { name: "Figma", category: "Design", level: "Expert" },
  { name: "Adobe Suite", category: "Design", level: "Advanced" },
  { name: "SolidWorks", category: "Engineering", level: "Advanced" },
  { name: "Blender", category: "3D", level: "Intermediate" },
  { name: "Framer", category: "Development", level: "Expert" },
  { name: "Next.js", category: "Development", level: "Intermediate" },
  { name: "ChatGPT / Claude", category: "AI", level: "Daily" },
  { name: "Midjourney", category: "AI", level: "Advanced" },
];

export function Toolbox() {
  return (
    <section className="w-full py-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-pixel text-text-primary mb-10 border-b border-text-primary/10 pb-4">
          INVENTORY // TOOLBOX
        </h2>

        <div className="flex flex-col gap-2">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="group relative flex justify-between items-center py-4 border-b border-text-primary/5 hoverable cursor-crosshair"
            >
              <div className="flex items-center gap-4">
                <span className="font-pixel text-text-secondary text-xs opacity-50">0{i+1}</span>
                <span className="font-sans text-2xl md:text-3xl font-bold text-text-primary group-hover:italic group-hover:text-accent-orange transition-all">
                  {tool.name}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="hidden md:block font-serif italic text-text-secondary">
                  {tool.category}
                </span>
                <div className="w-24 md:w-32 bg-bg-secondary h-2 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent-green"
                    initial={{ width: "0%" }}
                    whileInView={{ 
                      width: tool.level === "Expert" || tool.level === "Daily" ? "95%" : 
                             tool.level === "Advanced" ? "80%" : "60%" 
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
