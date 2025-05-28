import AppearanceConfig from "./AppearanceConfig";
import BorderConfig from "./BorderConfig";
import BoxShadowConfig from "./BoxShadowConfig";
import ContentConfig from "./ContentConfig";
import CustomConfig from "./CustomConfig";
import FieldConfig from "./FieldConfig";
import IconConfig from "./IconConfig";
import LabelConfig from "./LabelConfig";
import OtherConfig from "./OtherConfig";
import SizingSpacingConfig from "./SizingSpacingConfig";

function InputConfigurator() {
  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
      <LabelConfig />
      <ContentConfig />
      <AppearanceConfig />
      <BorderConfig />
      <BoxShadowConfig />
      <SizingSpacingConfig />
      <FieldConfig />
      <IconConfig />
      <CustomConfig />
      <OtherConfig />
    </div>
  );
}

export default InputConfigurator;
