import { Trophy } from "lucide-react";
import React from "react";

interface Project {
  title: string;
  description: string;
  type: string;
  tags: string[];
  image: string;
  size: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Financial Website",
    description: "A Financial & Stock Questioning Website.",
    type: "Web Application",
    tags: ["Angular", "Angular CLI", "Angular 18", "Figma", "User Research"],
    image: "/finance.png",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Social Media Designs",
    description: "Designs that appeal to audiences and hit well.",
    type: "Social Media Design",
    tags: ["Graphic Design", "Marketing", "Visual Design"],
    image: "/Insta.png",
    size: "md:col-span-1 md:row-span-2",
    link: "https://www.instagram.com/p/DPLQmI2kg9c/?igsh=b2F2ZWxtYXN4ZnJu",
  },
  {
    title: "Social Media Reels",
    description: "Creative reel and carousel design for various brands.",
    type: "Content Design",
    tags: ["Motion Design", "Branding", "Photoshop"],
    size: "md:col-span-1 md:row-span-1",
    image: "/Cloudy2.jpg",
    link: "https://www.instagram.com/reel/DK1u2_2pxK1/?igsh=eWtzOGRvM2owYmsw",
  },
  {
    title: "Mockups",
    description: "Branding projects.",
    type: "Brand Design",
    tags: ["Logo", "Identity", "Illustration"],
    image: "/Tshirt 3.jpeg",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "UX Case Study",
    description: "In-depth case study showcasing UX problem solving.",
    type: "Case Study",
    tags: ["Research", "Wireframing", "Prototyping"],
    image: "/Interface.png",
    size: "md:col-span-1 md:row-span-1",
  },
    {
    title: "Dog Boarding Website",
    description: "A Colourful and Playful Dog Boarding Website.",
    type: "Case Studies",
    tags: ["Framer", "Wireframing", "Prototyping"],
    image: "/Tail Town.png",
    size: "md:col-span-2 md:row-span-1",
    link: "https://tailtown.framer.website/",
  },
];

const topSliderImages = [
  "/slider1.jpeg",
  "/slider2.jpeg",
  "/Me 00.png",
  "/slider4.jpeg",
  "/Lemon2.png",
  "/slider6.jpeg",
];

const bottomSliderImages = [
  "/slider7.jpeg",
  "/slider8.jpeg",
  "/slider9.jpeg",
  "/slider10.jpeg",
  "/Me 0.png",
  "/Design.jpeg",
  "/Dave 2.png",
  "/Orange.png",
  "/Me 00.png",
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-4 mb-10 sm:mb-14 text-center sm:text-left">
          <Trophy className="text-treasure animate-float w-8 h-8 sm:w-10 sm:h-10" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-pixel glow-text">
            🗺️ Completed Quests
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[280px] gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden pixel-border-gold bg-card/60 backdrop-blur-sm hover:scale-[1.03] transition-all duration-300 ${project.size}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all flex flex-col justify-center items-center text-center text-white p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-pixel mb-2 text-treasure">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] sm:text-[11px] px-2 py-1 bg-muted/50 text-muted-foreground border border-primary/30 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-3 sm:px-4 py-2 text-black font-pixel border-2 border-black shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-transform hover:shadow-[2px_2px_0_#000] ${
                      project.type === "Social Media Design" ||
                      project.title === "Social Media Reels"
                        ? "bg-pink-400 hover:bg-pink-500"
                        : "bg-yellow-400 hover:bg-yellow-500"
                    }`}
                  >
                    {project.title === "Social Media Reels"
                      ? "📹 View Reel"
                      : project.type === "Social Media Design"
                      ? "📸 View Post"
                      : "🐾 View Website"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dual Carousel */}
        <div className="mt-14 sm:mt-20 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-pixel mb-6 text-treasure">
            More Adventures Ahead
          </h3>

          {/* Top slider */}
          <div className="overflow-hidden relative group mb-6 touch-pan-x">
            <div className="flex gap-4 sm:gap-6 animate-scroll-left group-hover:[animation-play-state:paused]">
              {topSliderImages.concat(topSliderImages).map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[140px] sm:w-[180px] md:w-[240px] h-[200px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`top-slide-${i}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom slider */}
          <div className="overflow-hidden relative group touch-pan-x">
            <div className="flex gap-4 sm:gap-6 animate-scroll-right group-hover:[animation-play-state:paused]">
              {bottomSliderImages.concat(bottomSliderImages).map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[140px] sm:w-[180px] md:w-[240px] h-[200px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`bottom-slide-${i}`}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          width: 200%;
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          width: 200%;
          animation: scroll-right 70s linear infinite;
        }
      `}</style>
    </section>
  );
};
