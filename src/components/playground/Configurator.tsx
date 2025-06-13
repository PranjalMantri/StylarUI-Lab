import ButtonConfigurator from "../Button/Button-Configurator/ButtonConfigurator";
import useComponentStore from "../../store/componentStore";
import InputConfigurator from "../Input/Input-Configurator/InputConfigurator";
import DropdownConfigurator from "../Dropdown/Dropdown-Configurator/DropdownConfigurator";
import CheckboxConfigurator from "../Checkbox/Checkbox-Configurator/CheckboxConfigurator";
import SpinnerConfigurator from "../Spinner/Spinner-Configurator/SpinnerConfigurator";
import SliderConfigurator from "../Slider/Slider-Configurator/SliderConfigurator";

const Configurator = () => {
  const { currentComponent } = useComponentStore();

  switch (currentComponent.id) {
    case "button":
      return <ButtonConfigurator />;
    case "input":
      return <InputConfigurator />;
    case "dropdown":
      return <DropdownConfigurator />;
    case "checkbox":
      return <CheckboxConfigurator />;
    case "spinner":
      return <SpinnerConfigurator />;
    case "slider":
      return <SliderConfigurator />;
    default:
      return <div>Select a component to customize</div>;
  }
};

export default Configurator;
