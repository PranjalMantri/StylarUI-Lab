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
  const selectedOptionHoverTextColor = useDropdownStore(
    (state) => state.selectedOptionHoverTextColor
  );
  const setSelectedOptionHoverTextColor = useDropdownStore(
    (state) => state.setSelectedOptionHoverTextColor
  );
  const selectedOptionHoverBgColor = useDropdownStore(
    (state) => state.selectedOptionHoverBgColor
  );
  const setSelectedOptionHoverBgColor = useDropdownStore(
    (state) => state.setSelectedOptionHoverBgColor
  );

  return (
    <div>
      <ConfigSection title={"Selected Option Styles"} icon={"BadgeCheck"}>
        <div className="grid grid-cols-2 gap-x-4">
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
          <ConfigItem
            title={"Selected Options Hover Text Color"}
            type={"color"}
            value={selectedOptionHoverTextColor}
            onChange={setSelectedOptionHoverTextColor}
          ></ConfigItem>
          <ConfigItem
            title={"Selected Options Hover Background"}
            type={"color"}
            value={selectedOptionHoverBgColor}
            onChange={setSelectedOptionHoverBgColor}
          ></ConfigItem>
        </div>
      </ConfigSection>
    </div>
  );
}

export default SelectedOptionConfig;
