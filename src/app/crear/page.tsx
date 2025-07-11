'use client';

import { useState } from 'react';
import Image from 'next/image';
import PartPanel from '@/components/PartPanel';

export default function Crear() {
  const [pommelImage, setPommelImage] = useState('/images/pommel/standard.jpg');
  const [bodyImage, setBodyImage] = useState('/images/body/standard.jpg');
  const [neckImage, setNeckImage] = useState('/images/neck/standard.jpg');
  const [emitterImage, setEmitterImage] = useState('/images/emitter/standard.jpg');

  const pommelOptions = {
    'p-1': {
      'gris': ['satinado'],
      'negro': []
    },
    'p-2': {
      'rojo': [],
    }
  };

  const bodyOptions = {
    'b-1': {
      'azul': [],
      'negro': ['texturado'],
    },
    'b-2': {
      'gris': [],
    }
  };

  const neckOptions = {
    'n-1': {
      'amarillo': [],
      'gris': ['texturado', 'satinado'],
    },
    'n-2': {
      'negro': ['mate'],
      'azul': [],
    }
    // Agregá más si necesitás
  };

  const emitterOptions = {
    'e-1': {
      'rojo': [],
      'gris': ['satinado'],
    },
    'e-2': {
      'negro': []
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400 drop-shadow">
        Armá tu sable a medida
      </h1>

      <div className="flex gap-8">
        {/* Vista previa del sable */}
        <div className="flex-1 flex items-center justify-center bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <div className="flex gap-0 overflow-x-auto max-w-full">
            {/* Pommel */}
            <div className="relative z-10 w-[20vw] max-w-[150px] h-[35vw] max-h-[500px]">
              <Image
                src={pommelImage}
                alt="Pommel"
                fill
                className="object-fill"
                sizes="(max-width: 768px) 25vw, 100px"
              />
            </div>

            {/* Body */}
            <div className="relative z-10 w-[20vw] max-w-[300px] h-[35vw] max-h-[500px]">
              <Image
                src={bodyImage}
                alt="Body"
                fill
                className="object-fill"
                sizes="(max-width: 768px) 25vw, 100px"
              />
            </div>

            {/* Neck */}
            <div className="relative z-0 w-[20vw] max-w-[150px] h-[35vw] max-h-[500px] -ml-6 -mr-6" >
              <Image
                src={neckImage}
                alt="Neck"
                fill
                className="object-fill"
                sizes="(max-width: 768px) 25vw, 100px"
              />
            </div>

            {/* Emitter */}
            <div className="relative z-10 w-[20vw] max-w-[150px] h-[35vw] max-h-[500px]">
              <Image
                src={emitterImage}
                alt="Emitter"
                fill
                className="object-fill"
                sizes="(max-width: 768px) 25vw, 100px"
              />
            </div>
          </div>
        </div>

        {/* Panel lateral de selección */}
        <aside className="w-[300px] bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 space-y-4">
          <PartPanel
            label="PUNTA TRASERA"
            short="P"
            type="pommel"
            imagePath="/images/icons/ICONO_P.JPG"
            options={pommelOptions}
            onChange={setPommelImage}
          />
          <PartPanel
            label="CUERPO"
            short="B"
            type="body"
            imagePath="/images/icons/ICONO_B.JPG"
            options={bodyOptions}
            onChange={setBodyImage}
          />
          <PartPanel
            label="CUELLO"
            short="N"
            type="neck"
            imagePath="/images/icons/ICONO_N.JPG"
            options={neckOptions}
            onChange={setNeckImage}
          />
          <PartPanel
            label="PICO"
            short="E"
            type="emitter"
            imagePath="/images/icons/ICONO_E.JPG"
            options={emitterOptions}
            onChange={setEmitterImage}
          />
        </aside>
      </div>
    </main>
  );
}
