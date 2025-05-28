import React, { useState } from "react";
import useInputStore from "../../../store/useInputStore";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { BorderStyleProperty } from "./types";
import {
  borderWidthMap,
  borderSideMap,
  borderRadiusMap,
  boxShadowMap,
  fontSizeMap,
  fontWeightMap,
  heightMap,
  paddingValues,
  widthMap,
  textAlignMap,
} from "./styleMaps";
import { buildBorderStyle } from "./styleUtils";

function InputPreview() {
  const [isFocused, setIsFocused] = useState(false);
  const [isLabelHovered, setIsLabelHovered] = useState(false);

  const {
    isLabelDisplayed,
    labelText,
    labelTextColor,
    labelHoverTextColor,
    labelFontSize,
    labelFontWeight,
    inputType,
    placeholderText,
    valueText,
    valueTextColor,
    valueFontSize,
    valueFontWeight,
    valueTextAlign,
    backgroundColor,
    borderWidth,
    borderColor,
    borderStyle,
    borderSide,
    height,
    width,
    paddingX,
    paddingY,
    marginX,
    marginY,
    borderRadius,
    boxShadow,
    isDisabled,
    isReadOnly,
    hasIcon,
    icon,
    iconPosition,
    iconColor,
    useObscuredText,
    obscureTextSymbol,
    labelCustomClass,
    inputCustomClass,
    isRequired,
  } = useInputStore();

  const IconComponent = LucideIcons[
    icon as keyof typeof LucideIcons
  ] as LucideIcon;

  const borderStyles = buildBorderStyle({
    width: borderWidthMap[borderWidth],
    style: borderStyle as BorderStyleProperty,
    color: borderColor,
    sides: borderSideMap[borderSide],
  });

  const boxShadowStyle: React.CSSProperties = {
    boxShadow: boxShadowMap[boxShadow],
  };

  const borderRadiusStyles: React.CSSProperties = {
    borderRadius: borderRadiusMap[borderRadius],
  };

  const sizeStyles: React.CSSProperties = {
    height: heightMap[height],
    width: widthMap[width],
  };

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

  const labelFontStyles: React.CSSProperties = {
    fontSize: fontSizeMap[labelFontSize],
    fontWeight: fontWeightMap[labelFontWeight],
    color: isLabelHovered ? labelHoverTextColor : labelTextColor,
  };

  const valueFontStyles: React.CSSProperties = {
    fontSize: fontSizeMap[valueFontSize],
    fontWeight: fontWeightMap[valueFontWeight],
    color: valueTextColor,
    textAlign: textAlignMap[valueTextAlign],
  };

  const inputContainerStyles: React.CSSProperties = {
    ...marginStyles,
  };

  const inputElementStyles: React.CSSProperties = {
    backgroundColor,
    ...borderStyles,
    ...borderRadiusStyles,
    ...boxShadowStyle,
    ...sizeStyles,
    ...paddingStyles,
    ...valueFontStyles,
  };

  const displayedValue =
    useObscuredText && inputType === "password"
      ? obscureTextSymbol.repeat(String(valueText).length)
      : valueText;

  return (
    <div style={inputContainerStyles} className="flex flex-col">
      {isLabelDisplayed && (
        <label
          style={labelFontStyles}
          className={`mb-1 transition-colors duration-150 ease-in-out ${labelCustomClass}`}
          onMouseEnter={() => setIsLabelHovered(true)}
          onMouseLeave={() => setIsLabelHovered(false)}
        >
          {labelText}
          {isRequired ? <span className="text-red-500">*</span> : ""}
        </label>
      )}
      <div
        className={`relative flex items-center ${
          isDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {hasIcon && iconPosition === "left" && IconComponent && (
          <IconComponent
            style={{ color: iconColor }}
            className="absolute left-3 w-5 h-5 pointer-events-none"
          />
        )}
        <input
          type={"text"}
          style={{
            ...inputElementStyles,
            paddingLeft:
              hasIcon && iconPosition === "left"
                ? paddingValues["10"]
                : paddingStyles.paddingLeft,
            paddingRight:
              hasIcon && iconPosition === "right"
                ? paddingValues["10"]
                : paddingStyles.paddingRight,
          }}
          className={`w-full outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-150 ease-in-out ${inputCustomClass}`}
          placeholder={placeholderText}
          value={displayedValue}
          disabled={isDisabled}
          readOnly={isReadOnly}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {hasIcon && iconPosition === "right" && IconComponent && (
          <IconComponent
            style={{ color: iconColor }}
            className="absolute right-3 w-5 h-5 pointer-events-none"
          />
        )}
      </div>
    </div>
  );
}

export default InputPreview;
