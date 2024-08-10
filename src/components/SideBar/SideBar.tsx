import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import useTabsStore from "../../state/tabsStore";
import Icon from "../Icon";

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
          icon: <Icon image="folder.svg"/>,
          
          children: [
            {
              title: "Hello.tsx",
              key: "/portfolio/src/hello.tsx",
              icon: <Icon image="typescript.png"/>,
            },
            {
              title: "Career.tsx",
              key: "/portfolio/src/career.tsx",
              icon: <Icon image="typescript.png"/>,
            },
            {
              title: "Contact-Me.tsx",
              key: "/portfolio/src/contact-me.tsx",
              icon: <Icon image="typescript.png"/>,
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
      setTabs([...tabs, { label: info.node.title, key: info.node.key, icon: info.node.icon }]);
    }
    setActiveTabKey(info.node.key);
  };

  return (
    <div className="w-96 h-full bg-background-dark border-r border-border flex flex-col">
      <div className="w-full p-4 text-sm font-light">
        <p className="uppercase">explorer</p>
      </div>
      <Tree
        showIcon
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={["/portfolio/src"]}
        onSelect={onSelect}
        treeData={treeData}
      />
      <div className="w-full px-2 py-1 text-xs font-semibold mt-auto border-t border-border">
        <p className="uppercase">{'> outline'}</p>
      </div>
    </div>
  );
};

export default SideMenuBar;
