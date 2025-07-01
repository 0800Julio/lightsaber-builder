'use client';

import { useState } from 'react';

export default function CrearSable() {
  const [color, setColor] = useState('azul');

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Construí tu sable láser
      </h1>

      {/* Vista previa simple */}
      <div className="w-full max-w-sm h-64 flex items-center justify-center bg-black border border-gray-700 rounded-lg mb-8">
        <div className={`w-2 h-40 ${color === 'rojo' ? 'bg-red-600' : color === 'verde' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
      </div>

      {/* Selector de color */}
      <div className="flex gap-4">
        <button
          onClick={() => setColor('azul')}
          className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition ${
            color === 'azul' ? 'ring-2 ring-blue-300' : ''
          }`}
        >
          Azul
        </button>
        <button
          onClick={() => setColor('rojo')}
          className={`px-4 py-2 rounded bg-red-600 hover:bg-red-500 transition ${
            color === 'rojo' ? 'ring-2 ring-red-300' : ''
          }`}
        >
          Rojo
        </button>
        <button
          onClick={() => setColor('verde')}
          className={`px-4 py-2 rounded bg-green-600 hover:bg-green-500 transition ${
            color === 'verde' ? 'ring-2 ring-green-300' : ''
          }`}
        >
          Verde
        </button>
      </div>
    </main>
  );
}