import useDropdownStore from "../../../store/dropdownStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function SelectedOptionConfig() {
  const selectedOptionTextColor = useDropdownStore(
    (state) => state.selectedOptionTextColor
  );
  const setSelectedOptionTextColor = useDropdownStore(
    (state) => state.setSelectedOptionTextColor
  );
  const selectedOptionBgColor = useDropdownStore(
    (state) => state.selectedOptionBgColor
  );
  const setSelectedOptionBgColor = useDropdownStore(
    (state) => state.setSelectedOptionBgColor
  );

  return (
    <div>
      <ConfigSection title={"Selected Option Styles"} icon={"BadgeCheck"}>
        <ConfigItem
          title={"Selected Options Text Color"}
          type={"color"}
          value={selectedOptionTextColor}
          onChange={setSelectedOptionTextColor}
        ></ConfigItem>
        <ConfigItem
          title={"Selected Options Background"}
          type={"color"}
          value={selectedOptionBgColor}
          onChange={setSelectedOptionBgColor}
        ></ConfigItem>
      </ConfigSection>
    </div>
  );
}

export default SelectedOptionConfig;
