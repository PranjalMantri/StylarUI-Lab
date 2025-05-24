import React, { useState, useRef, useEffect } from "react";
import type { ChangeEvent } from "react";

interface TailwindColorPickerProps {
  initialValue?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const TailwindColorPicker: React.FC<TailwindColorPickerProps> = ({
  initialValue = "#34a851",
  onChange,
  disabled,
}) => {
  const [color, setColor] = useState(initialValue);
  const colorInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setColor(initialValue);
  }, [initialValue]);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange(newColor);
  };

  const handleClickContainer = () => {
    if (disabled) {
      return;
    }

    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      colorInputRef.current?.click();
    }
  };

  return (
    <div
      onClick={handleClickContainer}
      onKeyDown={handleKeyDown}
      className={`relative w-full inline-flex border items-center p-2 space-x-3 rounded-lg shadow-sm transition-colors duration-150 ${
        disabled
          ? "border-slate-500 bg-slate-800/30 cursor-not-allowed opacity-60"
          : "border-slate-600 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
      }`}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      <span
        className={`w-6 h-6 rounded-full border ${
          disabled ? "border-gray-500" : "border-gray-300"
        }`}
        style={{ backgroundColor: color }}
        aria-hidden={true}
      ></span>

      <span
        className={`text-sm select-none ${
          disabled ? "text-slate-400" : "text-slate-200"
        }`}
        aria-label={`Current color ${color}`}
      >
        {color}
      </span>

      <input
        ref={colorInputRef}
        type="color"
        disabled={disabled}
        value={color}
        onChange={handleColorChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        tabIndex={-1}
        aria-hidden={true}
      />
    </div>
  );
};

export default TailwindColorPicker;
