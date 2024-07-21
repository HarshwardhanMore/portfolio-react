import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import useTabsStore from "../../state/tabsStore";

const SideMenuBar = (props: any) => {
  const tabs = useTabsStore((state: any) => state.tabs);
  const setTabs = useTabsStore((state: any) => state.setTabs);
  const setActiveTabKey = useTabsStore((state: any) => state.setActiveTabKey);

  const treeData: TreeDataNode[] = [
    {
      title: "Portfolio",
      key: "/portfolio/",
      children: [
        {
          title: "src",
          key: "/portfolio/src",
          children: [
            {
              title: "Hello.tsx",
              key: "/portfolio/src/hello.tsx",
            },
            {
              title: "Career.tsx",
              key: "/portfolio/src/career.tsx",
            },
            {
              title: "Contact-Me.tsx",
              key: "/portfolio/src/contact-me.tsx",
            },
          ],
        },
      ],
    },
  ];

  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
    const isAlreadyExists =
      tabs && tabs.some((item: any) => item.key === info.node.key);
    if (!isAlreadyExists) {
      setTabs([...tabs, { label: info.node.title, key: info.node.key }]);
    }
    setActiveTabKey(info.node.key);
  };

  return (
    <div className=" w-96 h-full bg-background-dark border-r border-border">
      <Tree
        showIcon
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={["/portfolio/src"]}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default SideMenuBar;
