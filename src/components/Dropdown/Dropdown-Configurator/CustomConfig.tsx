import useDropdownStore from "../../../store/dropdownStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function CustomConfig() {
  const labelCustomClass = useDropdownStore((state) => state.labelCustomClass);
  const setLabelCustomClass = useDropdownStore(
    (state) => state.setLabelCustomClass
  );
  const optionCustomClass = useDropdownStore(
    (state) => state.optionCustomClass
  );
  const setOptionCustomClass = useDropdownStore(
    (state) => state.setOptionCustomClass
  );

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
          value={optionCustomClass}
          onChange={setOptionCustomClass}
          placeholder="e.g., bg-gray-100 border-red-500"
        />
      </ConfigSection>
    </div>
  );
}

export default CustomConfig;
