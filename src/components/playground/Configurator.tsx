import type React from "react";
import ButtonConfigurator from "../Button/ButtonConfigurator";

interface ConfiguratorProps {
  currentComponent: {
    id: string;
    name: string;
    iconName: string;
    disabled?: boolean;
  };
}

const Configurator: React.FC<ConfiguratorProps> = ({ currentComponent }) => {
  switch (currentComponent.id) {
    case "button":
      return <ButtonConfigurator />;
    default:
      return <div>Select a component to customize</div>;
  }
};

export default Configurator;
