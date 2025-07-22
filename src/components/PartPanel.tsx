'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PartPanelProps {
  label: string; // ✅ <- esta es la que falta
  short: string;
  type: 'pommel' | 'body' | 'neck' | 'emitter'; // podés ampliar si tenés más partes
  imagePath: string;
  iconPath: string,
  options: {
    [type: string]: {
      [color: string]: string[];
    };
  };
  onSelectionChange: (
    type: string,
    color: string,
    finish: string | null,
  ) => void; // ✅ Esta es la firma correcta
  isOpen: boolean;
  onToggle: () => void;
}

const mapColorToCSS = (color: string) => {
  const map: Record<string, string> = {
    rojo: '#ff0000',
    azul: '#0000ff',
    verde: '#00ff00',
    negro: '#000000',
    blanco: '#ffffff',
    amarillo: '#ffff00',
    gris: '#808080',
    // Podés agregar más si querés
  };
  return map[color] || color;
};

const PartPanel: React.FC<PartPanelProps> = ({ label, imagePath, iconPath, type, options, onSelectionChange,isOpen ,onToggle, }) => {

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setSelectedColor('standard'); // Carga color 'standard'
    setSelectedFinish(null);
    onSelectionChange(value, 'standard', null);
  };


  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedFinish(null);
    if (selectedType) {
      onSelectionChange(selectedType, color, null);
    }
  };

  const handleFinishChange = (finish: string) => {
    setSelectedFinish(finish);
    if (selectedType && selectedColor) {
      onSelectionChange(selectedType, selectedColor, finish);
    }
  };

  
  const getImagePath = () => {
    if (selectedType && selectedColor) {
      let path = `/images/${type}/${selectedType}/${selectedType} ${selectedColor}`;
      if (selectedFinish) {
        path += ` ${selectedFinish}`;
      }
      return `${path}.JPG`;
    }
    return `/images/${type}/placeholder.jpg`;
  };

  return (
    <div className="border rounded-xl p-4 mb-4 bg-gray-900 shadow-lg">
      <div
  onClick={onToggle}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') onToggle();
  }}
  className="flex items-center gap-4 mb-4 cursor-pointer select-none focus:outline-none"
  aria-expanded={isOpen}
  aria-controls={`${type}-panel-content`}
>
  {/* MOSTRAR SIEMPRE imagePath ACÁ AFUERA */}
  <div className="relative w-16 h-16 flex-shrink-0">
    <Image
      src={imagePath}
      alt={`Ícono fijo de ${label}`}
      fill
      className="object-contain rounded border border-gray-600"
    />
  </div>

  <div className="flex flex-col justify-center flex-grow">
    <p className="text-lg font-bold text-white leading-tight">{label}</p>
    <p className="text-sm text-gray-400">({type})</p>
  </div>

  <div className="flex items-center">
    {isOpen ? <ChevronUp /> : <ChevronDown />}
  </div>
</div>

{isOpen && (
  <div className="space-y-4">
    {/* Solo mostrar la imagen preview si se seleccionó tipo */}
    {selectedType && (
      <div className="w-full h-48 relative bg-black rounded-md overflow-hidden">
        <Image
          src={iconPath}
          alt={`Vista previa de ${label}`}
          fill
          className="object-contain"
        />
      </div>
    )}

    {/* Tipos */}
    <div>
      <label className="text-white block mb-1">Seleccionar tipo:</label>
      <div className="flex flex-wrap gap-2">
        {Object.keys(options).map((option) => (
          <button
            key={option}
            onClick={() => handleTypeChange(option)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedType === option ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>

    {/* Colores */}
    {selectedType && (
      <div>
        <label className="text-white block mb-1">Seleccionar acabado:</label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(options[selectedType]).map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color ? 'border-white' : 'border-gray-500'
              }`}
              style={{ backgroundColor: mapColorToCSS(color) }}
              title={color}
            />
          ))}
        </div>
      </div>
    )}

    {/* Acabados */}
    {selectedType && selectedColor && options[selectedType][selectedColor]?.length > 0 && (
      <div>
        <label className="text-white block mb-1">Seleccionar textura:</label>
        <div className="flex flex-wrap gap-2">
          {options[selectedType][selectedColor].map((finish) => (
            <button
              key={finish}
              onClick={() => handleFinishChange(finish)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedFinish === finish
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-300 text-black'
              }`}
            >
              {finish}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
)}
    </div>
  );
};

export default PartPanel;
