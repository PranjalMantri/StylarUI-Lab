import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { iconPositionOptions } from "./config-options";
import useButtonStore from "../../../store/useButtonStore";

function IconsConfig() {
  const {
    icon,
    setIcon,
    iconPosition,
    setIconPosition,
    isIconUse,
    setIsIconUse,
  } = useButtonStore();

  return (
    <div>
      <ConfigSection title={"Icons"} icon={"Copy"}>
        <ConfigItem
          title={"Use Icon?"}
          type={"switch"}
          value={isIconUse}
          onChange={setIsIconUse}
        ></ConfigItem>

        <ConfigItem
          title={"Icon Position"}
          type={"select"}
          value={iconPosition}
          onChange={setIconPosition}
          options={iconPositionOptions}
          disabled={!isIconUse}
        ></ConfigItem>
        <ConfigItem
          title="Choose an Icon"
          type="icon"
          value={icon}
          onChange={setIcon}
          disabled={!isIconUse}
        />
      </ConfigSection>
      ;
    </div>
  );
}

export default IconsConfig;
