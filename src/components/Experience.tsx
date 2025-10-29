import { Flag } from "lucide-react";

const experiences = [
  {
    title: "UI/UX Designer — Inflow Influencers LLP",
    location: "Pune, Maharashtra, India (On-site)",
    period: "May 2025 – Oct 2025",
    achievements: [
      "Designed and developed intuitive, user-centered web and mobile interfaces.",
      "Collaborated on creative design projects improving product visuals and usability.",
      "Used Figma, Framer, and Webflow to craft modern layouts and responsive prototypes.",
      "Enhanced brand consistency and UI aesthetics across all platforms.",
    ],
  },
  {
    title: "Back End Developer — Conqt (Smart Procurement Software)",
    location: "Novena, Singapore (Remote)",
    period: "Jan 2025 – May 2025",
    achievements: [
      "Developed secure backend APIs using Node.js and Express.js.",
      "Integrated MongoDB and implemented JWT authentication for data security.",
      "Collaborated with frontend developers for efficient API performance.",
      "Gained hands-on experience in backend architecture and deployment.",
    ],
  },
  {
    title: "R&D Software Engineer — Wilo Group",
    location: "Hybrid",
    period: "Aug 2024 – Dec 2024",
    achievements: [
      "Contributed to Machine Health Monitoring System (Condition Monitoring) project.",
      "Worked on Python-based industrial IoT data collection and analysis modules.",
      "Developed algorithms for predictive maintenance using Linux environments.",
      "Applied academic research in real-world industrial automation systems.",
    ],
  },
  {
    title: "Technology Services Intern — BDO in India",
    location: "Pune, Maharashtra, India (On-site)",
    period: "Jul 2024 – Oct 2024",
    achievements: [
      "Developed internal web applications using AngularJS and Angular CLI.",
      "Improved UI components and optimized frontend data handling.",
      "Assisted in building scalable business process automation solutions.",
      "Collaborated in agile sprint-based development teams.",
    ],
  },
  {
    title: "Project Intern — Tata Consultancy Services (TCS)",
    location: "Pune, Maharashtra, India (Remote)",
    period: "Jun 2024 – Aug 2024",
    achievements: [
      "Worked on Cloud Computing and AWS-based project deployment.",
      "Developed and containerized Jenkins pipelines for CI/CD workflows.",
      "Learned infrastructure automation and DevOps fundamentals.",
      "Built foundational understanding of scalable cloud systems.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <Flag className="text-primary animate-pulse" size={32} />
          <h2 className="text-xl md:text-2xl font-pixel glow-text">Guilds & Allies — Timeline</h2>
        </div>

        {/* Pixel trail background */}
        <div className="absolute inset-0 opacity-10 bg-[url('/pixel-pattern.png')] bg-repeat"></div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/40 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pixel-border bg-card/60 backdrop-blur-sm p-6 transition-transform duration-300 hover:translate-x-2 hover:shadow-[0_0_15px_#00faff]"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#00faff] animate-pulse"></div>

              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-sm md:text-base font-pixel text-treasure">
                  {exp.title}
                </h3>
                <span className="text-xs text-primary font-mono">{exp.period}</span>
              </div>

              {/* Sub Info */}
              <p className="text-xs text-foreground/70 italic">{exp.location}</p>

              {/* Achievements List */}
              <ul className="space-y-2 mt-3 text-xs text-foreground/80">
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

      {/* Animated background effect (optional) */}
      <div className="absolute bottom-0 right-0 opacity-20 w-64 h-64 bg-[url('https://media.tenor.com/HRR8HnpYJ6AAAAAC/monster-hunter-rathalos.gif')] bg-contain bg-no-repeat"></div>
    </section>
  );
};
