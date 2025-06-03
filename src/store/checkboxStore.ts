import { create } from "zustand";

interface CheckboxStore {
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
  checkedBackgroundColor: string;
  setCheckedBackgroundColor: (color: string) => void;
  uncheckedBackgroundColor: string;
  setUncheckedBackgroundColor: (color: string) => void;
  checkmarkColor: string;
  setCheckmarkColor: (color: string) => void;
  focusRingColor: string;
  setFocusRingColor: (color: string) => void;
  checkboxStyle: string;
  setCheckboxStyle: (style: string) => void;
  borderWidth: string;
  setBorderWidth: (width: string) => void;
  borderColor: string;
  setBorderColor: (color: string) => void;
  borderRadius: string;
  setBorderRadius: (radius: string) => void;
  boxShadow: string;
  setBoxShadow: (shadow: string) => void;
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

const useCheckboxStore = create<CheckboxStore>((set) => ({
  labelText: "Checkbox label",
  setLabelText: (text) => set({ labelText: text }),
  labelPosition: "right",
  setLabelPosition: (position) => set({ labelPosition: position }),
  labelColor: "#858f9d",
  setLabelColor: (color) => set({ labelColor: color }),
  labelFontSize: "text-sm",
  setLabelFontSize: (size) => set({ labelFontSize: size }),
  labelFontWeight: "font-medium",
  setLabelFontWeight: (weight) => set({ labelFontWeight: weight }),
  checkedBackgroundColor: "#3b82f6",
  setCheckedBackgroundColor: (color) => set({ checkedBackgroundColor: color }),
  uncheckedBackgroundColor: "#f9fafb",
  setUncheckedBackgroundColor: (color) =>
    set({ uncheckedBackgroundColor: color }),
  checkmarkColor: "#ffffff",
  setCheckmarkColor: (color) => set({ checkmarkColor: color }),
  focusRingColor: "#3b82f6",
  setFocusRingColor: (color) => set({ focusRingColor: color }),
  checkboxStyle: "filled",
  setCheckboxStyle: (style) => set({ checkboxStyle: style }),
  borderWidth: "border",
  setBorderWidth: (width) => set({ borderWidth: width }),
  borderColor: "#d1d5db",
  setBorderColor: (color) => set({ borderColor: color }),
  borderRadius: "rounded-sm",
  setBorderRadius: (radius) => set({ borderRadius: radius }),
  boxShadow: "shadow-sm",
  setBoxShadow: (shadow) => set({ boxShadow: shadow }),
  checkboxSize: "sm",
  setCheckboxSize: (size) => set({ checkboxSize: size }),
  paddingInsideCheckbox: "1",
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
