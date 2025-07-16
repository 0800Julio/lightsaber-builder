// components/MagnifierImage.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface MagnifierImageProps {
  src: string;
  alt: string;
}

export default function MagnifierImage({ src, alt }: MagnifierImageProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className=""
      />

      {isHovering && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-white"
          style={{
            width: 150,
            height: 150,
            left: `calc(${position.x}% - 75px)`,
            top: `calc(${position.y}% - 75px)`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1000% 1000%',
            backgroundPosition: `${position.x}% ${position.y}%`,
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
}
