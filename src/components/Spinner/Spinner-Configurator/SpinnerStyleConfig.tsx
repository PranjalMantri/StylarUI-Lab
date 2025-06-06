import useSpinnerStore from "../../../store/spinnerStore";
import {
  spinnerDirectionOptions,
  spinnerSizeOptions,
  spinnerThicknessOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function SpinnerStyleConfig() {
  const spinnerDirection = useSpinnerStore((state) => state.spinnerDirection);
  const setSpinnerDirection = useSpinnerStore(
    (state) => state.setSpinnerDirection
  );
  const spinnerSize = useSpinnerStore((state) => state.spinnerSize);
  const setSpinnerSize = useSpinnerStore((state) => state.setSpinnerSize);
  const spinnerThickness = useSpinnerStore((state) => state.spinnerThickness);
  const setSpinnerThickness = useSpinnerStore(
    (state) => state.setSpinnerThickness
  );
  const spinnerColor = useSpinnerStore((state) => state.spinnerColor);
  const setSpinnerColor = useSpinnerStore((state) => state.setSpinnerColor);

  return (
    <div>
      <ConfigSection title={"Spinner Style"} icon={"LoaderCircle"}>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Direction"}
            type={"select"}
            value={spinnerDirection}
            onChange={setSpinnerDirection}
            options={spinnerDirectionOptions}
          />
          <ConfigItem
            title={"Size"}
            type={"select"}
            value={spinnerSize}
            onChange={setSpinnerSize}
            options={spinnerSizeOptions}
          />
          <ConfigItem
            title={"Thickness"}
            type={"select"}
            value={spinnerThickness}
            onChange={setSpinnerThickness}
            options={spinnerThicknessOptions}
          />

          <ConfigItem
            title={"Color"}
            type={"color"}
            value={spinnerColor}
            onChange={setSpinnerColor}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default SpinnerStyleConfig;
