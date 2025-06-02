import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  transitionPropertyOptions,
  durationOptions,
  timingFunctionOptions,
  delayOptions,
} from "../../../utils/config/config-options";

function TransitionConfig() {
  const baseTransition = useButtonStore((state) => state.baseTransition);
  const setBaseTransition = useButtonStore((state) => state.setBaseTransition);
  const timingFunction = useButtonStore((state) => state.timingFunction);
  const setTimingFunction = useButtonStore((state) => state.setTimingFunction);
  const duration = useButtonStore((state) => state.duration);
  const setDuration = useButtonStore((state) => state.setDuration);
  const delay = useButtonStore((state) => state.delay);
  const setDelay = useButtonStore((state) => state.setDelay);

  return (
    <div>
      {" "}
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
