import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function FieldConfig() {
  const isRequired = useInputStore((state) => state.isRequired);
  const setIsRequired = useInputStore((state) => state.setIsRequired);
  const maxLength = useInputStore((state) => state.maxLength);
  const setMaxLength = useInputStore((state) => state.setMaxLength);
  const minLength = useInputStore((state) => state.minLength);
  const setMinLength = useInputStore((state) => state.setMinLength);

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
