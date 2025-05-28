import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function CustomConfig() {
  const {
    labelCustomClass,
    setLabelCustomClass,
    inputCustomClass,
    setInputCustomClass,
  } = useInputStore();

  return (
    <div>
      <ConfigSection title="Custom Styling" icon="Paintbrush">
        <ConfigItem
          title="Label Custom Class"
          type="input"
          value={labelCustomClass}
          onChange={setLabelCustomClass}
          placeholder="e.g., text-blue-500 font-bold"
        />
        <ConfigItem
          title="Input Custom Class"
          type="input"
          value={inputCustomClass}
          onChange={setInputCustomClass}
          placeholder="e.g., bg-gray-100 border-red-500"
        />
      </ConfigSection>
    </div>
  );
}

export default CustomConfig;
