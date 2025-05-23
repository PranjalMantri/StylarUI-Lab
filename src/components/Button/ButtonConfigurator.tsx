import useButtonStore from "../../store/useButtonStore";
import ConfigItem from "../ui/ConfigItem";
import ConfigSection from "../ui/ConfigSection";

function ButtonConfigurator() {
  const { label, setLabel } = useButtonStore();

  console.log("Label is: ", label);

  return (
    <div>
      <ConfigSection title={"Label and Content"} icon={"TextIcon"}>
        <ConfigItem
          title={"Button Label"}
          type={"input"}
          value={label}
          onChange={setLabel}
        ></ConfigItem>
      </ConfigSection>
    </div>
  );
}

export default ButtonConfigurator;
