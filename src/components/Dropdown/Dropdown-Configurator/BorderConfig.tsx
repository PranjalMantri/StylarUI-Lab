import useDropdownStore from "../../../store/dropdownStore";
import {
  borderStyles,
  borderWidths,
  sidesOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function BorderConfig() {
  const borderWidth = useDropdownStore((state) => state.borderWidth);
  const setBorderWidth = useDropdownStore((state) => state.setBorderWidth);
  const borderStyle = useDropdownStore((state) => state.borderStyle);
  const setBorderStyle = useDropdownStore((state) => state.setBorderStyle);
  const borderSide = useDropdownStore((state) => state.borderSide);
  const setBorderSide = useDropdownStore((state) => state.setBorderSide);
  const borderColor = useDropdownStore((state) => state.borderColor);
  const setBorderColor = useDropdownStore((state) => state.setBorderColor);

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
