"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  [
    // Base styles
    "inline-flex items-center justify-center rounded-md font-medium transition-all select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",

    // Touch-friendly area
    "touch-manipulation active:scale-95",

    // Smooth hover and active states
    "hover:brightness-110 active:brightness-95",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-foreground hover:bg-primary/10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        pixel:
          "pixel-border bg-card text-foreground hover:bg-card/80 data-[state=on]:bg-treasure data-[state=on]:text-black shadow-[3px_3px_0_#000]",
      },
      size: {
        default: "h-10 w-10 sm:h-10 sm:w-10",
        sm: "h-9 w-9 sm:h-9 sm:w-9",
        lg: "h-12 w-12 sm:h-12 sm:w-12",
        wide: "px-4 py-2 text-sm sm:px-6 sm:py-3", // for label toggles
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
