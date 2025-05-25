import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import useButtonStore from "../../../store/useButtonStore";
import { gradientDirectionOptions } from "./config-options";

function GradientConfig() {
  const {
    isGradientActive,
    setIsGradientActive,
    gradientDirection,
    setGradientDirection,
    gradientFromColor,
    setGradientFromColor,
    gradientToColor,
    setGradientToColor,
    gradientViaColor,
    setGradientViaColor,
  } = useButtonStore();

  return (
    <div>
      <ConfigSection title={"Gradient Background"} icon={"Paintbrush"}>
        <ConfigItem
          title={"Use Gradient Background?"}
          type={"switch"}
          value={isGradientActive}
          onChange={setIsGradientActive}
        ></ConfigItem>

        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title={"Gradient Direction"}
            type={"select"}
            value={gradientDirection}
            onChange={setGradientDirection}
            disabled={!isGradientActive}
            options={gradientDirectionOptions}
          ></ConfigItem>
          <ConfigItem
            title={"From"}
            type={"color"}
            value={gradientFromColor}
            onChange={setGradientFromColor}
            disabled={!isGradientActive}
          ></ConfigItem>
          <ConfigItem
            title={"To"}
            type={"color"}
            value={gradientToColor}
            onChange={setGradientToColor}
            disabled={!isGradientActive}
          ></ConfigItem>
          <ConfigItem
            title={"Via (optional*)"}
            type={"color"}
            value={gradientViaColor}
            onChange={setGradientViaColor}
            disabled={!isGradientActive}
          ></ConfigItem>
        </div>
      </ConfigSection>
    </div>
  );
}

export default GradientConfig;
