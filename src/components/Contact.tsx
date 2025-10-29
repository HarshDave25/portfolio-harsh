import React from "react";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";
import { PixelButton } from "./PixelButton";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-card/20">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-pixel text-primary tracking-wide">
          Contact
        </h2>

        {/* Icon Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-4 sm:gap-5 md:gap-6">
          
          {/* Resume Button */}
          <a
            href="/Harsh25.pdf"
            download
            aria-label="Download resume"
            className="w-full sm:w-auto"
          >
            <PixelButton
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-md
              bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400
              text-white font-pixel text-sm shadow-[3px_3px_0px_#000]
              hover:shadow-[0px_0px_12px_#ff7b00] hover:scale-105 active:scale-95
              transition-all duration-200"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </PixelButton>
          </a>

          {/* Contact Icons */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
            <a
              href="mailto:daveharsh252@gmail.com"
              aria-label="Send email"
              className="inline-block"
            >
              <PixelButton className="p-3 sm:p-4 rounded-full bg-primary/20 hover:bg-primary/40 transition">
                <Mail size={18} />
              </PixelButton>
            </a>

            <a
              href="tel:9325144427"
              aria-label="Call phone"
              className="inline-block"
            >
              <PixelButton className="p-3 sm:p-4 rounded-full bg-primary/20 hover:bg-primary/40 transition">
                <Phone size={18} />
              </PixelButton>
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-dave-807508221"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn"
              className="inline-block"
            >
              <PixelButton className="p-3 sm:p-4 rounded-full bg-primary/20 hover:bg-primary/40 transition">
                <Linkedin size={18} />
              </PixelButton>
            </a>

            <a
              href="https://github.com/HarshDave25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub"
              className="inline-block"
            >
              <PixelButton className="p-3 sm:p-4 rounded-full bg-primary/20 hover:bg-primary/40 transition">
                <Github size={18} />
              </PixelButton>
            </a>
          </div>
        </div>

        {/* Subtext (optional aesthetic addition) */}
        <p className="text-[11px] sm:text-xs text-muted-foreground mt-6">
          “Let's connect and create some magic together ✨”
        </p>
      </div>
    </section>
  );
};

export default Contact;
