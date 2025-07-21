'use client';

import { useState } from 'react';
import Image from 'next/image';
import PartPanel from '@/components/PartPanel';
import MagnifierImage from '@/components/MagnifierImage';

export default function Crear() {
  const [pommelImage, setPommelImage] = useState('/images/pommel/standard.jpg');
  const [bodyImage, setBodyImage] = useState('/images/body/standard.jpg');
  const [neckImage, setNeckImage] = useState('/images/neck/standard.jpg');
  const [emitterImage, setEmitterImage] = useState('/images/emitter/standard.jpg');

  const pommelOptions = {
    'P-1': {
      'gris': ['satinado'],
      'negro': []
    },
    'P-2': {
      'rojo': [],
    }
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
  };

  const emitterOptions = {
    'E-1': {
      'rojo': [],
      'gris': ['satinado'],
    },
    'E-2': {
      'negro': []
    }
  };

  const buildImagePath = (type: string, part: string, color: string | null, finish: string | null) => {
    const safeColor = color ?? 'standard';
    const safeFinish = finish ? ` ${finish}` : '';
    const fileName = `${part} ${safeColor}${safeFinish}.JPG`;
    return `/images/${type}/${part}/${fileName}`;
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <header className="w-full bg-black border-b border-gray-700 px-1 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/icons/logo.jpg"
            alt="Logo"
            width={80}
            height={80}
          />
          <span className="text-xl font-bold text-white">El taller de han zolo</span>
        </div>
      </header>

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400 drop-shadow">
        Diseñador virtual de Lightsabers
      </h1>

      <div className="flex gap-8">
        <div className="flex-1 flex items-center justify-center bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="flex gap-0 max-w-full">

            <div className="relative group w-[25vw] max-w-[152px] h-[35vw] max-h-[670px]">
            <Image
            src={pommelImage}
            alt="Pommel"
            fill
            className="object-contain"
            />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50">
                <MagnifierImage src={pommelImage} width={152} height={670} zoom={2}   />
              </div>
            </div>


            <div className="relative group z-10 w-[25vw] max-w-[447px] h-[35vw] max-h-[670px]">
            <Image
            src={bodyImage}
            alt="Body"
            fill
            className="object-contain"/>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50">
              <MagnifierImage src={bodyImage} width={447} height={670} zoom={2} />
              </div>
            </div>



            <div className="relative group w-[25vw] max-w-[153px] h-[35vw] max-h-[670px] -ml-6 -mr-6">
            <Image
            src={neckImage}
            alt="Neck"
            fill
            className="object-contain"/>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50">
                <MagnifierImage src={neckImage} width={153} height={670} zoom={2}  />
              </div>
            </div>




            <div className="relative group w-[25vw] max-w-[271px] h-[35vw] max-h-[670px]">
            <Image
            src={emitterImage}
            alt="Emitter"
            fill
            className="object-contain"/>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50">
                <MagnifierImage src={emitterImage} width={270} height={670} zoom={2} />
              </div>

            </div>
          </div>
        </div>

        <aside className="w-[300px] bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 space-y-4">
          <PartPanel
            label="PUNTA TRASERA"
            short="P"
            type="pommel"
            imagePath="/images/icons/ICONO_P.JPG"
            options={pommelOptions}
            onSelectionChange={(type, color, finish) => {
              setPommelImage(buildImagePath('pommel', type, color, finish));
            }}
          />
          <PartPanel
            label="CUERPO"
            short="B"
            type="body"
            imagePath="/images/icons/ICONO_B.JPG"
            options={bodyOptions}
            onSelectionChange={(type, color, finish) => {
              setBodyImage(buildImagePath('body', type, color, finish));
            }}
          />
          <PartPanel
            label="CUELLO"
            short="N"
            type="neck"
            imagePath="/images/icons/ICONO_N.JPG"
            options={neckOptions}
            onSelectionChange={(type, color, finish) => {
              setNeckImage(buildImagePath('neck', type, color, finish));
            }}
          />
          <PartPanel
            label="PICO"
            short="E"
            type="emitter"
            imagePath="/images/icons/ICONO_E.JPG"
            options={emitterOptions}
            onSelectionChange={(type, color, finish) => {
              setEmitterImage(buildImagePath('emitter', type, color, finish));
            }}
          />
        </aside>
      </div>
    </main>
  );
}
