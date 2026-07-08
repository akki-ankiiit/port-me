import { useEffect } from "react";
import Lenis from "lenis";
import { Globe, Palette, Layout, Compass } from "lucide-react";

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
        <section className="w-full bg-bg-primary pt-20 pb-8 px-4 flex flex-col items-center justify-center relative overflow-hidden">
          {/* (hello) */}
          <span className="font-script text-4xl md:text-5xl text-accent-orange transform -rotate-3 select-none mb-6">
            (hello)
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black text-text-primary tracking-tight text-center leading-[1.25] max-w-5xl px-4">
            We help fast moving digital startups<br />
            launch sharper <span className="text-text-secondary/40 dark:text-text-secondary/50">brands and websites —</span><br />
            with clarity, speed, <span className="text-text-secondary/40 dark:text-text-secondary/50">and no drama.</span>
          </h2>

          {/* Chips Grid */}
          <div className="flex flex-col gap-3 mt-12 items-center justify-center w-full max-w-3xl px-4">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#1E1E20]/75 dark:bg-[#151517]/85 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 hover:bg-[#1E1E20] transition-all duration-300 cursor-pointer">
                {/* 4-point star */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0 text-accent-orange">
                  <path d="M12 0c.5 6 5.5 11 11.5 11.5-.5.5-5.5 5.5-11.5 11.5-.5-.5-5.5-5.5-11.5-11.5C6 11.5 11 6.5 12 0z" />
                </svg>
                <span>Branding</span>
              </div>

              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#1E1E20]/75 dark:bg-[#151517]/85 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 hover:bg-[#1E1E20] transition-all duration-300 cursor-pointer">
                <Globe className="w-4 h-4 text-accent-orange shrink-0" />
                <span>Logo</span>
              </div>

              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#1E1E20]/75 dark:bg-[#151517]/85 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 hover:bg-[#1E1E20] transition-all duration-300 cursor-pointer">
                <Globe className="w-4 h-4 text-accent-orange shrink-0" />
                <span>Website</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#1E1E20]/75 dark:bg-[#151517]/85 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 hover:bg-[#1E1E20] transition-all duration-300 cursor-pointer">
                <Palette className="w-4 h-4 text-accent-orange shrink-0" />
                <span>Illustration</span>
              </div>

              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#1E1E20]/75 dark:bg-[#151517]/85 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 hover:bg-[#1E1E20] transition-all duration-300 cursor-pointer">
                <Layout className="w-4 h-4 text-accent-orange shrink-0" />
                <span>Interface</span>
              </div>

              <div className="flex items-center gap-2 px-5 py-2.5 bg-[#1E1E20]/75 dark:bg-[#151517]/85 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-semibold shadow-lg hover:scale-105 hover:bg-[#1E1E20] transition-all duration-300 cursor-pointer">
                <Compass className="w-4 h-4 text-accent-orange shrink-0" />
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
