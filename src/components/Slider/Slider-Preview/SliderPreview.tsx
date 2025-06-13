import React, { useState, useEffect } from "react"; // Import useEffect
import useSliderStore from "../../../store/sliderStore";
import { fontSizeMap, fontWeightMap } from "../../../utils/preview/styleMaps";

function SliderPreview() {
  const {
    sliderColor,
    sliderSize,
    sliderVariant,
    minValue,
    maxValue,
    defaultValue,
    isDisabled,
    isReadOnly,
    isLabelDisplayed,
    labelText,
    labelTextColor,
    labelPosition,
    labelFontSize,
    labelFontWeight,
    isShowValue,
    toolTip,
  } = useSliderStore();

  const [currentValue, setCurrentValue] = useState(defaultValue);

  // FIX: This useEffect hook listens for changes in defaultValue from the store
  // and updates the component's state accordingly.
  useEffect(() => {
    setCurrentValue(defaultValue);
  }, [defaultValue]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && !isReadOnly) {
      setCurrentValue(Number(e.target.value));
    }
  };

  // --- STYLE MAPPINGS AND HELPERS ---

  const sliderSizeMap = {
    sm: { height: "4px", thumbSize: "16px" },
    md: { height: "6px", thumbSize: "20px" },
    lg: { height: "8px", thumbSize: "24px" },
  };

  const sizeConfig =
    sliderSizeMap[sliderSize as keyof typeof sliderSizeMap] || sliderSizeMap.md;

  const convertFontSize = (fontSize: string) => {
    if (fontSizeMap[fontSize]) return fontSize;
    const pixelValue = parseInt(fontSize);
    if (pixelValue <= 12) return "text-xs";
    if (pixelValue <= 14) return "text-sm";
    if (pixelValue <= 16) return "text-base";
    if (pixelValue <= 18) return "text-lg";
    if (pixelValue <= 20) return "text-xl";
    if (pixelValue <= 24) return "text-2xl";
    return "text-3xl";
  };

  const convertFontWeight = (weight: string) => {
    if (fontWeightMap[weight]) return weight;
    switch (weight.toLowerCase()) {
      case "normal":
        return "font-normal";
      case "bold":
        return "font-bold";
      case "light":
        return "font-light";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      default:
        return "font-normal";
    }
  };

  // --- DYNAMIC STYLES ---

  const labelAndValueBaseStyles: React.CSSProperties = {
    fontSize: fontSizeMap[convertFontSize(labelFontSize)],
    fontWeight: fontWeightMap[convertFontWeight(labelFontWeight)],
    color: labelTextColor,
    whiteSpace: "nowrap",
  };

  const trackStyles: React.CSSProperties = {
    width: "100%",
    height: sizeConfig.height,
    borderRadius: "999px",
    background: `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ${
      ((currentValue - minValue) / (maxValue - minValue)) * 100
    }%, #e2e8f0 ${
      ((currentValue - minValue) / (maxValue - minValue)) * 100
    }%, #e2e8f0 100%)`,
    cursor: isDisabled ? "not-allowed" : "pointer",
  };

  const thumbStyles: React.CSSProperties = {
    appearance: "none",
    width: sizeConfig.thumbSize,
    height: sizeConfig.thumbSize,
    borderRadius: "50%",
    background: sliderVariant === "outline" ? "#ffffff" : sliderColor,
    border: `2px solid ${sliderColor}`,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "transform 0.2s ease-in-out",
    zIndex: 2,
  };

  const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    gap: "8px",
    opacity: isDisabled ? 0.6 : 1,
  };

  const topRowStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minHeight: "1.5rem", // Reserve space to prevent layout shifts
  };

  // --- JSX ---

  const Label = () =>
    isLabelDisplayed ? (
      <div style={labelAndValueBaseStyles}>{labelText}</div>
    ) : (
      <div />
    );

  const Value = () =>
    isShowValue ? (
      <div style={labelAndValueBaseStyles}>{currentValue}</div>
    ) : (
      <div />
    );

  return (
    <div style={containerStyles} title={toolTip || undefined} className="p-4">
      {/* Top Row: Contains Label and/or Value */}
      <div style={topRowStyles}>
        {labelPosition === "left" ? <Label /> : <Value />}
        {labelPosition === "left" ? <Value /> : <Label />}
      </div>

      {/* Slider track and thumb container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: sizeConfig.thumbSize,
        }}
      >
        <div
          style={{
            ...trackStyles,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        {/* Custom thumb visual */}
        <div
          style={{
            ...thumbStyles,
            position: "absolute",
            top: "50%",
            left: `calc(${
              ((currentValue - minValue) / (maxValue - minValue)) * 100
            }% - ${parseInt(sizeConfig.thumbSize) / 2}px)`,
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />
        {/* Invisible range input for functionality */}
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={currentValue}
          onChange={handleSliderChange}
          disabled={isDisabled || isReadOnly}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: isDisabled ? "not-allowed" : "pointer",
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
}

export default SliderPreview;
