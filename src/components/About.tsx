import { BookOpen } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl md:max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end sm:gap-4 gap-2 mb-6 sm:mb-8 text-center sm:text-left">
          <BookOpen className="text-treasure w-8 h-8 sm:w-10 sm:h-10" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-pixel glow-text">
            Hero’s Log
          </h2>
        </div>

        {/* Content Card */}
        <div className="pixel-border bg-card/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-center sm:text-left">
            <p className="text-foreground/90">
              Greetings, traveler! I am{" "}
              <span className="text-treasure font-bold">Harsh Bharat Dave</span>, a Level 23 UI/UX Designer
              who has mastered the ancient arts of combining imagination, storytelling, and usability.
            </p>

            <p className="text-foreground/90">
              My quest began in the mystical lands of design, where I learned to forge pixel-perfect interfaces
              and craft experiences that guide users through their own adventures. Armed with the powers of Figma,
              Framer, and the React spell book, I create portals (apps) that are both beautiful and functional.
            </p>

            <p className="text-foreground/90">
              Whether it’s designing the next legendary interface or coding magical prototypes, I approach every
              challenge with creativity and determination. My journey as a Product Designer & Developer is just
              beginning, but the path ahead is filled with exciting quests.
            </p>

            <div className="pt-3 sm:pt-4 border-t border-primary/30 text-center sm:text-left">
              <p className="text-treasure text-[10px] sm:text-xs">
                💫 “Design is not just what it looks like and feels like. Design is how it works.”  
                – Steve Jobs (The Grand Wizard of Innovation)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
