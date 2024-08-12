import { Tabs } from "antd";
import React, { useRef } from "react";
import useTabsStore from "../../state/tabsStore";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const TabsBar = (props: any) => {
  const newTabIndex = useRef(0);
  const tabs = useTabsStore((state: any) => state.tabs);
  const activeTab = useTabsStore((state: any) => state.activeTab);
  const setActiveTab = useTabsStore((state: any) => state.setActiveTab);
  const setTabs = useTabsStore((state: any) => state.setTabs);
  const activeTabKey = useTabsStore((state: any) => state.activeTabKey);
  const setActiveTabKey = useTabsStore((state: any) => state.setActiveTabKey);

  console.log('TABS ::: ', tabs);

  const onChange = (newActiveKey: string) => {
    setActiveTabKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...tabs];
    newPanes.push({ label: "New Tab", key: newActiveKey });
    setTabs(newPanes);
    setActiveTabKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeTabKey;
    let lastIndex = -1;
    tabs.forEach((item: any, i: number) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = tabs.filter((item: any) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setTabs(newPanes);
    if (newPanes.length) {
      setActiveTabKey(newActiveKey);
    } else {
      setActiveTabKey("");
    }
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <div className="flex-grow h-10 bg-background-dark border-b border-border">
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeTabKey}
        onEdit={onEdit}
        items={tabs}
      />
    </div>
  );
};

export default TabsBar;
