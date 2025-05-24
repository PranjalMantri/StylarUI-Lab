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
  buttonWidth: string;
  setButtonWidth: (buttonWidth: string) => void;
  buttonHeight: string;
  setButtonHeight: (buttonHeight: string) => void;
  buttonPaddingX: string;
  setButtonPaddingX: (buttonPaddingX: string) => void;
  buttonPaddingY: string;
  setButtonPaddingY: (buttonPaddingY: string) => void;
  buttonMarginX: string;
  setButtonMarginX: (buttonMarginX: string) => void;
  buttonMarginY: string;
  setButtonMarginY: (buttonMarginY: string) => void;
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
  hoverTextColor: "#a1a1aa",
  setHoverTextColor: (hoverTextColor: string) => {
    set({ hoverTextColor });
  },
  hoverBackground: "#3730a3",
  setHoverBackground: (hoverBackground: string) => {
    set({ hoverBackground });
  },
  isGradientActive: true,
  setIsGradientActive: () => {
    set({ isGradientActive: !get().isGradientActive });
  },
  gradientDirection: "to-b",
  setGradientDirection: (gradientDirection: string) => {
    set({ gradientDirection });
  },
  gradientFromColor: "#0284c7",
  setGradientFromColor: (gradientFromColor: string) => {
    set({ gradientFromColor });
  },
  gradientToColor: "#a1a1aa",
  setGradientToColor: (gradientToColor: string) => {
    set({ gradientToColor });
  },
  gradientViaColor: "#a1a1aa",
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
  borderColor: "#fefefe",
  setBorderColor: (borderColor: string) => {
    set({ borderColor });
  },
  borderRadius: "Small",
  setBorderRadius: (borderRadius: string) => {
    set({ borderRadius });
  },
  boxShadow: "Small",
  setBoxShadow: (boxShadow: string) => {
    set({ boxShadow });
  },
  buttonWidth: "auto",
  setButtonWidth: (buttonWidth: string) => {
    set({ buttonWidth });
  },
  buttonHeight: "auto",
  setButtonHeight: (buttonHeight: string) => {
    set({ buttonHeight });
  },
  buttonPaddingX: "2",
  setButtonPaddingX: (buttonPaddingX: string) => {
    set({ buttonPaddingX });
  },
  buttonPaddingY: "2",
  setButtonPaddingY: (buttonPaddingY: string) => {
    set({ buttonPaddingY });
  },
  buttonMarginX: "2",
  setButtonMarginX: (buttonMarginX: string) => {
    set({ buttonMarginX });
  },
  buttonMarginY: "2",
  setButtonMarginY: (buttonMarginY: string) => {
    set({ buttonMarginY });
  },
  fontSize: "text-lg",
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
  icon: "Copy",
  setIcon: (icon: string) => {
    set({ icon });
  },
  iconPosition: "left",
  setIconPosition: (iconPosition: string) => {
    set({ iconPosition });
  },
  baseTransition: "all",
  setBaseTransition: (baseTransition: string) => {
    set({ baseTransition });
  },
  timingFunction: "all",
  setTimingFunction: (timingFunction: string) => {
    set({ timingFunction });
  },
  duration: "all",
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
