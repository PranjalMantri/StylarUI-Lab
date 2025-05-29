import useInputStore from "../../../store/useInputStore";
import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import { iconPositionOptions } from "./config-options";

function IconConfig() {
  const hasIcon = useInputStore((state) => state.hasIcon);
  const setHasIcon = useInputStore((state) => state.setHasIcon);
  const icon = useInputStore((state) => state.icon);
  const setIcon = useInputStore((state) => state.setIcon);
  const iconPosition = useInputStore((state) => state.iconPosition);
  const setIconPosition = useInputStore((state) => state.setIconPosition);
  const iconColor = useInputStore((state) => state.iconColor);
  const setIconColor = useInputStore((state) => state.setIconColor);

  return (
    <div>
      {/* Icon settings */}
      <ConfigSection title="Icon Settings" icon="Smile">
        <ConfigItem
          title="Has Icon?"
          type="switch"
          value={hasIcon}
          onChange={setHasIcon}
        />
        <ConfigItem
          title="Icon"
          type="icon"
          value={icon}
          onChange={setIcon}
          placeholder="e.g., User, Search, Check"
          disabled={!hasIcon}
        />
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Icon Position"
            type="select"
            value={iconPosition}
            onChange={setIconPosition}
            options={iconPositionOptions}
            disabled={!hasIcon}
          />
        </div>
        <ConfigItem
          title="Icon Color"
          type="color"
          value={iconColor}
          onChange={setIconColor}
          disabled={!hasIcon}
        />
      </ConfigSection>
    </div>
  );
}

export default IconConfig;
