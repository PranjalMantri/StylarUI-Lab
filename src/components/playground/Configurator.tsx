import ButtonConfigurator from "../Button/Button-Configurator/ButtonConfigurator";
import useComponentStore from "../../store/componentStore";
import InputConfigurator from "../Input/Input-Configurator/InputConfigurator";

const Configurator = () => {
  const { currentComponent } = useComponentStore();

  switch (currentComponent.id) {
    case "button":
      return <ButtonConfigurator />;
    case "input":
      return <InputConfigurator />;
    default:
      return <div>Select a component to customize</div>;
  }
};

export default Configurator;
