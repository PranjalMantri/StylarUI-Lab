import useCheckboxStore from "../../../store/checkboxStore";
import {
  fontSizeOptions,
  fontWeightOptions,
  positionOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function LabelConfig() {
  const labelText = useCheckboxStore((state) => state.labelText);
  const setLabelText = useCheckboxStore((state) => state.setLabelText);
  const labelPosition = useCheckboxStore((state) => state.labelPosition);
  const setLabelPosition = useCheckboxStore((state) => state.setLabelPosition);
  const labelColor = useCheckboxStore((state) => state.labelColor);
  const setLabelColor = useCheckboxStore((state) => state.setLabelColor);
  const labelFontSize = useCheckboxStore((state) => state.labelFontSize);
  const setLabelFontSize = useCheckboxStore((state) => state.setLabelFontSize);
  const labelFontWeight = useCheckboxStore((state) => state.labelFontWeight);
  const setLabelFontWeight = useCheckboxStore(
    (state) => state.setLabelFontWeight
  );

  return (
    <div>
      <ConfigSection title={"Label"} icon={"Type"}>
        <ConfigItem
          title={"Label Text"}
          type={"input"}
          value={labelText}
          onChange={setLabelText}
          placeholder={"Enter label text"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Label Position"}
            type={"select"}
            value={labelPosition}
            onChange={setLabelPosition}
            options={positionOptions}
          />
          <ConfigItem
            title={"Label Color"}
            type={"color"}
            value={labelColor}
            onChange={setLabelColor}
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
