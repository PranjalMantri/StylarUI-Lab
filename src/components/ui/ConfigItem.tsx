import React, { useRef } from "react";
import TailwindColorPicker from "./TailwindColorPicker";
import { iconMap } from "../../constants/IconMap";
import { useState } from "react";

type ConfigType =
  | "input"
  | "select"
  | "radio"
  | "color"
  | "date"
  | "switch"
  | "icon";

interface ConfigItemProps {
  title: string;
  type: ConfigType;
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
  options?: Array<{ label: string; value: any }>;
  placeholder?: string;
  className?: string;
}

const ConfigItem: React.FC<ConfigItemProps> = ({
  title,
  type,
  value,
  onChange,
  disabled = false,
  options = [],
  placeholder = "",
  className = "",
}) => {
  const [iconSearch, setIconSearch] = useState("");
  const switchInputRef = useRef<HTMLInputElement>(null);
  const switchContainerRef = useRef<HTMLDivElement>(null);

  const iconList = Object.keys(iconMap).filter((name) =>
    name.toLowerCase().includes(iconSearch.toLowerCase())
  );

  const handleSwitchToggle = (e: React.MouseEvent) => {
    e.preventDefault();

    if (disabled) {
      return;
    }

    onChange(!value);
    if (switchInputRef.current) {
      switchInputRef.current.blur();
    }
  };

  return (
    <div className={`flex flex-col gap-1 mb-4 ${className}`}>
      {type != "switch" && type != "icon" && (
        <label className="block text-xs text-slate-400 mb-0.5 overflow-hidden text-ellipsis">
          {title}
        </label>
      )}

      {type == "input" && (
        <input
          type="text"
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-2.5 rounded-md border text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors placeholder:text-slate-400 text-sm 
            ${
              disabled
                ? "border-slate-500 bg-slate-800/30 cursor-not-allowed opacity-60"
                : "border-slate-600 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            }
                 `}
        />
      )}

      {type == "select" && (
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-2.5 border border-slate-600 rounded-md text-slate-200 transition-colors placeholder:text-slate-400 text-sm 
                 ${
                   disabled
                     ? "border-slate-500 bg-slate-800/30 cursor-not-allowed opacity-60"
                     : "border-slate-600 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                 }`}
        >
          {options.map(
            (option: { label: string; value: any }, index: number) => (
              <option key={`${option.value}-${index}`} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </select>
      )}

      {type === "color" && (
        <TailwindColorPicker
          initialValue={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}

      {type === "switch" && (
        <div
          ref={switchContainerRef}
          className="flex items-center justify-between gap-2"
        >
          <span className="text-sm text-slate-200">{title}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={() => onChange(!value)}
              onMouseDown={(e) => e.preventDefault()}
              className="sr-only"
              disabled={true}
              ref={switchInputRef}
            />
            <div
              onClick={handleSwitchToggle}
              className={`w-10 h-5 rounded-full relative transition-colors ${
                value ? "bg-sky-500" : "bg-slate-600"
              }`}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                  value ? "translate-x-5 left-0.5" : "left-0.5"
                }`}
              />
            </div>
          </label>
        </div>
      )}

      {type === "icon" && (
        <div className="flex flex-col gap-2">
          <label className="block text-xs text-slate-400 mb-0.5 overflow-hidden text-ellipsis">
            {title}
          </label>

          <input
            type="text"
            placeholder="Search icons..."
            value={iconSearch}
            onChange={(e) => setIconSearch(e.target.value)}
            disabled={disabled}
            className={`p-2 rounded-md border border-slate-600 text-slate-200 transition-colors placeholder:text-slate-400 text-sm 
                 ${
                   disabled
                     ? "border-slate-500 bg-slate-800/30 cursor-not-allowed opacity-60"
                     : "border-slate-600 bg-slate-700/50 cursor-pointer hover:bg-slate-700/70 focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                 }`}
          />

          <div className="max-h-48 overflow-y-auto grid grid-cols-6 gap-2 mt-1 scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
            {iconList.slice(0, 60).map((iconName) => {
              const IconComponent = (iconMap as any)[iconName];
              return (
                <button
                  key={iconName}
                  onClick={() => onChange(iconName)}
                  className={`p-2 rounded hover:bg-sky-600 transition-colors flex items-center justify-center border aspect-square
                    ${
                      value === iconName
                        ? "border-sky-500"
                        : "border-transparent"
                    }`}
                  title={iconName} // Tooltip for long names
                >
                  <IconComponent size={20} className="text-slate-200" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigItem;
