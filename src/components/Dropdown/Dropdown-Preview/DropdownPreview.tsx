import React from "react";
import useDropdownStore from "../../../store/dropdownStore";

import { buildBorderStyle } from "../../../utils/preview/styleUtils";
import {
  fontSizeMap,
  fontWeightMap,
  borderWidthMap,
  borderSideMap,
  paddingValues,
  transitionPropertyMap,
  transitionTimingFunctionMap,
  transitionDelayMap,
  transitionDurationMap,
  borderRadiusMap,
  boxShadowMap,
  heightMap,
  widthMap,
} from "../../../utils/preview/styleMaps";

function DropdownPreview() {
  const [isHovered, setIsHovered] = React.useState(false);

  const {
    label,
    labelColor,
    labelFontSize,
    labelFontWeight,
    textColor,
    hoverTextColor,
    optionTextColor,
    optionHoverTextColor,
    backgroundColor,
    hoverBackground,
    optionBgColor,
    optionHoverBgColor,
    borderRadius,
    boxShadow,
    borderWidth,
    borderStyle,
    borderColor,
    borderSide,
    height,
    width,
    paddingX,
    paddingY,
    marginX,
    marginY,
    baseTransition,
    timingFunction,
    duration,
    delay,
  } = useDropdownStore();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedValue, setSelectedValue] = React.useState(
    options[0]?.value || ""
  );

  const labelStyles: React.CSSProperties = {
    color: labelColor,
    fontSize: fontSizeMap[labelFontSize],
    fontWeight: fontWeightMap[labelFontWeight],
  };

  const borderStyles = buildBorderStyle({
    width: borderWidthMap[borderWidth],
    style: borderStyle,
    color: borderColor,
    sides: borderSideMap[borderSide],
  });

  const paddingStyles: React.CSSProperties = {
    paddingLeft: paddingValues[paddingX],
    paddingRight: paddingValues[paddingX],
    paddingTop: paddingValues[paddingY],
    paddingBottom: paddingValues[paddingY],
  };

  const marginStyles: React.CSSProperties = {
    marginLeft: paddingValues[marginX],
    marginRight: paddingValues[marginX],
    marginTop: paddingValues[marginY],
    marginBottom: paddingValues[marginY],
  };

  const transitionStyles: React.CSSProperties = {
    transitionProperty: transitionPropertyMap[baseTransition],
    transitionTimingFunction: transitionTimingFunctionMap[timingFunction],
    transitionDelay: transitionDelayMap[delay],
    transitionDuration: transitionDurationMap[duration],
  };

  const optionStyles: React.CSSProperties = {
    color: isHovered ? hoverTextColor : textColor,
    backgroundColor: isHovered ? hoverBackground : backgroundColor,
    borderRadius: borderRadiusMap[borderRadius],
    boxShadow: boxShadowMap[boxShadow],
    ...borderStyles,
    height: heightMap[height],
    width: widthMap[width],
    ...paddingStyles,
    ...marginStyles,
    ...transitionStyles,
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor="dropdown" style={labelStyles}>
        {label}
      </label>
      <select
        id="dropdown"
        name="dropdown"
        value={selectedValue}
        onChange={handleSelectChange}
        style={optionStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {options.map((option) => {
          const isSelected = option.value === selectedValue;
          const currentOptionColor = isSelected
            ? isHovered
              ? hoverTextColor
              : textColor
            : isHovered
            ? optionHoverTextColor
            : optionTextColor;
          const currentOptionBgColor = isSelected
            ? isHovered
              ? hoverBackground
              : backgroundColor
            : isHovered
            ? optionHoverBgColor
            : optionBgColor;

          return (
            <option
              key={option.value}
              value={option.value}
              style={{
                color: currentOptionColor,
                backgroundColor: currentOptionBgColor,
              }}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownPreview;
