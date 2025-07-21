'use client';

import React, { useState, useRef, useEffect } from 'react';

interface MagnifierImageProps {
  src: string;
  width?: number;
  height?: number;
  zoom?: number;
}

export default function MagnifierImage({
  src,
  width = 300,
  height = 600,
  zoom = 2,
}: MagnifierImageProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ width, height });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        setImgSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setMagnifierPos({ x, y });
  };

  return (
    <div
  style={{
    position: 'relative',
    width,
    height,
    overflow: 'hidden',
  }}
  onMouseEnter={() => setShowMagnifier(true)}
  onMouseLeave={() => setShowMagnifier(false)}
  onMouseMove={handleMouseMove}
>
      <img
  ref={imgRef}
  src={src}
  alt="zoom"
  style={{
    width,
    height,
    objectFit: 'contain',
    display: 'block',
    transition: 'none', // Evita transformaciones inesperadas
  }}
/>
      {showMagnifier && (
        <div
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            top: magnifierPos.y - 75,
            left: magnifierPos.x - 75,
            width: 150,
            height: 150,
            borderRadius: '50%',
            border: '2px solid white',
            backgroundImage: `url('${src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imgSize.width * zoom}px ${imgSize.height * zoom}px`,
            backgroundPosition: `-${magnifierPos.x * zoom - 75}px -${magnifierPos.y * zoom - 75}px`,
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
}
