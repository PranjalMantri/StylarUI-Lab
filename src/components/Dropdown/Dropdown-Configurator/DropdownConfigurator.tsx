import LabelConfig from "./LabelConfig";
import DropdownAppearanceConfig from "./DropdownAppearanceConfig";
import BorderConfig from "./BorderConfig";
import BoxShadowConfig from "./BoxShadowConfig";
import SizingSpacingConfig from "./SizingSpacingConfig";
import OptionConfig from "./OptionConfig";
import TransitionConfig from "./TransitionConfig";
import CustomConfig from "./CustomConfig";
import SelectedOptionConfig from "./SelectedOptionConfig";

function DropdownConfigurator() {
  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
      <LabelConfig />
      <DropdownAppearanceConfig />
      <OptionConfig />
      <SelectedOptionConfig />
      <BorderConfig />
      <BoxShadowConfig />
      <SizingSpacingConfig />
      <TransitionConfig />
      <CustomConfig />
    </div>
  );
}

export default DropdownConfigurator;
