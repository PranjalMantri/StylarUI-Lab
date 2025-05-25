import type { BorderStyleProperty } from "./types";

export function buildGradient(
  direction: string,
  fromColor: string,
  toColor: string,
  viaColor?: string
) {
  return viaColor
    ? `linear-gradient(${direction}, ${fromColor}, ${viaColor}, ${toColor})`
    : `linear-gradient(${direction}, ${fromColor}, ${toColor})`;
}

export function buildBorderStyle({
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
    case "horizontal":
      applyBorder("Left");
      applyBorder("Right");
      break;
    case "vertical":
      applyBorder("Top");
      applyBorder("Bottom");
      break;
    default:
      break;
  }

  return borderStyles;
}
