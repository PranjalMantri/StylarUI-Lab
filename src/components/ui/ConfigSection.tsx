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

  console.log(Icon);
  console.log(typeof Icon);

  return (
    <div
      className={`bg-slate-700/70 p-4 rounded-lg border border-slate-200 shadow-sm mb-6 ${classname}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <Icon className="mr-2.5 text-sky-400 text-lg" />
          <h3 className="text-base font-medium text-slate-400">{title}</h3>
        </div>

        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

export default ConfigSection;
