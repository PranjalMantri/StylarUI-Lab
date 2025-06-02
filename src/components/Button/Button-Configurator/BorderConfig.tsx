import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  borderWidths,
  borderStyles,
  sidesOptions,
} from "../../../utils/config/config-options";

function BorderConfig() {
  const borderWidth = useButtonStore((state) => state.borderWidth);
  const setBorderWidth = useButtonStore((state) => state.setBorderWidth);
  const borderStyle = useButtonStore((state) => state.borderStyle);
  const setBorderStyle = useButtonStore((state) => state.setBorderStyle);
  const borderSide = useButtonStore((state) => state.borderSide);
  const setBorderSide = useButtonStore((state) => state.setBorderSide);
  const borderColor = useButtonStore((state) => state.borderColor);
  const setBorderColor = useButtonStore((state) => state.setBorderColor);

  return (
    <div>
      <ConfigSection title="Border" icon="Layers">
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Border Width"
            type="select"
            value={borderWidth}
            onChange={setBorderWidth}
            options={borderWidths}
          />
          <ConfigItem
            title="Border Style"
            type="select"
            value={borderStyle}
            onChange={setBorderStyle}
            options={borderStyles}
          />
          <ConfigItem
            title="Border Color"
            type="color"
            value={borderColor}
            onChange={setBorderColor}
          />
          <ConfigItem
            title="Border Sides"
            type="select"
            value={borderSide}
            onChange={setBorderSide}
            options={sidesOptions}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default BorderConfig;
