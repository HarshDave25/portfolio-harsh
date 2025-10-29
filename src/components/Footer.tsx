import { Sword } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-primary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Left Section */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
            <Sword className="text-treasure w-4 h-4 sm:w-5 sm:h-5" />
            <span>© 2025 Harsh Bharat Dave</span>
          </div>

          {/* Middle Section */}
          <p className="text-xs sm:text-sm text-treasure order-first md:order-none">
            Keep Creating ⚔️
          </p>

          {/* Right Section */}
          <div className="text-xs sm:text-sm text-muted-foreground">
            Crafted with pixel-perfect precision
          </div>
        </div>
      </div>
    </footer>
  );
};
