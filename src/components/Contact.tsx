// src/components/Contact.tsx
import React from "react";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";
import { PixelButton } from "./PixelButton";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-pixel text-primary">Contact</h2>

        {/* Icon Buttons Row */}
        <div className="flex justify-center flex-wrap gap-4">
          {/* Resume Button — upgraded with arcade look */}
          <a
            href="/Harsh25.pdf"
            download
            aria-label="Download resume"
            className="inline-block"
          >
            <PixelButton
              className="group flex items-center gap-2 px-6 py-3 rounded-md 
              bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 
              text-white font-pixel text-sm shadow-[3px_3px_0px_#000] 
              hover:shadow-[0px_0px_12px_#ff7b00] hover:scale-105 
              active:scale-95 transition-all duration-200"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </PixelButton>
          </a>

          {/* Email */}
          <a href="mailto:daveharsh252@gmail.com" aria-label="Send email" className="inline-block">
            <PixelButton className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition">
              <Mail size={18} />
            </PixelButton>
          </a>

          {/* Phone */}
          <a href="tel:9325144427" aria-label="Call phone" className="inline-block">
            <PixelButton className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition">
              <Phone size={18} />
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
            <PixelButton className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition">
              <Linkedin size={18} />
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
            <PixelButton className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition">
              <Github size={18} />
            </PixelButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
