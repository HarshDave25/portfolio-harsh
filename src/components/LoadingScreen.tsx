import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import pixelHarsh from "@/assets/pixel-harsh.png";

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

    // Slowly drink the coffee
    const coffeeInterval = setInterval(() => {
      setCoffeeLevel((prev) => {
        if (prev <= 0) {
          clearInterval(coffeeInterval);
          clearInterval(textInterval);
          setTimeout(() => onLoadingComplete(), 500);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-treasure rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 flex flex-col items-center gap-8 p-8">
        {/* Character drinking coffee */}
        <div className="relative pixel-border-gold bg-card/80 backdrop-blur-sm p-8">
          <img
            src={pixelHarsh}
            alt="Pixel Harsh"
            className="w-48 h-48 object-contain animate-float image-rendering-pixelated"
            style={{ imageRendering: "pixelated" }}
          />
          
          {/* Coffee mug positioned near character */}
          <div className="absolute bottom-8 right-8">
            <div className="relative">
              <Coffee 
                className="text-treasure animate-float" 
                size={48}
                style={{ animationDelay: "0.5s" }}
              />
              
              {/* Coffee level indicator */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-treasure opacity-60 transition-all duration-100"
                  style={{ height: `${coffeeLevel}%` }}
                />
              </div>
            </div>
          </div>

          {/* Steam effect */}
          {coffeeLevel > 0 && (
            <div className="absolute bottom-16 right-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-muted-foreground/30 rounded-full"
                  style={{
                    left: `${i * 8}px`,
                    animation: `float 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <p className="text-sm font-pixel text-treasure glow-text-gold animate-pulse">
            {loadingText}
          </p>
          
          {/* Progress bar */}
          <div className="w-64 h-4 pixel-border bg-card/50">
            <div
              className="h-full bg-gradient-to-r from-primary to-treasure transition-all duration-100"
              style={{ width: `${100 - coffeeLevel}%` }}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            {Math.round(100 - coffeeLevel)}% loaded
          </p>
        </div>
      </div>
    </div>
  );
};
