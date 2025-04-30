import React, { useEffect, useState } from "react";
import LoveMessage from "../components/LoveMessage";
import FloatingHearts from "../components/FloatingHearts";
import HeartIcon from "../components/HeartIcon";

const Index: React.FC = () => {
  const [showDate, setShowDate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDate(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-love-light to-white px-4">
      <FloatingHearts />
      
      <div className="z-10 text-center">
        <LoveMessage message="Я люблю тебя" />
        
        <div className={`mt-12 transition-all duration-1000 ease-in-out ${showDate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg">
            <HeartIcon className="text-love mr-2" size={20} />
            <span className="text-love font-medium">
              Навсегда твоя
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-center w-full z-10">
        <p className="text-love-dark text-sm">30 апреля 2025</p>
      </div>
    </div>
  );
};

export default Index;
