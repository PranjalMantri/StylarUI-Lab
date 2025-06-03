import ConfigSection from "../../ui/ConfigSection";
import ConfigItem from "../../ui/ConfigItem";
import useCheckboxStore from "../../../store/checkboxStore";
import {
  paddingOptions as checkboxPaddingOptions,
  marginOptions as checkboxMarginOptions,
  checkboxSizingOptions,
  checkboxGapOptions,
} from "../../../utils/config/config-options";

function CheckboxSizing() {
  const checkboxSize = useCheckboxStore((state) => state.checkboxSize);
  const setCheckboxSize = useCheckboxStore((state) => state.setCheckboxSize);
  const paddingInsideCheckbox = useCheckboxStore(
    (state) => state.paddingInsideCheckbox
  );
  const setPaddingInsideCheckbox = useCheckboxStore(
    (state) => state.setPaddingInsideCheckbox
  );
  const marginAroundCheckbox = useCheckboxStore(
    (state) => state.marginAroundCheckbox
  );
  const setMarginAroundCheckbox = useCheckboxStore(
    (state) => state.setMarginAroundCheckbox
  );
  const gapBetweenCheckmarkAndLabel = useCheckboxStore(
    (state) => state.gapBetweenCheckmarkAndLabel
  );
  const setGapBetweenCheckmarkAndLabel = useCheckboxStore(
    (state) => state.setGapBetweenCheckmarkAndLabel
  );

  return (
    <div>
      <ConfigSection title={"Checkbox Sizing"} icon={"Scan"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Checkbox Size"}
            type={"select"}
            value={checkboxSize}
            onChange={setCheckboxSize}
            options={checkboxSizingOptions}
          />
          <ConfigItem
            title={"Padding Inside Checkbox"}
            type={"select"}
            value={paddingInsideCheckbox}
            onChange={setPaddingInsideCheckbox}
            options={checkboxPaddingOptions}
          />
          <ConfigItem
            title={"Margin Around Checkbox"}
            type={"select"}
            value={marginAroundCheckbox}
            onChange={setMarginAroundCheckbox}
            options={checkboxMarginOptions}
          />
          <ConfigItem
            title={"Gap Between checkmark & label"}
            type={"select"}
            value={gapBetweenCheckmarkAndLabel}
            onChange={setGapBetweenCheckmarkAndLabel}
            options={checkboxGapOptions}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default CheckboxSizing;
