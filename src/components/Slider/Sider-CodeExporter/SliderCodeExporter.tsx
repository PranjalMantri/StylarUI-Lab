import useSliderStore from "../../../store/sliderStore";
import { Copy } from "lucide-react";
import { useState } from "react";

function SliderCodeExporter() {
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

  const [copied, setCopied] = useState(false);

  const generatedCode = () => {
    let reactImportStatement = "import { useState } from 'react';\n";

    // Generate size classes
    const getSizeClasses = (size: string) => {
      switch (size) {
        case "sm":
          return { track: "h-1", thumb: "w-4 h-4", container: "py-2" };
        case "md":
          return { track: "h-2", thumb: "w-5 h-5", container: "py-3" };
        case "lg":
          return { track: "h-3", thumb: "w-6 h-6", container: "py-4" };
        default:
          return { track: "h-2", thumb: "w-5 h-5", container: "py-3" };
      }
    };

    const sizeClasses = getSizeClasses(sliderSize);

    // Generate variant styles
    const getVariantStyles = (variant: string, color: string) => {
      switch (variant) {
        case "filled":
          return {
            track: `bg-gray-200`,
            progress: `bg-[${color}]`,
            thumb: `bg-[${color}] border-2 border-white shadow-lg`,
          };
        case "outlined":
          return {
            track: `bg-gray-200 border border-gray-300`,
            progress: `bg-[${color}]`,
            thumb: `bg-white border-2 border-[${color}] shadow-lg`,
          };
        case "ghost":
          return {
            track: `bg-transparent border border-gray-300`,
            progress: `bg-[${color}] opacity-60`,
            thumb: `bg-[${color}] border-2 border-white shadow-lg opacity-80`,
          };
        default:
          return {
            track: `bg-gray-200`,
            progress: `bg-[${color}]`,
            thumb: `bg-[${color}] border-2 border-white shadow-lg`,
          };
      }
    };

    const variantStyles = getVariantStyles(sliderVariant, sliderColor); // Label and value classes
    const labelAndValueClassList = [
      labelTextColor.startsWith("#")
        ? `text-[${labelTextColor}]`
        : labelTextColor,
      labelFontSize.includes("px")
        ? `text-[${labelFontSize}]`
        : `text-${labelFontSize}`,
      `font-${labelFontWeight}`,
      "whitespace-nowrap",
    ]
      .filter(Boolean)
      .join(" ");

    // Container classes - column layout
    const containerClasses = [
      "flex",
      "flex-col",
      "w-full",
      "max-w-sm",
      "gap-2",
      sizeClasses.container,
    ].join(" ");

    // Top row classes for label and value
    const topRowClasses = [
      "flex",
      "justify-between",
      "items-center",
      "w-full",
      "min-h-6", // Reserve space to prevent layout shifts
    ].join(" ");

    // Slider track classes
    const trackClasses = [
      "relative",
      "w-full",
      sizeClasses.track,
      "rounded-full",
      "cursor-pointer",
      variantStyles.track,
      isDisabled ? "opacity-50 cursor-not-allowed" : "",
      isReadOnly ? "cursor-default" : "",
    ]
      .filter(Boolean)
      .join(" ");

    // Progress classes
    const progressClasses = [
      "absolute",
      "top-0",
      "left-0",
      sizeClasses.track,
      "rounded-full",
      variantStyles.progress,
      "transition-all",
      "duration-200",
    ].join(" ");

    // Thumb classes
    const thumbClasses = [
      "absolute",
      "top-1/2",
      "-translate-y-1/2",
      "-translate-x-1/2",
      sizeClasses.thumb,
      "rounded-full",
      "cursor-pointer",
      "transition-all",
      "duration-200",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-blue-400",
      "focus:ring-opacity-50",
      variantStyles.thumb,
      isDisabled ? "cursor-not-allowed" : "",
      isReadOnly ? "cursor-default" : "",
    ]
      .filter(Boolean)
      .join(" ");
    const sliderComponent = `const MySlider = () => {
  const [value, setValue] = useState(${defaultValue});
  
  const handleSliderChange = (e) => {
    if (!${isDisabled} && !${isReadOnly}) {
      const newValue = parseInt(e.target.value);
      setValue(newValue);
    }
  };

  const percentage = ((value - ${minValue}) / (${maxValue} - ${minValue})) * 100;

  return (
    <div className="${containerClasses}"${toolTip ? ` title="${toolTip}"` : ""}>
      {/* Top row with label and value */}
      <div className="${topRowClasses}">
        {
      <>
        ${
          labelPosition === "left"
            ? `${
                isLabelDisplayed
                  ? `<div className="${labelAndValueClassList}">${labelText}</div>`
                  : `<div></div>`
              }
        ${
          isShowValue
            ? `<div className="${labelAndValueClassList}">{value}</div>`
            : `<div></div>`
        }`
            : `${
                isShowValue
                  ? `<div className="${labelAndValueClassList}">{value}</div>`
                  : `<div></div>`
              }
        ${
          isLabelDisplayed
            ? `<div className="${labelAndValueClassList}">${labelText}</div>`
            : `<div></div>`
        }`
        }
      </>
        }
      </div>

      {/* Slider container */}
      <div className="relative w-full" style={{ height: "${
        sliderSize === "sm" ? "16px" : sliderSize === "lg" ? "24px" : "20px"
      }" }}>
        <div className="${trackClasses}" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
          <div 
            className="${progressClasses}"
            style={{ width: \`\${percentage}%\` }}
          />
          <div 
            className="${thumbClasses}"
            style={{ left: \`calc(\${percentage}% - ${
              sliderSize === "sm"
                ? "8px"
                : sliderSize === "lg"
                ? "12px"
                : "10px"
            })\` }}
          />
        </div>
        <input
          type="range"
          min={${minValue}}
          max={${maxValue}}
          value={value}
          onChange={handleSliderChange}
          disabled={${isDisabled}}
          readOnly={${isReadOnly}}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer ${
            isDisabled ? "cursor-not-allowed" : ""
          } ${isReadOnly ? "cursor-default" : ""}"
          style={{ zIndex: 3 }}
        />
      </div>
    </div>
  );
};`;

    return `${reactImportStatement}\n${sliderComponent}\n\nexport default MySlider;`;
  };

  const code = generatedCode();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <p className="text-slate-500 mb-1">
        Here is the generated code for your slider:
      </p>
      <div className="relative rounded-md shadow-sm overflow-auto max-h-60 scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
        <pre className="bg-slate-900/40 p-4 rounded-lg text-sm font-mono text-sky-300 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
        <div className="absolute top-2 right-2">
          <button
            onClick={handleCopyToClipboard}
            className="bg-sky-500 hover:bg-sky-600 text-slate-200 font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={handleCopyToClipboard}
          className="py-2 px-4 bg-sky-500 hover:bg-sky-600 transition-colors duration-200 text-white font-medium rounded-lg text-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2"
        >
          {copied ? "Copied!" : "Copy"} <Copy className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default SliderCodeExporter;
