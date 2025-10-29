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
    <section id="skills" className="py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-3 sm:gap-4 mb-10 text-center sm:text-left">
          <Wand2 className="text-treasure animate-float" size={32} />
          <h2 className="text-lg sm:text-xl md:text-2xl font-pixel glow-text">
            Magic Spells
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="pixel-border bg-card/50 backdrop-blur-sm p-4 sm:p-6 
                           flex flex-col items-center justify-center gap-2 sm:gap-4 text-center
                           hover:bg-card/70 hover:scale-105 transition-all duration-300
                           group"
              >
                <Icon
                  className="text-treasure group-hover:animate-float"
                  size={28}
                />
                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-[10px] sm:text-xs md:text-sm font-pixel">{skill.name}</p>
                  <p className="text-[10px] sm:text-xs text-primary">{skill.level}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Quote */}
        <div className="mt-10 sm:mt-12 pixel-border bg-muted/20 p-4 sm:p-6 text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
            “A true wizard never stops learning new spells. Currently mastering the ancient art of React development...”
          </p>
        </div>
      </div>
    </section>
  );
};
