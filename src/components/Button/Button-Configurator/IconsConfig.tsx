import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { positionOptions } from "../../../utils/config/config-options";
import useButtonStore from "../../../store/useButtonStore";

function IconsConfig() {
  const icon = useButtonStore((state) => state.icon);
  const setIcon = useButtonStore((state) => state.setIcon);
  const iconPosition = useButtonStore((state) => state.iconPosition);
  const setIconPosition = useButtonStore((state) => state.setIconPosition);
  const isIconUse = useButtonStore((state) => state.isIconUse);
  const setIsIconUse = useButtonStore((state) => state.setIsIconUse);

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
          options={positionOptions}
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
