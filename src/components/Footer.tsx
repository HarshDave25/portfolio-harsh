import { Sword } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sword className="text-treasure" size={16} />
            <span>© 2025 Harsh Bharat Dave</span>
          </div>

          <p className="text-xs text-treasure">
            Keep Creating ⚔️
          </p>

          <div className="text-xs text-muted-foreground">
            Crafted with pixel perfect precision
          </div>
        </div>
      </div>
    </footer>
  );
};
