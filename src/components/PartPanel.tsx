'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PartPanelProps {
  label: string;
  short: string;
  type: 'pommel' | 'body' | 'neck' | 'emitter';
  imagePath: string;
  iconPath: string;
  options: {
    [type: string]: {
      [color: string]: string[];
    };
  };
  onSelectionChange: (
    type: string,
    color: string,
    finish: string | null
  ) => void;
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
  };
  return map[color] || color;
};

const PartPanel: React.FC<PartPanelProps> = ({
  label,
  imagePath,
  iconPath,
  type,
  options,
  onSelectionChange,
  isOpen,
  onToggle,
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setSelectedColor('standard');
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

  return (
    <div className="border rounded-xl p-2 mb-2 bg-gray-800 shadow-lg border-gray-600">
      <div
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onToggle();
        }}
        className="flex items-center gap-3 mb-2 cursor-pointer select-none focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`${type}-panel-content`}
      >
        {/* Ícono fijo de la pieza */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src={imagePath}
            alt={`Ícono fijo de ${label}`}
            fill
            className="object-contain rounded border border-gray-500"
          />
        </div>

        <div className="flex flex-col justify-center flex-grow">
          <p className="text-base font-bold text-gray-100 leading-tight">{label}</p>
          <p className="text-xs text-gray-300">({type})</p>
        </div>

        <div className="flex items-center">
          {isOpen ? <ChevronUp className="w-4 h-4 text-gray-300" /> : <ChevronDown className="w-4 h-4 text-gray-300" />}
        </div>
      </div>

      {isOpen && (
        <div className="space-y-2">
          {/* Vista previa solo si hay tipo seleccionado */}
          {selectedType && (
            <div className="w-full h-32 relative bg-gray-700 rounded-md overflow-hidden border border-gray-600">
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
            <label className="text-gray-100 block mb-1 text-sm">Seleccionar tipo:</label>
            <div className="flex flex-wrap gap-1">
              {Object.keys(options).map((option) => (
                <button
                  key={option}
                  onClick={() => handleTypeChange(option)}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedType === option
                      ? 'bg-gray-700 text-white shadow-md'
                      : 'bg-gray-600 text-gray-100 hover:bg-gray-500'
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
              <label className="text-gray-100 block mb-1 text-sm">Seleccionar acabado:</label>
              <div className="flex flex-wrap gap-1">
                {Object.keys(options[selectedType]).map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-gray-100 shadow-md'
                        : 'border-gray-400 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: mapColorToCSS(color) }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Acabados */}
          {selectedType &&
            selectedColor &&
            options[selectedType][selectedColor]?.length > 0 && (
              <div>
                <label className="text-gray-100 block mb-1 text-sm">Seleccionar textura:</label>
                <div className="flex flex-wrap gap-1">
                  {options[selectedType][selectedColor].map((finish) => (
                    <button
                      key={finish}
                      onClick={() => handleFinishChange(finish)}
                      className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedFinish === finish
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-gray-600 text-gray-100 hover:bg-gray-500'
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
