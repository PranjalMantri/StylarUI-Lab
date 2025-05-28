import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { fontSizeOptions, fontWeightOptions } from "./config-options";

const LabelConfig = () => {
  const {
    isLabelDisplayed,
    setIsLabelDisplayed,
    labelText,
    setLabelText,
    labelTextColor,
    setLabelTextColor,
    labelHoverTextColor,
    setLabelHoverTextColor,
    labelFontSize,
    setLabelFontSize,
    labelFontWeight,
    setLabelFontWeight,
  } = useInputStore();

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
        <div className="grid grid-cols-2 gap-x-4">
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
