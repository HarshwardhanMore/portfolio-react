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
      title: "node_modules",
      key: "/node_modules",
      icon: <Icon image="node_modules.svg"/>,
      children: [
        {
          title: "react",
          key: "/node_modules/react",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "react-dom",
          key: "/node_modules/react-dom",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "react-scripts",
          key: "/node_modules/react-scripts",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "@babel",
          key: "/node_modules/@babel",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "webpack",
          key: "/node_modules/webpack",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "webpack-dev-server",
          key: "/node_modules/webpack-dev-server",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "eslint",
          key: "/node_modules/eslint",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "jest",
          key: "/node_modules/jest",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "babel-loader",
          key: "/node_modules/babel-loader",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "style-loader",
          key: "/node_modules/style-loader",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "css-loader",
          key: "/node_modules/css-loader",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "file-loader",
          key: "/node_modules/file-loader",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "html-webpack-plugin",
          key: "/node_modules/html-webpack-plugin",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "@testing-library",
          key: "/node_modules/@testing-library",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "redux",
          key: "/node_modules/redux",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "react-redux",
          key: "/node_modules/react-redux",
          icon: <Icon image="folder.svg"/>,
        },
        {
          title: "redux-thunk",
          key: "/node_modules/redux-thunk",
          icon: <Icon image="folder.svg"/>,
        },
      ]
    },
    {
      title: "public",
      key: "/public",
      icon: <Icon image="public.svg"/>,
      children: [
        {
          title: "vite.svg",
          key: "/public/vite.svg",
          icon: <Icon image="svg.png"/>,
        },
      ],
    },
    {
      title: "src",
      key: "/src",
      icon: <Icon image="src.svg"/>,
      children: [
        {
          title: "assets",
          key: "/assets",
          icon: <Icon image="assets.svg"/>,
          children: [
            {
              title: "icons",
              key: "/assets/icons",
              icon: <Icon image="public.svg"/>,
              children: [
                {
                  title: "home.svg",
                  key: "/assets/home/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "user.svg",
                  key: "/assets/user/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "settings.svg",
                  key: "/assets/settings/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "search.svg",
                  key: "/assets/search/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "notifications.svg",
                  key: "/assets/notifications/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "messages.svg",
                  key: "/assets/messages/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "logout.svg",
                  key: "/assets/logout/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "profile.svg",
                  key: "/assets/profile/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "dashboard.svg",
                  key: "/assets/dashboard/svg",
                  icon: <Icon image="svg.png"/>,
                },
                {
                  title: "help.svg",
                  key: "/assets/help/svg",
                  icon: <Icon image="svg.png"/>,
                }
                // Add more icons as needed
              ],              
            },
            {
              title: "react.svg",
              key: "/assets/react.svg",
              icon: <Icon image="svg.png"/>,
            },
          ],
        },
        {
          title: "components",
          key: "/components",
          icon: <Icon image="folder.svg"/>,
          children: [
            {
              title: "Button",
              key: "/components/Button",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "PrimaryButton.tsx",
                  key: "/components/Button/PrimaryButton.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "SecondaryButton.tsx",
                  key: "/components/Button/SecondaryButton.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
            {
              title: "Card",
              key: "/components/Card",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "CardHeader.tsx",
                  key: "/components/Card/CardHeader.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "CardBody.tsx",
                  key: "/components/Card/CardBody.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "CardFooter.tsx",
                  key: "/components/Card/CardFooter.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
            {
              title: "Modal",
              key: "/components/Modal",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "ModalHeader.tsx",
                  key: "/components/Modal/ModalHeader.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "ModalBody.tsx",
                  key: "/components/Modal/ModalBody.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "ModalFooter.tsx",
                  key: "/components/Modal/ModalFooter.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
            {
              title: "Form",
              key: "/components/Form",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "Input.tsx",
                  key: "/components/Form/Input.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "Select.tsx",
                  key: "/components/Form/Select.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "Checkbox.tsx",
                  key: "/components/Form/Checkbox.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
            {
              title: "Navbar",
              key: "/components/Navbar",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "NavItem.tsx",
                  key: "/components/Navbar/NavItem.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "NavDropdown.tsx",
                  key: "/components/Navbar/NavDropdown.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
            {
              title: "Sidebar",
              key: "/components/Sidebar",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "SidebarItem.tsx",
                  key: "/components/Sidebar/SidebarItem.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "SidebarMenu.tsx",
                  key: "/components/Sidebar/SidebarMenu.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
            {
              title: "Footer",
              key: "/components/Footer",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "FooterLink.tsx",
                  key: "/components/Footer/FooterLink.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "FooterSocial.tsx",
                  key: "/components/Footer/FooterSocial.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
            {
              title: "Header",
              key: "/components/Header",
              icon: <Icon image="folder.svg"/>,
              children: [
                {
                  title: "HeaderLogo.tsx",
                  key: "/components/Header/HeaderLogo.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
                {
                  title: "HeaderNav.tsx",
                  key: "/components/Header/HeaderNav.tsx",
                  icon: <Icon image="typescript.png"/>,
                },
              ],
            },
          ],
        },
        {
          title: "state",
          key: "/state",
          icon: <Icon image="folder.svg"/>,
          children: [
            {
              title: "useLoading",
              key: "/state/useLoading.tsx",
              icon: <Icon image="typescript.png"/>,
            },
            {
              title: "useForm",
              key: "/state/useForm.tsx",
              icon: <Icon image="typescript.png"/>,
            },
          ]
        },
        {
          title: "App.css",
          key: "/App.css",
          icon: <Icon image="tailwind.png"/>,
        },
        {
          title: "App.tsx",
          key: "/App.tsx",
          icon: <Icon image="typescript.png"/>,
        },
        {
          title: "Index.css",
          key: "/Index.css",
          icon: <Icon image="tailwind.png"/>,
        },
        {
          title: "Index.tsx",
          key: "/Index.tsx",
          icon: <Icon image="typescript.png"/>,
        },
      ],
    },
    {
      title: ".gitignore",
      key: "/gitignore",
      icon: <Icon image="git.png"/>,
    },
    {
      title: "index.html",
      key: "/index.html",
      icon: <Icon image="html.png"/>,
    },
    {
      title: "package-lock.json",
      key: "/package-lock.json",
      icon: <Icon image="package_json.png"/>,
    },
    {
      title: "package.json",
      key: "/package.json",
      icon: <Icon image="package_json.png"/>,
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
