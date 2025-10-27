import { Swords } from "lucide-react";

export const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-16">
      <div className="h-0.5 w-full max-w-xs bg-gradient-to-r from-transparent via-primary to-transparent" />
      <Swords className="text-primary animate-float" size={32} />
      <div className="h-0.5 w-full max-w-xs bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};
