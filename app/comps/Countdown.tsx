import React, { useState, useEffect } from 'react';


const CountdownTimer: React.FC = () => {
  const initialTime = 24 * 60 * 60;
  const [timeRemaining, setTimeRemaining] = useState<number>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="ml-[10px]">
      <p className="text-[40px]">{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;
