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
  const width = useButtonStore((state) => state.width);
  const setWidth = useButtonStore((state) => state.setWidth);
  const height = useButtonStore((state) => state.height);
  const setHeight = useButtonStore((state) => state.setHeight);
  const paddingX = useButtonStore((state) => state.paddingX);
  const setPaddingX = useButtonStore((state) => state.setPaddingX);
  const paddingY = useButtonStore((state) => state.paddingY);
  const setPaddingY = useButtonStore((state) => state.setPaddingY);
  const marginX = useButtonStore((state) => state.marginX);
  const setMarginX = useButtonStore((state) => state.setMarginX);
  const marginY = useButtonStore((state) => state.marginY);
  const setMarginY = useButtonStore((state) => state.setMarginY);

  return (
    <div>
      <ConfigSection title={"Sizing and Spacing"} icon={"Scan"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title={"Height"}
            type={"select"}
            value={height}
            onChange={setHeight}
            options={heightOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Width"}
            type={"select"}
            value={width}
            onChange={setWidth}
            options={widthOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Padding X"}
            type={"select"}
            value={paddingX}
            onChange={setPaddingX}
            options={paddingOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Padding Y"}
            type={"select"}
            value={paddingY}
            onChange={setPaddingY}
            options={paddingOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Margin X"}
            type={"select"}
            value={marginX}
            onChange={setMarginX}
            options={marginOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Margin Y"}
            type={"select"}
            value={marginY}
            onChange={setMarginY}
            options={marginOptions}
          ></ConfigItem>
        </div>
      </ConfigSection>
    </div>
  );
}

export default SizingSpacingConfig;
