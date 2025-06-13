import useSliderStore from "../../../store/sliderStore";
import {
  sliderSizeOptions,
  sliderVariantOptions,
} from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function SliderStyleConfig() {
  const sliderColor = useSliderStore((state) => state.sliderColor);
  const setSliderColor = useSliderStore((state) => state.setSliderColor);
  const sliderSize = useSliderStore((state) => state.sliderSize);
  const setSliderSize = useSliderStore((state) => state.setSliderSize);
  const sliderVariant = useSliderStore((state) => state.sliderVariant);
  const setSliderVariant = useSliderStore((state) => state.setSliderVariant);

  return (
    <div>
      <ConfigSection title={"Style and Appearance"} icon={"Palette"}>
        <ConfigItem
          title={"Slider Color"}
          type={"color"}
          value={sliderColor}
          onChange={setSliderColor}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Slider Size"}
            type={"select"}
            value={sliderSize}
            onChange={setSliderSize}
            options={sliderSizeOptions}
          />
          <ConfigItem
            title={"Slider Variant"}
            type={"select"}
            value={sliderVariant}
            onChange={setSliderVariant}
            options={sliderVariantOptions}
          />
        </div>
      </ConfigSection>
    </div>
  );
}

export default SliderStyleConfig;
