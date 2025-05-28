import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  fontSizeOptions,
  fontWeightOptions,
  textAlignOptions,
} from "./config-options";

const AppearanceConfig = () => {
  const {
    valueTextColor,
    setValueTextColor,
    valueFontSize,
    setValueFontSize,
    valueFontWeight,
    setValueFontWeight,
    valueTextAlign,
    setValueTextAlign,
    backgroundColor,
    setBackgroundColor,
  } = useInputStore();

  return (
    <>
      <ConfigSection title={"Input Appearance"} icon={"Palette"}>
        <ConfigItem
          title="Background color"
          type="color"
          value={backgroundColor}
          onChange={setBackgroundColor}
        />
        <div className="grid grid-cols-2 gap-x-4">
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
