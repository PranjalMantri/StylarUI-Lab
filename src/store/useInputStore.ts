import { create } from "zustand";

type iconPositionType = "left" | "right";

interface InputStore {
  isLabelDisplayed: boolean;
  setIsLabelDisplayed: () => void;
  labelText: string;
  setLabelText: (labelText: string) => void;
  labelTextColor: string;
  setLabelTextColor: (labelTextColor: string) => void;
  labelHoverTextColor: string;
  setLabelHoverTextColor: (labelHoverTextColor: string) => void;
  labelFontSize: string;
  setLabelFontSize: (labelFontSize: string) => void;
  labelFontWeight: string;
  setLabelFontWeight: (labelFontWeight: string) => void;
  inputType: string;
  setInputType: (inputType: string) => void;
  placeholderText: string;
  setPlaceholderText: (placeholder: string) => void;
  valueText: string;
  setValueText: (valueText: string) => void;
  placeholderColor: string;
  setPlaceholderColor: (placeholderColor: string) => void;
  placeholderFontSize: string;
  setPlaceholderFontSize: (placeholderFontSize: string) => void;
  placeholderFontWeight: string;
  setPlaceholderFontWeight: (placeholderFontWeight: string) => void;
  placeholderOpacity: string;
  setPlaceholderOpacity: (placeholderOpacity: string) => void;
  valueTextColor: string;
  setValueTextColor: (valueTextColor: string) => void;
  valueFontSize: string;
  setValueFontSize: (valueFontSize: string) => void;
  valueFontWeight: string;
  setValueFontWeight: (valueFontWeight: string) => void;
  valueTextAlign: string; // Added
  setValueTextAlign: (valueTextAlign: string) => void;
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
  borderWidth: string;
  setBorderWidth: (borderWidth: string) => void;
  borderColor: string;
  setBorderColor: (borderColor: string) => void;
  borderStyle: string;
  setBorderStyle: (borderStyle: string) => void;
  borderSide: string;
  setBorderSide: (borderSide: string) => void;
  height: string;
  setHeight: (height: string) => void;
  width: string;
  setWidth: (width: string) => void;
  paddingX: string;
  setPaddingX: (paddingX: string) => void;
  paddingY: string;
  setPaddingY: (paddingY: string) => void;
  marginX: string;
  setMarginX: (marginX: string) => void;
  marginY: string;
  setMarginY: (marginY: string) => void;
  borderRadius: string;
  setBorderRadius: (borderRadius: string) => void;
  boxShadow: string;
  setBoxShadow: (boxShadow: string) => void;
  labelCustomClass: string;
  setLabelCustomClass: (labelCustomClass: string) => void;
  inputCustomClass: string;
  setInputCustomClass: (inputCustomClass: string) => void;
  isDisabled: boolean;
  setIsDisabled: () => void;
  isReadOnly: boolean;
  setIsReadOnly: () => void;
  isRequired: boolean;
  setIsRequired: () => void;
  useObscuredText: boolean;
  setUseObscuredText: () => void;
  autoComplete: string;
  setAutoComplete: (autoComplete: string) => void;
  maxLength: number | undefined;
  setMaxLength: (maxLength: number | undefined) => void;
  minLength: number | undefined;
  setMinLength: (maxLength: number | undefined) => void;
  hasIcon: boolean;
  setHasIcon: () => void;
  icon: string;
  setIcon: (icon: string) => void;
  iconPosition: iconPositionType;
  setIconPosition: (iconPosition: "left" | "right") => void;
  iconColor: string;
  setIconColor: (iconColor: string) => void;
  obscureTextSymbol: string;
  setObscureTextSymbol: (obscureTextSymbol: string) => void;
}

