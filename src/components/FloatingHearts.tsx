import React from "react";
import HeartIcon from "./HeartIcon";

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((i) => {
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 6 + Math.random() * 10;
        const randomSize = 15 + Math.random() * 25;
        const opacity = 0.3 + Math.random() * 0.4;
        
        return (
          <HeartIcon
            key={i}
            size={randomSize}
            className="absolute bottom-0 text-love animate-float"
            style={{
              left: `${randomLeft}%`,
              animationDelay: `${randomDelay}s`,
              animationDuration: `${randomDuration}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingHearts;
