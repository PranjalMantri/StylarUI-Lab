import type React from "react";

type ConfigType = "input" | "select" | "radio" | "color" | "date" | "switch";

interface ConfigItemProps {
  title: string;
  type: ConfigType;
  value: any;
  onChange: (value: any) => void;
  options?: Array<{ label: string; value: any }>;
  placeholder?: string;
  classname?: string;
}

const ConfigItem: React.FC<ConfigItemProps> = ({
  title,
  type,
  value,
  onChange,
  options = [],
  placeholder = "",
  classname = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 mb-4 ${classname}`}>
      <label className="text-sm font-medium text-sky-200 flex items-center gap-2">
        {title}
      </label>

      {type == "input" && (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="bg-slate-700/70 text-white p-2 border border-slate-300 focus:border-sky-500 focus:ring-sky-500"
        />
      )}

      {type == "select" && (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-slate-700/70 text-white p-2 border border-slate-300 focus:border-sky-500 focus:ring-sky-500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {type == "radio" && (
        <div className="flex gap-4">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-1 text-sm text-white cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                onChange={(e) => onChange(e.target.value)}
                checked={value == option.value}
                className="form-radio h-4 w-4 text-sky-400 bg-slate-700/70 border border-slate-300 focus:ring-sky-600"
              />
              {option.label}
            </label>
          ))}
        </div>
      )}

      {type === "color" && (
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-10 p-1 rounded bg-zinc-800 border border-zinc-700 cursor-pointer"
        />
      )}
      {type === "date" && (
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-zinc-800 text-white p-2 rounded border border-zinc-700 focus:ring-sky-500 focus:border-sky-500"
        />
      )}
      {type === "switch" && (
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={!!value}
            onChange={() => onChange(!value)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-zinc-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
        </label>
      )}
    </div>
  );
};

export default ConfigItem;
