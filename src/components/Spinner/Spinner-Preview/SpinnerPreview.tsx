import React from "react";
import useSpinnerStore from "../../../store/spinnerStore"; // Assuming this path is correct
import {
  fontSizeMap,
  spinnerSizeMap,
  spinnerThicknessMap,
  animationSpeedMap,
  transitionDelayMap,
} from "../../../utils/preview/styleMaps"; // Assuming this path is correct

function SpinnerPreview() {
  const {
    // spinnerShape, // Removed
    spinnerDirection,
    spinnerSize,
    spinnerThickness,
    spinnerColor,
    animationSpeed,
    delayBeforeSpins,
    isLabelDisplayed,
    labelText,
    labelTextColor,
    labelFontSize,
    backgroundType,
    overlayColor,
  } = useSpinnerStore();

  // Create spinner styles based on configuration
  const getSpinnerStyles = (): React.CSSProperties => {
    const baseSize = spinnerSizeMap[spinnerSize];
    const thickness = spinnerThicknessMap[spinnerThickness];

    // Determine animation based on direction (shape is removed)
    const animationName = `spin-${spinnerDirection}`; // Defaulting to circular spin animation

    const baseStyles: React.CSSProperties = {
      width: baseSize,
      height: baseSize,
      animation: `${animationName} ${animationSpeedMap[animationSpeed]} linear infinite`,
      animationDelay: transitionDelayMap[delayBeforeSpins],
    };

    // Default spinner style (circle)
    return {
      ...baseStyles,
      borderWidth: thickness,
      borderStyle: "solid",
      borderColor: "transparent",
      borderTopColor: spinnerColor,
      borderRadius: "50%", // Default to circle
    };
  };

  // Label styles
  const labelStyles: React.CSSProperties = {
    color: labelTextColor,
    fontSize: fontSizeMap[labelFontSize],
    marginTop: "12px",
  };

  // Container styles
  const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    minHeight: "120px", // Ensure enough space for spinner and label
    borderRadius: "8px", // Rounded corners for the container
    ...(backgroundType !== "none" && {
      backgroundColor:
        backgroundType === "blur"
          ? overlayColor + "20" // Lighter for blur effect (e.g., #RRGGBBAA)
          : overlayColor + "80", // Semi-transparent overlay
      backdropFilter: backgroundType === "blur" ? "blur(4px)" : "none",
    }),
  };

  // Define keyframes styles - removed shape-specific keyframes
  const keyframeStyles = `
    @keyframes spin-clockwise {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes spin-counterclockwise {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
  `;

  return (
    <>
      <style>{keyframeStyles}</style>
      <div style={containerStyles}>
        {/* Spinner */}
        <div style={getSpinnerStyles()} />

        {/* Label */}
        {isLabelDisplayed && <div style={labelStyles}>{labelText}</div>}
      </div>
    </>
  );
}

export default SpinnerPreview;
