import ButtonConfigurator from "../Button/Button-Configurator/ButtonConfigurator";
import useComponentStore from "../../store/componentStore";
import InputConfigurator from "../Input/Input-Configurator/InputConfigurator";
import DropdownConfigurator from "../Dropdown/Dropdown-Configurator/DropdownConfigurator";

const Configurator = () => {
  const { currentComponent } = useComponentStore();

  switch (currentComponent.id) {
    case "button":
      return <ButtonConfigurator />;
    case "input":
      return <InputConfigurator />;
    case "dropdown":
      return <DropdownConfigurator />;
    default:
      return <div>Select a component to customize</div>;
  }
};

export default Configurator;
