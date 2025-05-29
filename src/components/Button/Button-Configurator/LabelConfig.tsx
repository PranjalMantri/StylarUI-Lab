import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function LabelConfig() {
  const label = useButtonStore((state) => state.label);
  const setLabel = useButtonStore((state) => state.setLabel);

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
