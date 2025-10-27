import { Wand2, Palette, Code, Layers, Zap, Sparkles } from "lucide-react";

const skills = [
  { name: "Figma", icon: Layers, level: "Master" },
  { name: "Framer", icon: Zap, level: "Advanced" },
  { name: "Photoshop", icon: Palette, level: "Master" },
  { name: "Corel Draw", icon: Sparkles, level: "Advanced" },
  { name: "React", icon: Code, level: "Beginner" },
  { name: "UI/UX Design", icon: Wand2, level: "Master" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Wand2 className="text-treasure animate-float" size={32} />
          <h2 className="text-xl md:text-2xl font-pixel glow-text">Magic Spells</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="pixel-border bg-card/50 backdrop-blur-sm p-6 
                         flex flex-col items-center gap-4 text-center
                         hover:bg-card/70 hover:scale-110 transition-all duration-300
                         group"
              >
                <Icon 
                  className="text-treasure group-hover:animate-float" 
                  size={32} 
                />
                <div className="space-y-1">
                  <p className="text-xs font-pixel">{skill.name}</p>
                  <p className="text-xs text-primary">{skill.level}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pixel-border bg-muted/20 p-6 text-center">
          <p className="text-xs text-muted-foreground">
            "A true wizard never stops learning new spells. Currently mastering the ancient art of React development..."
          </p>
        </div>
      </div>
    </section>
  );
};
