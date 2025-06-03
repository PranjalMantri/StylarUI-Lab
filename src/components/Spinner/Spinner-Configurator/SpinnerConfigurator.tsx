import AnimationConfig from "./AnimationConfig";
import BackgroundConfig from "./BackgroundConfig";
import LabelConfig from "./LabelConfig";
import SpinnerStyleConfig from "./SpinnerStyleConfig";

function SpinnerConfigurator() {
  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
      <SpinnerStyleConfig />
      <AnimationConfig />
      <LabelConfig />
      <BackgroundConfig />
    </div>
  );
}

export default SpinnerConfigurator;
