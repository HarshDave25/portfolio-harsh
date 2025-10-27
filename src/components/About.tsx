import { BookOpen } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <BookOpen className="text-treasure" size={32} />
          <h2 className="text-xl md:text-2xl font-pixel glow-text">Hero's Log</h2>
        </div>

        <div className="pixel-border bg-card/50 backdrop-blur-sm p-8 space-y-6">
          <div className="space-y-4 text-sm leading-relaxed">
            <p className="text-foreground/90">
              Greetings, traveler! I am <span className="text-treasure font-bold">Harsh Bharat Dave</span>, 
              a Level 23 UI/UX Designer who has mastered the ancient arts of combining imagination, 
              storytelling, and usability.
            </p>
            
            <p className="text-foreground/90">
              My quest began in the mystical lands of design, where I learned to forge pixel-perfect 
              interfaces and craft experiences that guide users through their own adventures. Armed with 
              the powers of Figma, Framer, and the React spell book, I create portals (apps) that are 
              both beautiful and functional.
            </p>

            <p className="text-foreground/90">
              Whether it's designing the next legendary interface or coding magical prototypes, I approach 
              every challenge with creativity and determination. My journey as an Product Designer & Developer is just 
              beginning, but the path ahead is filled with exciting quests.
            </p>

            <div className="pt-4 border-t border-primary/30">
              <p className="text-treasure text-xs">
                💫 "Design is not just what it looks like and feels like. Design is how it works." 
                - Steve Jobs (The Grand Wizard of Innovation)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
