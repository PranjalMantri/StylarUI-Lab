import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { obscureTextSymbolOptions } from "./config-options";

function FieldConfig() {
  const isRequired = useInputStore((state) => state.isRequired);
  const setIsRequired = useInputStore((state) => state.setIsRequired);
  const useObscuredText = useInputStore((state) => state.useObscuredText);
  const setUseObscuredText = useInputStore((state) => state.setUseObscuredText);
  const maxLength = useInputStore((state) => state.maxLength);
  const setMaxLength = useInputStore((state) => state.setMaxLength);
  const minLength = useInputStore((state) => state.minLength);
  const setMinLength = useInputStore((state) => state.setMinLength);
  const inputType = useInputStore((state) => state.inputType);
  const obscureTextSymbol = useInputStore((state) => state.obscureTextSymbol);
  const setObscureTextSymbol = useInputStore((state) => state.setObscureTextSymbol);

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
