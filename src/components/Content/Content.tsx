import React from "react";
import Hello from "./Hello/Hello";
import ContactMe from "./Contact-Me/Contact-Me";
import Career from "./Career/Career";
import useTabsStore from "../../state/tabsStore";
import Slider from "../Slider/Slider";

type Props = {};

const TabContent: { [key: string]: JSX.Element } = {
  "/portfolio/src/hello.tsx": <Hello />,
  "/portfolio/src/contact-me.tsx": <ContactMe />,
  "/portfolio/src/career.tsx": <Career />,
  "slider.tsx": <Slider />,
};

const defaultContent = () => (
  <div className="flex-grow h-full flex items-center justify-center bg-background-lite">
    <img
      src="/src/assets/icons/vscode.svg"
      alt=""
      className="w-72 aspect-square mix-blend-color-burn bg-transparent opacity-30"
    />
  </div>
);

const Content = (props: any) => {
  const tabs = useTabsStore((state: any) => state.tabs);
  const activeKey = useTabsStore((state: any) => state.activeTabKey);

  console.log({ activeKey });
  console.log({ tab: TabContent[activeKey] });

  return (
    <div className="flex-grow h-full bg-background-lite border-b border-border">
      {TabContent[activeKey] || defaultContent()}
    </div>
  );
};

export default Content;
