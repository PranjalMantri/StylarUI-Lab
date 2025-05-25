import React, { useState } from "react";
import useButtonStore from "../../../store/useButtonStore";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { BorderStyleProperty } from "./types";
import {
  borderWidthMap,
  borderSideMap,
  gradientDirectionMap,
  borderRadiusMap,
  boxShadowMap,
  fontSizeMap,
  fontWeightMap,
  heightMap,
  paddingValues,
  transitionDelayMap,
  transitionDurationMap,
  transitionPropertyMap,
  transitionTimingFunctionMap,
  widthMap,
} from "./styleMaps";
import { buildBorderStyle, buildGradient } from "./styleUtils";

const ButtonPreview: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    label,
    textColor,
    backgroundColor,
    hoverTextColor,
    hoverBackground,
    isGradientActive,
    gradientDirection,
    gradientFromColor,
    gradientToColor,
    gradientViaColor,
    borderWidth,
    borderStyle,
    borderColor,
    borderSide,
    borderRadius,
    boxShadow,
    height,
    width,
    paddingX,
    paddingY,
    marginX,
    marginY,
    fontSize,
    fontWeight,
    isIconUse,
    icon,
    iconPosition,
    baseTransition,
    duration,
    delay,
    timingFunction,
    isDisabled,
    isLoading,
  } = useButtonStore();

  const IconComponent = LucideIcons[
    icon as keyof typeof LucideIcons
  ] as LucideIcon;

  const gradient = buildGradient(
    gradientDirectionMap[gradientDirection],
    gradientFromColor,
    gradientToColor,
    gradientViaColor
  );

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

  const fontStyles: React.CSSProperties = {
    fontSize: fontSizeMap[fontSize],
    fontWeight: fontWeightMap[fontWeight],
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

  const transitionStyles: React.CSSProperties = {
    transitionProperty: transitionPropertyMap[baseTransition],
    transitionTimingFunction: transitionTimingFunctionMap[timingFunction],
    transitionDelay: transitionDelayMap[delay],
    transitionDuration: transitionDurationMap[duration],
  };

  const gapStyle: React.CSSProperties = {
    gap: isLoading ? "0px" : "8px",
  };

  const buttonInLineStyles: React.CSSProperties = {
    color: isHovered ? hoverTextColor : textColor,
    background: isGradientActive
      ? gradient
      : isHovered
      ? hoverBackground
      : backgroundColor,
    ...borderStyles,
    ...borderRadiusStyles,
    ...boxShadowStyle,
    ...sizeStyles,
    ...paddingStyles,
    ...marginStyles,
    ...fontStyles,
    ...transitionStyles,
    ...gapStyle,
  };
  return (
    <button
      style={buttonInLineStyles}
      className={`flex items-center justify-center px-4 py-2 rounded-md transition-all
      ${isDisabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}
    `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isDisabled || isLoading}
    >
      {/* Left Icon OR Spinner */}
      {isLoading ? (
        <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
      ) : (
        isIconUse &&
        iconPosition === "left" &&
        IconComponent && (
          <IconComponent style={{ width: "1em", height: "1em" }} />
        )
      )}

      {/* Label */}
      <span>{isLoading ? "" : label}</span>

      {/* Right Icon */}
      {!isLoading && isIconUse && iconPosition === "right" && IconComponent && (
        <IconComponent style={{ width: "1em", height: "1em" }} />
      )}
    </button>
  );
};

export default ButtonPreview;
