import React, { useEffect, useRef } from "react";

export const PixelDragon: React.FC = () => {
  const dragonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    if (dragonRef.current) {
      dragonRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={dragonRef}
      className="tenor-gif-embed absolute bottom-8 left-8 w-40 md:w-56 opacity-90"
      data-postid="17728626"
      data-share-method="host"
      data-aspect-ratio="2.17687"
      data-width="100%"
    >
      <a href="https://tenor.com/view/monster-hunter-rathalos-pixel-art-fireball-dragon-gif-17728626">
        Monster Hunter Rathalos Sticker
      </a>
      from{" "}
      <a href="https://tenor.com/search/monster+hunter-stickers">
        Monster Hunter Stickers
      </a>
    </div>
  );
};
