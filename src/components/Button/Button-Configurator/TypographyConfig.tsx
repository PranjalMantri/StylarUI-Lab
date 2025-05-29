import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { fontSizeOptions, fontWeightOptions } from "./config-options";
import useButtonStore from "../../../store/useButtonStore";

function TypographyConfig() {
  const fontSize = useButtonStore((state) => state.fontSize);
  const setFontSize = useButtonStore((state) => state.setFontSize);
  const fontWeight = useButtonStore((state) => state.fontWeight);
  const setFontWeight = useButtonStore((state) => state.setFontWeight);

  return (
    <div>
      <ConfigSection title="Typography" icon="Type">
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Font Size"
            type="select"
            value={fontSize}
            onChange={setFontSize}
            options={fontSizeOptions}
          />
          <ConfigItem
            title="Font Weight"
            type="select"
            value={fontWeight}
            onChange={setFontWeight}
            options={fontWeightOptions}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default TypographyConfig;
