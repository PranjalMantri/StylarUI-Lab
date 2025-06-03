import useInputStore from "../../../store/useInputStore";
import {
  fontSizeOptions,
  fontWeightOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

const LabelConfig = () => {
  const isLabelDisplayed = useInputStore((state) => state.isLabelDisplayed);
  const setIsLabelDisplayed = useInputStore(
    (state) => state.setIsLabelDisplayed
  );
  const labelText = useInputStore((state) => state.labelText);
  const setLabelText = useInputStore((state) => state.setLabelText);
  const labelTextColor = useInputStore((state) => state.labelTextColor);
  const setLabelTextColor = useInputStore((state) => state.setLabelTextColor);
  const labelHoverTextColor = useInputStore(
    (state) => state.labelHoverTextColor
  );
  const setLabelHoverTextColor = useInputStore(
    (state) => state.setLabelHoverTextColor
  );
  const labelFontSize = useInputStore((state) => state.labelFontSize);
  const setLabelFontSize = useInputStore((state) => state.setLabelFontSize);
  const labelFontWeight = useInputStore((state) => state.labelFontWeight);
  const setLabelFontWeight = useInputStore((state) => state.setLabelFontWeight);

  return (
    <>
      <ConfigSection title="Label Visibility" icon="Eye">
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
            title={"Label Hover Text Color"}
            type={"color"}
            value={labelHoverTextColor}
            onChange={setLabelHoverTextColor}
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
};

export default LabelConfig;
