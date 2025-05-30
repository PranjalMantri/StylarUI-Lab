import useInputStore from "../../../store/useInputStore";
import { Copy } from "lucide-react";
import { useState } from "react";

function InputCodeExporter() {
  const {
    isLabelDisplayed,
    labelText,
    labelTextColor,
    // labelHoverTextColor, // Not directly used in className
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
    labelCustomClass,
    inputCustomClass,
    isDisabled,
    isReadOnly,
    isRequired,
    // useObscuredText, // Handled by inputType="password"
    autoComplete,
    maxLength,
    minLength,
    hasIcon,
    icon,
    iconPosition,
    iconColor,
    // obscureTextSymbol, // Not directly used in generated code
  } = useInputStore();

  const [copied, setCopied] = useState(false);

  const generatedCode = () => {
    let reactImportStatement = "import { useState } from 'react';\n";
    let iconImportStatement = "";
    let iconJSXElement = "";
    let inputContainerClasses = "relative";

    if (hasIcon && icon) {
      const IconComponentName = icon.charAt(0).toUpperCase() + icon.slice(1);
      iconImportStatement += `import { ${IconComponentName} } from 'lucide-react';\n`;
      iconJSXElement = `<${IconComponentName} style={{ width: "1em", height: "1em" }} className="absolute ${
        iconPosition === "left" ? "left-3" : "right-3"
      } top-1/2 transform -translate-y-1/2 text-[${iconColor}]" />`;
    }

    const labelClassList = [
      labelTextColor.startsWith("#")
        ? `text-[${labelTextColor}]`
        : labelTextColor,
      labelFontSize,
      labelFontWeight,
      "block mb-1", // Basic label styling
      labelCustomClass,
    ]
      .filter(Boolean)
      .join(" ");

    const borderStyleClass =
      borderStyle !== "none" ? `border-${borderStyle}` : "";

    const borderWidthClass = borderWidth == "border" ? `border-1` : borderWidth;

    const borderColorClass = borderColor.startsWith("#")
      ? `border-[${borderColor}]`
      : borderColor;

    const inputBorderClasses =
      borderStyle !== "none"
        ? [
            borderSide === "border"
              ? borderWidthClass
              : `${borderSide.replace("border-", "")}-${borderWidth.replace(
                  "border-",
                  ""
                )}`,
            borderStyleClass,
            borderColorClass,
          ]
            .filter(Boolean)
            .join(" ")
        : "border-none";

    let heightStyle;
    if (height === "auto") {
      heightStyle = "h-auto";
    } else if (height.startsWith("h-")) {
      heightStyle = height;
    } else if (
      height.includes("px") ||
      height.includes("rem") ||
      height.includes("%")
    ) {
      heightStyle = `h-[${height}]`;
    } else {
      heightStyle = `h-${height}`;
    }

    // Store the original width style to be applied conditionally
    const originalWidthStyle =
      width === "auto"
        ? "w-auto"
        : width.startsWith("w-")
        ? width
        : width.includes("px") || width.includes("rem") || width.includes("%")
        ? `w-[${width}]`
        : `w-${width}`;

    const inputClassListElements = [
      valueTextColor.startsWith("#")
        ? `text-[${valueTextColor}]`
        : valueTextColor,
      backgroundColor.startsWith("#")
        ? `bg-[${backgroundColor}]`
        : backgroundColor,
      inputBorderClasses,
      borderRadius,
      boxShadow,
      heightStyle,
      // Width and icon-specific padding are handled below
      paddingX.startsWith("px-[") ? paddingX : `px-${paddingX}`,
      paddingY.startsWith("py-[") ? paddingY : `py-${paddingY}`,
      valueFontWeight,
      valueTextAlign,
      inputCustomClass,
      isDisabled ? "opacity-50 cursor-not-allowed" : "",
      isReadOnly ? "read-only:bg-slate-100 read-only:cursor-not-allowed" : "",
    ];

    if (hasIcon && icon) {
      inputClassListElements.push(iconPosition === "left" ? "pl-10" : "pr-10");
      inputClassListElements.push("w-fit");
    } else {
      inputClassListElements.push(originalWidthStyle); // Apply original width if no icon
    }

    const inputClassList = inputClassListElements.filter(Boolean).join(" ");

    const marginClasses = [
      marginX.startsWith("mx-[") ? marginX : `mx-${marginX}`,
      marginY.startsWith("my-[") ? marginY : `my-${marginY}`,
    ]
      .filter(Boolean)
      .join(" ");

    // Determine the initial value for useState, ensuring it's correctly formatted.
    const initialValue = JSON.stringify(valueText);

    const attributes = [];
    if (isDisabled) attributes.push("disabled");
    if (isReadOnly) attributes.push("readOnly");
    if (isRequired) attributes.push("required");
    if (autoComplete !== "off")
      attributes.push(`autoComplete="${autoComplete}"`);
    if (maxLength !== undefined) attributes.push(`maxLength={${maxLength}}`);
    if (minLength !== undefined) attributes.push(`minLength={${minLength}}`);

    const attributesString = attributes
      .map((attr) => `\n            ${attr}`)
      .join("");

    const coreInputElement = `<input
            type="${
              inputType === "password" &&
              useInputStore.getState().useObscuredText
                ? "password"
                : inputType
            }"
            placeholder="${placeholderText}"
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="${inputClassList}"${attributesString}
          />`;

    let inputElement;
    if (hasIcon && icon) {
      // Apply w-fit and valueFontSize to the wrapping div for icon case
      inputElement = `<div className="${inputContainerClasses} w-fit ${valueFontSize}">
            ${coreInputElement}
            ${iconJSXElement}
          </div>`;
    } else {
      inputElement = coreInputElement;
    }

    const finalComponent = `\
${reactImportStatement.trim()}${
      iconImportStatement ? `\n${iconImportStatement.trim()}` : ""
    }

const MyInput = () => {
  const [value, setValue] = useState(${initialValue});

  return (
    <div className="${marginClasses}">
      {${
        isLabelDisplayed
          ? `
      <label htmlFor="customInput" className="${labelClassList}">
        ${labelText}
      </label>`
          : "null"
      }
      }
      ${
        inputElement.includes("<div")
          ? inputElement
              .split("\\n")
              .map((line) => `  ${line}`)
              .join("\\n")
          : `  ${inputElement}`
      }
    </div>
  );
};

export default MyInput;
`;
    return finalComponent;
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
        Here is the generated code for your input field:
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

export default InputCodeExporter;
