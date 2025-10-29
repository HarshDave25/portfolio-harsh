import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingParticles = () => {
  const [particleCount, setParticleCount] = useState(15);

  // Adjust number of particles based on screen width
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setParticleCount(8); // fewer for mobile
      else if (window.innerWidth < 1024) setParticleCount(12);
      else setParticleCount(15);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {[...Array(particleCount)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-treasure animate-sparkle opacity-70 sm:opacity-90"
          size={Math.random() * 12 + 8} // 8–20px range
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};
