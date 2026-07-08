import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Globe, PenTool, Layout, Compass } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Component imports
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { SlantedMarquee } from "@/components/SlantedMarquee";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { DesignUniverse } from "@/components/DesignUniverse";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ThreeDWorkshop } from "@/components/ThreeDWorkshop";
import { DesignProcess } from "@/components/DesignProcess";
import { Achievements } from "@/components/Achievements";
import { Testimonials } from "@/components/Testimonials";
import { Toolbox } from "@/components/Toolbox";
import { Footer } from "@/components/Footer";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer.disconnect();
  }, []);

  const activeColor = isDark ? "rgba(245, 245, 245, 1)" : "rgba(17, 17, 17, 1)";
  const inactiveColor = isDark ? "rgba(245, 245, 245, 0.15)" : "rgba(17, 17, 17, 0.15)";

  const transitionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "center center"]
  });

  const color1 = useTransform(scrollYProgress, [0.2, 0.5], [inactiveColor, activeColor]);
  const color2 = useTransform(scrollYProgress, [0.5, 0.75], [inactiveColor, activeColor]);
  const color3 = useTransform(scrollYProgress, [0.75, 0.95], [inactiveColor, activeColor]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-bg-primary text-text-primary overflow-x-hidden relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Global Grain/Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[80] mix-blend-overlay opacity-25">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Page Sections */}
      <main className="flex flex-col w-full">
        {/* Hero Section (including Navbar, Heading Badges and Tilted Mockup Grid) */}
        <section id="home">
          <Hero />
        </section>

        {/* Client Logos Section */}
        <ClientLogos />

        {/* Slanted Marquee Banners */}
        <SlantedMarquee />

        {/* Transition Section: (hello) & We Help Startups... */}
        <section ref={transitionRef} className="w-full bg-bg-primary pt-24 pb-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
          {/* (hello) */}
          <span className="font-script text-4xl md:text-5xl text-accent-orange select-none mb-6">
            (hello)
          </span>

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] md:leading-[56px] tracking-tight font-semibold text-text-primary flex flex-wrap justify-center gap-[0.25em]">
              <motion.span style={{ color: color1 }}>We help fast moving digital startups</motion.span>
              <motion.span style={{ color: color2 }}>launch sharper brands and websites —</motion.span>
              <motion.span style={{ color: color3 }}>with clarity, speed, and no drama.</motion.span>
            </h2>
          </div>

          {/* Chips Grid */}
          <div className="flex flex-col gap-3 mt-12 items-center justify-center w-full max-w-3xl px-4">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="premium-chip">
                {/* 4-point star */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                  <path d="M12 0c.5 6 5.5 11 11.5 11.5-.5.5-5.5 5.5-11.5 11.5-.5-.5-5.5-5.5-11.5-11.5C6 11.5 11 6.5 12 0z" />
                </svg>
                <span>Branding</span>
              </div>

              <div className="premium-chip">
                <Globe className="w-4 h-4 shrink-0" />
                <span>Logo</span>
              </div>

              <div className="premium-chip">
                <Globe className="w-4 h-4 shrink-0" />
                <span>Website</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="premium-chip">
                <PenTool className="w-4 h-4 shrink-0" />
                <span>Illustration</span>
              </div>

              <div className="premium-chip">
                <Layout className="w-4 h-4 shrink-0" />
                <span>Interface</span>
              </div>

              <div className="premium-chip">
                <Compass className="w-4 h-4 shrink-0" />
                <span>Strategy</span>
              </div>
            </div>
          </div>

          {/* Subtitle Label */}
          <span className="font-script text-xl md:text-2xl text-text-secondary/65 mt-16 select-none">
            (Why clients love Agero)
          </span>

          {/* Giant Outline Title */}
          <div className="w-full text-center relative mt-6 select-none overflow-hidden h-24 md:h-36 flex items-end justify-center pointer-events-none">
            <span 
              className="text-7xl sm:text-8xl md:text-[10rem] font-sans font-black text-transparent tracking-tighter uppercase leading-none transform translate-y-4 md:translate-y-8 opacity-10 dark:opacity-15 text-text-primary"
              style={{ WebkitTextStroke: "2px currentColor" }}
            >
              Testimonials
            </span>
          </div>
        </section>

        {/* Testimonials (Draggable Notes) */}
        <Testimonials />

        {/* About / Timeline Section */}
        <section id="about">
          <About />
        </section>

        {/* Experience Chapters */}
        <section id="experience">
          <Experience />
        </section>

        {/* Interactive Orbiting Skills Universe */}
        <DesignUniverse />

        {/* Featured Case Studies */}
        <section id="works">
          <FeaturedWork />
        </section>

        {/* Mechanical CAD 3D Interaction */}
        <ThreeDWorkshop />

        {/* Design Process */}
        <DesignProcess />

        {/* Achievements */}
        <Achievements />

        {/* Toolbox Inventory */}
        <Toolbox />

        {/* Contact Footer */}
        <section id="projects">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
