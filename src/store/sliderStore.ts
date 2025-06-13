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
  labelPosition: "left" | "right";
  setLabelPosition: (position: "left" | "right") => void;
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
  sliderColor: "#38bdf8",
  sliderVariant: "filled",
  labelTextColor: "#475569",
  labelPosition: "left",
  defaultValue: 25,
  sliderSize: "md",
  minValue: 0,
  maxValue: 100,
  isDisabled: false,
  isReadOnly: false,
  isLabelDisplayed: true,
  labelText: "Volume",
  labelFontSize: "14px",
  labelFontWeight: "medium",
  isShowValue: true,
  toolTip: "Adjust the value by dragging the slider",
  setSliderColor: (color) => set({ sliderColor: color }),
  setSliderSize: (size) => set({ sliderSize: size }),
  setSliderVariant: (variant) => set({ sliderVariant: variant }),
  setMinValue: (value) => set({ minValue: value }),
  setMaxValue: (value) => set({ maxValue: value }),
  setDefaultValue: (value) => set({ defaultValue: value }),
  setIsDisabled: (disabled) => set({ isDisabled: disabled }),
  setIsReadOnly: (readOnly) => set({ isReadOnly: readOnly }),
  setIsLabelDisplayed: (displayed) => set({ isLabelDisplayed: displayed }),
  setLabelText: (text) => set({ labelText: text }),
  setLabelTextColor: (color) => set({ labelTextColor: color }),
  setLabelPosition: (position) => set({ labelPosition: position }),
  setLabelFontSize: (size) => set({ labelFontSize: size }),
  setLabelFontWeight: (weight) => set({ labelFontWeight: weight }),
  setIsShowValue: (show) => set({ isShowValue: show }),
  setToolTip: (tooltip) => set({ toolTip: tooltip }),
}));

export default useSliderStore;
