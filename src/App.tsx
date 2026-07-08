import { useEffect } from "react";
import Lenis from "lenis";

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

        {/* Transition "Hello" Greeting (from screenshot) */}
        <div className="w-full flex justify-center py-8 bg-bg-primary">
          <span className="font-script text-5xl md:text-6xl text-accent-red transform -rotate-3 select-none">
            Hello
          </span>
        </div>

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

        {/* Testimonials (Draggable Notes) */}
        <Testimonials />

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
