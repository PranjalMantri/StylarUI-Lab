import useSliderStore from "../../../store/sliderStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function TooltipConfig() {
  const isDisabled = useSliderStore((state) => state.isDisabled);
  const setIsDisabled = useSliderStore((state) => state.setIsDisabled);
  const isReadOnly = useSliderStore((state) => state.isReadOnly);
  const setIsReadOnly = useSliderStore((state) => state.setIsReadOnly);
  const toolTip = useSliderStore((state) => state.toolTip);
  const setToolTip = useSliderStore((state) => state.setToolTip);

  return (
    <ConfigSection title={"Advanced Settings"} icon={"Settings"}>
      <ConfigItem
        title={"Disabled"}
        type={"switch"}
        value={isDisabled}
        onChange={setIsDisabled}
      />
      <ConfigItem
        title={"Read Only"}
        type={"switch"}
        value={isReadOnly}
        onChange={setIsReadOnly}
      />
      <ConfigItem
        title={"Tooltip"}
        type={"input"}
        value={toolTip}
        onChange={setToolTip}
        placeholder="Enter tooltip text"
      />
    </ConfigSection>
  );
}

export default TooltipConfig;
