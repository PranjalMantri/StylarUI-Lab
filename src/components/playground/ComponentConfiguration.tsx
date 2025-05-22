import type React from "react";

interface ComponentConfigurationProps {
  currentComponent: {
    id: string;
    name: string;
    iconName: string;
    disabled?: boolean;
  };
}

const ComponentConfiguration: React.FC<ComponentConfigurationProps> = ({
  currentComponent,
}) => {
  return (
    <div className="p-6 w-1/3 flex-shrink-0 border-r border-slate-300">
      <h3 className="text-lg font-semibold text-slate-700 mb-4">
        {currentComponent.name} Configuration
      </h3>
    </div>
  );
};

export default ComponentConfiguration;
