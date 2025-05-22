import { create } from "zustand";

interface ComponentStore {
  currentComponent: {
    id: string;
    name: string;
    iconName: string;
    disabled?: boolean;
  };
  setCurrentComponent: (component: {
    id: string;
    name: string;
    iconName: string;
    disabled?: boolean;
  }) => void;
}

const useComponentStore = create<ComponentStore>((set) => ({
  currentComponent: { id: "button", name: "Button", iconName: "MousePointer" },
  setCurrentComponent: (component) => set({ currentComponent: component }),
}));

export default useComponentStore;
