"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative w-full min-h-screen bg-bg-primary flex flex-col justify-between pt-32 pb-10 px-6 overflow-hidden">
      
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-5">
        <span className="font-sans font-black text-[30vw] whitespace-nowrap">CONTACT</span>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-4xl mx-auto text-center">
        
        {/* Floating Paper Airplane */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl mb-8"
        >
          ✈️
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-serif text-text-primary mb-12">
          Let's Build Something <br />
          <span className="italic text-accent-red">Worth Remembering.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <a href="mailto:hello@ankit.com" className="hoverable px-8 py-4 rounded-full border border-text-primary text-text-primary font-sans uppercase tracking-widest text-sm hover:bg-text-primary hover:text-bg-primary transition-colors">
            Email Me
          </a>
          <a href="#" className="hoverable px-8 py-4 rounded-full border border-text-primary/20 text-text-secondary font-sans uppercase tracking-widest text-sm hover:border-text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hoverable px-8 py-4 rounded-full border border-text-primary/20 text-text-secondary font-sans uppercase tracking-widest text-sm hover:border-text-primary transition-colors">
            Behance
          </a>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end border-t border-text-primary/10 pt-8 mt-auto w-full max-w-7xl mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-serif italic text-text-secondary text-lg max-w-xs">
            Made with curiosity, systems thinking, and lots of coffee.
          </p>
          <span className="font-pixel text-accent-green text-xs mt-4">SYSTEM_OFFLINE_</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-script text-4xl text-text-primary transform -rotate-3">
            Ankit Chandrakar
          </span>
          <span className="font-sans text-xs text-text-secondary uppercase tracking-widest mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
