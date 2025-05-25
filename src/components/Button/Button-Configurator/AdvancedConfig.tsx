import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import useButtonStore from "../../../store/useButtonStore";

function AdvancedConfig() {
  const { customClass, setCustomClass } = useButtonStore();

  return (
    <div>
      <ConfigSection title={"Advanced Options"} icon={"Replace"}>
        <ConfigItem
          title={"Custom ClassName Injection"}
          type={"input"}
          value={customClass}
          onChange={setCustomClass}
          placeholder="e.g. my-custom-button animate-pulse"
        ></ConfigItem>
      </ConfigSection>
    </div>
  );
}

export default AdvancedConfig;
