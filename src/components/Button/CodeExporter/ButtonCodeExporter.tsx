import useButtonStore from "../../../store/useButtonStore";
import { Copy } from "lucide-react";
import { useState } from "react";

function ButtonCodeExporter() {
  const {
    label,
    textColor,
    backgroundColor,
    hoverTextColor,
    hoverBackground,
    isGradientActive,
    gradientDirection,
    gradientToColor,
    gradientFromColor,
    gradientViaColor,
    borderWidth,
    borderStyle,
    borderSide,
    borderColor,
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
    timingFunction,
    delay,
    duration,
    isDisabled,
    isLoading,
  } = useButtonStore();

  const [copied, setCopied] = useState(false);

  const generatedCode = () => {
    let buttonContent = label;
    let iconImportStatement = "";
    let iconJSXElement = "";
    let flexAndGapClasses = "";

    if (isLoading) {
      iconImportStatement += `import { Loader2 } from 'lucide-react';\n`;
      buttonContent = `<Loader2 className="animate-spin" size={20} />`;
      flexAndGapClasses = "flex items-center justify-center";
    } else if (isIconUse && icon) {
      const IconComponentName = icon.charAt(0).toUpperCase() + icon.slice(1);
      iconImportStatement += `import { ${IconComponentName} } from 'lucide-react';\n`;
      iconJSXElement = `<${IconComponentName} size={20} />`;
      flexAndGapClasses = "flex items-center justify-center gap-2";

      if (iconPosition === "left") {
        buttonContent = `${iconJSXElement} ${label}`;
      } else {
        buttonContent = `${label} ${iconJSXElement}`;
      }
    }

    const gradientList = isGradientActive
      ? [
          `bg-gradient-${gradientDirection}`,
          `from-[${gradientFromColor}]`,
          `to-[${gradientToColor}]`,
          gradientViaColor ? `via-[${gradientViaColor}]` : "",
        ]
      : [];

    const borderList = [
      `border-${borderStyle}`,
      `border-[${borderColor}]`,
      `${borderSide}-${borderWidth.replace("border-", "")}`,
    ];

    const isDisabledStyles = "opacity-50 cursor-not-allowed";

    const heightStyle = height == "auto" ? `h-auto` : height;
    const widthStyle = width == "auto" ? `w-auto` : width;

    const classList = [
      `"`,
      `text-[${textColor}]`,
      `bg-[${backgroundColor}]`,
      `hover:text-[${hoverTextColor}]`,
      `hover:bg-[${hoverBackground}]`,
      `${gradientList ? gradientList.filter(Boolean).join(" ") : ""}`,
      `${borderList.join(" ")}`,
      `${borderRadius}`,
      `${boxShadow}`,
      `${heightStyle}`,
      `${widthStyle}`,
      `px-${paddingX}`,
      `py-${paddingY}`,
      `mx-${marginX}`,
      `my-${marginY}`,
      `${fontSize}`,
      `${fontWeight}`,
      `${flexAndGapClasses}`,
      `${baseTransition}`,
      `${timingFunction}`,
      `delay-${delay}`,
      `duration-${duration}`,
      `${isDisabled ? isDisabledStyles : ""}`,
      `${isLoading ? isDisabledStyles : ""}`,
      `"`,
    ]
      .filter(Boolean)
      .join(" ");

    return `${iconImportStatement} \nconst MyButton = () => {
      return (
        <button className=${classList} disabled={${isDisabled}}>
          ${buttonContent}
        </button>
      );
    };`;
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
        Here is the generated code for your button:
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

export default ButtonCodeExporter;
