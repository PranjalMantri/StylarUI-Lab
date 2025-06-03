import useSpinnerStore from "../../../store/spinnerStore";
import { backgroundTypeOptions } from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function BackgroundConfig() {
  const backgroundType = useSpinnerStore((state) => state.backgroundType);
  const setBackgroundType = useSpinnerStore((state) => state.setBackgroundType);
  const overlayColor = useSpinnerStore((state) => state.overlayColor);
  const setOverlayColor = useSpinnerStore((state) => state.setOverlayColor);

  return (
    <>
      <ConfigSection title="Background Settings" icon="SquareSplitVertical">
        <ConfigItem
          title={"Background Type"}
          type={"select"}
          value={backgroundType}
          onChange={setBackgroundType}
          options={backgroundTypeOptions}
        />
        <ConfigItem
          title={"Overlay Color"}
          type={"color"}
          value={overlayColor}
          onChange={setOverlayColor}
        />
      </ConfigSection>
    </>
  );
}

export default BackgroundConfig;
