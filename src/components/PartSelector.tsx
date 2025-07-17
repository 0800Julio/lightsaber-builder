'use client';

import { useState } from 'react';
import Image from 'next/image';

type PartSelectorProps = {
  partName: string; // Ej: 'Neck'
  partKey: string;  // Ej: 'neck' (para ruta)
  options: Record<string, Record<string, string[]>>; // tipo -> color -> [acabados]
  onChange: (imagePath: string) => void;
};

export default function PartSelector({ partName, partKey, options, onChange }: PartSelectorProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

  const getImagePath = () => {
    if (selectedType && selectedColor) {
      let path = `/images/${partKey}/${selectedType}/${selectedType} ${selectedColor}`;
      if (selectedFinish) path = `${path}-${selectedFinish}`;
      return encodeURI(`${path}.JPG`); // Esto convierte espacios a %20 automáticamente
    }
    return `/images/${partKey}/standard.jpg`;
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSelectedColor(null);
    setSelectedFinish(null);
  };



  const handleFinishChange = (finish: string) => {
    setSelectedFinish(finish);
  };

  const currentImage = getImagePath();

  // Llamamos al padre para que actualice la vista previa
  onChange(currentImage);

  return (
    <div className="mb-6 border-b border-gray-700 pb-4">
      <h2 className="text-xl font-bold mb-2">{partName}</h2>

      {/* Imagen actual */}
      <div className="w-28 h-56 relative mb-2 border border-gray-700">
        <Image
          src={currentImage}
          alt={`Vista previa ${partName}`}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Tipo */}
      <div className="mb-2">
        <label className="block mb-1 font-semibold">Tipo:</label>
        <select
          className="w-full p-1 bg-gray-800 text-white"
          value={selectedType ?? ''}
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option value="">Seleccionar tipo</option>
          {Object.keys(options).map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Colores como cuadraditos */}

      {/* Acabado */}
      {selectedType && selectedColor && options[selectedType][selectedColor].length > 0 && (
        <div>
          <label className="block mb-1 font-semibold">Acabado:</label>
          <select
            className="w-full p-1 bg-gray-800 text-white"
            value={selectedFinish ?? ''}
            onChange={(e) => handleFinishChange(e.target.value)}
          >
            <option value="">Seleccionar acabado</option>
            {options[selectedType][selectedColor].map((finish) => (
              <option key={finish} value={finish}>
                {finish.replace(/-/g, ' ')}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}


