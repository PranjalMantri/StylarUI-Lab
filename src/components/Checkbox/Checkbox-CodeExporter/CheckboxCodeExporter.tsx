import useCheckboxStore from "../../../store/checkboxStore";
import { Copy } from "lucide-react";
import { useState } from "react";

function CheckboxCodeExporter() {
  const {
    labelText,
    labelPosition,
    labelColor,
    labelFontSize,
    labelFontWeight,
    checkedBackgroundColor,
    uncheckedBackgroundColor,
    checkmarkColor,
    focusRingColor,
    checkboxStyle,
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

  const [copied, setCopied] = useState(false);

  const generatedCode = () => {
    let reactImportStatement = "import { useState } from 'react';\n";
    let iconImportStatement = "";
    
    // Add check icon import for custom checkmark
    if (checkboxStyle === "custom") {
      iconImportStatement += "import { Check } from 'lucide-react';\n";
    }

    // Generate label classes
    const labelClassList = [
      labelColor.startsWith("#") ? `text-[${labelColor}]` : labelColor,
      labelFontSize,
      labelFontWeight,
      "select-none cursor-pointer",
    ]
      .filter(Boolean)
      .join(" ");    // Generate checkbox size classes
    const sizeMap: { [key: string]: string } = {
      xs: "w-3 h-3",
      sm: "w-4 h-4", 
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7",
    };
    const checkboxSizeClasses = sizeMap[checkboxSize] || "w-4 h-4";

    // Generate border classes
    const borderWidthClass = borderWidth === "border" ? "border" : borderWidth;
    const borderColorClass = borderColor.startsWith("#") 
      ? `border-[${borderColor}]` 
      : borderColor;

    // Generate background colors based on checkbox style
    const checkedBgClass = checkedBackgroundColor.startsWith("#")
      ? `checked:bg-[${checkedBackgroundColor}]`
      : `checked:bg-${checkedBackgroundColor.replace("bg-", "")}`;
    
    const uncheckedBgClass = uncheckedBackgroundColor.startsWith("#")
      ? `bg-[${uncheckedBackgroundColor}]`
      : uncheckedBackgroundColor;

    // Generate focus ring classes
    const focusRingClass = focusRingColor.startsWith("#")
      ? `focus:ring-[${focusRingColor}]`
      : `focus:ring-${focusRingColor.replace("ring-", "")}`;

    // Generate checkbox classes
    const checkboxClassList = [
      checkboxSizeClasses,
      borderWidthClass,
      borderColorClass,
      borderRadius,
      uncheckedBgClass,
      checkedBgClass,
      `checked:border-[${checkedBackgroundColor}]`,
      focusRingClass,
      "focus:ring-2 focus:ring-offset-2",
      boxShadow,
      paddingInsideCheckbox !== "0" ? `p-${paddingInsideCheckbox}` : "",
      marginAroundCheckbox !== "0" ? `m-${marginAroundCheckbox}` : "",
      "transition-colors duration-200 ease-in-out",
      disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
      readOnly ? "cursor-not-allowed" : "",
    ]
      .filter(Boolean)
      .join(" ");

    // Generate container classes
    const containerClassList = [
      "flex items-center",
      labelPosition === "left" ? "flex-row-reverse" : "flex-row",
      `gap-${gapBetweenCheckmarkAndLabel}`,
    ]
      .filter(Boolean)
      .join(" ");

    // Generate checkmark element for custom style
    let checkmarkElement = "";
    if (checkboxStyle === "custom") {
      const checkmarkColorClass = checkmarkColor.startsWith("#")
        ? `text-[${checkmarkColor}]`
        : checkmarkColor;
      
      checkmarkElement = `
          {checked && (
            <Check 
              className="${checkmarkColorClass} absolute inset-0 w-full h-full pointer-events-none" 
              size={12}
            />
          )}`;
    }

    // Generate attributes
    const attributes = [];
    if (disabled) attributes.push("disabled");
    if (readOnly) attributes.push("readOnly");
    if (tooltip) attributes.push(`title="${tooltip}"`);

    const attributesString = attributes
      .map((attr) => `\n            ${attr}`)
      .join("");

    // Generate the component
    const componentCode = `${reactImportStatement}${iconImportStatement}
const MyCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="${containerClassList}">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="${checkboxStyle === "custom" ? `appearance-none ${checkboxClassList}` : checkboxClassList}"${attributesString}
        />${checkmarkElement}
      </div>
      ${labelText ? `<label className="${labelClassList}">${labelText}</label>` : ""}
    </div>
  );
};`;

    return componentCode;
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
        Here is the generated code for your checkbox:
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

export default CheckboxCodeExporter;