const useInputStore = create<InputStore>((set, get) => ({
  isLabelDisplayed: true,
  setIsLabelDisplayed: () => {
    set({ isLabelDisplayed: !get().isLabelDisplayed });
  },
  labelText: "Input Label",
  setLabelText: (labelText: string) => {
    set({ labelText });
  },
  labelTextColor: "#ffffff",
  setLabelTextColor: (labelTextColor: string) => {
    set({ labelTextColor });
  },
  labelHoverTextColor: "#ffffff",
  setLabelHoverTextColor: (labelHoverTextColor: string) => {
    set({ labelHoverTextColor });
  },
  labelFontSize: "text-md",
  setLabelFontSize: (labelFontSize: string) => {
    set({ labelFontSize });
  },
  labelFontWeight: "font-medium",
  setLabelFontWeight: (labelFontWeight: string) => {
    set({ labelFontWeight });
  },
  inputType: "text",
  setInputType: (inputType: string) => {
    set({ inputType });
  },
  placeholderText: "Placeholder...",
  setPlaceholderText: (placeholderText: string) => {
    set({ placeholderText });
  },
  valueText: "",
  setValueText: (valueText: string) => {
    set({ valueText });
  },
  placeholderColor: "#fefefe",
  setPlaceholderColor: (placeholderColor: string) => {
    set({ placeholderColor });
  },
  placeholderFontSize: "text-sm",
  setPlaceholderFontSize: (placeholderFontSize: string) => {
    set({ placeholderFontSize });
  },
  placeholderFontWeight: "font-normal",
  setPlaceholderFontWeight: (placeholderFontWeight: string) => {
    set({ placeholderFontWeight });
  },
  placeholderOpacity: "opacity-100",
  setPlaceholderOpacity: (placeholderOpacity: string) => {
    set({ placeholderOpacity });
  },
  valueTextColor: "#000000",
  setValueTextColor: (valueTextColor: string) => {
    set({ valueTextColor });
  },
  valueFontSize: "text-base",
  setValueFontSize: (valueFontSize: string) => {
    set({ valueFontSize });
  },
  valueFontWeight: "font-normal",
  setValueFontWeight: (valueFontWeight: string) => {
    set({ valueFontWeight });
  },
  valueTextAlign: "text-left",
  setValueTextAlign: (valueTextAlign: string) => {
    set({ valueTextAlign });
  },
  backgroundColor: "#fefefe",
  setBackgroundColor: (backgroundColor: string) => {
    set({ backgroundColor });
  },
  borderWidth: "1",
  setBorderWidth: (borderWidth: string) => set({ borderWidth }),
  borderColor: "#D1D5DB",
  setBorderColor: (borderColor: string) => set({ borderColor }),
  borderStyle: "solid",
  setBorderStyle: (borderStyle: string) => set({ borderStyle }),
  borderSide: "all",
  setBorderSide: (borderSide: string) => set({ borderSide }),
  height: "auto",
  setHeight: (height: string) => set({ height }),
  width: "auto",
  setWidth: (width: string) => set({ width }),
  paddingX: "4",
  setPaddingX: (paddingX: string) => set({ paddingX }),
  paddingY: "2",
  setPaddingY: (paddingY: string) => set({ paddingY }),
  marginX: "0",
  setMarginX: (marginX: string) => set({ marginX }),
  marginY: "0",
  setMarginY: (marginY: string) => set({ marginY }),
  borderRadius: "rounded-md",
  setBorderRadius: (borderRadius: string) => set({ borderRadius }),
  boxShadow: "shadow",
  setBoxShadow: (boxShadow: string) => set({ boxShadow }),
  labelCustomClass: "",
  setLabelCustomClass: (labelCustomClass: string) => set({ labelCustomClass }),
  inputCustomClass: "",
  setInputCustomClass: (inputCustomClass: string) => set({ inputCustomClass }),
  isDisabled: false,
  setIsDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
  isReadOnly: false,
  setIsReadOnly: () => set((state) => ({ isReadOnly: !state.isReadOnly })),
  isRequired: false,
  setIsRequired: () => set((state) => ({ isRequired: !state.isRequired })),
  useObscuredText: false,
  setUseObscuredText: () =>
    set((state) => ({ useObscuredText: !state.useObscuredText })),
  autoComplete: "off",
  setAutoComplete: (autoComplete: string) => set({ autoComplete }),
  maxLength: 100,
  setMaxLength: (maxLength: number | undefined) => set({ maxLength }),
  minLength: 6,
  setMinLength: (minLength: number | undefined) => set({ minLength }),
  hasIcon: false,
  setHasIcon: () => set((state) => ({ hasIcon: !state.hasIcon })),
  icon: "",
  setIcon: (icon: string) => set({ icon }),
  iconPosition: "left",
  setIconPosition: (iconPosition: "left" | "right") => set({ iconPosition }),
  iconColor: "#000000", // Default icon color
  setIconColor: (iconColor: string) => set({ iconColor }),
  obscureTextSymbol: "*",
  setObscureTextSymbol: (obscureTextSymbol: string) => {
    set({ obscureTextSymbol });
  },
}));

export default useInputStore;
