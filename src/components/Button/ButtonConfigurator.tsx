import useButtonStore from "../../store/useButtonStore";
import ConfigItem from "../ui/ConfigItem";
import ConfigSection from "../ui/ConfigSection";

function ButtonConfigurator() {
  const {
    label,
    setLabel,
    textColor,
    setTextColor,
    backgroundColor,
    hoverTextColor,
    setHoverTextColor,
    setBackgroundColor,
    hoverBackground,
    setHoverBackground,
    isGradientActive,
    setIsGradientActive,
    gradientDirection,
    setGradientDirection,
    gradientFromColor,
    setGradientFromColor,
    gradientToColor,
    setGradientToColor,
    gradientViaColor,
    setGradientViaColor,
    borderWidth,
    setBorderWidth,
    borderStyle,
    setBorderStyle,
    borderSide,
    setBorderSide,
    borderColor,
    setBorderColor,
    borderRadius,
    setBorderRadius,
    boxShadow,
    setBoxShadow,
    buttonWidth,
    setButtonWidth,
    buttonHeight,
    setButtonHeight,
    buttonPaddingX,
    setButtonPaddingX,
    buttonPaddingY,
    setButtonPaddingY,
    buttonMarginX,
    setButtonMarginX,
    buttonMarginY,
    setButtonMarginY,
    fontSize,
    setFontSize,
    fontWeight,
    setFontWeight,
    icon,
    setIcon,
    iconPosition,
    setIconPosition,
    baseTransition,
    setBaseTransition,
    timingFunction,
    setTimingFunction,
    duration,
    setDuration,
    delay,
    setDelay,
    customClass,
    setCustomClass,
    isIconUse,
    setIsIconUse,
    isDisabled,
    setIsDisabled,
    isLoading,
    setIsLoading,
  } = useButtonStore();

  const borderWidths = [
    { label: "None", value: "border-0" },
    { label: "Thin", value: "border" },
    { label: "Medium", value: "border-2" },
    { label: "Thick", value: "border-4" },
    { label: "Extra Thick", value: "border-8" },
  ];

  const borderStyles = [
    { label: "Solid", value: "solid" },
    { label: "Dashed", value: "dashed" },
    { label: "Dotted", value: "dotted" },
    { label: "Double", value: "double" },
    { label: "None", value: "none" },
  ];

  const sidesOptions = [
    { label: "All", value: "border" },
    { label: "Top", value: "border-t" },
    { label: "Bottom", value: "border-b" },
    { label: "Left", value: "border-l" },
    { label: "Right", value: "border-r" },
    { label: "Horizontal", value: "border-x" },
    { label: "Vertical", value: "border-y" },
  ];

  const borderRadiusOptions = [
    { label: "None", value: "rounded-none" },
    { label: "Small", value: "rounded-sm" },
    { label: "Medium", value: "rounded-md" },
    { label: "Large", value: "rounded-lg" },
    { label: "Extra Large", value: "rounded-xl" },
    { label: "2x Extra Large", value: "rounded-2xl" },
  ];

  const boxShadowOptions = [
    { label: "None", value: "shadow-none" },
    { label: "Extra Small", value: "shadow-sm" },
    { label: "Small", value: "shadow" },
    { label: "Medium", value: "shadow-md" },
    { label: "Large", value: "shadow-lg" },
    { label: "Extra Large", value: "shadow-xl" },
    { label: "2x Extra Large", value: "shadow-2xl" },
  ];

  const widthOptions = [
    { label: "Auto", value: "auto" },
    { label: "Fit", value: "fit-content" },
    { label: "Full", value: "w-full" },
    { label: "25%", value: "w-1/4" },
    { label: "50%", value: "w-1/2" },
    { label: "75%", value: "w-3/4" },
    { label: "100%", value: "w-full" },
  ];

  const heightOptions = [
    { label: "Auto", value: "auto" },
    { label: "Fit", value: "fit-content" },
    { label: "Full", value: "h-full" }, // or "h-full"
    { label: "25%", value: "h-1/4" },
    { label: "50%", value: "h-1/2" },
    { label: "75%", value: "h-3/4" },
    { label: "100%", value: "h-full" },
  ];

  const paddingOptions = [
    { label: "None", value: "0" },
    { label: "Extra Small", value: "1" },
    { label: "Small", value: "2" },
    { label: "Medium", value: "4" },
    { label: "Large", value: "6" },
    { label: "Extra Large", value: "8" },
    { label: "2x Large", value: "10" },
  ];

  const marginOptions = [
    { label: "None", value: "0" },
    { label: "Extra Small", value: "1" },
    { label: "Small", value: "2" },
    { label: "Medium", value: "4" },
    { label: "Large", value: "6" },
    { label: "Extra Large", value: "8" },
    { label: "2x Large", value: "10" },
    { label: "Auto", value: "auto" },
  ];

  const fontSizeOptions = [
    { label: "Tiny", value: "text-xs" },
    { label: "Small", value: "text-sm" },
    { label: "Base", value: "text-base" },
    { label: "Medium", value: "text-lg" },
    { label: "Large", value: "text-xl" },
    { label: "Extra Large", value: "text-2xl" },
    { label: "2x Large", value: "text-3xl" },
    { label: "3x Large", value: "text-4xl" },
  ];

  const fontWeightOptions = [
    { label: "Hairline", value: "font-thin" },
    { label: "Extra Light", value: "font-extralight" },
    { label: "Light", value: "font-light" },
    { label: "Normal", value: "font-normal" },
    { label: "Medium", value: "font-medium" },
    { label: "Semi Bold", value: "font-semibold" },
    { label: "Bold", value: "font-bold" },
    { label: "Extra Bold", value: "font-extrabold" },
  ];

  const iconPositionOptions = [
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ];

  const transitionPropertyOptions = [
    { label: "All", value: "transition-all" },
    { label: "Opacity", value: "transition-opacity" },
    { label: "Transform", value: "transition-transform" },
    { label: "Background Color", value: "transition-bg" },
    { label: "Text Color", value: "transition-color" },
    { label: "Border", value: "transition-border" },
    { label: "Box Shadow", value: "transition-shadow" },
    { label: "Height", value: "transition-height" },
    { label: "Width", value: "transition-width" },
    { label: "Padding", value: "transition-padding" },
    { label: "Margin", value: "transition-margin" },
    { label: "Filter", value: "transition-filter" },
  ];

  const timingFunctionOptions = [
    { label: "Ease", value: "ease" },
    { label: "Ease-in", value: "ease-in" },
    { label: "Ease-out", value: "ease-out" },
    { label: "Ease-in-out", value: "ease-in-out" },
    { label: "Linear", value: "linear" },
    { label: "Step Start", value: "step-start" },
    { label: "Step End", value: "step-end" },
  ];

  const durationOptions = [
    { label: "100ms", value: "0.1s" },
    { label: "200ms", value: "0.2s" },
    { label: "300ms", value: "0.3s" },
    { label: "500ms", value: "0.5s" },
    { label: "700ms", value: "0.7s" },
    { label: "1 second", value: "1s" },
    { label: "1.5 seconds", value: "1.5s" },
    { label: "2 seconds", value: "2s" },
  ];

  const delayOptions = [
    { label: "None", value: "0s" },
    { label: "100ms", value: "0.1s" },
    { label: "200ms", value: "0.2s" },
    { label: "300ms", value: "0.3s" },
    { label: "500ms", value: "0.5s" },
    { label: "1 second", value: "1s" },
    { label: "1.5 seconds", value: "1.5s" },
    { label: "2 seconds", value: "2s" },
  ];

  const gradientDirectionOptions = [
    { label: "Top to Bottom", value: "to-b" },
    { label: "Bottom to Top", value: "to-t" },
    { label: "Left to Right", value: "to-r" },
    { label: "Right to Left", value: "to-l" },
    { label: "Top Left to Bottom Right", value: "to-br" },
    { label: "Bottom Right to Top Left", value: "to-tl" },
  ];

  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
      {/* Label */}
      <ConfigSection title={"Label"} icon={"Type"}>
        <ConfigItem
          title={"Button Label"}
          type={"input"}
          value={label}
          onChange={setLabel}
        ></ConfigItem>
      </ConfigSection>

      {/* Appearance */}
      <ConfigSection title={"Core Appearance"} icon={"Palette"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title={"Text Color"}
            type={"color"}
            value={textColor}
            onChange={setTextColor}
          ></ConfigItem>
          <ConfigItem
            title={"Background"}
            type={"color"}
            value={backgroundColor}
            onChange={setBackgroundColor}
          ></ConfigItem>
          <ConfigItem
            title={"Hover Text Color"}
            type={"color"}
            value={hoverTextColor}
            onChange={setHoverTextColor}
          ></ConfigItem>
          <ConfigItem
            title={"Hover Background"}
            type={"color"}
            value={hoverBackground}
            onChange={setHoverBackground}
          ></ConfigItem>
        </div>
      </ConfigSection>

      {/* Gradients */}
      <ConfigSection title={"Gradient Background"} icon={"Paintbrush"}>
        <ConfigItem
          title={"Use Gradient Background?"}
          type={"switch"}
          value={isGradientActive}
          onChange={setIsGradientActive}
        ></ConfigItem>

        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title={"Gradient Direction"}
            type={"select"}
            value={gradientDirection}
            onChange={setGradientDirection}
            disabled={!isGradientActive}
            options={gradientDirectionOptions}
          ></ConfigItem>
          <ConfigItem
            title={"From"}
            type={"color"}
            value={gradientFromColor}
            onChange={setGradientFromColor}
            disabled={!isGradientActive}
          ></ConfigItem>
          <ConfigItem
            title={"To"}
            type={"color"}
            value={gradientToColor}
            onChange={setGradientToColor}
            disabled={!isGradientActive}
          ></ConfigItem>
          <ConfigItem
            title={"Via (optional*)"}
            type={"color"}
            value={gradientViaColor}
            onChange={setGradientViaColor}
            disabled={!isGradientActive}
          ></ConfigItem>
        </div>
      </ConfigSection>

      {/* Border Section */}
      <ConfigSection title="Border" icon="Layers">
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Border Width"
            type="select"
            value={borderWidth}
            onChange={setBorderWidth}
            options={borderWidths}
          />
          <ConfigItem
            title="Border Style"
            type="select"
            value={borderStyle}
            onChange={setBorderStyle}
            options={borderStyles}
          />
          <ConfigItem
            title="Border Color"
            type="color"
            value={borderColor}
            onChange={setBorderColor}
          />
          <ConfigItem
            title="Border Sides"
            type="select"
            value={borderSide}
            onChange={setBorderSide}
            options={sidesOptions}
          />
        </div>
      </ConfigSection>

      <ConfigSection title="Box and Shadow" icon="Box">
        <ConfigItem
          title="Border Radius"
          type="select"
          value={borderRadius}
          onChange={setBorderRadius}
          options={borderRadiusOptions}
        />
        <ConfigItem
          title="Box Shadow"
          type="select"
          value={boxShadow}
          onChange={setBoxShadow}
          options={boxShadowOptions}
        />
      </ConfigSection>

      {/* Height width and spacing */}
      <ConfigSection title={"Sizing and Spacing"} icon={"Scan"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title={"Height"}
            type={"select"}
            value={buttonHeight}
            onChange={setButtonHeight}
            options={heightOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Width"}
            type={"select"}
            value={buttonWidth}
            onChange={setButtonWidth}
            options={widthOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Padding X"}
            type={"select"}
            value={buttonPaddingX}
            onChange={setButtonPaddingX}
            options={paddingOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Padding Y"}
            type={"select"}
            value={buttonPaddingY}
            onChange={setButtonPaddingY}
            options={paddingOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Margin X"}
            type={"select"}
            value={buttonMarginX}
            onChange={setButtonMarginX}
            options={marginOptions}
          ></ConfigItem>
          <ConfigItem
            title={"Margin Y"}
            type={"select"}
            value={buttonMarginY}
            onChange={setButtonMarginY}
            options={marginOptions}
          ></ConfigItem>
        </div>
      </ConfigSection>

      <ConfigSection title="Typography" icon="Type">
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Font Size"
            type="select"
            value={fontSize}
            onChange={setFontSize}
            options={fontSizeOptions}
          />
          <ConfigItem
            title="Font Weight"
            type="select"
            value={fontWeight}
            onChange={setFontWeight}
            options={fontWeightOptions}
          />
        </div>
      </ConfigSection>

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

      <ConfigSection title="Transition Settings" icon={"Zap"}>
        <div className="grid grid-cols-2 gap-x-4">
          <ConfigItem
            title="Base Transition"
            type="select"
            value={baseTransition}
            onChange={setBaseTransition}
            options={transitionPropertyOptions}
          />
          <ConfigItem
            title="Duration"
            type="select"
            value={duration}
            onChange={setDuration}
            options={durationOptions}
          />
          <ConfigItem
            title="Timing Function"
            type="select"
            value={timingFunction}
            onChange={setTimingFunction}
            options={timingFunctionOptions}
          />
          <ConfigItem
            title="Delay"
            type="select"
            value={delay}
            onChange={setDelay}
            options={delayOptions}
          />
        </div>
      </ConfigSection>

      <ConfigSection title={"Advanced Options"} icon={"Replace"}>
        <ConfigItem
          title={"Custom ClassName Injection"}
          type={"input"}
          value={customClass}
          onChange={setCustomClass}
          placeholder="e.g. my-custom-button animate-pulse"
        ></ConfigItem>
      </ConfigSection>

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

export default ButtonConfigurator;
