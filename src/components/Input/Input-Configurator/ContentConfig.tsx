import useInputStore from "../../../store/useInputStore";
import { inputTypeOptions } from "../../../utils/config/config-options";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

const ContentConfig = () => {
  const inputType = useInputStore((state) => state.inputType);
  const setInputType = useInputStore((state) => state.setInputType);
  const placeholderText = useInputStore((state) => state.placeholderText);
  const setPlaceholderText = useInputStore((state) => state.setPlaceholderText);
  const valueText = useInputStore((state) => state.valueText);
  const setValueText = useInputStore((state) => state.setValueText);

  return (
    <ConfigSection title={"Input Content and Type"} icon={"Keyboard"}>
      <ConfigItem
        title="Type of Input"
        type="select"
        value={inputType}
        onChange={setInputType}
        options={inputTypeOptions}
      />
      <ConfigItem
        title={"Placeholder"}
        type={"input"}
        value={placeholderText}
        onChange={setPlaceholderText}
      />
      <ConfigItem
        title={"Value"}
        type={"input"}
        value={String(valueText)}
        onChange={(val) => {
          if (inputType === "number") {
            if (val === "" || /^-?\d*\.?\d*$/.test(val)) {
              setValueText(val);
            }
          } else {
            setValueText(val);
          }
        }}
      />
    </ConfigSection>
  );
};

export default ContentConfig;
