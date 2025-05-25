import AdvancedConfig from "./AdvancedConfig";
import BorderConfig from "./BorderConfig";
import BoxShadowConfig from "./BoxShadowConfig";
import CoreAppearanceConfig from "./CoreAppearanceConfig";
import GradientConfig from "./GradientConfig";
import IconsConfig from "./IconsConfig";
import LabelConfig from "./LabelConfig";
import OtherConfig from "./OtherConfig";
import SizingSpacingConfig from "./SizingSpacingConfig";
import TransitionConfig from "./TransitionConfig";
import TypographyConfig from "./TypographyConfig";

function ButtonConfigurator() {
  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
      <LabelConfig />
      <CoreAppearanceConfig />
      <GradientConfig />
      <BorderConfig />
      <BoxShadowConfig />
      <SizingSpacingConfig />
      <TypographyConfig />
      <IconsConfig />
      <TransitionConfig />
      <AdvancedConfig />
      <OtherConfig />
    </div>
  );
}

export default ButtonConfigurator;
