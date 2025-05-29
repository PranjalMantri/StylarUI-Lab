import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  heightOptions,
  widthOptions,
  paddingOptions,
  marginOptions,
} from "./config-options";

function SizingSpacingConfig() {
  const height = useInputStore((state) => state.height);
  const setHeight = useInputStore((state) => state.setHeight);
  const width = useInputStore((state) => state.width);
  const setWidth = useInputStore((state) => state.setWidth);
  const paddingX = useInputStore((state) => state.paddingX);
  const setPaddingX = useInputStore((state) => state.setPaddingX);
  const paddingY = useInputStore((state) => state.paddingY);
  const setPaddingY = useInputStore((state) => state.setPaddingY);
  const marginX = useInputStore((state) => state.marginX);
  const setMarginX = useInputStore((state) => state.setMarginX);
  const marginY = useInputStore((state) => state.marginY);
  const setMarginY = useInputStore((state) => state.setMarginY);

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
