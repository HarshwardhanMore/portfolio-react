import { create } from "zustand";

const useLeftMenuBarStore = create((set) => ({
  activeLeftMenuBarTab: 1,
  setActiveLeftMenuBarTab: (tabId: number) => set({ activeLeftMenuBarTab: tabId }),
}));

export { useLeftMenuBarStore };

