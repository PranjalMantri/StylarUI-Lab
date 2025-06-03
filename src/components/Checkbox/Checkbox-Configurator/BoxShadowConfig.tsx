import useCheckboxStore from "../../../store/checkboxStore";
import {
  borderRadiusOptions,
  boxShadowOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function BoxShadowConfig() {
  const borderRadius = useCheckboxStore((state) => state.borderRadius);
  const setBorderRadius = useCheckboxStore((state) => state.setBorderRadius);
  const boxShadow = useCheckboxStore((state) => state.boxShadow);
  const setBoxShadow = useCheckboxStore((state) => state.setBoxShadow);

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
