import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "quest" | "treasure" | "spell";
  children: ReactNode;
}

export const PixelButton = ({ 
  variant = "quest", 
  children, 
  className,
  ...props 
}: PixelButtonProps) => {
  const variants = {
    quest: "bg-primary hover:bg-primary/80 text-foreground pixel-border",
    treasure: "bg-secondary hover:bg-secondary/80 text-secondary-foreground pixel-border-gold",
    spell: "bg-card hover:bg-card/80 text-card-foreground pixel-border",
  };

  return (
    <button
      className={cn(
        "px-6 py-3 font-pixel text-xs transition-all duration-300",
        "hover:scale-105 hover:animate-glow-pulse",
        "active:scale-95",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
