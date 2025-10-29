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
    treasure:
      "bg-secondary hover:bg-secondary/80 text-secondary-foreground pixel-border-gold",
    spell: "bg-card hover:bg-card/80 text-card-foreground pixel-border",
  };

  return (
    <button
      className={cn(
        // base style
        "font-pixel transition-all duration-300 ease-out select-none",
        "active:scale-95 hover:scale-105 hover:animate-glow-pulse",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        // responsive padding & font sizing
        "px-4 py-2 text-[10px]",
        "sm:px-5 sm:py-2.5 sm:text-xs",
        "md:px-6 md:py-3 md:text-sm",
        "rounded-md",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
