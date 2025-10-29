import React from "react";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";
import { PixelButton } from "./PixelButton";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 md:px-12 bg-card/20 text-center"
    >
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-pixel text-primary tracking-widest">
          Contact
        </h2>

        {/* Buttons Grid */}
        <div
          className="
            flex flex-col sm:flex-row sm:flex-wrap 
            justify-center items-center gap-4 sm:gap-6 md:gap-8
          "
        >
          {/* Resume Download */}
          <a
            href="/Harsh25.pdf"
            download
            aria-label="Download resume"
            className="inline-block"
          >
            <PixelButton
              className="
                group flex items-center justify-center gap-2 px-6 py-3 
                rounded-md text-white font-pixel text-sm sm:text-base
                bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400
                shadow-[3px_3px_0px_#000] 
                hover:shadow-[0px_0px_12px_#ff7b00]
                hover:scale-105 active:scale-95
                transition-all duration-200
              "
            >
              <Download
                size={18}
                className="group-hover:animate-bounce"
              />
              <span>Download Resume</span>
            </PixelButton>
          </a>

          {/* Email */}
          <a
            href="mailto:daveharsh252@gmail.com"
            aria-label="Send email"
            className="inline-block"
          >
            <PixelButton
              className="
                flex items-center justify-center gap-2 p-3 sm:p-4 rounded-full
                bg-primary/20 hover:bg-primary/40 
                transition transform hover:scale-110
              "
            >
              <Mail size={20} />
            </PixelButton>
          </a>

          {/* Phone */}
          <a
            href="tel:9325144427"
            aria-label="Call phone"
            className="inline-block"
          >
            <PixelButton
              className="
                flex items-center justify-center gap-2 p-3 sm:p-4 rounded-full
                bg-primary/20 hover:bg-primary/40 
                transition transform hover:scale-110
              "
            >
              <Phone size={20} />
            </PixelButton>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/harsh-dave-807508221"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn"
            className="inline-block"
          >
            <PixelButton
              className="
                flex items-center justify-center gap-2 p-3 sm:p-4 rounded-full
                bg-primary/20 hover:bg-primary/40 
                transition transform hover:scale-110
              "
            >
              <Linkedin size={20} />
            </PixelButton>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/HarshDave25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub"
            className="inline-block"
          >
            <PixelButton
              className="
                flex items-center justify-center gap-2 p-3 sm:p-4 rounded-full
                bg-primary/20 hover:bg-primary/40 
                transition transform hover:scale-110
              "
            >
              <Github size={20} />
            </PixelButton>
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-xs sm:text-sm text-muted-foreground font-pixel mt-4">
          Available for freelance work & collaborations ✨
        </p>
      </div>
    </section>
  );
};

export default Contact;
