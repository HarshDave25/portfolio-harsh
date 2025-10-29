import { Swords } from "lucide-react";

export const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 my-10 sm:my-16 px-4">
      {/* Left Divider Line */}
      <div className="h-0.5 w-full max-w-[80px] sm:max-w-xs bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Center Icon */}
      <Swords
        className="text-primary animate-float"
        size={28} // smaller icon for mobile
      />

      {/* Right Divider Line */}
      <div className="h-0.5 w-full max-w-[80px] sm:max-w-xs bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};
