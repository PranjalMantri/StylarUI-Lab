import { create } from "zustand";

interface ButtonStore {
  label: string;
  setLabel: (label: string) => void;
}

const useButtonStore = create<ButtonStore>((set) => ({
  label: "Sample Text",
  setLabel: (label: string) => {
    set({ label });
  },
}));

export default useButtonStore;
