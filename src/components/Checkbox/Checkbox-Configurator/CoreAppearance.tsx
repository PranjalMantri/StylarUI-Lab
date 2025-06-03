import useCheckboxStore from "../../../store/checkboxStore";
import { checkboxStyleOptions } from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function CoreAppearance() {
  const checkboxStyle = useCheckboxStore((state) => state.checkboxStyle);
  const setCheckboxStyle = useCheckboxStore((state) => state.setCheckboxStyle);
  const checkedBackgroundColor = useCheckboxStore(
    (state) => state.checkedBackgroundColor
  );
  const setCheckedBackgroundColor = useCheckboxStore(
    (state) => state.setCheckedBackgroundColor
  );
  const uncheckedBackgroundColor = useCheckboxStore(
    (state) => state.uncheckedBackgroundColor
  );
  const setUncheckedBackgroundColor = useCheckboxStore(
    (state) => state.setUncheckedBackgroundColor
  );
  const checkmarkColor = useCheckboxStore((state) => state.checkmarkColor);
  const setCheckmarkColor = useCheckboxStore(
    (state) => state.setCheckmarkColor
  );
  const focusRingColor = useCheckboxStore((state) => state.focusRingColor);
  const setFocusRingColor = useCheckboxStore(
    (state) => state.setFocusRingColor
  );

  return (
    <div>
      <ConfigSection title={"Core Appearance"} icon={"Palette"}>
        <ConfigItem
          title={"Checkbox Style"}
          type={"select"}
          value={checkboxStyle}
          onChange={setCheckboxStyle}
          options={checkboxStyleOptions}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Checked Background Color"}
            type={"color"}
            value={checkedBackgroundColor}
            onChange={setCheckedBackgroundColor}
          />
          <ConfigItem
            title={"Unchecked Background Color"}
            type={"color"}
            value={uncheckedBackgroundColor}
            onChange={setUncheckedBackgroundColor}
          />
          <ConfigItem
            title={"Checkmark Color"}
            type={"color"}
            value={checkmarkColor}
            onChange={setCheckmarkColor}
          />
          <ConfigItem
            title={"Focus Ring Color"}
            type={"color"}
            value={focusRingColor}
            onChange={setFocusRingColor}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default CoreAppearance;
