import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ComponentSelectButtonProps {
  component: {
    id: string;
    name: string;
    iconName: string;
    disabled?: boolean;
  };
  selectedComponentId: string;
}

const ComponentSelectButton: React.FC<ComponentSelectButtonProps> = ({
  component,
  selectedComponentId,
}) => {
  const Icon = LucideIcons[
    component.iconName as keyof typeof LucideIcons
  ] as LucideIcon;

  return (
    <button
      disabled={component.disabled}
      onClick={() => {
        if (component.disabled) return;
      }}
      className={`w-full flex items-center px-3 gap-3.5 py-2.5 rounded-lg text-md transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 group
    ${component.disabled ? "opacity-50 cursor-not-allowed text-slate-500" : ""}
    ${
      selectedComponentId == component.id
        ? "bg-sky-500 text-white font-semibold shadow-lg transform scale-[1.02]"
        : component.disabled
        ? "hover:bg-slate-700/30"
        : "text-slate-300 hover:text-sky-300 hover:bg-slate-700/50 hover:shadow-md hover:scale-[1.01]"
    }
    `}
    >
      <Icon
        name={component.iconName}
        className={`w-5 h-5 flex-shrink-0 transition-colors ${
          selectedComponentId === component.id && !component.disabled
            ? "text-white"
            : component.disabled
            ? "text-slate-600"
            : "text-slate-400 group-hover:text-sky-400"
        }`}
      />
      <span className="truncate">{component.name}</span>
      {component.disabled && (
        <span className="ml-auto text-xs bg-slate-600 text-slate-400 px-1.5 py-0.5 rounded-full">
          Soon
        </span>
      )}
    </button>
  );
};

export default ComponentSelectButton;
