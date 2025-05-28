import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { inputTypeOptions } from "./config-options";

const ContentConfig = () => {
  const {
    inputType,
    setInputType,
    placeholderText,
    setPlaceholderText,
    valueText,
    setValueText,
  } = useInputStore();

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
