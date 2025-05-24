import type { ReactNode } from "react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ConfigSectionProps {
  title: string;
  icon: keyof typeof LucideIcons;
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
  const IconComponent = LucideIcons[icon] as LucideIcon;

  return (
    <div
      className={`bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 mb-6 ${classname}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center text-sm font-medium text-sky-300 mb-2">
          {IconComponent && <IconComponent className="w-4 h-4 mr-2 shrink-0" />}
          {title}
        </div>

        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

export default ConfigSection;
