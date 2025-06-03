import ConfigSection from "../../ui/ConfigSection";
import useDropdownStore from "../../../store/dropdownStore";
import ConfigItem from "../../ui/ConfigItem";
import {
  heightOptions,
  widthOptions,
  paddingOptions,
  marginOptions,
} from "../../../utils/config/config-options";

function SizingSpacingConfig() {
  const width = useDropdownStore((state) => state.width);
  const setWidth = useDropdownStore((state) => state.setWidth);
  const height = useDropdownStore((state) => state.height);
  const setHeight = useDropdownStore((state) => state.setHeight);
  const paddingX = useDropdownStore((state) => state.paddingX);
  const setPaddingX = useDropdownStore((state) => state.setPaddingX);
  const paddingY = useDropdownStore((state) => state.paddingY);
  const setPaddingY = useDropdownStore((state) => state.setPaddingY);
  const marginX = useDropdownStore((state) => state.marginX);
  const setMarginX = useDropdownStore((state) => state.setMarginX);
  const marginY = useDropdownStore((state) => state.marginY);
  const setMarginY = useDropdownStore((state) => state.setMarginY);

  return (
    <div>
      <ConfigSection title={"Sizing and Spacing"} icon={"Scan"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
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
