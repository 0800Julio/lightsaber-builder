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
  zoom = 2,
}: MagnifierImageProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (imgRef.current) {
        const imgRect = imgRef.current.getBoundingClientRect();
        setImgSize({ 
          width: imgRect.width, 
          height: imgRect.height 
        });
      }
    };

    // Pequeño delay para asegurar que la imagen se haya cargado
    const timer = setTimeout(updateSize, 100);
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      clearTimeout(timer);
    };
  }, [src]); // Añadido src como dependencia

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Asegurar que las coordenadas estén dentro del contenedor
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const clampedY = Math.max(0, Math.min(y, rect.height));
    
    setMagnifierPos({ x: clampedX, y: clampedY });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'none',
        backgroundColor: 'transparent',
        pointerEvents: 'auto',
      }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Imagen invisible solo para obtener dimensiones y detectar hover */}
      <img
        ref={imgRef}
        src={src}
        alt="zoom"
        onLoad={() => {
          if (imgRef.current) {
            const imgRect = imgRef.current.getBoundingClientRect();
            setImgSize({ 
              width: imgRect.width, 
              height: imgRect.height 
            });
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'bottom',
          display: 'block',
          transition: 'none',
          transform: 'none',
          pointerEvents: 'none',
          backgroundColor: 'transparent',
          imageRendering: 'auto',
          opacity: 0, // Hacer la imagen invisible
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        loading="eager"
        decoding="sync"
      />
      {showMagnifier && imgSize.width > 0 && (
        <div
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            top: magnifierPos.y - 75,
            left: magnifierPos.x - 75,
            width: 150,
            height: 150,
            borderRadius: '50%',
            border: '3px solid #FF6F00',
            boxShadow: '0 0 15px rgba(255, 111, 0, 0.7), inset 0 0 15px rgba(0, 0, 0, 0.2)',
            backgroundImage: `url('${src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imgSize.width * zoom}px ${imgSize.height * zoom}px`,
            backgroundPosition: `-${magnifierPos.x * zoom - 75}px -${magnifierPos.y * zoom - 75}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            overflow: 'hidden',
            zIndex: 999,
            transition: 'none',
            backgroundBlendMode: 'normal',
            filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
            imageRendering: 'auto' as const,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('${src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imgSize.width * zoom}px ${imgSize.height * zoom}px`,
              backgroundPosition: `-${magnifierPos.x * zoom - 75}px -${magnifierPos.y * zoom - 75}px`,
              borderRadius: '50%',
            }}
          />
        </div>
      )}
    </div>
  );
}
