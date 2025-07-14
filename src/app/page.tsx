'use client';

import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 
        className={`text-4xl font-bold cursor-pointer transition-all duration-300 ease-in-out transform ${
          isHovered 
            ? 'text-blue-600 scale-110 drop-shadow-lg' 
            : 'text-gray-900'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hello Devin
      </h1>
    </div>
  );
}
