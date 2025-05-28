import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { obscureTextSymbolOptions } from "./config-options";

function FieldConfig() {
  const {
    isRequired,
    setIsRequired,
    useObscuredText,
    setUseObscuredText,
    maxLength,
    setMaxLength,
    minLength,
    setMinLength,
    inputType,
    obscureTextSymbol,
    setObscureTextSymbol,
  } = useInputStore();

  return (
    <div>
      <ConfigSection title="Field Settings" icon="Settings2">
        <ConfigItem
          title="Is Required?"
          type="switch"
          value={isRequired}
          onChange={setIsRequired}
        />
        <ConfigItem
          title="Use Obscured Text?"
          type="switch"
          value={useObscuredText}
          onChange={setUseObscuredText}
          disabled={inputType !== "password"}
        />
        <ConfigItem
          title="Obscure text Symbol"
          type="select"
          value={obscureTextSymbol}
          onChange={setObscureTextSymbol}
          disabled={!useObscuredText}
          options={obscureTextSymbolOptions}
        />
        <ConfigItem
          title="Max Length"
          type="input"
          value={String(maxLength)}
          onChange={(val) => setMaxLength(Number(val))}
        />
        <ConfigItem
          title="Min Length"
          type="input"
          value={String(minLength)}
          onChange={(val) => setMinLength(Number(val))}
        />
      </ConfigSection>
    </div>
  );
}

export default FieldConfig;
