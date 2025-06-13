import useSliderStore from "../../../store/sliderStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function BehaviorConfig() {
  const minValue = useSliderStore((state) => state.minValue);
  const setMinValue = useSliderStore((state) => state.setMinValue);
  const maxValue = useSliderStore((state) => state.maxValue);
  const setMaxValue = useSliderStore((state) => state.setMaxValue);
  const defaultValue = useSliderStore((state) => state.defaultValue);
  const setDefaultValue = useSliderStore((state) => state.setDefaultValue);
  const isShowValue = useSliderStore((state) => state.isShowValue);
  const setIsShowValue = useSliderStore((state) => state.setIsShowValue);

  return (
    <div>
      <ConfigSection title="Behaviour and Range" icon="SlidersHorizontal">
        <ConfigItem
          title="Min Value"
          type="input"
          value={String(minValue)}
          onChange={(val) => setMinValue(Number(val))}
        />
        <ConfigItem
          title="Max Value"
          type="input"
          value={String(maxValue)}
          onChange={(val) => setMaxValue(Number(val))}
        />
        <ConfigItem
          title="Default Value"
          type="input"
          value={String(defaultValue)}
          onChange={(val) => setDefaultValue(Number(val))}
        />

        <ConfigItem
          title="Show Value?"
          type="switch"
          value={isShowValue}
          onChange={setIsShowValue}
        />
      </ConfigSection>
    </div>
  );
}

export default BehaviorConfig;
