import useButtonStore from "../../../store/useButtonStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import {
  transitionPropertyOptions,
  durationOptions,
  timingFunctionOptions,
  delayOptions,
} from "./config-options";

function TransitionConfig() {
  const {
    baseTransition,
    setBaseTransition,
    timingFunction,
    setTimingFunction,
    duration,
    setDuration,
    delay,
    setDelay,
  } = useButtonStore();

  return (
    <div>
      {" "}
      <ConfigSection title="Transition Settings" icon={"Zap"}>
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
