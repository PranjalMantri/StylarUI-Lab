import LabelConfig from "./LabelConfig";
import SliderStyleConfig from "./SliderStyleConfig";
import BehaviorConfig from "./BehaviorConfig";
import TooltipConfig from "./TooltipConfig";

function SliderConfigurator() {
  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
      <SliderStyleConfig />
      <BehaviorConfig />
      <LabelConfig />
      <TooltipConfig />
    </div>
  );
}

export default SliderConfigurator;
