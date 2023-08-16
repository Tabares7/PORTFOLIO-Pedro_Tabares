import React, { useState, useEffect } from 'react';
import GitHub from './GitHub';

function AlternatingText() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10 relative">
      <div className={`absolute transition-transform duration-500 ${isVisible ? 'translate-x-0  opacity-100' : 'translate-x-1/2  opacity-0'}`}>
    
      </div>
      <div className={`absolute transition-transform duration-500 ${isVisible ? 'translate-x-0 opacity-0' : 'translate-x-1/2 opacity-100'}`}>
        Unete a mi github
      </div>
    </div>
  );
}

export default AlternatingText;
