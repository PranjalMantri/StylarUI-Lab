export const borderWidthMap: Record<string, string> = {
  "border-0": "0px",
  border: "1px",
  "border-2": "2px",
  "border-4": "4px",
  "border-8": "8px",
};

export const borderSideMap: Record<string, string> = {
  border: "all",
  "border-t": "top",
  "border-b": "bottom",
  "border-l": "left",
  "border-r": "right",
  "border-x": "horizontal",
  "border-y": "vertical",
};

export const borderRadiusMap: Record<string, string> = {
  "rounded-none": "0px",
  "rounded-sm": "0.125rem",
  "rounded-md": "0.375rem",
  "rounded-lg": "0.5rem",
  "rounded-xl": "0.75rem",
  "rounded-2xl": "1rem",
  "rounded-full": "9999px",
};

export const boxShadowMap: Record<string, string> = {
  "shadow-none": "none",
  "shadow-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "shadow-md":
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "shadow-lg":
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  "shadow-xl":
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "shadow-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "shadow-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
};

export const widthMap: Record<string, string> = {
  auto: "auto",
  "fit-content": "fit-content",
  "w-full": "100%",
  "w-1/4": "25%",
  "w-1/2": "50%",
  "w-3/4": "75%",
};

export const heightMap: Record<string, string> = {
  auto: "auto",
  "fit-content": "fit-content",
  "h-full": "100%",
  "h-1/4": "25%",
  "h-1/2": "50%",
  "h-3/4": "75%",
};

export const paddingValues: Record<string, string> = {
  "0": "0px",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
};

export const fontSizeMap: Record<string, string> = {
  "text-xs": "0.75rem",
  "text-sm": "0.875rem",
  "text-base": "1rem",
  "text-md": "1.125rem", // Note: Tailwind's text-md is 1rem. This seems to be a custom mapping.
  "text-lg": "1.125rem",
  "text-xl": "1.25rem",
  "text-2xl": "1.5rem",
  "text-3xl": "1.875rem",
};

export const fontWeightMap: Record<string, string> = {
  "font-thin": "100",
  "font-extralight": "200",
  "font-light": "300",
  "font-normal": "400",
  "font-medium": "500",
  "font-semibold": "600",
  "font-bold": "700",
  "font-extrabold": "800",
};

export const textAlignMap: Record<string, React.CSSProperties["textAlign"]> = {
  "text-left": "left",
  "text-center": "center",
  "text-right": "right",
};
