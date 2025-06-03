import useDropdownStore from "../../../store/dropdownStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";

function OptionConfig() {
  const optionTextColor = useDropdownStore((state) => state.optionTextColor);
  const setOptionTextColor = useDropdownStore(
    (state) => state.setOptionTextColor
  );
  const optionBgColor = useDropdownStore((state) => state.optionBgColor);
  const setOptionBgColor = useDropdownStore((state) => state.setOptionBgColor);
  const optionHoverTextColor = useDropdownStore(
    (state) => state.optionHoverTextColor
  );
  const setOptionHoverTextColor = useDropdownStore(
    (state) => state.setOptionHoverTextColor
  );
  const optionHoverBgColor = useDropdownStore(
    (state) => state.optionHoverBgColor
  );
  const setOptionHoverBgColor = useDropdownStore(
    (state) => state.setOptionHoverBgColor
  );

  return (
    <div>
      <ConfigSection title={"Option Styles"} icon={"Rows3"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-0">
          <ConfigItem
            title={"Options Text Color"}
            type={"color"}
            value={optionTextColor}
            onChange={setOptionTextColor}
          ></ConfigItem>
          <ConfigItem
            title={"Background"}
            type={"color"}
            value={optionBgColor}
            onChange={setOptionBgColor}
          ></ConfigItem>
          <ConfigItem
            title={"Hover Text Color"}
            type={"color"}
            value={optionHoverTextColor}
            onChange={setOptionHoverTextColor}
          ></ConfigItem>
          <ConfigItem
            title={"Hover Background"}
            type={"color"}
            value={optionHoverBgColor}
            onChange={setOptionHoverBgColor}
          ></ConfigItem>
        </div>
      </ConfigSection>
    </div>
  );
}

export default OptionConfig;
