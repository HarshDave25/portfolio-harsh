import { useState } from "react";
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

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      
      <Hero />
      <SectionDivider />
      
      <About />
      <SectionDivider />
      
      <Projects />
      <SectionDivider />
      
      <Experience />
      <SectionDivider />
      
      <Skills />
      <SectionDivider />
      
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Index;
