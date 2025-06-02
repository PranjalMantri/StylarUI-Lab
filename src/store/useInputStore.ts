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
  labelTextColor: "#4B5563",
  setLabelTextColor: (labelTextColor: string) => {
    set({ labelTextColor });
  },
  labelHoverTextColor: "#1F2937",
  setLabelHoverTextColor: (labelHoverTextColor: string) => {
    set({ labelHoverTextColor });
  },
  labelFontSize: "text-sm",
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
  placeholderText: "Placeholder",
  setPlaceholderText: (placeholderText: string) => {
    set({ placeholderText });
  },
  valueText: "",
  setValueText: (valueText: string) => {
    set({ valueText });
  },
  valueTextColor: "#e2e8f0",
  setValueTextColor: (valueTextColor: string) => {
    set({ valueTextColor });
  },
  valueFontSize: "text-sm",
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
  backgroundColor: "#2A384D",
  setBackgroundColor: (backgroundColor: string) => {
    set({ backgroundColor });
  },
  borderWidth: "border",
  setBorderWidth: (borderWidth: string) => set({ borderWidth }),
  borderColor: "#45556c",
  setBorderColor: (borderColor: string) => set({ borderColor }),
  borderStyle: "solid",
  setBorderStyle: (borderStyle: string) => set({ borderStyle }),
  borderSide: "border",
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
  boxShadow: "shadow-sm",
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
  autoComplete: "off",
  setAutoComplete: (autoComplete: string) => set({ autoComplete }),
  maxLength: 100,
  setMaxLength: (maxLength: number | undefined) => set({ maxLength }),
  minLength: undefined,
  setMinLength: (minLength: number | undefined) => set({ minLength }),
  hasIcon: false,
  setHasIcon: () => set((state) => ({ hasIcon: !state.hasIcon })),
  icon: "Lock",
  setIcon: (icon: string) => set({ icon }),
  iconPosition: "left",
  setIconPosition: (iconPosition: "left" | "right") => set({ iconPosition }),
  iconColor: "#6B7280",
  setIconColor: (iconColor: string) => set({ iconColor }),
}));

export default useInputStore;
