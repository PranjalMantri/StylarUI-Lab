import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import useDropdownStore from "../../../store/dropdownStore";
import { fontSizeOptions, fontWeightOptions } from "./options";

function LabelConfig() {
  const label = useDropdownStore((state) => state.label);
  const setLabel = useDropdownStore((state) => state.setLabel);
  const labelColor = useDropdownStore((state) => state.labelColor);
  const setLabelColor = useDropdownStore((state) => state.setLabelColor);
  const labelFontSize = useDropdownStore((state) => state.labelFontSize);
  const setLabelFontSize = useDropdownStore((state) => state.setLabelFontSize);
  const labelFontWeight = useDropdownStore((state) => state.labelFontWeight);
  const setLabelFontWeight = useDropdownStore(
    (state) => state.setLabelFontWeight
  );

  return (
    <div>
      <ConfigSection title={"Label Text"} icon={"Type"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title={"Label"}
            type={"input"}
            value={label}
            onChange={setLabel}
            placeholder={"Enter label text"}
          />
          <ConfigItem
            title={"Label Text Color"}
            type={"color"}
            value={labelColor}
            onChange={setLabelColor}
            placeholder={"Enter label text"}
          />
          <ConfigItem
            title={"Label Font Size"}
            type={"select"}
            value={labelFontSize}
            onChange={setLabelFontSize}
            options={fontSizeOptions}
          />
          <ConfigItem
            title={"Label Font Weight"}
            type={"select"}
            value={labelFontWeight}
            onChange={setLabelFontWeight}
            options={fontWeightOptions}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default LabelConfig;
