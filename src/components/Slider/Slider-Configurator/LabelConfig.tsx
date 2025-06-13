import useSliderStore from "../../../store/sliderStore";
import {
  fontSizeOptions,
  fontWeightOptions,
  positionOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function LabelConfig() {
  const isLabelDisplayed = useSliderStore((state) => state.isLabelDisplayed);
  const setIsLabelDisplayed = useSliderStore(
    (state) => state.setIsLabelDisplayed
  );
  const labelText = useSliderStore((state) => state.labelText);
  const setLabelText = useSliderStore((state) => state.setLabelText);
  const labelTextColor = useSliderStore((state) => state.labelTextColor);
  const setLabelTextColor = useSliderStore((state) => state.setLabelTextColor);
  const labelPosition = useSliderStore((state) => state.labelPosition);
  const setLabelPosition = useSliderStore((state) => state.setLabelPosition);
  const labelFontSize = useSliderStore((state) => state.labelFontSize);
  const setLabelFontSize = useSliderStore((state) => state.setLabelFontSize);
  const labelFontWeight = useSliderStore((state) => state.labelFontWeight);
  const setLabelFontWeight = useSliderStore(
    (state) => state.setLabelFontWeight
  );

  return (
    <>
      <ConfigSection title="Label Configuration" icon="Tag">
        <ConfigItem
          title={"Display Label?"}
          type={"switch"}
          value={isLabelDisplayed}
          onChange={setIsLabelDisplayed}
        />
        <ConfigItem
          title={"Label Text"}
          type={"input"}
          value={labelText}
          onChange={setLabelText}
          disabled={!isLabelDisplayed}
        />
      </ConfigSection>
      <ConfigSection title={"Label Settings"} icon={"Type"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Label Text Color"}
            type={"color"}
            value={labelTextColor}
            onChange={setLabelTextColor}
          />
          <ConfigItem
            title={"Label Position"}
            type={"select"}
            value={labelPosition}
            onChange={setLabelPosition}
            options={positionOptions}
          />
          <ConfigItem
            title="Font Size"
            type="select"
            value={labelFontSize}
            onChange={setLabelFontSize}
            options={fontSizeOptions}
          />
          <ConfigItem
            title="Font Weight"
            type="select"
            value={labelFontWeight}
            onChange={setLabelFontWeight}
            options={fontWeightOptions}
          />
        </div>
      </ConfigSection>
    </>
  );
}

export default LabelConfig;
