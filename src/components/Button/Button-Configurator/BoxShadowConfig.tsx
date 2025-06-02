import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  borderRadiusOptions,
  boxShadowOptions,
} from "../../../utils/config/config-options";

function BoxShadowConfig() {
  const borderRadius = useButtonStore((state) => state.borderRadius);
  const setBorderRadius = useButtonStore((state) => state.setBorderRadius);
  const boxShadow = useButtonStore((state) => state.boxShadow);
  const setBoxShadow = useButtonStore((state) => state.setBoxShadow);

  return (
    <div>
      <ConfigSection title="Box and Shadow" icon="Box">
        <ConfigItem
          title="Border Radius"
          type="select"
          value={borderRadius}
          onChange={setBorderRadius}
          options={borderRadiusOptions}
        />
        <ConfigItem
          title="Box Shadow"
          type="select"
          value={boxShadow}
          onChange={setBoxShadow}
          options={boxShadowOptions}
        />
      </ConfigSection>
    </div>
  );
}

export default BoxShadowConfig;
