'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';


interface PartPanelProps {
  label: string; // Ej: "CUELLO"
  short: string; // Ej: "N"
  type: string; // Ej: "neck"
  imagePath: string; // Miniatura con parte resaltada
  options: Record<string, Record<string, string[]>>;
  onChange: (path: string) => void;
}

export default function PartPanel({ label, short, type, imagePath, options, onChange }: PartPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

  // Llamamos a onChange cada vez que cambian las selecciones
  useEffect(() => {
    const path = (() => {
      if (selectedType && selectedColor) {
        let p = `/images/${type}/${selectedType}/${selectedType} ${selectedColor}`;
        if (selectedFinish) p += ` ${selectedFinish}`;
  
        // Codifica los espacios para que funcionen en URLs
        const encodedPath = encodeURI(`${p}.JPG`);
        return encodedPath;
      }
      return `/images/${type}/standard.jpg`;
    })();
  
  
    onChange(path);
  }, [selectedType, selectedColor, type, selectedFinish, onChange]);
  const handleTypeChange = (val: string) => {
    setSelectedType(val);
    setSelectedColor(null);
    setSelectedFinish(null);
  };

  const handleColorChange = (val: string) => {
    setSelectedColor(val);
    setSelectedFinish(null);
  };

  const handleFinishChange = (val: string) => {
    setSelectedFinish(val);
  };

  return (
    <div className="border-b border-gray-600 py-4">
      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <Image src={imagePath} alt={label} width={50} height={50} />
          <div>
            <p className="text-lg font-bold">{label}</p>
            <p className="text-sm text-gray-400">{short} ({type})</p>
          </div>
        </div>
        <span className="text-2xl text-gray-400">{expanded ? '▲' : '▶'}</span>
      </div>

      {/* Expanded options */}
      {expanded && (
        <div className="mt-4 space-y-3 pl-4">
          {/* Tipo */}
          <select
            className="w-full p-1 bg-gray-800 text-white rounded"
            value={selectedType ?? ''}
            onChange={(e) => handleTypeChange(e.target.value)}
          >
            <option value="">Seleccionar tipo</option>
            {Object.keys(options).map((typeKey) => (
              <option key={typeKey} value={typeKey}>{typeKey.toUpperCase()}</option>
            ))}
          </select>

          {/* Color */}
          {selectedType && (
            <select
              className="w-full p-1 bg-gray-800 text-white rounded"
              value={selectedColor ?? ''}
              onChange={(e) => handleColorChange(e.target.value)}
            >
              <option value="">Seleccionar color</option>
              {Object.keys(options[selectedType]).map((color) => (
                <option key={color} value={color}>{color.replace(/-/g, ' ')}</option>
              ))}
            </select>
          )}

          {/* Acabado */}
          {selectedType && selectedColor && options[selectedType][selectedColor].length > 0 && (
            <select
              className="w-full p-1 bg-gray-800 text-white rounded"
              value={selectedFinish ?? ''}
              onChange={(e) => handleFinishChange(e.target.value)}
            >
              <option value="">Seleccionar acabado</option>
              {options[selectedType][selectedColor].map((finish) => (
                <option key={finish} value={finish}>{finish.replace(/-/g, ' ')}</option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
}
