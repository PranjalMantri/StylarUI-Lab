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
    <div>
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
