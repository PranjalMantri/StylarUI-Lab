import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  heightOptions,
  widthOptions,
  paddingOptions,
  marginOptions,
} from "./config-options";

function SizingSpacingConfig() {
  const {
    buttonWidth,
    setButtonWidth,
    buttonHeight,
    setButtonHeight,
    buttonPaddingX,
    setButtonPaddingX,
    buttonPaddingY,
    setButtonPaddingY,
    buttonMarginX,
    setButtonMarginX,
    buttonMarginY,
    setButtonMarginY,
  } = useButtonStore();

  return (
    <div>
      <ConfigSection title={"Sizing and Spacing"} icon={"Scan"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title={"Height"}
            type={"select"}
            value={buttonHeight}
            onChange={setButtonHeight}
            options={heightOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Width"}
            type={"select"}
            value={buttonWidth}
            onChange={setButtonWidth}
            options={widthOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Padding X"}
            type={"select"}
            value={buttonPaddingX}
            onChange={setButtonPaddingX}
            options={paddingOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Padding Y"}
            type={"select"}
            value={buttonPaddingY}
            onChange={setButtonPaddingY}
            options={paddingOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Margin X"}
            type={"select"}
            value={buttonMarginX}
            onChange={setButtonMarginX}
            options={marginOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Margin Y"}
            type={"select"}
            value={buttonMarginY}
            onChange={setButtonMarginY}
            options={marginOptions}
          ></ConfigItem>
        </div>
      </ConfigSection>
    </div>
  );
}

export default SizingSpacingConfig;
