import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function CoreAppearanceConfig() {
  const textColor = useButtonStore((state) => state.textColor);
  const setTextColor = useButtonStore((state) => state.setTextColor);
  const backgroundColor = useButtonStore((state) => state.backgroundColor);
  const setBackgroundColor = useButtonStore((state) => state.setBackgroundColor);
  const hoverTextColor = useButtonStore((state) => state.hoverTextColor);
  const setHoverTextColor = useButtonStore((state) => state.setHoverTextColor);
  const hoverBackground = useButtonStore((state) => state.hoverBackground);
  const setHoverBackground = useButtonStore((state) => state.setHoverBackground);

  return (
    <div>
      <ConfigSection title={"Core Appearance"} icon={"Palette"}>
        <div className="grid grid-cols-2 gap-x-4">
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

export default CoreAppearanceConfig;
