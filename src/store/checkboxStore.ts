import { create } from "zustand";

interface checkboxStore {
  labelText: string;
  setLabelText: (text: string) => void;
  labelPosition: string;
  setLabelPosition: (position: string) => void;
  labelColor: string;
  setLabelColor: (color: string) => void;
  labelFontSize: string;
  setLabelFontSize: (size: string) => void;
  labelFontWeight: string;
  setLabelFontWeight: (weight: string) => void;
  checkboxStyle: string;
  setCheckboxStyle: (style: string) => void;
  checkedBackgroundColor: string;
  setCheckedBackgroundColor: (color: string) => void;
  uncheckedBackgroundColor: string;
  setUncheckedBackgroundColor: (color: string) => void;
  checkmarkColor: string;
  setCheckmarkColor: (color: string) => void;
  focusRingColor: string;
  setFocusRingColor: (color: string) => void;
  borderWidth: string;
  setBorderWidth: (width: string) => void;
  borderColor: string;
  setBorderColor: (color: string) => void;
  borderRadius: string;
  setBorderRadius: (radius: string) => void;
  boxShadow: string;
  setBoxShadow: (shadow: string) => void;
  // Checkbox sizing fields
  checkboxSize: string;
  setCheckboxSize: (size: string) => void;
  paddingInsideCheckbox: string;
  setPaddingInsideCheckbox: (padding: string) => void;
  marginAroundCheckbox: string;
  setMarginAroundCheckbox: (margin: string) => void;
  gapBetweenCheckmarkAndLabel: string;
  setGapBetweenCheckmarkAndLabel: (gap: string) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
  readOnly: boolean;
  setReadOnly: (readOnly: boolean) => void;
  tooltip: string;
  setTooltip: (tooltip: string) => void;
}

const useCheckboxStore = create<checkboxStore>((set) => ({
  labelText: "",
  setLabelText: (text) => set({ labelText: text }),
  labelPosition: "left",
  setLabelPosition: (position) => set({ labelPosition: position }),
  labelColor: "black",
  setLabelColor: (color) => set({ labelColor: color }),
  labelFontSize: "text-base",
  setLabelFontSize: (size) => set({ labelFontSize: size }),
  labelFontWeight: "font-normal",
  setLabelFontWeight: (weight) => set({ labelFontWeight: weight }),
  checkedBackgroundColor: "#4CAF50",
  setCheckedBackgroundColor: (color) => set({ checkedBackgroundColor: color }),
  uncheckedBackgroundColor: "#FFFFFF",
  setUncheckedBackgroundColor: (color) =>
    set({ uncheckedBackgroundColor: color }),
  checkmarkColor: "#FFFFFF",
  setCheckmarkColor: (color) => set({ checkmarkColor: color }),
  focusRingColor: "#4CAF50",
  setFocusRingColor: (color) => set({ focusRingColor: color }),
  checkboxStyle: "filled",
  setCheckboxStyle: (style) => set({ checkboxStyle: style }),
  borderWidth: "border-2",
  setBorderWidth: (width) => set({ borderWidth: width }),
  borderColor: "border-gray-300",
  setBorderColor: (color) => set({ borderColor: color }),
  borderRadius: "rounded",
  setBorderRadius: (radius) => set({ borderRadius: radius }),
  boxShadow: "shadow-md",
  setBoxShadow: (shadow) => set({ boxShadow: shadow }),
  // Checkbox sizing state
  checkboxSize: "md",
  setCheckboxSize: (size) => set({ checkboxSize: size }),
  paddingInsideCheckbox: "2",
  setPaddingInsideCheckbox: (padding) =>
    set({ paddingInsideCheckbox: padding }),
  marginAroundCheckbox: "0",
  setMarginAroundCheckbox: (margin) => set({ marginAroundCheckbox: margin }),
  gapBetweenCheckmarkAndLabel: "2",
  setGapBetweenCheckmarkAndLabel: (gap) =>
    set({ gapBetweenCheckmarkAndLabel: gap }),
  disabled: false,
  setDisabled: (disabled) => set({ disabled }),
  readOnly: false,
  setReadOnly: (readOnly) => set({ readOnly }),
  tooltip: "",
  setTooltip: (tooltip) => set({ tooltip }),
}));

export default useCheckboxStore;
