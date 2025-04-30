import React, { useState, useEffect } from "react";
import HeartIcon from "./HeartIcon";

interface LoveMessageProps {
  message: string;
}

const LoveMessage: React.FC<LoveMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`flex flex-col items-center transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <HeartIcon size={120} className="text-love animate-heartbeat mb-6" />
      
      <h1 className="text-6xl md:text-7xl font-bold text-love mb-4">
        {message}
      </h1>
      
      <p className="text-xl text-love-dark mt-4 text-center max-w-md">
        Каждый день с тобой наполнен счастьем и радостью. Ты мое всё.
      </p>
    </div>
  );
};

export default LoveMessage;
