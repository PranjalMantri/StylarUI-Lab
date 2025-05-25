import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function CoreAppearanceConfig() {
  const {
    textColor,
    setTextColor,
    backgroundColor,
    setBackgroundColor,
    hoverTextColor,
    setHoverTextColor,
    hoverBackground,
    setHoverBackground,
  } = useButtonStore();

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
