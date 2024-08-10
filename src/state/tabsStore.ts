import { create } from "zustand";

const useTabsStore = create((set) => ({
  tabs: [],
  setTabs: (tabs: any) => set({ tabs }),
  addTab: (tab: any) => set((state: any) => ({ tabs: [...state.tabs, tab] })),
  removeTab: (tabKey: any) =>
    set((state: any) => ({
      tabs: state.tabs.filter((tab: any) => tab.key !== tabKey),
    })),
  activeTab: undefined,
  setActiveTab: (tab: any) => set({ activeTab: tab }),
  activeTabKey: "1",
  setActiveTabKey: (tabKey: any) => set({ activeTabKey: tabKey }),
}));

export default useTabsStore;
