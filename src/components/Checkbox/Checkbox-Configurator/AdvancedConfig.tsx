import ConfigSection from "../../ui/ConfigSection";
import ConfigItem from "../../ui/ConfigItem";
import useCheckboxStore from "../../../store/checkboxStore";

function AdvancedConfig() {
  const disabled = useCheckboxStore((state) => state.disabled);
  const setDisabled = useCheckboxStore((state) => state.setDisabled);
  const readOnly = useCheckboxStore((state) => state.readOnly);
  const setReadOnly = useCheckboxStore((state) => state.setReadOnly);
  const tooltip = useCheckboxStore((state) => state.tooltip);
  const setTooltip = useCheckboxStore((state) => state.setTooltip);

  return (
    <ConfigSection title={"Advanced Settings"} icon={"Settings"}>
      <ConfigItem
        title={"Disabled"}
        type={"switch"}
        value={disabled}
        onChange={setDisabled}
      />
      <ConfigItem
        title={"Read Only"}
        type={"switch"}
        value={readOnly}
        onChange={setReadOnly}
      />
      <ConfigItem
        title={"Tooltip"}
        type={"input"}
        value={tooltip}
        onChange={setTooltip}
        placeholder="Enter tooltip text"
      />
    </ConfigSection>
  );
}

export default AdvancedConfig;
