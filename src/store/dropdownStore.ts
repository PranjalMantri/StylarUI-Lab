import { create } from "zustand";

interface DropdownState {
  label: string;
  setLabel: (label: string) => void;
  labelColor: string;
  setLabelColor: (color: string) => void;
  labelFontSize: string;
  setLabelFontSize: (size: string) => void;
  labelFontWeight: string;
  setLabelFontWeight: (weight: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  hoverTextColor: string;
  setHoverTextColor: (color: string) => void;
  hoverBackground: string;
  setHoverBackground: (color: string) => void;
  borderWidth: string;
  setBorderWidth: (width: string) => void;
  borderStyle: string;
  setBorderStyle: (style: string) => void;
  borderSide: string;
  setBorderSide: (side: string) => void;
  borderColor: string;
  setBorderColor: (color: string) => void;
  borderRadius: string;
  setBorderRadius: (radius: string) => void;
  boxShadow: string;
  setBoxShadow: (shadow: string) => void;
  width: string;
  setWidth: (width: string) => void;
  height: string;
  setHeight: (height: string) => void;
  paddingX: string;
  setPaddingX: (paddingX: string) => void;
  paddingY: string;
  setPaddingY: (paddingY: string) => void;
  marginX: string;
  setMarginX: (marginX: string) => void;
  marginY: string;
  setMarginY: (marginY: string) => void;
  optionTextColor: string;
  setOptionTextColor: (color: string) => void;
  optionBgColor: string;
  setOptionBgColor: (color: string) => void;
  optionHoverTextColor: string;
  setOptionHoverTextColor: (color: string) => void;
  optionHoverBgColor: string;
  setOptionHoverBgColor: (color: string) => void;
  baseTransition: string;
  setBaseTransition: (transition: string) => void;
  timingFunction: string;
  setTimingFunction: (timing: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  delay: string;
  setDelay: (delay: string) => void;
  labelCustomClass: string;
  setLabelCustomClass: (customClass: string) => void;
  optionCustomClass: string;
  setOptionCustomClass: (customClass: string) => void;
  selectedOptionTextColor: string;
  setSelectedOptionTextColor: (color: string) => void;
  selectedOptionBgColor: string;
  setSelectedOptionBgColor: (color: string) => void;
  focusRingColor: string;
  setFocusRingColor: (color: string) => void;
  focusBorderColor: string;
  setFocusBorderColor: (color: string) => void;
  disabledBorderColor: string;
  setDisabledBorderColor: (color: string) => void;
  disabledBackgroundColor: string;
  setDisabledBackgroundColor: (color: string) => void;
  disabledTextColor: string;
  setDisabledTextColor: (color: string) => void;
  disabledOpacity: string;
  setDisabledOpacity: (opacity: string) => void;
}

const useDropdownStore = create<DropdownState>((set) => ({
  label: "Choose an option",
  setLabel: (label) => set({ label }),
  labelColor: "#CBD5E1",
  setLabelColor: (color) => set({ labelColor: color }),
  labelFontSize: "text-base",
  setLabelFontSize: (size) => set({ labelFontSize: size }),
  labelFontWeight: "font-medium",
  setLabelFontWeight: (weight) => set({ labelFontWeight: weight }),
  textColor: "#E2E8F0",
  setTextColor: (color) => set({ textColor: color }),
  backgroundColor: "#334155",
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  hoverTextColor: "#E2E8F0",
  setHoverTextColor: (color) => set({ hoverTextColor: color }),
  hoverBackground: "#1E293B",
  setHoverBackground: (color) => set({ hoverBackground: color }),
  borderWidth: "border",
  setBorderWidth: (width) => set({ borderWidth: width }),
  borderStyle: "solid",
  setBorderStyle: (style) => set({ borderStyle: style }),
  borderSide: "border",
  setBorderSide: (side) => set({ borderSide: side }),
  borderColor: "#475569",
  setBorderColor: (color) => set({ borderColor: color }),
  borderRadius: "rounded-md",
  setBorderRadius: (radius) => set({ borderRadius: radius }),
  boxShadow: "shadow-sm",
  setBoxShadow: (shadow) => set({ boxShadow: shadow }),
  width: "auto",
  setWidth: (width) => set({ width }),
  height: "auto",
  setHeight: (height) => set({ height }),
  paddingX: "2",
  setPaddingX: (paddingX) => set({ paddingX }),
  paddingY: "1",
  setPaddingY: (paddingY) => set({ paddingY }),
  marginX: "0",
  setMarginX: (marginX) => set({ marginX }),
  marginY: "0",
  setMarginY: (marginY) => set({ marginY }),
  optionTextColor: "#1E293B",
  setOptionTextColor: (color) => set({ optionTextColor: color }),
  optionBgColor: "#FFFFFF",
  setOptionBgColor: (color) => set({ optionBgColor: color }),
  optionHoverTextColor: "#000000",
  setOptionHoverTextColor: (color) => set({ optionHoverTextColor: color }),
  optionHoverBgColor: "#F0F0F0",
  setOptionHoverBgColor: (color) => set({ optionHoverBgColor: color }),
  baseTransition: "transition-all",
  setBaseTransition: (transition) => set({ baseTransition: transition }),
  timingFunction: "ease-in-out",
  setTimingFunction: (timing) => set({ timingFunction: timing }),
  duration: "duration-150",
  setDuration: (duration) => set({ duration }),
  delay: "delay-0",
  setDelay: (delay) => set({ delay }),
  labelCustomClass: "",
  setLabelCustomClass: (customClass) => set({ labelCustomClass: customClass }),
  optionCustomClass: "",
  setOptionCustomClass: (customClass) =>
    set({ optionCustomClass: customClass }),
  selectedOptionTextColor: "#E2E8F0",
  setSelectedOptionTextColor: (color) =>
    set({ selectedOptionTextColor: color }),
  selectedOptionBgColor: "#334155",
  setSelectedOptionBgColor: (color) => set({ selectedOptionBgColor: color }),
  selectedOptionHoverTextColor: "#E2E8F0",
  focusRingColor: "#0EA5E9",
  setFocusRingColor: (color) => set({ focusRingColor: color }),
  focusBorderColor: "#0EA5E9",
  setFocusBorderColor: (color) => set({ focusBorderColor: color }),
  disabledBorderColor: "#64748B",
  setDisabledBorderColor: (color) => set({ disabledBorderColor: color }),
  disabledBackgroundColor: "#1E293B80",
  setDisabledBackgroundColor: (color) =>
    set({ disabledBackgroundColor: color }),
  disabledTextColor: "#94A3B8",
  setDisabledTextColor: (color) => set({ disabledTextColor: color }),
  disabledOpacity: "opacity-60",
  setDisabledOpacity: (opacity) => set({ disabledOpacity: opacity }),
}));

export default useDropdownStore;
