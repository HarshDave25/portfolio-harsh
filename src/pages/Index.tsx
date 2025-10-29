import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { SectionDivider } from "@/components/SectionDivider";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect Mobile Screen Size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div
      className={`
        relative min-h-screen overflow-x-hidden 
        bg-gradient-to-b from-[hsl(210_54%_8%)] to-[hsl(210_50%_5%)]
        ${isMobile ? "pt-4 space-y-16" : "pt-8 space-y-24"}
      `}
    >
      {/* ✨ Background Particles */}
      <FloatingParticles />

      {/* 🏠 Hero Section */}
      <Hero />
      <SectionDivider />

      {/* 👤 About */}
      <About />
      <SectionDivider />

      {/* 💼 Projects */}
      <Projects />
      <SectionDivider />

      {/* 🧩 Experience */}
      <Experience />
      <SectionDivider />

      {/* ⚔️ Skills */}
      <Skills />
      <SectionDivider />

      {/* 📞 Contact */}
      <Contact />

      {/* 🪶 Footer */}
      <Footer />
    </div>
  );
};

export default Index;
