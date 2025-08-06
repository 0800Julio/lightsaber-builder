'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

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

const colorMap: Record<string, string> = {
  'rojo': '#ff0000',
  'azul': '#0000ff',
  'verde': '#00ff00',
  'negro': '#333333',
  'blanco': '#ffffff',
  'amarillo': '#ffff00',
  'gris': '#808080',
  'pulido': '#c0c0c0',
  'standard': '#888888'
};

const PartPanel: React.FC<PartPanelProps> = ({
  label,
  short,
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
    <div className="part-panel">
      <div className="part-header" onClick={onToggle}>
        <div className="part-icon relative">
          <Image
            src={imagePath}
            alt={`Ícono de ${label}`}
            fill
            className="object-contain"
          />
        </div>
        <div className="part-info">
          <div className="part-label" style={{ color: 'white' }}>
            {label}
            <div style={{ fontSize: '12px', color: '#ccc', marginTop: '2px' }}>
              <strong>{short}</strong> ({type})
            </div>
          </div>
        </div>
        <div className={`part-chevron ${isOpen ? 'open' : ''}`}>
          <ChevronDown size={20} color="#ccc" />
        </div>
      </div>

      <div className={`part-options ${isOpen ? 'open' : ''}`}>
        {/* Preview */}
        {selectedType && (
          <div className="part-preview">
            <div className="preview-label">Vista previa</div>
            <div className="preview-container">
              <Image
                src={iconPath}
                alt={`Preview de ${label}`}
                width={120}
                height={120}
                className="preview-image"
              />
            </div>
          </div>
        )}

        {/* Tipos */}
        <div className="option-group">
          <div className="option-label">Tipo:</div>
          <div className="option-grid">
            {Object.keys(options).map((option) => (
              <button
                key={option}
                onClick={() => handleTypeChange(option)}
                className={`option-button ${selectedType === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Colores */}
        {selectedType && (
          <div className="option-group">
            <div className="option-label">Color:</div>
            <div className="color-grid">
              {Object.keys(options[selectedType]).map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: colorMap[color] || color }}
                  title={color}
                >
                  {color === 'negro' && <span style={{ color: 'white' }}>N</span>}
                  {color === 'blanco' && <span style={{ color: 'black' }}>B</span>}
                  {color === 'amarillo' && <span style={{ color: 'black' }}>A</span>}
                  {color === 'azul' && <span style={{ color: 'white' }}>Z</span>}
                  {color === 'rojo' && <span style={{ color: 'white' }}>R</span>}
                  {color === 'gris' && <span style={{ color: 'white' }}>G</span>}
                  {color === 'pulido' && <span style={{ color: 'black' }}>P</span>}
                  {color === 'standard' && <span style={{ color: 'white' }}>S</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Acabados */}
        {selectedType &&
          selectedColor &&
          options[selectedType][selectedColor]?.length > 0 && (
            <div className="option-group">
              <div className="option-label">Acabado:</div>
              <div className="option-grid">
                {options[selectedType][selectedColor].map((finish) => (
                  <button
                    key={finish}
                    onClick={() => handleFinishChange(finish)}
                    className={`option-button ${selectedFinish === finish ? 'selected' : ''}`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default PartPanel;
