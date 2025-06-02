import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import useButtonStore from "../../../store/useButtonStore";
import { gradientDirectionOptions } from "../../../utils/config/config-options";

function GradientConfig() {
  const isGradientActive = useButtonStore((state) => state.isGradientActive);
  const setIsGradientActive = useButtonStore(
    (state) => state.setIsGradientActive
  );
  const gradientDirection = useButtonStore((state) => state.gradientDirection);
  const setGradientDirection = useButtonStore(
    (state) => state.setGradientDirection
  );
  const gradientFromColor = useButtonStore((state) => state.gradientFromColor);
  const setGradientFromColor = useButtonStore(
    (state) => state.setGradientFromColor
  );
  const gradientToColor = useButtonStore((state) => state.gradientToColor);
  const setGradientToColor = useButtonStore(
    (state) => state.setGradientToColor
  );
  const gradientViaColor = useButtonStore((state) => state.gradientViaColor);
  const setGradientViaColor = useButtonStore(
    (state) => state.setGradientViaColor
  );

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
