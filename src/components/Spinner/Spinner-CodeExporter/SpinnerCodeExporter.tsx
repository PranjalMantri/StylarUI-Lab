import useSpinnerStore from "../../../store/spinnerStore";
import { Copy } from "lucide-react";
import { useState } from "react";

function SpinnerCodeExporter() {
  const {
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

  const [copied, setCopied] = useState(false);

  const generatedCode = () => {
    const sizeMap: Record<string, string> = {
      small: "w-6 h-6",
      medium: "w-8 h-8",
      large: "w-12 h-12",
    };

    const thicknessMap: Record<string, string> = {
      thin: "border-2",
      normal: "border-4",
      thick: "border-8",
    };

    const speedMap: Record<string, string> = {
      slow: "duration-[2000ms]",
      normal: "duration-1000",
      fast: "duration-500",
    };

    const delayMap: Record<string, string> = {
      "0s": "delay-0",
      "0.1s": "delay-75",
      "0.2s": "delay-150",
      "0.3s": "delay-300",
      "0.5s": "delay-500",
      "1s": "delay-1000",
      "1.5s": "delay-[1500ms]",
      "2s": "delay-[2000ms]",
    };

    const spinnerSizeClass = sizeMap[spinnerSize] || "w-8 h-8";
    const spinnerThicknessClass = thicknessMap[spinnerThickness] || "border-4";
    const animationSpeedClass = speedMap[animationSpeed] || "duration-1000";
    const delayClass = delayMap[delayBeforeSpins] || "delay-0";

    const animationDirection =
      spinnerDirection === "counterclockwise"
        ? "animate-reverse-spin"
        : "animate-spin";

    const spinnerColorClass = spinnerColor.startsWith("#")
      ? `border-t-[${spinnerColor}]`
      : `border-t-${spinnerColor}`;

    const labelColorClass = labelTextColor.startsWith("#")
      ? `text-[${labelTextColor}]`
      : labelTextColor;

    const spinnerClassList = [
      spinnerSizeClass,
      spinnerThicknessClass,
      "border-transparent",
      spinnerColorClass,
      "rounded-full",
      animationDirection,
      animationSpeedClass,
      delayClass,
    ]
      .filter(Boolean)
      .join(" ");

    const labelClassList = [labelColorClass, labelFontSize, "mt-3"]
      .filter(Boolean)
      .join(" ");

    let containerClass =
      "flex flex-col items-center justify-center p-5 min-h-[120px] rounded-lg";
    let containerStyle = "";

    if (backgroundType === "overlay") {
      containerClass =
        "fixed inset-0 flex flex-col items-center justify-center z-50";
      containerStyle = `style={{ backgroundColor: "${overlayColor}80" }}`;
    } else if (backgroundType === "blur") {
      containerClass =
        "fixed inset-0 flex flex-col items-center justify-center z-50 backdrop-blur-sm";
      containerStyle = `style={{ backgroundColor: "${overlayColor}20" }}`;
    }

    const customCSS =
      spinnerDirection === "counterclockwise"
        ? `\n/* Add this to your global CSS if reverse spin animation is not available */\n@keyframes reverse-spin {\n  from { transform: rotate(360deg); }\n  to { transform: rotate(0deg); }\n}\n\n.animate-reverse-spin {\n  animation: reverse-spin 1s linear infinite;\n}\n\n`
        : "";

    return `${customCSS}const MySpinner = () => {
  return (
    <div className="${containerClass}"${
      containerStyle ? ` ${containerStyle}` : ""
    }>
      <div className="${spinnerClassList}"></div>${
      isLabelDisplayed
        ? `\n      <div className="${labelClassList}">${labelText}</div>`
        : ""
    }
    </div>
  );
};

export default MySpinner;`;
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
        Here is the generated code for your spinner:
      </p>
      <div className="relative rounded-md shadow-sm overflow-auto max-h-48 scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
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

export default SpinnerCodeExporter;
