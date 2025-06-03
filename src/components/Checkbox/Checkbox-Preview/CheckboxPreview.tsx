import React, { useState } from "react";
import useCheckboxStore from "../../../store/checkboxStore";
import { Check } from "lucide-react";
import {
  borderWidthMap,
  borderRadiusMap,
  boxShadowMap,
  fontSizeMap,
  fontWeightMap,
  paddingValues,
  checkboxSizeMap,
} from "../../../utils/preview/styleMaps";

const CheckboxPreview: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    labelText,
    labelPosition,
    labelColor,
    labelFontSize,
    labelFontWeight,
    checkboxStyle,
    checkedBackgroundColor,
    uncheckedBackgroundColor,
    checkmarkColor,
    focusRingColor,
    borderWidth,
    borderColor,
    borderRadius,
    boxShadow,
    checkboxSize,
    paddingInsideCheckbox,
    marginAroundCheckbox,
    gapBetweenCheckmarkAndLabel,
    disabled,
    readOnly,
    tooltip,
  } = useCheckboxStore();
  const handleChange = () => {
    if (!disabled && !readOnly) {
      setIsChecked(!isChecked);
    }
  };

  const getCheckboxStyles = (): React.CSSProperties => {
    const size = checkboxSizeMap[checkboxSize] || checkboxSizeMap.md;
    let borderW = borderWidthMap[borderWidth] || borderWidthMap.border;
    const radius =
      borderRadiusMap[borderRadius] || borderRadiusMap["rounded-md"];
    const shadow = boxShadowMap[boxShadow] || boxShadowMap["shadow-none"];
    const padding = paddingValues[paddingInsideCheckbox] || paddingValues["2"];
    const margin = paddingValues[marginAroundCheckbox] || paddingValues["0"];

    let backgroundColor = isChecked
      ? checkedBackgroundColor
      : uncheckedBackgroundColor;
    let borderColorValue = borderColor;

    // Handle different checkbox styles
    switch (checkboxStyle) {
      case "outline":
        backgroundColor = "transparent";
        borderColorValue = isChecked ? checkedBackgroundColor : borderColor;
        break;
      case "flat":
        backgroundColor = isChecked ? checkedBackgroundColor : "transparent";
        borderColorValue = "transparent";
        borderW = "0px";
        break;
      case "ghost":
        backgroundColor = isChecked
          ? `${checkedBackgroundColor}20`
          : "transparent";
        borderColorValue = "transparent";
        break;
      default:
        backgroundColor = isChecked
          ? checkedBackgroundColor
          : uncheckedBackgroundColor;
        break;
    }
    return {
      width: size,
      height: size,
      backgroundColor,
      borderWidth: borderW,
      borderStyle: "solid",
      borderColor: borderColorValue,
      borderRadius: radius,
      boxShadow: shadow,
      padding,
      margin,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : readOnly ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      outline: isFocused ? `2px solid ${focusRingColor}` : "none",
      outlineOffset: "2px",
      transition: "all 0.2s ease-in-out",
      transform:
        isHovered && !disabled && !readOnly ? "scale(1.05)" : "scale(1)",
    };
  };

  const getLabelStyles = (): React.CSSProperties => {
    const fontSize = fontSizeMap[labelFontSize] || fontSizeMap["text-base"];
    const fontWeight =
      fontWeightMap[labelFontWeight] || fontWeightMap["font-normal"];
    return {
      color: labelColor,
      fontSize,
      fontWeight,
      cursor: disabled ? "not-allowed" : readOnly ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      userSelect: "none",
    };
  };

  const getContainerStyles = (): React.CSSProperties => {
    const gap =
      paddingValues[gapBetweenCheckmarkAndLabel] || paddingValues["2"];

    return {
      display: "flex",
      alignItems: "center",
      gap,
      flexDirection: labelPosition === "right" ? "row" : "row-reverse",
    };
  };  const getCheckmarkStyles = (): React.CSSProperties => {
    const size = checkboxSizeMap[checkboxSize] || checkboxSizeMap.md;
    const iconSize = parseFloat(size) * 0.8; // Increased for better visibility

    return {
      color: checkmarkColor,
      width: `${iconSize}px`,
      height: `${iconSize}px`,
      opacity: isChecked ? 1 : 0,
      transition: "opacity 0.2s ease-in-out",
      display: 'block',
      flexShrink: 0,
    };
  };

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <label
        style={getContainerStyles()}
        title={tooltip || undefined}
        onClick={handleChange}
      >
        {" "}
        <div
          style={getCheckboxStyles()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          tabIndex={disabled ? -1 : 0}
          role="checkbox"
          aria-checked={isChecked}
          aria-disabled={disabled}
          aria-readonly={readOnly}
          aria-label={labelText || "Checkbox"}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              handleChange();
            }
          }}
        >
          <Check 
            style={getCheckmarkStyles()} 
            strokeWidth={3}
            stroke={checkmarkColor}
            fill="none"
          />
        </div>
        {labelText && <span style={getLabelStyles()}>{labelText}</span>}
      </label>
    </div>
  );
};

export default CheckboxPreview;
