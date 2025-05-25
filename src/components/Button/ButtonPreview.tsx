import React, { useState } from "react";
import useButtonStore from "../../store/useButtonStore";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BorderStyleProperty =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "initial"
  | "inherit"
  | "unset"
  | "revert"
  | "revert-layer"
  | "-moz-initial";

// --- ButtonPreview Component ---
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
    buttonHeight,
    buttonWidth,
    buttonPaddingX,
    buttonPaddingY,
    buttonMarginX,
    buttonMarginY,
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

  const gradientDirectionMap: Record<string, string> = {
    "to-b": "to bottom",
    "to-t": "to top",
    "to-l": "to left",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-tl": "to top left",
    "to-tr": "to top right",
    "to-bl": "to bottom left",
  };

  const buildGradient = (
    direction: string,
    fromColor: string,
    toColor: string,
    viaColor?: string // optional
  ) => {
    if (viaColor) {
      return `linear-gradient(${direction}, ${fromColor}, ${viaColor}, ${toColor})`;
    } else {
      return `linear-gradient(${direction}, ${fromColor}, ${toColor})`;
    }
  };

  const cssGradientDirection = gradientDirectionMap[gradientDirection];
  const gradient = buildGradient(
    cssGradientDirection,
    gradientFromColor,
    gradientToColor,
    gradientViaColor
  );

  const borderWidthMap: Record<string, string> = {
    "border-0": "0px",
    border: "1px",
    "border-2": "2px",
    "border-4": "4px",
    "border-8": "8px",
  };

  const borderSideMap: Record<string, string> = {
    border: "all",
    "border-t": "top",
    "border-b": "bottom",
    "border-l": "left",
    "border-r": "right",
    "border-x": "horizontal",
    "border-y": "vertical",
  };

  function buildBorderStyle({
    width,
    style,
    color,
    sides,
  }: {
    width: string;
    style: BorderStyleProperty;
    color: string;
    sides: string;
  }): React.CSSProperties {
    const borderStyles: React.CSSProperties = {};

    const applyBorder = (side: string) => {
      const borderWidthKey = `border${side}Width` as keyof React.CSSProperties;
      const borderStyleKey = `border${side}Style` as keyof React.CSSProperties;
      const borderColorKey = `border${side}Color` as keyof React.CSSProperties;

      borderStyles[borderWidthKey] = width as any;
      borderStyles[borderStyleKey] = style as any;
      borderStyles[borderColorKey] = color as any;
    };

    switch (sides) {
      case "all":
        borderStyles.borderWidth = width;
        borderStyles.borderStyle = style;
        borderStyles.borderColor = color;
        break;
      case "top":
        applyBorder("Top");
        break;
      case "bottom":
        applyBorder("Bottom");
        break;
      case "left":
        applyBorder("Left");
        break;
      case "right":
        applyBorder("Right");
        break;
      case "horizontal": // left + right
        applyBorder("Left");
        applyBorder("Right");
        break;
      case "vertical": // top + bottom
        applyBorder("Top");
        applyBorder("Bottom");
        break;
      default:
        break;
    }

    return borderStyles;
  }

  const widthValue = borderWidthMap[borderWidth] || "0px";
  const styleValue = borderStyle as BorderStyleProperty;
  const sidesValue = borderSideMap[borderSide];

  const borderStyles = buildBorderStyle({
    width: widthValue,
    style: styleValue,
    color: borderColor,
    sides: sidesValue,
  });

  const borderRadiusMap: Record<string, string> = {
    "rounded-none": "0px",
    "rounded-sm": "0.125rem",
    "rounded-md": "0.375rem",
    "rounded-lg": "0.5rem",
    "rounded-xl": "0.75rem",
    "rounded-2xl": "1rem",
  };

  const boxShadowMap: Record<string, string> = {
    "shadow-none": "none",
    "shadow-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "shadow-md":
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "shadow-lg":
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "shadow-xl":
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "shadow-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  };

  const widthMap: Record<string, string> = {
    auto: "auto",
    "fit-content": "fit-content",
    "w-full": "100%",
    "w-1/4": "25%",
    "w-1/2": "50%",
    "w-3/4": "75%",
  };

  const heightMap: Record<string, string> = {
    auto: "auto",
    "fit-content": "fit-content",
    "h-full": "100%",
    "h-1/4": "25%",
    "h-1/2": "50%",
    "h-3/4": "75%",
  };

  const paddingValues: Record<string, string> = {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
  };

  const fontSizeMap: Record<string, string> = {
    "text-xs": "0.75rem", // 12px
    "text-sm": "0.875rem", // 14px
    "text-base": "1rem", // 16px
    "text-lg": "1.125rem", // 18px
    "text-xl": "1.25rem", // 20px
    "text-2xl": "1.5rem", // 24px
    "text-3xl": "1.875rem", // 30px
    "text-4xl": "2.25rem", // 36px
  };

  const fontWeightMap: Record<string, string> = {
    "font-thin": "100", // Hairline
    "font-extralight": "200", // Extra Light
    "font-light": "300", // Light
    "font-normal": "400", // Normal
    "font-medium": "500", // Medium
    "font-semibold": "600", // Semi Bold
    "font-bold": "700", // Bold
    "font-extrabold": "800", // Extra Bold
  };

  const transitionPropertyMap: Record<string, string> = {
    "transition-all": "all",
    "transition-opacity": "opacity",
    "transition-transform": "transform",
    "transition-bg": "background-color",
    "transition-colors":
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-color": "color",
    "transition-border": "border",
    "transition-shadow": "box-shadow",
    "transition-height": "height",
    "transition-width": "width",
    "transition-padding": "padding",
    "transition-margin": "margin",
    "transition-filter": "filter",
  };

  const transitionDurationMap: Record<string, string> = {
    "0.1s": "100ms",
    "0.2s": "200ms",
    "0.3s": "300ms",
    "0.5s": "500ms",
    "0.7s": "700ms",
    "1s": "1s",
    "1.5s": "1.5s",
    "2s": "2s",
  };

  const transitionDelayMap: Record<string, string> = {
    "0s": "0s",
    "0.1s": "100ms",
    "0.2s": "200ms",
    "0.3s": "300ms",
    "0.5s": "500ms",
    "1s": "1s",
    "1.5s": "1.5s",
    "2s": "2s",
  };

  const transitionTimingFunctionMap: Record<string, string> = {
    ease: "ease",
    "ease-in": "ease-in",
    "ease-out": "ease-out",
    "ease-in-out": "ease-in-out",
    linear: "linear",
    "step-start": "step-start",
    "step-end": "step-end",
  };

  const cssBorderRadius = borderRadiusMap[borderRadius];
  const cssBoxShadow = boxShadowMap[boxShadow];
  const cssHeight = heightMap[buttonHeight];
  const cssWidth = widthMap[buttonWidth];
  const cssFontSize = fontSizeMap[fontSize];
  const cssFontWeight = fontWeightMap[fontWeight];

  const paddingStyles: React.CSSProperties = {
    paddingLeft: paddingValues[buttonPaddingX],
    paddingRight: paddingValues[buttonPaddingX],
    paddingTop: paddingValues[buttonPaddingY],
    paddingBottom: paddingValues[buttonPaddingY],
  };

  const marginStyles: React.CSSProperties = {
    marginLeft: paddingValues[buttonMarginX],
    marginRight: paddingValues[buttonMarginX],
    marginTop: paddingValues[buttonMarginY],
    marginBottom: paddingValues[buttonMarginY],
  };

  const transitionStyles: React.CSSProperties = {
    transitionProperty: transitionPropertyMap[baseTransition],
    transitionTimingFunction: transitionTimingFunctionMap[timingFunction],
    transitionDelay: transitionDelayMap[delay],
    transitionDuration: transitionDurationMap[duration],
  };

  const buttonInLineStyles: React.CSSProperties = {
    color: isHovered ? hoverTextColor : textColor,
    background: isGradientActive
      ? gradient
      : isHovered
      ? hoverBackground
      : backgroundColor,
    ...borderStyles,
    borderRadius: cssBorderRadius,
    boxShadow: cssBoxShadow,
    height: cssHeight,
    width: cssWidth,
    ...paddingStyles,
    ...marginStyles,
    fontSize: cssFontSize,
    fontWeight: cssFontWeight,
    ...transitionStyles,
  };
  return (
    <button
      style={buttonInLineStyles}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-all
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
      <span>{isLoading ? "Loading..." : label}</span>

      {/* Right Icon */}
      {!isLoading && isIconUse && iconPosition === "right" && IconComponent && (
        <IconComponent style={{ width: "1em", height: "1em" }} />
      )}
    </button>
  );
};

export default ButtonPreview;
