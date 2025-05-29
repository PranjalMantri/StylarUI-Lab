import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function OtherConfig() {
  const isDisabled = useInputStore((state) => state.isDisabled);
  const setIsDisabled = useInputStore((state) => state.setIsDisabled);
  const isReadOnly = useInputStore((state) => state.isReadOnly);
  const setIsReadOnly = useInputStore((state) => state.setIsReadOnly);

  return (
    <div>
      <ConfigSection title="Other Settings" icon="Settings">
        <ConfigItem
          title="Disabled"
          type="switch"
          value={isDisabled}
          onChange={setIsDisabled}
        />
        <ConfigItem
          title="Read Only"
          type="switch"
          value={isReadOnly}
          onChange={setIsReadOnly}
        />
      </ConfigSection>
    </div>
  );
}

export default OtherConfig;
