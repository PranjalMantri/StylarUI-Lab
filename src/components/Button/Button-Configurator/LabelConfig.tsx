import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function LabelConfig() {
  const { label, setLabel } = useButtonStore();

  return (
    <div>
      <ConfigSection title={"Label"} icon={"Type"}>
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

export default LabelConfig;
