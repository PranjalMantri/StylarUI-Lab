import type React from "react";
import TailwindColorPicker from "./TailwindColorPicker";

type ConfigType = "input" | "select" | "radio" | "color" | "date" | "switch";

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
  return (
    <div className={`flex flex-col gap-1 mb-4 ${className}`}>
      {type != "switch" && (
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
          className="w-full p-2.5 bg-slate-700/50 border border-slate-600 rounded-md text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors placeholder:text-slate-400 text-sm"
        />
      )}

      {type == "select" && (
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2.5 bg-slate-700/50 border border-slate-600 rounded-md text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors placeholder:text-slate-400 text-sm"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
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
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={value}
            onChange={() => onChange(!value)}
            className="sr-only"
            disabled={disabled}
          />
          <div
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
          <span className="text-sm text-slate-200">{title}</span>
        </label>
      )}
    </div>
  );
};

export default ConfigItem;
