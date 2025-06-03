import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import useDropdownStore from "../../../store/dropdownStore";

function DropdownAppearanceConfig() {
  const textColor = useDropdownStore((state) => state.textColor);
  const setTextColor = useDropdownStore((state) => state.setTextColor);
  const backgroundColor = useDropdownStore((state) => state.backgroundColor);
  const setBackgroundColor = useDropdownStore(
    (state) => state.setBackgroundColor
  );
  const hoverTextColor = useDropdownStore((state) => state.hoverTextColor);
  const setHoverTextColor = useDropdownStore(
    (state) => state.setHoverTextColor
  );
  const hoverBackground = useDropdownStore((state) => state.hoverBackground);
  const setHoverBackground = useDropdownStore(
    (state) => state.setHoverBackground
  );

  return (
    <div>
      <ConfigSection title={"Core Appearance"} icon={"Palette"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Text Color"}
            type={"color"}
            value={textColor}
            onChange={setTextColor}
          ></ConfigItem>
          <ConfigItem
            title={"Background"}
            type={"color"}
            value={backgroundColor}
            onChange={setBackgroundColor}
          ></ConfigItem>
          <ConfigItem
            title={"Hover Text Color"}
            type={"color"}
            value={hoverTextColor}
            onChange={setHoverTextColor}
          ></ConfigItem>
          <ConfigItem
            title={"Hover Background"}
            type={"color"}
            value={hoverBackground}
            onChange={setHoverBackground}
          ></ConfigItem>
        </div>
      </ConfigSection>
    </div>
  );
}

export default DropdownAppearanceConfig;
