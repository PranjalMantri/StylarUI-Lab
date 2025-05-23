import type React from "react";
import TailwindColorPicker from "./TailwindColorPicker";

type ConfigType = "input" | "select" | "radio" | "color" | "date" | "switch";

interface ConfigItemProps {
  title: string;
  type: ConfigType;
  value: any;
  onChange: (value: any) => void;
  options?: Array<{ label: string; value: any }>;
  placeholder?: string;
  className?: string;
}

const ConfigItem: React.FC<ConfigItemProps> = ({
  title,
  type,
  value,
  onChange,
  options = [],
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 mb-4 ${className}`}>
      <label className="block text-xs text-slate-400 mb-0.5 overflow-hidden text-ellipsis">
        {title}
      </label>

      {type == "input" && (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2.5 bg-slate-700/50 border border-slate-600 rounded-md text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors placeholder:text-slate-400 text-sm"
        />
      )}

      {type == "select" && (
        <select
          value={value}
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
        <TailwindColorPicker initialValue={value} onChange={onChange} />
      )}

      {type === "switch" && (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={!!value}
            onChange={() => onChange(!value)}
            className="sr-only peer"
          />
          <div className="form-checkbox h-4 w-4 text-sky-500 bg-slate-700 border-slate-600 rounded focus:ring-sky-500"></div>
        </label>
      )}
    </div>
  );
};

export default ConfigItem;
