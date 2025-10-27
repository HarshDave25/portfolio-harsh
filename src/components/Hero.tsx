import { Scroll } from "lucide-react";
import { PixelButton } from "./PixelButton";
import heroDungeon from "@/assets/hero-dungeon.png";
import pixelHarsh from "@/assets/pixel-harsh.png";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroDungeon})`,
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 space-y-8 animate-fade-in">
        <div className="inline-block pixel-border bg-card/80 backdrop-blur-sm p-8 space-y-6">
          {/* Pixel character avatar */}
          <div className="flex justify-center mb-4">
            <img
              src={pixelHarsh}
              alt="Pixel Harsh"
              className="w-32 h-32 object-contain animate-float"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          
          <Scroll className="w-12 h-12 mx-auto text-treasure animate-float" style={{ animationDelay: "0.3s" }} />
          
          <h1 className="text-2xl md:text-4xl font-pixel glow-text-white">
            Harsh Bharat Dave
          </h1>
          
          <div className="flex flex-col items-center justify-center space-y-2">
  <p className="text-xs md:text-sm text-treasure">
    Level 23 UI/UX Designer
  </p>
  <p className="text-xs md:text-sm text-muted-foreground max-w-md text-center">
    Quest Giver • Creative Wizard
  </p>
</div>


          <div className="pt-4">
            <PixelButton variant="quest" onClick={scrollToAbout}>
              ⚔️ Start Quest
            </PixelButton>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground animate-bounce">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
};
