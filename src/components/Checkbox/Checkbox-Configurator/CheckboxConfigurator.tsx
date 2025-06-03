import AdvancedConfig from "./AdvancedConfig";
import BorderConfig from "./BorderConfig";
import BoxShadowConfig from "./BoxShadowConfig";
import CheckboxSizing from "./CheckboxSizing";
import CoreAppearance from "./CoreAppearance";
import LabelConfig from "./LabelConfig";

function CheckboxConfigurator() {
  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
      <LabelConfig />
      <CoreAppearance />
      <BorderConfig />
      <BoxShadowConfig />
      <CheckboxSizing />
      <AdvancedConfig />
    </div>
  );
}

export default CheckboxConfigurator;
