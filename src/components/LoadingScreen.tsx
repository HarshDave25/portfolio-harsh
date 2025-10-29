import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import pixelHarsh from "/pixel-harsh.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [coffeeLevel, setCoffeeLevel] = useState(100);
  const [loadingText, setLoadingText] = useState("Preparing quest...");

  useEffect(() => {
    const texts = [
      "Preparing quest...",
      "Brewing creativity...",
      "Loading pixels...",
      "Summoning UI magic...",
      "Charging mana...",
      "Almost ready...",
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 800);

    const coffeeInterval = setInterval(() => {
      setCoffeeLevel((prev) => {
        if (prev <= 0) {
          clearInterval(coffeeInterval);
          clearInterval(textInterval);
          setTimeout(() => onLoadingComplete(), 600);
          return 0;
        }
        return prev - 2;
      });
    }, 50);

    return () => {
      clearInterval(coffeeInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Pixel Dungeon Background */}
      <div className="absolute inset-0 bg-[url('/pixel-dungeon.png')] bg-cover bg-center animate-slow-pan opacity-20"></div>

      {/* Floating XP Orbs */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-t from-primary to-treasure rounded-full blur-[1px] animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Loading Card */}
      <div className="relative z-10 flex flex-col items-center gap-8 p-8 text-center">
        <div className="relative pixel-border-gold bg-card/80 backdrop-blur-sm p-8 shadow-[0_0_30px_#00faff33]">
          <img
            src={pixelHarsh}
            alt="Pixel Harsh"
            className="w-48 h-48 md:w-56 md:h-56 animate-float image-rendering-pixelated drop-shadow-[0_0_10px_#00faff99]"
          />

          {/* Coffee Mug */}
          <div className="absolute bottom-8 right-8">
            <div className="relative">
              <Coffee
                className="text-treasure animate-float"
                size={48}
                style={{ animationDelay: "0.5s" }}
              />
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-treasure opacity-70 transition-all duration-150"
                  style={{ height: `${coffeeLevel}%` }}
                />
              </div>
            </div>
          </div>

          {/* Steam rising */}
          {coffeeLevel > 0 && (
            <div className="absolute bottom-16 right-10">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-treasure/40 rounded-full"
                  style={{
                    left: `${i * 6}px`,
                    animation: `steam 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <p className="text-sm font-pixel text-treasure glow-text-gold animate-pulse">
            {loadingText}
          </p>

          {/* Pixel Progress Bar */}
          <div className="w-64 h-4 pixel-border bg-card/60 mx-auto">
            <div
              className="h-full bg-gradient-to-r from-primary to-treasure transition-all duration-150"
              style={{ width: `${100 - coffeeLevel}%` }}
            />
          </div>

          <p className="text-xs text-muted-foreground font-pixel">
            {Math.round(100 - coffeeLevel)}% loaded
          </p>
        </div>
      </div>
    </div>
  );
};
