import { create } from "zustand";

interface SliderStore {
  sliderColor: string;
  setSliderColor: (color: string) => void;
  sliderSize: string;
  setSliderSize: (size: string) => void;
  sliderVariant: string;
  setSliderVariant: (variant: string) => void;
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
  defaultValue: number;
  setDefaultValue: (value: number) => void;
  isDisabled: boolean;
  setIsDisabled: (disabled: boolean) => void;
  isReadOnly: boolean;
  setIsReadOnly: (readOnly: boolean) => void;
  isLabelDisplayed: boolean;
  setIsLabelDisplayed: (displayed: boolean) => void;
  labelText: string;
  setLabelText: (text: string) => void;
  labelTextColor: string;
  setLabelTextColor: (color: string) => void;
  labelPosition: string;
  setLabelPosition: (position: string) => void;
  labelFontSize: string;
  setLabelFontSize: (size: string) => void;
  labelFontWeight: string;
  setLabelFontWeight: (weight: string) => void;
  isShowValue: boolean;
  setIsShowValue: (show: boolean) => void;
  toolTip: string;
  setToolTip: (tooltip: string) => void;
}

const useSliderStore = create<SliderStore>((set) => ({
  sliderColor: "#4A90E2",
  setSliderColor: (color) => set({ sliderColor: color }),
  sliderSize: "medium",
  setSliderSize: (size) => set({ sliderSize: size }),
  sliderVariant: "outline",
  setSliderVariant: (variant) => set({ sliderVariant: variant }),
  minValue: 0,
  setMinValue: (value) => set({ minValue: value }),
  maxValue: 100,
  setMaxValue: (value) => set({ maxValue: value }),
  defaultValue: 50,
  setDefaultValue: (value) => set({ defaultValue: value }),
  isDisabled: false,
  setIsDisabled: (disabled) => set({ isDisabled: disabled }),
  isReadOnly: false,
  setIsReadOnly: (readOnly) => set({ isReadOnly: readOnly }),
  isLabelDisplayed: true,
  setIsLabelDisplayed: (displayed) => set({ isLabelDisplayed: displayed }),
  labelText: "Label",
  setLabelText: (text) => set({ labelText: text }),
  labelTextColor: "#000000",
  setLabelTextColor: (color) => set({ labelTextColor: color }),
  labelPosition: "top",
  setLabelPosition: (position) => set({ labelPosition: position }),
  labelFontSize: "14px",
  setLabelFontSize: (size) => set({ labelFontSize: size }),
  labelFontWeight: "normal",
  setLabelFontWeight: (weight) => set({ labelFontWeight: weight }),
  isShowValue: true,
  setIsShowValue: (show) => set({ isShowValue: show }),
  toolTip: "",
  setToolTip: (tooltip) => set({ toolTip: tooltip }),
}));

export default useSliderStore;
