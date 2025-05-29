import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { borderWidths, borderStyles, sidesOptions } from "./config-options";

const BorderConfig = () => {
  const borderWidth = useInputStore((state) => state.borderWidth);
  const setBorderWidth = useInputStore((state) => state.setBorderWidth);
  const borderColor = useInputStore((state) => state.borderColor);
  const setBorderColor = useInputStore((state) => state.setBorderColor);
  const borderStyle = useInputStore((state) => state.borderStyle);
  const setBorderStyle = useInputStore((state) => state.setBorderStyle);
  const borderSide = useInputStore((state) => state.borderSide);
  const setBorderSide = useInputStore((state) => state.setBorderSide);

  return (
    <ConfigSection title="Border" icon="Layers">
      <div className="grid grid-cols-2 gap-x-4">
        <ConfigItem
          title="Border Width"
          type="select"
          value={borderWidth}
          onChange={setBorderWidth}
          options={borderWidths}
        />
        <ConfigItem
          title="Border Style"
          type="select"
          value={borderStyle}
          onChange={setBorderStyle}
          options={borderStyles}
        />
        <ConfigItem
          title="Border Color"
          type="color"
          value={borderColor}
          onChange={setBorderColor}
        />
        <ConfigItem
          title="Border Sides"
          type="select"
          value={borderSide}
          onChange={setBorderSide}
          options={sidesOptions}
        />
      </div>
    </ConfigSection>
  );
};

export default BorderConfig;
