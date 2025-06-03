import useSpinnerStore from "../../../store/spinnerStore";
import { fontSizeOptions } from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

const LabelConfig = () => {
  const isLabelDisplayed = useSpinnerStore((state) => state.isLabelDisplayed);
  const setIsLabelDisplayed = useSpinnerStore(
    (state) => state.setIsLabelDisplayed
  );
  const labelText = useSpinnerStore((state) => state.labelText);
  const setLabelText = useSpinnerStore((state) => state.setLabelText);
  const labelTextColor = useSpinnerStore((state) => state.labelTextColor);
  const setLabelTextColor = useSpinnerStore((state) => state.setLabelTextColor);
  const labelFontSize = useSpinnerStore((state) => state.labelFontSize);
  const setLabelFontSize = useSpinnerStore((state) => state.setLabelFontSize);

  return (
    <>
      <ConfigSection title="Label" icon="Type">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Label Text Color"}
            type={"color"}
            value={labelTextColor}
            onChange={setLabelTextColor}
            disabled={!isLabelDisplayed}
          />
          <ConfigItem
            title="Font Size"
            type="select"
            value={labelFontSize}
            onChange={setLabelFontSize}
            options={fontSizeOptions}
            disabled={!isLabelDisplayed}
          />
        </div>
      </ConfigSection>
    </>
  );
};

export default LabelConfig;
