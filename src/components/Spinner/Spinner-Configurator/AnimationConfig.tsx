import useSpinnerStore from "../../../store/spinnerStore";
import {
  animationSpeedOptions,
  delayBeforeSpinsOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function AnimationConfig() {
  const animationSpeed = useSpinnerStore((state) => state.animationSpeed);
  const setAnimationSpeed = useSpinnerStore((state) => state.setAnimationSpeed);
  const delayBeforeSpins = useSpinnerStore((state) => state.delayBeforeSpins);
  const setDelayBeforeSpins = useSpinnerStore(
    (state) => state.setDelayBeforeSpins
  );

  return (
    <div>
      <ConfigSection title={"Spinner Style"} icon={"Zap"}>
        <ConfigItem
          title={"Animation Speed"}
          type={"select"}
          value={animationSpeed}
          onChange={setAnimationSpeed}
          options={animationSpeedOptions}
        />
        <ConfigItem
          title={"Delay Before Spins"}
          type={"select"}
          value={delayBeforeSpins}
          onChange={setDelayBeforeSpins}
          options={delayBeforeSpinsOptions}
        />
      </ConfigSection>
    </div>
  );
}

export default AnimationConfig;
