import ConfigItem from "../../ui/ConfigItem";
import ConfigSection from "../../ui/ConfigSection";
import useButtonStore from "../../../store/useButtonStore";

function OtherConfig() {
  const { isDisabled, setIsDisabled, isLoading, setIsLoading } =
    useButtonStore();
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
