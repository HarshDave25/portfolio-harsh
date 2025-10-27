import { MessageSquare, Mail, Linkedin, Github } from "lucide-react";
import { PixelButton } from "./PixelButton";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <MessageSquare className="text-primary animate-float" size={32} />
          <h2 className="text-xl md:text-2xl font-pixel glow-text">Speak to the Oracle</h2>
        </div>

        <div className="pixel-border bg-card/80 backdrop-blur-sm p-8 space-y-6">
          <div className="space-y-4 text-center">
            <p className="text-sm text-foreground/90">
              Seek guidance? Have a quest to propose? The Oracle awaits your message...
            </p>

            <div className="pt-4 space-y-3">
              <a 
                href="mailto:harshbharatdave@example.com"
                className="flex items-center justify-center gap-3 pixel-border bg-muted/30 p-4 
                         hover:bg-muted/50 transition-all duration-300 group"
              >
                <Mail className="text-treasure group-hover:animate-float" size={20} />
                <span className="text-xs">harshbharatdave@example.com</span>
              </a>

              <div className="flex justify-center gap-4 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-border bg-muted/30 p-4 hover:bg-muted/50 
                           hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="text-primary" size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-border bg-muted/30 p-4 hover:bg-muted/50 
                           hover:scale-110 transition-all duration-300"
                >
                  <Github className="text-primary" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-primary/30">
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs text-treasure">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-input border-2 border-primary/50 
                           text-foreground text-xs focus:border-primary focus:outline-none
                           transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-treasure">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-input border-2 border-primary/50 
                           text-foreground text-xs focus:border-primary focus:outline-none
                           transition-colors resize-none"
                  placeholder="Share your quest..."
                />
              </div>

              <PixelButton type="submit" variant="treasure" className="w-full">
                📜 Send Message
              </PixelButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
