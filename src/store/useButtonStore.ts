import { create } from "zustand";

interface ButtonStore {
  label: string;
  setLabel: (label: string) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  backgroundColor: string;
  hoverTextColor: string;
  setHoverTextColor: (textColor: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  hoverBackground: string;
  setHoverBackground: (hoverBackground: string) => void;
  isGradientActive: boolean;
  setIsGradientActive: () => void;
  gradientDirection: string;
  setGradientDirection: (gradientDirection: string) => void;
  gradientFromColor: string;
  setGradientFromColor: (gradientFromColor: string) => void;
  gradientToColor: string;
  setGradientToColor: (gradientToColor: string) => void;
  gradientViaColor: string;
  setGradientViaColor: (gradientViaColor: string) => void;
  borderWidth: string;
  setBorderWidth: (borderWidth: string) => void;
  borderStyle: string;
  setBorderStyle: (borderStyle: string) => void;
  borderSide: string;
  setBorderSide: (borderSide: string) => void;
  borderColor: string;
  setBorderColor: (borderColor: string) => void;
  borderRadius: string;
  setBorderRadius: (borderRadius: string) => void;
  boxShadow: string;
  setBoxShadow: (boxShadow: string) => void;
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
  fontSize: string;
  setFontSize: (fontSize: string) => void;
  fontWeight: string;
  setFontWeight: (fontWeight: string) => void;
  isIconUse: boolean;
  setIsIconUse: (isIconUse: boolean) => void;
  icon: string;
  setIcon: (icon: string) => void;
  iconPosition: string;
  setIconPosition: (iconPosition: string) => void;
  baseTransition: string;
  setBaseTransition: (baseTransition: string) => void;
  timingFunction: string;
  setTimingFunction: (timingFunction: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  delay: string;
  setDelay: (delay: string) => void;
  customClass: string;
  setCustomClass: (customClass: string) => void;
  isDisabled: boolean;
  setIsDisabled: () => void;
  isLoading: boolean;
  setIsLoading: () => void;
}

const useButtonStore = create<ButtonStore>((set, get) => ({
  label: "Sample Text",
  setLabel: (label: string) => {
    set({ label });
  },
  textColor: "#ffffff",
  setTextColor: (textColor: string) => {
    set({ textColor });
  },
  backgroundColor: "#0284c7",
  setBackgroundColor: (backgroundColor: string) => {
    set({ backgroundColor });
  },
  hoverTextColor: "#0284c7",
  setHoverTextColor: (hoverTextColor: string) => {
    set({ hoverTextColor });
  },
  hoverBackground: "#0369a1",
  setHoverBackground: (hoverBackground: string) => {
    set({ hoverBackground });
  },
  isGradientActive: false,
  setIsGradientActive: () => {
    set({ isGradientActive: !get().isGradientActive });
  },
  gradientDirection: "to-r",
  setGradientDirection: (gradientDirection: string) => {
    set({ gradientDirection });
  },
  gradientFromColor: "#0ea5e9",
  setGradientFromColor: (gradientFromColor: string) => {
    set({ gradientFromColor });
  },
  gradientToColor: "#38bdf8",
  setGradientToColor: (gradientToColor: string) => {
    set({ gradientToColor });
  },
  gradientViaColor: "",
  setGradientViaColor: (gradientViaColor: string) => {
    set({ gradientViaColor });
  },
  borderWidth: "border-0",
  setBorderWidth: (borderWidth: string) => {
    set({ borderWidth });
  },
  borderStyle: "solid",
  setBorderStyle: (borderStyle: string) => {
    set({ borderStyle });
  },
  borderSide: "border",
  setBorderSide: (borderSide: string) => {
    set({ borderSide });
  },
  borderColor: "#e0f2fe",
  setBorderColor: (borderColor: string) => {
    set({ borderColor });
  },
  borderRadius: "rounded-sm",
  setBorderRadius: (borderRadius: string) => {
    set({ borderRadius });
  },
  boxShadow: "shadow-md",
  setBoxShadow: (boxShadow: string) => {
    set({ boxShadow });
  },
  width: "auto",
  setWidth: (width: string) => {
    set({ width });
  },
  height: "auto",
  setHeight: (height: string) => {
    set({ height });
  },
  paddingX: "4",
  setPaddingX: (paddingX: string) => {
    set({ paddingX });
  },
  paddingY: "2",
  setPaddingY: (paddingY: string) => {
    set({ paddingY });
  },
  marginX: "2",
  setMarginX: (marginX: string) => {
    set({ marginX });
  },
  marginY: "2",
  setMarginY: (marginY: string) => {
    set({ marginY });
  },
  fontSize: "text-base",
  setFontSize: (fontSize: string) => {
    set({ fontSize });
  },
  fontWeight: "font-medium",
  setFontWeight: (fontWeight: string) => {
    set({ fontWeight });
  },
  isIconUse: true,
  setIsIconUse: (isIconUse: boolean) => {
    set({ isIconUse });
  },
  icon: "Zap",
  setIcon: (icon: string) => {
    set({ icon });
  },
  iconPosition: "left",
  setIconPosition: (iconPosition: string) => {
    set({ iconPosition });
  },
  baseTransition: "transition-all",
  setBaseTransition: (baseTransition: string) => {
    set({ baseTransition });
  },
  timingFunction: "ease-in",
  setTimingFunction: (timingFunction: string) => {
    set({ timingFunction });
  },
  duration: "0.2s",
  setDuration: (duration: string) => {
    set({ duration });
  },
  delay: "all",
  setDelay: (delay: string) => {
    set({ delay });
  },
  customClass: "",
  setCustomClass: (customClass: string) => {
    set({ customClass });
  },
  isDisabled: false,
  setIsDisabled: () => {
    set({ isDisabled: !get().isDisabled });
  },
  isLoading: false,
  setIsLoading: () => {
    set({ isLoading: !get().isLoading });
  },
}));

export default useButtonStore;
