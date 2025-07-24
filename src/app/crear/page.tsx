'use client';

import { useState } from 'react';
import Image from 'next/image';
import PartPanel from '@/components/PartPanel';
import MagnifierImage from '@/components/MagnifierImage';
import { motion } from 'framer-motion';

export default function Crear() {
  const [pommelImage, setPommelImage] = useState('/images/pommel/standard.jpg');
  const [bodyImage, setBodyImage] = useState('/images/body/standard.jpg');
  const [neckImage, setNeckImage] = useState('/images/neck/standard.jpg');
  const [emitterImage, setEmitterImage] = useState('/images/emitter/standard.jpg');
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const [pommelIcon, setPommelIcon] = useState('/images/previews/pommel/placeholder.jpg');
  const [bodyIcon, setBodyIcon] = useState('/images/previews/body/placeholder.jpg');
  const [neckIcon, setNeckIcon] = useState('/images/previews/neck/placeholder.jpg');
  const [emitterIcon, setEmitterIcon] = useState('/images/previews/emitter/placeholder.jpg');

  const pommelOptions = {
    'P-1': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-2': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-3': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-4': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-5': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-6': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-7': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-8': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-9': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-10': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-11': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-12': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    'P-13': {
      'gris': ['texturado'],
      'negro': ['texturado'],
      'amarillo': [],
      'azul': [],
      'pulido': [],
      'rojo': [],
      'standard': [],
    },
    
  };

  const bodyOptions = {
    'B-1 cuero blanco ancho': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-1 cuero marron ancho': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-1 cuero marron fino': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-1 cuero negro fino': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-1 cuero verde ancho': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-2': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-3': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-4': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-5': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-6': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-7': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-8': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-9': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'B-10': {
    },
    'B-11': {
    },
  };

  const neckOptions = {
    'N-1': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'N-2': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'N-3': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'N-4': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'N-5': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    
    'N-6': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    
    'N-7': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    
    'N-8': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    
    'N-9': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    
    'N-10': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    
    'N-11': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'N-12': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'N-13': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
  };

  const emitterOptions = {
     'E-1': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-2': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-3': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-4': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-5': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-6': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-7': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-8': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-9': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-10': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-11-4': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-11-5': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-11-6': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-12-1': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-12-2': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-12-3': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
    'E-13-3': {
      'amarillo': [],
      'azul': [],
      'blanco': [],
      'gris': ['texturado', 'satinado'],
      'negro': ['texturado', 'satinado'],
      'pulido': [],
      'rojo': [],
    },
  };

  const buildImagePath = (type: string, part: string, color: string | null, finish: string | null) => {
    const safeColor = color ?? 'standard';
    const safeFinish = finish ? ` ${finish}` : '';
    const fileName = `${part} ${safeColor}${safeFinish}.JPG`;
    return `/images/${type}/${part}/${fileName}`;
  };

  return (
    <main className="min-h-screen bg-black text-white px-3 py-3 overflow-x-auto">
      <motion.header
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="fixed top-0 left-0 w-full bg-black text-white shadow z-50 h-18 flex items-center px-6"
>
  {/* Contenedor para logo y nav */}
  <div className="flex items-center justify-between w-full">
    {/* Logo a la izquierda */}
    <a href="#inicio" className="flex-shrink-0 mr-6">
      <img src="/images/icons/logo.JPG" alt="Logo" className="h-25 w-25" />
    </a>

    {/* Navegación centrada */}
    <nav className="flex gap-6 items-center mx-auto">
      <a
        href="#inicio"
        className="relative text-white text-lg font-medium transition hover:text-orange-400
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-orange-400 after:opacity-0 hover:after:opacity-100
          hover:after:shadow-[0_0_6px_2px_rgba(255,115,0,0.7)] after:transition-all"
      >
        Materiales de la Empuñadura
      </a>
      <a
        href="#pommel"
        className="relative text-white text-lg font-medium transition hover:text-orange-400
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-orange-400 after:opacity-0 hover:after:opacity-100
          hover:after:shadow-[0_0_6px_2px_rgba(255,115,0,0.7)] after:transition-all"
      >
        Que incluye
      </a>
      <a
        href="#body"
        className="relative text-white text-lg font-medium transition hover:text-orange-400
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-orange-400 after:opacity-0 hover:after:opacity-100
          hover:after:shadow-[0_0_6px_2px_rgba(255,115,0,0.7)] after:transition-all"
      >
        Instrucciones de Uso
      </a>
      <a
        href="#neck"
        className="relative text-white text-lg font-medium transition hover:text-orange-400
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-orange-400 after:opacity-0 hover:after:opacity-100
          hover:after:shadow-[0_0_6px_2px_rgba(255,115,0,0.7)] after:transition-all"
      >
        World Wide Orders
      </a>
      <a
        href="#emitter"
        className="relative text-white text-lg font-medium transition hover:text-orange-400
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-orange-400 after:opacity-0 hover:after:opacity-100
          hover:after:shadow-[0_0_6px_2px_rgba(255,115,0,0.7)] after:transition-all"
      >
        Galeria de Fotos
      </a>
    </nav>
  </div>
</motion.header>


      <div className="h-3 pt-18" /> {/* Separador para que no tape el navbar */}
      <h1
  className="text-4xl font-bold text-center mb-8"
  style={{
    color: '#FF6F00', // naranja neón
    fontFamily: "'Orbitron', sans-serif",
    textShadow:
      '0 0 5px #FF6F00, 0 0 10px #FF6F00, 0 0 20px #FF6F00, 0 0 40px #FF6F00',
    animation: 'neonGlow 2.5s ease-in-out infinite alternate',
  }}
>
  Diseñador virtual de Lightsabers
</h1>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-full">
        <div className="flex-1 lg:flex-grow lg:flex-shrink lg:basis-0 flex items-center justify-center bg-white p-2 lg:p-4 rounded-xl shadow-lg border border-gray-700" style={{ minHeight: '600px' }}>
          <div className="w-full max-w-none lightsaber-container">
            {/* Container optimizado para el saber */}
            <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '550px' }}>
              <div className="flex items-end overflow-visible relative" style={{ height: '550px', gap: '0px' }}>
                
                {/* Pommel */}
                <div className="relative group lightsaber-part flex items-end" style={{ width: '140px', height: '550px', marginRight: '-4px' }}>
                  <Image
                    src={pommelImage}
                    alt="Pommel"
                    fill
                    className="object-contain"
                    sizes="140px"
                    style={{ objectPosition: 'bottom' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                    <MagnifierImage src={pommelImage} width={140} height={550} zoom={2} />
                  </div>
                </div>

                {/* Body */}
                <div className="relative group z-10 lightsaber-part flex items-end" style={{ width: '380px', height: '550px', marginLeft: '-10px', marginRight: '-10px' }}>
                  <Image
                    src={bodyImage}
                    alt="Body"
                    fill
                    className="object-contain"
                    sizes="380px"
                    style={{ objectPosition: 'bottom' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-40 pointer-events-none group-hover:pointer-events-auto">
                    <MagnifierImage src={bodyImage} width={380} height={550} zoom={2} />
                  </div>
                </div>

                {/* Neck (pieza N) - Restaurando comportamiento original */}
                <div className="relative group z-30 lightsaber-part flex items-end" style={{ width: '130px', height: '550px', marginLeft: '-10px', marginRight: '-16px' }}>
                  {/* Parte superior (plano 2D), debajo de las otras piezas - SOLO EL 30% SUPERIOR */}
                  <div className="absolute inset-0 z-0"
                       style={{
                         clipPath: 'inset(0% 11% 30%)',
                         opacity: 1,
                         zIndex: -1
                       }}>
                    <Image
                      src={neckImage}
                      alt="Neck 2D"
                      fill
                      className="object-contain"
                      style={{ objectPosition: 'top' }}
                      sizes="130px"
                      draggable={false}
                    />
                  </div>
                  {/* Parte inferior (vista real), por encima de las otras piezas - SOLO EL 70% INFERIOR */}
                  <div className="absolute inset-0 z-10"
                       style={{
                         clipPath: 'inset(40% 0% 0%)',
                         opacity: 1,
                         zIndex: 50
                       }}>
                    <Image
                      src={neckImage}
                      alt="Neck Real"
                      fill
                      className="object-contain"
                      style={{ objectPosition: 'bottom' }}
                      sizes="130px"
                      draggable={false}
                    />
                  </div>
                  {/* Magnifier y hover - Por encima de todo para mostrar imagen completa */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto" style={{ zIndex: 60 }}>
                    <MagnifierImage src={neckImage} width={130} height={550} zoom={2} />
                  </div>
                </div>

                {/* Emitter */}
                <div className="relative group z-10 lightsaber-part flex items-end" style={{ width: '240px', height: '550px', marginLeft: '-10px' }}>
                  <Image
                    src={emitterImage}
                    alt="Emitter"
                    fill
                    className="object-contain"
                    sizes="240px"
                    style={{ objectPosition: 'bottom' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                    <MagnifierImage src={emitterImage} width={240} height={550} zoom={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="w-full lg:w-[320px] lg:flex-shrink-0 bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 space-y-4" style={{ maxHeight: '600px', overflowY: 'auto' }}>
          <PartPanel
            label="PUNTA TRASERA"
            short="P"
            type="pommel"
            imagePath="/images/icons/ICONO_P.JPG"
            options={pommelOptions}
            onSelectionChange={(type, color, finish) => {
              setPommelImage(buildImagePath('pommel', type, color, finish));
              setPommelIcon(`/images/pommel/${type}/${type}.JPG`);
            }}
            isOpen={openPanel === 'pommel'}
            onToggle={() =>
            setOpenPanel((prev) => (prev === 'pommel' ? null : 'pommel'))
            }
            iconPath={pommelIcon}
          />
          <PartPanel
            label="CUERPO"
            short="B"
            type="body"
            imagePath="/images/icons/ICONO_B.JPG"
            options={bodyOptions}
            onSelectionChange={(type, color, finish) => {
              setBodyImage(buildImagePath('body', type, color, finish));
              setBodyIcon(`/images/body/${type}/${type}.JPG`);
            }}
            isOpen={openPanel === 'body'}
            onToggle={() =>
            setOpenPanel((prev) => (prev === 'body' ? null : 'body'))
            }
            iconPath={bodyIcon}
          />
          <PartPanel
            label="CUELLO"
            short="N"
            type="neck"
            imagePath="/images/icons/ICONO_N.JPG"
            options={neckOptions}
            onSelectionChange={(type, color, finish) => {
              setNeckImage(buildImagePath('neck', type, color, finish));
              setNeckIcon(`/images/neck/${type}/${type}.JPG`);
            }}
            isOpen={openPanel === 'neck'}
            onToggle={() =>
            setOpenPanel((prev) => (prev === 'neck' ? null : 'neck'))
            }
            iconPath={neckIcon}
          />
          <PartPanel
            label="PICO"
            short="E"
            type="emitter"
            imagePath="/images/icons/ICONO_E.JPG"
            options={emitterOptions}
            onSelectionChange={(type, color, finish) => {
              setEmitterImage(buildImagePath('emitter', type, color, finish));
              setEmitterIcon(`/images/emitter/${type}/${type}.JPG`);
            }}
            isOpen={openPanel === 'emitter'}
            onToggle={() =>
            setOpenPanel((prev) => (prev === 'emitter' ? null : 'emitter'))
            }
            iconPath={emitterIcon}
          />
        </aside>
      </div>
    </main>
  );
}