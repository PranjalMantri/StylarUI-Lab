import useInputStore from "../../../store/useInputStore";
import {
  fontSizeOptions,
  fontWeightOptions,
  textAlignOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

const AppearanceConfig = () => {
  const valueTextColor = useInputStore((state) => state.valueTextColor);
  const setValueTextColor = useInputStore((state) => state.setValueTextColor);
  const valueFontSize = useInputStore((state) => state.valueFontSize);
  const setValueFontSize = useInputStore((state) => state.setValueFontSize);
  const valueFontWeight = useInputStore((state) => state.valueFontWeight);
  const setValueFontWeight = useInputStore((state) => state.setValueFontWeight);
  const valueTextAlign = useInputStore((state) => state.valueTextAlign);
  const setValueTextAlign = useInputStore((state) => state.setValueTextAlign);
  const backgroundColor = useInputStore((state) => state.backgroundColor);
  const setBackgroundColor = useInputStore((state) => state.setBackgroundColor);

  return (
    <>
      <ConfigSection title={"Input Appearance"} icon={"Palette"}>
        <ConfigItem
          title="Background color"
          type="color"
          value={backgroundColor}
          onChange={setBackgroundColor}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title="Value Text Color"
            type="color"
            value={valueTextColor}
            onChange={setValueTextColor}
          />
          <ConfigItem
            title={"Value Font Size"}
            type={"select"}
            value={valueFontSize}
            onChange={setValueFontSize}
            options={fontSizeOptions}
          />
          <ConfigItem
            title={"Value Font Weight"}
            type={"select"}
            value={valueFontWeight}
            onChange={setValueFontWeight}
            options={fontWeightOptions}
          />
          <ConfigItem
            title={"Value Text Align"}
            type={"select"}
            value={valueTextAlign}
            onChange={setValueTextAlign}
            options={textAlignOptions}
          />
        </div>
      </ConfigSection>
    </>
  );
};

export default AppearanceConfig;
