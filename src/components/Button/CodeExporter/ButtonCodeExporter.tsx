import useButtonStore from "../../../store/useButtonStore";

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

  console.log(generatedCode());

  return (
    <div>
      <p className="text-slate-500 mt-2">
        Your content preview will be displayed here.
      </p>
      <button className="mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-150">
        Copy Code
      </button>
    </div>
  );
}

export default ButtonCodeExporter;
