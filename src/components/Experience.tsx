import { Flag } from "lucide-react";

const experiences = [
  {
    title: "Inflow Influencers LLP",
    role: "UI/UX Designer",
    period: "2023 - Present",
    achievements: [
      "Led design initiatives for influencer marketing platform",
      "Created cohesive brand identity and design systems",
      "Collaborated with cross-functional teams to deliver user-centered solutions",
    ],
  },
  {
    title: "Freelance Projects",
    role: "Designer & Developer",
    period: "2022 - 2023",
    achievements: [
      "Delivered custom UI/UX solutions for various clients",
      "Specialized in mobile app design and prototyping",
      "Managed end-to-end project workflows",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Flag className="text-primary" size={32} />
          <h2 className="text-xl md:text-2xl font-pixel glow-text">Guilds & Allies</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="pixel-border bg-card/50 backdrop-blur-sm p-6 space-y-4
                       hover:translate-x-2 transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-sm md:text-base font-pixel text-treasure">
                  {exp.title}
                </h3>
                <span className="text-xs text-primary">{exp.period}</span>
              </div>

              <p className="text-xs text-foreground/90">{exp.role}</p>

              <ul className="space-y-2 text-xs text-foreground/80">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-treasure">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
