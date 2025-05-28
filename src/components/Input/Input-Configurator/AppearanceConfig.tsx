import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  fontSizeOptions,
  fontWeightOptions,
  opacityOptions,
  textAlignOptions,
} from "./config-options";

const AppearanceConfig = () => {
  const {
    placeholderColor,
    setPlaceholderColor,
    placeholderFontSize,
    setPlaceholderFontSize,
    placeholderFontWeight,
    setPlaceholderFontWeight,
    placeholderOpacity,
    setPlaceholderOpacity,
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
      <ConfigSection title={"Placeholder Appearance"} icon={"BadgeInfo"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Placeholder color"
            type="color"
            value={placeholderColor}
            onChange={setPlaceholderColor}
          />
          <ConfigItem
            title={"Placeholder font size"}
            type={"select"}
            value={placeholderFontSize}
            onChange={setPlaceholderFontSize}
            options={fontSizeOptions}
          />
          <ConfigItem
            title={"Placeholder font weight"}
            type={"select"}
            value={placeholderFontWeight}
            onChange={setPlaceholderFontWeight}
            options={fontWeightOptions}
          />
          <ConfigItem
            title={"Placeholder Opacity"}
            type={"select"}
            value={placeholderOpacity}
            onChange={setPlaceholderOpacity}
            options={opacityOptions}
          />
        </div>
      </ConfigSection>
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
