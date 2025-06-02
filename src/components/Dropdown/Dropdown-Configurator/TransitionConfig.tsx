import useDropdownStore from "../../../store/dropdownStore";
import {
  transitionPropertyOptions,
  durationOptions,
  timingFunctionOptions,
  delayOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function TransitionConfig() {
  const baseTransition = useDropdownStore((state) => state.baseTransition);
  const setBaseTransition = useDropdownStore(
    (state) => state.setBaseTransition
  );
  const timingFunction = useDropdownStore((state) => state.timingFunction);
  const setTimingFunction = useDropdownStore(
    (state) => state.setTimingFunction
  );
  const duration = useDropdownStore((state) => state.duration);
  const setDuration = useDropdownStore((state) => state.setDuration);
  const delay = useDropdownStore((state) => state.delay);
  const setDelay = useDropdownStore((state) => state.setDelay);

  return (
    <div>
      <ConfigSection title="Transition Settings" icon={"Sparkles"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Base Transition"
            type="select"
            value={baseTransition}
            onChange={setBaseTransition}
            options={transitionPropertyOptions}
          />
          <ConfigItem
            title="Duration"
            type="select"
            value={duration}
            onChange={setDuration}
            options={durationOptions}
          />
          <ConfigItem
            title="Timing Function"
            type="select"
            value={timingFunction}
            onChange={setTimingFunction}
            options={timingFunctionOptions}
          />
          <ConfigItem
            title="Delay"
            type="select"
            value={delay}
            onChange={setDelay}
            options={delayOptions}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default TransitionConfig;
