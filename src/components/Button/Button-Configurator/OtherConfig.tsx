import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import useButtonStore from "../../../store/useButtonStore";

function OtherConfig() {
  const isDisabled = useButtonStore((state) => state.isDisabled);
  const setIsDisabled = useButtonStore((state) => state.setIsDisabled);
  const isLoading = useButtonStore((state) => state.isLoading);
  const setIsLoading = useButtonStore((state) => state.setIsLoading);
  return (
    <div>
      <ConfigSection title={"Other"} icon={"Settings"}>
        <ConfigItem
          title={"Disabled State"}
          type={"switch"}
          value={isDisabled}
          onChange={setIsDisabled}
        ></ConfigItem>
        <ConfigItem
          title={"Loading State"}
          type={"switch"}
          value={isLoading}
          onChange={setIsLoading}
        ></ConfigItem>
      </ConfigSection>
    </div>
  );
}

export default OtherConfig;
