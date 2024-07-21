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

const Content = (props: any) => {
  const activeKey = useTabsStore((state: any) => state.activeTab);
  return (
    <div className=" w-full h-full bg-background-lite border-b border-border">
      {data.map((item: any) => {
        return activeKey === item.key ? item.component : null;
      })}
    </div>
  );
};

export default Content;
