import useDropdownStore from "../../../store/dropdownStore";
import { Copy } from "lucide-react";
import { useState } from "react";

function DropdownCodeExporter() {
  const {
    label,
    labelColor,
    labelFontSize,
    labelFontWeight,
    textColor,
    backgroundColor,
    hoverTextColor,
    hoverBackground,
    borderWidth,
    borderStyle,
    borderSide,
    borderColor,
    borderRadius,
    boxShadow,
    width,
    height,
    paddingX,
    paddingY,
    marginX,
    marginY,
    optionTextColor,
    optionBgColor,
    optionHoverTextColor,
    optionHoverBgColor,
    baseTransition,
    timingFunction,
    duration,
    delay,
    labelCustomClass,
    optionCustomClass,
    selectedOptionTextColor,
    selectedOptionBgColor,
  } = useDropdownStore();

  const [copied, setCopied] = useState(false);

  const generatedCode = () => {
    const labelClassList = [
      labelColor.startsWith("#") ? `text-[${labelColor}]` : labelColor,
      labelFontSize,
      labelFontWeight,
      labelCustomClass,
    ]
      .filter(Boolean)
      .join(" ");

    const borderStyleClass =
      borderStyle !== "none" ? `border-${borderStyle}` : "";

    const borderWidthClass =
      borderWidth === "border" ? "border-1" : borderWidth;

    const borderColorClass = borderColor.startsWith("#")
      ? `border-[${borderColor}]`
      : borderColor;

    const dropdownBorderClasses =
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

    const widthStyle =
      width === "auto"
        ? "w-auto"
        : width.startsWith("w-")
        ? width
        : width.includes("px") || width.includes("rem") || width.includes("%")
        ? `w-[${width}]`
        : `w-${width}`;

    const buttonClassList = [
      textColor.startsWith("#") ? `text-[${textColor}]` : textColor,
      backgroundColor.startsWith("#")
        ? `bg-[${backgroundColor}]`
        : backgroundColor,
      hoverTextColor.startsWith("#")
        ? `hover:text-[${hoverTextColor}]`
        : `hover:text-${hoverTextColor.replace("text-", "")}`,
      hoverBackground.startsWith("#")
        ? `hover:bg-[${hoverBackground}]`
        : `hover:bg-${hoverBackground.replace("bg-", "")}`,
      dropdownBorderClasses,
      borderRadius,
      boxShadow,
      heightStyle,
      widthStyle,
      paddingX.startsWith("px-[") ? paddingX : `px-${paddingX}`,
      paddingY.startsWith("py-[") ? paddingY : `py-${paddingY}`,
      baseTransition,
      timingFunction,
      duration,
      delay,
      "flex items-center justify-between",
    ]
      .filter(Boolean)
      .join(" ");

    const optionBaseClasses = [
      optionTextColor.startsWith("#")
        ? `text-[${optionTextColor}]`
        : optionTextColor,
      optionBgColor.startsWith("#") ? `bg-[${optionBgColor}]` : optionBgColor,
      optionHoverTextColor.startsWith("#")
        ? `hover:text-[${optionHoverTextColor}]`
        : `hover:text-${optionHoverTextColor.replace("text-", "")}`,
      optionHoverBgColor.startsWith("#")
        ? `hover:bg-[${optionHoverBgColor}]`
        : `hover:bg-${optionHoverBgColor.replace("bg-", "")}`,
      "px-4 py-2 cursor-pointer",
      optionCustomClass,
    ]
      .filter(Boolean)
      .join(" ");

    const selectedOptionClasses = [
      selectedOptionTextColor.startsWith("#")
        ? `text-[${selectedOptionTextColor}]`
        : selectedOptionTextColor,
      selectedOptionBgColor.startsWith("#")
        ? `bg-[${selectedOptionBgColor}]`
        : selectedOptionBgColor,
    ]
      .filter(Boolean)
      .join(" ");

    const marginClasses = [
      marginX.startsWith("mx-[") ? marginX : `mx-${marginX}`,
      marginY.startsWith("my-[") ? marginY : `my-${marginY}`,
    ]
      .filter(Boolean)
      .join(" ");

    const options = ["Option 1", "Option 2", "Option 3"];

    return [
      "import { useState, useRef, useEffect } from 'react';",
      "import { ChevronDown } from 'lucide-react';\n",
      "const MyDropdown = () => {",
      "  const [isOpen, setIsOpen] = useState(false);",
      "  const [selectedOption, setSelectedOption] = useState(null);",
      "  const dropdownRef = useRef(null);\n",
      `  const options = [${options.map((opt) => `"${opt}"`).join(", ")}];\n`,
      "  useEffect(() => {",
      "    const handleClickOutside = (event) => {",
      "      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {",
      "        setIsOpen(false);",
      "      }",
      "    };",
      '    document.addEventListener("mousedown", handleClickOutside);',
      "    return () => {",
      '      document.removeEventListener("mousedown", handleClickOutside);',
      "    };",
      "  }, []);\n",
      "  const handleOptionClick = (option) => {",
      "    setSelectedOption(option);",
      "    setIsOpen(false);",
      "  };\n",
      `  return (\n    <div className="${marginClasses}" ref={dropdownRef}>`,
      label
        ? [
            `      <label htmlFor="customDropdown" className="${labelClassList}">`,
            `        ${label}`,
            "      </label>",
          ].join("\n")
        : "",
      `      <button`,
      `        id="customDropdown"`,
      `        type="button"`,
      `        className="${buttonClassList}"`,
      `        onClick={() => setIsOpen(!isOpen)}`,
      `        aria-haspopup="listbox"`,
      `        aria-expanded={isOpen}`,
      `      >`,
      `        {selectedOption || "${label}"}`,
      `        <ChevronDown className={"w-4 h-4 transform transition-transform " + (isOpen ? "rotate-180" : "")} />`,
      `      </button>`,
      `      {isOpen && (`,
      `        <ul`,
      `          className="${widthStyle} ${borderRadius} ${optionCustomClass}"`,
      `          role="listbox"`,
      `        >`,
      `          {options.map((option, index) => (`,
      `            <li`,
      `              key={index}`,
      `              className={\`${optionBaseClasses} \${selectedOption === option ? '${selectedOptionClasses}' : ''}\`}`,
      `              onClick={() => handleOptionClick(option)}`,
      `              role="option"`,
      `              aria-selected={selectedOption === option}`,
      `            >`,
      `              {option}`,
      `            </li>`,
      `          ))}`,
      `        </ul>`,
      `      )}`,
      "    </div>",
      "  );",
      "};\n",
      "export default MyDropdown;",
    ].join("\n");
  };

  const code = generatedCode();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <p className="text-slate-500 mb-1">
        Here is the generated code for your Dropdown component:
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

export default DropdownCodeExporter;
