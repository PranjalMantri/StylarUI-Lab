export const gradientDirectionMap: Record<string, string> = {
  "to-b": "to bottom",
  "to-t": "to top",
  "to-l": "to left",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-tl": "to top left",
  "to-tr": "to top right",
  "to-bl": "to bottom left",
};

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
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "4": "1rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
};

export const fontSizeMap: Record<string, string> = {
  "text-xs": "0.75rem",
  "text-sm": "0.875rem",
  "text-base": "1rem",
  "text-lg": "1.125rem",
  "text-xl": "1.25rem",
  "text-2xl": "1.5rem",
  "text-3xl": "1.875rem",
  "text-4xl": "2.25rem",
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

export const transitionPropertyMap: Record<string, string> = {
  "transition-all": "all",
  "transition-opacity": "opacity",
  "transition-transform": "transform",
  "transition-bg": "background-color",
  "transition-colors":
    "color, background-color, border-color, text-decoration-color, fill, stroke",
  "transition-color": "color",
  "transition-border": "border",
  "transition-shadow": "box-shadow",
  "transition-height": "height",
  "transition-width": "width",
  "transition-padding": "padding",
  "transition-margin": "margin",
  "transition-filter": "filter",
};

export const transitionDurationMap: Record<string, string> = {
  "0.1s": "100ms",
  "0.2s": "200ms",
  "0.3s": "300ms",
  "0.5s": "500ms",
  "0.7s": "700ms",
  "1s": "1s",
  "1.5s": "1.5s",
  "2s": "2s",
};

export const transitionDelayMap: Record<string, string> = {
  "0s": "0s",
  "0.1s": "100ms",
  "0.2s": "200ms",
  "0.3s": "300ms",
  "0.5s": "500ms",
  "1s": "1s",
  "1.5s": "1.5s",
  "2s": "2s",
};

export const transitionTimingFunctionMap: Record<string, string> = {
  ease: "ease",
  "ease-in": "ease-in",
  "ease-out": "ease-out",
  "ease-in-out": "ease-in-out",
  linear: "linear",
  "step-start": "step-start",
  "step-end": "step-end",
};

export const textAlignMap: Record<string, React.CSSProperties["textAlign"]> = {
  "text-left": "left",
  "text-center": "center",
  "text-right": "right",
};

export const iconSizeMap: Record<string, string> = {
  "text-xs": "w-2 h-2",
  "text-sm": "w-3.5 h-3.5",
  "text-base": "w-4 h-4",
  "text-md": "w-4 h-4",
  "text-lg": "w-5 h-5",
  "text-xl": "w-5 h-5",
  "text-2xl": "w-6 h-6",
  "text-3xl": "w-7 h-7",
};
