import { create } from "zustand";

interface SpinnerState {
  spinnerDirection: string;
  setSpinnerDirection: (direction: string) => void;
  spinnerSize: string;
  setSpinnerSize: (size: string) => void;
  spinnerThickness: string;
  setSpinnerThickness: (thickness: string) => void;
  spinnerColor: string;
  setSpinnerColor: (color: string) => void;
  animationSpeed: string;
  setAnimationSpeed: (speed: string) => void;
  delayBeforeSpins: string;
  setDelayBeforeSpins: (delay: string) => void;
  isLabelDisplayed: boolean;
  setIsLabelDisplayed: (isDisplayed: boolean) => void;
  labelText: string;
  setLabelText: (text: string) => void;
  labelTextColor: string;
  setLabelTextColor: (color: string) => void;
  labelFontSize: string;
  setLabelFontSize: (size: string) => void;
  backgroundType: string;
  setBackgroundType: (type: string) => void;
  overlayColor: string;
  setOverlayColor: (color: string) => void;
}

const useSpinnerStore = create<SpinnerState>((set) => ({
  spinnerDirection: "clockwise",
  setSpinnerDirection: (direction) => set({ spinnerDirection: direction }),
  spinnerSize: "medium",
  setSpinnerSize: (size) => set({ spinnerSize: size }),
  spinnerThickness: "normal",
  setSpinnerThickness: (thickness) => set({ spinnerThickness: thickness }),
  spinnerColor: "#45556c",
  setSpinnerColor: (color) => set({ spinnerColor: color }),
  animationSpeed: "normal",
  setAnimationSpeed: (speed) => set({ animationSpeed: speed }),
  delayBeforeSpins: "0s",
  setDelayBeforeSpins: (delay) => set({ delayBeforeSpins: delay }),
  isLabelDisplayed: true,
  setIsLabelDisplayed: (isDisplayed) => set({ isLabelDisplayed: isDisplayed }),
  labelText: "Loading...",
  setLabelText: (text) => set({ labelText: text }),
  labelTextColor: "#e2e8f0",
  setLabelTextColor: (color) => set({ labelTextColor: color }),
  labelFontSize: "text-base",
  setLabelFontSize: (size) => set({ labelFontSize: size }),
  backgroundType: "none",
  setBackgroundType: (type) => set({ backgroundType: type }),
  overlayColor: "#000000",
  setOverlayColor: (color) => set({ overlayColor: color }),
}));

export default useSpinnerStore;
