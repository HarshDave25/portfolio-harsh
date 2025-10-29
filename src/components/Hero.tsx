import { Scroll } from "lucide-react";
import { PixelButton } from "./PixelButton";
import heroDungeon from "/hero-dungeon.png";
import pixelHarsh from "/pixel-harsh.png";

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
          filter: "brightness(0.4)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 space-y-6 md:space-y-8 animate-fade-in w-full max-w-2xl">
        <div className="inline-block pixel-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 w-[90%] sm:w-auto">
          
          {/* Pixel Character */}
          <div className="flex justify-center mb-2 md:mb-4">
            <img
              src={pixelHarsh}
              alt="Pixel Harsh"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 animate-float"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* Scroll Icon */}
          <Scroll
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-treasure animate-float"
            style={{ animationDelay: "0.3s" }}
          />

          {/* Name */}
          <h1 className="text-lg sm:text-2xl md:text-4xl font-pixel glow-text-white leading-tight">
            Harsh Bharat Dave
          </h1>

          {/* Title & Description */}
          <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2">
            <p className="text-xs sm:text-sm md:text-base text-treasure">
              Level 23 UI/UX Designer
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground max-w-xs sm:max-w-md text-center leading-relaxed">
              Quest Giver • Creative Wizard
            </p>
          </div>

          {/* Button */}
          <div className="pt-3 md:pt-4">
            <PixelButton
              variant="quest"
              onClick={scrollToAbout}
              className="w-full sm:w-auto text-xs sm:text-sm"
            >
              ⚔️ Start Quest
            </PixelButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground animate-bounce mt-2 sm:mt-4">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
};
