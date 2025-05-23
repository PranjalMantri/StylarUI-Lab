import type { ReactNode } from "react";
import { iconMap } from "../../constants/IconMap";

interface ConfigSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  classname?: string;
  contentClassName?: string;
}

const ConfigSection: React.FC<ConfigSectionProps> = ({
  title,
  icon,
  children,
  classname = "",
  contentClassName = "",
}) => {
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <div
      className={`bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 mb-6 ${classname}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center text-sm font-medium text-sky-300 mb-2">
          <Icon className="w-4 h-4 mr-2 shrink-0" />
          {title}
        </div>

        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

export default ConfigSection;
