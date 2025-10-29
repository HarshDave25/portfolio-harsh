import { BookOpen } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="
        py-10 sm:py-14 md:py-20
        px-4 sm:px-6 md:px-8
        scroll-mt-20
      "
    >
      <div className="max-w-3xl md:max-w-4xl mx-auto">
        {/* Title */}
        <div
          className="
            flex flex-col sm:flex-row 
            items-center sm:items-end 
            justify-center sm:justify-start
            gap-2 sm:gap-4 
            mb-8 sm:mb-10
            text-center sm:text-left
          "
        >
          <BookOpen className="text-treasure w-8 h-8 sm:w-10 sm:h-10 animate-float" />
          <h2
            className="
              text-xl sm:text-2xl md:text-3xl 
              font-pixel glow-text tracking-wide
              leading-tight
            "
          >
            Hero’s Log
          </h2>
        </div>

        {/* Content Card */}
        <div
          className="
            pixel-border 
            bg-card/60 backdrop-blur-md 
            p-5 sm:p-8 md:p-10 
            rounded-lg 
            space-y-5 sm:space-y-6
            shadow-lg
          "
        >
          <div
            className="
              text-xs sm:text-sm md:text-base 
              leading-relaxed text-foreground/90
              space-y-4 text-center sm:text-left
            "
          >
            <p>
              Greetings, traveler! I am{" "}
              <span className="text-treasure font-bold">
                Harsh Bharat Dave
              </span>
              , a Level 23 UI/UX Designer who has mastered the ancient arts of
              combining imagination, storytelling, and usability.
            </p>

            <p>
              My quest began in the mystical lands of design, where I learned to
              forge pixel-perfect interfaces and craft experiences that guide
              users through their own adventures. Armed with the powers of
              <span className="text-treasure"> Figma</span>,{" "}
              <span className="text-treasure">Framer</span>, and the{" "}
              <span className="text-treasure">React spell book</span>, I create
              portals (apps) that are both beautiful and functional.
            </p>

            <p>
              Whether it’s designing the next legendary interface or coding
              magical prototypes, I approach every challenge with creativity and
              determination. My journey as a Product Designer & Developer is
              just beginning, but the path ahead is filled with exciting quests.
            </p>

            {/* Divider Quote */}
            <div
              className="
                pt-4 sm:pt-6 
                border-t border-primary/30
                text-center sm:text-left
              "
            >
              <p
                className="
                  text-treasure 
                  text-[11px] sm:text-xs md:text-sm 
                  italic leading-snug
                "
              >
                💫 “Design is not just what it looks like and feels like. Design
                is how it works.”  
                <br />– Steve Jobs (The Grand Wizard of Innovation)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
