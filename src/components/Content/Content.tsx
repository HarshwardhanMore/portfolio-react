import React from "react";
import Hello from "./Hello/Hello";
import ContactMe from "./Contact-Me/Contact-Me";
import Career from "./Career/Career";
import useTabsStore from "../../state/tabsStore";

type Props = {};

const data = [
  {
    key: "/portfolio/src/hello.tsx",
    component: <Hello />,
  },
  {
    key: "/portfolio/src/contact-me.tsx",
    component: <ContactMe />,
  },
  {
    key: "/portfolio/src/career.tsx",
    component: <Career />,
  },
];

const defaultContent = () => (
  <div className="flex-1 h-full flex items-center justify-center bg-background-lite">
    <img src="/src/assets/icons/vscode.svg" alt="" className="w-72 aspect-square mix-blend-color-burn bg-transparent opacity-30" />
  </div>
)

const Content = (props: any) => {
  const tabs = useTabsStore((state: any) => state.tabs);
  const activeKey = useTabsStore((state: any) => state.activeTab);
  return (
    <div className=" w-full h-full bg-background-lite border-b border-border">
      {data.map((item: any) => {
        return activeKey === item.key ? item.component : null;
      })}
      {!tabs.length && defaultContent()}
    </div>
  );
};

export default Content;
