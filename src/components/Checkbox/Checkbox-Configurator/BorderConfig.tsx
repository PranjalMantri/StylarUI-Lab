import useCheckboxStore from "../../../store/checkboxStore";
import { borderWidths } from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

const BorderConfig = () => {
  const borderWidth = useCheckboxStore((state) => state.borderWidth);
  const setBorderWidth = useCheckboxStore((state) => state.setBorderWidth);
  const borderColor = useCheckboxStore((state) => state.borderColor);
  const setBorderColor = useCheckboxStore((state) => state.setBorderColor);

  return (
    <ConfigSection title="Border" icon="Layers">
      <ConfigItem
        title="Border Width"
        type="select"
        value={borderWidth}
        onChange={setBorderWidth}
        options={borderWidths}
      />
      <ConfigItem
        title="Border Color"
        type="color"
        value={borderColor}
        onChange={setBorderColor}
      />
    </ConfigSection>
  );
};

export default BorderConfig;
