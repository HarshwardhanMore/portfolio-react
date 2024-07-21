import { create } from "zustand";

const useTabsStore = create((set) => ({
  tabs: [{ label: "Hello", key: "1" }],
  setTabs: (tabs: any) => set({ tabs }),
  addTab: (tab: any) => set((state: any) => ({ tabs: [...state.tabs, tab] })),
  removeTab: (tabKey: any) =>
    set((state: any) => ({
      tabs: state.tabs.filter((tab: any) => tab.key !== tabKey),
    })),
  activeTab: { label: "Hello", key: "1" },
  setActiveTab: (tab: any) => set({ activeTab: tab }),
  activeTabKey: "1",
  setActiveTabKey: (tabKey: any) => set({ activeTabKey: tabKey }),
}));

export default useTabsStore;
