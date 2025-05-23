import React, { useState, useRef, useEffect } from "react";
import type { ChangeEvent } from "react";

interface TailwindColorPickerProps {
  initialValue?: string; // Made optional as a default is provided
  onChange: (value: string) => void; // Specify the type of the onChange value
}

const TailwindColorPicker: React.FC<TailwindColorPickerProps> = ({
  initialValue = "#34a851",
  onChange,
}) => {
  const [color, setColor] = useState(initialValue);
  const colorInputRef = useRef<HTMLInputElement | null>(null); // Explicitly type the ref

  // Effect to update internal color if initialValue prop changes from parent
  useEffect(() => {
    setColor(initialValue);
  }, [initialValue]);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor); // Update internal state for immediate UI feedback
    onChange(newColor); // Call the parent's onChange handler with the correct type
  };

  const handleClickContainer = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  return (
    <div
      onClick={handleClickContainer}
      className="w-full inline-flex border border-slate-600 items-center p-2 space-x-3 focus:ring-1 focus:ring-sky-500 focus:border-sky-500 rounded-lg bg-slate-700/50 shadow-sm cursor-pointer transition-colors duration-150"
      role="button"
      tabIndex={0}
    >
      <span
        className="w-6 h-6 rounded-full border border-gray-300"
        style={{ backgroundColor: color }}
        aria-hidden={true}
      ></span>

      <span
        className="text-sm text-slate-200 font-mono select-none"
        aria-label={`Current color ${color}`}
      >
        {color}
      </span>

      <input
        ref={colorInputRef}
        type="color"
        value={color} // Keep this in sync for the native picker's initial state
        onChange={handleColorChange}
        className="opacity-0 w-0 h-0 absolute"
        tabIndex={-1} // Not focusable directly
        aria-hidden={true}
      />
    </div>
  );
};

export default TailwindColorPicker;
