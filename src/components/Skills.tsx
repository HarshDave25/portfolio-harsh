import { Wand2, Palette, Code, Layers, Zap, Sparkles } from "lucide-react";

const skills = [
  { name: "Figma", icon: Layers, level: "Master" },
  { name: "Framer", icon: Zap, level: "Advanced" },
  { name: "Photoshop", icon: Palette, level: "Advanced" },
  { name: "Corel Draw", icon: Sparkles, level: "Intermediate" },
  { name: "React", icon: Code, level: "Intermediate" },
  { name: "UI/UX Design", icon: Wand2, level: "Master" },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-3 sm:gap-4 mb-10 text-center">
          <Wand2
            className="text-treasure animate-float"
            size={28}
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-pixel glow-text">
            Magic Spells
          </h2>
        </div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="pixel-border bg-card/40 backdrop-blur-sm p-3 sm:p-4 md:p-6 
                           flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-center
                           hover:bg-card/60 hover:scale-[1.03] transition-all duration-300 ease-out
                           active:scale-95"
              >
                <Icon
                  className="text-treasure group-hover:animate-float"
                  size={24}
                />
                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-[10px] xs:text-xs sm:text-sm font-pixel">
                    {skill.name}
                  </p>
                  <p className="text-[9px] sm:text-xs text-primary opacity-80">
                    {skill.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Quote */}
        <div className="mt-10 sm:mt-12 pixel-border bg-muted/20 p-3 sm:p-4 md:p-6 text-center rounded-lg">
          <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
            “A true wizard never stops learning new spells. Currently mastering the ancient art of React development...”
          </p>
        </div>
      </div>
    </section>
  );
};
